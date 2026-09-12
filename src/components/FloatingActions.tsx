import React from 'react';
import { MessageCircle, Phone, Calendar } from 'lucide-react';
import { DOCTOR_INFO } from '../data/brandData.ts';

interface FloatingActionsProps {
  currentLang: 'mr' | 'en';
  onOpenBooking: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  currentLang,
  onOpenBooking
}) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Floating Appointment Trigger */}
      <button
        onClick={onOpenBooking}
        className="pointer-events-auto shadow-[0_0_25px_rgba(212,175,55,0.4)] flex items-center gap-2 px-4 py-2.5 rounded-full font-bold text-xs text-[#0B0D10] bg-gradient-to-r from-[#F9E282] via-[#D4AF37] to-[#B89222] hover:scale-105 active:scale-95 transition-all"
      >
        <Calendar className="w-4 h-4" />
        <span className="hidden sm:inline">
          {currentLang === 'mr' ? 'अपॉइंटमेंट बुक करा' : 'Book Session'}
        </span>
      </button>

      {/* WhatsApp Quick Chat */}
      <a
        href={`${DOCTOR_INFO.whatsappUrl}?text=${encodeURIComponent(
          'नमस्कार विनायक सर, मला मानसिक आरोग्य समुपदेशनासाठी मार्गदर्शन हवे आहे.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto relative group flex items-center justify-center w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:scale-110 active:scale-95 transition-all"
        title="Chat on WhatsApp (+91 7798150143)"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-400/40 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 fill-current relative z-10" />
      </a>
    </div>
  );
};
