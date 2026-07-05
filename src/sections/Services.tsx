import { useRef } from 'react';
import { useI18n } from '@/context/I18nContext';
import { motion, useInView } from 'framer-motion';
import { Mic, Globe, FileText } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Mic: <Mic size={40} strokeWidth={1} />,
  Globe: <Globe size={40} strokeWidth={1} />,
  FileText: <FileText size={40} strokeWidth={1} />,
};

export default function Services() {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative min-h-screen py-24 lg:py-32 overflow-hidden"
      style={{
        backgroundImage: `url('/images/bg-services.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Warm overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(28,20,16,0.7)] via-[rgba(28,20,16,0.4)] to-[rgba(28,20,16,0.6)]" />

      {/* Candle decoration */}
      <motion.img
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.6 } : {}}
        transition={{ delay: 0.3, duration: 1 }}
        src="/images/deco-candle.png"
        alt=""
        className="absolute top-8 right-12 z-[3] w-20 h-auto candle-flicker pointer-events-none hidden lg:block"
      />

      {/* Compass decoration */}
      <motion.img
        initial={{ opacity: 0, rotate: -20 }}
        animate={isInView ? { opacity: 0.5, rotate: 0 } : {}}
        transition={{ delay: 0.5, duration: 1 }}
        src="/images/deco-compass.png"
        alt=""
        className="absolute bottom-16 left-8 z-[3] w-24 h-auto pointer-events-none hidden lg:block"
      />

      <div className="relative z-[2] content-max-width px-6 sm:px-8 lg:px-12">
        {/* Main content on aged paper */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left: Heading on paper */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -1 }}
            animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:w-[40%]"
          >
            <div
              className="aged-paper burned-edges rounded-sm p-8 lg:p-10"
              style={{ transform: 'rotate(-1deg)' }}
            >
              <span className="font-serif text-[48px] lg:text-[60px] font-medium italic text-[#8B4513] leading-none opacity-60">
                {t.services.number}
              </span>
              <h2
                className="font-serif font-medium text-[#2C2420] leading-[1.05] tracking-[-0.01em] mt-2"
                style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
              >
                {t.services.heading}
              </h2>
              <p className="font-sans text-[16px] lg:text-[17px] text-[#5C3D2E] leading-[1.7] mt-5">
                {t.services.body}
              </p>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-block mt-5 font-sans text-[14px] font-medium uppercase tracking-[0.06em] text-[#2A3B2E] hover:text-[#1C1410] underline underline-offset-4 transition-all"
              >
                {t.services.cta} &rarr;
              </a>

              {/* Wax seal */}
              <img
                src="/images/deco-wax-seal.png"
                alt=""
                className="w-10 h-10 mt-6 opacity-60"
              />
            </div>
          </motion.div>

          {/* Right: Service cards as pinned notes */}
          <div className="lg:w-[55%] flex flex-col gap-6">
            {t.services.cards.map((card: { title: string; description: string; icon: string }, i: number) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40, rotate: i % 2 === 0 ? 1 : -1 }}
                animate={isInView ? { opacity: 1, y: 0, rotate: i % 2 === 0 ? 0.5 : -0.5 } : {}}
                transition={{
                  duration: 0.7,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: 0.2 + i * 0.15,
                }}
                className="aged-paper burned-edges rounded-sm p-7 lg:p-8"
                style={{
                  transform: `rotate(${i % 2 === 0 ? 0.5 : -0.5}deg)`,
                  marginLeft: i === 1 ? '20px' : '0',
                  marginRight: i === 0 ? '20px' : '0',
                }}
              >
                <div className="flex items-start gap-5">
                  <div className="text-[#8B4513] flex-shrink-0 mt-1">
                    {iconMap[card.icon]}
                  </div>
                  <div>
                    <h3 className="font-serif text-[22px] lg:text-[26px] font-medium text-[#2C2420] leading-[1.2]">
                      {card.title}
                    </h3>
                    <p className="font-sans text-[15px] text-[#5C3D2E] leading-[1.6] mt-2">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
