import React, { useState } from 'react';
import { Check, Zap, ArrowRight } from 'lucide-react';

interface ScopeEstimatorProps {
  onApplyEstimate: (summary: string) => void;
}

export const ScopeEstimator: React.FC<ScopeEstimatorProps> = ({ onApplyEstimate }) => {
  const [projectType, setProjectType] = useState<'web' | 'ai' | 'brand' | 'full'>('web');
  const [timelineMode, setTimelineMode] = useState<'standard' | 'accelerated'>('standard');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    'subsecond',
    'whatsapp'
  ]);

  const addonOptions = [
    { id: 'subsecond', label: 'Sub-400ms Edge Performance & CWV 100/100', days: 4 },
    { id: 'whatsapp', label: 'WhatsApp & SMS Automated Customer Dispatch', days: 5 },
    { id: 'cms', label: 'Headless Bespoke Content Management Vault', days: 6 },
    { id: 'payment', label: 'Stripe / Razorpay Direct Checkout Pipeline', days: 4 },
    { id: 'analytics', label: 'Server-side Analytics & Conversion Telemetry', days: 3 }
  ];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Calculate sprint estimates
  const baseWeeks = {
    web: 4,
    ai: 5,
    brand: 3,
    full: 7
  }[projectType];

  const extraDays = selectedAddons.reduce((acc, id) => {
    const item = addonOptions.find((a) => a.id === id);
    return acc + (item ? item.days : 0);
  }, 0);

  const totalWeeks = Math.max(
    2,
    timelineMode === 'accelerated'
      ? Math.round((baseWeeks + extraDays / 7) * 0.75)
      : Math.round(baseWeeks + extraDays / 7)
  );

  const handleTransferToBrief = () => {
    const typeLabel = {
      web: 'Digital Flagship & Web Engineering',
      ai: 'Intelligent AI & Autonomous Workflows',
      brand: 'Bespoke Brand & Creative Direction',
      full: 'Complete Full-Stack Studio Commission'
    }[projectType];

    const addonsList = selectedAddons
      .map((id) => addonOptions.find((a) => a.id === id)?.label)
      .filter(Boolean)
      .join('; ');

    const summary = `Selected Scope: ${typeLabel} | Estimated Sprint: ~${totalWeeks} Weeks (${timelineMode}) | Key Addons: ${addonsList}`;
    onApplyEstimate(summary);

    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="estimator" className="py-24 bg-[#F4F0E8] border-b border-black/[0.08]">
      <div className="container-custom">
        <div className="max-w-3xl mb-12">
          <div className="font-mono text-xs text-[#1648E8] uppercase tracking-widest font-semibold mb-2">
            [ 06 // INTERACTIVE SCOPE ESTIMATOR ]
          </div>
          <h2 className="font-display text-[clamp(2rem,3.8vw,3.6rem)] font-bold text-[#0D0F14] tracking-tight leading-tight">
            Estimate Your Sprint. <br />
            <span className="font-serif-italic font-normal text-gray-500">
              Clear Math. Zero Surprises.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#4E5364] mt-3">
            Configure your project parameters to calculate sprint duration, recommended architecture, and deliverables.
          </p>
        </div>

        {/* The Calculator Card */}
        <div className="rounded-3xl bg-white border border-black/10 p-6 sm:p-10 lg:p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Controls (Left 7 Cols) */}
            <div className="lg:col-span-7 space-y-8">
              {/* 1. Project Type Selector */}
              <div>
                <label className="font-mono text-xs uppercase tracking-wider text-gray-500 block mb-3 font-semibold">
                  Step 1 // Primary Engagement Scope
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { id: 'web', title: 'Digital Flagship', desc: 'Bespoke Web App & Experience' },
                    { id: 'ai', title: 'AI & Automation', desc: 'Intelligent Workflows & Agents' },
                    { id: 'brand', title: 'Brand Identity', desc: 'Creative Direction & Design Tokens' },
                    { id: 'full', title: 'Full Stack Suite', desc: 'End-to-End Brand, Web & AI' }
                  ].map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setProjectType(t.id as any)}
                      className={`text-left p-4 rounded-2xl border transition-all ${
                        projectType === t.id
                          ? 'bg-[#0D0F14] text-white border-[#0D0F14] shadow-sm'
                          : 'bg-[#FAF8F5] text-[#0D0F14] border-black/8 hover:border-black/20'
                      }`}
                    >
                      <div className="font-display font-semibold text-sm">{t.title}</div>
                      <div className="text-[11px] opacity-75 mt-0.5">{t.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Technical Addons */}
              <div>
                <label className="font-mono text-xs uppercase tracking-wider text-gray-500 block mb-3 font-semibold">
                  Step 2 // High-Impact Capabilities to Include
                </label>
                <div className="space-y-2">
                  {addonOptions.map((addon) => {
                    const isChecked = selectedAddons.includes(addon.id);
                    return (
                      <button
                        key={addon.id}
                        onClick={() => toggleAddon(addon.id)}
                        className={`w-full text-left p-3.5 rounded-xl border flex items-center justify-between transition-all ${
                          isChecked
                            ? 'bg-blue-50/50 border-[#1648E8]/40 text-[#0D0F14]'
                            : 'bg-[#FAF8F5] border-black/5 text-gray-600 hover:border-black/15'
                        }`}
                      >
                        <span className="text-xs sm:text-sm font-medium">{addon.label}</span>
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center transition-all ${
                            isChecked ? 'bg-[#1648E8] text-white' : 'border border-black/20'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Sprint Velocity Mode */}
              <div>
                <label className="font-mono text-xs uppercase tracking-wider text-gray-500 block mb-3 font-semibold">
                  Step 3 // Sprint Velocity
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setTimelineMode('standard')}
                    className={`p-3.5 rounded-xl border text-left text-xs font-medium transition-all ${
                      timelineMode === 'standard'
                        ? 'bg-[#0D0F14] text-white border-[#0D0F14]'
                        : 'bg-[#FAF8F5] text-gray-700 border-black/8'
                    }`}
                  >
                    <div className="font-semibold text-sm">Standard Rhythm</div>
                    <div className="opacity-75 text-[11px]">Regular cadence & weekly reviews</div>
                  </button>

                  <button
                    onClick={() => setTimelineMode('accelerated')}
                    className={`p-3.5 rounded-xl border text-left text-xs font-medium transition-all ${
                      timelineMode === 'accelerated'
                        ? 'bg-[#1648E8] text-white border-[#1648E8]'
                        : 'bg-[#FAF8F5] text-gray-700 border-black/8'
                    }`}
                  >
                    <div className="font-semibold text-sm flex items-center gap-1">
                      <span>Accelerated Sprint</span>
                      <Zap className="w-3 h-3 text-amber-300 fill-amber-300" />
                    </div>
                    <div className="opacity-85 text-[11px]">Dedicated daily engineering bandwidth</div>
                  </button>
                </div>
              </div>
            </div>

            {/* Results Output Board (Right 5 Cols) */}
            <div className="lg:col-span-5 bg-[#0D0F14] text-white p-7 sm:p-8 rounded-3xl border border-white/10 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="font-mono text-xs text-gray-400">ESTIMATED PRODUCTION SPRINT</span>
                  <span className="font-mono text-xs text-emerald-400 font-bold bg-emerald-500/15 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                    CALCULATED
                  </span>
                </div>

                <div className="my-6">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-5xl sm:text-6xl font-extrabold tracking-tight text-white">
                      ~{totalWeeks}
                    </span>
                    <span className="font-mono text-lg text-gray-400">WEEKS</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    Fixed-scope dedicated sprint with weekly milestone check-ins and staging sandbox access.
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/10 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 font-mono">CODE ARCHITECTURE</span>
                    <span className="font-mono text-white">TypeScript + Vite / Next</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 font-mono">SPEED BENCHMARK</span>
                    <span className="font-mono text-emerald-400">Sub-400ms Edge</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 font-mono">SELECTED MODULES</span>
                    <span className="font-mono text-white">{selectedAddons.length + 1} Included</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 font-mono">DELIVERY TARGET</span>
                    <span className="font-mono text-[#3B82F6]">100% Source Ownership</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <button
                  onClick={handleTransferToBrief}
                  className="w-full btn-primary bg-white text-[#0D0F14] hover:bg-gray-100 text-sm py-3.5 flex items-center justify-center gap-2 font-semibold shadow-md"
                >
                  <span>Transfer Into Project Brief</span>
                  <ArrowRight className="w-4 h-4 text-[#1648E8]" />
                </button>
                <div className="text-center font-mono text-[10px] text-gray-500 mt-2.5">
                  Transfers directly into inquiry form below · Zero obligation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
