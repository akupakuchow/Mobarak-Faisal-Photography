import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[10001] flex flex-col items-center justify-center bg-mf-black text-mf-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="font-serif text-4xl md:text-6xl tracking-widest uppercase mb-8">
        Mobarak Faisal
      </div>
      <div className="w-64 h-[1px] bg-white/20 relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-full bg-mf-accent"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
      <div className="mt-4 font-mono text-xs tracking-widest text-mf-accent">
        {Math.min(progress, 100)}%
      </div>
    </motion.div>
  );
}
