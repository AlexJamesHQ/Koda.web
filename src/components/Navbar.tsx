import React, { useState } from 'react';
import {
  Menu,
  X,
  Sparkles,
  Send
} from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { Language } from '../types';

interface NavbarProps {
  lang: Language;
}

export const Navbar: React.FC<NavbarProps> = ({ lang }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#screenshots', label: 'Screenshots', highlight: true },
    { href: '#features', label: 'Features' },
    { href: '#download', label: 'Download APK' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[10020] w-full bg-[#FFE600] border-b-[4px] border-black text-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="p-1 bg-white border-[3px] border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden group-hover:translate-x-[1px] group-hover:translate-y-[1px] group-hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
            <img src="https://github.com/user-attachments/assets/711c78ad-1c4c-4755-a5eb-1d5b03bef788" width="56" height="56" alt="Koda Logo" className="w-14 h-14 object-cover scale-[1.8] transform" referrerPolicy="no-referrer" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-sans font-black text-2xl uppercase tracking-tight text-black">Koda</span>
            </div>
            <div className="text-[10px] text-black font-mono uppercase font-bold tracking-wider">
              Material 3 Expressive
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-4">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className={`text-xs uppercase font-black tracking-wider transition-all flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border-[3px] border-black ${
                link.highlight
                  ? 'bg-[#CFFAFE] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-[#A5F3FC] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                  : 'bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-neutral-50 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
              }`}
            >
              {link.highlight && <Sparkles className="w-3.5 h-3.5 text-black" />}
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* GitHub Link */}
          <a
            href="https://github.com/Ivorisnoob/Koda"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-white border-[3px] border-black text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
            title="GitHub Repository"
          >
            <GithubIcon className="w-5 h-5" />
          </a>

          {/* Telegram Chat */}
          <a
            href="https://t.me/ivorisnoob_chat"
            target="_blank"
            rel="noreferrer"
            className="flex p-2.5 rounded-xl bg-white border-[3px] border-black text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
            title="Telegram Community"
          >
            <Send className="w-5 h-5 text-black" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-white border-[3px] border-black text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF6EE] border-t-[3px] border-black px-4 py-6 space-y-4 shadow-xl">
          {navLinks.filter(link => link.href !== '#download').map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-xs uppercase font-black tracking-wider text-black bg-white border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#download"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full py-3.5 rounded-xl bg-[#A855F7] text-white text-center text-xs uppercase font-black tracking-wider border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              Download APK
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
