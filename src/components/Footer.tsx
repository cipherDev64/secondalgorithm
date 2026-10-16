import React, { useState, useEffect } from 'react';
import { ArrowUp, ArrowUpRight, Calendar, Globe, Mail } from 'lucide-react';
import { STUDIO_DATA } from '../data/content';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="site-footer select-none"
      style={{ paddingTop: '6rem', paddingBottom: '4.5rem' }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Main 4-Column Layout using dedicated site-footer-grid */}
        <div className="site-footer-grid pb-16 border-b border-white/10">
          {/* Column 1: Brand & Identity & Bengaluru Clock */}
          <div className="flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div
                  style={{ width: 42, height: 42, minWidth: 42, minHeight: 42 }}
                  className="rounded-full bg-white flex items-center justify-center p-2 shadow-sm overflow-hidden shrink-0"
                >
                  <img
                    src="/assets/logo-dark.png"
                    alt="second algorithm"
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </div>
                <div>
                  <span className="font-display font-bold text-base tracking-tight text-white block leading-none">
                    second algorithm
                  </span>
                  <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest mt-1 block">
                    CREATIVE TECHNOLOGY · BENGALURU
                  </span>
                </div>
              </div>

              <p className="text-sm text-gray-400 max-w-sm leading-relaxed pt-1">
                Ideas deserve better than ordinary. An independent design and engineering studio in Bengaluru building websites, brand identities and the systems behind them.
              </p>
            </div>

            {/* Bengaluru Real-time Clock */}
            <div>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-gray-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>BENGALURU: {time || '12:00:00 PM'} IST</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <span className="font-mono text-xs text-gray-400 uppercase tracking-widest block font-semibold">
              Navigation
            </span>
            <div className="flex flex-col gap-3 text-sm font-mono">
              <a href="#hero" className="text-gray-400 hover:text-white transition-colors py-0.5">
                Overview
              </a>
              <a href="#studio" className="text-gray-400 hover:text-white transition-colors py-0.5">
                Studio
              </a>
              <a href="#services" className="text-gray-400 hover:text-white transition-colors py-0.5">
                Services
              </a>
              <a href="#work" className="text-gray-400 hover:text-white transition-colors py-0.5">
                Selected Work
              </a>
              <a href="#process" className="text-gray-400 hover:text-white transition-colors py-0.5">
                Our Process
              </a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors py-0.5">
                Discuss Business
              </a>
            </div>
          </div>

          {/* Column 3: Official Channels — Clean Monochrome, NO Blue Box, NO Bullets */}
          <div className="space-y-4">
            <span className="font-mono text-xs text-gray-400 uppercase tracking-widest block font-semibold">
              Official Channels
            </span>

            <div className="flex flex-col gap-3.5 text-sm font-mono">
              {/* Book a Call: Clean link with NO blue highlight box */}
              <a
                href={STUDIO_DATA.calLink}
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-[#3B82F6] flex items-center justify-between py-1 transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <Calendar className="w-4 h-4 text-gray-400 group-hover:text-[#3B82F6] transition-colors shrink-0" />
                  <span className="font-medium whitespace-nowrap">Book a Call // cal.com</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
              </a>

              {/* Website */}
              <a
                href={STUDIO_DATA.website}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white flex items-center justify-between py-1 transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <Globe className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors shrink-0" />
                  <span className="whitespace-nowrap">Website // secondalgorithm</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
              </a>

              {/* X / Twitter */}
              <a
                href={STUDIO_DATA.twitter}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white flex items-center justify-between py-1 transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-4 h-4 flex items-center justify-center font-bold text-xs text-gray-500 group-hover:text-white transition-colors shrink-0">
                    𝕏
                  </span>
                  <span className="whitespace-nowrap">X // @secondalgorithm</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
              </a>

              {/* Instagram */}
              <a
                href={STUDIO_DATA.instagram}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white flex items-center justify-between py-1 transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-gray-500 group-hover:text-[#E11D48] transition-colors shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                  <span className="whitespace-nowrap">Instagram // @secondalgorithm</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
              </a>

              {/* Email */}
              <a
                href={`mailto:${STUDIO_DATA.email}`}
                className="text-gray-400 hover:text-white flex items-center justify-between py-1 transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors shrink-0" />
                  <span className="whitespace-nowrap">Email // {STUDIO_DATA.email}</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
              </a>
            </div>
          </div>

          {/* Column 4: Studio Base (Bengaluru) & Response SLA */}
          <div className="space-y-4">
            <span className="font-mono text-xs text-gray-400 uppercase tracking-widest block font-semibold">
              Studio Base
            </span>
            <div className="space-y-4 text-xs font-mono text-gray-400">
              <div>
                <span className="text-white block font-semibold mb-1">Location</span>
                <span className="text-gray-300">Bengaluru, India</span>
                <span className="text-gray-500 block text-[11px] mt-0.5">Available Worldwide</span>
              </div>
              <div>
                <span className="text-white block font-semibold mb-1">Timezone</span>
                <span className="text-gray-300">Asia/Kolkata (IST)</span>
              </div>
              <div>
                <span className="text-white block font-semibold mb-1">Response SLA</span>
                <span className="text-emerald-400 font-semibold">&lt; 4 Hours</span>
                <span className="text-gray-500 block text-[11px] mt-0.5">Monday – Friday</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip: Legal & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-gray-500">
          <div className="flex flex-wrap items-center gap-3 sm:gap-5">
            <span className="text-gray-300">© {new Date().getFullYear()} second algorithm</span>
            <span>·</span>
            <span className="text-gray-400">Bengaluru, India</span>
            <span>·</span>
            <a
              href="https://secondalgorithm.space"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              secondalgorithm.space
            </a>
            <span>·</span>
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white underline cursor-pointer transition-colors"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-white underline cursor-pointer transition-colors"
            >
              Terms of Engagement
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-white/20 cursor-pointer text-xs font-mono shrink-0"
            aria-label="Back to top of page"
          >
            <span>TOP OF EXPERIENCE</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
