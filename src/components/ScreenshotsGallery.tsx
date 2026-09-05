import React, { useState, useEffect } from 'react';
import {
  Maximize2,
  X,
  Smartphone,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';
import { SCREENSHOTS } from '../data/kodaData';

interface ScreenshotsGalleryProps {
  lang: Language;
}

export const ScreenshotsGallery: React.FC<ScreenshotsGalleryProps> = ({ lang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('music');
  const [activeModalIdx, setActiveModalIdx] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (activeModalIdx !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeModalIdx]);

  const filteredScreenshots = SCREENSHOTS.filter((s) => s.category === selectedCategory);

  return (
    <section className="w-full space-y-10" id="screenshots">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b-[3px] border-black">
        <div className="space-y-3 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#FBCFE8] border-[3px] border-black text-black text-xs font-black uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <Smartphone className="w-4 h-4 text-black" />
            <span>Pixel 8 & Android 16 Visual Archive</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-black text-black uppercase tracking-tight">
            Every Screen in Pristine Detail
          </h2>
          <p className="text-neutral-800 text-xs sm:text-sm max-w-xl font-mono leading-relaxed bg-white border-2 border-black p-3.5 rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            Captured live on a Google Pixel 8 running Koda in Material 3 Expressive light and dynamic color theme. Click any frame to inspect full resolution.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2.5">
          {[
            { id: 'music', label: 'Music Mode' },
            { id: 'players', label: '8 Player Styles' },
            { id: 'video', label: '4K Video Mode' },
            { id: 'subscriptions', label: 'Feeds & Feeds' },
            { id: 'settings', label: 'Settings Hub' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs uppercase font-black tracking-wider border-[3px] border-black transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#FFE600] text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                  : 'bg-white text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-neutral-50 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Showcase with Real Screenshot Images & Framer Motion AnimatePresence */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 min-h-[400px]">
        <AnimatePresence mode="popLayout">
          {filteredScreenshots.map((item, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              key={item.id}
              onClick={() => setActiveModalIdx(idx)}
              className="group relative bg-white rounded-2xl border-[3px] border-black overflow-hidden cursor-pointer shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col justify-between"
            >
              {/* Real Screenshot Image Container */}
              <div className="relative aspect-[9/19] w-full bg-white overflow-hidden border-b-2 border-black rounded-t-[15px]">
                {!loadedImages[item.id] && (
                  <div className="absolute inset-0 bg-neutral-200 animate-pulse flex flex-col items-center justify-center p-3 space-y-2">
                    <div className="w-8 h-8 rounded-full bg-neutral-300 animate-pulse" />
                    <div className="w-3/4 h-2.5 bg-neutral-300 rounded" />
                    <div className="w-1/2 h-2 bg-neutral-300 rounded" />
                  </div>
                )}
                <img
                  src={item.url}
                  alt={item.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onLoad={() => setLoadedImages((prev) => ({ ...prev, [item.id]: true }))}
                  className={`w-full h-full object-cover object-top rounded-t-[15px] scale-[1.06] group-hover:scale-110 transition-all duration-500 ${
                    loadedImages[item.id] ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                
                {/* Hover Overlay with Icon Button */}
                <div className="absolute inset-0 bg-[#00000030] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2">
                  <div className="w-12 h-12 rounded-full bg-white border-[3px] border-black text-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] scale-90 group-hover:scale-100 transition-all">
                    <Maximize2 className="w-5 h-5 text-black" />
                  </div>
                </div>
              </div>

              {/* Item Title Footer */}
              <div className="p-3 bg-[#FAF8F5] space-y-0.5 text-left">
                <h4 className="text-xs font-black text-black uppercase truncate">
                  {item.title}
                </h4>
                <p className="text-[9px] text-neutral-600 font-mono truncate">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Full Resolution Modal Lightbox */}
      {activeModalIdx !== null && activeModalIdx < filteredScreenshots.length && (
        <div
          className="fixed inset-0 z-[10010] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 overflow-y-auto"
          onClick={() => setActiveModalIdx(null)}
        >
          {/* Lightbox Shell */}
          <div
            className="relative w-full max-w-lg flex flex-col items-center justify-center my-auto py-12"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <div className="w-full flex justify-end mb-3">
              <button
                onClick={() => setActiveModalIdx(null)}
                className="w-11 h-11 rounded-full bg-[#FFE600] text-black border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center transition-all cursor-pointer z-30"
                title="Close"
              >
                <X className="w-5 h-5 font-black text-black" />
              </button>
            </div>

            {/* Main Showcase Row (Desktop Side Buttons + Phone Frame) */}
            <div className="flex items-center justify-center gap-4 md:gap-6 w-full relative">
              {/* Desktop Prev Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveModalIdx((prev) =>
                    prev !== null && prev > 0 ? prev - 1 : filteredScreenshots.length - 1
                  );
                }}
                className="hidden md:flex w-14 h-14 rounded-full bg-white text-black border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] items-center justify-center transition-all cursor-pointer flex-shrink-0 z-20"
                title="Previous Image"
              >
                <ChevronLeft className="w-7 h-7 text-black font-black" />
              </button>

              {/* Large Image Showcase Frame */}
              <div className="relative w-full max-w-xs sm:max-w-sm aspect-[9/19] max-h-[75vh] flex items-center justify-center bg-white rounded-[26px] border-[4px] border-black overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <img
                  src={filteredScreenshots[activeModalIdx].url}
                  alt={filteredScreenshots[activeModalIdx].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top rounded-[24px] scale-[1.05]"
                />
              </div>

              {/* Desktop Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveModalIdx((prev) =>
                    prev !== null && prev < filteredScreenshots.length - 1 ? prev + 1 : 0
                  );
                }}
                className="hidden md:flex w-14 h-14 rounded-full bg-white text-black border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] items-center justify-center transition-all cursor-pointer flex-shrink-0 z-20"
                title="Next Image"
              >
                <ChevronRight className="w-7 h-7 text-black font-black" />
              </button>
            </div>

            {/* Bottom Controls / Mobile Navigation & Counter */}
            <div className="flex items-center justify-between w-full max-w-xs sm:max-w-sm mt-5 px-1 gap-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveModalIdx((prev) =>
                    prev !== null && prev > 0 ? prev - 1 : filteredScreenshots.length - 1
                  );
                }}
                className="px-4 py-2.5 rounded-xl bg-white text-black border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-sans font-black text-xs uppercase flex items-center gap-1 cursor-pointer transition-all md:hidden"
              >
                <ChevronLeft className="w-4 h-4 text-black font-black" />
                <span>Prev</span>
              </button>

              <span className="mx-auto px-4 py-2 rounded-xl bg-[#FFE600] text-black border-[3px] border-black font-mono font-black text-xs shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                {activeModalIdx + 1} / {filteredScreenshots.length}
              </span>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveModalIdx((prev) =>
                    prev !== null && prev < filteredScreenshots.length - 1 ? prev + 1 : 0
                  );
                }}
                className="px-4 py-2.5 rounded-xl bg-white text-black border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-sans font-black text-xs uppercase flex items-center gap-1 cursor-pointer transition-all md:hidden"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4 text-black font-black" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
