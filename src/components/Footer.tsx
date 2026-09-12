import React from 'react';
import {
  Brain,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Heart,
  ShieldAlert,
  ArrowUp,
  Globe
} from 'lucide-react';
import { DOCTOR_INFO, SERVICES_LIST } from '../data/brandData.ts';

interface FooterProps {
  currentLang: 'mr' | 'en';
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#06080B] border-t border-white/10 pt-16 pb-12 overflow-hidden text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Brand & Emergency Help Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Identity & Philosophy */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-950 to-slate-900 border border-[#00E5FF]/40 flex items-center justify-center text-[#00E5FF]">
                <Brain className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-black text-white tracking-wide">
                  {DOCTOR_INFO.name}
                </h3>
                <p className="text-xs text-[#D4AF37] font-semibold">
                  {currentLang === 'mr' ? DOCTOR_INFO.titleMr : DOCTOR_INFO.title}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              {currentLang === 'mr'
                ? 'वैज्ञानिक मानसशास्त्र, संवेदनशील संवाद आणि १००% गोपनीयतेसह मानसिक स्वास्थ्य आणि आंतरिक शांती मिळवून देणारा विश्वासार्ह मंच.'
                : 'Pioneering compassionate, evidence-based cognitive psychotherapy, emotional resilience, and confidential healing worldwide.'}
            </p>

            <blockquote className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs italic text-cyan-300 font-medium">
              {DOCTOR_INFO.brandQuoteMr}
            </blockquote>

            <div className="text-xs text-slate-400 pt-1">
              <strong className="text-white">{DOCTOR_INFO.roleMr}</strong>
            </div>
          </div>

          {/* Col 2: Fast Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {currentLang === 'mr' ? 'प्रमुख विभाग' : 'Navigation'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-[#00E5FF] transition-colors">
                  {currentLang === 'mr' ? 'परिचय व दृष्टिकोन' : 'About & Philosophy'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#00E5FF] transition-colors">
                  {currentLang === 'mr' ? '१० प्रमुख समुपदेशन सेवा' : '10 Clinical Services'}
                </a>
              </li>
              <li>
                <a href="#model" className="hover:text-[#00E5FF] transition-colors">
                  {currentLang === 'mr' ? '५-टप्पे माइंड मॉडेल' : '5-Step Transformation'}
                </a>
              </li>
              <li>
                <a href="#online-hub" className="hover:text-[#00E5FF] transition-colors">
                  {currentLang === 'mr' ? 'ग्लोबल ऑनलाइन हब' : 'Online Counselling'}
                </a>
              </li>
              <li>
                <a href="#workshops" className="hover:text-[#00E5FF] transition-colors">
                  {currentLang === 'mr' ? 'कार्यशाळा व प्रशिक्षण' : 'Workshops & Bootcamps'}
                </a>
              </li>
              <li>
                <a href="#reviews-india" className="hover:text-[#F7DF79] text-[#F7DF79] transition-colors font-medium">
                  {currentLang === 'mr' ? '१०,०००+ भारतीय ग्राहक अभिप्राय ⭐' : '10K+ Customer Reviews India ⭐'}
                </a>
              </li>
              <li>
                <a href="#blogs-india" className="hover:text-[#00E5FF] transition-colors">
                  {currentLang === 'mr' ? 'भारतीय मानसिक आरोग्य ब्लॉग्स' : 'Mental Health Blogs India'}
                </a>
              </li>
              <li>
                <a href="#youtube-content" className="hover:text-[#00E5FF] transition-colors">
                  {currentLang === 'mr' ? 'मराठी मानसशास्त्र व्हिडिओ' : 'Marathi Psychology Talks'}
                </a>
              </li>
              <li>
                <a href="#wmhd-movement" className="hover:text-[#00E5FF] transition-colors">
                  {currentLang === 'mr' ? 'WMHD Association (World Mental Health Development Association)' : 'WMHD Association (World Mental Health Development Association)'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact & Baramati Clinic */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {currentLang === 'mr' ? 'संपर्क व क्लिनिक' : 'Consultation Desk'}
            </h4>

            <div className="space-y-2.5 text-xs">
              <a
                href={`tel:${DOCTOR_INFO.phone}`}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#00E5FF] shrink-0" />
                <span>कॉल करा: <strong className="text-white">{DOCTOR_INFO.phoneDisplay}</strong></span>
              </a>

              <a
                href={DOCTOR_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>व्हॉट्सॲप चॅट: <strong>{DOCTOR_INFO.phoneDisplay}</strong></span>
              </a>

              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <strong>बारामती क्लिनिक</strong>
                  <span className="block text-slate-400">बारामती, महाराष्ट्र आणि ऑनलाइन जगभरातून</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-slate-400">
                <Mail className="w-4 h-4 text-cyan-300 shrink-0" />
                <span>{DOCTOR_INFO.email}</span>
              </div>

              <a
                href={DOCTOR_INFO.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#00E5FF] hover:underline font-semibold"
              >
                <Globe className="w-4 h-4 shrink-0" />
                <span>अधिकृत वेबसाईट: <strong>{DOCTOR_INFO.websiteDisplay}</strong></span>
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 rounded-xl font-bold text-xs text-[#0B0D10] bg-gradient-to-r from-[#F9E282] to-[#D4AF37] hover:brightness-110 transition-all shadow-md"
              >
                {currentLang === 'mr' ? '📅 गोपनीय सत्र बुक करा' : 'Book Confidential Session'}
              </button>
            </div>
          </div>

        </div>

        {/* Emergency Mental Health Notice Banner */}
        <div className="my-8 p-4 rounded-2xl bg-rose-950/20 border border-rose-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-rose-200">
          <div className="flex items-start gap-2.5">
            <ShieldAlert className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-white font-bold">
                {currentLang === 'mr' ? 'आपत्कालीन मानसिक आरोग्य सूचना (Emergency Care):' : 'Crisis & Emergency Notice:'}
              </strong>
              <span>
                {currentLang === 'mr'
                  ? 'जर तुम्ही किंवा तुमची जवळची व्यक्ती तीव्र मानसिक संकटात असेल, तर कृपया तात्काळ शासकीय टोल-फ्री राष्ट्रीय हेल्पलाइन Tele-MANAS (14416 किंवा 1800-891-4416) वर २४x७ संपर्क साधा.'
                  : 'If you or someone you know is in severe crisis or immediate danger, please dial National Toll-Free Tele-MANAS (14416) or local emergency services immediately.'}
              </span>
            </div>
          </div>
          <a
            href="tel:14416"
            className="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-bold text-[11px] shrink-0"
          >
            Call Tele-MANAS (14416)
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} <strong>Vinayak Navnath Bhise</strong>. All Rights Reserved. | 3D Advanced Brand
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-400">
              Founder & Director: WMHD Association (World Mental Health Development Association)
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
