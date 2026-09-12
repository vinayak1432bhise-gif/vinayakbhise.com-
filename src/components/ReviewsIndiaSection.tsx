import React, { useState } from 'react';
import {
  Star,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  MessageSquare,
  Sparkles,
  Send,
  X,
  HeartHandshake,
  TrendingUp,
  Award
} from 'lucide-react';
import { CUSTOMER_REVIEWS, REVIEWS_STATS } from '../data/reviewsAndBlogsData.ts';
import { CustomerReview } from '../types.ts';
import { TiltCard } from './TiltCard.tsx';

interface ReviewsIndiaSectionProps {
  currentLang: 'mr' | 'en';
  onOpenBooking: () => void;
}

export const ReviewsIndiaSection: React.FC<ReviewsIndiaSectionProps> = ({
  currentLang,
  onOpenBooking
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [reviewsList, setReviewsList] = useState<CustomerReview[]>(CUSTOMER_REVIEWS);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState<boolean>(false);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState<boolean>(false);

  // Form State for User Feedback Message
  const [feedbackName, setFeedbackName] = useState('');
  const [feedbackCity, setFeedbackCity] = useState('');
  const [feedbackRating, setFeedbackRating] = useState(5);
  const [feedbackService, setFeedbackService] = useState('Stress & Anxiety');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const categories = [
    { id: 'all', labelMr: 'सर्व अभिप्राय (All)', labelEn: 'All Reviews (10K+)' },
    { id: 'anxiety', labelMr: 'ताण, भीती व चिंता', labelEn: 'Stress & Anxiety' },
    { id: 'marriage', labelMr: 'वैवाहिक व नातेसंबंध', labelEn: 'Marriage & Couples' },
    { id: 'student', labelMr: 'विद्यार्थी व तरुण', labelEn: 'Students & Youth' },
    { id: 'depression', labelMr: 'नैराश्य व बर्नआउट', labelEn: 'Depression Support' }
  ];

  const filteredReviews = selectedCategory === 'all'
    ? reviewsList
    : reviewsList.filter((r) => r.category === selectedCategory);

  const handleSubmitFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackName.trim() || !feedbackMessage.trim()) return;

    const newReview: CustomerReview = {
      id: `rev-${Date.now()}`,
      author: feedbackName,
      authorMr: feedbackName,
      city: feedbackCity || 'India',
      state: 'India',
      rating: feedbackRating,
      date: currentLang === 'mr' ? 'आत्ताच पाठवले' : 'Just now',
      serviceTagMr: feedbackService,
      serviceTagEn: feedbackService,
      category: 'general',
      quoteMr: feedbackMessage,
      quoteEn: feedbackMessage,
      verified: true,
      recoveryTimeline: currentLang === 'mr' ? 'सकारात्मक अनुभव' : 'Positive Transformation'
    };

    setReviewsList([newReview, ...reviewsList]);
    setFeedbackSubmitted(true);
    setTimeout(() => {
      setFeedbackSubmitted(false);
      setIsFeedbackModalOpen(false);
      setFeedbackName('');
      setFeedbackCity('');
      setFeedbackMessage('');
    }, 2500);
  };

  return (
    <section id="reviews-india" className="relative py-20 lg:py-28 overflow-hidden bg-[#0A0D13]">
      {/* Background Ambient Glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#D4AF37]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#00E5FF]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold tracking-wider uppercase shadow-[0_0_20px_rgba(212,175,55,0.2)]">
            <Award className="w-4 h-4 text-[#D4AF37]" />
            <span>{currentLang === 'mr' ? '१०,०००+ समाधानी ग्राहक • ५-स्टार रेटिंग्ज' : '10K+ Happy Patients Across India'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {currentLang === 'mr' ? (
              <>
                भारतातील <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7DF79] via-[#D4AF37] to-amber-200">१०,०००+ व्यक्तींचा</span> विश्वास
              </>
            ) : (
              <>
                Trusted by Over <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7DF79] via-[#D4AF37] to-amber-200">10,000+ People</span> Across India
              </>
            )}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {currentLang === 'mr'
              ? 'महाराष्ट्र, भारत आणि जगभरातील अनिवासी भारतीयांनी (NRIs) विनायक नवनाथ भिसे यांच्या शास्त्रीय व संवेदनशील मानसोपचाराने मिळवलेली नवी दिशा आणि मनःशांती.'
              : 'Real transformative stories from individuals, couples, and students across India who reclaimed joy, calm, and purpose under Vinayak Bhise’s compassionate clinical care.'}
          </p>

          {/* Aggregate Rating Banner */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            <div className="flex items-center gap-2">
              <div className="flex text-[#F7DF79]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#F7DF79] text-[#F7DF79]" />
                ))}
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {REVIEWS_STATS.averageRating} / 5.0
              </span>
            </div>

            <div className="h-5 w-px bg-white/10 hidden sm:block" />

            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
              <ShieldCheck className="w-4 h-4 text-[#00E5FF]" />
              <span className="font-semibold text-white">{REVIEWS_STATS.totalReviews}</span>
              <span>{currentLang === 'mr' ? 'तपासलेले अभिप्राय' : 'Verified Reviews India'}</span>
            </div>

            <div className="h-5 w-px bg-white/10 hidden sm:block" />

            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span className="font-semibold text-emerald-400">{REVIEWS_STATS.satisfactionRate}</span>
              <span>{currentLang === 'mr' ? 'समाधान दर' : 'Success Rate'}</span>
            </div>
          </div>
        </div>

        {/* Action & Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Filter Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                    active
                      ? 'bg-gradient-to-r from-[#D4AF37] to-amber-500 text-[#0B0D10] shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                      : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                  }`}
                >
                  {currentLang === 'mr' ? cat.labelMr : cat.labelEn}
                </button>
              );
            })}
          </div>

          {/* Give Feedback Button */}
          <button
            onClick={() => setIsFeedbackModalOpen(true)}
            className="px-4 py-2.5 rounded-xl bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 hover:bg-cyan-500/25 text-xs font-bold transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(0,229,255,0.2)] shrink-0"
          >
            <MessageSquare className="w-4 h-4 text-[#00E5FF]" />
            <span>{currentLang === 'mr' ? '✍️ तुमचा अभिप्राय नोंदवा' : '✍️ Share Customer Feedback'}</span>
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <TiltCard key={rev.id} maxTilt={6} className="h-full">
              <div className="h-full rounded-2xl glass-panel border border-white/10 bg-[#10151E]/90 hover:border-[#D4AF37]/50 p-6 flex flex-col justify-between transition-all duration-300 shadow-xl group">
                
                {/* Top: Stars & Date */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[#F7DF79]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#F7DF79] text-[#F7DF79]" />
                      ))}
                    </div>
                    <span className="text-[11px] text-slate-400 font-medium">{rev.date}</span>
                  </div>

                  {/* Service Badge */}
                  <div className="inline-block px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-semibold text-cyan-300">
                    {currentLang === 'mr' ? rev.serviceTagMr : rev.serviceTagEn}
                  </div>

                  {/* Quote */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed italic line-clamp-6">
                    “{currentLang === 'mr' ? rev.quoteMr : rev.quoteEn}”
                  </p>
                </div>

                {/* Bottom: Author Details & Recovery Timeline */}
                <div className="pt-4 border-t border-white/10 mt-4 space-y-2">
                  {rev.recoveryTimeline && (
                    <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>{rev.recoveryTimeline}</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-[#F7DF79] transition-colors">
                        {currentLang === 'mr' ? rev.authorMr || rev.author : rev.author}
                      </h4>
                      <div className="flex items-center gap-1 text-[11px] text-slate-400">
                        <MapPin className="w-3 h-3 text-[#00E5FF]" />
                        <span>{rev.city}, {rev.state}</span>
                      </div>
                    </div>

                    {rev.verified && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-[10px] text-cyan-300 font-semibold">
                        <ShieldCheck className="w-3 h-3 text-cyan-400" />
                        Verified
                      </span>
                    )}
                  </div>
                </div>

              </div>
            </TiltCard>
          ))}
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-12 p-6 rounded-2xl glass-panel border border-[#D4AF37]/30 bg-gradient-to-r from-[#181D29]/95 via-[#111622]/90 to-[#0A0D14] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37]">
              <HeartHandshake className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                {currentLang === 'mr' ? 'तुम्हीही तुमचा मानसिक ताण दूर करू शकता' : 'Begin Your Healing Journey Today'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                {currentLang === 'mr'
                  ? '१०,०००+ व्यक्तींप्रमाणेच तुमच्या जीवनातही आनंद व शांतता परत आणण्यासाठी आजच पहिली पायरी उचला.'
                  : 'Join 10,000+ individuals who transformed anxiety into serenity with confidential counseling.'}
              </p>
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#F9E282] via-[#D4AF37] to-[#B89222] text-[#0B0D10] font-bold text-xs sm:text-sm shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] transition-all shrink-0"
          >
            {currentLang === 'mr' ? '📅 समुपदेशन बुक करा' : '📅 Book Counselling Now'}
          </button>
        </div>

      </div>

      {/* Customer Feedback Modal */}
      {isFeedbackModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg rounded-3xl glass-panel border border-[#D4AF37]/40 bg-[#0F141E] p-6 sm:p-8 shadow-2xl overflow-hidden">
            
            <button
              onClick={() => setIsFeedbackModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {feedbackSubmitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-extrabold text-white">
                  {currentLang === 'mr' ? 'अभिप्राय यशस्वीरित्या नोंदवला गेला!' : 'Feedback Submitted Successfully!'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto">
                  {currentLang === 'mr'
                    ? 'तुमचा प्रामाणिक संदेश इतर अनेकांना मानसोपचाराची मदत घेण्यास प्रेरित करेल. मनापासून धन्यवाद.'
                    : 'Your valuable feedback inspires many others across India to seek timely mental health support.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitFeedback} className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {currentLang === 'mr' ? 'तुमचा अनुभव किंवा संदेश शेअर करा' : 'Share Your Experience / Feedback'}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {currentLang === 'mr'
                      ? 'विनायक सरांच्या सत्रांविषयी तुमचा ५-स्टार अनुभव येथे नोंदवा.'
                      : 'Rate your counseling session and leave an empowering message for others.'}
                  </p>
                </div>

                {/* Rating Selector */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">
                    {currentLang === 'mr' ? 'रेटिंग निवडा (Star Rating):' : 'Select Rating:'}
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setFeedbackRating(star)}
                        className="p-1 transition-transform hover:scale-110"
                      >
                        <Star
                          className={`w-7 h-7 ${
                            star <= feedbackRating
                              ? 'fill-[#F7DF79] text-[#F7DF79]'
                              : 'text-slate-600'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs font-bold text-[#F7DF79] ml-2">
                      {feedbackRating} / 5 Stars
                    </span>
                  </div>
                </div>

                {/* Name & City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-slate-300 block mb-1">
                      {currentLang === 'mr' ? 'पूर्ण नाव (Name)' : 'Full Name'}
                    </label>
                    <input
                      type="text"
                      required
                      value={feedbackName}
                      onChange={(e) => setFeedbackName(e.target.value)}
                      placeholder={currentLang === 'mr' ? 'उदा. सचिन जोशी' : 'e.g. Sachin Joshi'}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-slate-300 block mb-1">
                      {currentLang === 'mr' ? 'शहर (City)' : 'City / Location'}
                    </label>
                    <input
                      type="text"
                      required
                      value={feedbackCity}
                      onChange={(e) => setFeedbackCity(e.target.value)}
                      placeholder={currentLang === 'mr' ? 'उदा. पुणे, बारामती' : 'e.g. Pune, Mumbai'}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                {/* Service Tag */}
                <div>
                  <label className="text-[11px] font-semibold text-slate-300 block mb-1">
                    {currentLang === 'mr' ? 'घेतलेली सेवा (Service)' : 'Service Received'}
                  </label>
                  <select
                    value={feedbackService}
                    onChange={(e) => setFeedbackService(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-[#141B26] border border-white/10 text-white focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="Stress & Anxiety">Stress & Anxiety Management (ताण व चिंता)</option>
                    <option value="Marriage Counselling">Relationship & Marriage (नातेसंबंध समुपदेशन)</option>
                    <option value="Overthinking Support">Overthinking Relief (अतिविचार निवारण)</option>
                    <option value="Student Counselling">Student Mindset & Exam (विद्यार्थी समुपदेशन)</option>
                    <option value="Depression Support">Depression Support (नैराश्य मुक्ती)</option>
                    <option value="General Consultation">Online Session (ऑनलाइन समुपदेशन)</option>
                  </select>
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="text-[11px] font-semibold text-slate-300 block mb-1">
                    {currentLang === 'mr' ? 'तुमचा संदेश किंवा अनुभव (Feedback Message)' : 'Your Feedback Message'}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={feedbackMessage}
                    onChange={(e) => setFeedbackMessage(e.target.value)}
                    placeholder={
                      currentLang === 'mr'
                        ? 'विनायक सरांशी बोलल्यानंतर तुमच्या मनातील बदल किंवा अनुभव थोडक्यात सांगा...'
                        : 'Describe your counseling experience and the positive difference it made in your life...'
                    }
                    className="w-full px-3 py-2 text-xs rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-amber-500 text-[#0B0D10] font-bold text-xs sm:text-sm shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-[#0B0D10]" />
                  <span>{currentLang === 'mr' ? 'अभिप्राय पाठवा' : 'Publish Feedback Message'}</span>
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
