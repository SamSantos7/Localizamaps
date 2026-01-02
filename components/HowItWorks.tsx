import React from 'react';
import { StepItem } from '../types';

const steps: StepItem[] = [
  { number: '01', title: 'Você entra em contato', description: 'Envie uma mensagem via WhatsApp para iniciarmos.' },
  { number: '02', title: 'Coletamos as informações', description: 'Você nos envia os dados básicos do seu negócio.' },
  { number: '03', title: 'Fazemos o cadastro', description: 'Realizamos a configuração técnica e profissional.' },
  { number: '04', title: 'Sua empresa aparece', description: 'Seu negócio visível para milhares de clientes.' },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Como funciona
          </h2>
          <p className="text-slate-400">Execução rápida. Sem burocracia.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Decorative line for desktop */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-800 -z-0 transform translate-y-1/2"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 bg-slate-900 md:bg-transparent">
              <div className="w-12 h-12 bg-slate-800 border border-slate-700 text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 shadow-xl mx-auto lg:mx-0">
                {step.number}
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;