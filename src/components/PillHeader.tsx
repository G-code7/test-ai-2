import { useState, useEffect, type MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  SlidersHorizontal, 
  User, 
  X, 
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { CreeLogo } from './CreeLogo';
import { MobileMenu } from './MobileMenu';
import { UserProfileModal } from './UserProfileModal';
import { NavItem } from '../types';

interface PillHeaderProps {
  forcedShrink?: boolean;
  isEdgeToEdge?: boolean;
  onOpenCodeModal: () => void;
  onNavigateSection: (id: string) => void;
}

const desktopNavItems: NavItem[] = [
  { id: 'inicio', label: 'Inicio', href: '#hero' },
  { id: 'proyectos', label: 'Proyectos', href: '#workflow' },
  { id: 'servicios', label: 'Servicios', href: '#modulos' },
  { id: 'arquitectura', label: 'Arquitectura', href: '#arquitectura' },
  { id: 'rendimiento', label: 'Rendimiento', href: '#rendimiento' },
  { id: 'nosotros', label: 'Nosotros', href: '#testimonios' },
  { id: 'docs', label: 'Docs', href: '#faq' },
];

export function PillHeader({
  forcedShrink = false,
  isEdgeToEdge = false,
  onOpenCodeModal,
  onNavigateSection,
}: PillHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userProfileOpen, setUserProfileOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const isPastThreshold = window.scrollY > 30;
      setScrolled(isPastThreshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isCompact = forcedShrink || scrolled;

  const handleNavClick = (e: MouseEvent, href: string, id: string) => {
    e.preventDefault();
    setActiveNav(id);
    onNavigateSection(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 pointer-events-none flex justify-center ${
          isEdgeToEdge 
            ? 'px-0 pt-0' 
            : isCompact 
              ? 'pt-2 md:pt-3 px-3 md:px-6' 
              : 'pt-3.5 md:pt-5 px-3 md:px-6'
        }`}
      >
        <motion.div
          layout
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 35,
            mass: 0.8
          }}
          className={`pointer-events-auto w-full transition-all duration-300 ${
            isEdgeToEdge
              ? 'max-w-full rounded-none border-b border-slate-200/80'
              : isCompact
                ? 'max-w-[1040px] rounded-full shadow-[0_16px_36px_-6px_rgba(53,37,103,0.14),0_4px_12px_-2px_rgba(0,0,0,0.06)]'
                : 'max-w-[1180px] rounded-full shadow-[0_12px_32px_-4px_rgba(123,114,148,0.10),0_4px_12px_-2px_rgba(123,114,148,0.05)]'
          } ${
            isCompact
              ? 'bg-white/95 backdrop-blur-xl border border-white/80'
              : 'bg-white/85 backdrop-blur-md border border-white/70'
          }`}
        >
          <div
            className={`flex items-center justify-between transition-all duration-200 ${
              isCompact
                ? 'h-12 md:h-13 px-3 md:px-5'
                : 'h-14 md:h-15 px-3.5 md:px-6'
            }`}
          >
            {/* Left: Brand Identity */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero', 'inicio')}
              className="group flex items-center focus:outline-none"
              aria-label="Cree Estudio Inicio"
            >
              <CreeLogo
                subtitle="Estudio Creativo"
                badge="Elementor Pro"
                collapsed={false}
              />
            </a>

            {/* Center: Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {desktopNavItems.map((item) => {
                const isActive = activeNav === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href, item.id)}
                    className={`relative px-3 py-1.5 rounded-full text-xs font-medium tracking-tight transition-all duration-150 ${
                      isActive
                        ? 'text-[#352567] font-semibold bg-[#f3eeff]'
                        : 'text-slate-600 hover:text-[#352567] hover:bg-slate-100/70'
                    }`}
                  >
                    {item.label}
                    {item.badge && (
                      <span className="ml-1 px-1.5 py-0.2 text-[9px] font-mono bg-[#4C3C7F]/10 text-[#4C3C7F] rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right: Desktop CTA & Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={onOpenCodeModal}
                className="text-xs font-mono text-slate-500 hover:text-[#352567] px-2 py-1 transition"
                title="Ver código CSS & JSON Spec"
              >
                Log in
              </button>

              <a
                href="#contacto"
                onClick={(e) => handleNavClick(e, '#contacto', 'contacto')}
                className={`relative inline-flex items-center justify-center rounded-full bg-[#352567] hover:bg-[#271a4f] active:scale-95 text-white font-medium text-xs tracking-wide transition-all shadow-sm hover:shadow-md ${
                  isCompact ? 'px-4 py-1.5' : 'px-5 py-2'
                }`}
              >
                <span>Contáctanos</span>
              </a>
            </div>

            {/* Mobile / Tablet Controls (Matching Container.jpg) */}
            <div className="flex lg:hidden items-center gap-2">
              {/* Sliders / Filter Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                  mobileMenuOpen
                    ? 'bg-[#ede6fd] text-[#352567] rotate-90 shadow-inner'
                    : 'text-slate-700 hover:text-[#352567] hover:bg-slate-100/80 active:bg-slate-200'
                }`}
                aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <SlidersHorizontal className="w-5 h-5" />
                )}
              </button>

              {/* User Avatar Dark Violet Button (Matching Container.jpg) */}
              <button
                type="button"
                onClick={() => setUserProfileOpen(true)}
                className="w-8.5 h-8.5 rounded-full bg-[#352567] hover:bg-[#271a4f] text-white flex items-center justify-center transition shadow-sm active:scale-95 focus:ring-2 focus:ring-[#4C3C7F]/40"
                aria-label="Perfil y preferencias"
              >
                <User className="w-4.5 h-4.5" />
              </button>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Mobile Animated Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            isOpen={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            onOpenCodeSpec={onOpenCodeModal}
            onNavigate={(href) => {
              setMobileMenuOpen(false);
              onNavigateSection(href);
            }}
          />
        )}
      </AnimatePresence>

      {/* User Profile Modal */}
      <AnimatePresence>
        {userProfileOpen && (
          <UserProfileModal
            isOpen={userProfileOpen}
            onClose={() => setUserProfileOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
