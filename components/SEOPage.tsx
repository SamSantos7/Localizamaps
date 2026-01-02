import React from 'react';
import Button from './Button';
import { LINKS } from '../constants';
import { ChevronLeft } from 'lucide-react';

interface SEOPageProps {
  slug: string;
}

const seoContents: Record<string, { title: string, h1: string, content: React.ReactNode }> = {
  'cadastro-google-maps': {
    title: 'Cadastro no Google Maps Profissional',
    h1: 'Como fazer o cadastro no Google Maps da sua empresa de forma profissional',
    content: (
      <div className="seo-content">
        <p>Ter sua empresa listada no Google Maps não é mais um diferencial, é um requisito básico para a sobrevivência de qualquer negócio local. O <strong>cadastro no Google Maps</strong> permite que sua empresa apareça exatamente no momento em que um cliente potencial pesquisa pelo que você oferece na sua região.</p>
        <h2>Por que o cadastro profissional é importante?</h2>
        <p>Muitos empresários tentam fazer o cadastro sozinhos e acabam cometendo erros fatais, como categorias erradas, endereços não verificados ou duplicidade de perfis. Isso faz com que o Google "esconda" seu negócio nos resultados de busca.</p>
        <h3>Vantagens do LocalizaMaps:</h3>
        <ul>
          <li>Configuração de palavras-chave estratégicas.</li>
          <li>Otimização de imagens para atrair mais cliques.</li>
          <li>Ativação correta da área de serviço (para delivery e home office).</li>
          <li>Integração total com o Google Meu Negócio.</li>
        </ul>
        <p>Com o LocalizaMaps, você garante que seu perfil está 100% otimizado conforme as diretrizes mais recentes do algoritmo em 2024.</p>
      </div>
    )
  },
  'como-colocar-empresa-no-google-maps': {
    title: 'Guia: Como colocar empresa no Google Maps',
    h1: 'Guia Completo: Como colocar sua empresa no Google Maps e atrair clientes',
    content: (
      <div className="seo-content">
        <p>Aprender <strong>como colocar sua empresa no Google Maps</strong> é o primeiro passo para o sucesso digital do seu negócio físico. O processo envolve a criação de um Perfil da Empresa no Google (antigo Google Meu Negócio).</p>
        <h2>Passo a passo fundamental</h2>
        <p>O processo técnico exige precisão. Desde a escolha do Nome Comercial (que deve evitar excesso de palavras-chave para não sofrer punições) até a verificação por vídeo ou carta enviada pelos correios.</p>
        <h3>Erros comuns ao tentar cadastrar:</h3>
        <p>Um dos maiores erros é não preencher o horário de funcionamento ou não responder às avaliações dos clientes. O Google prioriza perfis ativos e informativos.</p>
        <p>No LocalizaMaps, cuidamos de toda essa burocracia para você focar no que realmente importa: atender seus novos clientes.</p>
      </div>
    )
  },
  'empresa-nao-aparece-no-google-maps': {
    title: 'Por que minha empresa não aparece no Google Maps?',
    h1: 'Empresa não aparece no Google Maps? Descubra o motivo e como resolver',
    content: (
      <div className="seo-content">
        <p>Sua <strong>empresa não aparece no Google Maps</strong> mesmo você já tendo feito o cadastro? Isso é mais comum do que você imagina e geralmente está ligado a três fatores: falta de verificação, suspensão de perfil ou SEO local insuficiente.</p>
        <h2>Motivos principais da invisibilidade</h2>
        <ul>
          <li><strong>Perfil Pendente:</strong> Você criou, mas o Google ainda não verificou a veracidade do endereço.</li>
          <li><strong>Diretrizes Violadas:</strong> Uso de nomes fantasias abusivos ou endereços residenciais sem configuração de área de cobertura.</li>
          <li><strong>Concorrência Forte:</strong> Seus concorrentes estão mais otimizados que você.</li>
        </ul>
        <p>Nós realizamos uma auditoria completa no seu perfil atual para identificar por que ele está invisível e aplicamos as correções necessárias imediatamente.</p>
      </div>
    )
  },
  'cadastro-google-maps-sao-paulo': {
    title: 'Cadastro no Google Maps em São Paulo - SP',
    h1: 'Visibilidade para Empresas em São Paulo: Apareça no Google Maps SP',
    content: (
      <div className="seo-content">
        <p>A concorrência em uma metrópole como <strong>São Paulo</strong> exige um SEO Local agressivo. Seja na Avenida Paulista, nos bairros da Zona Leste ou no Centro, sua empresa precisa se destacar no mapa para captar o enorme fluxo de clientes da capital.</p>
        <h2>Estratégia Local para SP</h2>
        <p>O LocalizaMaps atende todos os bairros de São Paulo, configurando seu perfil para atingir o público certo em cada raio de quilometragem específico do seu negócio.</p>
      </div>
    )
  }
};

const SEOPage: React.FC<SEOPageProps> = ({ slug }) => {
  const data = seoContents[slug] || {
    title: 'Página não encontrada',
    h1: 'Ops! Esta página de conteúdo ainda está sendo otimizada.',
    content: <p>Volte para a página inicial para conhecer nossos serviços.</p>
  };

  return (
    <article className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <a href="#" className="inline-flex items-center text-emerald-600 font-semibold mb-8 hover:underline">
          <ChevronLeft className="w-4 h-4 mr-1" /> Voltar para o Início
        </a>
        
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
            {data.h1}
          </h1>
          <div className="w-20 h-1.5 bg-emerald-600 rounded-full"></div>
        </header>

        <div className="prose prose-slate prose-lg max-w-none">
          {data.content}
        </div>

        <div className="mt-16 p-8 bg-slate-900 rounded-3xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Quer aparecer no Google Maps agora?</h3>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">Não perca mais tempo tentando fazer sozinho. Nós resolvemos para você em até 48 horas.</p>
          <Button href={LINKS.WHATSAPP} variant="primary" className="h-16 px-12">
            Falar no WhatsApp
          </Button>
        </div>
      </div>
    </article>
  );
};

export default SEOPage;