import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "É cobrada alguma mensalidade?",
    answer: "Não. Todos os nossos planos são de pagamento único. Você paga apenas uma vez pelo serviço escolhido (Essencial, Visibilidade ou Destaque). O perfil no Google é propriedade sua."
  },
  {
    question: "Em quanto tempo minha empresa aparece no Google?",
    answer: "Realizamos o cadastro técnico imediatamente. O Google realiza uma verificação que pode levar de 24 horas a alguns dias úteis. Assim que aprovado, sua empresa já começa a aparecer nas buscas locais."
  },
  {
    question: "Minha empresa não tem endereço físico (home office/delivery). Posso fazer?",
    answer: "Sim! O Google Maps permite cadastrar 'Áreas de Cobertura'. Dessa forma, você aparece para clientes da sua região sem precisar divulgar seu endereço residencial publicamente."
  },
  {
    question: "O que é SEO Local e como ele ajuda meu negócio no Google Maps?",
    answer: "SEO Local é um conjunto de estratégias para fazer sua empresa aparecer nas melhores posições quando alguém pesquisa por serviços na sua região. Com um perfil bem otimizado (palavras-chave certas, categorias precisas e informações completas), você aumenta drasticamente as chances de ser encontrado por clientes que estão prontos para comprar perto de você."
  },
  {
    question: "Como funciona o pagamento?",
    answer: "O pagamento é realizado via PIX para garantir agilidade no início do processo. Não exigimos cartão de crédito e não há cobranças automáticas futuras."
  },
  {
    question: "E se eu precisar alterar dados (telefone/horário) no futuro?",
    answer: "O perfil é seu. Nós entregamos o acesso administrativo para você, permitindo que faça alterações simples quando quiser. Também oferecemos suporte para dúvidas pontuais após a entrega."
  },
  {
    question: "Vocês garantem que vou ficar em 1º lugar nas buscas?",
    answer: "Trabalhamos com transparência: ninguém pode garantir a 1ª posição, pois isso depende do algoritmo do Google e da concorrência local. Porém, garantimos entregar um perfil completo e otimizado, que é o pré-requisito fundamental para ser encontrado."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200" id="faq">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-slate-600">
            Tire suas dúvidas sobre o funcionamento do serviço.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-sm"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`font-semibold text-lg ${openIndex === index ? 'text-emerald-700' : 'text-slate-900'}`}>
                  {item.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-slate-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;