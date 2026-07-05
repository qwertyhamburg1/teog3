import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useI18n } from '@/context/I18nContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const { t, language, toggleLanguage } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const navLinks = [
    { label: t.nav.services, href: isHome ? '#services' : '/#services' },
    { label: t.nav.work, href: isHome ? '#work' : '/#work' },
    { label: t.nav.about, href: isHome ? '#about' : '/#about' },
    { label: t.nav.contact, href: isHome ? '#contact' : '/#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] h-[72px] transition-all duration-500 ${
          scrolled || !isHome
            ? 'bg-[rgba(28,20,16,0.95)] backdrop-blur-[8px]'
            : 'bg-transparent'
        }`}
      >
        <div className="h-full flex items-center justify-between px-6 sm:px-8 lg:px-12 max-w-[100vw]">
          <Link
            to="/"
            className={`font-['Pinyon_Script',cursive] text-[44px] leading-none transition-colors duration-300 flex-shrink-0 ${
              scrolled || !isHome ? 'text-[#E8DCC4]' : 'text-white'
            }`}
          >
            TG
          </Link>

          <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-sans text-[14px] uppercase tracking-[0.06em] transition-colors duration-300 hover:opacity-70 ${
                  scrolled || !isHome ? 'text-[#E8DCC4]' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 flex-shrink-0">
            <button
              onClick={toggleLanguage}
              className={`font-sans text-[13px] font-medium uppercase tracking-[0.08em] transition-colors duration-300 hover:opacity-70 ${
                scrolled || !isHome ? 'text-[#E8DCC4]' : 'text-white'
              }`}
            >
              {language === 'en' ? 'DE' : 'EN'}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 transition-colors duration-300 ${
                scrolled || !isHome ? 'text-[#E8DCC4]' : 'text-white'
              }`}
              aria-label={mobileOpen ? t.nav.close : t.nav.menu}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99] bg-[rgba(28,20,16,0.98)] backdrop-blur-[12px] flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                  className="font-serif text-[36px] font-medium text-[#E8DCC4] hover:text-[#C9A94E] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
