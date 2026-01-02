import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import PaymentModal from './PaymentModal';

const plans = [
  {
    name: "Essencial Maps",
    price: "50",
    description: "Para negócios que ainda não possuem um perfil no Google Maps ou nunca tiveram um.",
    features: [
      "Criação do perfil no Google Maps",
      "Cadastro de dados básicos",
      "Categoria principal correta",
      "Orientação para validação"
    ],
    notIncluded: [
      "Fotos e descrição otimizada",
      "SEO Local",
      "Avaliações"
    ],
    highlight: false,
  },
  {
    name: "Visibilidade Local",
    price: "100",
    description: "Para quem quer credibilidade e melhor posicionamento.",
    features: [
      "Tudo do Plano Essencial",
      "Até 6 fotos (fornecidas pelo cliente)",
      "Descrição profissional (Copywriting)",
      "Configuração completa"
    ],
    highlight: true,
    tag: "Recomendado",
  },
  {
    name: "Destaque Local",
    price: "200",
    description: "Para se destacar da concorrência com reputação imediata.",
    features: [
      "Tudo do Plano Visibilidade",
      "SEO Local Avançado",
      "Estratégia de palavras-chave",
      "Cadastro completo de catálogo de serviços/produtos",
      "2 Avaliações Relevantes (Apoio inicial)"
    ],
    highlight: false,
  }
];

const Pricing: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<typeof plans[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleHireClick = (plan: typeof plans[0]) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  return (
    <section className="py-24 bg-white" id="precos">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Escolha o plano ideal para seu negócio
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Investimento único. Sem mensalidades. Sem contratos de fidelidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl p-8 border transition-all duration-300 flex flex-col h-full ${
                plan.highlight 
                  ? 'border-emerald-500 shadow-2xl scale-105 z-10' 
                  : 'border-slate-200 shadow-lg hover:shadow-xl'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">
                    {plan.tag}
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-500 text-sm min-h-[40px]">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-medium text-slate-400">R$</span>
                  <span className="text-5xl font-bold text-slate-900 tracking-tight">{plan.price}</span>
                  <span className="text-xl font-medium text-slate-400">,00</span>
                </div>
                <p className="text-xs text-slate-400 mt-2">Pagamento único</p>
              </div>

              <div className="flex-grow space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start text-sm text-slate-700">
                    <Check className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
                {plan.notIncluded && plan.notIncluded.map((feature, i) => (
                  <div key={i} className="flex items-start text-sm text-slate-400">
                     <X className="w-5 h-5 text-slate-300 mr-3 flex-shrink-0" />
                     <span className="line-through decoration-slate-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="w-full">
                <button
                  onClick={() => handleHireClick(plan)}
                  className={`w-full inline-flex items-center justify-center px-8 py-4 text-base font-medium transition-all duration-300 rounded-lg group ${
                    plan.highlight 
                      ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-emerald-900/20" 
                      : "bg-transparent border-2 border-slate-200 hover:border-slate-900 text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Contratar Agora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <PaymentModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        plan={selectedPlan}
      />
    </section>
  );
};

export default Pricing;