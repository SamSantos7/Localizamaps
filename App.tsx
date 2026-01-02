import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Authority from './components/Authority';
import Guarantee from './components/Guarantee';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import SEOPage from './components/SEOPage';

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash || '#');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#');
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Determina se estamos em uma página de conteúdo SEO ou na Landing Page
  const isSEOPage = route !== '#' && 
                   route !== '#vantagens' && 
                   route !== '#precos' && 
                   route !== '#depoimentos' && 
                   route !== '#faq' && 
                   route !== '#contato';

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {isSEOPage ? (
          <SEOPage slug={route.replace('#', '')} />
        ) : (
          <>
            <Hero />
            <ProblemSection />
            <SolutionSection />
            <HowItWorks />
            <Pricing />
            <Guarantee />
            <Authority />
            <Testimonials />
            <CTASection />
            <FAQ />
          </>
        )}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;