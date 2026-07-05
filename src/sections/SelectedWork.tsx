import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '@/context/I18nContext';
import { motion, useInView } from 'framer-motion';

const projectImages = [
  '/images/work-meridian.jpg',
  '/images/work-aesop.jpg',
  '/images/work-kinfolk.jpg',
];

export default function SelectedWork() {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative min-h-screen py-24 lg:py-32 overflow-hidden"
      style={{
        backgroundImage: `url('/images/bg-work.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(28,20,16,0.65)] via-[rgba(28,20,16,0.5)] to-[rgba(28,20,16,0.65)]" />

      {/* Candle */}
      <motion.img
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.5 } : {}}
        transition={{ delay: 0.3, duration: 1 }}
        src="/images/deco-candle.png"
        alt=""
        className="absolute top-12 left-10 z-[3] w-16 h-auto candle-flicker pointer-events-none hidden lg:block"
      />

      <div className="relative z-[2] content-max-width px-6 sm:px-8 lg:px-12">
        {/* Header on paper */}
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-10 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -0.5 }}
            animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="aged-paper burned-edges rounded-sm px-8 py-5 inline-block"
            style={{ transform: 'rotate(-0.5deg)' }}
          >
            <h2
              className="font-serif font-medium text-[#2C2420] leading-[1.05]"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
            >
              {t.work.heading}
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="aged-paper burned-edges rounded-sm px-6 py-3 inline-block"
          >
            <Link
              to="/portfolio"
              className="font-sans text-[14px] font-medium uppercase tracking-[0.06em] text-[#8B4513] hover:text-[#2C2420] underline underline-offset-4 transition-all whitespace-nowrap"
            >
              {t.work.cta} &rarr;
            </Link>
          </motion.div>
        </div>

        <div className="h-8" />

        {/* Project cards as vintage photographs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {t.work.projects.map((project: { category: string; title: string; year: string }, i: number) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, rotate: i === 0 ? -2 : i === 2 ? 2 : 0 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: i === 0 ? -1 : i === 2 ? 1 : 0 } : {}}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 + i * 0.2 }}
              className="group aged-paper burned-edges rounded-sm p-4 pb-6"
              style={{
                transform: `rotate(${i === 0 ? -1 : i === 2 ? 1 : 0}deg)`,
              }}
            >
              <div className="overflow-hidden rounded-sm aspect-[4/3] shadow-[0_4px_15px_rgba(28,20,16,0.3)]">
                <img
                  src={projectImages[i]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.04] sepia-[0.15]"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 px-2">
                <span className="label-uppercase text-[#8B4513] text-[11px]">
                  {project.category}
                </span>
                <h3 className="font-serif text-[22px] lg:text-[26px] font-medium text-[#2C2420] mt-1">
                  {project.title}
                </h3>
                <span className="font-sans text-[13px] text-[#5C3D2E] mt-1 block opacity-60">
                  {project.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
