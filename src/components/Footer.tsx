import { CreeLogo } from './CreeLogo';

export function Footer() {
  return (
    <footer className="mt-16 sm:mt-24 border-t border-slate-200/80 bg-white/60 backdrop-blur-sm pt-12 pb-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-10 border-b border-slate-100">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <CreeLogo subtitle="Estudio Creativo" />
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              Herramientas de ingeniería de componentes de alto rendimiento para desarrolladores avanzados y agencias de software.
            </p>
          </div>

          {/* Links 1 */}
          <div className="space-y-2.5">
            <div className="text-xs font-semibold text-slate-900">Soluciones</div>
            <ul className="space-y-2 text-xs text-slate-500">
              <li><a href="#playground" className="hover:text-[#0052cc] transition">Componentes Modulares</a></li>
              <li><a href="#arquitectura" className="hover:text-[#0052cc] transition">Framework Headless</a></li>
              <li><a href="#rendimiento" className="hover:text-[#0052cc] transition">Optimizador DOM</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div className="space-y-2.5">
            <div className="text-xs font-semibold text-slate-900">Recursos</div>
            <ul className="space-y-2 text-xs text-slate-500">
              <li><a href="#modulos" className="hover:text-[#0052cc] transition">Documentación API</a></li>
              <li><a href="#workflow" className="hover:text-[#0052cc] transition">Guías de Estilo</a></li>
              <li><a href="#faq" className="hover:text-[#0052cc] transition">Changelog v2.4</a></li>
            </ul>
          </div>

          {/* Links 3 */}
          <div className="space-y-2.5">
            <div className="text-xs font-semibold text-slate-900">Compañía</div>
            <ul className="space-y-2 text-xs text-slate-500">
              <li><a href="#testimonios" className="hover:text-[#0052cc] transition">Sobre Nosotros</a></li>
              <li><a href="#faq" className="hover:text-[#0052cc] transition">Privacidad y Términos</a></li>
              <li><a href="#contacto" className="hover:text-[#0052cc] transition">Soporte Técnico</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400 font-mono">
          <div>
            © 2025 Cree Studio Toolkit Inc. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Sistemas 100% Operativos</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
