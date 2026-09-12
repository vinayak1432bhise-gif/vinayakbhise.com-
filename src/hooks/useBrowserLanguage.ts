import { useState, useEffect } from 'react';

/**
 * Detects the user's browser language preference and sets the 'currentLang' state
 * to 'mr' (Marathi) if the browser preference is Marathi, otherwise defaulting to 'en' (English).
 */
export function useBrowserLanguage(fallbackLang: 'mr' | 'en' = 'en') {
  const detectLanguage = (): 'mr' | 'en' => {
    if (typeof window === 'undefined' || typeof navigator === 'undefined') {
      return fallbackLang;
    }

    // Check navigator.languages array first, then fallback to navigator.language
    const languages =
      navigator.languages && navigator.languages.length > 0
        ? navigator.languages
        : [navigator.language || ''];

    const hasMarathi = languages.some(
      (lang) => typeof lang === 'string' && lang.toLowerCase().startsWith('mr')
    );

    return hasMarathi ? 'mr' : 'en';
  };

  const [currentLang, setCurrentLang] = useState<'mr' | 'en'>(detectLanguage);

  useEffect(() => {
    // Listen for browser language change events (e.g. user toggles system/browser language)
    const handleLanguageChange = () => {
      setCurrentLang(detectLanguage());
    };

    window.addEventListener('languagechange', handleLanguageChange);
    return () => {
      window.removeEventListener('languagechange', handleLanguageChange);
    };
  }, []);

  return [currentLang, setCurrentLang] as const;
}

// Alias export for flexibility
export const useLanguagePreference = useBrowserLanguage;
