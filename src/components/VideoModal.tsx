import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { type Project } from './WorkTab';

interface VideoModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function VideoModal({ project, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setProgress(0);
      setIsMuted(true);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration || 1;
      setProgress((current / total) * 100);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex flex-col items-center max-w-6xl max-h-[90vh] bg-black border border-zinc-800 rounded-sm overflow-hidden shadow-2xl cursor-default"
          >
            <div className="absolute top-4 inset-x-4 z-20 flex justify-between items-center pointer-events-auto">
              <button
                onClick={toggleMute}
                className="px-3 py-1 bg-black/70 border border-zinc-700 text-white font-mono text-[9px] uppercase tracking-widest hover:bg-white hover:text-black transition"
              >
                {isMuted ? 'DŹWIĘK: WYŁ.' : 'DŹWIĘK: WŁ.'}
              </button>
              <button
                onClick={onClose}
                aria-label="Zamknij"
                className="w-7 h-7 rounded-full bg-black/70 border border-zinc-700 text-white font-mono text-xs flex items-center justify-center hover:bg-white hover:text-black transition"
              >
                ✕
              </button>
            </div>

            <video
              ref={videoRef}
              src={project.videoSrc}
              autoPlay
              muted={isMuted}
              loop
              playsInline
              onTimeUpdate={handleTimeUpdate}
              className="max-h-[82vh] w-auto max-w-full object-contain bg-black"
            />

            <div className="absolute top-0 inset-x-0 h-0.5 bg-white/20 z-20">
              <div
                className="h-full bg-white transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="w-full bg-linear-to-t from-black via-black/80 to-transparent p-4 sm:p-6 flex items-center justify-between z-10">
              <div>
                <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                  {project.category.split(' / ')[0]}
                </p>
                <h4 className="text-base sm:text-lg font-black uppercase text-white tracking-tight">
                  {project.title}
                </h4>
              </div>
              <span className="text-[10px] font-mono text-zinc-500">
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}