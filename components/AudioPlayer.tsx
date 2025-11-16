import React from 'react';
import { DownloadIcon } from '../constants';

interface AudioPlayerProps {
    src: string | null;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
    if (!src) return null;

    return (
        <div className="w-full mt-4 space-y-3">
             <audio
                controls
                autoPlay
                src={src}
                className="w-full rounded-lg"
            >
                Your browser does not support the audio element.
            </audio>
            <a
                href={src}
                download="InVoice_speech.wav"
                className="w-full flex items-center justify-center gap-3 px-6 py-3 text-md font-semibold text-base-content bg-base-300 rounded-lg shadow-md hover:bg-brand-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-light focus:ring-offset-base-100 transition-all duration-300 ease-in-out"
                aria-label="Download generated speech"
            >
                <DownloadIcon className="w-5 h-5" />
                Download Audio
            </a>
        </div>
    );
};

export default AudioPlayer;
