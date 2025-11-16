
import React from 'react';
import { SpeakerIcon } from '../constants';

const Header: React.FC = () => {
    return (
        <header className="text-center p-4 md:p-6">
            <div className="flex items-center justify-center gap-3 mb-2">
                <SpeakerIcon className="w-10 h-10 text-brand-primary" />
                <h1 className="text-4xl md:text-5xl font-bold text-base-content tracking-tight">
                    InVoice
                </h1>
            </div>
            <p className="text-lg text-gray-400">
                AI-Powered Text to Speech.
            </p>
        </header>
    );
};

export default Header;
