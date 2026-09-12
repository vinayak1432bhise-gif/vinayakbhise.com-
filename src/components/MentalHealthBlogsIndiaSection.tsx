import React, { useState } from 'react';
import {
  BookOpen,
  Clock,
  Calendar,
  ArrowRight,
  Share2,
  X,
  Sparkles,
  CheckCircle,
  UserCheck,
  Bookmark,
  Share
} from 'lucide-react';
import { MENTAL_HEALTH_BLOGS } from '../data/reviewsAndBlogsData.ts';
import { MentalHealthBlog } from '../types.ts';
import { DOCTOR_INFO } from '../data/brandData.ts';
import { TiltCard } from './TiltCard.tsx';

interface MentalHealthBlogsIndiaSectionProps {
  currentLang: 'mr' | 'en';
  onOpenBooking: () => void;
}

export const MentalHealthBlogsIndiaSection: React.FC<MentalHealthBlogsIndiaSectionProps> = ({
  currentLang,
  onOpenBooking
}) => {
  const [selectedBlog, setSelectedBlog] = useState<MentalHealthBlog | null>(null);

  const handleShareBlog = (blog: MentalHealthBlog) => {
    const title = currentLang === 'mr' ? blog.titleMr : blog.titleEn;
    const text = `*${title}*\nवाचा विनायक नवनाथ भिसे (Clinical Psychologist) यांचा शास्त्रीय लेख.\n\nअधिक माहितीसाठी: ${window.location.origin}/#blogs-india`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="blogs-india" className="relative py-20 lg:py-28 overflow-hidden bg-[#0B0E15]">
      {/* Subtle Background Mesh Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-wider uppercase shadow-[0_0_20px_rgba(0,229,255,0.2)]">
            <BookOpen className="w-4 h-4 text-[#00E5FF]" />
            <span>{currentLang === 'mr' ? 'भारतीय मानसिक आरोग्य ब्लॉग्स' : 'Mental Health Blogs India'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {currentLang === 'mr' ? (
              <>
                वैज्ञानिक मार्गदर्शन आणि <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-cyan-200 to-[#D4AF37]">मानसिक आरोग्य लेख</span>
              </>
            ) : (
              <>
                Evidence-Based <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-cyan-200 to-[#D4AF37]">Mental Health Blogs India</span>
              </>
            )}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {currentLang === 'mr'
              ? 'भारतीय समाज, परीक्षा पद्धत, कौटुंबिक नातेसंबंध आणि जीवनशैलीतील ताणतणावावर विनायक भिसे यांचे शास्त्रीय व वास्तववादी विश्लेषण.'
              : 'Empowering psychological literature tailored to the Indian cultural context—unpacking exam burnout, marital harmony, bedtime overthinking, and therapy destigmatization.'}
          </p>
        </div>

        {/* Featured Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MENTAL_HEALTH_BLOGS.map((blog, idx) => (
            <TiltCard key={blog.id} maxTilt={5} className="h-full">
              <div className="h-full rounded-2xl glass-panel border border-white/10 bg-[#121722]/90 hover:border-[#00E5FF]/40 p-6 flex flex-col justify-between transition-all duration-300 shadow-xl group">
                
                <div className="space-y-4">
                  {/* Category & Read Time */}
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[11px] font-bold text-[#D4AF37]">
                      {currentLang === 'mr' ? blog.categoryMr : blog.categoryEn}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] text-slate-400">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    onClick={() => setSelectedBlog(blog)}
                    className="text-base sm:text-lg font-bold text-white group-hover:text-[#00E5FF] transition-colors leading-snug cursor-pointer"
                  >
                    {currentLang === 'mr' ? blog.titleMr : blog.titleEn}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {currentLang === 'mr' ? blog.excerptMr : blog.excerptEn}
                  </p>

                  {/* Key Takeaways Mini Pills */}
                  <div className="space-y-1.5 pt-1">
                    {(currentLang === 'mr' ? blog.keyTakeawaysMr : blog.keyTakeawaysEn)
                      .slice(0, 2)
                      .map((takeaway, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-[11px] text-slate-300">
                          <span className="text-cyan-400">✓</span>
                          <span className="line-clamp-1">{takeaway}</span>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Footer Controls */}
                <div className="pt-5 border-t border-white/10 mt-5 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedBlog(blog)}
                    className="text-xs font-bold text-[#00E5FF] group-hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
                  >
                    <span>{currentLang === 'mr' ? 'संपूर्ण लेख वाचा' : 'Read Full Article'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => handleShareBlog(blog)}
                    title={currentLang === 'mr' ? 'WhatsApp वर शेअर करा' : 'Share on WhatsApp'}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </TiltCard>
          ))}
        </div>

      </div>

      {/* Full Blog Reading Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-3xl my-8 rounded-3xl glass-panel border border-cyan-500/30 bg-[#0E131E] p-6 sm:p-10 shadow-2xl space-y-6">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedBlog(null)}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Details */}
            <div className="space-y-3 pr-10">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-md bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-xs font-bold text-[#D4AF37]">
                  {currentLang === 'mr' ? selectedBlog.categoryMr : selectedBlog.categoryEn}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  {selectedBlog.readTime}
                </span>
                <span className="text-slate-500">•</span>
                <span className="text-xs text-slate-400">{selectedBlog.publishedDate}</span>
              </div>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-snug">
                {currentLang === 'mr' ? selectedBlog.titleMr : selectedBlog.titleEn}
              </h2>

              <div className="flex items-center gap-2 text-xs font-medium text-cyan-300">
                <UserCheck className="w-4 h-4" />
                <span>लेखक: {selectedBlog.author}</span>
              </div>
            </div>

            {/* Key Takeaways Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-950/40 to-slate-900 border border-cyan-500/25 space-y-2">
              <h4 className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#F7DF79]" />
                <span>{currentLang === 'mr' ? 'महत्त्वाचे निष्कर्ष (Key Takeaways):' : 'Key Takeaways:'}</span>
              </h4>
              <ul className="space-y-1.5">
                {(currentLang === 'mr' ? selectedBlog.keyTakeawaysMr : selectedBlog.keyTakeawaysEn).map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-200">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Body Paragraphs */}
            <div className="space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed">
              {(currentLang === 'mr' ? selectedBlog.contentMr : selectedBlog.contentEn).map((paragraph, i) => (
                <p key={i} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Author Attribution & Booking Footer */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <p className="text-xs font-bold text-white">{DOCTOR_INFO.name}</p>
                <p className="text-[11px] text-slate-400">{DOCTOR_INFO.roleEn}</p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleShareBlog(selectedBlog)}
                  className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-2"
                >
                  <Share2 className="w-4 h-4 text-emerald-400" />
                  <span>{currentLang === 'mr' ? 'शेअर करा' : 'Share'}</span>
                </button>

                <button
                  onClick={() => {
                    setSelectedBlog(null);
                    onOpenBooking();
                  }}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-amber-500 text-[#0B0D10] text-xs font-bold shadow-lg"
                >
                  {currentLang === 'mr' ? 'सत्र बुक करा' : 'Book Session'}
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
