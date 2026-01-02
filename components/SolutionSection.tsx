import React from 'react';
import { MapPin, Phone, Clock, Tag, FileText, Star } from 'lucide-react';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  { title: "Cadastro ou correção do perfil", icon: MapPin },
  { title: "Endereço, telefone e WhatsApp corretos", icon: Phone },
  { title: "Horário de funcionamento ajustado", icon: Clock },
  { title: "Categoria correta do negócio", icon: Tag },
  { title: "Descrição profissional", icon: FileText },
  { title: "Orientação para fotos e avaliações", icon: Star },
];

const SolutionSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100" id="vantagens">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Um serviço essencial para negócios locais
          </h2>
          <p className="text-slate-600">Tudo o que você precisa para ser encontrado.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 flex flex-col items-start"
            >
              <div className="p-3 bg-slate-100 rounded-xl mb-6 text-slate-900">
                <feature.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;