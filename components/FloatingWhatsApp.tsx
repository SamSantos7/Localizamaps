import React from 'react';
import { MessageCircle } from 'lucide-react';
import { LINKS } from '../constants';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a 
      href={LINKS.WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[100] bg-emerald-600 text-white p-4 rounded-full shadow-2xl hover:bg-emerald-700 transition-all hover:scale-110 active:scale-95 group flex items-center gap-3"
      aria-label="Falar no WhatsApp"
    >
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-semibold">
        Dúvidas? Fale conosco
      </span>
      <MessageCircle size={28} fill="currentColor" />
    </a>
  );
};

export default FloatingWhatsApp;