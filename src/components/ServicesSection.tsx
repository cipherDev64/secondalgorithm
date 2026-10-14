import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Clock, Zap } from 'lucide-react';
import { SERVICES } from '../data/content';
import type { ServiceItem } from '../data/content';

interface ServicesSectionProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES[0].id);

  const activeService: ServiceItem =
    SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#FAF8F5] border-b border-black/[0.08]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 pb-8 border-b border-black/10">
          <div>
            <div className="font-mono text-xs text-[#1648E8] uppercase tracking-widest font-semibold mb-3">
              [ 03 // STUDIO CAPABILITIES ]
            </div>
            <h2 className="font-display text-[clamp(2.2rem,4.5vw,4.2rem)] font-bold text-[#0D0F14] leading-[1.05] tracking-tight">
              Crafted with Rigor. <br />
              <span className="font-serif-italic font-normal text-gray-500">
                Engineered to Convert.
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#4E5364] max-w-md leading-relaxed">
            Seven specialized capabilities spanning digital experiences, bespoke brand identities, 
            and intelligent systems designed to drive measurable business outcomes.
          </p>
        </div>

        {/* Desktop Split Layout: Master Index (Left) + Detail Spec Board (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Expressive Interactive Service Rows */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            {SERVICES.map((service) => {
              const isActive = service.id === selectedServiceId;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`text-left p-5 rounded-2xl transition-all duration-200 border flex items-center justify-between group relative overflow-hidden ${
                    isActive
                      ? 'bg-[#0D0F14] text-white border-[#0D0F14] shadow-lg translate-x-1.5'
                      : 'bg-white hover:bg-black/5 text-[#0D0F14] border-black/8 hover:border-black/20'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-mono text-xs font-bold ${
                        isActive ? 'text-[#FF5520]' : 'text-gray-400 group-hover:text-[#0D0F14]'
                      }`}
                    >
                      {service.num}
                    </span>
                    <div>
                      <div
                        className={`text-base font-semibold tracking-tight ${
                          isActive ? 'text-white' : 'text-[#0D0F14]'
                        }`}
                      >
                        {service.title}
                      </div>
                      <div
                        className={`text-xs mt-0.5 font-normal ${
                          isActive ? 'text-gray-400' : 'text-gray-500'
                        }`}
                      >
                        {service.subtitle}
                      </div>
                    </div>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform shrink-0 ${
                      isActive
                        ? 'bg-white/10 text-white'
                        : 'bg-black/5 text-gray-400 group-hover:text-[#0D0F14] group-hover:translate-x-0.5'
                    }`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: High-Fidelity Execution Spec Board */}
          <div className="lg:col-span-7 lg:sticky lg:top-28">
            <div className="rounded-3xl bg-white p-7 sm:p-10 border border-black/10 shadow-lg relative overflow-hidden">
              {/* Service Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-black/10">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm font-bold text-[#FF5520] bg-[#FF5520]/10 px-3 py-1 rounded-full border border-[#FF5520]/20">
                    SERVICE {activeService.num}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#525666]">
                    <Clock className="w-3.5 h-3.5 text-gray-400" />
                    <span>Timeline: {activeService.timeline}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {activeService.capabilities.map((cap, i) => (
                    <span
                      key={i}
                      className="font-mono text-[11px] bg-black/5 text-[#0D0F14] px-2.5 py-1 rounded-md"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>

              {/* Title & Description */}
              <div className="my-6">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0D0F14] tracking-tight">
                  {activeService.title}
                </h3>
                <p className="text-base text-[#4E5364] leading-relaxed mt-3">
                  {activeService.description}
                </p>
              </div>

              {/* Key Deliverables Grid */}
              <div className="my-6 p-6 rounded-2xl bg-[#FAF8F5] border border-black/5">
                <div className="font-mono text-xs uppercase tracking-wider font-semibold text-[#1648E8] mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Tangible Deliverables Included</span>
                </div>
                <ul className="space-y-3">
                  {activeService.deliverables.map((del, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#0D0F14]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1648E8] mt-2 shrink-0"></span>
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stack & Ideal Fit */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-black/10">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-gray-400 block mb-2">
                    // TECH & TOOLS
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeService.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="font-mono text-[11px] text-gray-600 bg-white border border-black/10 px-2 py-0.5 rounded shadow-2xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-gray-400 block mb-2">
                    // IDEAL FIT
                  </span>
                  <p className="text-xs text-[#525666] leading-relaxed">
                    {activeService.idealFor}
                  </p>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="mt-8 pt-6 border-t border-black/10 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-gray-500 font-mono">
                  Ready to commission this capability?
                </div>
                <button
                  onClick={() => {
                    if (onSelectService) onSelectService(activeService.title);
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="btn-primary text-xs py-2.5 px-5 flex items-center gap-2"
                >
                  <Zap className="w-3.5 h-3.5 text-[#FF5520]" />
                  <span>Add to Brief & Inquire</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
