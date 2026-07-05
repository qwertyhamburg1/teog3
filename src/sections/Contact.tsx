import { useRef, useState } from 'react';
import { useI18n } from '@/context/I18nContext';
import { motion, useInView } from 'framer-motion';

export default function Contact() {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
  const [formData, setFormData] = useState({ name: '', email: '', projectType: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
      if (res.ok) { setStatus('success'); setFormData({ name: '', email: '', projectType: '', message: '' }); }
      else { const data = await res.json().catch(() => ({})); setErrorMsg(data.details || data.error || `Server error: ${res.status}`); setStatus('error'); }
    } catch (err: unknown) { setErrorMsg(err instanceof Error ? err.message : 'Network error'); setStatus('error'); }
  };

  return (
    <section ref={sectionRef} id="contact" className="relative min-h-screen py-24 lg:py-32 overflow-hidden flex items-center" style={{ backgroundImage: `url('/images/bg-contact.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(28,20,16,0.6)] to-[rgba(28,20,16,0.5)]" />
      <motion.img initial={{ opacity: 0 }} animate={isInView ? { opacity: 0.6 } : {}} transition={{ delay: 0.3, duration: 1 }} src="/images/deco-candle.png" alt="" className="absolute top-12 left-12 z-[3] w-20 h-auto candle-flicker pointer-events-none hidden lg:block" />

      <div className="relative z-[2] content-max-width px-4 sm:px-6 lg:px-12 w-full">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="w-full lg:w-[45%]">
            <div className="aged-paper burned-edges rounded-sm p-6 sm:p-8 lg:p-10 h-full" style={{ transform: 'rotate(-0.5deg)' }}>
              <h2 className="font-serif font-medium text-[#2C2420] leading-[0.95]" style={{ fontSize: 'clamp(28px, 5vw, 56px)' }}>{t.contact.heading}</h2>
              <p className="font-sans text-[14px] sm:text-[16px] text-[#5C3D2E] leading-[1.6] mt-4">{t.contact.body}</p>
              <motion.img initial={{ opacity: 0, scale: 0.5 }} animate={isInView ? { opacity: 0.6, scale: 1 } : {}} transition={{ delay: 0.6, duration: 0.6 }} src="/images/deco-wax-seal.png" alt="" className="w-10 h-10 mt-6" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="w-full lg:w-[50%]">
            <div className="aged-paper burned-edges rounded-sm p-6 sm:p-8 lg:p-10 h-full" style={{ transform: 'rotate(0.5deg)' }}>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div><label className="label-uppercase text-[#8B4513] block mb-1.5 text-[11px]">{t.contact.form.name}</label><input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-transparent border-b border-[#8B4513]/30 text-[#2C2420] placeholder:text-[#5C3D2E]/50 py-2 font-sans text-[14px] focus:border-[#8B4513] focus:outline-none transition-colors" placeholder="Your name" required /></div>
                <div><label className="label-uppercase text-[#8B4513] block mb-1.5 text-[11px]">{t.contact.form.email}</label><input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-transparent border-b border-[#8B4513]/30 text-[#2C2420] placeholder:text-[#5C3D2E]/50 py-2 font-sans text-[14px] focus:border-[#8B4513] focus:outline-none transition-colors" placeholder="your@email.com" required /></div>
                <div><label className="label-uppercase text-[#8B4513] block mb-1.5 text-[11px]">{t.contact.form.projectType}</label><select value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })} className="w-full bg-transparent border-b border-[#8B4513]/30 text-[#2C2420] py-2 font-sans text-[14px] focus:border-[#8B4513] focus:outline-none transition-colors appearance-none cursor-pointer" required><option value="" disabled className="bg-[#E8DCC4]">{t.contact.form.projectType}</option>{t.contact.form.projectTypes.map((type: string) => (<option key={type} value={type} className="bg-[#E8DCC4]">{type}</option>))}</select></div>
                <div><label className="label-uppercase text-[#8B4513] block mb-1.5 text-[11px]">{t.contact.form.message}</label><textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={3} className="w-full bg-transparent border-b border-[#8B4513]/30 text-[#2C2420] placeholder:text-[#5C3D2E]/50 py-2 font-sans text-[14px] focus:border-[#8B4513] focus:outline-none transition-colors resize-none" placeholder="Tell me about your project..." required /></div>
                {status === 'success' && <p className="font-sans text-[13px] text-[#2A3B2E] text-center font-medium">Message sent! I will get back to you.</p>}
                {status === 'error' && <p className="font-sans text-[13px] text-[#8B4513] text-center">{errorMsg || 'Something went wrong.'}</p>}
                <button type="submit" disabled={status === 'loading'} className="w-full bg-[#2A3B2E] text-[#F0E6D3] font-sans text-[14px] font-medium tracking-[0.02em] py-3 rounded-sm hover:bg-[#1C1410] transition-colors duration-300 disabled:opacity-50">{status === 'loading' ? 'Sending...' : t.contact.form.submit}</button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
