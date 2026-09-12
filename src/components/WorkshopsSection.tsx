import React, { useState } from 'react';
import {
  Sparkles,
  Calendar,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Award
} from 'lucide-react';
import { WORKSHOPS_LIST, DOCTOR_INFO } from '../data/brandData.ts';
import { WorkshopProgram } from '../types.ts';
import { TiltCard } from './TiltCard.tsx';

interface WorkshopsSectionProps {
  currentLang: 'mr' | 'en';
  onEnrollWorkshop: (workshop: WorkshopProgram) => void;
}

export const WorkshopsSection: React.FC<WorkshopsSectionProps> = ({
  currentLang,
  onEnrollWorkshop
}) => {
  return (
    <section id="workshops" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold tracking-wider uppercase">
            <Award className="w-3.5 h-3.5" />
            <span>{currentLang === 'mr' ? 'प्रशिक्षण व कार्यशाळा' : 'Programs & Workshops'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {currentLang === 'mr'
              ? 'मानसिक परिवर्तन घडवणाऱ्या विशेष मानसशास्त्रीय कार्यशाळा'
              : 'Transformative Psychological Mastery Programs'}
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            {currentLang === 'mr'
              ? 'केवळ ऐकणे नव्हे, तर प्रत्यक्ष कृतीतून स्वतःचे विचार आणि सवयी बदलण्याचे शास्त्रीय व्यासपीठ.'
              : 'Interactive, high-impact experiential workshops designed to build emotional intelligence, stress resilience, and deep relationship warmth.'}
          </p>
        </div>

        {/* 4 Workshops Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {WORKSHOPS_LIST.map((prog) => (
            <TiltCard
              key={prog.id}
              glowColor="gold"
              className="p-7 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-[#131B2A]/90 via-[#0E1522]/95 to-[#0A0D14]"
            >
              <div className="space-y-5">
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30">
                    {prog.badge}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#00E5FF]" />
                    {prog.duration}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div className="space-y-1.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {currentLang === 'mr' ? prog.titleMr : prog.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-cyan-300">
                    {currentLang === 'mr' ? prog.taglineMr : prog.taglineEn}
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed pt-1">
                    {currentLang === 'mr' ? prog.descMr : prog.descEn}
                  </p>
                </div>

                {/* Modules Curriculum */}
                <div className="space-y-2 pt-2 border-t border-white/5">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    {currentLang === 'mr' ? 'कार्यशाळेतील मुख्य घटक (Curriculum):' : 'Key Learning Modules:'}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {(currentLang === 'mr' ? prog.modulesMr : prog.modulesEn).map((mod, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 p-2 rounded-xl bg-white/5 text-xs text-slate-200"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-[#00E5FF] shrink-0 mt-0.5" />
                        <span>{mod}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Suitable For */}
                <div className="flex items-center gap-2 text-xs text-slate-400 bg-white/5 px-3 py-2 rounded-xl">
                  <Users className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>
                    <strong className="text-slate-300">{currentLang === 'mr' ? 'कोणासाठी उपयुक्त: ' : 'Target Group: '}</strong>
                    {currentLang === 'mr' ? prog.suitableForMr : prog.suitableForEn}
                  </span>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  {prog.format}
                </span>

                <button
                  onClick={() => onEnrollWorkshop(prog)}
                  className="px-5 py-2.5 rounded-xl font-bold text-xs text-[#0B0D10] bg-gradient-to-r from-[#F9E282] to-[#D4AF37] hover:brightness-110 shadow-lg transition-all flex items-center gap-1.5"
                >
                  <span>{currentLang === 'mr' ? 'बॅचसाठी नावनोंदणी करा' : 'Enroll in Batch'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Corporate / Institutional Booking Callout */}
        <div className="mt-12 p-6 rounded-2xl glass-panel border border-[#00E5FF]/20 text-center space-y-3 bg-gradient-to-r from-[#101726] to-[#0D131F]">
          <h4 className="text-base sm:text-lg font-bold text-white">
            {currentLang === 'mr'
              ? 'शाळा, कॉलेज किंवा कॉर्पोरेट कंपन्यांसाठी विशेष सेमिनार हवे आहे का?'
              : 'Looking for a Keynote or Workshop for your School, College, or Corporate Team?'}
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
            {currentLang === 'mr'
              ? 'संस्था किंवा कंपन्यांच्या कर्मचाऱ्यांसाठी सानुकूलित मेंटल हेल्थ अवेअरनेस सेमिनार आयोजित करण्यासाठी थेट संपर्क साधा.'
              : 'Vinayak Bhise conducts custom institutional wellness drives, student mindset bootcamps, and corporate stress audits.'}
          </p>
          <a
            href={`${DOCTOR_INFO.whatsappUrl}?text=${encodeURIComponent(
              'नमस्कार विनायक सर, मला आमच्या कॉलेज/संस्थेसाठी मानसशास्त्रीय सेमिनारचे आयोजन करायचे आहे.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs sm:text-sm font-semibold text-white transition-all"
          >
            <span>{currentLang === 'mr' ? 'संस्थेसाठी सेमिनार बुक करा' : 'Inquire for Institutional Seminar'}</span>
            <ArrowRight className="w-4 h-4 text-[#00E5FF]" />
          </a>
        </div>

      </div>
    </section>
  );
};
