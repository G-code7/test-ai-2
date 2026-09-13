import { useState, type FormEvent } from 'react';
import { ChevronDown, HelpCircle, Lock, Code2, CheckCircle2 } from 'lucide-react';
import { FAQItem } from '../types';

const faqItems: FAQItem[] = [
  {
    id: '1',
    question: '¿Requiere Elementor Pro obligatoriamente?',
    answer:
      'No es 100% obligatorio. Está diseñado con arquitectura Flexbox estándar y CSS puro. Funciona en Elementor Free con contenedores habilitados, así como en proyectos nativos con React, Next.js o HTML/CSS puro.',
  },
  {
    id: '2',
    question: '¿Cómo maneja la safe area en iPhones recientes?',
    answer:
      'Utiliza la directiva CSS nativa `env(safe-area-inset-top)` y `viewport-fit=cover`, asegurando que la cápsula flotante jamás colisione con la Dynamic Island ni con el notch de iOS.',
  },
  {
    id: '3',
    question: '¿Afecta la puntuación de Core Web Vitals?',
    answer:
      'Todo lo contrario: reduce a 0.000 el CLS (Cumulative Layout Shift) reservando la altura estática y utilizando transformaciones de GPU compuestas (`translateZ(0)` y `will-change: transform`).',
  },
];

export function FAQSection() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({ '1': false });
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 4000);
  };

  return (
    <div id="faq" className="space-y-8 max-w-3xl mx-auto">
      {/* FAQ Accordion matching screenshot */}
      <section className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/80 shadow-xs">
        <div className="flex items-center gap-2 mb-2 text-[#0052cc] text-xs font-mono font-bold uppercase tracking-wider">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Preguntas Frecuentes</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-5">
          Compatibilidad y Despliegue
        </h3>

        <div className="divide-y divide-slate-100">
          {faqItems.map((item) => {
            const isOpen = openItems[item.id];
            return (
              <div key={item.id} className="py-3.5">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between text-left gap-4 group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-xs sm:text-sm text-slate-900 group-hover:text-[#0052cc] transition">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#0052cc] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="mt-2.5 text-xs sm:text-[13px] text-slate-600 leading-relaxed pl-1">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Box (Matching Blue Container in Image 1.png) */}
      <section id="contacto" className="rounded-3xl bg-[#0052cc] text-white p-6 sm:p-9 text-center shadow-lg relative overflow-hidden">
        {/* Ambient subtle glow */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-md mx-auto">
          <div className="text-[10px] font-mono uppercase tracking-widest text-blue-200 font-semibold mb-2">
            Acceso Anticipado
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2.5">
            Lleva tus Headers al Siguiente Nivel
          </h3>

          <p className="text-blue-100 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
            Recibe la biblioteca completa de componentes estilo cápsula para Elementor Pro directamente en tu bandeja.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@agencia.com"
              required
              className="w-full px-5 py-3 rounded-full bg-white text-slate-900 placeholder-slate-400 text-xs sm:text-sm text-center focus:outline-none focus:ring-2 focus:ring-white/80 shadow-xs"
            />

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-full bg-[#1e232d] hover:bg-[#141720] text-white font-medium text-xs sm:text-sm transition shadow-md active:scale-98"
            >
              {submitted ? '¡Suscrito con éxito!' : 'Obtener Componente Gratis'}
            </button>
          </form>

          <div className="flex items-center justify-center gap-5 mt-5 text-[11px] text-blue-200/90 font-mono">
            <div className="flex items-center gap-1.5">
              <Lock className="w-3 h-3" />
              <span>Sin spam</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Code2 className="w-3 h-3" />
              <span>Código limpio</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
