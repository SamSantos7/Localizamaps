import React from 'react';
import { MapPin } from 'lucide-react';
import { BRAND, CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 py-12 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
             <div className="bg-slate-900 text-white p-1.5 rounded-md">
                <MapPin size={16} strokeWidth={2.5} />
              </div>
            <span className="font-bold text-lg text-slate-900">{BRAND.NAME}</span>
          </div>
          <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
            Serviço especializado em visibilidade local e cadastro profissional no Google Maps para pequenos negócios.
          </p>
        </div>

        <div className="text-center md:text-right">
          <h4 className="font-bold text-slate-900 mb-2">Contato</h4>
          <p className="text-slate-600 text-sm">WhatsApp: {CONTACT_INFO.WHATSAPP_DISPLAY}</p>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-slate-200 text-center">
        <p className="text-xs text-slate-400">
          &copy; {new Date().getFullYear()} {BRAND.NAME}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;