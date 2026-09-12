import React, { useState, useEffect } from 'react';
import {
  Brain,
  Calendar,
  Phone,
  MessageCircle,
  Menu,
  X,
  Languages,
  Sparkles
} from 'lucide-react';
import { DOCTOR_INFO } from '../data/brandData.ts';

interface NavbarProps {
  currentLang: 'mr' | 'en';
  onToggleLang: () => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onToggleLang,
  onOpenBooking
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', labelMr: 'परिचय', labelEn: 'About' },
    { href: '#services', labelMr: 'सेवा', labelEn: 'Services' },
    { href: '#model', labelMr: '५-टप्पे मॉडेल', labelEn: '5-Step Model' },
    { href: '#online-hub', labelMr: 'ऑनलाइन कौन्सेलिंग', labelEn: 'Online Hub' },
    { href: '#workshops', labelMr: 'कार्यशाळा', labelEn: 'Workshops' },
    { href: '#reviews-india', labelMr: '१०K+ अभिप्राय ⭐', labelEn: '10K+ Reviews ⭐' },
    { href: '#blogs-india', labelMr: 'मानसिक ब्लॉग्स', labelEn: 'Blogs India' },
    { href: '#youtube-content', labelMr: 'व्हिडिओ', labelEn: 'Videos' },
    { href: '#wmhd-movement', labelMr: 'WMHD संस्था', labelEn: 'WMHD Org' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 glass-panel border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-xl bg-[#0B0D10]/80'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-[#121B28] to-[#0A1017] border border-cyan-500/30 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all">
              <Brain className="w-6 h-6 text-[#00E5FF] animate-pulse" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#D4AF37] ring-2 ring-[#0B0D10]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold tracking-tight text-white group-hover:text-[#00E5FF] transition-colors">
                  {currentLang === 'mr' ? 'विनायक भिसे' : 'Vinayak Bhise'}
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-semibold bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30 tracking-wide">
                  M.A. Psych
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium truncate max-w-[200px] sm:max-w-none">
                {currentLang === 'mr' ? DOCTOR_INFO.titleMr : DOCTOR_INFO.title}
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#00E5FF] transition-colors py-1 relative group"
              >
                {currentLang === 'mr' ? link.labelMr : link.labelEn}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00E5FF] to-[#D4AF37] group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <button
              id="language-toggle-btn"
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-200 transition-colors"
              title="Change Language (मराठी / English)"
            >
              <Languages className="w-3.5 h-3.5 text-[#00E5FF]" />
              <span>{currentLang === 'mr' ? 'मराठी' : 'English'}</span>
            </button>

            {/* Quick WhatsApp Contact */}
            <a
              href={`${DOCTOR_INFO.whatsappUrl}?text=${encodeURIComponent(
                currentLang === 'mr'
                  ? 'नमस्कार विनायक सर, मला मानसिक आरोग्य समुपदेशनासाठी मार्गदर्शन हवे आहे.'
                  : 'Hello Vinayak Sir, I would like to inquire about psychological counseling.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-medium transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>{DOCTOR_INFO.phoneDisplay}</span>
            </a>

            {/* Glowing Gold Booking CTA */}
            <button
              id="navbar-book-session-cta"
              onClick={() => onOpenBooking()}
              className="relative group overflow-hidden px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-[#0B0D10] bg-gradient-to-r from-[#F7DF79] via-[#D4AF37] to-[#C29B27] shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.7)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#0B0D10]" />
                <span>
                  {currentLang === 'mr' ? 'अपॉइंटमेंट बुक करा' : 'Book Session'}
                </span>
              </span>
              <div className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              id="mobile-nav-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden glass-panel border-b border-white/10 bg-[#0B0D10]/95 px-4 pt-3 pb-6 mt-2 animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-white/5 text-sm font-medium text-slate-200 hover:text-[#00E5FF] transition-colors"
              >
                {currentLang === 'mr' ? link.labelMr : link.labelEn}
              </a>
            ))}

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href={`tel:${DOCTOR_INFO.phone}`}
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-slate-300"
              >
                <Phone className="w-4 h-4 text-[#00E5FF]" />
                <span>कॉल करा: {DOCTOR_INFO.phoneDisplay}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-[#0B0D10] bg-gradient-to-r from-[#F7DF79] to-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.4)]"
              >
                <Calendar className="w-4 h-4" />
                <span>{currentLang === 'mr' ? '📅 गोपनीय सत्र बुक करा' : '📅 Book Confidential Session'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
