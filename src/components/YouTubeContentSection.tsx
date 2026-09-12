import React, { useState } from 'react';
import {
  Play,
  Youtube,
  Clock,
  Eye,
  CheckCircle,
  ExternalLink,
  Sparkles,
  Share2,
  X
} from 'lucide-react';
import { YOUTUBE_VIDEOS, DOCTOR_INFO } from '../data/brandData.ts';
import { VideoGuide } from '../types.ts';
import { TiltCard } from './TiltCard.tsx';

interface YouTubeContentSectionProps {
  currentLang: 'mr' | 'en';
}

export const YouTubeContentSection: React.FC<YouTubeContentSectionProps> = ({
  currentLang
}) => {
  const [selectedVideo, setSelectedVideo] = useState<VideoGuide | null>(null);

  return (
    <section id="youtube-content" className="relative py-20 lg:py-28 overflow-hidden bg-[#0A0D13]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-red-500/30 text-red-300 text-xs font-semibold tracking-wider uppercase">
            <Youtube className="w-3.5 h-3.5 text-red-400" />
            <span>{currentLang === 'mr' ? 'मराठी मानसशास्त्र व्हिडिओ' : 'Marathi Psychology Content'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {currentLang === 'mr'
              ? 'मानसशास्त्र सोप्या भाषेत – Psychology in Marathi'
              : 'Psychology in Simple Marathi – Mind Wellness Talks'}
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            {currentLang === 'mr'
              ? 'मानसिक स्वास्थ्य जागृती, भावनांचे नियंत्रण आणि आत्मविकास यावर आधारित विनायक भिसे यांचे अभ्यासपूर्ण व प्रभावी व्हिडिओ व्याख्याने.'
              : 'Demystifying complex cognitive concepts, stress patterns, and emotional hygiene through engaging Marathi educational videos.'}
          </p>
        </div>

        {/* 3D Carousel / Grid of Videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {YOUTUBE_VIDEOS.map((vid) => (
            <TiltCard
              key={vid.id}
              glowColor="teal"
              className="p-6 bg-gradient-to-b from-[#121B2A] to-[#0A0E15] group flex flex-col justify-between cursor-pointer"
              onClick={() => setSelectedVideo(vid)}
            >
              <div className="space-y-4">
                {/* Simulated Video Preview Thumbnail with Glowing Play */}
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-[#1A253A] to-[#0D1420] border border-white/10 flex items-center justify-center group-hover:border-cyan-400/50 transition-all shadow-lg">
                  {/* Play Button */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-red-600/90 group-hover:bg-red-500 border border-white/20 flex items-center justify-center text-white shadow-[0_0_30px_rgba(239,68,68,0.5)] group-hover:scale-110 transition-all duration-300">
                    <Play className="w-7 h-7 fill-current translate-x-0.5" />
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-semibold text-cyan-300">
                    {vid.category}
                  </div>

                  {/* Views and Duration */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono text-slate-300">
                      {vid.duration}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono text-amber-300">
                      {vid.views}
                    </span>
                  </div>
                </div>

                {/* Video Info */}
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#00E5FF] transition-colors leading-snug">
                    {currentLang === 'mr' ? vid.titleMr : vid.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {currentLang === 'mr' ? vid.summaryMr : vid.summaryEn}
                  </p>
                </div>

                {/* Key Points */}
                <div className="space-y-1.5 pt-2 border-t border-white/5">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                    {currentLang === 'mr' ? 'सत्रातील मुख्य टिप्स:' : 'Key Practical Takeaways:'}
                  </span>
                  <div className="flex flex-col gap-1 text-xs text-slate-300">
                    {vid.keyPointsMr.map((pt, i) => (
                      <span key={i} className="flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-[#00E5FF] shrink-0" />
                        <span>{pt}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  विनायक भिसे (Mental Health Channel)
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedVideo(vid);
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-300 group-hover:text-white"
                >
                  <span>{currentLang === 'mr' ? 'व्हिडिओ पहा' : 'Watch Insight'}</span>
                  <Play className="w-3 h-3 fill-current" />
                </button>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Video Player / Insight Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
            <div className="relative w-full max-w-2xl rounded-3xl glass-panel border border-cyan-500/40 bg-[#0B0D10]/95 p-6 sm:p-8 space-y-5 shadow-2xl">
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <span className="px-2.5 py-1 rounded bg-red-900/30 text-red-300 border border-red-500/30 text-xs font-semibold">
                  YouTube Official Insight
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {currentLang === 'mr' ? selectedVideo.titleMr : selectedVideo.titleEn}
                </h3>
              </div>

              {/* Video Simulated Stage */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black/80 border border-white/10 flex flex-col items-center justify-center text-center p-6 space-y-3">
                <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-white shadow-[0_0_30px_rgba(239,68,68,0.7)] animate-bounce">
                  <Play className="w-7 h-7 fill-current translate-x-0.5" />
                </div>
                <p className="text-sm font-semibold text-white">
                  {currentLang === 'mr' ? 'मानसोपचार तज्ज्ञ विनायक भिसे यांचे मार्गदर्शन' : 'Session by Vinayak Bhise'}
                </p>
                <p className="text-xs text-slate-400 max-w-md">
                  {currentLang === 'mr' ? selectedVideo.summaryMr : selectedVideo.summaryEn}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  {currentLang === 'mr' ? 'अंमलबजावणीसाठी ३ सूत्रे:' : '3 Actionable Steps:'}
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-200">
                  {selectedVideo.keyPointsMr.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#00E5FF] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-slate-400">
                  {selectedVideo.views} • {selectedVideo.duration}
                </span>

                <a
                  href={`https://www.youtube.com/results?search_query=${encodeURIComponent('Vinayak Bhise Psychology Marathi')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold transition-all flex items-center gap-2 shadow-lg"
                >
                  <Youtube className="w-4 h-4" />
                  <span>{currentLang === 'mr' ? 'YouTube वर चॅनल सबस्क्राईब करा' : 'Open in YouTube'}</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
