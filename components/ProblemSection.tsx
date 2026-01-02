import React from 'react';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
          Quem não aparece no Google Maps <br />
          <span className="relative inline-block">
            não é encontrado
            <span className="absolute bottom-1 left-0 w-full h-3 bg-red-100 -z-10 opacity-50"></span>
          </span>
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          Hoje, a maioria das decisões de compra local começa pelo Google Maps.
          Se sua empresa não está cadastrada ou aparece de forma incorreta, 
          <span className="font-semibold text-slate-900"> o cliente escolhe o concorrente.</span>
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;