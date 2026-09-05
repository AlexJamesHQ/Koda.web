import React from 'react';
import {
  Smartphone,
  ArrowRight
} from 'lucide-react';
import { Language } from '../types';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  return (
    <section className="relative pt-6 pb-6 lg:pt-8 lg:pb-8 overflow-hidden bg-[#FAF6EE]">
      {/* Dynamic Grid Overlay Pattern for Brutalist look */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
        {/* Animated App Icon in brutalist box */}
        <div className="flex flex-col items-center gap-4">
          <div className="inline-block p-3 bg-white border-4 border-black rounded-[32px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
            <img src="https://github.com/user-attachments/assets/711c78ad-1c4c-4755-a5eb-1d5b03bef788" width="180" height="180" alt="Koda Logo" className="w-44 h-44 object-cover scale-[1.8] transform" referrerPolicy="no-referrer" />
          </div>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-black uppercase text-black tracking-tighter leading-[1] [text-shadow:_4px_4px_0px_#FFE600]">
            A Modern Android Player <br />
            Powered by YouTube Music
          </h1>

          <div className="max-w-2xl mx-auto p-5 sm:p-6 bg-white border-[3px] border-black rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-left space-y-2">
            <div className="text-[10px] uppercase font-mono font-black text-purple-600 tracking-wider">
              // Technical Highlights
            </div>
            <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-mono">
              Constructed ground-up on Material 3 Expressive with 8 distinct player styles, dual music/video modes, offline MP4 downloads, and seamless Google/YouTube account sign-in (log in with your YouTube account, add multiple accounts, or use device-local profiles without an account).
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
