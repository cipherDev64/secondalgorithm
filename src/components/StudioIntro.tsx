import React from 'react';
import { Check, Sparkles, Code2, Compass } from 'lucide-react';
import { Reveal } from './motion';

export const StudioIntro: React.FC = () => {
  return (
    <section id="studio" className="py-24 sm:py-32 bg-[#F4F0E8] border-b border-black/[0.08]">
      <div className="container-custom">
        {/* Section Header with Monospace Flag */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 pb-8 border-b border-black/10">
          <div>
            <div className="font-mono text-xs text-[#1648E8] uppercase tracking-widest font-semibold mb-3">
              [ 02 // STUDIO PHILOSOPHY ]
            </div>
            <Reveal>
              <h2 className="font-display text-[clamp(2.2rem,4.5vw,4.2rem)] font-bold text-[#0D0F14] leading-[1.05] tracking-tight">
                The Anti-Template <br />
                <span className="font-serif-italic font-normal text-gray-600">
                  Manifesto.
                </span>
              </h2>
            </Reveal>
          </div>

          <p className="text-sm sm:text-base text-[#4E5364] max-w-md leading-relaxed">
            We reject the monotonous sea of generic SaaS landing pages and cookie-cutter agency templates. 
            Digital products should have pulse, identity, and undeniable character.
          </p>
        </div>

        {/* Large Editorial Manifesto Statement */}
        <div className="my-12 p-8 sm:p-12 rounded-3xl bg-[#0D0F14] text-white relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-4xl">
            <span className="font-mono text-xs text-[#FF5520] uppercase tracking-wider block mb-4">
              // STUDIO CORE THESIS
            </span>
            <p className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug tracking-tight text-white mb-6">
              "If your website looks identical to every other competitor in your industry, you have already conceded the game before the customer even reads your first sentence."
            </p>
            <div className="flex items-center gap-3 text-xs font-mono text-gray-400">
              <span className="w-2 h-2 rounded-full bg-[#1648E8]"></span>
              <span>second algorithm · CREATIVE CHARTER · BENGALURU</span>
            </div>
          </div>
        </div>

        {/* Three Asymmetric Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-16">
          {/* Pillar 01 */}
          <div className="p-8 rounded-3xl bg-white border border-black/8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#1648E8]/10 text-[#1648E8] flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <span className="font-mono text-xs text-gray-400 tracking-wider">
                PILLAR 01 // AESTHETICS
              </span>
              <h3 className="font-display text-xl font-bold text-[#0D0F14] tracking-tight mt-2 mb-3">
                Intentional Asymmetry & Fluid Type
              </h3>
              <p className="text-sm text-[#525666] leading-relaxed">
                Symmetry is comfortable; intentional asymmetry is unforgettable. We sculpt fluid typographic hierarchies that balance bold editorial scales with generous negative space.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-black/5 font-mono text-xs text-[#1648E8]">
              → Editorial Craftsmanship
            </div>
          </div>

          {/* Pillar 02 */}
          <div className="p-8 rounded-3xl bg-white border border-black/8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FF5520]/10 text-[#FF5520] flex items-center justify-center mb-6">
                <Code2 className="w-6 h-6" />
              </div>
              <span className="font-mono text-xs text-gray-400 tracking-wider">
                PILLAR 02 // ENGINEERING
              </span>
              <h3 className="font-display text-xl font-bold text-[#0D0F14] tracking-tight mt-2 mb-3">
                Code as a Physical Material
              </h3>
              <p className="text-sm text-[#525666] leading-relaxed">
                We write clean, semantic TypeScript and vanilla CSS tokens. No 4MB page-builder bundles. No laggy script cascades. Every interface loads in under 400 milliseconds globally.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-black/5 font-mono text-xs text-[#FF5520]">
              → Sub-second Edge Latency
            </div>
          </div>

          {/* Pillar 03 */}
          <div className="p-8 rounded-3xl bg-white border border-black/8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#8B5CF6]/10 text-[#8B5CF6] flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="font-mono text-xs text-gray-400 tracking-wider">
                PILLAR 03 // INTELLIGENCE
              </span>
              <h3 className="font-display text-xl font-bold text-[#0D0F14] tracking-tight mt-2 mb-3">
                Intelligent Automation Behind the Glass
              </h3>
              <p className="text-sm text-[#525666] leading-relaxed">
                AI is only valuable if it performs real work. We integrate automated appointment booking, real-time lead routing, and customer bots that eliminate operational drag.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-black/5 font-mono text-xs text-[#8B5CF6]">
              → Real Measurable Utility
            </div>
          </div>
        </div>

        {/* Contrast Table: second algorithm vs Generic Template Agencies */}
        <div className="mt-16 bg-white rounded-3xl p-6 sm:p-10 border border-black/10 shadow-sm">
          <div className="max-w-2xl mb-8">
            <span className="font-mono text-xs text-[#1648E8] uppercase tracking-wider font-semibold">
              // THE DIFFERENCE IN EXECUTION
            </span>
            <h3 className="font-display text-2xl font-bold text-[#0D0F14] tracking-tight mt-1">
              Why Bespoke Architecture Outperforms Templates
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-black/10 font-mono text-xs text-[#717684]">
                  <th className="py-3.5 pr-4">CAPABILITY & APPROACH</th>
                  <th className="py-3.5 px-4 text-[#1648E8] font-bold">second algorithm</th>
                  <th className="py-3.5 pl-4 text-gray-400">GENERIC TEMPLATE / SAAS AGENCIES</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                <tr>
                  <td className="py-4 pr-4 font-medium text-[#0D0F14]">Typography & Visual Art Direction</td>
                  <td className="py-4 px-4 text-[#0D0F14] font-medium flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Fluid, bespoke type scales & editorial layout</span>
                  </td>
                  <td className="py-4 pl-4 text-gray-500">Cookie-cutter Inter / Roboto sans cards</td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-medium text-[#0D0F14]">Page Load Speed & Bundle Weight</td>
                  <td className="py-4 px-4 text-[#0D0F14] font-medium flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Sub-400ms First Paint, 100/100 Core Web Vitals</span>
                  </td>
                  <td className="py-4 pl-4 text-gray-500">2.5s – 5.0s load with bloated plugins</td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-medium text-[#0D0F14]">Backend Automation & AI Systems</td>
                  <td className="py-4 px-4 text-[#0D0F14] font-medium flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Custom WhatsApp / CRM / Agentic Pipelines</span>
                  </td>
                  <td className="py-4 pl-4 text-gray-500">Disconnected contact forms sent to junk inbox</td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-medium text-[#0D0F14]">Ownership & Code Sovereignty</td>
                  <td className="py-4 px-4 text-[#0D0F14] font-medium flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>100% full source code ownership on GitHub</span>
                  </td>
                  <td className="py-4 pl-4 text-gray-500">Locked inside monthly proprietary builder subscriptions</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
