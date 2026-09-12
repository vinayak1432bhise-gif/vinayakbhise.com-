import React from 'react';
import {
  Globe,
  Video,
  PhoneCall,
  CalendarCheck,
  ShieldCheck,
  Clock,
  CheckCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { DOCTOR_INFO, globalImg as globalMindImg } from '../data/brandData.ts';
import { TiltCard } from './TiltCard.tsx';

interface OnlineHubSectionProps {
  currentLang: 'mr' | 'en';
  onOpenBooking: () => void;
}

export const OnlineHubSection: React.FC<OnlineHubSectionProps> = ({
  currentLang,
  onOpenBooking
}) => {
  const steps = [
    {
      num: '01',
      titleMr: 'Select Slot (सोयीची वेळ निवडा)',
      titleEn: '1. Select Your Slot',
      descMr: 'तुमच्या दैनंदिन वेळापत्रकानुसार सोयीस्कर तारीख आणि वेळ निवडा. भारत आणि आंतरराष्ट्रीय वेळेनुसार स्लॉट उपलब्ध.',
      descEn: 'Pick a comfortable date & time matching your daily schedule. Seamless cross-timezone slots for Indian and international clients.',
      icon: CalendarCheck
    },
    {
      num: '02',
      titleMr: 'Confidential Connect (गोपनीय संवाद)',
      titleEn: '2. Confidential Connect',
      descMr: 'सुरक्षित Zoom, Google Meet किंवा थेट फोन कॉलद्वारे विनायक भिसे यांच्याशी वन-ऑन-वन संवाद.',
      descEn: 'Connect via encrypted Zoom, Google Meet, or private direct phone call from the privacy of your own home.',
      icon: Video
    },
    {
      num: '03',
      titleMr: 'Follow-up Plan (पर्सनल प्लॅन)',
      titleEn: '3. Follow-up Roadmap',
      descMr: 'सत्रानंतर तुमच्या प्रगतीचा मागोवा घेण्यासाठी दैनंदिन माइंडफुलनेस व्यायाम, रिफ्लेक्शन नोट्स आणि पाठपुरावा योजना.',
      descEn: 'Receive actionable cognitive exercises, mindfulness anchors, and an ongoing continuity roadmap.',
      icon: ShieldCheck
    }
  ];

  return (
    <section id="online-hub" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Banner Container */}
        <div className="rounded-3xl glass-panel border border-[#00E5FF]/30 bg-gradient-to-br from-[#101826]/90 via-[#0B0F17]/95 to-[#06080C] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          
          {/* Subtle Ambient Beams */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00E5FF]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
                <Globe className="w-3.5 h-3.5 text-[#00E5FF]" />
                <span>{currentLang === 'mr' ? 'ऑनलाइन कौन्सेलिंग हब (ग्लोबल रिच)' : 'Online Counselling Hub (Global Reach)'}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {currentLang === 'mr' ? (
                  <>
                    घरबसल्या मिळवा{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#D4AF37]">
                      तज्ज्ञ मानसशास्त्रज्ञांचे मार्गदर्शन!
                    </span>
                  </>
                ) : (
                  <>
                    Empathetic Psychological Care{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#D4AF37]">
                      From Any Corner of the World
                    </span>
                  </>
                )}
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {currentLang === 'mr'
                  ? 'तुम्ही महाराष्ट्रात असाल, भारतातील कोणत्याही शहरात असाल किंवा परदेशात (USA, UK, Gulf, Canada, Europe) राहत असाल—भौगोलिक अंतर आता मानसिक स्वास्थ्याच्या आड येणार नाही. उच्च दर्जाची मानसोपचार सेवा आता तुमच्या एका क्लिकवर उपलब्ध.'
                  : 'Whether you reside in Mumbai, Pune, rural Maharashtra, or overseas in the US, UK, Middle East, or Europe, high-level compassionate psychology support is just a screen away.'}
              </p>

              {/* Supported Formats Chips */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-200">
                  <Video className="w-4 h-4 text-[#00E5FF]" />
                  <span>Zoom / Google Meet (HD Video)</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-200">
                  <PhoneCall className="w-4 h-4 text-emerald-400" />
                  <span>Private Phone Consultation</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-200">
                  <Clock className="w-4 h-4 text-[#D4AF37]" />
                  <span>Flexible Multi-Timezone Slots</span>
                </div>
              </div>

              {/* 3 Step Process Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                {steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2 hover:border-[#00E5FF]/30 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#00E5FF]">
                        STEP {step.num}
                      </span>
                      <step.icon className="w-4 h-4 text-[#D4AF37]" />
                    </div>
                    <h4 className="text-sm font-bold text-white">
                      {currentLang === 'mr' ? step.titleMr : step.titleEn}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {currentLang === 'mr' ? step.descMr : step.descEn}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="px-6 py-3.5 rounded-xl font-bold text-sm text-[#0B0D10] bg-gradient-to-r from-[#F9E282] via-[#D4AF37] to-[#B89222] shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:brightness-110 transition-all flex items-center gap-2"
                >
                  <span>{currentLang === 'mr' ? 'ऑनलाइन सेशन स्लॉट निवडा' : 'Book Online Slot Now'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5 flex justify-center">
              <TiltCard
                glowColor="teal"
                className="w-full max-w-sm p-3 bg-[#0B0F17]/90 border border-cyan-500/30"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src={globalMindImg}
                    alt="Global Psychological Support Network"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-transparent to-transparent opacity-80" />

                  {/* Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-panel border border-[#00E5FF]/30 bg-[#0B0D10]/80 space-y-1">
                    <span className="text-xs font-bold text-[#00E5FF] uppercase tracking-wider block">
                      {currentLang === 'mr' ? 'जागतिक दर्जाची मानसोपचार सेवा' : 'Global Tele-Psychology'}
                    </span>
                    <p className="text-sm font-bold text-white">
                      {currentLang === 'mr' ? '१००% गोपनीय • सुरक्षित प्लॅटफॉर्म' : '100% Confidential & Secure'}
                    </p>
                    <p className="text-xs text-slate-300">
                      Zoom • Google Meet • Direct WhatsApp Call
                    </p>
                  </div>
                </div>
              </TiltCard>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
