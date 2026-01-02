import React, { useState } from 'react';
import { X, Copy, Check, CreditCard, QrCode, MessageCircle } from 'lucide-react';
import { PAYMENT_INFO, CONTACT_INFO } from '../constants';

interface Plan {
  name: string;
  price: string;
  paymentLink?: string;
}

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: Plan | null;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, plan }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'pix' | 'card'>('pix');

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

        {/* Tabs */}
        <div className="flex border-b border-slate-100">
          <button
            onClick={() => setActiveTab('pix')}
            className={`flex-1 py-3 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${
              activeTab === 'pix' 
                ? 'text-emerald-600 border-b-2 border-emerald-600 bg-emerald-50/30' 
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <QrCode size={18} />
            PIX (Aprovação Imediata)
          </button>
          <button
            onClick={() => setActiveTab('card')}
            className={`flex-1 py-3 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${
              activeTab === 'card' 
                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50/30' 
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <CreditCard size={18} />
            Cartão de Crédito
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {activeTab === 'pix' ? (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <p className="text-sm text-slate-600">Utilize a chave abaixo para pagar via PIX:</p>
                <div className="flex items-center gap-2 bg-slate-100 p-3 rounded-lg border border-slate-200">
                  <span className="flex-grow text-slate-900 font-mono text-sm truncate text-left">
                    {PAYMENT_INFO.PIX_KEY}
                  </span>
                  <button 
                    onClick={handleCopyPix}
                    className="text-emerald-600 hover:text-emerald-700 p-1 font-medium text-sm flex items-center gap-1 transition-colors"
                  >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                    {copied ? 'Copiado' : 'Copiar'}
                  </button>
                </div>
              </div>

              <div className="text-xs text-slate-500 space-y-1 bg-slate-50 p-3 rounded-lg">
                <p><span className="font-semibold">Banco:</span> {PAYMENT_INFO.BANK_NAME}</p>
                <p><span className="font-semibold">Nome:</span> {PAYMENT_INFO.OWNER_NAME}</p>
                <p><span className="font-semibold">Tipo:</span> {PAYMENT_INFO.PIX_TYPE}</p>
              </div>

              <div className="pt-2 border-t border-slate-100 text-center">
                 <p className="text-sm text-slate-600 mb-4">Após o pagamento, envie o comprovante:</p>
                 <a 
                   href={whatsappLink}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center justify-center gap-2 w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-all shadow-md hover:shadow-lg"
                 >
                   <MessageCircle size={18} />
                   Enviar Comprovante via WhatsApp
                 </a>
              </div>
            </div>
          ) : (
            <div className="space-y-6 text-center py-4">
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto text-blue-600 mb-4">
                <CreditCard size={32} />
              </div>
              <p className="text-slate-600 text-sm">
                Para pagar com cartão de crédito, clique no botão abaixo para ser redirecionado ao nosso gateway seguro.
              </p>
              
              <a 
                href={plan.paymentLink || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all shadow-md hover:shadow-lg"
              >
                Pagar com Cartão
              </a>

              <p className="text-xs text-slate-400 mt-4">
                Após finalizar, você será redirecionado ou receberá contato da nossa equipe.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;