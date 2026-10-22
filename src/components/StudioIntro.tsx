import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Reveal } from './motion';
import { EASE_FLUID } from './motionTokens';

const PILLARS = [
  {
    no: '01',
    kicker: 'AESTHETICS',
    title: 'Intentional Asymmetry & Fluid Type',
    body: 'Symmetry is comfortable; intentional asymmetry is unforgettable. We sculpt fluid typographic hierarchies that balance bold editorial scales with generous negative space.',
    tag: '→ Editorial Craftsmanship',
    color: '#1648E8'
  },
  {
    no: '02',
    kicker: 'ENGINEERING',
    title: 'Code as a Physical Material',
    body: 'We write clean, semantic TypeScript and vanilla CSS tokens. No 4MB page-builder bundles. No laggy script cascades. Every interface loads in under 400 milliseconds globally.',
    tag: '→ Sub-second Edge Latency',
    color: '#FF5520'
  },
  {
    no: '03',
    kicker: 'INTELLIGENCE',
    title: 'Intelligent Automation Behind the Glass',
    body: 'AI is only valuable if it performs real work. We integrate automated appointment booking, real-time lead routing, and customer bots that eliminate operational drag.',
    tag: '→ Real Measurable Utility',
    color: '#8B5CF6'
  }
];

const ROWS = [
  ['Typography & Visual Art Direction', 'Fluid, bespoke type scales & editorial layout', 'Cookie-cutter Inter / Roboto sans cards'],
  ['Page Load Speed & Bundle Weight', 'Sub-400ms First Paint, 100/100 Core Web Vitals', '2.5s – 5.0s load with bloated plugins'],
  ['Backend Automation & AI Systems', 'Custom WhatsApp / CRM / Agentic Pipelines', 'Disconnected contact forms sent to junk inbox'],
  ['Ownership & Code Sovereignty', '100% full source code ownership on GitHub', 'Locked inside monthly proprietary builder subscriptions']
];

const stagger = { hidden: {}, shown: { transition: { staggerChildren: 0.12 } } };

export const StudioIntro: React.FC = () => {
  const reduce = useReducedMotion();
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    shown: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE_FLUID } }
  };

  return (
    <section id="studio" className="manifesto">
      <div className="container-custom">
        {/* Header: oversized title left, short intro hung off a rule on the right */}
        <div className="manifesto-head">
          <div>
            <div className="font-mono text-xs text-[#1648E8] uppercase tracking-widest font-semibold mb-6">
              [ 03 // STUDIO PHILOSOPHY ]
            </div>
            <Reveal>
              <h2 className="manifesto-title font-display">
                The Anti-Template <br />
                <span className="font-serif-italic font-normal">Manifesto.</span>
              </h2>
            </Reveal>
          </div>
          <p className="manifesto-intro">
            We reject the monotonous sea of generic SaaS landing pages and cookie-cutter agency templates.
            Digital products should have pulse, identity, and undeniable character.
          </p>
        </div>
      </div>

      {/* Thesis: full-bleed near-black band, no card chrome */}
      <div className="manifesto-band">
        <div className="container-custom">
          <motion.div
            className="manifesto-band-inner"
            initial="hidden"
            whileInView="shown"
            viewport={{ once: true, amount: 0.4 }}
            variants={stagger}
          >
            <motion.span variants={item} className="font-mono text-xs text-[#FF5520] uppercase tracking-wider">
              // STUDIO CORE THESIS
            </motion.span>
            <motion.blockquote variants={item} className="manifesto-quote font-display">
              “If your website looks identical to every other competitor in your industry, you have already
              conceded the game before the customer even reads your first sentence.”
            </motion.blockquote>
            <motion.div variants={item} className="flex items-center gap-3 text-xs font-mono text-gray-400">
              <span className="w-2 h-2 rounded-full bg-[#1648E8]"></span>
              <span>second algorithm · CREATIVE CHARTER · BENGALURU</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="container-custom">
        {/* Pillars: ruled columns with staggered baseline offsets */}
        <motion.div
          className="manifesto-pillars"
          initial="hidden"
          whileInView="shown"
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger}
        >
          {PILLARS.map((p) => (
            <motion.article key={p.no} variants={item} className="manifesto-pillar">
              <span className="manifesto-pillar-no font-display" style={{ color: p.color }}>{p.no}</span>
              <span className="font-mono text-xs text-gray-500 tracking-wider">PILLAR {p.no} // {p.kicker}</span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0D0F14] tracking-tight mt-2 mb-3">
                {p.title}
              </h3>
              <p className="text-sm text-[#525666] leading-relaxed">{p.body}</p>
              <div className="font-mono text-xs mt-6" style={{ color: p.color }}>{p.tag}</div>
            </motion.article>
          ))}
        </motion.div>

        {/* Comparison: open ruled table */}
        <div className="manifesto-compare">
          <div className="manifesto-compare-head">
            <span className="font-mono text-xs text-[#1648E8] uppercase tracking-wider font-semibold">
              // THE DIFFERENCE IN EXECUTION
            </span>
            <h3 className="font-display text-[clamp(1.7rem,3.2vw,2.8rem)] font-bold text-[#0D0F14] tracking-tight leading-[1.08] mt-2">
              Why Bespoke Architecture Outperforms Templates
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-black/20 font-mono text-xs text-[#717684]">
                  <th className="py-3.5 pr-4">CAPABILITY & APPROACH</th>
                  <th className="py-3.5 px-4 text-[#1648E8] font-bold">second algorithm</th>
                  <th className="py-3.5 pl-4 text-gray-500">GENERIC TEMPLATE / SAAS AGENCIES</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/10">
                {ROWS.map(([cap, ours, theirs]) => (
                  <tr key={cap}>
                    <td className="py-5 pr-4 font-medium text-[#0D0F14]">{cap}</td>
                    <td className="py-5 px-4 text-[#0D0F14] font-medium">
                      <span className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{ours}</span>
                      </span>
                    </td>
                    <td className="py-5 pl-4 text-gray-500">{theirs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
