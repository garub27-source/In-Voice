import React, { useState, useCallback, useEffect } from 'react';
import Header from './components/Header';
import VoiceSelector from './components/VoiceSelector';
import GenerateButton from './components/GenerateButton';
import AudioPlayer from './components/AudioPlayer';
import SpeedSlider from './components/SpeedSlider';
import { VOICES } from './constants';
import { generateSpeech } from './services/geminiService';
import { decodeBase64, pcmToWavBlob } from './utils/audioUtils';
import { censorText } from './utils/textUtils';

const App: React.FC = () => {
    const [text, setText] = useState<string>('Hello, welcome to InVoice! नमस्ते, इनवॉइस में आपका स्वागत है!');
    const [selectedVoice, setSelectedVoice] = useState<string>('Alex');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [audioSrc, setAudioSrc] = useState<string | null>(null);
    const [isCensorEnabled, setIsCensorEnabled] = useState<boolean>(false);
    const [speed, setSpeed] = useState<number>(1.0);

    useEffect(() => {
        // Clean up the object URL to avoid memory leaks when the component unmounts
        // or when a new audio source is generated.
        return () => {
            if (audioSrc) {
                URL.revokeObjectURL(audioSrc);
            }
        };
    }, [audioSrc]);

    const handleGenerateSpeech = useCallback(async () => {
        if (!text.trim()) {
            setError("Please enter some text to generate speech.");
            return;
        }
        setIsLoading(true);
        setError(null);
        setAudioSrc(null); // Also triggers cleanup of old URL via useEffect

        try {
            const textToProcess = isCensorEnabled ? censorText(text) : text;
            const base64Audio = await generateSpeech(textToProcess, selectedVoice);
            const pcmData = decodeBase64(base64Audio);
            const wavBlob = pcmToWavBlob(pcmData);
            const audioUrl = URL.createObjectURL(wavBlob);
            setAudioSrc(audioUrl);
        } catch (e: unknown) {
            const errorMessage = e instanceof Error ? e.message : "An unknown error occurred.";
            setError(errorMessage);
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    }, [text, selectedVoice, isCensorEnabled]);

    return (
        <div className="min-h-screen bg-base-100 text-base-content font-sans flex items-center justify-center p-4">
            <div className="w-full max-w-2xl mx-auto">
                <Header />
                <main className="bg-base-200/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-2xl border border-base-300 space-y-6">
                    <VoiceSelector
                        voices={VOICES}
                        selectedVoice={selectedVoice}
                        onSelectVoice={setSelectedVoice}
                        disabled={isLoading}
                    />
                    
                    <SpeedSlider 
                        speed={speed}
                        onSpeedChange={setSpeed}
                        disabled={isLoading}
                    />

                    <div className="w-full">
                         <label htmlFor="tts-input" className="block text-lg font-semibold text-base-content mb-3 text-center">Enter Text</label>
                        <textarea
                            id="tts-input"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Type anything you want to hear..."
                            className="w-full h-40 p-4 bg-base-100 border-2 border-base-300 rounded-lg focus:ring-2 focus:ring-brand-light focus:border-brand-light transition duration-200 resize-none placeholder-gray-500"
                            disabled={isLoading}
                        />
                    </div>

                    <div className="flex items-center justify-center">
                        <label htmlFor="censor-toggle" className={`flex items-center transition-opacity ${isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}>
                            <div className="relative">
                                <input
                                    type="checkbox"
                                    id="censor-toggle"
                                    className="sr-only peer"
                                    checked={isCensorEnabled}
                                    onChange={(e) => !isLoading && setIsCensorEnabled(e.target.checked)}
                                    disabled={isLoading}
                                />
                                <div className="w-14 h-8 rounded-full bg-base-300 peer-checked:bg-brand-primary transition-colors"></div>
                                <div className="absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition-transform peer-checked:translate-x-full"></div>
                            </div>
                            <div className="ml-3 text-gray-300 font-medium">
                                Censor Text
                            </div>
                        </label>
                    </div>

                    <div className="pt-2">
                        <GenerateButton
                            onClick={handleGenerateSpeech}
                            isLoading={isLoading}
                            disabled={!text.trim()}
                        />
                    </div>

                    {error && (
                        <div className="mt-4 p-3 bg-red-500/20 text-red-300 border border-red-500 rounded-lg text-center">
                            <p>{error}</p>
                        </div>
                    )}
                    
                    <AudioPlayer src={audioSrc} speed={speed} />
                </main>
                <footer className="text-center mt-8 text-gray-500 text-sm">
                    <p>Powered by Google Gemini API</p>
                </footer>
            </div>
        </div>
    );
};

export default App;
