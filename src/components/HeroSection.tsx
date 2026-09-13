import { ArrowDown, Copy, Zap, Check } from 'lucide-react';
import { useState } from 'react';

interface HeroSectionProps {
  onOpenCodeSpec: () => void;
  onScrollToLiveTest: () => void;
}

export function HeroSection({ onOpenCodeSpec, onScrollToLiveTest }: HeroSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyQuick = () => {
    onOpenCodeSpec();
  };

  return (
    <section id="hero" className="text-center pt-2 sm:pt-4 pb-8 sm:pb-12 max-w-3xl mx-auto">
      {/* Badge */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ede6fd] text-[#352567] text-[11px] font-mono font-medium tracking-wide uppercase mb-4 sm:mb-6 border border-[#ddd2fc]">
        <Zap className="w-3.5 h-3.5 text-[#65519f]" />
        <span>Ultra Fast Framework</span>
      </div>

      {/* Main Headline */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-slate-900 tracking-tight leading-[1.15] mb-4 sm:mb-5">
        Desarrollo Web Ágil & Componentes Ultra-Optimizados
      </h1>

      {/* Subtitle */}
      <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8 font-normal">
        Headers flotantes estilo cápsula y arquitectura limpia en Elementor Pro para agencias de alto rendimiento.
      </p>

      {/* CTAs matching screenshot */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-8 sm:mb-12">
        <button
          onClick={onScrollToLiveTest}
          className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#0052cc] hover:bg-[#0047b3] text-white font-medium text-sm transition-all shadow-md hover:shadow-lg active:scale-98"
        >
          <span>Probar Header en Vivo</span>
          <ArrowDown className="w-4 h-4" />
        </button>

        <button
          onClick={handleCopyQuick}
          className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-300/80 font-medium text-sm transition-all shadow-xs hover:border-slate-400 active:scale-98"
        >
          <Copy className="w-4 h-4 text-slate-500" />
          <span>Copiar CSS / JSON Spec</span>
        </button>
      </div>

      {/* 3 Metric Pills matching Image 1 */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-lg mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-3 sm:p-4 border border-slate-200/80 shadow-2xs">
          <div className="text-lg sm:text-2xl font-bold font-mono text-[#0052cc] tracking-tight">
            99.8%
          </div>
          <div className="text-[10px] sm:text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold mt-0.5">
            PageSpeed
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-3 sm:p-4 border border-slate-200/80 shadow-2xs">
          <div className="text-lg sm:text-2xl font-bold font-mono text-[#0052cc] tracking-tight">
            0.2s
          </div>
          <div className="text-[10px] sm:text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold mt-0.5">
            TTI Score
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-3 sm:p-4 border border-slate-200/80 shadow-2xs">
          <div className="text-lg sm:text-2xl font-bold font-mono text-[#0052cc] tracking-tight">
            0<span className="text-xs">kb</span>
          </div>
          <div className="text-[10px] sm:text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold mt-0.5">
            JS Bloat
          </div>
        </div>
      </div>
    </section>
  );
}
