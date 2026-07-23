'use client';

import Image from 'next/image';

const stats = [
  { icon: '/icon-stats-thumb.png', ar: 'نتائج تتكرر… وليست صدفة', en: 'Repeatable results — not luck' },
  { icon: '/icon-stats-clock.png', ar: 'نتائج تُقاس بوضوح', en: 'Clearly measurable outcomes' },
  { icon: '/icon-stats-grid.png', ar: 'تقييم مبني على الأداء', en: 'Performance-based evaluation' },
  { icon: '/icon-stats-person.png', ar: 'تجارب موثقة', en: 'Documented experiences' },
];

export default function StatsSection() {
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
          {/* Blue glow line at bottom */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[103%] h-[1px]"
            style={{
              borderTop: '1px solid rgba(43, 127, 255, 0.7)',
              filter: 'blur(10px)',
            }}
          />

          {/* Main content — spacious premium layout */}
          {/* Padding increased for generous spacing */}
          <div className="flex items-center py-[56px] lg:py-[72px] px-[48px] lg:px-[64px]" style={{ gap: '48px' }}>

            {/* Trophy + "منذ 2015" block — ~30% width, on FAR RIGHT in RTL */}
            {/* RTL: first child in flex → appears on right/start side */}
            <div
              className="flex items-center flex-shrink-0"
              style={{ gap: '32px', width: '30%' }}
            >
              {/* Trophy image */}
              <Image
                src="/stats-image.png"
                alt="Sparko Trophy"
                width={220}
                height={194}
                className="w-[220px] h-auto flex-shrink-0 object-contain"
                priority
              />

              {/* Text block - "منذ 2015" */}
              <div className="flex flex-col" style={{ gap: '16px' }}>
                {/* Arabic text */}
                <p className="font-ibm-plex text-[24px] font-bold leading-[31.2px] text-white text-right">
                  منذ 2015 ،<br />نتائج مستمرة حتى اليوم
                </p>
                {/* English text — orange accent */}
                <p className="font-ibm-plex text-[18px] font-bold leading-[23.4px] text-sparko-orange text-right">
                  Since 2015 ,<br />results that continue
                </p>
              </div>
            </div>

            {/* Vertical divider — 1.5px, white at ~24% opacity */}
            <div
              className="flex-shrink-0"
              style={{
                width: '1.5px',
                alignSelf: 'stretch',
                background: 'rgba(255, 255, 255, 0.24)',
              }}
            />

            {/* 4 Feature items — ~70% width, on LEFT side in RTL */}
            {/* Use direction:ltr to preserve visual order matching reference (not auto-mirrored by RTL) */}
            {/* Order from left to right: نتائج تتكرر → نتائج تُقاس → تقييم مبني → تجارب موثقة */}
            <div
              className="flex items-center min-w-0"
              style={{ gap: '24px', width: '70%', direction: 'ltr' }}
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center min-w-0 text-center"
                  style={{ flex: '1 1 0px', gap: '16px' }}
                >
                  {/* Orange line icon */}
                  <div className="w-[44px] h-[44px] flex items-center justify-center flex-shrink-0">
                    <Image
                      src={stat.icon}
                      alt={stat.ar}
                      width={44}
                      height={44}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Arabic heading — RTL text alignment within centered item */}
                  <p
                    className="font-ibm-plex text-[20px] lg:text-[24px] font-bold leading-[28px] text-white text-center"
                    style={{ overflowWrap: 'break-word', direction: 'rtl' }}
                  >
                    {stat.ar}
                  </p>

                  {/* English subtitle */}
                  <p
                    className="font-ibm-plex text-[14px] lg:text-[18px] font-normal leading-[24px] text-white/70 text-center"
                    style={{ overflowWrap: 'break-word' }}
                  >
                    {stat.en}
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
