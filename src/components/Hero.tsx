import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Calendar, Sparkles, Terminal, Layers, Cpu, Compass } from 'lucide-react';
import { STUDIO_DATA } from '../data/content';

interface HeroProps {
  onExploreWork: () => void;
  onOpenEstimator?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork }) => {
  const [activeTab, setActiveTab] = useState<'experiences' | 'ai' | 'brand' | 'automation'>('experiences');

  const previews = {
    experiences: {
      badge: "DIGITAL FLAGSHIPS",
      title: "Tactile, High-Emotion Web Interfaces",
      desc: "Sub-second load times, fluid typography, and bespoke micro-interactions built without bloated third-party page builders.",
      tags: ["TypeScript", "Fluid CSS", "Vercel Edge", "Sub-400ms"],
      metric: "99/100 Perf",
      accent: "#1648E8"
    },
    ai: {
      badge: "INTELLIGENT WORKFLOWS",
      title: "Multimodal AI That Earns Its Cost",
      desc: "Autonomous client intake, semantic search, and deterministic agent pipelines that eliminate daily operational drag.",
      tags: ["Vector Search", "FastAPI", "Vercel AI SDK", "Python"],
      metric: "85% Drag Cut",
      accent: "#8B5CF6"
    },
    brand: {
      badge: "CREATIVE DIRECTION",
      title: "Art-Directed Visual Systems & Tokens",
      desc: "Editorial typography pairings, distinctive color architecture, and digital design systems that make brands unforgettable.",
      tags: ["Design Tokens", "Custom Types", "Styleguide", "WCAG AA"],
      metric: "100% Bespoke",
      accent: "#FF5520"
    },
    automation: {
      badge: "OPERATIONAL BRIDGES",
      title: "Instant 30s Lead & Client Dispatch",
      desc: "WhatsApp Business API, automated appointment calendars, and self-reconciling Stripe invoicing pipelines.",
      tags: ["WhatsApp Cloud", "Stripe API", "Webhooks", "Zero-Wait"],
      metric: "30s Response",
      accent: "#10B981"
    }
  };

  const currentPreview = previews[activeTab];

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-[#FAF8F5] overflow-hidden bg-subtle-grid border-b border-black/[0.06]"
    >
      {/* Ambient Radial Studio Glow */}
      <div
        className="absolute top-1/4 right-5 w-[500px] h-[500px] rounded-full pointer-events-none opacity-40 blur-[130px]"
        style={{
          background: 'radial-gradient(circle, rgba(22, 72, 232, 0.15) 0%, rgba(255, 85, 32, 0.08) 50%, transparent 70%)'
        }}
      />

      <div className="container-custom relative z-10">
        {/* Eyebrow & Status Flag */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-black/5 border border-black/10 text-[#0D0F14] text-xs font-mono tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-[#1648E8]"></span>
            <span>CREATIVE TECHNOLOGY STUDIO · BENGALURU & WORLDWIDE</span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-xs font-mono text-[#717684]">
            <span>LOC: 12.97° N · BENGALURU</span>
            <span>•</span>
            <span className="text-emerald-700 font-medium">SYSTEMS ONLINE</span>
          </div>
        </div>

        {/* Asymmetric Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Left Column: Oversized Editorial Statement */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            <h1 className="font-display text-[clamp(2.2rem,5.8vw,5.8rem)] leading-[0.98] tracking-[-0.03em] text-[#0D0F14] font-bold mb-8">
              CODE WITH GRAVITY. <br className="hidden sm:inline" />
              INTERFACES WITH <br />
              <span className="font-serif-italic font-normal text-[#1648E8] relative inline-block">
                pulse.
                <span className="absolute bottom-1.5 left-0 w-full h-[3px] bg-[#1648E8]/20 rounded-full"></span>
              </span>
            </h1>

            <p className="text-[#4E5364] text-[clamp(1.1rem,1.5vw,1.35rem)] leading-relaxed max-w-xl mb-10 font-normal">
              {STUDIO_DATA.leadParagraph}
            </p>

            {/* Dual CTAs: Primary Book a Call + Secondary Explore Work */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={STUDIO_DATA.calLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group text-sm py-3.5 px-6 shadow-md flex items-center gap-2"
                aria-label="Book a Call with Second Algorithm"
              >
                <Calendar className="w-4 h-4 text-white/90" />
                <span>Book a Call</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <button
                onClick={onExploreWork}
                className="btn-secondary text-sm py-3.5 px-6 flex items-center gap-2"
              >
                <span>Explore Selected Work</span>
                <ArrowDown className="w-4 h-4 text-[#1648E8]" />
              </button>
            </div>

            {/* Metric Credentials (Ziiro / Capture influence) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-12 mt-12 border-t border-black/10">
              {STUDIO_DATA.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-display text-2xl sm:text-3xl font-bold text-[#0D0F14] tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs font-semibold text-[#0D0F14] mt-0.5">
                    {stat.label}
                  </span>
                  <span className="text-[11px] font-mono text-[#717684]">
                    {stat.sub}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Capture-style Interactive Studio Console Card */}
          <div className="lg:col-span-5 lg:pl-4">
            <div className="rounded-3xl bg-[#0D0F14] text-white p-6 sm:p-7 border border-white/10 shadow-2xl relative overflow-hidden">
              {/* Subtle top glare */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

              {/* Console Header */}
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5520]/80"></div>
                  <div className="w-3 h-3 rounded-full bg-[#F59E0B]/80"></div>
                  <div className="w-3 h-3 rounded-full bg-[#10B981]/80"></div>
                  <span className="font-mono text-xs text-gray-400 ml-2 tracking-wide">
                    studio_engine.ts
                  </span>
                </div>

                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-gray-300">
                  <Terminal className="w-3 h-3 text-[#1648E8]" />
                  <span>ACTIVE</span>
                </div>
              </div>

              {/* Capability Switcher Tabs */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                <button
                  onClick={() => setActiveTab('experiences')}
                  className={`flex items-center gap-2 p-2.5 rounded-xl text-left transition-all text-xs font-medium border ${
                    activeTab === 'experiences'
                      ? 'bg-white/15 border-white/30 text-white shadow-sm'
                      : 'bg-white/5 border-transparent text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5 text-[#3B82F6]" />
                  <span>01. Web Exp</span>
                </button>

                <button
                  onClick={() => setActiveTab('ai')}
                  className={`flex items-center gap-2 p-2.5 rounded-xl text-left transition-all text-xs font-medium border ${
                    activeTab === 'ai'
                      ? 'bg-white/15 border-white/30 text-white shadow-sm'
                      : 'bg-white/5 border-transparent text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5 text-[#8B5CF6]" />
                  <span>02. AI Agents</span>
                </button>

                <button
                  onClick={() => setActiveTab('brand')}
                  className={`flex items-center gap-2 p-2.5 rounded-xl text-left transition-all text-xs font-medium border ${
                    activeTab === 'brand'
                      ? 'bg-white/15 border-white/30 text-white shadow-sm'
                      : 'bg-white/5 border-transparent text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Compass className="w-3.5 h-3.5 text-[#FF5520]" />
                  <span>03. Direction</span>
                </button>

                <button
                  onClick={() => setActiveTab('automation')}
                  className={`flex items-center gap-2 p-2.5 rounded-xl text-left transition-all text-xs font-medium border ${
                    activeTab === 'automation'
                      ? 'bg-white/15 border-white/30 text-white shadow-sm'
                      : 'bg-white/5 border-transparent text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>04. Pipelines</span>
                </button>
              </div>

              {/* Dynamic Interactive Preview Box */}
              <div className="bg-[#151720] rounded-2xl p-5 border border-white/10 flex flex-col gap-3 min-h-[200px] justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md"
                      style={{
                        backgroundColor: `${currentPreview.accent}20`,
                        color: currentPreview.accent
                      }}
                    >
                      {currentPreview.badge}
                    </span>
                    <span className="font-mono text-xs text-emerald-400 font-medium">
                      {currentPreview.metric}
                    </span>
                  </div>

                  <h2 className="text-base font-semibold text-white tracking-tight">
                    {currentPreview.title}
                  </h2>
                  <p className="text-xs text-gray-300 leading-relaxed mt-1.5">
                    {currentPreview.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex flex-wrap gap-1.5 items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {currentPreview.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="font-mono text-[10px] text-gray-400 bg-white/5 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#services"
                    className="text-[11px] text-gray-400 hover:text-white flex items-center gap-1 font-mono hover:underline"
                  >
                    <span>View Spec</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Real-time Studio Telemetry Footer */}
              <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/10 text-[11px] font-mono text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>BUILD PIPELINE: READY</span>
                </div>
                <span>LATENCY: 14MS</span>
              </div>
            </div>

            {/* Supporting Micro-Card */}
            <div className="mt-4 p-4 rounded-2xl bg-white/70 border border-black/10 backdrop-blur-sm flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FF5520]/10 text-[#FF5520] flex items-center justify-center font-bold text-xs">
                  01
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#0D0F14]">
                    Next Client Intake Window
                  </div>
                  <div className="text-[11px] text-[#717684]">
                    Now Accepting New Commissions
                  </div>
                </div>
              </div>
              <a
                href={STUDIO_DATA.calLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#1648E8] hover:underline flex items-center gap-1"
              >
                <span>Book Call</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
