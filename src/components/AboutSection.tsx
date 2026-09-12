import React from 'react';
import {
  HeartHandshake,
  BrainCircuit,
  ShieldCheck,
  CheckCircle,
  Quote,
  Sparkles,
  Award,
  BookOpen
} from 'lucide-react';
import { DOCTOR_INFO, CORE_PHILOSOPHY } from '../data/brandData.ts';
import { TiltCard } from './TiltCard.tsx';

interface AboutSectionProps {
  currentLang: 'mr' | 'en';
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  currentLang,
  onOpenBooking
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartHandshake':
        return <HeartHandshake className="w-8 h-8 text-[#00E5FF]" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-8 h-8 text-[#D4AF37]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-8 h-8 text-emerald-400" />;
      default:
        return <Sparkles className="w-8 h-8 text-[#00E5FF]" />;
    }
  };

  return (
    <section id="about" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold tracking-wider uppercase">
            <Award className="w-3.5 h-3.5" />
            <span>{currentLang === 'mr' ? 'द व्हिजनरी सायकॉलॉजिस्ट' : 'The Visionary Psychologist'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {currentLang === 'mr'
              ? 'तुमच्या मानसिक आरोग्याचा आणि समाधानाचा विश्वासू मार्गदर्शक'
              : 'Your Trusted Guide for Mental Well-being & Lasting Peace'}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            {currentLang === 'mr'
              ? 'मानसिक समस्या ही लाज वाटण्याची गोष्ट नाही, तर शास्त्रीय उपचारांनी सोडवण्यासारखी गोष्ट आहे. विनायक भिसे हे गेल्या अनेक वर्षांपासून हजारो व्यक्तींना ताणतणाव, नैराश्य व नातेसंबंधांमधील संघर्षातून यशस्वीपणे बाहेर काढत आहेत.'
              : 'Mental health struggles are not a weakness; with scientific therapy and compassionate listening, every tangled mind finds serene harmony.'}
          </p>
        </div>

        {/* 3 Core Philosophy Cards (3D Glass Tiles) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {CORE_PHILOSOPHY.map((card) => (
            <TiltCard
              key={card.id}
              glowColor={card.color as 'teal' | 'gold'}
              className="p-7 flex flex-col justify-between bg-gradient-to-b from-[#131B2A]/90 to-[#0D121B]/95"
            >
              <div className="space-y-5">
                {/* Top Row: Icon & Serial Number */}
                <div className="flex items-center justify-between">
                  <div
                    className={`p-3.5 rounded-2xl border ${
                      card.color === 'teal'
                        ? 'bg-[#00E5FF]/10 border-[#00E5FF]/30 shadow-[0_0_20px_rgba(0,229,255,0.2)]'
                        : card.color === 'gold'
                        ? 'bg-[#D4AF37]/10 border-[#D4AF37]/30 shadow-[0_0_20px_rgba(212,175,55,0.2)]'
                        : 'bg-emerald-500/10 border-emerald-500/30'
                    }`}
                  >
                    {getIcon(card.icon)}
                  </div>
                  <span className="text-3xl font-black text-slate-700/60 font-mono">
                    {card.number}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {currentLang === 'mr' ? card.titleMr : card.titleEn}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-400/90 tracking-wide uppercase">
                    {currentLang === 'mr' ? card.subtitleMr : card.subtitleEn}
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed pt-1">
                    {currentLang === 'mr' ? card.descMr : card.descEn}
                  </p>
                </div>
              </div>

              {/* Bottom Subtle Badge */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle className="w-4 h-4 text-[#00E5FF]" />
                <span>
                  {currentLang === 'mr'
                    ? 'प्रमाणित क्लिनिकल तत्त्वप्रणाली'
                    : 'Validated Clinical Methodology'}
                </span>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Detailed Philosophy & Background Spotlight */}
        <div className="rounded-3xl glass-panel p-8 sm:p-12 border border-white/10 bg-gradient-to-br from-[#121A28]/80 via-[#0E1520]/90 to-[#0A0E15] relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#00E5FF]/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#D4AF37]/10 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                <BookOpen className="w-4 h-4" />
                <span>{currentLang === 'mr' ? 'दृष्टिकोन व विचारप्रणाली' : 'Vision & Methodology'}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                {currentLang === 'mr'
                  ? '“औषधोपचारांआधी मनातील विचारांची गाठ सोडवणे हेच खऱ्या समाधानाचे रहस्य आहे.”'
                  : '“Untangling thought loops prior to medicinal dependence is the true gateway to mental peace.”'}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {currentLang === 'mr'
                  ? 'विनायक भिसे यांचा समुपदेशन दृष्टिकोन हा पाश्चात्य वैज्ञानिक मानसशास्त्र (CBT, REBT, Mindfulness) आणि भारतीय संवेदनशील संवाद संस्कृती यांचा सुवर्णसंगम आहे. व्यक्तीच्या भावनांचा आदर ठेवून, तिला कोणत्याही पूर्वग्रहाशिवाय ऐकून घेणे आणि तिच्यातील आंतरिक सामर्थ्य जागृत करणे हे त्यांचे ध्येय आहे.'
                  : 'Blending rigorous Western cognitive-behavioral science with profound Indian empathetic warmth, Vinayak Bhise creates a sanctuary where clients rediscover resilience, clarity, and unconditional self-compassion.'}
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <div className="px-3.5 py-1.5 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37] flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>
                    {currentLang === 'mr'
                      ? 'संस्थापक: WMHD Association (World Mental Health Development Association)'
                      : 'Founder & Director: WMHD Association (World Mental Health Development Association)'}
                  </span>
                </div>
                <div className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-200">
                  🔹 Cognitive Behavioral Therapy (CBT)
                </div>
                <div className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-200">
                  🔹 Rational Emotive Behavior Therapy (REBT)
                </div>
                <div className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-200">
                  🔹 Somatic & Mindfulness Stress Relief
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end space-y-4">
              <div className="p-6 rounded-2xl glass-gold-glow border border-[#D4AF37]/40 w-full text-center space-y-2">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block">
                  {currentLang === 'mr' ? 'थेट सल्लामसलत' : 'Personal Direct Access'}
                </span>
                <p className="text-lg font-bold text-white">
                  {DOCTOR_INFO.phoneDisplay}
                </p>
                <p className="text-xs text-slate-300">
                  {currentLang === 'mr'
                    ? 'बारामती क्लिनिक किंवा सुरक्षित ऑनलाइन व्हिडिओ'
                    : 'Baramati Clinic or Secure Online Video'}
                </p>
                <button
                  onClick={onOpenBooking}
                  className="w-full mt-3 py-2.5 rounded-xl font-bold text-xs text-[#0B0D10] bg-gradient-to-r from-[#F9E282] to-[#D4AF37] hover:brightness-110 shadow-lg transition-all"
                >
                  {currentLang === 'mr' ? 'सत्र बुक करा' : 'Schedule Session'}
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
