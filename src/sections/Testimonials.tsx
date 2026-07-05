import { useRef } from 'react';
import { useI18n } from '@/context/I18nContext';
import { motion, useInView } from 'framer-motion';

export default function Testimonials() {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-24 lg:py-32 overflow-hidden"
      style={{
        backgroundImage: `url('/images/bg-testimonials.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(28,20,16,0.65)] via-[rgba(28,20,16,0.45)] to-[rgba(28,20,16,0.65)]" />

      {/* Compass */}
      <motion.img
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.4 } : {}}
        transition={{ delay: 0.4, duration: 1 }}
        src="/images/deco-compass.png"
        alt=""
        className="absolute top-16 right-12 z-[3] w-20 h-auto pointer-events-none hidden lg:block"
      />

      <div className="relative z-[2] content-max-width px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 aged-paper burned-edges rounded-sm px-8 py-5 inline-block"
          style={{ transform: 'rotate(-0.5deg)' }}
        >
          <span className="label-uppercase text-[#8B4513] text-[11px] block mb-2">
            {t.testimonials.label}
          </span>
          <h2
            className="font-serif font-medium text-[#2C2420] leading-[1.05]"
            style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
          >
            {t.testimonials.heading}
          </h2>
        </motion.div>

        {/* Cards — GREEN background like buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {t.testimonials.cards.map((card: { quote: string; author: string; role: string }, i: number) => (
            <motion.div
              key={card.author}
              initial={{ opacity: 0, y: 40, rotate: i === 0 ? -1 : i === 2 ? 1 : 0 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: i === 0 ? -0.5 : i === 2 ? 0.5 : 0 } : {}}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 + i * 0.15 }}
              className="rounded-sm p-8 lg:p-10 relative shadow-card"
              style={{
                transform: `rotate(${i === 0 ? -0.5 : i === 2 ? 0.5 : 0}deg)`,
                backgroundColor: '#2A3B2E',
              }}
            >
              <span
                className="font-serif text-[56px] lg:text-[72px] font-medium text-[#C9A94E] opacity-40 leading-none absolute top-2 left-5"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <p className="font-serif text-[18px] lg:text-[20px] font-normal italic text-[#F0E6D3] leading-[1.5] mt-10 relative z-[1]">
                {card.quote}
              </p>

              <div className="w-10 h-[1px] bg-[#C9A94E]/40 my-5" />

              <p className="font-sans text-[15px] font-medium text-[#E8DCC4]">
                {card.author}
              </p>
              <p className="font-sans text-[13px] text-[#E8DCC4]/70 mt-1">
                {card.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
