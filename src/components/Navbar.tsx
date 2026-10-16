import React, { useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { STUDIO_DATA } from '../data/content';
import { EASE_FLUID, SPRING_SOFT } from './motionTokens';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Only flips state when crossing the threshold, so scrolling doesn't re-render the nav.
  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 24));

  const navLinks = [
    { label: 'Studio', href: '#studio' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' }
  ];

  return (
    <>
      <motion.header
        className={`site-header fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/10 ${scrolled ? 'is-scrolled' : ''}`}
        initial={{ y: '-100%' }}
        animate={{ y: 0 }}
        transition={{ ...SPRING_SOFT, delay: 0.05 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
          {/* Left: Circular Logo Badge + Company Name RIGHT BESIDE IT */}
          <a
            href="#hero"
            className="flex items-center gap-3 group transition-transform duration-200 active:scale-98 shrink-0"
            aria-label="second algorithm home"
          >
            <div
              style={{ width: 38, height: 38, minWidth: 38, minHeight: 38 }}
              className="rounded-full bg-white border border-black/15 flex items-center justify-center p-1.5 shadow-xs overflow-hidden shrink-0 group-hover:border-black/30 transition-colors"
            >
              <img
                src="/assets/logo-dark.png"
                alt="second algorithm"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                loading="eager"
              />
            </div>
            <span className="font-display font-bold text-sm sm:text-base tracking-tight text-[#0D0F14] leading-none">
              second algorithm
            </span>
          </a>

          {/* Center: Clean Text Navigation Links (Visible on desktop) */}
          <nav
            aria-label="Main Navigation"
            className="navbar-nav-links text-sm font-medium text-[#444957]"
          >
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-black transition-colors py-1"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right: Solid Black Pill Button */}
          <div className="flex items-center gap-3">
            <a
              href={STUDIO_DATA.calLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full bg-[#0D0F14] hover:bg-black text-white text-xs font-mono font-bold tracking-wider uppercase transition-all shadow-xs shrink-0"
              aria-label="Book a Call with second algorithm"
            >
              BOOK A CALL
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="navbar-mobile-toggle p-2 rounded-lg bg-black/5 text-[#0D0F14] hover:bg-black/10 active:scale-95 transition-all shrink-0 cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu (Opaque, clean, solid) */}
        <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white border-t border-black/10 shadow-lg overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE_FLUID }}
          >
            <div className="flex flex-col gap-3 px-6 py-5">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-[#0D0F14] hover:text-[#1648E8] py-2 border-b border-black/5 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 flex items-center justify-between text-xs font-mono text-gray-500">
                <span>Bengaluru · Available Worldwide</span>
                <a href={`mailto:${STUDIO_DATA.email}`} className="text-[#1648E8] underline">
                  {STUDIO_DATA.email}
                </a>
              </div>
            </div>
          </motion.div>
        )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};
