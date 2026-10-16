import React, { useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue
} from 'framer-motion';
import { ArrowDown, ArrowUpRight, Calendar, Sparkles, Terminal, Layers, Cpu, Compass } from 'lucide-react';
import { STUDIO_DATA } from '../data/content';
import { EASE_FLUID, SPRING_SNAPPY, SPRING_SOFT } from './motionTokens';

interface HeroProps {
  onExploreWork: () => void;
  onOpenEstimator?: () => void;
}

type TabId = 'experiences' | 'ai' | 'brand' | 'automation';

const PREVIEWS: Record<TabId, {
  badge: string;
  title: string;
  desc: string;
  tags: string[];
  metric: string;
  accent: string;
}> = {
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

const TABS: { id: TabId; label: string; Icon: typeof Layers; color: string }[] = [
  { id: 'experiences', label: '01. Web Exp', Icon: Layers, color: '#3B82F6' },
  { id: 'ai', label: '02. AI Agents', Icon: Cpu, color: '#8B5CF6' },
  { id: 'brand', label: '03. Direction', Icon: Compass, color: '#FF5520' },
  { id: 'automation', label: '04. Pipelines', Icon: Sparkles, color: '#10B981' }
];

/* Floating capability chips orbiting the headline. depth scales pointer parallax. */
const CHIPS = [
  { label: 'Web experiences', Icon: Layers, color: '#1648E8', className: 'hero-chip--a', rotate: -6, depth: 1 },
  { label: 'Brand direction', Icon: Compass, color: '#FF5520', className: 'hero-chip--b', rotate: 5, depth: 1.6 },
  { label: 'Automation & AI', Icon: Cpu, color: '#8B5CF6', className: 'hero-chip--c', rotate: -3, depth: 0.7 }
];

const INTRO_DELAY = 0.25;
const WORD_STAGGER = 0.07;

const HEADLINE_LINES: { word: string; accent?: boolean }[][] = [
  [{ word: 'Ideas' }, { word: 'deserve' }, { word: 'better' }],
  [{ word: 'than' }, { word: 'ordinary.', accent: true }]
];

// Each word's entrance delay, staggered across both lines.
let wordCount = 0;
const HEADLINE = HEADLINE_LINES.map((line) =>
  line.map((w) => ({ ...w, delay: INTRO_DELAY + wordCount++ * WORD_STAGGER }))
);
const LAST_WORD_DELAY = INTRO_DELAY + (wordCount - 1) * WORD_STAGGER;

interface FloatingChipProps {
  chip: (typeof CHIPS)[number];
  index: number;
  pointerX: MotionValue<number>;
  pointerY: MotionValue<number>;
  scrollY: MotionValue<number>;
}

const FloatingChip: React.FC<FloatingChipProps> = ({ chip, index, pointerX, pointerY, scrollY }) => {
  const x = useTransform(pointerX, (v) => v * 36 * chip.depth);
  const pointerOffsetY = useTransform(pointerY, (v) => v * 28 * chip.depth);
  const scrollOffsetY = useTransform(scrollY, (v) => v * -90 * chip.depth);
  const y = useTransform(() => pointerOffsetY.get() + scrollOffsetY.get());
  const { Icon } = chip;

  return (
    <motion.div className={`hero-chip ${chip.className}`} style={{ x, y }} aria-hidden="true">
      <motion.div
        className="hero-chip-inner"
        initial={{ opacity: 0, scale: 0.85, rotate: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: chip.rotate }}
        transition={{ ...SPRING_SOFT, delay: 1.05 + index * 0.12 }}
      >
        <span className="hero-chip-icon" style={{ backgroundColor: `${chip.color}14`, color: chip.color }}>
          <Icon className="w-3.5 h-3.5" />
        </span>
        <span>{chip.label}</span>
      </motion.div>
    </motion.div>
  );
};

export const Hero: React.FC<HeroProps> = ({ onExploreWork }) => {
  const [activeTab, setActiveTab] = useState<TabId>('experiences');
  const currentPreview = PREVIEWS[activeTab];
  const reduce = useReducedMotion();

  const sectionRef = useRef<HTMLElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);

  // Scroll-linked depth: decorative layers drift at different rates as the hero leaves the viewport.
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const orbitY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 140]);
  const orbitRotate = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 10]);
  const glowY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 200]);
  const marksY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 60]);
  const chipScroll = useTransform(scrollYProgress, (v) => (reduce ? 0 : v));

  // The console tilts up into place as it enters, like a print laid flat on the desk.
  const { scrollYProgress: showcaseProgress } = useScroll({
    target: showcaseRef,
    offset: ['start end', 'start 0.45']
  });
  const showcaseRotateX = useTransform(showcaseProgress, [0, 1], reduce ? [0, 0] : [16, 0]);
  const showcaseScale = useTransform(showcaseProgress, [0, 1], reduce ? [1, 1] : [0.93, 1]);

  // Pointer parallax for the chips: motion values only, so moving the mouse never re-renders.
  const rawPointerX = useMotionValue(0);
  const rawPointerY = useMotionValue(0);
  const pointerX = useSpring(rawPointerX, { stiffness: 60, damping: 18 });
  const pointerY = useSpring(rawPointerY, { stiffness: 60, damping: 18 });

  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    if (reduce || e.pointerType !== 'mouse') return;
    const rect = e.currentTarget.getBoundingClientRect();
    rawPointerX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawPointerY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handlePointerLeave = () => {
    rawPointerX.set(0);
    rawPointerY.set(0);
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="hero-stage bg-subtle-grid"
    >
      {/* Grid fades out toward the edges so the composition reads as centred */}
      <div className="hero-grid-fade" aria-hidden="true" />

      <motion.div className="hero-glow" style={{ y: glowY }} aria-hidden="true" />

      <div className="container-custom relative z-10">
        <div className="hero-composition">
          {/* Orbit rings */}
          <motion.svg
            className="hero-orbits"
            viewBox="0 0 1000 560"
            fill="none"
            style={{ y: orbitY, rotate: orbitRotate }}
            aria-hidden="true"
          >
            <motion.ellipse
              cx="500" cy="280" rx="480" ry="230"
              stroke="rgba(13,15,20,0.09)" strokeWidth="1"
              initial={{ pathLength: reduce ? 1 : 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2.2, ease: EASE_FLUID, delay: 0.4 }}
            />
            <ellipse
              cx="500" cy="280" rx="400" ry="262"
              transform="rotate(-14 500 280)"
              stroke="rgba(22,72,232,0.22)" strokeWidth="1" strokeDasharray="2 9"
            />
            <circle cx="20" cy="280" r="5" fill="#FF5520" />
            <circle cx="883" cy="166" r="3.5" fill="#1648E8" />
          </motion.svg>

          {/* Registration marks with coordinates */}
          <motion.div className="hero-marks" style={{ y: marksY }} aria-hidden="true">
            <span className="hero-mark hero-mark--tl"><i />12.97° N</span>
            <span className="hero-mark hero-mark--tr">77.59° E<i /></span>
            <span className="hero-mark hero-mark--bl"><i />EST. BENGALURU</span>
            <span className="hero-mark hero-mark--br">INDEPENDENT<i /></span>
          </motion.div>

          {CHIPS.map((chip, i) => (
            <FloatingChip
              key={chip.label}
              chip={chip}
              index={i}
              pointerX={pointerX}
              pointerY={pointerY}
              scrollY={chipScroll}
            />
          ))}

          {/* Eyebrow */}
          <motion.div
            className="hero-eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE_FLUID, delay: 0.1 }}
          >
            <span className="w-2 h-2 rounded-full bg-[#1648E8]" />
            <span>Creative technology studio · Bengaluru</span>
          </motion.div>

          {/* Headline: each word rises out of its own mask */}
          <h1 className="hero-title font-display">
            <span className="sr-only">Ideas deserve better than ordinary.</span>
            <span className="hero-title-words" aria-hidden="true">
              {HEADLINE.map((line, li) => (
                <span key={li} className="hero-title-line">
                  {line.map(({ word, accent, delay }) => {
                    return (
                      <span key={word} className="hero-word-mask">
                        <motion.span
                          className={accent ? 'hero-word hero-word--accent font-serif-italic' : 'hero-word'}
                          initial={{ y: '110%' }}
                          animate={{ y: '0%' }}
                          transition={{ duration: 1.1, ease: EASE_FLUID, delay }}
                        >
                          {word}
                          {accent && (
                            <svg className="hero-underline" viewBox="0 0 300 24" fill="none" preserveAspectRatio="none">
                              <motion.path
                                d="M4 16 C 70 6, 150 4, 296 12"
                                stroke="#1648E8"
                                strokeOpacity="0.35"
                                strokeWidth="3"
                                strokeLinecap="round"
                                initial={{ pathLength: reduce ? 1 : 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 0.9, ease: EASE_FLUID, delay: delay + 0.55 }}
                              />
                            </svg>
                          )}
                        </motion.span>
                      </span>
                    );
                  })}
                </span>
              ))}
            </span>
          </h1>

          <motion.p
            className="hero-lede"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE_FLUID, delay: LAST_WORD_DELAY + 0.2 }}
          >
            An independent studio designing and building websites, brand identities and the
            automations behind them. Every pixel and every line of code made in-house.
          </motion.p>

          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE_FLUID, delay: LAST_WORD_DELAY + 0.32 }}
          >
            <a
              href={STUDIO_DATA.calLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hero-cta text-sm py-3.5 px-6 shadow-md"
              aria-label="Book a Call with second algorithm"
            >
              <Calendar className="w-4 h-4 text-white/90" />
              <span>Book a Call</span>
              <ArrowUpRight className="w-4 h-4 hero-cta-arrow" />
            </a>

            <button onClick={onExploreWork} className="btn-secondary hero-cta text-sm py-3.5 px-6">
              <span>Explore Selected Work</span>
              <ArrowDown className="w-4 h-4 text-[#1648E8] hero-cta-arrow--down" />
            </button>
          </motion.div>

          <motion.div
            className="hero-availability"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: LAST_WORD_DELAY + 0.5 }}
          >
            <span className="pulse-dot pulse-dot-green" />
            <span>Now accepting new commissions</span>
          </motion.div>
        </div>

        {/* Showcase: the studio console, centred beneath the statement */}
        <div className="hero-showcase-stage">
          <motion.div
            ref={showcaseRef}
            className="hero-showcase"
            style={{ rotateX: showcaseRotateX, scale: showcaseScale }}
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...SPRING_SOFT, delay: LAST_WORD_DELAY + 0.45 }}
          >
            <div className="rounded-3xl bg-[#0D0F14] text-white p-6 sm:p-7 border border-white/10 shadow-2xl relative overflow-hidden">
              {/* Subtle top glare */}
              <div className="hero-console-glare" />

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

              <div className="hero-console-body">
                {/* Capability Switcher Tabs */}
                <div className="hero-console-tabs" role="tablist" aria-label="Studio capabilities">
                  {TABS.map(({ id, label, Icon, color }) => {
                    const isActive = activeTab === id;
                    return (
                      <button
                        key={id}
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => setActiveTab(id)}
                        className={`hero-tab ${isActive ? 'is-active' : ''}`}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="hero-tab-pill"
                            className="hero-tab-pill"
                            transition={SPRING_SNAPPY}
                          />
                        )}
                        <Icon className="w-3.5 h-3.5 relative" style={{ color }} />
                        <span className="relative">{label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Dynamic Interactive Preview Box */}
                <div className="bg-[#151720] rounded-2xl p-5 border border-white/10 min-h-[200px] overflow-hidden" role="tabpanel">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={activeTab}
                      className="flex flex-col gap-3 justify-between h-full"
                      initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
                      transition={{ duration: 0.28, ease: EASE_FLUID }}
                    >
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
                          {currentPreview.tags.map((tag) => (
                            <span
                              key={tag}
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
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Real-time Studio Telemetry Footer */}
              <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/10 text-[11px] font-mono text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>BUILD PIPELINE: READY</span>
                </div>
                <span>LATENCY: 14MS</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Metric Credentials */}
        <motion.div
          className="hero-stats"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        >
          {STUDIO_DATA.stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="hero-stat"
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE_FLUID } }
              }}
            >
              <span className="font-display text-2xl sm:text-3xl font-bold text-[#0D0F14] tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs font-semibold text-[#0D0F14] mt-1">{stat.label}</span>
              <span className="text-[11px] font-mono text-[#717684]">{stat.sub}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
