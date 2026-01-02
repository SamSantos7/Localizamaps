import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Ricardo Silva",
    company: "Silva Reformas",
    text: "Excelente serviço! Minha empresa não aparecia no mapa e agora recebo ligações toda semana. O processo foi muito rápido e profissional.",
  },
  {
    name: "Ana Paula",
    company: "Doceria da Ana",
    text: "Eu não tinha ideia de como configurar o Google Meu Negócio. A equipe cuidou de tudo e me explicou como responder as avaliações. Recomendo demais!",
  },
  {
    name: "Marcos Oliveira",
    company: "Mecânica Oliveira",
    text: "Investimento que valeu a pena. O perfil ficou muito profissional com as fotos e descrição correta. Já notei aumento na procura.",
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-slate-100" id="depoimentos">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Junte-se a centenas de empresas que já aumentaram sua visibilidade local.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-2xl relative hover:shadow-md transition-shadow duration-300">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-200 opacity-50" />
              
              <div className="flex gap-1 mb-4 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              
              <p className="text-slate-700 mb-6 italic leading-relaxed relative z-10">
                "{item.text}"
              </p>
              
              <div className="border-t border-slate-200 pt-4 mt-auto">
                <p className="font-bold text-slate-900">{item.name}</p>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500 mt-1">{item.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;