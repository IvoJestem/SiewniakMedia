import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HomeTab from './components/HomeTab';
import WorkTab, { type Project } from './components/WorkTab';
import AboutTab from './components/AboutTab';
import ContactTab from './components/ContactTab';
import CustomCursor from './components/CustomCursor';
import VideoModal from './components/VideoModal';

type Tab = 'home' | 'work' | 'about' | 'contact';

interface TabConfig {
  id: Tab;
  label: string;
}

const TABS: TabConfig[] = [
  { id: 'home', label: 'START' },
  { id: 'work', label: 'PROJEKTY' },
  { id: 'about', label: 'O MNIE' },
  { id: 'contact', label: 'KONTAKT' },
];

const marqueeItems: string[] = [
  'RELACJE Z DNIA MECZOWEGO',
  'STRATEGIA SOCIAL MEDIA',
  'PIONOWE WIDEO 9:16',
  'PAKIETY HIGHLIGHTÓW 4K',
  'WIZERUNEK W SPORCIE',
  'KATOWICE / ŚLĄSK / CAŁA POLSKA'
];

const pageVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -15 },
};

const pageTransition = {
  duration: 0.45,
  ease: [0.22, 1, 0.36, 1] as const,
};

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (mobileMenuOpen) setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-white selection:text-black flex flex-col justify-between relative overflow-x-hidden">
      
      <CustomCursor />

      <VideoModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <header className="px-5 sm:px-8 py-6 sm:py-8 flex items-center justify-between text-[10px] tracking-widest uppercase font-mono z-30">
        <div className="flex items-center gap-6 md:gap-16">
          <button 
            onClick={() => handleTabChange('home')}
            className="font-black text-xl sm:text-2xl tracking-tighter text-white cursor-pointer focus:outline-none"
          >
            SM<span className="text-zinc-500">.</span>
          </button>

          <nav className="hidden sm:flex items-center gap-6 md:gap-8 text-zinc-500 uppercase">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`relative pb-1 transition hover:text-zinc-300 focus:outline-none cursor-pointer ${
                  activeTab === tab.id ? 'text-white font-bold' : ''
                }`}
              >
                {activeTab === tab.id && (
                  <span className="absolute -top-3 left-0 w-full h-px bg-white"></span>
                )}
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-6 text-zinc-400 text-right">
          <p className="leading-relaxed text-[9px]">
            TWÓRCA WIDEO SPORTOWEGO <br />
            <span className="text-zinc-200">&amp; SOCIAL MEDIA CONTENT</span>
          </p>
          <div className="w-12 h-px bg-zinc-800"></div>
        </div>

        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-zinc-400 hover:text-white uppercase tracking-widest text-[11px] p-2 focus:outline-none cursor-pointer"
            aria-label="Przełącz menu"
          >
            {mobileMenuOpen ? '[ ZAMKNIJ ]' : '[ MENU ]'}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-[#050505]/95 backdrop-blur-md z-20 flex flex-col justify-center px-8 sm:hidden font-mono"
          >
            <div className="space-y-6">
              {TABS.map((tab, idx) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className="block text-3xl font-black tracking-tighter uppercase text-left w-full transition-colors cursor-pointer"
                >
                  <span className="text-zinc-600 text-sm mr-4 font-normal">0{idx + 1}</span>
                  <span className={activeTab === tab.id ? 'text-white underline underline-offset-8' : 'text-zinc-400'}>
                    {tab.label}
                  </span>
                </button>
              ))}
            </div>

            <div className="mt-16 pt-8 border-t border-zinc-900 text-zinc-500 text-[10px] uppercase tracking-widest">
              TWÓRCA WIDEO SPORTOWEGO &amp; CONTENTU <br />
              <span className="text-zinc-400">KATOWICE / ŚLĄSK</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 w-full px-5 sm:px-8 pb-12 z-10 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div
              key="home"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
              className="w-full h-full"
            >
              <HomeTab
                onGoToWork={() => setActiveTab('work')}
                onOpenProject={(p) => setSelectedProject(p)}
              />
            </motion.div>
          )}

          {activeTab === 'work' && (
            <motion.div
              key="work"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
              className="w-full h-full"
            >
              <WorkTab onOpenProject={(p) => setSelectedProject(p)} />
            </motion.div>
          )}

          {activeTab === 'about' && (
            <motion.div
              key="about"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
              className="w-full h-full"
            >
              <AboutTab onGoToContact={() => setActiveTab('contact')} />
            </motion.div>
          )}

          {activeTab === 'contact' && (
            <motion.div
              key="contact"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
              className="w-full h-full"
            >
              <ContactTab />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="w-full border-t border-zinc-900 bg-black/40 py-3 overflow-hidden z-20 flex select-none">
        <div className="flex gap-8 whitespace-nowrap animate-marquee font-mono text-[9px] uppercase tracking-[0.25em] text-zinc-600">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <span key={idx} className="flex items-center gap-8">
              <span>{item}</span>
              <span className="text-zinc-800">///</span>
            </span>
          ))}
        </div>
      </footer>

    </div>
  );
}