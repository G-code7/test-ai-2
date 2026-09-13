import { ChevronsUpDown, Minimize2, Sparkles, Star } from 'lucide-react';

export function ModulesSection() {
  return (
    <div id="modulos" className="space-y-6 sm:space-y-8 max-w-3xl mx-auto">
      {/* Visual Image Card 1: Workflow Optimizado */}
      <section id="workflow" className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs">
        <div className="h-56 sm:h-72 w-full overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80"
            alt="Diseño de interfaz y arquitectura en laptop y tablet"
            className="w-full h-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        <div className="p-5 sm:p-7">
          <div className="text-[11px] font-mono uppercase tracking-wider text-[#0052cc] font-bold mb-1.5">
            Workflow Optimizado
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
            Diseñado para Estudios y Creadores Ágiles
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Implementa headers flotantes sin plugins de terceros pesados que degradan la experiencia móvil y afectan el SEO.
          </p>
        </div>
      </section>

      {/* Módulo 02: Efecto Shrink con Fallback Inteligente */}
      <section className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/80 shadow-xs">
        <div className="flex items-center gap-2 mb-2 text-[#0052cc] text-xs font-mono font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Módulo 02</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
          Efecto Shrink con Fallback Inteligente
        </h2>

        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
          Aprovecha animaciones declarativas CSS Scroll-Timeline cuando están disponibles, con retrocompatibilidad instantánea para motores WebKit antiguos.
        </p>

        {/* 2 Comparative Cards matching Image 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
            <div className="flex items-center gap-1.5 text-[#0052cc] mb-2">
              <ChevronsUpDown className="w-4 h-4" />
              <span className="font-semibold text-xs sm:text-sm text-slate-900">Estado Inicial</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              56px alto, borde translúcido y elevación suave Nivel 1.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
            <div className="flex items-center gap-1.5 text-[#0052cc] mb-2">
              <Minimize2 className="w-4 h-4" />
              <span className="font-semibold text-xs sm:text-sm text-slate-900">Compacto</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              48px alto, 85% saturación y sombra ambiental Nivel 3.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Image Card 2: Microinteracciones 120Hz */}
      <section className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs">
        <div className="h-56 sm:h-72 w-full overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=1200&q=80"
            alt="Móvil con microinteracciones fluidas"
            className="w-full h-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        <div className="p-5 sm:p-7">
          <div className="text-[11px] font-mono uppercase tracking-wider text-[#0052cc] font-bold mb-1.5">
            Microinteracciones
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
            Respuesta Mecánica y Fluidez a 120Hz
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Físicas calibradas con curvas de bezier exclusivas para eliminar vibraciones en el rebote táctil de dispositivos móviles.
          </p>
        </div>
      </section>

      {/* Testimonios Técnicos */}
      <section id="testimonios" className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/80 shadow-xs">
        <div className="text-[11px] font-mono uppercase tracking-wider text-[#0052cc] font-bold mb-2">
          Confianza Técnica
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-5">
          Validado por Líderes Técnicos
        </h3>

        <div className="space-y-4">
          {/* Testimonial 1 */}
          <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-100">
            <div className="flex text-amber-400 gap-0.5 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-3">
              “La cápsula de navegación redujo drásticamente el CLS en todas nuestras auditorías de Lighthouse. Es el estándar para nuestros clientes SaaS.”
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-700 font-mono text-xs font-bold flex items-center justify-center">
                MR
              </div>
              <div>
                <div className="font-semibold text-xs text-slate-900">Mateo Rozas</div>
                <div className="text-[11px] text-slate-500">Head of Front-End, Apex Studio</div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-100">
            <div className="flex text-amber-400 gap-0.5 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-3">
              “Integración limpia y sin colisiones de z-index con modales o popups de Elementor. Indispensable para proyectos de escala.”
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#0052cc] text-white font-mono text-xs font-bold flex items-center justify-center">
                AL
              </div>
              <div>
                <div className="font-semibold text-xs text-slate-900">Andrea Luque</div>
                <div className="text-[11px] text-slate-500">Staff Product Architect</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
