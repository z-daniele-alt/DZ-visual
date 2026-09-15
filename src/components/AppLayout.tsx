import React, { useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import ProblemSection from './ProblemSection';
import TrustBar from './TrustBar';
import Gallery from './Gallery';
import Portfolio from './Portfolio';
import Services from './Services';
import BeforeAfter from './BeforeAfter';
import WhyDZ from './WhyDZ';
import Process from './Process';
import Audiences from './Audiences';
import Contact from './Contact';
import Footer from './Footer';
import { useReveal } from '@/hooks/useReveal';

const AppLayout: React.FC = () => {
  useReveal();

  useEffect(() => {
    document.title = 'DZ Visuals | Premium Fotografie & visueller Content';
    // Handle anchor on first load
    if (window.location.hash) {
      setTimeout(() => {
        const id = window.location.hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
      }, 300);
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] grain-bg overflow-hidden">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <TrustBar />
        <Gallery />
        <Portfolio />
        <Services />
        <BeforeAfter />
        <WhyDZ />
        <Process />
        <Audiences />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
