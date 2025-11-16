import React from 'react';
import type { Voice } from '../types';

interface VoiceSelectorProps {
    voices: Voice[];
    selectedVoice: string;
    onSelectVoice: (voiceId: string) => void;
    disabled: boolean;
}

const VoiceSelector: React.FC<VoiceSelectorProps> = ({ voices, selectedVoice, onSelectVoice, disabled }) => {
    return (
        <div className="w-full">
            <h2 className="text-lg font-semibold text-base-content mb-3 text-center">Select a Voice</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {voices.map((voice) => (
                    <button
                        key={voice.id}
                        onClick={() => onSelectVoice(voice.id)}
                        disabled={disabled}
                        className={`p-4 rounded-lg text-left transition-all duration-200 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-brand-light
                            ${selectedVoice === voice.id ? 'bg-brand-primary text-white shadow-lg scale-105' : 'bg-base-200 hover:bg-base-300'}
                            ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
                        `}
                    >
                        <div className="font-bold text-md">{voice.name}</div>
                        <div className={`text-xs ${selectedVoice === voice.id ? 'text-indigo-200' : 'text-gray-400'}`}>
                            {voice.gender} - {voice.description}
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default VoiceSelector;