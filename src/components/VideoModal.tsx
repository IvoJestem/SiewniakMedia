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
  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration, setDuration] = useState('0:00');
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);

  const formatTime = (timeInSeconds: number) => {
    if (isNaN(timeInSeconds)) return '0:00';
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setProgress(0);
      setCurrentTime('0:00');
      setIsMuted(false);
      setVolume(0.8);

      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.volume = 0.8;
      }
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(formatTime(videoRef.current.duration));
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration || 1;
      setProgress((current / total) * 100);
      setCurrentTime(formatTime(current));
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetProgress = Number(e.target.value);
    if (videoRef.current && videoRef.current.duration) {
      videoRef.current.currentTime = (targetProgress / 100) * videoRef.current.duration;
      setProgress(targetProgress);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      if (isMuted) {
        const restoredVolume = volume === 0 ? 0.8 : volume;
        videoRef.current.muted = false;
        videoRef.current.volume = restoredVolume;
        setIsMuted(false);
        setVolume(restoredVolume);
      } else {
        videoRef.current.muted = true;
        setIsMuted(true);
      }
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      const shouldMute = newVolume === 0;
      videoRef.current.muted = shouldMute;
      setIsMuted(shouldMute);
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
            className="relative flex flex-col items-center max-w-6xl max-h-[92vh] bg-black border border-zinc-800 rounded-sm overflow-hidden shadow-2xl cursor-default"
          >
            <div className="absolute top-4 right-4 z-30 pointer-events-auto">
              <button
                onClick={onClose}
                aria-label="Zamknij"
                className="w-8 h-8 rounded-full bg-black/80 border border-zinc-700 text-white font-mono text-xs flex items-center justify-center hover:bg-white hover:text-black transition"
              >
                ✕
              </button>
            </div>

            <video
              ref={videoRef}
              src={project.videoSrc}
              autoPlay
              loop
              playsInline
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onCanPlay={(e) => {
                e.currentTarget.muted = false;
                e.currentTarget.volume = volume;
                e.currentTarget.play().catch(() => {
                  e.currentTarget.muted = true;
                  setIsMuted(true);
                });
              }}
              className="max-h-[76vh] w-auto max-w-full object-contain bg-black"
            />

            <div className="w-full bg-[#0a0a0a] border-t border-zinc-800/80 p-4 sm:p-5 flex flex-col gap-3 z-20">
              <div className="flex items-center gap-3 w-full font-mono text-[10px] text-zinc-400">
                <span className="w-10 text-right">{currentTime}</span>
                <div className="relative flex-1 flex items-center h-4 group cursor-pointer">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="0.1"
                    value={progress}
                    onChange={handleSeek}
                    className="w-full h-1 bg-zinc-800 rounded-none appearance-none cursor-pointer accent-white focus:outline-none"
                  />
                </div>
                <span className="w-10 text-left text-zinc-500">{duration}</span>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-1 font-mono">
                <div>
                  <p className="text-[9px] text-zinc-500 uppercase tracking-widest">
                    {project.category.split(' / ')[0]}
                  </p>
                  <h4 className="text-sm sm:text-base font-black uppercase text-white tracking-tight">
                    {project.title}
                  </h4>
                </div>

                <div className="flex items-center gap-3 bg-zinc-900/80 border border-zinc-800 px-3 py-1.5 rounded-sm">
                  <button
                    onClick={toggleMute}
                    className="text-[9px] uppercase tracking-widest text-zinc-300 hover:text-white transition cursor-pointer"
                  >
                    {isMuted || volume === 0 ? 'DŹWIĘK: WYŁ.' : 'DŹWIĘK: WŁ.'}
                  </button>

                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    aria-label="Regulacja głośności"
                    className="w-16 sm:w-20 h-1 bg-zinc-700 appearance-none cursor-pointer accent-white focus:outline-none"
                  />
                  <span className="text-[9px] text-zinc-500 w-7 text-right">
                    {isMuted ? '0%' : `${Math.round(volume * 100)}%`}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}