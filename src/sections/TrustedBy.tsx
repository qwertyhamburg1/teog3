import { useI18n } from '@/context/I18nContext';

const logos = [
  'Meridian',
  'Aesop',
  'Kinfolk',
  'Monocle',
  'Cereal',
  'Drift',
  'Saturdays',
  'Muji',
];

export default function TrustedBy() {
  const { t } = useI18n();

  return (
    <section className="bg-light-section py-12 overflow-hidden">
      <p className="label-uppercase text-secondary-text text-center mb-8">
        {t.trusted.label}
      </p>
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-ticker whitespace-nowrap">
          {[...logos, ...logos].map((logo, i) => (
            <span
              key={`${logo}-${i}`}
              className="inline-block mx-12 font-serif text-[24px] font-medium text-text/30 tracking-[0.04em] select-none"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
