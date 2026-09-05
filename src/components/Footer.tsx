import React from 'react';
import {
  Send,
  ArrowUp,
  ExternalLink,
  Code,
  Download,
  AlertCircle,
  MessageSquare,
  BookOpen,
  Scale
} from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { Language } from '../types';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resources = [
    {
      title: 'Project Source Code',
      url: 'https://github.com/Ivorisnoob/Koda',
      icon: <Code className="w-4 h-4 text-black" />,
      desc: 'Main GitHub Repository'
    },
    {
      title: 'Releases',
      url: 'https://github.com/Ivorisnoob/Koda/releases',
      icon: <Download className="w-4 h-4 text-black" />,
      desc: 'Download Koda APK builds'
    },
    {
      title: 'Issue Tracker',
      url: 'https://github.com/Ivorisnoob/Koda/issues',
      icon: <AlertCircle className="w-4 h-4 text-black" />,
      desc: 'Report bugs or submit features'
    },
    {
      title: 'Community Discussions',
      url: 'https://github.com/Ivorisnoob/Koda/discussions',
      icon: <MessageSquare className="w-4 h-4 text-black" />,
      desc: 'Engage with other Koda users'
    },
    {
      title: 'Documentation',
      url: 'https://github.com/Ivorisnoob/Koda#readme',
      icon: <BookOpen className="w-4 h-4 text-black" />,
      desc: 'Architecture & code guides'
    },
    {
      title: 'License',
      url: 'https://github.com/Ivorisnoob/Koda/blob/main/LICENSE',
      icon: <Scale className="w-4 h-4 text-black" />,
      desc: 'GNU GPL v3.0 open source'
    }
  ];

  return (
    <footer className="w-full bg-[#FFE600] border-t-[4px] border-black pt-16 pb-12 text-black text-left shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Brand Col */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-1 bg-white border-2 border-black rounded-xl shadow-[2px_2px_0px_rgba(0,0,0,1)] overflow-hidden">
                <img src="https://github.com/user-attachments/assets/711c78ad-1c4c-4755-a5eb-1d5b03bef788" width="40" height="40" alt="Koda Logo" className="w-10 h-10 object-cover scale-[1.8] transform" referrerPolicy="no-referrer" />
              </div>
              <span className="text-xl font-sans font-black uppercase text-black tracking-tight">Koda</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-800 font-mono leading-relaxed max-w-sm">
              A modern Android music and video player powered by YouTube Music. Built ground-up on Material 3 Expressive, free & open source.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/Ivorisnoob/Koda"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4 text-black" />
              </a>
              <a
                href="https://t.me/ivorisnoob_chat"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                title="Telegram"
              >
                <Send className="w-4 h-4 text-black" />
              </a>
            </div>
          </div>

          {/* Official Resources */}
          <div className="lg:col-span-2 space-y-3 font-mono">
            <div className="font-black text-black uppercase tracking-wider text-[11px]">
              // Developer & Theme Resources
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {resources.map((res) => (
                <a
                  key={res.title}
                  href={res.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3.5 p-3 bg-white border-2 border-black rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all group"
                >
                  <div className="p-2 bg-[#FFE600] border-2 border-black rounded-lg shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 group-hover:bg-white transition-colors">
                    {res.icon}
                  </div>
                  <div className="min-w-0 flex-1 text-left">
                    <div className="text-xs font-black text-black truncate flex items-center gap-1">
                      <span>{res.title}</span>
                      <ExternalLink className="w-2.5 h-2.5 text-black/50 group-hover:text-black transition-colors flex-shrink-0" />
                    </div>
                    <div className="text-[10px] text-neutral-600 truncate">{res.desc}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Profiles Section */}
        <div className="pt-8 border-t-2 border-black/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <span className="text-[10px] font-mono uppercase font-black tracking-wider text-neutral-700">// Project Credits</span>
            <h3 className="text-sm font-sans font-black text-black uppercase">Crafted & Authored By</h3>
          </div>
          
          <div className="flex flex-wrap items-center gap-4">
            {/* Developer Profile (First) */}
            <a 
              href="https://github.com/Ivorisnoob" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-3 p-2 px-3 bg-white border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all group"
            >
              <img 
                src="https://avatars.githubusercontent.com/Ivorisnoob" 
                alt="ivorisnoob" 
                className="w-10 h-10 rounded-lg border-2 border-black shadow-[1px_1px_0px_rgba(0,0,0,1)]"
              />
              <div className="text-left font-mono">
                <div className="text-[10px] text-neutral-600 font-bold uppercase tracking-wider">Developer</div>
                <div className="text-xs font-black text-black uppercase group-hover:underline">ivorisnoob</div>
              </div>
            </a>

            {/* User Profile (Second - Project Partner / Helper) */}
            <a 
              href="https://github.com/AlexJamesHQ" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-3 p-2 px-3 bg-white border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all group"
            >
              <img 
                src="https://avatars.githubusercontent.com/AlexJamesHQ" 
                alt="Alex James" 
                className="w-10 h-10 rounded-lg border-2 border-black shadow-[1px_1px_0px_rgba(0,0,0,1)]"
              />
              <div className="text-left font-mono">
                <div className="text-[10px] text-neutral-600 font-bold uppercase tracking-wider">Project Partner</div>
                <div className="text-xs font-black text-black uppercase group-hover:underline">Alex James</div>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-2 border-black/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="bg-white/85 px-4 py-2.5 rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex flex-wrap items-center justify-center sm:justify-start gap-1.5 text-center sm:text-left font-bold">
            <span>Built with dedication on</span>
            <span className="px-2 py-0.5 bg-black text-[#FFE600] rounded font-black uppercase text-[10px]">Material 3</span>
            <span>theme by</span>
            <a href="https://github.com/Ivorisnoob" target="_blank" rel="noreferrer" className="underline font-black hover:opacity-80">ivorisnoob</a>
            <span>&amp;</span>
            <span className="font-black underline decoration-2 underline-offset-2">Alex James</span>.
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="px-4 py-2 rounded-xl bg-white border-2 border-black text-black font-black shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all flex items-center gap-1.5 cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
