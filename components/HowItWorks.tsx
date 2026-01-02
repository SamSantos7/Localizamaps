import React from 'react';
import { StepItem } from '../types';

const steps: StepItem[] = [
  { number: '01', title: 'Você envia os dados', description: 'Fale conosco via WhatsApp e envie as informações básicas da sua empresa.' },
  { number: '02', title: 'Nós otimizamos tudo', description: 'Nossa equipe cria ou ajusta seu perfil profissional com foco em SEO local.' },
  { number: '03', title: 'Você recebe clientes', description: 'Sua empresa passa a ser encontrada no Google Maps por quem está perto de você.' },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Processo Simples e Transparente
          </h2>
          <p className="text-slate-400 text-lg">Direto ao ponto. Sem burocracia.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-slate-800 -z-0"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center font-bold text-2xl mb-8 shadow-2xl shadow-emerald-900/40 rotate-3 group-hover:rotate-0 transition-transform">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;