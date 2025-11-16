import React from 'react';

interface SpeedSliderProps {
    speed: number;
    onSpeedChange: (speed: number) => void;
    disabled: boolean;
}

const SpeedSlider: React.FC<SpeedSliderProps> = ({ speed, onSpeedChange, disabled }) => {
    return (
        <div className="w-full">
            <label htmlFor="speed-slider" className="block text-lg font-semibold text-base-content mb-3 text-center">
                Speech Speed <span className="font-normal text-gray-400">({speed.toFixed(1)}x)</span>
            </label>
            <input
                id="speed-slider"
                type="range"
                min="0.5"
                max="2.0"
                step="0.1"
                value={speed}
                onChange={(e) => onSpeedChange(parseFloat(e.target.value))}
                disabled={disabled}
                className="w-full h-2 bg-base-300 rounded-lg appearance-none cursor-pointer accent-brand-primary disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Speech speed control"
            />
        </div>
    );
};

export default SpeedSlider;
