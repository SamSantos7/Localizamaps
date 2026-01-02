import React from 'react';
import Button from './Button';
import { LINKS } from '../constants';

const CTASection: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-slate-100" id="contato">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-8">
          Faça sua empresa aparecer <br className="hidden md:block"/> no Google Maps
        </h2>
        
        <div className="flex justify-center items-center">
          <Button href={LINKS.WHATSAPP} variant="primary" className="w-full sm:w-auto min-w-[300px] h-16 text-lg">
            Falar agora no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;