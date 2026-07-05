import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import { translations, type Language } from '@/data/translations';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TranslationType = Record<string, any>;

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationType;
  toggleLanguage: () => void;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('de');

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    document.documentElement.lang = lang;
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => {
      const next = prev === 'en' ? 'de' : 'en';
      document.documentElement.lang = next;
      return next;
    });
  }, []);

  const t = translations[language] as unknown as TranslationType;

  return (
    <I18nContext.Provider value={{ language, setLanguage, t, toggleLanguage }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
