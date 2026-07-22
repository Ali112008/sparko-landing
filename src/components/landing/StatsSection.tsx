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
          className="rounded-[24px] border-2 border-white/30 overflow-hidden"
          style={{ background: 'linear-gradient(180deg, #273C65 0%, #182B51 100%)' }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-center py-[40px] lg:py-[48px] px-[32px] lg:px-[60px] gap-[32px] lg:gap-[48px]">
            {/* 4 Stats */}
            <div className="flex flex-wrap justify-center gap-[24px] lg:gap-[32px]">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-start gap-[12px] max-w-[270px]">
                  <div className="w-[44px] h-[44px] flex items-center justify-center flex-shrink-0">
                    <stat.icon className="w-[36px] h-[36px] text-white/80" />
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-ibm-plex)] text-[18px] lg:text-[24px] font-bold leading-[1.2] text-white">
                      {stat.ar}
                    </p>
                    <p className="font-[family-name:var(--font-ibm-plex)] text-[14px] lg:text-[18px] font-normal leading-[1.5] text-white/60 mt-[4px]">
                      {stat.en}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Vertical Divider */}
            <div className="hidden lg:block w-px h-[148px] bg-white/20" />

            {/* Since 2015 */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-right">
              <p className="font-[family-name:var(--font-ibm-plex)] text-[20px] lg:text-[24px] font-bold leading-[1.3] text-white">
                منذ 2015 ،<br />نتائج مستمرة حتى اليوم
              </p>
              <p className="font-[family-name:var(--font-ibm-plex)] text-[14px] lg:text-[18px] font-bold leading-[1.3] text-sparko-orange mt-[8px]">
                Since 2015 ,<br />results that continue
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
