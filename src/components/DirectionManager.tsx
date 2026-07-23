'use client';

import { useEffect } from 'react';
import { useLang } from '@/context/LanguageContext';

export default function DirectionManager() {
  const { lang } = useLang();

  useEffect(() => {
    const html = document.documentElement;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
    html.lang = lang === 'ar' ? 'ar' : 'en';
  }, [lang]);

  return null;
}
