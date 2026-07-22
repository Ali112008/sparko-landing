'use client';

import { ThumbsUp, Clock, Building2, Users } from 'lucide-react';

const stats = [
  { icon: ThumbsUp, ar: 'نتائج تتكرر… وليست صدفة', en: 'Repeatable results — not luck' },
  { icon: Clock, ar: 'نتائج تُقاس بوضوح', en: 'Clearly measurable outcomes' },
  { icon: Building2, ar: 'تقييم مبني على الأداء', en: 'Performance-based evaluation' },
  { icon: Users, ar: 'تجارب موثقة', en: 'Documented experiences' },
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
          {/* Figma: HorizontalBorder+Blur - blue glow line at bottom */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[103%] h-[1px]"
            style={{
              borderTop: '1px solid rgba(43, 127, 255, 0.7)',
              filter: 'blur(10px)',
            }}
          />

          {/* Figma: Frame 2121453276, HORIZONTAL, itemSpacing: 44, counterAxisAlignItems: CENTER */}
          <div className="flex items-center justify-center gap-[44px]">
            {/* Figma: Left Frame - 4 stat items, HORIZONTAL, itemSpacing: 40 */}
            <div className="flex items-start gap-[40px]">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-start gap-[12px] w-[269px]">
                  {/* Figma: Icon - 44x44 */}
                  <div className="w-[44px] h-[44px] flex items-center justify-center flex-shrink-0">
                    <stat.icon className="w-[44px] h-[44px] text-white/80" />
                  </div>
                  {/* Figma: Text frame */}
                  <div>
                    {/* Figma: 24px w700 lh:28.8px (120%) white, IBM Plex Sans Arabic */}
                    <p className="font-[family-name:var(--font-ibm-plex)] text-[24px] font-bold leading-[28.8px] text-white">
                      {stat.ar}
                    </p>
                    {/* Figma: 18px w400 lh:27px (150%) white, IBM Plex Sans Arabic */}
                    <p className="font-[family-name:var(--font-ibm-plex)] text-[18px] font-normal leading-[27px] text-white mt-[4px]">
                      {stat.en}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Figma: Line 2 - Vertical divider */}
            <div className="w-px h-[148px] bg-white/20 flex-shrink-0" />

            {/* Figma: Right Frame - Since 2015, HORIZONTAL, itemSpacing: 44 */}
            <div className="flex items-start gap-[44px]">
              {/* Figma: Frame 2121453277, VERTICAL, itemSpacing: 16 */}
              <div className="flex flex-col gap-[16px] text-right">
                {/* Figma: 24px w700 lh:31.2px (130%) white */}
                <p className="font-[family-name:var(--font-ibm-plex)] text-[24px] font-bold leading-[31.2px] text-white">
                  منذ 2015 ،<br />نتائج مستمرة حتى اليوم
                </p>
                {/* Figma: 18px w700 lh:23.4px (130%) orange */}
                <p className="font-[family-name:var(--font-ibm-plex)] text-[18px] font-bold leading-[23.4px] text-sparko-orange">
                  Since 2015 ,<br />results that continue
                </p>
              </div>

              {/* Figma: image 10 - 143x126 */}
              <div className="w-[143px] h-[126px] flex-shrink-0 overflow-hidden">
                <img
                  src="/stats-image.png"
                  alt="Sparko Stats"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
