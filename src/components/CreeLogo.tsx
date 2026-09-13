interface CreeLogoProps {
  subtitle?: string;
  badge?: string;
  size?: 'sm' | 'md' | 'lg';
  collapsed?: boolean;
}

export function CreeLoopIcon({ className = "w-5 h-5 text-[#4C3C7F]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Cree Estudio Logo Icon"
    >
      {/* Refined continuous double loop ribbon icon matching Cree Estudio branding */}
      <path
        d="M5 19.5C6.2 19.5 7.4 18.2 8.6 15.2C10.2 11.2 12.3 8.5 15 8.5C18.2 8.5 19 12 17.6 15.6C16.5 18.3 14.8 19.5 13 19.5C11.2 19.5 10.3 18.1 10.8 15.5C11.5 12 14.2 9.5 17.5 9.5C20.5 9.5 22.5 11.8 23.8 15C24.9 17.8 26.1 19.5 27.5 19.5"
        stroke="currentColor"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CreeLogo({ subtitle = "Estudio Creativo", badge, size = 'md', collapsed = false }: CreeLogoProps) {
  return (
    <div className="flex items-center gap-2.5 select-none">
      {/* Circle logo container with soft lavender tint */}
      <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#f3eeff] border border-[#e1d5fd] flex items-center justify-center shrink-0 shadow-sm">
        <CreeLoopIcon className="w-5 h-5 text-[#4C3C7F]" />
      </div>

      {!collapsed && (
        <div className="flex flex-col text-left leading-tight">
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-[#352567] tracking-tight text-[13px] md:text-[14px] uppercase font-sans">
              Cree Estudio
            </span>
            {badge && (
              <span className="hidden md:inline-flex items-center px-1.5 py-0.5 text-[9px] font-mono font-medium uppercase tracking-wider text-[#4C3C7F] bg-[#ece6ff] rounded border border-[#d6c7ff]">
                {badge}
              </span>
            )}
          </div>
          {subtitle && (
            <span className="text-[10px] md:text-[11px] text-[#6b6678] font-normal tracking-normal -mt-0.5">
              {subtitle}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
