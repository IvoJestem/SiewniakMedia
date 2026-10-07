import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, type Project } from './WorkTab';

interface HomeTabProps {
  onGoToWork: () => void;
  onOpenProject: (p: Project) => void;
}

export default function HomeTab({ onGoToWork, onOpenProject }: HomeTabProps) {
  const homeProjects = projects.slice(0, 3);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const currentProject = homeProjects[selectedIndex] || homeProjects[0];
  
  const mainVideoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    if (mainVideoRef.current) {
      mainVideoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (mainVideoRef.current) {
      mainVideoRef.current.pause();
      mainVideoRef.current.currentTime = 0.1;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full max-w-[1600px] mx-auto w-full animate-fadeIn">
      
      <div className="lg:col-span-4 space-y-12">
        <div className="space-y-6">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block">/ 01</span>
          <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.85] text-white">
            HISTORIE <br /> SPORTOWE <br /> <span className="text-zinc-600">MOIM <br />OKIEM</span>
          </h1>
        </div>
        <p className="text-[11px] text-zinc-400 max-w-70 font-mono leading-relaxed uppercase tracking-wider">
          Tworzę dynamiczne wideo, formaty pod media społecznościowe oraz wizualne opowieści oddające prawdziwe emocje sportu. Od boiska po szatnię — zamieniam chwile w unikalny content.
        </p>
        <div className="pt-4 flex items-center gap-6">
          <button 
            onClick={onGoToWork} 
            className="w-14 h-14 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-white hover:text-black transition duration-300 group cursor-pointer"
          >
            <span className="text-sm transition-transform group-hover:translate-x-1">→</span>
          </button>
          <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-400">ZOBACZ PROJEKTY</span>
        </div>
        <div className="pt-24 flex gap-8 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
          <a href="https://www.instagram.com/siewniakfilms/" target="_blank" rel="noreferrer" className="hover:text-white transition">INSTAGRAM</a>
          <a href="https://tiktok.com/@huderlokyt/" target="_blank" rel="noreferrer" className="hover:text-white transition">TIKTOK</a>
          <a href="https://www.youtube.com/Huderlok" target="_blank" rel="noreferrer" className="hover:text-white transition">YOUTUBE</a>
        </div>
      </div>

      <div className="lg:col-span-4 flex justify-center h-full items-center">
        <div
          onClick={() => onOpenProject(currentProject)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative w-full max-w-95 aspect-9/16 rounded-xl overflow-hidden border border-zinc-800/50 bg-[#0a0a0a] group cursor-pointer block"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <video
                ref={mainVideoRef}
                src={`${currentProject.videoSrc}#t=0.1`}
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition duration-500"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-black/30 pointer-events-none" />

              <div className="absolute top-6 left-6 flex items-center gap-2">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                <span className="text-[10px] font-mono text-white tracking-widest">ODTWÓRZ</span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div className="space-y-1">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-white">{currentProject.title}</h3>
                </div>
                <span className="text-[10px] font-mono text-zinc-500">/ {currentProject.num}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="lg:col-span-4 flex flex-col justify-between h-full pl-8">
        <div className="space-y-6 pt-12">
          <div className="flex items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-zinc-500">
            <span>WYRÓŻNIONY PROJEKT</span>
            <div className="flex-1 h-px bg-zinc-800"></div>
            <span>{currentProject.num} / 0{homeProjects.length}</span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="space-y-2"
            >
              <h2 className="text-4xl font-black uppercase tracking-tight text-white">{currentProject.title}</h2>
              
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest space-y-1.5 pt-4">
                {currentProject.category.split(' / ').map((cat, idx) => (
                  <p key={idx}>{cat}</p>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="pt-4 flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-zinc-300">
            <button 
              onClick={() => onOpenProject(currentProject)} 
              className="flex items-center gap-3 hover:text-white transition group cursor-pointer"
            >
              <span>PEŁNY EKRAN</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>

        <div className="flex gap-4 pt-16">
          {homeProjects.map((thumb, idx) => {
            const isSelected = selectedIndex === idx;
            return (
              <div
                key={thumb.id}
                onClick={() => setSelectedIndex(idx)}
                className={`relative flex-1 aspect-2/3 rounded-sm overflow-hidden group cursor-pointer transition-all duration-300 ${
                  isSelected ? 'border border-white scale-105 shadow-xl' : 'border border-zinc-800/80 bg-zinc-900 opacity-60 hover:opacity-100'
                }`}
              >
                <video
                  src={`${thumb.videoSrc}#t=0.1`}
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-2 left-2 text-[9px] font-mono text-zinc-300">
                  / {thumb.num}
                </span>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}