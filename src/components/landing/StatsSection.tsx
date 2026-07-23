'use client';

import Image from 'next/image';
import { useLang } from '@/context/LanguageContext';

const stats = [
  { icon: '/icon-stats-thumb.png', ar: 'نتائج تتكرر… وليست صدفة', en: 'Repeatable results — not luck' },
  { icon: '/icon-stats-clock.png', ar: 'نتائج تُقاس بوضوح', en: 'Clearly measurable outcomes' },
  { icon: '/icon-stats-grid.png', ar: 'تقييم مبني على الأداء', en: 'Performance-based evaluation' },
  { icon: '/icon-stats-person.png', ar: 'تجارب موثقة', en: 'Documented experiences' },
];

export default function StatsSection() {
  const { lang } = useLang();
  const t = (ar: string, en: string) => lang === 'ar' ? ar : en;

  return (
    <section className="relative py-[24px] lg:py-[40px]">
      <div className="max-w-[88%] lg:max-w-[86%] mx-auto">
        <div
          className="rounded-[24px] overflow-hidden relative"
          style={{
            background: 'radial-gradient(circle at center, #21355A 0%, #0C1B3A 100%)',
            border: '1.5px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.35)',
          }}
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[103%] h-[1px]" style={{ borderTop: '1px solid rgba(43, 127, 255, 0.7)', filter: 'blur(10px)' }} />

          {/* ===== DESKTOP LAYOUT (always shown) ===== */}
          <div className="flex items-center py-[72px] px-[64px]" style={{ gap: '48px' }}>
            {/* Trophy + text block */}
            <div className="flex items-center flex-shrink-0" style={{ gap: '32px', width: '30%' }}>
              <Image
                src="/stats-image.png"
                alt="Sparko Trophy"
                width={220}
                height={194}
                className="w-[220px] h-auto flex-shrink-0 object-contain"
                priority
              />
              <div className="flex flex-col" style={{ gap: '16px' }}>
                <p className="font-ibm-plex text-[24px] font-bold leading-[31.2px] text-white text-start">
                  {t('منذ 2015 ،\nنتائج مستمرة حتى اليوم', 'Since 2015,\nresults that continue today')}
                </p>
              </div>
            </div>

            {/* Vertical divider */}
            <div className="flex-shrink-0" style={{ width: '1.5px', alignSelf: 'stretch', background: 'rgba(255, 255, 255, 0.24)' }} />

            {/* 4 Feature items */}
            <div className="flex items-center min-w-0" style={{ gap: '24px', width: '70%' }}>
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center min-w-0 text-center" style={{ flex: '1 1 0px', gap: '16px' }}>
                  <div className="w-[44px] h-[44px] flex items-center justify-center flex-shrink-0">
                    <Image src={stat.icon} alt={lang === 'ar' ? stat.ar : stat.en} width={44} height={44} className="w-full h-full object-contain" />
                  </div>
                  <p className="font-ibm-plex text-[24px] font-bold leading-[28px] text-white text-center" style={{ overflowWrap: 'break-word' }}>
                    {lang === 'ar' ? stat.ar : stat.en}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
