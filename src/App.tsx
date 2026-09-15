import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HomeTab from './components/HomeTab';
import WorkTab from './components/WorkTab';
import AboutTab from './components/AboutTab';
import ContactTab from './components/ContactTab';
import CustomCursor from './components/CustomCursor';
import VideoModal from './components/VideoModal';
import { marqueeItems, type Project } from './data/projects';

type Tab = 'home' | 'work' | 'about' | 'contact';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pageVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 },
  };

  const pageTransition = {
    duration: 0.45,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
  };

  const tabs: Tab[] = ['home', 'work', 'about', 'contact'];

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-white selection:text-black flex flex-col justify-between relative overflow-x-hidden">
      
      {/* Brutalistyczny kursor */}
      <CustomCursor />

      {/* Pełnoekranowy modal odtwarzacza wideo */}
      <VideoModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* NAVBAR */}
      <header className="px-5 sm:px-8 py-6 sm:py-8 flex items-center justify-between text-[10px] tracking-widest uppercase font-mono z-30">
        <div className="flex items-center gap-6 md:gap-16">
          <button 
            onClick={() => handleTabChange('home')}
            className="font-black text-xl sm:text-2xl tracking-tighter text-white cursor-pointer focus:outline-none"
          >
            SM<span className="text-zinc-500">.</span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden sm:flex items-center gap-6 md:gap-8 text-zinc-500 uppercase">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`relative pb-1 transition hover:text-zinc-300 focus:outline-none cursor-pointer ${
                  activeTab === tab ? 'text-white' : ''
                }`}
              >
                {activeTab === tab && (
                  <span className="absolute -top-3 left-0 w-full h-px bg-white"></span>
                )}
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Prawa strona - Desktop info */}
        <div className="hidden md:flex items-center gap-6 text-zinc-400 text-right">
          <p className="leading-relaxed text-[9px]">
            SPORTS VIDEOGRAPHER <br />
            <span className="text-zinc-200">&amp; SOCIAL MEDIA CREATOR</span>
          </p>
          <div className="w-12 h-px bg-zinc-800"></div>
        </div>

        {/* Przycisk Menu na Mobile */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-zinc-400 hover:text-white uppercase tracking-widest text-[11px] p-2 focus:outline-none cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? '[ CLOSE ]' : '[ MENU ]'}
          </button>
        </div>
      </header>

      {/* Brutalistyczna pełnoekranowa nakładka nawigacji na Mobile */}
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
              <span className="text-[10px] text-zinc-600 tracking-[0.3em] uppercase block mb-4">
                // NAVIGATION
              </span>
              {tabs.map((tab, idx) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className="block text-3xl font-black tracking-tighter uppercase text-left w-full transition-colors"
                >
                  <span className="text-zinc-600 text-sm mr-4 font-normal">0{idx + 1}</span>
                  <span className={activeTab === tab ? 'text-white underline underline-offset-8' : 'text-zinc-400'}>
                    {tab}
                  </span>
                </button>
              ))}
            </div>

            <div className="mt-16 pt-8 border-t border-zinc-900 text-zinc-500 text-[10px] uppercase tracking-widest">
              SPORTS VIDEOGRAPHER &amp; CREATOR <br />
              <span className="text-zinc-400">KATOWICE / SILESIA</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* GŁÓWNA ZAWARTOŚĆ */}
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

      {/* STOPKA TICKER */}
      <footer className="w-full border-t border-zinc-900 bg-black/40 py-3 overflow-hidden z-20 flex">
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