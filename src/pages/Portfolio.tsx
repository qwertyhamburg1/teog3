import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { useI18n } from '@/context/I18nContext';

const portfolioImages = [
  '/images/portfolio-1.jpg',
  '/images/portfolio-2.jpg',
  '/images/portfolio-3.jpg',
  '/images/portfolio-4.jpg',
  '/images/portfolio-5.jpg',
  '/images/portfolio-6.jpg',
];

export default function Portfolio() {
  const { t } = useI18n();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const projects = t.portfolio?.projects || [];

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % projects.length);
  }, [projects.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  }, [projects.length]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  const item = projects[current];
  if (!item) return null;

  return (
    <main className="min-h-screen bg-background pt-[100px] pb-20">
      <div className="content-max-width px-6 sm:px-8 lg:px-12">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-sans text-[14px] uppercase tracking-[0.06em] text-secondary-text hover:text-text transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            {t.portfolio?.back || 'Back to Home'}
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <h1
            className="font-serif font-medium text-text leading-[1.05]"
            style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
          >
            {t.portfolio?.heading || t.work.heading}
          </h1>
          <p className="font-sans text-[16px] text-secondary-text mt-3 max-w-[500px] leading-[1.6]">
            {t.portfolio?.subtitle || ''}
          </p>
        </motion.div>

        {/* Main carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Navigation row */}
          <div className="flex items-center justify-between mb-6">
            <span className="label-uppercase text-secondary-text">
              {String(current + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-full border border-secondary-text/30 flex items-center justify-center text-text/60 hover:text-text hover:border-text/50 transition-all duration-300"
                aria-label="Previous project"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-11 h-11 rounded-full border border-secondary-text/30 flex items-center justify-center text-text/60 hover:text-text hover:border-text/50 transition-all duration-300"
                aria-label="Next project"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Carousel content */}
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
                className="flex flex-col lg:flex-row gap-10 lg:gap-16"
              >
                {/* Image */}
                <div className="lg:w-[55%] w-full">
                  <div className="overflow-hidden rounded-[12px] aspect-[4/3] shadow-card">
                    <img
                      src={portfolioImages[current]}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Text content */}
                <div className="lg:w-[40%] w-full flex flex-col justify-center">
                  <span className="label-uppercase text-gold mb-3">
                    {item.category} · {item.year}
                  </span>
                  <h2 className="font-serif text-[32px] lg:text-[40px] font-medium text-text leading-[1.1]">
                    {item.title}
                  </h2>
                  <div className="w-12 h-[1px] bg-secondary-text/30 my-6" />
                  <p className="font-sans text-[16px] lg:text-[18px] text-text/80 leading-[1.7]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Thumbnail strip */}
          <div className="flex gap-3 mt-10 overflow-x-auto pb-2">
            {portfolioImages.map((thumb: string, i: number) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`flex-shrink-0 w-20 h-14 rounded-[6px] overflow-hidden transition-all duration-300 ${
                  i === current
                    ? 'ring-2 ring-primary-green ring-offset-2 ring-offset-background opacity-100'
                    : 'opacity-50 hover:opacity-80'
                }`}
              >
                <img
                  src={thumb}
                  alt={projects[i]?.title || ''}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
