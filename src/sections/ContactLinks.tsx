import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useI18n } from '@/context/I18nContext';
import { Instagram, Linkedin, Mail } from 'lucide-react';

function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const contactLinks = [
  { name: 'WhatsApp', href: 'https://wa.me/491234567890', icon: <WhatsAppIcon size={22} /> },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/teogoussen', icon: <Linkedin size={22} /> },
  { name: 'Instagram', href: 'https://instagram.com/teogoussen', icon: <Instagram size={22} /> },
  { name: 'Email', href: 'mailto:example@gmail.com', icon: <Mail size={22} /> },
];

export default function ContactLinks() {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-24 overflow-hidden"
      style={{
        backgroundImage: `url('/images/bg-contactlinks.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(28,20,16,0.7)] via-[rgba(28,20,16,0.5)] to-[rgba(28,20,16,0.7)]" />

      <div className="relative z-[2] content-max-width px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -0.5 }}
          animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <div className="aged-paper burned-edges rounded-sm px-8 py-5 inline-block" style={{ transform: 'rotate(-0.5deg)' }}>
            <h2 className="font-serif font-medium text-[#2C2420] leading-[0.95]" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
              {t.contactLinks.heading}
            </h2>
            <p className="font-sans text-[14px] text-[#5C3D2E] mt-3 max-w-[400px] mx-auto leading-[1.6]">
              {t.contactLinks.subtitle}
            </p>
          </div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 lg:gap-5 max-w-[700px] mx-auto">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="aged-paper burned-edges rounded-sm px-6 py-5 flex items-center gap-3 hover:shadow-[0_8px_32px_rgba(28,20,16,0.2)] transition-shadow duration-300 group"
              style={{ transform: `rotate(${i % 2 === 0 ? 0.5 : -0.5}deg)` }}
            >
              <span className="text-[#8B4513] group-hover:text-[#2C2420] transition-colors">{link.icon}</span>
              <span className="font-sans text-[13px] font-medium uppercase tracking-[0.06em] text-[#2C2420]">
                {t.contactLinks.links[link.name.toLowerCase() as keyof typeof t.contactLinks.links] || link.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
