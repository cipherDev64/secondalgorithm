import React from 'react';
import { ArrowUpRight, Calendar } from 'lucide-react';
import { STUDIO_DATA } from '../data/content';
import { Reveal } from './motion';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#FAF8F5] border-t border-black/10 relative overflow-hidden">
      {/* Subtle ambient gradient */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full pointer-events-none opacity-20 blur-[130px]"
        style={{
          background: 'radial-gradient(circle, rgba(22, 72, 232, 0.25) 0%, rgba(255, 85, 32, 0.12) 50%, transparent 70%)'
        }}
      />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 border border-black/10 text-xs font-mono text-[#1648E8] uppercase tracking-widest font-semibold mb-6">
            <span>[ INITIATE COLLABORATION · BENGALURU ]</span>
          </div>

          {/* Bold Centered Heading */}
          <Reveal>
            <h2 className="font-display text-[clamp(2.4rem,5vw,4.5rem)] font-bold text-[#0D0F14] leading-[1.08] tracking-tight mb-6">
              Ready to Discuss Business? <br />
              <span className="font-serif-italic font-normal text-[#1648E8]">
                Book a direct discovery call.
              </span>
            </h2>
          </Reveal>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#4E5364] max-w-xl leading-relaxed mb-10">
            No contact forms, no gatekeepers. Reserve a 30-minute direct session on our calendar with our studio leads in Bengaluru to map your architecture, timeline, and deliverables.
          </p>

          {/* Prominent Centered Call Booking Button with Generous Surrounding Size */}
          <div className="flex flex-col items-center justify-center gap-4">
            <a
              href={STUDIO_DATA.calLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-book-call-btn group"
              style={{ padding: '18px 48px', minHeight: '64px' }}
              aria-label="Book a Call with second algorithm on Cal.com"
            >
              <Calendar style={{ width: 20, height: 20, minWidth: 20 }} className="text-white/90 shrink-0" />
              <span style={{ margin: '0 4px', whiteSpace: 'nowrap' }}>BOOK A CALL ON CAL.COM</span>
              <ArrowUpRight style={{ width: 20, height: 20, minWidth: 20 }} className="shrink-0 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            {/* Quick Direct Email Link */}
            <p className="text-xs font-mono text-[#717684] mt-3">
              Prefer writing directly?{' '}
              <a
                href={`mailto:${STUDIO_DATA.email}`}
                className="text-[#1648E8] font-semibold underline hover:text-[#0D0F14] transition-colors"
              >
                {STUDIO_DATA.email}
              </a>
              {' '}· Bengaluru, India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
