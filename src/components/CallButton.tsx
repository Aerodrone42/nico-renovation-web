
import React from 'react';
import { Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const CallButton = () => {
  return (
    <a 
      href="tel:0788033573" 
      className={cn(
        "fixed bottom-6 right-6 z-50 flex items-center justify-center",
        "bg-nico-red hover:bg-red-700 text-white rounded-full p-4",
        "shadow-lg transition-all duration-300 hover:scale-110",
        "animate-fade-in"
      )}
      aria-label="Appeler maintenant"
    >
      <div className="absolute w-full h-full rounded-full bg-red-400 opacity-30 animate-ping"></div>
      <Phone size={24} className="animate-pulse" />
      <span className="sr-only">Appeler maintenant</span>
    </a>
  );
};

export default CallButton;
