import React, { useState } from 'react';
import {
  Ear,
  Search,
  LineChart,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  GitCommit,
  Zap,
  ChevronRight
} from 'lucide-react';
import { TRANSFORMATION_PIPELINE } from '../data/brandData.ts';
import { PipelineStep } from '../types.ts';
import { TiltCard } from './TiltCard.tsx';

interface TransformationPipelineProps {
  currentLang: 'mr' | 'en';
  onOpenBooking: () => void;
}

export const TransformationPipeline: React.FC<TransformationPipelineProps> = ({
  currentLang,
  onOpenBooking
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = TRANSFORMATION_PIPELINE[activeStepIndex];

  const getStepIcon = (iconName: string, active: boolean) => {
    const cls = `w-6 h-6 ${active ? 'text-[#0B0D10]' : 'text-[#00E5FF]'}`;
    switch (iconName) {
      case 'Ear':
        return <Ear className={cls} />;
      case 'Search':
        return <Search className={cls} />;
      case 'LineChart':
        return <LineChart className={cls} />;
      case 'Sparkles':
        return <Sparkles className={cls} />;
      case 'ShieldCheck':
        return <ShieldCheck className={cls} />;
      default:
        return <GitCommit className={cls} />;
    }
  };

  return (
    <section id="model" className="relative py-20 lg:py-28 overflow-hidden bg-[#0A0D12]/70">
      {/* Background Accent Mesh Beams */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E5FF]/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold tracking-wider uppercase">
            <Zap className="w-3.5 h-3.5" />
            <span>{currentLang === 'mr' ? 'माझे ५-टप्पे माइंड मॉडेल' : 'My 5-Step Mind Transformation Model'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {currentLang === 'mr' ? (
              <>
                वेदना आणि गोंधळाकडून{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#D4AF37]">
                  आत्मविश्वास व मनःशांतीकडे
                </span>
              </>
            ) : (
              <>
                From Confusion to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#D4AF37]">
                  Unshakable Clarity & Empowerment
                </span>
              </>
            )}
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            {currentLang === 'mr'
              ? 'प्रकाशमान रेषांनी जोडलेला हा ५ टप्प्यांचा शास्त्रीय मार्ग तुम्हाला स्वतःच्या भावनांचे नियंत्रण मिळवण्यास सक्षम बनवतो.'
              : 'A scientifically engineered sequential pipeline guiding you from unburdened disclosure to enduring psychological self-mastery.'}
          </p>
        </div>

        {/* 3D Flow Pipeline Interactive Nodes */}
        <div className="mb-12">
          {/* Horizontal Track for Desktop */}
          <div className="relative flex items-center justify-between gap-2 max-w-5xl mx-auto px-2 sm:px-6">
            {/* Glowing Connector Line */}
            <div className="absolute top-1/2 left-8 right-8 h-1 bg-slate-800 -translate-y-1/2 z-0">
              <div
                className="h-full bg-gradient-to-r from-[#00E5FF] via-cyan-300 to-[#D4AF37] transition-all duration-500 shadow-[0_0_15px_rgba(0,229,255,0.7)]"
                style={{
                  width: `${(activeStepIndex / (TRANSFORMATION_PIPELINE.length - 1)) * 100}%`,
                }}
              />
            </div>

            {/* Pipeline Step Nodes */}
            {TRANSFORMATION_PIPELINE.map((step, idx) => {
              const isSelected = activeStepIndex === idx;
              const isPassed = activeStepIndex > idx;

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStepIndex(idx)}
                  className="relative z-10 flex flex-col items-center group focus:outline-none"
                >
                  {/* Glowing Circle Node */}
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 ${
                      isSelected
                        ? 'bg-gradient-to-br from-[#00E5FF] to-cyan-300 shadow-[0_0_30px_rgba(0,229,255,0.8)] scale-110 ring-4 ring-cyan-500/30'
                        : isPassed
                        ? 'bg-cyan-950 border border-cyan-400/60 shadow-[0_0_15px_rgba(0,229,255,0.3)]'
                        : 'bg-[#101724] border border-white/10 hover:border-cyan-500/40'
                    }`}
                  >
                    {getStepIcon(step.icon, isSelected)}
                  </div>

                  {/* Step Label */}
                  <div className="mt-3 text-center">
                    <span
                      className={`text-xs sm:text-sm font-bold block transition-colors ${
                        isSelected
                          ? 'text-[#00E5FF] drop-shadow-[0_0_10px_rgba(0,229,255,0.5)]'
                          : 'text-slate-400 group-hover:text-white'
                      }`}
                    >
                      {currentLang === 'mr' ? step.titleMr : step.titleEn}
                    </span>
                    <span className="text-[10px] text-slate-400 block font-mono">
                      Step 0{step.step}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Deep-Dive Card */}
        <div className="max-w-4xl mx-auto">
          <TiltCard
            glowColor="teal"
            className="p-6 sm:p-10 bg-gradient-to-br from-[#121B2B] via-[#0E1522] to-[#0A0D14] border border-[#00E5FF]/30 shadow-[0_15px_40px_-15px_rgba(0,229,255,0.25)]"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Left Details */}
              <div className="md:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-lg bg-[#00E5FF]/15 border border-[#00E5FF]/30 text-[#00E5FF] text-xs font-mono font-bold">
                    STEP {activeStep.step} OF 5
                  </span>
                  <span className="text-xs text-[#D4AF37] font-semibold tracking-wider uppercase">
                    {currentLang === 'mr' ? activeStep.actionWordMr : activeStep.actionWordEn}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  {currentLang === 'mr'
                    ? `${activeStep.step}. ${activeStep.titleMr} (${activeStep.titleEn})`
                    : `${activeStep.step}. ${activeStep.titleEn}`}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {currentLang === 'mr' ? activeStep.descMr : activeStep.descEn}
                </p>

                {/* Outcomes */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {currentLang === 'mr' ? 'या टप्प्यामध्ये काय साध्य होते?' : 'What gets accomplished in this phase?'}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {(currentLang === 'mr' ? activeStep.keyOutcomesMr : activeStep.keyOutcomesEn).map((out, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0" />
                        <span>{out}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Action & Quick Navigation */}
              <div className="md:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-black/40 border border-white/10 text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-950 to-slate-900 border border-cyan-400/40 flex items-center justify-center shadow-[0_0_20px_rgba(0,229,255,0.3)]">
                  {getStepIcon(activeStep.icon, false)}
                </div>

                <div className="space-y-1">
                  <span className="text-xs text-slate-400">
                    {currentLang === 'mr' ? 'पुढील टप्प्याकडे जा:' : 'Continue Flow:'}
                  </span>
                  <div className="flex items-center justify-center gap-2">
                    <button
                      disabled={activeStepIndex === 0}
                      onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                      className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-30 text-xs text-slate-300"
                    >
                      {currentLang === 'mr' ? 'मागे' : 'Back'}
                    </button>
                    <button
                      disabled={activeStepIndex === TRANSFORMATION_PIPELINE.length - 1}
                      onClick={() => setActiveStepIndex((prev) => Math.min(TRANSFORMATION_PIPELINE.length - 1, prev + 1))}
                      className="px-3 py-1.5 rounded-lg bg-[#00E5FF]/20 hover:bg-[#00E5FF]/30 border border-[#00E5FF]/40 disabled:opacity-30 text-xs text-cyan-300 font-semibold"
                    >
                      {currentLang === 'mr' ? 'पुढे' : 'Next'}
                    </button>
                  </div>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="w-full mt-2 py-2.5 rounded-xl font-bold text-xs text-[#0B0D10] bg-gradient-to-r from-[#F9E282] to-[#D4AF37] hover:brightness-110 shadow-lg transition-all"
                >
                  {currentLang === 'mr' ? 'या प्रक्रियेत सामील व्हा' : 'Begin This Journey'}
                </button>
              </div>

            </div>
          </TiltCard>
        </div>

      </div>
    </section>
  );
};
