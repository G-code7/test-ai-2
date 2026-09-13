import { useState } from 'react';
import { LayoutGrid, TrendingUp, Layers, Users } from 'lucide-react';

interface BottomMobileDockProps {
  onNavigateSection: (id: string) => void;
}

export function BottomMobileDock({ onNavigateSection }: BottomMobileDockProps) {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 'grid', icon: LayoutGrid, href: '#hero', label: 'Inicio' },
    { id: 'stats', icon: TrendingUp, href: '#rendimiento', label: 'Métricas' },
    { id: 'layers', icon: Layers, href: '#modulos', label: 'Componentes' },
    { id: 'users', icon: Users, href: '#testimonios', label: 'Equipo' },
  ];

  return (
    <div className="fixed bottom-4 left-0 right-0 z-30 flex justify-center pointer-events-none px-4 md:hidden">
      <div className="pointer-events-auto flex items-center justify-around gap-6 px-6 py-2.5 bg-white/90 backdrop-blur-xl rounded-full border border-slate-200/90 shadow-[0_10px_30px_-5px_rgba(53,37,103,0.15)] max-w-xs w-full">
        {tabs.map((tab, idx) => {
          const Icon = tab.icon;
          const isActive = activeTab === idx;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(idx);
                onNavigateSection(tab.href);
              }}
              className={`p-2 rounded-full transition-all duration-200 ${
                isActive
                  ? 'text-[#0052cc] bg-blue-50 scale-110'
                  : 'text-slate-400 hover:text-slate-700'
              }`}
              aria-label={tab.label}
            >
              <Icon className="w-5 h-5" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
