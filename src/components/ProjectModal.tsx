import React, { useEffect } from 'react';
import { X, Check, ArrowUpRight } from 'lucide-react';
import type { ProjectItem } from '../data/content';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0C0D11]/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="bg-[#0D0F14] text-white border border-white/15 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 sm:p-10 flex flex-col justify-between"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors"
          aria-label="Close case study"
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          {/* Header */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="font-mono text-xs font-bold text-[#FF5520] bg-[#FF5520]/20 px-3 py-1 rounded-full border border-[#FF5520]/30">
              CASE STUDY ARCHIVE
            </span>
            <span className="font-mono text-xs text-gray-400">
              {project.year} · {project.client}
            </span>
          </div>

          <h2 id="modal-title" className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {project.title}
          </h2>
          <p className="text-base text-gray-300 font-medium mt-1">
            {project.tagline}
          </p>

          {/* Metrics Spotlight */}
          <div className="grid grid-cols-3 gap-3 my-6">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                <div className="font-display text-2xl font-bold text-white">{m.value}</div>
                <div className="font-mono text-[11px] text-gray-400 mt-1">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Body Sections */}
          <div className="space-y-6 text-sm text-gray-300 leading-relaxed">
            <div>
              <span className="font-mono text-xs text-[#3B82F6] uppercase font-bold block mb-1">
                // The Operational Problem
              </span>
              <p>{project.challenge}</p>
            </div>

            <div>
              <span className="font-mono text-xs text-emerald-400 uppercase font-bold block mb-1">
                // Our Engineering & Art Direction
              </span>
              <p>{project.solution}</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#141620] border border-white/10">
              <span className="font-mono text-xs text-gray-300 uppercase font-bold block mb-3">
                Key Deliverables Shipped:
              </span>
              <ul className="space-y-2">
                {project.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-gray-200">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="font-mono text-xs text-gray-400 uppercase font-bold block mb-2">
                // Architecture & Technology Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="font-mono text-xs bg-white/10 text-gray-200 px-3 py-1 rounded-lg border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-6 mt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="font-mono text-xs text-gray-400">
            Status: {project.previewDetails.status}
          </div>
          <button
            onClick={() => {
              onClose();
              const contactEl = document.getElementById('contact');
              if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary text-xs py-2.5 px-5 bg-white text-black hover:bg-gray-200"
          >
            <span>Commission Similar Architecture</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};
