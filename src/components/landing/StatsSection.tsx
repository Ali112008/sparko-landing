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
            padding: '44px 48px',
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

          {/* RTL: Trophy+Text first in DOM → appears on RIGHT, Stats second → appears on LEFT */}
          <div className="flex items-center justify-center gap-[44px]">

            {/* Trophy + "منذ 2015" block — appears on RIGHT side in RTL */}
            <div className="flex items-start gap-[44px]">
              {/* Trophy image - 143x126 per Figma */}
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
              <div className="flex flex-col gap-[16px] text-right">
                <p className="font-[family-name:var(--font-ibm-plex)] text-[24px] font-bold leading-[31.2px] text-white">
                  منذ 2015 ،<br />نتائج مستمرة حتى اليوم
                </p>
                <p className="font-[family-name:var(--font-ibm-plex)] text-[18px] font-bold leading-[23.4px] text-sparko-orange">
                  Since 2015 ,<br />results that continue
                </p>
              </div>
            </div>

            {/* Vertical divider */}
            <div className="w-px h-[148px] bg-white/20 flex-shrink-0" />

            {/* 4 Stat items — appears on LEFT side in RTL */}
            <div className="flex items-start gap-[40px]">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-start gap-[12px] w-[269px]">
                  {/* Icon - 44x44, orange from Figma PNG */}
                  <div className="w-[44px] h-[44px] flex items-center justify-center flex-shrink-0">
                    <Image
                      src={stat.icon}
                      alt={stat.ar}
                      width={44}
                      height={44}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* Text frame */}
                  <div>
                    <p className="font-[family-name:var(--font-ibm-plex)] text-[24px] font-bold leading-[28.8px] text-white">
                      {stat.ar}
                    </p>
                    <p className="font-[family-name:var(--font-ibm-plex)] text-[18px] font-normal leading-[27px] text-white/60 mt-[4px]">
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
