import { useState } from 'react';
import { motion } from 'motion/react';
import { X, Copy, Check, Code, FileJson, Sparkles } from 'lucide-react';

interface CodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CSS_SPEC = `/* Cree Studio - Floating Pill Header Controller */
.cree-pill-header {
  position: fixed;
  top: 1.25rem;
  left: 50%;
  transform: translateX(-50%) translateZ(0);
  width: min(100% - 2rem, 1180px);
  height: 56px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 12px 32px -4px rgba(123, 114, 148, 0.08), 
              0 4px 12px -2px rgba(123, 114, 148, 0.04);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.25rem;
  z-index: 9999;
  transition: all 250ms cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, height, width, padding, background;
}

/* Compact Sticky Shrink Transition */
.cree-pill-header[data-scrolled="true"],
.cree-pill-header.is-compact {
  top: 0.75rem;
  height: 48px;
  width: min(100% - 1.5rem, 1040px);
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 16px 40px -6px rgba(53, 37, 103, 0.12),
              0 4px 16px -2px rgba(53, 37, 103, 0.06);
}

/* Mobile responsive adjustments */
@media (max-width: 768px) {
  .cree-pill-header {
    width: calc(100% - 1.5rem);
    height: 54px;
    padding: 0 0.875rem;
  }
  .cree-pill-header[data-scrolled="true"] {
    height: 48px;
  }
}`;

const JSON_SPEC = `{
  "component": "CreePillHeader",
  "version": "0.4.2",
  "compatibility": ["Elementor Pro 3.18+", "React 18+", "Tailwind v4"],
  "styling": {
    "restingHeight": "56px",
    "compactHeight": "48px",
    "borderRadius": "9999px",
    "backdropBlur": "16px",
    "colors": {
      "primary": "#352567",
      "primaryContainer": "#4c3c7f",
      "accent": "#65519f",
      "surface": "rgba(255, 255, 255, 0.85)"
    },
    "animation": {
      "duration": "250ms",
      "easing": "cubic-bezier(0.16, 1, 0.3, 1)"
    }
  },
  "metrics": {
    "cumulativeLayoutShift": 0.000,
    "firstContentfulPaint": "240ms",
    "fpsTarget": 60
  }
}`;

export function CodeModal({ isOpen, onClose }: CodeModalProps) {
  const [activeTab, setActiveTab] = useState<'css' | 'json'>('css');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const contentToCopy = activeTab === 'css' ? CSS_SPEC : JSON_SPEC;

  const handleCopy = () => {
    navigator.clipboard.writeText(contentToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        className="relative bg-[#0f111a] text-slate-100 rounded-3xl w-full max-w-2xl border border-slate-700/60 shadow-2xl overflow-hidden z-10"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#161926]">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <span className="text-xs font-mono text-slate-300 font-medium">
              {activeTab === 'css' ? 'header-capsule-spec.css' : 'cree-header-config.json'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex bg-slate-800/80 rounded-lg p-0.5 border border-slate-700/50">
              <button
                onClick={() => setActiveTab('css')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono transition ${
                  activeTab === 'css'
                    ? 'bg-[#4C3C7F] text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Code className="w-3.5 h-3.5" /> CSS
              </button>
              <button
                onClick={() => setActiveTab('json')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono transition ${
                  activeTab === 'json'
                    ? 'bg-[#4C3C7F] text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <FileJson className="w-3.5 h-3.5" /> JSON
              </button>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition"
              aria-label="Cerrar modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Code Content */}
        <div className="p-5 font-mono text-[12px] md:text-[13px] leading-relaxed max-h-[60vh] overflow-y-auto text-slate-300 bg-[#0d0f17]">
          <pre className="whitespace-pre overflow-x-auto">
            <code>{contentToCopy}</code>
          </pre>
        </div>

        {/* Action bar */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-[#141724] border-t border-slate-800">
          <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Listo para copiar en Elementor Custom CSS o Tailwind</span>
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#4C3C7F] hover:bg-[#3d2e67] text-white text-xs font-medium transition shadow-md"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-300" />
                <span>¡Copiado al portapapeles!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copiar Especificación</span>
              </>
            )}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
