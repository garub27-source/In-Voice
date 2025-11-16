import React from 'react';
import type { Voice } from './types';

export const VOICES: Voice[] = [
  { id: 'Alex', name: 'Alex', gender: 'Male', description: 'Bilingual specialist (Hindi & English)' },
  { id: 'Kore', name: 'Kore', gender: 'Female', description: 'Clear, professional, multilingual' },
  { id: 'Puck', name: 'Puck', gender: 'Male', description: 'Warm and engaging' },
  { id: 'Charon', name: 'Charon', gender: 'Male', description: 'Deep and authoritative' },
  { id: 'Fenrir', name: 'Fenrir', gender: 'Male', description: 'Energetic and youthful' },
  { id: 'Zephyr', name: 'Zephyr', gender: 'Female', description: 'Calm and soothing' },
];

export const SpeakerIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.99999 15.5C8.27932 15.5 8.55018 15.4013 8.75253 15.2075L12.253 11.8858C12.4331 11.7144 12.538 11.4725 12.538 11.2201C12.538 10.9677 12.4331 10.7258 12.253 10.5544L8.75253 7.23272C8.32422 6.82431 7.64756 6.83733 7.23915 7.26564C6.83074 7.69395 6.84376 8.37061 7.27207 8.77902L9.69 11.08L4.69001 11.08C4.13773 11.08 3.69001 11.5277 3.69001 12.08C3.69001 12.6323 4.13773 13.08 4.69001 13.08L9.69 13.08L7.27207 15.379C6.84376 15.7874 6.83074 16.4641 7.23915 16.8924C7.44383 17.1133 7.71965 17.22 7.99999 17.22C8.26127 17.22 8.52254 17.1288 8.71719 16.9455L8.75253 16.9141L7.99999 15.5ZM14 4C13.4477 4 13 4.44772 13 5V19C13 19.5523 13.4477 20 14 20C14.5523 20 15 19.5523 15 19V5C15 4.44772 14.5523 4 14 4ZM17 7C16.4477 7 16 7.44772 16 8V16C16 16.5523 16.4477 17 17 17C17.5523 17 18 16.5523 18 16V8C18 7.44772 17.5523 7 17 7ZM20 10C19.4477 10 19 10.4477 19 11V13C19 13.5523 19.4477 14 20 14C20.5523 14 21 13.5523 21 13V11C21 10.4477 20.5523 10 20 10Z"></path>
    </svg>
);

export const DownloadIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 16l-6-6h4V4h4v6h4l-6 6zm-8 2h16v2H4v-2z"></path>
    </svg>
);