import React, { useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { STUDIO_DATA } from '../data/content';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (type) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0C0D11]/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="bg-[#0D0F14] text-white border border-white/15 rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative p-6 sm:p-8"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-mono text-[#1648E8] mb-3">
          <ShieldCheck className="w-4 h-4" />
          <span>LEGAL COMPLIANCE // {STUDIO_DATA.name}</span>
        </div>

        {type === 'privacy' ? (
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">
              Privacy Policy
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
              <p>
                <strong>1. Information Collection:</strong> second algorithm ("we", "studio") collects client information solely for the purpose of scoping, executing, and delivering agreed-upon digital design and software commissions. We do not sell, rent, or trade client data under any circumstances.
              </p>
              <p>
                <strong>2. Telemetry & Analytics:</strong> Our web properties run privacy-preserving, cookie-free telemetry hosted at the edge. We do not track visitors across third-party websites or engage in behavioral advertising.
              </p>
              <p>
                <strong>3. Confidentiality:</strong> All confidential client briefs, proprietary business logic, and pre-launch prototypes are held under strict non-disclosure. Source repositories are transferred directly to client-owned GitHub organizations.
              </p>
              <p>
                <strong>4. Inquiries:</strong> If you have questions regarding your data or wish to delete any contact submission, reach out directly to{' '}
                <a href={`mailto:${STUDIO_DATA.email}`} className="text-[#3B82F6] underline">
                  {STUDIO_DATA.email}
                </a>
                .
              </p>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">
              Terms of Engagement
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
              <p>
                <strong>1. Milestone-Based Delivery:</strong> All commissions are governed by a mutually agreed Statement of Work (SOW) outlining project phases, milestone checkpoints, and explicit deliverables.
              </p>
              <p>
                <strong>2. Intellectual Property & Code Ownership:</strong> Upon completion of milestones and final settlement, 100% of all custom frontend code, custom design tokens, and bespoke assets are transferred irrevocably to the client.
              </p>
              <p>
                <strong>3. Revisions & Staging:</strong> Clients have continuous access to private staging sandboxes during active development for feedback and review prior to public launch.
              </p>
              <p>
                <strong>4. Hosting & Infrastructure:</strong> Production deployments are calibrated for high-availability cloud platforms (including Vercel Edge, AWS, and Cloudflare) under client account ownership.
              </p>
            </div>
          </div>
        )}

        <div className="pt-6 mt-6 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono text-white transition-colors"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
