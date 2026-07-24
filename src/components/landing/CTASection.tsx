'use client';

import Image from 'next/image';
import { useLang } from '@/context/LanguageContext';

export default function CTASection() {
  const { lang } = useLang();
  const t = (ar: string, en: string) => lang === 'ar' ? ar : en;

  return (
    <section className="relative py-[45px]">
      <div className="max-w-[87.5%] mx-auto">
        <div
          className="rounded-[18px] overflow-hidden relative"
          style={{
            background: 'radial-gradient(circle at center, #21355A 0%, #0C1B3A 100%)',
            border: '1.5px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
          }}
        >
          <div className="flex flex-col items-center py-[33px] px-[36px]" style={{ gap: '18px' }}>
            {/* Pill/Badge */}
            <div className="inline-flex items-center" style={{ gap: '6px', padding: '5px 12px', background: 'rgba(255, 255, 255, 0.10)', borderRadius: '50px' }}>
              <span className="font-ibm-plex text-[16px] font-medium text-white">
                {t('منظومة', 'Ecosystem')}
              </span>
              <Image src="/logo.png" alt="Sparko." width={51} height={24} className="h-[24px] w-auto" />
              <span className="font-ibm-plex text-[16px] font-medium text-white">
                {t('المتكاملة', 'Integrated')}
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-ibm-plex text-[30px] font-bold text-white text-center" style={{ lineHeight: '1.4' }}>
              {t('جاهز أنت الآن تبني قصة نجاحك؟', 'Are you ready to build your success story?')}
            </h2>

            {/* Subtitle */}
            <p className="font-ibm-plex text-[18px] font-normal text-white/70 text-center" style={{ lineHeight: '1.5', letterSpacing: '0.12px' }}>
              {t('تجربة تعيشها ... و نتيجة تشوفها', 'An experience you live... and a result you see')}
            </p>

            {/* CTA Button */}
            <a
              href="#contact"
              className="inline-flex flex-col items-center justify-center font-ibm-plex"
              style={{
                gap: '2px',
                padding: '12px 30px',
                background: '#FF5500',
                borderRadius: '40px',
                color: '#FFFFFF',
                fontSize: '15px',
                fontWeight: 500,
                boxShadow: '0px 10px 15px -3px rgba(255, 85, 0, 0.25)',
              }}
            >
              <span>{t('ابدأ رحلتك الآن', 'Start your journey now')}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
