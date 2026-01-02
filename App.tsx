import React from 'react';
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

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
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
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;