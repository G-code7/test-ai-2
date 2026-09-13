import { useState, useEffect } from 'react';
import { 
  ArrowDownToLine, 
  RotateCcw, 
  Maximize2, 
  Smartphone, 
  Monitor, 
  Sparkles,
  Layers
} from 'lucide-react';

interface TelemetryDockProps {
  forcedShrink: boolean;
  onToggleShrink: () => void;
  isEdgeToEdge: boolean;
  onToggleEdgeToEdge: () => void;
  onResetScroll: () => void;
  deviceView: 'responsive' | 'mobile' | 'desktop';
  onChangeDeviceView: (mode: 'responsive' | 'mobile' | 'desktop') => void;
}

export function TelemetryDock({
  forcedShrink,
  onToggleShrink,
  isEdgeToEdge,
  onToggleEdgeToEdge,
  onResetScroll,
  deviceView,
  onChangeDeviceView,
}: TelemetryDockProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(Math.round(window.scrollY));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerStateText = (forcedShrink || scrollY > 30) ? 'COMPACT (48px)' : 'RESTING (56px)';

  return (
    <div className="w-full max-w-5xl mx-auto mb-6">
      {/* Upper Telemetry Bar matching Image 1 & Image 3 */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-3 py-1.5 bg-slate-100/90 backdrop-blur-md rounded-2xl text-[10px] md:text-[11px] font-mono text-slate-600 border border-slate-200/70 mb-3 shadow-2xs">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 font-bold text-[#4C3C7F] uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            Live Telemetry
          </span>
          <span className="hidden sm:inline text-slate-300">|</span>
          <span>
            Scroll: <strong className="text-slate-900">{scrollY}px</strong>
          </span>
          <span className="hidden sm:inline text-slate-300">|</span>
          <span>
            Estado: <strong className="text-[#352567]">{headerStateText}</strong>
          </span>
          <span className="hidden md:inline text-slate-300">|</span>
          <span className="hidden md:inline">
            Max W: <strong className="text-slate-900">{isEdgeToEdge ? '100% (Edge)' : '1180px'}</strong>
          </span>
        </div>

        {/* Device preview quick switcher */}
        <div className="flex items-center gap-1 ml-auto">
          <button
            onClick={() => onChangeDeviceView('responsive')}
            className={`px-2 py-0.5 rounded-md text-[10px] font-medium transition ${
              deviceView === 'responsive'
                ? 'bg-white text-[#352567] shadow-xs font-semibold'
                : 'text-slate-500 hover:text-slate-800'
            }`}
            title="Vista adaptable a la ventana actual"
          >
            Auto
          </button>
          <button
            onClick={() => onChangeDeviceView('mobile')}
            className={`flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium transition ${
              deviceView === 'mobile'
                ? 'bg-white text-[#352567] shadow-xs font-semibold'
                : 'text-slate-500 hover:text-slate-800'
            }`}
            title="Simulador de pantalla móvil (iPhone / Android)"
          >
            <Smartphone className="w-3 h-3" />
            <span>Móvil</span>
          </button>
          <button
            onClick={() => onChangeDeviceView('desktop')}
            className={`flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium transition ${
              deviceView === 'desktop'
                ? 'bg-white text-[#352567] shadow-xs font-semibold'
                : 'text-slate-500 hover:text-slate-800'
            }`}
            title="Vista de escritorio completa"
          >
            <Monitor className="w-3 h-3" />
            <span>Desktop</span>
          </button>
        </div>
      </div>

      {/* Sticky Header Playground Box (Matching Image 1.png exactly) */}
      <div 
        id="playground"
        className="bg-white/90 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-[0_8px_24px_-4px_rgba(123,114,148,0.08)]"
      >
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-xl bg-[#e8deff] flex items-center justify-center text-[#4C3C7F]">
              <Layers className="w-4 h-4" />
            </div>
            <h3 className="font-semibold text-slate-900 text-sm sm:text-base tracking-tight">
              Sticky Header Playground
            </h3>
          </div>
          <span className="px-2.5 py-1 text-[10px] font-mono text-[#352567] bg-[#ede6fd] rounded-lg font-medium border border-[#ddd2fc]">
            Elementor Spec
          </span>
        </div>

        <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-4">
          Prueba en tiempo real la animación de compresión de la cápsula flotante, variación de ancho y elevación sub-pixel.
        </p>

        {/* 3 Interactive Buttons */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          <button
            onClick={onToggleShrink}
            className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-medium transition active:scale-98 ${
              forcedShrink
                ? 'bg-[#352567] text-white shadow-sm'
                : 'bg-[#ede6fd] text-[#352567] hover:bg-[#e1d5fc]'
            }`}
          >
            <ArrowDownToLine className="w-3.5 h-3.5" />
            <span>{forcedShrink ? 'Expand' : 'Shrink'}</span>
          </button>

          <button
            onClick={onResetScroll}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#ede6fd] text-[#352567] hover:bg-[#e1d5fc] text-xs font-medium transition active:scale-98"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>

          <button
            onClick={onToggleEdgeToEdge}
            className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-medium transition active:scale-98 ${
              isEdgeToEdge
                ? 'bg-[#352567] text-white shadow-sm'
                : 'bg-[#ede6fd] text-[#352567] hover:bg-[#e1d5fc]'
            }`}
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>{isEdgeToEdge ? 'Pill Mode' : 'Edge-to-Edge'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
