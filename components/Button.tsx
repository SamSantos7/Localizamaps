import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  href: string;
  icon?: 'whatsapp' | 'email' | 'arrow';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, href, icon, className = '' }) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-base font-medium transition-all duration-300 rounded-lg group";
  
  const variants = {
    primary: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-emerald-900/20",
    secondary: "bg-slate-900 hover:bg-slate-800 text-white shadow-lg hover:shadow-slate-900/20",
    outline: "bg-transparent border-2 border-slate-200 hover:border-slate-900 text-slate-600 hover:text-slate-900"
  };

  const IconComponent = () => {
    if (icon === 'arrow') return <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />;
    if (icon === 'email') return <Mail className="w-5 h-5 mr-2" />;
    // Simple SVG for WhatsApp to avoid heavy icon library dependency for just one logo if preferred, 
    // but using Lucide maps generally works well. We'll use a custom SVG for specific brand icons if needed, 
    // but here we will simulate it or use text.
    return null;
  };

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {icon === 'email' && <IconComponent />}
      {children}
      {icon === 'arrow' && <IconComponent />}
    </a>
  );
};

export default Button;