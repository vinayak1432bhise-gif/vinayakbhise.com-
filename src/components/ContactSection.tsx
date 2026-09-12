import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  MapPin,
  Mail,
  Clock,
  ShieldCheck,
  Send,
  Calendar,
  CheckCircle2,
  Sparkles,
  Heart,
  Globe
} from 'lucide-react';
import { DOCTOR_INFO, SERVICES_LIST } from '../data/brandData.ts';
import { TiltCard } from './TiltCard.tsx';

interface ContactSectionProps {
  currentLang: 'mr' | 'en';
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  currentLang,
  onOpenBooking
}) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: SERVICES_LIST[0].titleMr,
    mode: 'Online Video (Zoom/Meet)',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*नवीन समुपदेशन विचारणा (Website Inquiry)*\n\nनाव: ${formData.name}\nफोन: ${formData.phone}\nसेवा: ${formData.service}\nपद्धत: ${formData.mode}\nसंदेश: ${formData.message || 'नोंद नाही'}`;
    const url = `https://wa.me/917798150143?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span>{currentLang === 'mr' ? 'थेट संपर्क व अपॉइंटमेंट' : 'Contact & Appointments'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {currentLang === 'mr'
              ? 'तुमच्या मनाची काळजी घेण्यासाठी आम्ही सदैव तत्पर आहोत'
              : 'Take the First Brave Step Towards Healing & Harmony'}
          </h2>

          {/* Short Powerful Tagline */}
          <div className="pt-2">
            <blockquote className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-white to-[#D4AF37] italic">
              {DOCTOR_INFO.brandQuoteMr}
            </blockquote>
            <p className="text-sm text-cyan-400 font-semibold tracking-wide uppercase mt-1">
              “Your Mind Matters.”
            </p>
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Doctor Info Cards */}
          <div className="lg:col-span-5 space-y-5">
            <TiltCard
              glowColor="gold"
              className="p-7 bg-gradient-to-b from-[#151D2C]/90 to-[#0C111A]/95 space-y-6"
            >
              <div className="space-y-2 border-b border-white/10 pb-4">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block">
                  Mental Health Counselor & Psychologist
                </span>
                <h3 className="text-2xl font-black text-white">
                  {DOCTOR_INFO.name}
                </h3>
                <p className="text-xs text-slate-300 font-medium">
                  {DOCTOR_INFO.roleMr}
                </p>
              </div>

              {/* Direct Touchpoints */}
              <div className="space-y-4 text-sm">
                {/* Phone */}
                <a
                  href={`tel:${DOCTOR_INFO.phone}`}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-[#00E5FF] group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">थेट कॉल / Direct Call:</span>
                    <strong className="text-white text-base font-bold">{DOCTOR_INFO.phoneDisplay}</strong>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={DOCTOR_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3 rounded-xl bg-emerald-950/30 hover:bg-emerald-950/50 border border-emerald-500/30 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-emerald-900/60 border border-emerald-500/40 text-emerald-400 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-emerald-300 block">झटपट व्हॉट्सॲप / WhatsApp Chat:</span>
                    <strong className="text-emerald-400 text-base font-bold">{DOCTOR_INFO.phoneDisplay}</strong>
                  </div>
                </a>

                {/* Official Website */}
                <a
                  href={DOCTOR_INFO.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3 rounded-xl bg-cyan-950/30 hover:bg-cyan-950/50 border border-cyan-500/30 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-cyan-900/60 border border-cyan-500/40 text-[#00E5FF] group-hover:scale-110 transition-transform">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-cyan-300 block">अधिकृत वेबसाईट / Official Domain:</span>
                    <strong className="text-[#00E5FF] text-base font-bold">{DOCTOR_INFO.websiteDisplay}</strong>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="p-2 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">सल्लामसलत ठिकाण:</span>
                    <strong className="text-white block">बारामती क्लिनिक (Baramati Clinic)</strong>
                    <span className="text-xs text-cyan-300">आणि ऑनलाइन जगभरातून (Online Worldwide)</span>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">सल्लामसलत वेळ:</span>
                    <span className="text-white font-semibold">सकाळी ९:०० ते रात्री ९:०० (सोमवार ते रविवार)</span>
                    <span className="text-xs text-slate-400 block font-normal">(पूर्वनोंदणी आवश्यक)</span>
                  </div>
                </div>
              </div>

              {/* Confidentiality Seal */}
              <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-500/20 flex items-center gap-2.5 text-xs text-cyan-200">
                <ShieldCheck className="w-5 h-5 text-[#00E5FF] shrink-0" />
                <span>तुमची सर्व माहिती आणि संभाषण पूर्णपणे गुप्त व सुरक्षित ठेवले जाते.</span>
              </div>
            </TiltCard>
          </div>

          {/* Right Column: Interactive Appointment & Message Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl glass-panel border border-white/10 bg-gradient-to-br from-[#121927]/95 via-[#0D131E]/95 to-[#080B10] p-7 sm:p-9 shadow-2xl">
              <div className="space-y-2 mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {currentLang === 'mr' ? 'गोपनीय सत्र नोंदणी अर्ज' : 'Confidential Appointment Request'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  {currentLang === 'mr'
                    ? 'खालील माहिती भरा; आम्ही लवकरात लवकर तुमच्याशी संपर्क साधू.'
                    : 'Fill in your details below for a discreet follow-up and session confirmation.'}
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-4 animate-fadeIn">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">
                    {currentLang === 'mr' ? 'विनंती यशस्वीरीत्या पाठवली!' : 'Request Sent Successfully!'}
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    {currentLang === 'mr'
                      ? 'तुमची माहिती व्हॉट्सॲपवर पाठवली आहे. विनायक भिसे सर स्वतः किंवा आमची टीम तुमच्याशी लवकरच संपर्क करेल.'
                      : 'Your inquiry has been dispatched to WhatsApp. Vinayak Bhise will connect shortly.'}
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-semibold text-white"
                  >
                    {currentLang === 'mr' ? 'पुन्हा अर्ज भरा' : 'Submit Another Request'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        {currentLang === 'mr' ? 'पूर्ण नाव *' : 'Full Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="उदा. राहुल पवार"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#00E5FF]"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        {currentLang === 'mr' ? 'मोबाईल / WhatsApp नंबर *' : 'Mobile / WhatsApp Number *'}
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#00E5FF]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Service */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        {currentLang === 'mr' ? 'समुपदेशन प्रकार' : 'Service Type'}
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0D1420] border border-white/10 text-sm text-white focus:outline-none focus:border-[#00E5FF]"
                      >
                        {SERVICES_LIST.map((s) => (
                          <option key={s.id} value={s.titleMr}>
                            {s.titleMr} ({s.titleEn})
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Consultation Mode */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        {currentLang === 'mr' ? 'पसंतीचे माध्यम' : 'Consultation Mode'}
                      </label>
                      <select
                        value={formData.mode}
                        onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0D1420] border border-white/10 text-sm text-white focus:outline-none focus:border-[#00E5FF]"
                      >
                        <option value="Baramati Clinic (प्रत्यक्ष भेट)">Baramati Clinic (प्रत्यक्ष क्लिनिक भेट)</option>
                        <option value="Online Video Call (Zoom/Google Meet)">Online Video Call (Zoom / Meet)</option>
                        <option value="Phone Call (थेट फोन संवाद)">Phone Call (थेट फोन संवाद)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      {currentLang === 'mr' ? 'तुमची समस्या किंवा टीप (ऐच्छिक)' : 'Your Concern or Message (Optional)'}
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={currentLang === 'mr' ? 'थोडक्यात माहिती द्या जेणेकरून आम्ही योग्य पूर्वतयारी करू शकू...' : 'Brief description to help us prepare...'}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#00E5FF]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl font-bold text-sm text-[#0B0D10] bg-gradient-to-r from-[#F9E282] via-[#D4AF37] to-[#B89222] shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:brightness-110 transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>{currentLang === 'mr' ? 'गोपनीय सत्र नोंदवा (Send via WhatsApp)' : 'Submit Confidential Request'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
