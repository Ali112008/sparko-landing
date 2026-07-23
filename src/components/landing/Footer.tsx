'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/context/LanguageContext';

export default function Footer() {
  const { lang } = useLang();
  const t = (ar: string, en: string) => lang === 'ar' ? ar : en;

  return (
    <footer className="relative pt-[16px] sm:pt-[24px] lg:pt-[40px] pb-0">
      <div className="max-w-[88%] lg:max-w-[86%] mx-auto">
        <div
          className="rounded-[24px] overflow-hidden relative"
          style={{
            background: 'radial-gradient(circle at center, #21355A 0%, #0C1B3A 100%)',
            border: '1.5px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
          }}
        >
          <div className="py-[24px] sm:py-[32px] lg:py-[80px] px-[16px] sm:px-[24px] lg:px-[64px]">
            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-center gap-[12px] sm:gap-[16px] lg:gap-[0px]">
              {/* Brand side */}
              <div className="flex flex-col items-center lg:items-start" style={{ gap: '8px sm:gap-[12px]' }}>
                <Image src="/sparko-logo-white.png" alt="Sparko." width={120} height={57} className="h-[28px] sm:h-[36px] lg:h-[44px] w-auto" priority />
                <p className="font-ibm-plex text-[16px] lg:text-[28px] font-bold text-white text-center lg:text-start" style={{ lineHeight: '1.4' }}>
                  {t('حيث يتحول التدريب الميداني إلى تجربة حقيقية', 'Where field training becomes a real experience')}
                </p>
              </div>

              {/* Partners Portal badge */}
              <div className="inline-flex items-center shrink-0 self-center lg:self-center" style={{ padding: '8px 20px', background: 'rgba(255, 255, 255, 0.10)', borderRadius: '50px', gap: '8px' }}>
                <span className="font-ibm-plex text-[16px] lg:text-[18px] font-semibold text-white">
                  {t('بوابة الجهات', 'Partners Portal')}
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="my-[16px] sm:my-[20px] lg:my-[40px]" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.12)' }} />

            {/* Saudi-born tagline */}
            <div className="flex items-center justify-center" style={{ gap: '8px' }}>
              <span className="text-[18px]">🇸🇦</span>
              <p className="font-ibm-plex text-[16px] lg:text-[18px] font-medium text-white/80">
                Saudi-born. Built for real impact.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[88%] lg:max-w-[86%] mx-auto mt-[8px] sm:mt-[16px] lg:mt-[24px]">
        <div className="flex flex-col items-center gap-[8px] sm:gap-[12px] py-[12px] sm:py-[16px] lg:py-[24px]">
          <div className="flex items-center gap-[16px] sm:gap-[24px] lg:gap-[40px]">
            <Link href="/privacy" className="font-ibm-plex text-[12px] sm:text-[14px] lg:text-[16px] font-medium text-white/70 hover:text-white transition-colors">
              {t('سياسة الخصوصية و حماية البيانات', 'Privacy & Data Protection Policy')}
            </Link>
            <Link href="/terms" className="font-ibm-plex text-[12px] sm:text-[14px] lg:text-[16px] font-medium text-white/70 hover:text-white transition-colors">
              {t('الشروط و الأحكام و سياسة الاستخدام', 'Terms, Conditions & Acceptable Use')}
            </Link>
          </div>
          <p className="font-ibm-plex text-[12px] sm:text-[14px] lg:text-[16px] font-medium text-white/50">
            © Sparko {t('جميع الحقوق محفوظة', 'All rights reserved')}
          </p>
        </div>
      </div>
    </footer>
  );
}
