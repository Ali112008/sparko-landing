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
          {/* Card padding: T=44 B=44 L=44 R=44, gap=32 (from Figma) */}
          <div className="py-[44px] px-[44px]" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* Top row: Logo+Taglines (START/right in RTL) | Badge text (END/left in RTL) */}
            {/* From Figma: Frame 2121453284 = HORIZONTAL, gap=898 (justify-between) */}
            <div className="flex flex-row justify-between items-start">
              {/* Brand side — Logo + Taglines (both Arabic and English) */}
              {/* From Figma: Frame 1686552645 = Container, gap=12, VERTICAL */}
              <div className="flex flex-col items-start" style={{ gap: '12px' }}>
                <Image src="/sparko-logo-white.png" alt="Sparko." width={120} height={57} className="h-[44px] w-auto" priority />
                {/* From Figma: Tagline = ONE text node "حيث يتحول...\nWhere..." size=20 wt=600 */}
                <div className="flex flex-col" style={{ gap: '0px' }}>
                  <p className="font-ibm-plex text-[20px] font-semibold text-white text-start" style={{ lineHeight: '1.4' }}>
                    {t('حيث يتحول التدريب الميداني إلى تجربة حقيقية', 'Where Field Training Becomes Real Experience')}
                  </p>
                  <p className="font-ibm-plex text-[20px] font-semibold text-white/70 text-start" style={{ lineHeight: '1.4' }}>
                    {lang === 'ar' ? 'Where Field Training Becomes Real Experience' : 'حيث يتحول التدريب الميداني إلى تجربة حقيقية'}
                  </p>
                </div>
              </div>

              {/* Badge — plain text "بوابة الجهات Partners Portal" */}
              {/* From Figma: NO pill shape, just text size=20 wt=600 color=#FFFFFF */}
              <span className="font-ibm-plex text-[20px] font-semibold text-white">
                {t('بوابة الجهات Partners Portal', 'Partners Portal')}
              </span>
            </div>

            {/* Divider line — From Figma: Line 6 width=1589 */}
            <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.12)' }} />

            {/* Saudi-born tagline — centered */}
            {/* From Figma: size=20 wt=600 color=#FFFFFF CENTERED */}
            <div className="flex items-center justify-center" style={{ gap: '8px' }}>
              <span className="text-[20px]">🇸🇦</span>
              <p className="font-ibm-plex text-[20px] font-semibold text-white">
                Saudi-born. Built for real impact.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Links + Copyright — OUTSIDE the card */}
      {/* From Figma: Frame 2121453290 = VERTICAL layout, gap=4, padding L=44 R=44 */}
      {/* Links are START-aligned (right in RTL) */}
      <div className="max-w-[86%] mx-auto mt-[24px]" style={{ paddingLeft: '44px', paddingRight: '44px' }}>
        {/* Links — VERTICAL stacked, gap=4 */}
        <div className="flex flex-col items-start" style={{ gap: '4px' }}>
          <Link href="/privacy" className="font-ibm-plex text-[16px] font-medium text-white/70 hover:text-white transition-colors">
            {t('سياسة الخصوصية و حماية البيانات', 'Privacy & Data Protection Policy')}
          </Link>
          <Link href="/terms" className="font-ibm-plex text-[16px] font-medium text-white/70 hover:text-white transition-colors">
            {t('الشروط و الأحكام و سياسة الاستخدام', 'Terms, Conditions & Acceptable Use')}
          </Link>
        </div>
      </div>

      {/* Copyright — CENTERED */}
      {/* From Figma: Frame 2121453291 CENTERED, padding L=44 R=44 */}
      <div className="max-w-[86%] mx-auto mt-[4px]" style={{ paddingLeft: '44px', paddingRight: '44px' }}>
        <p className="font-ibm-plex text-[16px] font-medium text-white/50 text-center">
          © Sparko {t('جميع الحقوق محفوظة', 'All rights reserved')}
        </p>
      </div>
    </footer>
  );
}
