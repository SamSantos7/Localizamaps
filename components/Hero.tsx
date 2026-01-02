import React from 'react';
import { LINKS } from '../constants';
import Button from './Button';
import { CheckCircle2, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 mb-8">
          <TrendingUp className="w-4 h-4 text-emerald-600" />
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Aumente suas vendas locais</span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.05]">
          Faça seu negócio aparecer no <span className="text-emerald-600">Google Maps</span> e seja encontrado hoje.
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          Cadastro profissional, rápido e sem mensalidade. Tenha seu endereço, telefone e horário visíveis para clientes na sua região agora mesmo.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button href={LINKS.WHATSAPP} variant="primary" className="w-full sm:w-auto min-w-[300px] h-16 text-lg shadow-xl shadow-emerald-200">
            Quero meu negócio no Google Maps
          </Button>
          <a href="#precos" className="text-slate-600 font-semibold hover:text-slate-900 transition-colors">
            Ver planos e preços
          </a>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-slate-500 font-semibold">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span>Sem mensalidade</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span>Ativação em até 48h</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span>Pagamento único</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;