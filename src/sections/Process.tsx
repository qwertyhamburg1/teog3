import { useState, useCallback } from 'react';
import { useI18n } from '@/context/I18nContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Process() {
  const { t } = useI18n();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % t.process.steps.length);
  }, [t.process.steps.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + t.process.steps.length) % t.process.steps.length);
  }, [t.process.steps.length]);

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 120 : -120, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -120 : 120, opacity: 0 }),
  };

  const step = t.process.steps[current];

  return (
    <section
      className="relative min-h-screen py-24 lg:py-32 overflow-hidden"
      style={{
        backgroundImage: `url('/images/bg-process.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(28,20,16,0.6)] via-[rgba(28,20,16,0.4)] to-[rgba(28,20,16,0.6)]" />

      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 1 }}
        src="/images/deco-pen.png"
        alt=""
        className="absolute bottom-20 right-12 z-[3] w-24 h-auto pointer-events-none hidden lg:block rotate-45"
      />

      <div className="relative z-[2] content-max-width px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-10 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -0.5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="aged-paper burned-edges rounded-sm px-8 py-5 inline-block"
            style={{ transform: 'rotate(-0.5deg)' }}
          >
            <h2
              className="font-serif font-medium text-[#2C2420] leading-[1.05]"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
            >
              {t.process.title}
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3 aged-paper burned-edges rounded-sm px-4 py-2"
          >
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[#8B4513]/30 flex items-center justify-center text-[#5C3D2E] hover:text-[#2C2420] hover:border-[#8B4513]/50 transition-all duration-300"
              aria-label="Previous step"
            >
              <ChevronLeft size={16} />
            </button>
            <span className="label-uppercase text-[#5C3D2E] text-[11px]">
              {String(current + 1).padStart(2, '0')} / {String(t.process.steps.length).padStart(2, '0')}
            </span>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-[#8B4513]/30 flex items-center justify-center text-[#5C3D2E] hover:text-[#2C2420] hover:border-[#8B4513]/50 transition-all duration-300"
              aria-label="Next step"
            >
              <ChevronRight size={16} />
            </button>
          </motion.div>
        </div>

        <div className="relative overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="aged-paper burned-edges rounded-sm p-10 lg:p-12 max-w-[520px] mx-auto relative"
              style={{ transform: `rotate(${current % 2 === 0 ? 0.5 : -0.5}deg)` }}
            >
              {/* Number — absolutely positioned at top */}
              <span
                className="font-serif text-[72px] lg:text-[90px] font-medium text-[#8B4513] opacity-30 leading-none block absolute top-2 left-8 lg:left-10 pointer-events-none select-none"
                aria-hidden="true"
              >
                {step.number}
              </span>

              {/* Title — pushed down with padding to clear the number */}
              <h3 className="font-serif text-[30px] lg:text-[36px] font-medium text-[#2C2420] leading-[1.1] pt-20 lg:pt-24 relative z-[1]">
                {step.title}
              </h3>

              <div className="w-12 h-[1px] bg-[#8B4513]/30 my-5" />
              <p className="font-sans text-[16px] lg:text-[17px] text-[#5C3D2E] leading-[1.7]">
                {step.body}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-3 mt-10">
          {t.process.steps.map((_: unknown, i: number) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`transition-all duration-500 rounded-full ${
                i === current ? 'w-8 h-2 bg-[#8B4513]' : 'w-2 h-2 bg-[#8B4513]/30 hover:bg-[#8B4513]/50'
              }`}
              aria-label={`Go to step ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
