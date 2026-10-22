import React, { useState } from 'react';
import { CheckCircle2, ChevronDown, ChevronUp, Clock, ShieldCheck } from 'lucide-react';
import { PROCESS_STEPS, FAQS } from '../data/content';
import type { ProcessStep } from '../data/content';
import { Reveal } from './motion';

export const ProcessSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  return (
    <section id="process" className="py-24 sm:py-32 bg-[#FAF8F5] border-b border-black/[0.08]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 pb-8 border-b border-black/10">
          <div>
            <div className="font-mono text-xs text-[#1648E8] uppercase tracking-widest font-semibold mb-3">
              [ 06 // OUR PROCESS ]
            </div>
            <Reveal>
              <h2 className="font-display text-[clamp(2.2rem,4.5vw,4.2rem)] font-bold text-[#0D0F14] leading-[1.05] tracking-tight">
                How We Build. <br />
                <span className="font-serif-italic font-normal text-gray-500">
                  From Diagnosis to Global Launch.
                </span>
              </h2>
            </Reveal>
          </div>

          <p className="text-sm sm:text-base text-[#4E5364] max-w-md leading-relaxed">
            A transparent, step-by-step studio workflow. No vague retainer drift or bloated committees; 
            only intentional art direction, precision engineering, and tangible results.
          </p>
        </div>

        {/* 4-Step Interactive Process Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          {/* Left Column: Step Navigation Tabs */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = idx === activeStepIndex;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`text-left p-6 rounded-2xl transition-all duration-200 border flex items-center justify-between group cursor-pointer ${
                    isActive
                      ? 'bg-[#0D0F14] text-white border-[#0D0F14] shadow-md translate-x-1'
                      : 'bg-white hover:bg-black/5 text-[#0D0F14] border-black/8 hover:border-black/20'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-mono text-sm font-bold ${
                        isActive ? 'text-[#FF5520]' : 'text-gray-400 group-hover:text-[#0D0F14]'
                      }`}
                    >
                      {step.step}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-base font-semibold ${isActive ? 'text-white' : 'text-[#0D0F14]'}`}>
                          {step.title}
                        </span>
                      </div>
                      <span className={`text-xs block mt-0.5 font-mono ${isActive ? 'text-gray-400' : 'text-gray-500'}`}>
                        {step.duration}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`font-mono text-xs px-2.5 py-1 rounded-md ${
                      isActive ? 'bg-white/10 text-white' : 'bg-black/5 text-gray-500'
                    }`}
                  >
                    Step {step.step}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Phase Detail Card */}
          <div className="lg:col-span-7">
            {(() => {
              const currentStep: ProcessStep = PROCESS_STEPS[activeStepIndex];
              return (
                <div className="rounded-none bg-white p-7 sm:p-10 border border-black/10">
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-black/10">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#1648E8] font-bold">
                      <Clock className="w-4 h-4" />
                      <span>{currentStep.duration.toUpperCase()}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-mono">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Milestone: {currentStep.milestone}</span>
                    </div>
                  </div>

                  <div className="my-6">
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0D0F14] tracking-tight">
                      {currentStep.title}
                    </h3>
                    <p className="text-sm font-medium text-[#FF5520] mt-1 font-mono">
                      // {currentStep.tagline}
                    </p>
                    <p className="text-base text-[#4E5364] leading-relaxed mt-4">
                      {currentStep.description}
                    </p>
                  </div>

                  {/* Deliverables for this phase */}
                  <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-black/5 mt-6">
                    <div className="font-mono text-xs font-semibold text-[#0D0F14] uppercase tracking-wider mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#1648E8]" />
                      <span>Key Phase Deliverables</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {currentStep.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0D0F14]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1648E8] mt-2 shrink-0"></span>
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="pt-12 border-t border-black/10">
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-xs text-[#1648E8] uppercase tracking-wider font-semibold">
              [ CLARITY & ANSWERS ]
            </span>
            <h3 className="font-display text-3xl font-bold text-[#0D0F14] tracking-tight mt-2">
              Frequently Clarified Questions
            </h3>
          </div>

          <div className="space-y-4 max-w-4xl">
            {FAQS.map((faq, fIdx) => {
              const isExpanded = expandedFaq === fIdx;
              return (
                <div
                  key={fIdx}
                  className="rounded-2xl bg-white border border-black/8 overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => setExpandedFaq(isExpanded ? null : fIdx)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 font-display text-base sm:text-lg font-semibold text-[#0D0F14] cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <span className="p-1 rounded-full bg-black/5 text-gray-500 shrink-0">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isExpanded && (
                    <div className="px-6 pb-6 pt-1 text-sm text-[#4E5364] leading-relaxed border-t border-black/5">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
