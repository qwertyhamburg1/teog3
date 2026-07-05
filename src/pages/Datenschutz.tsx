import { useI18n } from '@/context/I18nContext';
import { motion } from 'framer-motion';

export default function Datenschutz() {
  const { t } = useI18n();

  return (
    <main className="min-h-screen bg-background pt-[120px] pb-20 px-6 sm:px-8 lg:px-12">
      <div className="content-max-width max-w-[800px]">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-serif text-[clamp(36px,4.5vw,56px)] font-medium text-text leading-[1.05] mb-4"
        >
          {t.privacy.heading}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-sans text-[14px] text-secondary-text mb-12"
        >
          {t.privacy.lastUpdated}
        </motion.p>

        <div className="space-y-12">
          {t.privacy.sections.map((section: { title: string; content: string }, i: number) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
            >
              <h2 className="font-serif text-[22px] font-medium text-text mb-4">
                {section.title}
              </h2>
              <div className="font-sans text-[16px] text-text/80 leading-[1.7] whitespace-pre-line">
                {section.content}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </main>
  );
}
