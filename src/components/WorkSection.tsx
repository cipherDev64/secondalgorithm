import React, { useState } from 'react';
import { ArrowUpRight, Check, Smartphone, Monitor, Terminal, Building2, QrCode } from 'lucide-react';
import { PROJECTS } from '../data/content';
import type { ProjectItem } from '../data/content';

interface WorkSectionProps {
  onOpenCaseStudy: (project: ProjectItem) => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({ onOpenCaseStudy }) => {
  const [activeTabByProject, setActiveTabByProject] = useState<{ [id: string]: 'preview' | 'architecture' | 'impact' }>({
    'urban-premium-coworks': 'preview',
    'nailashes': 'preview',
    'nsalon': 'preview',
    'second-algo-lab': 'preview'
  });

  const setProjectTab = (id: string, tab: 'preview' | 'architecture' | 'impact') => {
    setActiveTabByProject((prev) => ({ ...prev, [id]: tab }));
  };

  return (
    <section id="work" className="py-24 sm:py-32 bg-[#0C0D11] text-white relative overflow-hidden bg-dark-grid">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#1648E8]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#FF5520]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-20 pb-8 border-b border-white/10">
          <div>
            <div className="font-mono text-xs text-[#FF5520] uppercase tracking-widest font-semibold mb-3">
              [ 04 // SELECTED COMMISSIONS ]
            </div>
            <h2 className="font-display text-[clamp(2.2rem,4.5vw,4.5rem)] font-bold text-white leading-[1.05] tracking-tight">
              Selected Work. <br />
              <span className="font-serif-italic font-normal text-gray-400">
                Show, Do Not Just Describe.
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-gray-400 max-w-md leading-relaxed">
            Real client platforms and studio systems engineered for high performance, 
            tangible conversions, and unmistakable visual identity.
          </p>
        </div>

        {/* Project Presentations List */}
        <div className="flex flex-col gap-24">
          {PROJECTS.map((project, index) => {
            const currentTab = activeTabByProject[project.id] || 'preview';
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className="rounded-3xl bg-[#14161F] border border-white/10 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden"
              >
                {/* Project Header Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#FF5520] bg-[#FF5520]/15 px-3 py-1 rounded-full border border-[#FF5520]/30">
                      0{index + 1} // CASE STUDY
                    </span>
                    <span className="font-mono text-xs text-gray-400">
                      {project.year}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                      {project.previewDetails.status}
                    </span>
                    <span className="font-mono text-xs text-gray-400 hidden sm:inline">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Main Asymmetric Grid */}
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  {/* Text & Content Column */}
                  <div className={`lg:col-span-5 flex flex-col justify-between ${isEven ? '' : 'lg:order-2'}`}>
                    <div>
                      <h3 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight mb-3">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-300 font-medium mb-4">
                        {project.tagline}
                      </p>

                      {/* Interactive Tab Switcher on the Card */}
                      <div className="flex items-center gap-1.5 p-1 bg-white/5 rounded-xl border border-white/10 mb-6 w-max">
                        <button
                          onClick={() => setProjectTab(project.id, 'preview')}
                          className={`px-3 py-1 text-xs font-mono rounded-lg transition-all ${
                            currentTab === 'preview'
                              ? 'bg-white/15 text-white font-semibold'
                              : 'text-gray-400 hover:text-white'
                          }`}
                        >
                          Interface View
                        </button>
                        <button
                          onClick={() => setProjectTab(project.id, 'architecture')}
                          className={`px-3 py-1 text-xs font-mono rounded-lg transition-all ${
                            currentTab === 'architecture'
                              ? 'bg-white/15 text-white font-semibold'
                              : 'text-gray-400 hover:text-white'
                          }`}
                        >
                          Challenge & Scope
                        </button>
                        <button
                          onClick={() => setProjectTab(project.id, 'impact')}
                          className={`px-3 py-1 text-xs font-mono rounded-lg transition-all ${
                            currentTab === 'impact'
                              ? 'bg-white/15 text-white font-semibold'
                              : 'text-gray-400 hover:text-white'
                          }`}
                        >
                          Metrics & Stack
                        </button>
                      </div>

                      {/* Tab Content 1: Overview */}
                      {currentTab === 'preview' && (
                        <div className="space-y-4">
                          <p className="text-sm text-gray-400 leading-relaxed">
                            {project.description}
                          </p>
                          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs italic text-gray-300">
                            "{project.featuredQuote}"
                          </div>
                        </div>
                      )}

                      {/* Tab Content 2: Architecture */}
                      {currentTab === 'architecture' && (
                        <div className="space-y-4 text-xs sm:text-sm">
                          <div>
                            <span className="font-mono text-[11px] text-[#FF5520] uppercase font-bold block mb-1">
                              The Friction:
                            </span>
                            <p className="text-gray-300 leading-relaxed">
                              {project.challenge}
                            </p>
                          </div>
                          <div>
                            <span className="font-mono text-[11px] text-emerald-400 uppercase font-bold block mb-1">
                              Our Engineering:
                            </span>
                            <p className="text-gray-300 leading-relaxed">
                              {project.solution}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Tab Content 3: Impact */}
                      {currentTab === 'impact' && (
                        <div className="space-y-4">
                          <div className="grid grid-cols-3 gap-2">
                            {project.metrics.map((m, i) => (
                              <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                                <div className="font-display text-lg font-bold text-white">{m.value}</div>
                                <div className="font-mono text-[10px] text-gray-400 mt-0.5">{m.label}</div>
                              </div>
                            ))}
                          </div>
                          <div className="flex flex-wrap gap-1.5 pt-2">
                            {project.techStack.map((tech, idx) => (
                              <span key={idx} className="font-mono text-[10px] bg-white/10 text-gray-300 px-2.5 py-1 rounded">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Action Links */}
                    <div className="pt-8 mt-8 border-t border-white/10 flex items-center justify-between">
                      <button
                        onClick={() => onOpenCaseStudy(project)}
                        className="text-xs font-mono font-semibold text-[#3B82F6] hover:text-white flex items-center gap-1.5 transition-colors"
                      >
                        <span>Inspect Full Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      <div className="font-mono text-xs text-gray-500">
                        Client: {project.client}
                      </div>
                    </div>
                  </div>

                  {/* Visual Interface Preview Column */}
                  <div className={`lg:col-span-7 ${isEven ? '' : 'lg:order-1'}`}>
                    {/* Bespoke Interactive Device Mockup */}
                    {project.mockupType === 'workspace-portal' && (
                      <div className="rounded-2xl bg-[#1C1A17] border border-amber-900/30 p-5 sm:p-6 shadow-2xl text-amber-50">
                        {/* Browser chrome header */}
                        <div className="flex items-center justify-between pb-4 mb-4 border-b border-amber-900/40 text-xs font-mono text-amber-300/70">
                          <div className="flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-amber-500" />
                            <span>urbanpremium.in/reserve</span>
                          </div>
                          <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded">
                            3D SPATIAL ENGINE
                          </span>
                        </div>

                        {/* Interactive UI Mockup Visual */}
                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                          {/* Left: Floorplan Visualizer */}
                          <div className="sm:col-span-7 bg-[#14120F] rounded-xl p-4 border border-amber-900/20 flex flex-col justify-between">
                            <div className="flex items-center justify-between mb-3 text-[11px] font-mono">
                              <span className="text-gray-400">LEVEL 4 · CONNAUGHT PLACE</span>
                              <span className="text-emerald-400">82% OCCUPIED</span>
                            </div>

                            {/* Simulated Interactive Floorplan Grid */}
                            <div className="grid grid-cols-3 gap-2 my-2">
                              <div className="p-2.5 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-center text-[10px] font-mono">
                                <span className="block font-bold text-emerald-300">Desk 10-14</span>
                                <span className="text-[9px] text-emerald-400">Available</span>
                              </div>
                              <div className="p-2.5 rounded-lg bg-amber-500/20 border border-amber-500/40 text-center text-[10px] font-mono">
                                <span className="block font-bold text-amber-300">Boardroom B</span>
                                <span className="text-[9px] text-amber-400">In Session</span>
                              </div>
                              <div className="p-2.5 rounded-lg bg-red-500/20 border border-red-500/40 text-center text-[10px] font-mono">
                                <span className="block font-bold text-red-300">Cabin 02</span>
                                <span className="text-[9px] text-red-400">Reserved</span>
                              </div>
                            </div>

                            <div className="pt-3 border-t border-amber-900/20 flex items-center justify-between text-[11px] font-mono text-gray-400">
                              <span>360° VR Spatial Tour</span>
                              <span className="text-amber-400 underline">Tap to Walkthrough →</span>
                            </div>
                          </div>

                          {/* Right: Instant Pass Generator */}
                          <div className="sm:col-span-5 bg-gradient-to-b from-[#2A241C] to-[#1C1813] rounded-xl p-4 border border-amber-500/20 flex flex-col justify-between text-xs">
                            <div>
                              <div className="flex items-center justify-between mb-2">
                                <span className="font-bold text-white text-xs">DIGITAL PASS</span>
                                <QrCode className="w-4 h-4 text-amber-400" />
                              </div>
                              <div className="font-mono text-[11px] text-amber-200">
                                Guest: VIP Executive
                              </div>
                              <div className="font-mono text-[10px] text-gray-400 mt-1">
                                Access: 24/7 High-Speed Fiber
                              </div>
                            </div>
                            <div className="mt-4 pt-3 border-t border-white/10 font-mono text-[10px] text-emerald-400 flex items-center gap-1.5">
                              <Check className="w-3 h-3" />
                              <span>Instant WhatsApp NFC Active</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {project.mockupType === 'mobile-concierge' && (
                      <div className="rounded-2xl bg-[#1D1217] border border-rose-900/40 p-5 sm:p-6 shadow-2xl text-rose-50 max-w-lg mx-auto">
                        <div className="flex items-center justify-between pb-4 mb-4 border-b border-rose-900/30 text-xs font-mono text-rose-300">
                          <div className="flex items-center gap-2">
                            <Smartphone className="w-4 h-4 text-rose-400" />
                            <span>nailashes.com/concierge</span>
                          </div>
                          <span className="text-[10px] bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded">
                            MOBILE FIRST
                          </span>
                        </div>

                        <div className="bg-[#120B0F] rounded-xl p-4 border border-rose-900/30 space-y-3">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-serif-italic text-sm text-white">Select Luxury Experience</span>
                            <span className="text-[10px] font-mono text-rose-400">GK1 Outlet</span>
                          </div>

                          {/* Selected Service Row */}
                          <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 flex items-center justify-between">
                            <div>
                              <div className="text-xs font-bold text-white">Russian Silk Sculpt Nails</div>
                              <div className="text-[10px] font-mono text-rose-300">75 mins · Stylist Sarah K.</div>
                            </div>
                            <span className="text-xs font-bold font-mono text-rose-300">₹3,400</span>
                          </div>

                          {/* Slot Selector */}
                          <div className="grid grid-cols-4 gap-1.5 pt-1 text-center font-mono text-[11px]">
                            <span className="p-1.5 rounded bg-white/5 text-gray-500">14:00</span>
                            <span className="p-1.5 rounded bg-rose-500 text-white font-bold">15:30</span>
                            <span className="p-1.5 rounded bg-white/5 text-gray-300">17:00</span>
                            <span className="p-1.5 rounded bg-white/5 text-gray-300">18:30</span>
                          </div>

                          <div className="pt-3 border-t border-rose-900/30 flex items-center justify-between text-[11px] font-mono text-gray-400">
                            <span>One-Tap Apple Pay / UPI</span>
                            <span className="text-emerald-400">Confirmed in 38s</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {project.mockupType === 'desktop-browser' && (
                      <div className="rounded-2xl bg-[#0F1420] border border-blue-900/40 p-5 sm:p-6 shadow-2xl text-blue-50">
                        <div className="flex items-center justify-between pb-4 mb-4 border-b border-blue-900/30 text-xs font-mono text-blue-300">
                          <div className="flex items-center gap-2">
                            <Monitor className="w-4 h-4 text-blue-400" />
                            <span>nsalon.space/hub</span>
                          </div>
                          <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded">
                            NO-SHOW REDUCTION ENGINE
                          </span>
                        </div>

                        {/* Chair Allocation Matrix */}
                        <div className="bg-[#0A0D14] rounded-xl p-4 border border-blue-900/20 space-y-3">
                          <div className="flex items-center justify-between text-xs font-mono text-gray-400">
                            <span>LIVE CHAIR LOAD: 94%</span>
                            <span className="text-emerald-400">NO-SHOW RATE: 6.2%</span>
                          </div>

                          <div className="space-y-2">
                            <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-between text-xs">
                              <span className="font-mono text-blue-200">Chair 01 · Rahul S.</span>
                              <span className="text-[11px] font-mono text-gray-400">Beard Sculpt & Fade</span>
                              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">In Chair</span>
                            </div>
                            <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between text-xs">
                              <span className="font-mono text-gray-300">Chair 02 · Vikram M.</span>
                              <span className="text-[11px] font-mono text-gray-400">Next: 15:45 (Arrived)</span>
                              <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded">Checked In</span>
                            </div>
                          </div>

                          <div className="pt-3 border-t border-blue-900/20 flex items-center justify-between text-[11px] font-mono text-gray-400">
                            <span>WhatsApp 2hr Smart Deposit Prompt</span>
                            <span className="text-blue-300">Automatic Failover Fill</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {project.mockupType === 'split-terminal' && (
                      <div className="rounded-2xl bg-[#0B1511] border border-emerald-900/40 p-5 sm:p-6 shadow-2xl text-emerald-50">
                        <div className="flex items-center justify-between pb-4 mb-4 border-b border-emerald-900/30 text-xs font-mono text-emerald-300">
                          <div className="flex items-center gap-2">
                            <Terminal className="w-4 h-4 text-emerald-400" />
                            <span>secondalgo_autonomous_core.py</span>
                          </div>
                          <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">
                            INTERNAL STUDIO LAB
                          </span>
                        </div>

                        <div className="bg-[#060D0A] rounded-xl p-4 border border-emerald-900/20 font-mono text-xs text-gray-300 space-y-2">
                          <div className="text-emerald-400">$ ./studio-agent-orchestrator --live</div>
                          <div className="text-gray-400">→ Ingesting client brief: "Luxury Coworking Platform"...</div>
                          <div className="text-gray-400">→ Synthesizing typographic tokens (Instrument Sans + Newsreader)...</div>
                          <div className="text-emerald-300 font-semibold">✓ Generated 44 CSS variables & Lighthouse tests (100/100)</div>
                          <div className="text-gray-400">→ Latency: 118ms · Multi-agent consensus reached.</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
