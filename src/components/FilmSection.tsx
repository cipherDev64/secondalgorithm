import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Pause, Play } from 'lucide-react';
import { EASE_FLUID } from './motionTokens';

/* Single studio film. The frame reserves a 16:9 box up front (no layout shift), clip-path reveals
   on entry, and playback pauses off-screen so the loop costs nothing when it isn't seen. */
export const FilmSection: React.FC = () => {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const inView = useInView(frameRef, { amount: 0.35 });

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const frameY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [30, -30]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (inView && !userPaused && !reduce) {
      video.play().catch(() => {
        /* Autoplay blocked: the visible play button remains the way in. */
      });
    } else {
      video.pause();
    }
  }, [inView, userPaused, reduce]);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      setUserPaused(false);
      video.play().catch(() => setUserPaused(true));
    } else {
      setUserPaused(true);
      video.pause();
    }
  };

  const rise = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.6 } as const,
    transition: { duration: 0.9, ease: EASE_FLUID, delay }
  });

  return (
    <section id="film" ref={sectionRef} className="film-stage" aria-labelledby="film-title">
      <div className="container-custom">
        <div className="film-meta">
          <motion.span className="film-label" {...rise(0)}>[ 02 // STUDIO FILM ]</motion.span>
          <motion.h2 id="film-title" className="film-title font-display" {...rise(0.1)}>
            Services in <span className="font-serif-italic">motion</span>
          </motion.h2>
          <motion.span className="film-label film-label--dim" {...rise(0.2)}>20 SEC</motion.span>
        </div>

        <motion.div ref={frameRef} style={{ y: frameY }}>
          <motion.div
            className="film-frame"
            initial={{ clipPath: reduce ? 'inset(0% 0% 0% 0%)' : 'inset(12% 8% 12% 8%)', opacity: reduce ? 0 : 1, scale: reduce ? 1 : 0.96 }}
            whileInView={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.3, ease: EASE_FLUID }}
          >
            <video
              ref={videoRef}
              className="film-video"
              src="/media/second-algorithm-film.mp4"
              muted
              loop
              playsInline
              preload="metadata"
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              aria-label="Twenty-second motion-graphic film showing second algorithm's services"
            />
            <button type="button" className="film-toggle" onClick={toggle} aria-pressed={playing}>
              {playing ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{playing ? 'Pause film' : 'Play film'}</span>
            </button>
          </motion.div>
        </motion.div>

        <motion.div className="film-foot" {...rise(0.1)}>
          <span><i className="pulse-dot pulse-dot-green" /> LOOP · MUTED</span>
          <span>16:9</span>
        </motion.div>
      </div>
    </section>
  );
};
