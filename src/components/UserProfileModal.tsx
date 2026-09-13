import { motion } from 'motion/react';
import { User, X, Check, Shield, Code, Settings, ExternalLink } from 'lucide-react';

interface UserProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function UserProfileModal({ isOpen, onClose }: UserProfileModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-xs"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        className="relative bg-white rounded-3xl p-6 w-full max-w-sm border border-slate-200/80 shadow-2xl z-10"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-800 transition"
          aria-label="Cerrar perfil"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-[#352567] text-white flex items-center justify-center shadow-lg shadow-[#352567]/20 mb-3">
            <User className="w-8 h-8" />
          </div>
          <h3 className="font-semibold text-lg text-slate-900">Gustavo Diseñador</h3>
          <p className="text-xs text-[#65519f] font-mono mt-0.5">gust.20220@creestudio.com</p>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-full text-[11px] font-medium mt-3 border border-emerald-200">
            <Check className="w-3 h-3" />
            <span>Licencia Pro Elementor Activa</span>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 space-y-2 text-xs">
          <div className="flex items-center justify-between py-2 px-3 rounded-xl bg-slate-50 text-slate-700">
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#4C3C7F]" /> Rol de Usuario
            </span>
            <span className="font-semibold text-slate-900">Lead Architect</span>
          </div>
          <div className="flex items-center justify-between py-2 px-3 rounded-xl bg-slate-50 text-slate-700">
            <span className="flex items-center gap-2">
              <Code className="w-4 h-4 text-[#4C3C7F]" /> Versión Header
            </span>
            <span className="font-mono font-medium text-slate-900">v0.4.2-Pill</span>
          </div>
          <div className="flex items-center justify-between py-2 px-3 rounded-xl bg-slate-50 text-slate-700">
            <span className="flex items-center gap-2">
              <Settings className="w-4 h-4 text-[#4C3C7F]" /> Workspace
            </span>
            <span className="font-medium text-slate-900">Cree Studio Engine</span>
          </div>
        </div>

        <div className="mt-5">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-full bg-[#352567] text-white font-medium text-xs hover:bg-[#251949] transition shadow-sm"
          >
            Continuar Navegando
          </button>
        </div>
      </motion.div>
    </div>
  );
}
