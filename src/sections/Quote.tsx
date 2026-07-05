import { useRef } from 'react';
import { useI18n } from '@/context/I18nContext';
import { motion, useInView } from 'framer-motion';

export default function Quote() {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen py-24 lg:py-32 flex items-center overflow-hidden"
      style={{
        backgroundImage: `url('/images/bg-quote.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(28,20,16,0.7)] to-[rgba(28,20,16,0.5)]" />

      <motion.img
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.55 } : {}}
        transition={{ delay: 0.3, duration: 1 }}
        src="/images/deco-candle.png"
        alt=""
        className="absolute bottom-12 right-16 z-[3] w-20 h-auto candle-flicker pointer-events-none hidden lg:block"
      />

      {/* Big squared scroll */}
      <div className="relative z-[2] content-max-width mx-auto px-6 sm:px-8 lg:px-12 w-full flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.9 }}
          className="relative w-full"
          style={{ maxWidth: '750px' }}
        >
          {/* Scroll image */}
          <img src="/images/scroll-quote.png" alt="" className="w-full h-auto" />
          {/* Text overlay — moved UP and darker text for contrast */}
          <div className="absolute inset-0 flex flex-col items-center justify-start px-[12%] sm:px-[14%] pt-[14%] sm:pt-[12%] pb-[10%]">
            {/* Opening quote */}
            <span
              className="font-serif text-[50px] sm:text-[70px] lg:text-[90px] font-medium text-[#5C2E15] opacity-30 leading-none block"
              aria-hidden="true"
            >
              &ldquo;
            </span>

            {/* Quote text — darker for contrast against parchment */}
            <blockquote
              className="font-serif italic text-[#1C1410] leading-[1.25] text-center relative z-[1] -mt-2 sm:-mt-4"
              style={{ 
                fontSize: 'clamp(17px, 2.8vw, 28px)',
                textShadow: '0 1px 2px rgba(232, 220, 196, 0.6)'
              }}
            >
              {t.quote.text}
            </blockquote>

            {/* Divider line — darker */}
            <div className="w-16 h-[1.5px] bg-[#5C2E15]/50 my-4 sm:my-5" />

            {/* Attribution — darker */}
            <cite className="block font-sans text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.08em] text-[#3D2B1F] not-italic text-center">
              {t.quote.attribution}
            </cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
