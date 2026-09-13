import { useState } from 'react';
import { Gauge, CheckCircle2, Copy, Check, Terminal } from 'lucide-react';

interface PerformanceSectionProps {
  onOpenCodeModal: () => void;
}

export function PerformanceSection({ onOpenCodeModal }: PerformanceSectionProps) {
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const cssSnippet = `.cree-pill-header {
  position: fixed;
  transition: transform 250ms cubic-
  bezier(.16,1,.3,1);
  backdrop-filter: blur(16px);
}`;

  const copyMiniSnippet = () => {
    navigator.clipboard.writeText(cssSnippet);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <div className="space-y-6 sm:space-y-8 max-w-3xl mx-auto">
      {/* Rendimiento en Dispositivo / Mobile Core Vitals */}
      <section id="rendimiento" className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-xs">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div className="flex items-center gap-2">
            <Gauge className="w-5 h-5 text-[#0052cc]" />
            <h3 className="font-semibold text-slate-900 text-sm sm:text-base">
              Rendimiento en Dispositivo
            </h3>
          </div>
          <span className="text-[11px] font-mono text-slate-500 font-medium">
            Mobile Core Vitals
          </span>
        </div>

        <div className="space-y-4">
          {/* First Contentful Paint */}
          <div>
            <div className="flex justify-between text-xs sm:text-sm font-medium mb-1.5">
              <span className="text-slate-700">First Contentful Paint</span>
              <span className="font-mono font-bold text-[#0052cc]">240ms</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
              <div className="bg-[#0052cc] h-full rounded-full w-[85%] transition-all duration-500" />
            </div>
          </div>

          {/* Cumulative Layout Shift */}
          <div>
            <div className="flex justify-between text-xs sm:text-sm font-medium mb-1.5">
              <span className="text-slate-700">Cumulative Layout Shift</span>
              <span className="font-mono font-bold text-[#0052cc]">0.000</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
              <div className="bg-[#0052cc] h-full rounded-full w-[100%] transition-all duration-500" />
            </div>
          </div>

          {/* Frame Budget Stability */}
          <div>
            <div className="flex justify-between text-xs sm:text-sm font-medium mb-1.5">
              <span className="text-slate-700">Frame Budget Stability</span>
              <span className="font-mono font-bold text-[#0052cc]">60 FPS</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
              <div className="bg-[#0052cc] h-full rounded-full w-[98%] transition-all duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Módulo 01: Arquitectura Contenedores Flexbox v0.4 */}
      <section id="arquitectura" className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/80 shadow-xs">
        <div className="flex items-center gap-2 mb-2 text-[#0052cc] text-xs font-mono font-bold uppercase tracking-wider">
          <Terminal className="w-3.5 h-3.5" />
          <span>Módulo 01</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
          Arquitectura Contenedores Flexbox v0.4
        </h2>

        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
          Sin wrappers anidados innecesarios ni DOM inflado. Diseñado para acoplarse directamente a los containers modernos de Elementor 3.18+.
        </p>

        {/* Feature Spec tags */}
        <div className="flex items-center justify-between py-2 border-b border-slate-100 mb-4 text-xs font-mono">
          <span className="text-[#0052cc] font-semibold">flex-direction: row</span>
          <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md">HTML Semántico</span>
        </div>

        {/* Checklist */}
        <div className="space-y-3 mb-6">
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#0052cc] shrink-0 mt-0.5" />
            <span className="text-xs sm:text-sm text-slate-700 font-medium">
              Reducción del 64% en profundidad del árbol DOM.
            </span>
          </div>

          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#0052cc] shrink-0 mt-0.5" />
            <span className="text-xs sm:text-sm text-slate-700 font-medium">
              Pill con cálculo exacto de safe-area-inset nativo.
            </span>
          </div>

          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#0052cc] shrink-0 mt-0.5" />
            <span className="text-xs sm:text-sm text-slate-700 font-medium">
              Zero layout shifts durante el redimensionamiento.
            </span>
          </div>
        </div>

        {/* Dark Terminal Box matching Image 1.png */}
        <div className="relative rounded-2xl bg-[#1e232d] text-slate-200 p-4 font-mono text-xs shadow-inner overflow-hidden border border-slate-800">
          <button
            onClick={copyMiniSnippet}
            className="absolute top-3 right-3 p-1.5 rounded-lg bg-slate-800/80 text-slate-400 hover:text-white transition"
            title="Copiar snippet"
          >
            {copiedSnippet ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
          <pre className="text-emerald-400/90 leading-relaxed overflow-x-auto">
            <code>{cssSnippet}</code>
          </pre>
        </div>
      </section>
    </div>
  );
}
