import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface Project {
  id: string;
  num: string;
  title: string;
  category: string;
  videoSrc: string;
}

export const projects: Project[] = [
  {
    id: 'p01',
    num: '01',
    title: 'Nowy Koktajl Na Barze',
    category: 'Wydarzenie',
    videoSrc: 'video/1.mp4',
  },
  {
    id: 'p02',
    num: '02',
    title: 'Mistrzostwa Drinków',
    category: 'Wydarzenie',
    videoSrc: 'video/2.mp4',
  },
  {
    id: 'p03',
    num: '03',
    title: 'Wydarzenie Restauracyjne',
    category: 'Wydarzenie',
    videoSrc: 'video/3.mp4',
  },
  {
    id: 'p04',
    num: '04',
    title: 'Promocja Marki Na Rowerze',
    category: 'Promocja',
    videoSrc: 'video/4.mp4',
  },
  {
    id: 'p05',
    num: '05',
    title: 'Wydarzenie Imprezowe',
    category: 'Wydarzenie',
    videoSrc: 'video/5.mp4',
  },
  {
    id: 'p06',
    num: '06',
    title: 'Wydarzenie Samochodowe',
    category: 'Wydarzenie',
    videoSrc: 'video/6.mp4',
  },
  {
    id: 'p07',
    num: '07',
    title: 'Mixtape Zawodnika',
    category: 'Mixtape',
    videoSrc: 'video/7.mp4',
  },
  {
    id: 'p08',
    num: '08',
    title: 'Wydarzenie W Plenerze',
    category: 'Wydarzenie',
    videoSrc: 'video/8.mp4',
  },
  {
    id: 'p09',
    num: '09',
    title: 'Mixtape Zawodnika',
    category: 'Mixtape',
    videoSrc: 'video/9.mp4',
  },
  {
    id: 'p10',
    num: '10',
    title: 'Mecz Hokeja',
    category: 'Mecz',
    videoSrc: 'video/10.mp4',
  },
  {
    id: 'p11',
    num: '11',
    title: 'Trailer meczu',
    category: 'Trailer',
    videoSrc: 'video/11.mp4',
  },
  {
    id: 'p12',
    num: '12',
    title: 'Trailer meczu',
    category: 'Trailer',
    videoSrc: 'video/12.mp4',
  },
];

interface WorkTabProps {
  onOpenProject: (p: Project) => void;
}

export default function WorkTab({ onOpenProject }: WorkTabProps) {
  const [activeFilter, setActiveFilter] = useState('WSZYSTKIE');

  const categoryCounts = projects.reduce((acc, project) => {
    const mainCategory = project.category.split(' / ')[0];
    acc['WSZYSTKIE'] = (acc['WSZYSTKIE'] || 0) + 1;
    acc[mainCategory] = (acc[mainCategory] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const categories = Object.keys(categoryCounts).map((key) => ({
    key,
    count: categoryCounts[key],
  }));

  const filteredProjects =
    activeFilter === 'WSZYSTKIE'
      ? projects
      : projects.filter((p) => p.category.split(' / ')[0] === activeFilter);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start animate-fadeIn max-w-[1600px] mx-auto w-full">
      <div className="lg:col-span-3 flex flex-col justify-between h-full sticky top-8">
        <div className="space-y-12">
          <div className="space-y-4">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block">/ 02</span>
            <h1 className="text-6xl font-black uppercase tracking-tighter text-white leading-none">PORTFOLIO</h1>
            <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest leading-relaxed">
              WIDEO SPORTOWE. MEDIA SPOŁECZNOŚCIOWE. <br /> PRAWDZIWE HISTORIE.
            </p>
          </div>

          <nav className="space-y-4 font-mono text-[10px] uppercase tracking-widest pt-8">
            {categories.map((cat) => {
              const isActive = activeFilter === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveFilter(cat.key)}
                  className={`flex items-center justify-between w-full text-left transition-colors relative cursor-pointer py-1 ${
                    isActive ? 'text-white font-bold' : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  <div className="flex items-center">
                    {isActive && (
                      <motion.span
                        layoutId="activeFilterLine"
                        className="absolute -left-6 w-4 h-px bg-white"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span>{cat.key}</span>
                  </div>
                  <span>{cat.count}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest pt-32 space-y-4 hidden lg:block">
          <p>PRZEWIŃ W DÓŁ</p>
          <div className="w-px h-8 bg-zinc-800 ml-1"></div>
          <p className="text-white ml-0.5">↓</p>
        </div>
      </div>

      <div className="lg:col-span-9">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((p) => (
              <WorkCard
                key={p.id}
                project={p}
                onOpen={() => onOpenProject(p)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

function WorkCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const shortTag = project.category.split(' / ')[0];
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [duration, setDuration] = useState('--:--');

  const handleLoadedMetadata = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const totalSeconds = Math.floor(e.currentTarget.duration);
    if (!isNaN(totalSeconds)) {
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      setDuration(`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
    }
  };

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0.1;
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      onClick={onOpen}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative aspect-square rounded-sm border border-zinc-800/60 bg-[#0a0a0a] overflow-hidden group cursor-pointer block"
    >
      <video
        ref={videoRef}
        src={`${project.videoSrc}#t=0.1`}
        muted
        loop
        playsInline
        preload="metadata"
        onLoadedMetadata={handleLoadedMetadata}
        className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition duration-500"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

      <span className="absolute top-5 left-5 text-[9px] font-mono uppercase tracking-widest text-zinc-400">
        {shortTag}
      </span>

      <div className="absolute left-5 bottom-14 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center bg-black/40 backdrop-blur-sm group-hover:scale-110 group-hover:bg-white group-hover:text-black transition duration-300">
        <svg className="w-3 h-3 fill-current pl-0.5" viewBox="0 0 24 24">
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
      </div>

      <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
        <div>
          <h3 className="text-sm font-black uppercase tracking-tight text-white">{project.title}</h3>
        </div>
        <span className="text-[9px] font-mono text-zinc-500">{duration}</span>
      </div>
    </motion.div>
  );
}