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
            boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
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

          {/* Main content: padding matches QuoteSection (py-[44px] px-[48px]) */}
          {/* RTL: Trophy+Text first in DOM → appears on RIGHT, Stats second → appears on LEFT */}
          {/* Figma: HORIZONTAL flex, items centered, gap 44px between each child */}
          <div className="flex items-center py-[44px] px-[48px]" style={{ gap: '44px' }}>
            {/* Trophy + "منذ 2015" block — appears on RIGHT side in RTL */}
            {/* Figma: HORIZONTAL flex, items centered, gap 24px */}
            <div className="flex items-center flex-shrink-0" style={{ gap: '24px' }}>
              {/* Trophy image - Figma: 143x126 */}
              <div className="w-[143px] h-[126px] flex-shrink-0">
                <Image
                  src="/stats-image.png"
                  alt="Sparko Trophy"
                  width={143}
                  height={126}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Text block - "منذ 2015" */}
              {/* Figma: VERTICAL flex, gap 16px, textAlign right */}
              <div className="flex flex-col" style={{ gap: '16px' }}>
                {/* Figma: 24px w700 lh31.2px white, IBM Plex Sans Arabic */}
                <p className="font-[family-name:var(--font-ibm-plex)] text-[24px] font-bold leading-[31.2px] text-white text-right">
                  منذ 2015 ،<br />نتائج مستمرة حتى اليوم
                </p>
                {/* Figma: 18px w700 lh23.4px rgb(255,85,0), IBM Plex Sans Arabic, letterSpacing 0.16px */}
                <p
                  className="font-[family-name:var(--font-ibm-plex)] text-[18px] font-bold leading-[23.4px] text-sparko-orange text-right"
                  style={{ letterSpacing: '0.16px' }}
                >
                  Since 2015 ,<br />results that continue
                </p>
              </div>
            </div>

            {/* Vertical divider — Figma: 1px width, self-stretch height */}
            {/* Spacing handled by parent flex gap: 44px on each side */}
            <div
              className="flex-shrink-0"
              style={{
                width: '1px',
                alignSelf: 'stretch',
                background: 'rgba(255, 255, 255, 0.24)',
              }}
            />

            {/* 4 Stat items — appears on LEFT side in RTL */}
            {/* Figma: HORIZONTAL flex, items-start, gap 40px between items */}
            {/* Each item: flex-1 with basis 0 for equal distribution */}
            <div className="flex items-start flex-1 min-w-0" style={{ gap: '40px' }}>
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col min-w-0 text-start" style={{ flex: '1 1 0px', gap: '12px' }}>
                  {/* Icon - Figma: 44x44 */}
                  <div className="w-[44px] h-[44px] flex items-center justify-center flex-shrink-0">
                    <Image
                      src={stat.icon}
                      alt={stat.ar}
                      width={44}
                      height={44}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* Text frame — Figma: VERTICAL, gap 4px */}
                  <div className="flex flex-col min-w-0" style={{ gap: '4px' }}>
                    {/* Figma: 24px w700 lh28.8px white, IBM Plex Sans Arabic */}
                    <p
                      className="font-[family-name:var(--font-ibm-plex)] text-[24px] font-bold leading-[28.8px] text-white"
                      style={{ overflowWrap: 'break-word' }}
                    >
                      {stat.ar}
                    </p>
                    {/* Figma: 18px w400 lh27px white/60, IBM Plex Sans Arabic, letterSpacing 0.16px */}
                    <p
                      className="font-[family-name:var(--font-ibm-plex)] text-[18px] font-normal leading-[27px] text-white/60"
                      style={{ letterSpacing: '0.16px', hyphens: 'none', overflowWrap: 'break-word' }}
                    >
                      {stat.en}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
