import React from 'react';
import {
  Globe,
  Award,
  Heart,
  Users,
  CheckCircle2,
  ExternalLink,
  ArrowRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { DOCTOR_INFO } from '../data/brandData.ts';
import { TiltCard } from './TiltCard.tsx';

interface WMHDAssociationSectionProps {
  currentLang: 'mr' | 'en';
}

export const WMHDAssociationSection: React.FC<WMHDAssociationSectionProps> = ({
  currentLang
}) => {
  const initiatives = [
    {
      titleMr: 'ग्रामिण व शहरी मानसिक आरोग्य शिबिरे',
      titleEn: 'Rural & Urban Mental Health Camps',
      descMr: 'समाजातील तळागाळातील लोकांपर्यंत पोहोचून मोफत समुपदेशन व प्राथमिक मानसशास्त्रीय तपासणी.',
      descEn: 'Free community outreach, grassroots psychological screening, and destigmatizing mental care in rural and urban areas.'
    },
    {
      titleMr: 'युवा वर्ग व विद्यार्थी मानसिक सबलीकरण',
      titleEn: 'Youth & Student Emotional Empowerment',
      descMr: 'शाळा, महाविद्यालयांमध्ये परीक्षा ताण, नैराश्य व आत्महत्येसारख्या टोकाच्या विचारांवर मात करण्यासाठी जनजागृती सत्रे.',
      descEn: 'Proactive school and collegiate drives tackling academic burnout, cyber-bullying, depression, and suicide prevention.'
    },
    {
      titleMr: 'वर्ल्ड मेंटल हेल्थ डेव्हलपमेंट (WMHD) भव्य अभियान',
      titleEn: 'World Mental Health Development (WMHD) Mega Campaign',
      descMr: 'दरवर्षी १० ऑक्टोबर आणि वर्षभर राज्यव्यापी जनजागृती रॅली, व्याख्यानमाला आणि डिजिटल जनजागृती मोहिमांचे आयोजन.',
      descEn: 'Annual October 10 rallies, year-round state-wide mental health drives, and digital empowerment symposiums.'
    }
  ];

  return (
    <section id="wmhd-movement" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Glassmorphic Container */}
        <div className="rounded-3xl glass-panel border border-[#D4AF37]/30 bg-gradient-to-br from-[#181D29]/95 via-[#111622]/90 to-[#0A0D14] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          
          {/* Ambient Gold Halo */}
          <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[#D4AF37]/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-[#00E5FF]/10 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold tracking-wider uppercase">
                <Award className="w-3.5 h-3.5" />
                <span>{currentLang === 'mr' ? 'सामाजिक चळवळ आणि नेतृत्व' : 'Social Impact Movement'}</span>
              </div>

              {/* Headline */}
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7DF79] via-[#D4AF37] to-amber-200">
                    Founder & Director
                  </span>
                  <br />
                  <span className="text-white">WMHD Association</span>
                </h2>
                <p className="text-sm sm:text-base font-semibold text-cyan-300">
                  {currentLang === 'mr'
                    ? 'WMHD Association (World Mental Health Development Association)'
                    : 'WMHD Association (World Mental Health Development Association)'}
                </p>
                <p className="text-xs sm:text-sm font-medium text-slate-400">
                  {currentLang === 'mr'
                    ? 'वर्ल्ड मेंटल हेल्थ डेव्हलपमेंट असोसिएशन – मानसिक आरोग्याची समाजव्यापी चळवळ'
                    : 'Championing Universal Psychological Wellness & Community Mental Health Growth'}
                </p>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {currentLang === 'mr'
                  ? 'विनायक नवनाथ भिसे यांच्या नेतृत्वाखाली WMHD Association (World Mental Health Development Association) ही संस्था मानसिक आरोग्याविषयी समाजातील गैरसमज व अंधश्रद्धा दूर करण्यासाठी कटिबद्ध आहे. प्रत्येकाला मानसोपचार मिळणे हा त्याचा मूलभूत अधिकार आहे या विश्वासाने ही चळवळ अहोरात्र कार्यरत आहे.'
                  : 'Founded and spearheaded by Vinayak Navnath Bhise, WMHD Association (World Mental Health Development Association) shatters societal taboos surrounding psychiatric and psychological distress, championing accessible, ethical mental health support for every citizen.'}
              </p>

              {/* Core Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {initiatives.map((init, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2 hover:border-[#D4AF37]/40 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] font-bold text-xs">
                      0{i + 1}
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">
                      {currentLang === 'mr' ? init.titleMr : init.titleEn}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {currentLang === 'mr' ? init.descMr : init.descEn}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3.5">
                <a
                  href="https://wmhdassociation.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-[#0B0D10] bg-gradient-to-r from-[#F9E282] via-[#D4AF37] to-[#B89222] hover:brightness-110 shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all flex items-center gap-2 group"
                >
                  <Globe className="w-4 h-4 text-[#0B0D10]" />
                  <span>{currentLang === 'mr' ? '🌐 WMHD अधिकृत वेबसाईट (wmhdassociation.org)' : '🌐 Visit Official WMHD Website (wmhdassociation.org)'}</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={`${DOCTOR_INFO.whatsappUrl}?text=${encodeURIComponent(
                    'नमस्कार विनायक सर, मला WMHD Association च्या सामाजिक उपक्रमांमध्ये सहभागी व्हायचे आहे.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-cyan-300 glass-panel border border-[#00E5FF]/40 hover:bg-[#00E5FF]/10 transition-all flex items-center gap-2"
                >
                  <Users className="w-4 h-4 text-[#00E5FF]" />
                  <span>{currentLang === 'mr' ? 'संस्थेशी जोडा / सहकार्य' : 'Partner with WMHD'}</span>
                </a>
              </div>
            </div>

            {/* Right Card / Statistics Spotlight */}
            <div className="lg:col-span-5 flex justify-center">
              <TiltCard
                glowColor="gold"
                className="w-full max-w-sm p-6 bg-gradient-to-b from-[#1C160E]/90 to-[#0F0C08]/95 border border-[#D4AF37]/40 space-y-6 text-center"
              >
                <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-[#F7DF79]/20 to-[#D4AF37]/40 border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                  <Heart className="w-10 h-10 fill-current animate-pulse" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-widest block">
                    FOUNDED WITH A MISSION
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    {currentLang === 'mr' ? 'मानसिक आरोग्य, सर्वांचा अधिकार' : 'Mental Health For All'}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {currentLang === 'mr'
                      ? 'WMHD Association मार्फत लाखो लोकांपर्यंत सकारात्मक विचार आणि शास्त्रीय मार्गदर्शन पोहोचवण्याचा अखंड संकल्प.'
                      : 'Dedicated to reducing suicide risk, resolving domestic toxicity, and instilling scientific psychological awareness.'}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/10 text-left space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>१०+ जिल्हास्तरीय मोफत समुपदेशन मोहिमा</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>२५,०००+ विद्यार्थी व पालकांशी थेट संवाद</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>शासकीय व सामाजिक संस्थांशी सहकार्य</span>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-slate-400">
                  Director: <strong>Vinayak Navnath Bhise</strong>
                </div>
              </TiltCard>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
