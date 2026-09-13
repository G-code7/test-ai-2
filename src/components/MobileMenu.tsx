import { motion } from 'motion/react';
import { 
  Home, 
  Briefcase, 
  Sparkles, 
  Layers, 
  Cpu, 
  Gauge, 
  FileText, 
  ArrowRight, 
  Search,
  ExternalLink,
  Code2
} from 'lucide-react';
import { NavItem } from '../types';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCodeSpec: () => void;
  activeSection?: string;
  onNavigate: (href: string) => void;
}

const menuItems: Array<NavItem & { icon: typeof Home; tag?: string }> = [
  { id: 'inicio', label: 'Inicio', href: '#hero', icon: Home },
  { id: 'playground', label: 'Playground Sticky', href: '#playground', icon: Cpu, tag: 'Interactivo' },
  { id: 'proyectos', label: 'Proyectos & Casos', href: '#workflow', icon: Briefcase },
  { id: 'servicios', label: 'Servicios de Estudio', href: '#modulos', icon: Sparkles },
  { id: 'componentes', label: 'Componentes Flexbox', href: '#arquitectura', icon: Layers, tag: 'v0.4' },
  { id: 'rendimiento', label: 'Rendimiento & CLS', href: '#rendimiento', icon: Gauge, tag: '60 FPS' },
  { id: 'docs', label: 'Documentación & FAQ', href: '#faq', icon: FileText },
];

export function MobileMenu({ isOpen, onClose, onOpenCodeSpec, onNavigate }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 md:hidden">
      {/* Backdrop overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/25 backdrop-blur-sm"
        aria-hidden="true"
      />

      {/* Floating Menu Card anchored directly below the pill header */}
      <div className="fixed top-20 left-0 right-0 px-4 max-w-md mx-auto z-50">
        <motion.div
          initial={{ opacity: 0, y: -16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -12, scale: 0.96 }}
          transition={{ type: "spring", damping: 25, stiffness: 350 }}
          className="bg-white/95 backdrop-blur-xl rounded-3xl border border-white/80 shadow-[0_20px_50px_-10px_rgba(53,37,103,0.18),0_10px_20px_-5px_rgba(0,0,0,0.04)] p-4 overflow-hidden"
        >
          {/* Header indicator inside menu */}
          <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#6b6678] font-medium">
              Menú de Navegación
            </span>
            <span className="px-2 py-0.5 text-[10px] font-mono text-[#4C3C7F] bg-[#f3eeff] rounded-full font-semibold">
              Elementor Pro Ready
            </span>
          </div>

          {/* Quick Search */}
          <div className="relative mb-3">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar sección, componente o spec..."
              className="w-full bg-slate-50 border border-slate-200/80 rounded-full pl-9 pr-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#4C3C7F] focus:ring-2 focus:ring-[#4C3C7F]/10 transition"
            />
          </div>

          {/* Nav links */}
          <nav className="flex flex-col gap-1 max-h-[52vh] overflow-y-auto pr-1 py-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(item.href);
                    onClose();
                  }}
                  className="flex items-center justify-between px-3 py-2.5 rounded-2xl hover:bg-[#f5f1fe] active:bg-[#ede6fd] text-slate-700 hover:text-[#352567] transition group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-slate-100/90 group-hover:bg-[#e8deff] text-slate-600 group-hover:text-[#4C3C7F] flex items-center justify-center transition">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.tag && (
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-100 text-slate-500 rounded-full font-medium">
                        {item.tag}
                      </span>
                    )}
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#4C3C7F] group-hover:translate-x-0.5 transition" />
                  </div>
                </a>
              );
            })}
          </nav>

          {/* Quick Action Footer */}
          <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                onClose();
                onOpenCodeSpec();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full border border-[#4C3C7F]/25 bg-[#faf8ff] text-[#4C3C7F] hover:bg-[#f3eeff] font-sans text-xs font-semibold transition shadow-xs"
            >
              <Code2 className="w-4 h-4" />
              <span>Ver Especificación CSS & JSON</span>
            </button>

            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('#contacto');
                onClose();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#352567] hover:bg-[#281b50] text-white text-xs font-medium tracking-wide shadow-md transition"
            >
              <span>Contáctanos</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
