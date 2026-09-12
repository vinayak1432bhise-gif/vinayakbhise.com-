import React, { useState } from 'react';
import {
  UserCheck,
  Activity,
  Sparkles,
  SunMedium,
  Flame,
  HeartHandshake,
  GraduationCap,
  Smile,
  ShieldAlert,
  ClipboardCheck,
  ArrowRight,
  CheckCircle2,
  Clock,
  Search,
  Filter,
  X
} from 'lucide-react';
import { SERVICES_LIST } from '../data/brandData.ts';
import { ServiceItem } from '../types.ts';
import { TiltCard } from './TiltCard.tsx';

interface ServicesSectionProps {
  currentLang: 'mr' | 'en';
  onSelectServiceForBooking: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  currentLang,
  onSelectServiceForBooking
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string, color: 'teal' | 'gold') => {
    const iconClass = `w-7 h-7 ${color === 'teal' ? 'text-[#00E5FF]' : 'text-[#D4AF37]'}`;
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck className={iconClass} />;
      case 'Activity':
        return <Activity className={iconClass} />;
      case 'Sparkles':
        return <Sparkles className={iconClass} />;
      case 'SunMedium':
        return <SunMedium className={iconClass} />;
      case 'Flame':
        return <Flame className={iconClass} />;
      case 'HeartHandshake':
        return <HeartHandshake className={iconClass} />;
      case 'GraduationCap':
        return <GraduationCap className={iconClass} />;
      case 'Smile':
        return <Smile className={iconClass} />;
      case 'ShieldAlert':
        return <ShieldAlert className={iconClass} />;
      case 'ClipboardCheck':
        return <ClipboardCheck className={iconClass} />;
      default:
        return <Sparkles className={iconClass} />;
    }
  };

  const categories = [
    { id: 'all', labelMr: 'सर्व सेवा (All 10)', labelEn: 'All Services (10)' },
    { id: 'individual', labelMr: 'वैयक्तिक व ताणतणाव', labelEn: 'Individual & Stress' },
    { id: 'relationship', labelMr: 'नातेसंबंध सुधारणा', labelEn: 'Relationships & Marriage' },
    { id: 'youth', labelMr: 'विद्यार्थी व बाल मानसशास्त्र', labelEn: 'Students & Youth' },
    { id: 'clinical', labelMr: 'क्लिनिकल व चाचणी', labelEn: 'Clinical & Assessment' },
  ];

  const filteredServices = SERVICES_LIST.filter((srv) => {
    const matchesCategory =
      selectedCategory === 'all' || srv.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesQuery =
      !query ||
      srv.titleMr.toLowerCase().includes(query) ||
      srv.titleEn.toLowerCase().includes(query) ||
      srv.shortDescMr.toLowerCase().includes(query) ||
      srv.shortDescEn.toLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });

  return (
    <section id="services" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span>{currentLang === 'mr' ? '१० प्रमुख समुपदेशन सेवा' : '10 Specialized Clinical Services'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {currentLang === 'mr'
              ? 'मानसिक स्वास्थ्य आणि भावनांचे शास्त्रीय व्यवस्थापन'
              : 'Holistic & Scientific Psychological Counselling Services'}
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            {currentLang === 'mr'
              ? 'प्रत्येक समस्येचे स्वरूप वेगळे असते. तुमच्या गरजेनुसार योग्य उपचार आणि वैयक्तिक मार्गदर्शनाची खात्री.'
              : 'Tailored evidence-based interventions addressing the specific nuances of your emotional, relational, and behavioral life.'}
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl glass-panel border border-white/10 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-[#00E5FF]/20 to-cyan-400/20 text-[#00E5FF] border border-cyan-400/40 shadow-[0_0_15px_rgba(0,229,255,0.2)]'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {currentLang === 'mr' ? cat.labelMr : cat.labelEn}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={currentLang === 'mr' ? 'सेवा शोधा (उदा. ताण, राग, नैराश्य)...' : 'Search service (e.g. stress, anger)...'}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#00E5FF] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* 3D Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <TiltCard
              key={service.id}
              glowColor={service.accentColor}
              className="p-6 flex flex-col justify-between bg-gradient-to-b from-[#121A28]/90 to-[#0A0E15]/95 group cursor-pointer"
              onClick={() => setActiveModalService(service)}
            >
              <div className="space-y-4">
                {/* Card Top: Glowing 3D Icon & Number */}
                <div className="flex items-center justify-between">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all ${
                      service.accentColor === 'teal'
                        ? 'bg-[#00E5FF]/10 border-[#00E5FF]/30 group-hover:border-[#00E5FF] group-hover:shadow-[0_0_20px_rgba(0,229,255,0.3)]'
                        : 'bg-[#D4AF37]/10 border-[#D4AF37]/30 group-hover:border-[#D4AF37] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                    }`}
                  >
                    {getServiceIcon(service.iconName, service.accentColor)}
                  </div>
                  <span className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-slate-400 border border-white/5">
                    #{service.number.toString().padStart(2, '0')}
                  </span>
                </div>

                {/* Title & Short Description */}
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#00E5FF] transition-colors leading-snug">
                    {currentLang === 'mr' ? service.titleMr : service.titleEn}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium">
                    {currentLang === 'mr' ? service.titleEn : service.titleMr}
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed pt-1">
                    {currentLang === 'mr' ? service.shortDescMr : service.shortDescEn}
                  </p>
                </div>

                {/* Quick Key Symptoms Preview */}
                <div className="space-y-1.5 pt-2 border-t border-white/5">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                    {currentLang === 'mr' ? 'प्रमुख लक्षणे / फायदे:' : 'Key Symptoms & Focus:'}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {(currentLang === 'mr' ? service.symptomsMr : service.symptomsEn).slice(0, 2).map((sym, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/5"
                      >
                        • {sym}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#00E5FF]" />
                  {service.durationMinutes} मिनिटे सत्र
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveModalService(service);
                  }}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#00E5FF] group-hover:text-white transition-colors"
                >
                  <span>{currentLang === 'mr' ? 'सविस्तर माहिती' : 'Explore'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Service Detailed Modal / Drawer */}
        {activeModalService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
            <div className="relative w-full max-w-2xl rounded-3xl glass-panel border border-[#00E5FF]/40 bg-[#0B0D10]/95 p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto shadow-2xl">
              
              {/* Close Button */}
              <button
                onClick={() => setActiveModalService(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-cyan-950/60 border border-cyan-400/40 shrink-0">
                  {getServiceIcon(activeModalService.iconName, activeModalService.accentColor)}
                </div>
                <div>
                  <span className="text-xs font-mono text-[#D4AF37] font-semibold uppercase tracking-wider">
                    Service #{activeModalService.number}
                  </span>
                  <h3 className="text-2xl font-bold text-white leading-tight">
                    {currentLang === 'mr' ? activeModalService.titleMr : activeModalService.titleEn}
                  </h3>
                  <p className="text-sm text-cyan-300">
                    {currentLang === 'mr' ? activeModalService.titleEn : activeModalService.titleMr}
                  </p>
                </div>
              </div>

              {/* Detailed Explanation */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {currentLang === 'mr' ? 'वैद्यकीय दृष्टिकोन व सविस्तर माहिती:' : 'Clinical Overview:'}
                </h4>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {currentLang === 'mr' ? activeModalService.detailedDescMr : activeModalService.detailedDescEn}
                </p>
              </div>

              {/* Grid: Symptoms vs Solutions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Symptoms */}
                <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/20 space-y-2">
                  <h5 className="text-xs font-bold text-rose-300 uppercase tracking-wider">
                    {currentLang === 'mr' ? '🚩 तुम्हाला हे जाणवतंय का?' : '🚩 Common Warning Signs:'}
                  </h5>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {(currentLang === 'mr' ? activeModalService.symptomsMr : activeModalService.symptomsEn).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-rose-400 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions */}
                <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 space-y-2">
                  <h5 className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                    {currentLang === 'mr' ? '✅ सत्रात मिळणारे उपाय:' : '✅ Session Takeaways:'}
                  </h5>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {(currentLang === 'mr' ? activeModalService.solutionsMr : activeModalService.solutionsEn).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10">
                <div className="text-xs text-slate-400">
                  <span>सत्र कालावधी: </span>
                  <strong className="text-white">{activeModalService.durationMinutes} मिनिटे</strong> | १००% गोपनीय
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setActiveModalService(null)}
                    className="w-1/2 sm:w-auto px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-medium text-slate-300"
                  >
                    {currentLang === 'mr' ? 'बंद करा' : 'Close'}
                  </button>

                  <button
                    onClick={() => {
                      const id = activeModalService.id;
                      setActiveModalService(null);
                      onSelectServiceForBooking(id);
                    }}
                    className="w-1/2 sm:w-auto px-6 py-2.5 rounded-xl font-bold text-xs text-[#0B0D10] bg-gradient-to-r from-[#F9E282] via-[#D4AF37] to-[#B89222] shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:brightness-110 transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>{currentLang === 'mr' ? 'हे सत्र बुक करा' : 'Book This Session'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
