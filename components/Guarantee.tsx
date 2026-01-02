import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Guarantee: React.FC = () => {
  return (
    <section className="py-16 bg-emerald-50 border-y border-emerald-100">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
        <div className="p-4 bg-emerald-100 rounded-full text-emerald-700">
          <ShieldCheck size={64} strokeWidth={1.5} />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Garantia de Satisfação Total</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Trabalhamos com transparência absoluta. Se não conseguirmos criar ou ajustar seu perfil no Google Maps seguindo as diretrizes oficiais, <span className="font-bold text-emerald-700">devolvemos 100% do seu investimento.</span> Sem perguntas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;