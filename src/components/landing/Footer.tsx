'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/context/LanguageContext';

export default function Footer() {
  const { lang } = useLang();
  const t = (ar: string, en: string) => lang === 'ar' ? ar : en;

  return (
    <footer className="relative pt-[40px] pb-[40px]">
      <div className="max-w-[86%] mx-auto">
        <div
          className="rounded-[24px] overflow-hidden relative"
          style={{
            background: 'radial-gradient(circle at center, #21355A 0%, #0C1B3A 100%)',
            border: '1.5px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
          }}
        >
          <div className="py-[60px] px-[64px]">
            {/* Top row: Logo+Taglines | Partners Portal badge */}
            <div className="flex flex-row justify-between items-start" style={{ gap: '0px' }}>
              {/* Brand side — Logo + Arabic tagline + English tagline */}
              <div className="flex flex-col items-start" style={{ gap: '16px' }}>
                <Image src="/sparko-logo-white.png" alt="Sparko." width={120} height={57} className="h-[44px] w-auto" priority />
                <div className="flex flex-col" style={{ gap: '6px' }}>
                  <p className="font-ibm-plex text-[28px] font-bold text-white text-start" style={{ lineHeight: '1.4' }}>
                    {t('صنعنا التدريب الميداني ليكون تجربة حقيقية', 'Where Field Training Becomes Real Experience')}
                  </p>
                  <p className="font-ibm-plex text-[16px] font-normal text-white/70 text-start" style={{ lineHeight: '1.5' }}>
                    {lang === 'ar' ? 'Where Field Training Becomes Real Experience' : 'صنعنا التدريب الميداني ليكون تجربة حقيقية'}
                  </p>
                </div>
              </div>

              {/* Partners Portal badge */}
              <div className="inline-flex items-center shrink-0 self-start" style={{ padding: '8px 20px', background: 'rgba(255, 255, 255, 0.10)', borderRadius: '50px', gap: '8px' }}>
                <span className="font-ibm-plex text-[18px] font-semibold text-white">
                  {t('بوابة الشركاء', 'Partners Portal')}
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="my-[40px]" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.12)' }} />

            {/* Saudi-born tagline — centered */}
            <div className="flex items-center justify-center" style={{ gap: '8px' }}>
              <span className="text-[18px]">🇸🇦</span>
              <p className="font-ibm-plex text-[18px] font-medium text-white/80">
                Saudi-born. Built for real impact.
              </p>
            </div>

            {/* Links + Copyright — inside the card */}
            <div className="mt-[40px] flex flex-col items-center" style={{ gap: '16px' }}>
              {/* Links row */}
              <div className="flex items-center" style={{ gap: '40px' }}>
                <Link href="/privacy" className="font-ibm-plex text-[16px] font-medium text-white/70 hover:text-white transition-colors">
                  {t('سياسة الخصوصية ومعالجة البيانات', 'Privacy & Data Processing Policy')}
                </Link>
                <Link href="/terms" className="font-ibm-plex text-[16px] font-medium text-white/70 hover:text-white transition-colors">
                  {t('الشروط والأحكام وسياسة استخدام المنصة', 'Terms, Conditions & Platform Use Policy')}
                </Link>
              </div>

              {/* Copyright */}
              <p className="font-ibm-plex text-[14px] font-medium text-white/50">
                © Sparko {t('جميع الحقوق محفوظة', 'All rights reserved')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
