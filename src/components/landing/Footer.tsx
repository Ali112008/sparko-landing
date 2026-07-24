'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/context/LanguageContext';

export default function Footer() {
  const { lang } = useLang();
  const t = (ar: string, en: string) => lang === 'ar' ? ar : en;

  return (
    <footer className="relative pt-[40px] pb-0">
      {/* Main card */}
      <div className="max-w-[86%] mx-auto">
        <div
          className="rounded-[24px] overflow-hidden relative"
          style={{
            background: 'radial-gradient(circle at center, #21355A 0%, #0C1B3A 100%)',
            border: '1.5px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
          }}
        >
          <div className="py-[80px] px-[64px]">
            {/* Top row: Logo+Taglines (START/right in RTL) | Badge (END/left in RTL) */}
            <div className="flex flex-row justify-between items-start" style={{ gap: '0px' }}>
              {/* Brand side — Logo + Arabic tagline + English tagline */}
              <div className="flex flex-col items-start" style={{ gap: '12px' }}>
                <Image src="/sparko-logo-white.png" alt="Sparko." width={120} height={57} className="h-[44px] w-auto" priority />
                <p className="font-ibm-plex text-[28px] font-bold text-white text-start" style={{ lineHeight: '1.4' }}>
                  {t('حيث يتحول التدريب الميداني إلى تجربة حقيقية', 'Where Field Training Becomes Real Experience')}
                </p>
                <p className="font-ibm-plex text-[16px] font-normal text-white/60 text-start" style={{ lineHeight: '1.5' }}>
                  {lang === 'ar' ? 'Where Field Training Becomes Real Experience' : 'حيث يتحول التدريب الميداني إلى تجربة حقيقية'}
                </p>
              </div>

              {/* Partners Portal badge — pill shape with glass effect */}
              <div
                className="inline-flex items-center shrink-0 self-start"
                style={{
                  padding: '6px 16px',
                  background: 'rgba(30, 41, 59, 0.7)',
                  borderRadius: '9999px',
                  gap: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
                }}
              >
                <span className="font-ibm-plex text-[14px] font-medium text-white">
                  {t('بوابة الجهات', 'Partners Portal')}
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
          </div>
        </div>
      </div>

      {/* Bottom bar — OUTSIDE the card */}
      <div className="max-w-[86%] mx-auto mt-[24px]">
        <div className="flex flex-row justify-between items-center py-[24px]">
          {/* Links — on the start side (right in RTL) */}
          <div className="flex items-center" style={{ gap: '40px' }}>
            <Link href="/privacy" className="font-ibm-plex text-[16px] font-medium text-white/70 hover:text-white transition-colors">
              {t('سياسة الخصوصية و حماية البيانات', 'Privacy & Data Protection Policy')}
            </Link>
            <Link href="/terms" className="font-ibm-plex text-[16px] font-medium text-white/70 hover:text-white transition-colors">
              {t('الشروط و الأحكام و سياسة الاستخدام', 'Terms, Conditions & Acceptable Use')}
            </Link>
          </div>

          {/* Copyright — on the end side (left in RTL) */}
          <p className="font-ibm-plex text-[14px] font-medium text-white/50">
            © Sparko {t('جميع الحقوق محفوظة', 'All rights reserved')}
          </p>
        </div>
      </div>
    </footer>
  );
}
