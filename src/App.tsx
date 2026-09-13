import { useState } from 'react';
import { PillHeader } from './components/PillHeader';
import { TelemetryDock } from './components/TelemetryDock';
import { HeroSection } from './components/HeroSection';
import { PerformanceSection } from './components/PerformanceSection';
import { ModulesSection } from './components/ModulesSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { BottomMobileDock } from './components/BottomMobileDock';
import { CodeModal } from './components/CodeModal';

export default function App() {
  const [forcedShrink, setForcedShrink] = useState(false);
  const [isEdgeToEdge, setIsEdgeToEdge] = useState(false);
  const [codeModalOpen, setCodeModalOpen] = useState(false);
  const [deviceView, setDeviceView] = useState<'responsive' | 'mobile' | 'desktop'>('responsive');

  const scrollToSection = (href: string) => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleResetScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setForcedShrink(false);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans relative antialiased">
      {/* Floating Pill Header */}
      <PillHeader
        forcedShrink={forcedShrink}
        isEdgeToEdge={isEdgeToEdge}
        onOpenCodeModal={() => setCodeModalOpen(true)}
        onNavigateSection={scrollToSection}
      />

      {/* Main Content Area */}
      <div className={`transition-all duration-300 ${
        deviceView === 'mobile'
          ? 'max-w-[430px] mx-auto my-6 bg-white rounded-[44px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] border-[8px] border-slate-900 overflow-hidden relative'
          : deviceView === 'desktop'
            ? 'max-w-6xl mx-auto'
            : 'w-full'
      }`}>
        {/* Device Frame Notch if mobile mock is active */}
        {deviceView === 'mobile' && (
          <div className="sticky top-0 left-0 right-0 h-6 bg-slate-900 z-50 flex items-center justify-center">
            <div className="w-24 h-3.5 bg-slate-950 rounded-full" />
          </div>
        )}

        <main className="px-4 sm:px-6 pt-24 sm:pt-28 md:pt-32 pb-24">
          {/* Top Live Telemetry and Playground Dock */}
          <TelemetryDock
            forcedShrink={forcedShrink}
            onToggleShrink={() => setForcedShrink(!forcedShrink)}
            isEdgeToEdge={isEdgeToEdge}
            onToggleEdgeToEdge={() => setIsEdgeToEdge(!isEdgeToEdge)}
            onResetScroll={handleResetScroll}
            deviceView={deviceView}
            onChangeDeviceView={setDeviceView}
          />

          {/* Hero Section */}
          <HeroSection
            onOpenCodeSpec={() => setCodeModalOpen(true)}
            onScrollToLiveTest={() => scrollToSection('#playground')}
          />

          {/* Performance & Flexbox v0.4 Architecture */}
          <div className="mt-8 sm:mt-12">
            <PerformanceSection onOpenCodeModal={() => setCodeModalOpen(true)} />
          </div>

          {/* Modules, Workflow, Shrink Comparison, & Testimonials */}
          <div className="mt-8 sm:mt-12">
            <ModulesSection />
          </div>

          {/* FAQ Accordion & Contact Callout */}
          <div className="mt-8 sm:mt-12">
            <FAQSection />
          </div>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>

      {/* Mobile Floating Bottom Dock (Visible on Mobile / Responsive) */}
      <BottomMobileDock onNavigateSection={scrollToSection} />

      {/* Modal for CSS and JSON Specifications */}
      <CodeModal
        isOpen={codeModalOpen}
        onClose={() => setCodeModalOpen(false)}
      />
    </div>
  );
}
