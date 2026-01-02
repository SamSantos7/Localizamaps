import React from 'react';
import { ShieldCheck, UserCheck, LayoutList, Target } from 'lucide-react';

const Authority: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
            Processo profissional e transparente
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: UserCheck, title: "Atendimento Direto", text: "Fale diretamente com quem resolve." },
            { icon: LayoutList, title: "Processo Claro", text: "Você sabe exatamente o que está contratando." },
            { icon: Target, title: "Foco em Pequenos Negócios", text: "Soluções reais para quem está começando." },
            { icon: ShieldCheck, title: "Sem Promessas Irreais", text: "Trabalho honesto e pé no chão." },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 border border-slate-100 text-slate-900">
                <item.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Authority;