import Hero from '@/sections/Hero';
import ContactLinks from '@/sections/ContactLinks';
import Services from '@/sections/Services';
import SelectedWork from '@/sections/SelectedWork';
import Quote from '@/sections/Quote';
import Process from '@/sections/Process';
import Testimonials from '@/sections/Testimonials';
import Contact from '@/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <ContactLinks />
      <Services />
      <SelectedWork />
      <Quote />
      <Process />
      <Testimonials />
      <Contact />
    </>
  );
}
