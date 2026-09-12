import React, { useState, useEffect } from 'react';
import {
  X,
  Calendar,
  Clock,
  Video,
  PhoneCall,
  MapPin,
  CheckCircle2,
  Send,
  ShieldCheck,
  User,
  Phone,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { DOCTOR_INFO, SERVICES_LIST } from '../data/brandData.ts';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: 'mr' | 'en';
  preSelectedServiceId?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  preSelectedServiceId
}) => {
  const [selectedService, setSelectedService] = useState<string>('');
  const [consultationMode, setConsultationMode] = useState<'in-person' | 'online-video' | 'phone-call'>('online-video');
  const [preferredDate, setPreferredDate] = useState<string>('');
  const [preferredTime, setPreferredTime] = useState<string>('11:00 AM');
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [concern, setConcern] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (preSelectedServiceId) {
      const found = SERVICES_LIST.find((s) => s.id === preSelectedServiceId);
      if (found) {
        setSelectedService(currentLang === 'mr' ? found.titleMr : found.titleEn);
      }
    } else {
      setSelectedService(
        currentLang === 'mr' ? SERVICES_LIST[0].titleMr : SERVICES_LIST[0].titleEn
      );
    }

    // Default date to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setPreferredDate(tomorrow.toISOString().split('T')[0]);
  }, [preSelectedServiceId, currentLang]);

  if (!isOpen) return null;

  const timeSlots = [
    '10:00 AM',
    '11:30 AM',
    '02:00 PM',
    '04:30 PM',
    '06:00 PM',
    '07:30 PM',
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // Ignore if confetti blocked
    }

    setIsSuccess(true);

    const modeDisplay =
      consultationMode === 'in-person'
        ? 'Baramati Clinic (प्रत्यक्ष क्लिनिक भेट)'
        : consultationMode === 'online-video'
        ? 'Online Video (Zoom / Google Meet)'
        : 'Discreet Phone Call (थेट फोन संवाद)';

    const bookingMessage = `*नवीन समुपदेशन सत्र अपॉइंटमेंट (Confidential Booking)*\n\n👤 नाव: ${fullName}\n📱 फोन: ${phone}\n📍 शहर: ${city || 'नोंद नाही'}\n🧠 सेवा: ${selectedService}\n💻 माध्यम: ${modeDisplay}\n📅 तारीख: ${preferredDate}\n⏰ वेळ: ${preferredTime}\n📝 विशेष टीप: ${concern || 'नाही'}\n\nकृपया या सत्राची पुष्टी करावी.`;

    const waUrl = `${DOCTOR_INFO.whatsappUrl}?text=${encodeURIComponent(bookingMessage)}`;

    // Open WhatsApp in new tab
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl rounded-3xl glass-panel border border-[#D4AF37]/40 bg-[#0B0E14]/98 p-6 sm:p-8 space-y-6 max-h-[92vh] overflow-y-auto shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center space-y-5 animate-fadeIn">
            <div className="w-16 h-16 mx-auto rounded-3xl bg-gradient-to-br from-[#00E5FF]/20 to-[#D4AF37]/30 border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37]">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-[#00E5FF] uppercase tracking-widest">
                BOOKING INITIATED
              </span>
              <h3 className="text-2xl font-black text-white">
                {currentLang === 'mr' ? 'तुमची अपॉइंटमेंट विनंती तयार आहे!' : 'Your Session Request is Ready!'}
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                {currentLang === 'mr'
                  ? 'आम्ही तुमची तपशीलवार माहिती व्हॉट्सॲपवर पाठवली आहे. विनायक भिसे सर स्वतः तुम्हाला सत्र वेळेची अधिकृत पुष्टी देतील.'
                  : 'We have dispatched your consultation summary to WhatsApp. Dr. Vinayak Bhise will personally confirm your session slot.'}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-left space-y-2 max-w-md mx-auto text-xs text-slate-300 font-medium">
              <div>👤 नाव: <strong className="text-white">{fullName}</strong></div>
              <div>🧠 सेवा: <strong className="text-[#00E5FF]">{selectedService}</strong></div>
              <div>📅 तारीख व वेळ: <strong className="text-[#D4AF37]">{preferredDate} | {preferredTime}</strong></div>
            </div>

            <div className="pt-3 flex justify-center gap-3">
              <button
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl font-bold text-xs text-[#0B0D10] bg-gradient-to-r from-[#F9E282] to-[#D4AF37]"
              >
                {currentLang === 'mr' ? 'पूर्ण झाले (Done)' : 'Done'}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleBookingSubmit} className="space-y-5">
            {/* Modal Header */}
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold">
                <Sparkles className="w-3 h-3" />
                <span>१००% गोपनीय सल्लामसलत नोंदणी</span>
              </div>
              <h3 className="text-2xl font-black text-white">
                {currentLang === 'mr' ? '📅 समुपदेशन सत्र बुक करा' : '📅 Book Confidential Session'}
              </h3>
              <p className="text-xs text-slate-300">
                {currentLang === 'mr'
                  ? 'विनायक भिसे (मानसोपचार तज्ज्ञ) यांच्याशी थेट संवाद.'
                  : 'Direct one-on-one session with Vinayak Bhise (Mental Health Counselor & Psychologist).'}
              </p>
            </div>

            {/* Service Selection */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                {currentLang === 'mr' ? '१. समुपदेशन सेवा निवडा *' : '1. Choose Service *'}
              </label>
              <select
                required
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#121824] border border-white/10 text-sm text-white focus:outline-none focus:border-[#00E5FF]"
              >
                {SERVICES_LIST.map((srv) => (
                  <option key={srv.id} value={currentLang === 'mr' ? srv.titleMr : srv.titleEn}>
                    {srv.number}. {srv.titleMr} ({srv.titleEn})
                  </option>
                ))}
              </select>
            </div>

            {/* Mode Selection */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                {currentLang === 'mr' ? '२. सल्लामसलतीचे माध्यम निवडा *' : '2. Consultation Format *'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <button
                  type="button"
                  onClick={() => setConsultationMode('online-video')}
                  className={`p-3 rounded-xl border text-left space-y-1 transition-all ${
                    consultationMode === 'online-video'
                      ? 'bg-[#00E5FF]/15 border-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.2)]'
                      : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  <Video className="w-4 h-4 text-[#00E5FF]" />
                  <div className="text-xs font-bold text-white">Online Video</div>
                  <div className="text-[10px] text-slate-400">Zoom / Google Meet</div>
                </button>

                <button
                  type="button"
                  onClick={() => setConsultationMode('in-person')}
                  className={`p-3 rounded-xl border text-left space-y-1 transition-all ${
                    consultationMode === 'in-person'
                      ? 'bg-[#D4AF37]/15 border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                      : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  <div className="text-xs font-bold text-white">Baramati Clinic</div>
                  <div className="text-[10px] text-slate-400">प्रत्यक्ष क्लिनिक भेट</div>
                </button>

                <button
                  type="button"
                  onClick={() => setConsultationMode('phone-call')}
                  className={`p-3 rounded-xl border text-left space-y-1 transition-all ${
                    consultationMode === 'phone-call'
                      ? 'bg-emerald-500/15 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                      : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  <PhoneCall className="w-4 h-4 text-emerald-400" />
                  <div className="text-xs font-bold text-white">Discreet Phone</div>
                  <div className="text-[10px] text-slate-400">थेट फोन संवाद</div>
                </button>
              </div>
            </div>

            {/* Date & Time Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  {currentLang === 'mr' ? '३. तारीख निवडा *' : '3. Preferred Date *'}
                </label>
                <div className="relative">
                  <input
                    type="date"
                    required
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#121824] border border-white/10 text-sm text-white focus:outline-none focus:border-[#00E5FF]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  {currentLang === 'mr' ? '४. सोयीची वेळ (Slot) *' : '4. Time Slot *'}
                </label>
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#121824] border border-white/10 text-sm text-white focus:outline-none focus:border-[#00E5FF]"
                >
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Client Personal Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-white/10">
              <div className="space-y-1 sm:col-span-1">
                <label className="text-xs font-semibold text-slate-300">
                  {currentLang === 'mr' ? 'नाव *' : 'Full Name *'}
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="उदा. राहुल शिंदे"
                  className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white focus:outline-none focus:border-[#00E5FF]"
                />
              </div>

              <div className="space-y-1 sm:col-span-1">
                <label className="text-xs font-semibold text-slate-300">
                  {currentLang === 'mr' ? 'WhatsApp / फोन *' : 'WhatsApp / Mobile *'}
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 7798150143"
                  className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white focus:outline-none focus:border-[#00E5FF]"
                />
              </div>

              <div className="space-y-1 sm:col-span-1">
                <label className="text-xs font-semibold text-slate-300">
                  {currentLang === 'mr' ? 'शहर / देश' : 'City / Country'}
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="उदा. बारामती, पुणे / Dubai"
                  className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white focus:outline-none focus:border-[#00E5FF]"
                />
              </div>
            </div>

            {/* Concern Note */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300">
                {currentLang === 'mr' ? 'काही विशेष सांगायचे आहे का? (ऐच्छिक)' : 'Specific Concern or Context (Optional)'}
              </label>
              <textarea
                rows={2}
                value={concern}
                onChange={(e) => setConcern(e.target.value)}
                placeholder="उदा. सततचे विचार, अभ्यासाचा ताण किंवा नात्यातील समस्या..."
                className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#00E5FF]"
              />
            </div>

            {/* Privacy Promise & Submit */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10">
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>१००% गोपनीयता व कडक वैद्यकीय नियम लागू</span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-[#0B0D10] bg-gradient-to-r from-[#F9E282] via-[#D4AF37] to-[#B89222] shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{currentLang === 'mr' ? 'सत्र बुक करा (Confirm via WhatsApp)' : 'Confirm & Open WhatsApp'}</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
