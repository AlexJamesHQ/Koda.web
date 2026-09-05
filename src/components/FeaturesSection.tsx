import React from 'react';
import {
  Sparkles,
  ShieldCheck,
  Zap,
  Radio,
  Download,
  Film,
  Music,
  Users,
  Mic2,
  Layers
} from 'lucide-react';
import { Language } from '../types';
import { FEATURES } from '../data/kodaData';

interface FeaturesSectionProps {
  lang: Language;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ lang }) => {
  const iconMap: Record<string, React.ElementType> = {
    Radio,
    ShieldCheck,
    Sparkles,
    Layers,
    Video: Film,
    Download,
    FastForward: Zap,
    Mic2,
    Users
  };

  const cardColors = [
    'bg-[#FEF08A]', // Yellow-200
    'bg-[#CFFAFE]', // Cyan-100
    'bg-[#FBCFE8]', // Pink-200
    'bg-[#D9F99D]', // Lime-200
    'bg-[#FED7AA]', // Orange-200
    'bg-[#E9D5FF]', // Purple-200
    'bg-[#CCFBF1]', // Teal-100
    'bg-[#FFD2D2]', // Red-100
    'bg-[#E0F2FE]'  // Sky-100
  ];

  return (
    <div className="w-full space-y-12 text-left" id="features">
      {/* Bento Grid Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURES.map((feat, idx) => {
          const Icon = iconMap[feat.icon] || Sparkles;
          const bgCol = cardColors[idx % cardColors.length];
          return (
            <div
              key={idx}
              className={`p-6 rounded-2xl border-[3px] border-black text-black ${bgCol} shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 flex flex-col justify-between`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white border-[3px] border-black flex items-center justify-center text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-black uppercase px-2.5 py-1 rounded-lg bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-black">
                    {feat.tag}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-sans font-black uppercase tracking-tight text-black">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-800 font-mono leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t-2 border-black/10 flex items-center justify-between text-[10px] font-mono font-bold text-neutral-700">
                <span>Material 3 Native</span>
                <span className="text-black font-black uppercase">100% Free & Open Source</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
