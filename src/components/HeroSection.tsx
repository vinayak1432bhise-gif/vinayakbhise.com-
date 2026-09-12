import React from 'react';
import {
  Calendar,
  MessageCircle,
  ShieldCheck,
  Award,
  Sparkles,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Heart,
  Globe,
  Phone,
  Star
} from 'lucide-react';
import { DOCTOR_INFO } from '../data/brandData.ts';
import { TiltCard } from './TiltCard.tsx';

interface HeroSectionProps {
  currentLang: 'mr' | 'en';
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentLang,
  onOpenBooking
}) => {
  return (
    <section className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Dynamic Typography, Quotes & 3D CTAs */}
          <div className="lg:col-span-7 space-y-7">
            {/* Prestige Top Pill Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 via-[#D4AF37]/20 to-cyan-500/20 border border-[#D4AF37]/40 text-[#F7DF79] text-xs sm:text-sm font-extrabold tracking-widest uppercase shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                <Sparkles className="w-4 h-4 text-[#F7DF79] animate-pulse" />
                <span>“Your Mind Matters.”</span>
              </div>

              <a
                href="#reviews-india"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 text-xs font-semibold hover:border-cyan-400 transition-colors shadow-[0_0_15px_rgba(0,229,255,0.2)]"
              >
                <span className="text-[#F7DF79]">★★★★★</span>
                <span className="font-bold text-white">4.98</span>
                <span className="text-slate-400">|</span>
                <span>{currentLang === 'mr' ? '१०,०००+ भारतीय अभिप्राय' : '10K+ Reviews India'}</span>
              </a>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                {currentLang === 'mr' ? (
                  <>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
                      समस्या फक्त ऐकायची नाही…
                    </span>
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-cyan-200 to-[#D4AF37] drop-shadow-[0_0_35px_rgba(0,229,255,0.4)]">
                      मन समजून घ्यायचं आहे.
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
                      Not just listening to problems...
                    </span>
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-cyan-200 to-[#D4AF37] drop-shadow-[0_0_35px_rgba(0,229,255,0.4)]">
                      Understanding your mind.
                    </span>
                  </>
                )}
              </h1>

              {/* Sub-headline */}
              <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
                {currentLang === 'mr'
                  ? 'क्लिनिकल सायकॉलॉजिस्ट विनायक नवनाथ भिसे यांच्याकडून वैज्ञानिक मानसशास्त्र, तणावमुक्ती आणि भावनिक सबलीकरण.'
                  : 'World-Class Psychological Counselling, Stress Relief & Emotional Empowerment by Vinayak Navnath Bhise.'}
              </p>
            </div>

            {/* Marathi Thought Snippet Card */}
            <div className="p-4 rounded-xl glass-panel border border-cyan-500/20 max-w-xl bg-gradient-to-r from-[#0E1522]/90 to-[#141C2B]/80 shadow-lg">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] shrink-0 mt-0.5">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-slate-100 italic">
                    {currentLang === 'mr'
                      ? '“आयुष्यातील प्रत्येक वादळावर मात करण्याची शक्ती तुमच्याच मनात असते, फक्त योग्य मार्गदर्शकाची गरज असते.”'
                      : '“The power to triumph over life storms resides within your mind; all you need is empathetic guidance.”'}
                  </p>
                  <p className="text-xs text-cyan-400 font-medium">
                    — विनायक नवनाथ भिसे ({currentLang === 'mr' ? DOCTOR_INFO.titleMr : DOCTOR_INFO.title})
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive 3D CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              {/* Glowing Gold Button - Book Counselling */}
              <button
                id="hero-book-counselling-btn"
                onClick={onOpenBooking}
                className="relative group px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-[#0B0D10] bg-gradient-to-r from-[#F9E282] via-[#D4AF37] to-[#B89222] shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:shadow-[0_0_45px_rgba(212,175,55,0.8)] transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center gap-2"
              >
                <Calendar className="w-5 h-5 text-[#0B0D10]" />
                <span>
                  {currentLang === 'mr'
                    ? '📅 Book Counselling'
                    : '📅 Book Counselling'}
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Contact Now Button */}
              <a
                id="hero-contact-now-btn"
                href="#contact"
                className="px-5 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white glass-panel border border-white/20 hover:border-[#D4AF37]/60 hover:bg-white/10 transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>
                  {currentLang === 'mr'
                    ? '📞 Contact Now'
                    : '📞 Contact Now'}
                </span>
              </a>

              {/* Glass Teal Button - WhatsApp */}
              <a
                id="hero-instant-whatsapp-chat-btn"
                href={`${DOCTOR_INFO.whatsappUrl}?text=${encodeURIComponent(
                  'नमस्कार विनायक सर, मला समुपदेशन सत्राबद्दल माहिती हवी आहे.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-cyan-300 glass-panel border border-[#00E5FF]/40 hover:bg-[#00E5FF]/10 hover:border-[#00E5FF] shadow-[0_0_20px_rgba(0,229,255,0.2)] hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#00E5FF]" />
                <span>
                  WhatsApp
                </span>
              </a>
            </div>

            {/* Micro Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10">
              {DOCTOR_INFO.stats.map((stat, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 font-medium">
                    {currentLang === 'mr' ? stat.labelMr : stat.labelEn}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 3D Glass Frame with Digital Portrait */}
          <div className="lg:col-span-5 flex justify-center">
            <TiltCard
              glowColor="gold"
              className="w-full max-w-md p-3 sm:p-4 bg-gradient-to-b from-[#162030]/80 via-[#101724]/90 to-[#0B0D10]/95"
              maxTilt={10}
            >
              {/* Floating Status Pill */}
              <div className="absolute top-6 right-6 z-30 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0B0D10]/80 border border-[#00E5FF]/40 text-xs font-semibold text-[#00E5FF] backdrop-blur-md shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>{currentLang === 'mr' ? 'नवीन सत्रे उपलब्ध' : 'Slots Open'}</span>
              </div>

              {/* Portrait Image Container */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-white/10 group shadow-2xl bg-[#0B0D10]">
                <img
                  src={DOCTOR_INFO.portraitImage}
                  alt="Vinayak Bhise - Clinical Psychologist & Counselor"
                  className="w-full h-full object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Ambient Bottom Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-transparent to-transparent opacity-85 pointer-events-none" />

                {/* Floating Bottom Card Over Portrait */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-panel border border-[#D4AF37]/35 bg-[#0B0D10]/90 backdrop-blur-md space-y-1.5 shadow-2xl">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
                      Clinical Psychologist
                    </span>
                    <span className="text-[11px] text-slate-300 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#00E5FF]" />
                      {currentLang === 'mr' ? 'बारामती / Online' : 'Baramati / Online'}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white leading-snug">
                    {currentLang === 'mr' ? DOCTOR_INFO.nameMr : DOCTOR_INFO.name}
                  </h3>
                  <p className="text-xs text-slate-300 font-medium">
                    {currentLang === 'mr'
                      ? 'CBT & REBT थेरपिस्ट | १०+ विशेष कौशल्ये'
                      : 'CBT & REBT Practitioner | 10+ Specializations'}
                  </p>
                </div>
              </div>

              {/* Bottom Quick Chips */}
              <div className="mt-4 flex items-center justify-between px-2 text-xs text-slate-300 font-medium">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  {currentLang === 'mr' ? '१००% खाजगी' : '100% Private'}
                </span>
                <span className="flex items-center gap-1">
                  <Globe className="w-4 h-4 text-[#00E5FF]" />
                  {currentLang === 'mr' ? 'ग्लोबल कव्हरेज' : 'Worldwide'}
                </span>
                <span className="flex items-center gap-1">
                  <Heart className="w-4 h-4 text-[#D4AF37]" />
                  {currentLang === 'mr' ? 'सहानुभूती' : 'Empathetic'}
                </span>
              </div>
            </TiltCard>
          </div>

        </div>
      </div>
    </section>
  );
};
