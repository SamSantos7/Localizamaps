import React, { useState } from 'react';
import { X, Copy, Check, QrCode, MessageCircle } from 'lucide-react';
import { PAYMENT_INFO, CONTACT_INFO } from '../constants';

interface Plan {
  name: string;
  price: string;
}

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: Plan | null;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, plan }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !plan) return null;

  const handleCopyPix = () => {
    navigator.clipboard.writeText(PAYMENT_INFO.PIX_KEY);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappMessage = encodeURIComponent(
    `Olá, acabei de realizar o pagamento do plano *${plan.name}* (R$ ${plan.price},00). Segue o comprovante.`
  );
  
  const whatsappLink = `https://wa.me/${CONTACT_INFO.WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in-up">
        {/* Header */}
        <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Finalizar Contratação</h3>
            <p className="text-sm text-slate-500">{plan.name} - <span className="font-semibold text-emerald-600">R$ {plan.price},00</span></p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* PIX Title Section */}
        <div className="flex bg-emerald-50/30 border-b border-emerald-100 py-3 px-6 items-center gap-2 text-emerald-700 font-semibold text-sm">
          <QrCode size={18} />
          Pagamento via PIX (Copia e Cola)
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="space-y-6">
            <div className="text-center space-y-3">
              <p className="text-sm text-slate-600">Copie o código abaixo para pagar via seu aplicativo bancário:</p>
              <div className="bg-slate-100 p-4 rounded-lg border border-slate-200 relative group">
                <p className="text-slate-900 font-mono text-[10px] break-all text-left max-h-24 overflow-y-auto pr-2">
                  {PAYMENT_INFO.PIX_KEY}
                </p>
                <div className="mt-3 flex justify-end">
                  <button 
                    onClick={handleCopyPix}
                    className="bg-emerald-600 text-white px-4 py-2 rounded-md font-medium text-xs flex items-center gap-2 transition-all hover:bg-emerald-700 shadow-sm active:scale-95"
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    {copied ? 'Código Copiado' : 'Copiar Código PIX'}
                  </button>
                </div>
              </div>
            </div>

            <div className="text-xs text-slate-500 space-y-1 bg-slate-50 p-4 rounded-lg border border-slate-100">
              <p><span className="font-semibold text-slate-700">Banco:</span> {PAYMENT_INFO.BANK_NAME}</p>
              <p><span className="font-semibold text-slate-700">Nome:</span> {PAYMENT_INFO.OWNER_NAME}</p>
              <p><span className="font-semibold text-slate-700">Tipo de Chave:</span> {PAYMENT_INFO.PIX_TYPE}</p>
            </div>

            <div className="pt-2 border-t border-slate-100 text-center">
               <p className="text-sm text-slate-600 mb-4 font-medium">Após o pagamento, envie o comprovante para iniciarmos:</p>
               <a 
                 href={whatsappLink}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex items-center justify-center gap-2 w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold transition-all shadow-md hover:shadow-lg"
               >
                 <MessageCircle size={20} fill="currentColor" />
                 Enviar Comprovante no WhatsApp
               </a>
               <p className="text-[10px] text-slate-400 mt-4 uppercase tracking-widest font-bold">Liberação imediata após envio</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;