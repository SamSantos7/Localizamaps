import React from 'react';
import { MapPin } from 'lucide-react';
import { BRAND, CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 py-16 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
             <div className="bg-slate-900 text-white p-1.5 rounded-md">
                <MapPin size={16} strokeWidth={2.5} />
              </div>
            <span className="font-bold text-lg text-slate-900">{BRAND.NAME}</span>
          </div>
          <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
            Serviço especializado em visibilidade local e cadastro profissional no Google Maps para pequenos negócios em todo o Brasil.
          </p>
        </div>

        <div className="text-center md:text-left">
          <h4 className="font-bold text-slate-900 mb-4 uppercase text-xs tracking-widest">Links Rápidos</h4>
          <ul className="text-slate-600 text-sm space-y-3">
            <li><a href="#cadastro-google-maps" className="hover:text-emerald-600 transition-colors">Cadastro no Google Maps</a></li>
            <li><a href="#como-colocar-empresa-no-google-maps" className="hover:text-emerald-600 transition-colors">Como colocar empresa no Maps</a></li>
            <li><a href="#empresa-nao-aparece-no-google-maps" className="hover:text-emerald-600 transition-colors">Empresa não aparece?</a></li>
            <li><a href="#cadastro-google-maps-sao-paulo" className="hover:text-emerald-600 transition-colors">Google Maps São Paulo</a></li>
          </ul>
        </div>

        <div className="text-center md:text-right">
          <h4 className="font-bold text-slate-900 mb-4 uppercase text-xs tracking-widest">Contato Direto</h4>
          <p className="text-emerald-600 font-bold text-lg mb-1">{CONTACT_INFO.WHATSAPP_DISPLAY}</p>
          <p className="text-slate-400 text-xs">Atendimento em todo o Brasil via WhatsApp.</p>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-slate-200 text-center">
        <p className="text-[10px] text-slate-400 uppercase tracking-widest font-medium">
          &copy; {new Date().getFullYear()} {BRAND.NAME}. Especialistas em SEO Local e Google Meu Negócio.
        </p>
      </div>
    </footer>
  );
};

export default Footer;