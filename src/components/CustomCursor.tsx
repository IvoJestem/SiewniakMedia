import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      const isInteractive = Boolean(
        target && (target.closest('button') || target.closest('a') || target.closest('.cursor-pointer'))
      );

      setIsHovered(isInteractive);

      const offset = isInteractive ? 24 : 6;
      cursorX.set(e.clientX - offset);
      cursorY.set(e.clientY - offset);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  return (
    <motion.div
      style={{
        x: smoothX,
        y: smoothY,
      }}
      className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full mix-blend-difference hidden lg:flex items-center justify-center font-mono text-[8px] font-black uppercase text-black bg-white transition-opacity duration-200 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      animate={{
        width: isHovered ? 48 : 12,
        height: isHovered ? 48 : 12,
      }}
      transition={{ type: 'spring', damping: 25, stiffness: 350, mass: 0.5 }}
    >
      {isHovered && <span>ZOBACZ</span>}
    </motion.div>
  );
}