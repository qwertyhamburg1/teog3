import { useState, useEffect, useCallback } from 'react';
import { useI18n } from '@/context/I18nContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const mountainImages = [
  { src: '/images/hero-mountain-1.jpg', alt: 'Himalayan peaks' },
  { src: '/images/hero-mountain-2.jpg', alt: 'Mountain monastery' },
];

export default function Hero() {
  const { t } = useI18n();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((index: number) => { setDirection(index > current ? 1 : -1); setCurrent(index); }, [current]);
  const next = useCallback(() => { setDirection(1); setCurrent((p) => (p + 1) % mountainImages.length); }, []);
  const prev = useCallback(() => { setDirection(-1); setCurrent((p) => (p - 1 + mountainImages.length) % mountainImages.length); }, []);
  useEffect(() => { const timer = setInterval(next, 6000); return () => clearInterval(timer); }, [next]);

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  // Split title into 2 lines: "WRITE YOUR" + "STORY" / "SCHREIBE DEINE" + "GESCHICHTE"
  const titleWords = t.hero.title.split(' ');
  const titleLine1 = titleWords.slice(0, -1).join(' ');
  const titleLine2 = titleWords[titleWords.length - 1];

  const scrollText = (
    <>
      <h1
        className="font-serif font-medium leading-[0.95] tracking-[-0.01em] text-[#2C2420] text-center"
        style={{ fontSize: 'clamp(14px, 4.5vw, 64px)' }}
      >
        <span className="block">{titleLine1}</span>
        <span className="block">{titleLine2}</span>
      </h1>
      <div className="mt-2 sm:mt-4 flex flex-wrap justify-center gap-x-2 sm:gap-x-3 gap-y-1">
        {t.hero.tags.map((tag: string) => (
          <span key={tag} className="font-sans text-[8px] sm:text-[11px] font-medium uppercase tracking-[0.08em] text-[#5C3D2E]">{tag}</span>
        ))}
      </div>
      {/* Description now shows on BOTH mobile and desktop */}
      <p className="mt-1 sm:mt-3 font-sans text-[10px] sm:text-[14px] text-[#5C3D2E] max-w-[500px] mx-auto leading-[1.5] sm:leading-[1.6] text-center">
        {t.hero.description}
      </p>
      <a
        href="#work"
        onClick={(e) => { e.preventDefault(); document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' }); }}
        className="mt-2 sm:mt-4 inline-block bg-[#2A3B2E] text-[#F0E6D3] font-sans text-[10px] sm:text-[13px] font-medium tracking-[0.04em] px-3 sm:px-6 py-1.5 sm:py-2.5 rounded-sm hover:bg-[#1C1410] transition-colors duration-300"
      >
        {t.hero.cta}
      </a>
    </>
  );

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div key={current} custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }} className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${mountainImages[current].src})` }} />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(28,20,16,0.4)] via-[rgba(28,20,16,0.2)] to-[rgba(28,20,16,0.6)]" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
        <div className="absolute inset-0 fog-drift opacity-20" style={{ background: 'radial-gradient(ellipse at 50% 80%, rgba(232,220,196,0.15) 0%, transparent 60%)' }} />
      </div>
      <div className="absolute inset-0 z-[3] pointer-events-none" style={{ boxShadow: 'inset 0 0 200px 80px rgba(28,20,16,0.6)' }} />

      {/* DESKTOP: wide horizontal scroll */}
      <div className="absolute inset-0 z-[6] hidden sm:flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
          className="relative w-full"
          style={{ maxWidth: '1100px' }}
        >
          <img src="/images/scroll-hero.png" alt="" className="w-full h-auto" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-[14%] py-[8%]">
            {scrollText}
          </div>
        </motion.div>
      </div>

      {/* MOBILE: vertical/square scroll */}
      <div className="absolute inset-0 z-[6] flex sm:hidden items-center justify-center px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
          className="relative w-full"
          style={{ maxWidth: '400px' }}
        >
          <img src="/images/scroll-quote.png" alt="" className="w-full h-auto" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-[12%] py-[14%]">
            {scrollText}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-1/2 translate-y-1/2 left-4 sm:left-8 z-[7]">
        <button onClick={prev} className="w-8 h-8 sm:w-12 sm:h-12 rounded-full border border-[#E8DCC4]/30 flex items-center justify-center text-[#E8DCC4]/60 hover:text-[#E8DCC4] hover:border-[#E8DCC4]/60 transition-all backdrop-blur-sm bg-[#1C1410]/20" aria-label="Previous"><ChevronLeft size={16} className="sm:w-5 sm:h-5" /></button>
      </div>
      <div className="absolute bottom-1/2 translate-y-1/2 right-4 sm:right-8 z-[7]">
        <button onClick={next} className="w-8 h-8 sm:w-12 sm:h-12 rounded-full border border-[#E8DCC4]/30 flex items-center justify-center text-[#E8DCC4]/60 hover:text-[#E8DCC4] hover:border-[#E8DCC4]/60 transition-all backdrop-blur-sm bg-[#1C1410]/20" aria-label="Next"><ChevronRight size={16} className="sm:w-5 sm:h-5" /></button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[7] flex items-center gap-3">
        {mountainImages.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} className={`transition-all duration-500 rounded-full ${i === current ? 'w-8 h-2 bg-[#E8DCC4]' : 'w-2 h-2 bg-[#E8DCC4]/40 hover:bg-[#E8DCC4]/60'}`} aria-label={`Go to ${i + 1}`} />
        ))}
      </div>

      <motion.img initial={{ opacity: 0 }} animate={{ opacity: 0.7 }} transition={{ delay: 1.5, duration: 1 }} src="/images/deco-candle.png" alt="" className="absolute bottom-6 right-20 z-[7] w-16 sm:w-20 h-auto candle-flicker pointer-events-none hidden sm:block" />
    </section>
  );
}
