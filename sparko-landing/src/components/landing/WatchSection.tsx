'use client';

import { Play } from 'lucide-react';

export default function WatchSection() {
  return (
    <section className="relative py-[32px] lg:py-[56px]">
      <div className="max-w-[88%] lg:max-w-[86%] mx-auto">
        <div
          className="rounded-[24px] border-2 border-white/30 overflow-hidden"
          style={{ background: 'linear-gradient(180deg, #273C65 0%, #182B51 100%)' }}
        >
          {/* Upper Two-Column */}
          <div className="relative grid grid-cols-1 md:grid-cols-2">
            <div className="hidden md:block absolute left-1/2 top-[24px] bottom-[24px] w-px bg-white/20 -translate-x-1/2" />

            {/* Right Column (RTL) */}
            <div className="flex flex-col items-center justify-center py-[32px] lg:py-[48px] md:pl-[32px] lg:pl-[56px]">
              <h3 className="font-[family-name:var(--font-tajawal)] text-[18px] sm:text-[24px] lg:text-[32px] font-bold leading-[1.3] text-center text-white">
                ما هي تجربة واحدة ...هي تجارب تتكرر
              </h3>
              <p className="text-white/45 font-[family-name:var(--font-tajawal)] text-[12px] sm:text-[14px] lg:text-[18px] mt-[8px]">
                بنوك، شركات، جامعات، جهات مختلفة
              </p>
              <div className="flex flex-col items-center gap-[6px] mt-[20px] lg:mt-[24px]">
                <button className="w-[48px] h-[48px] lg:w-[60px] lg:h-[60px] rounded-full bg-black border-[2.5px] border-sparko-orange flex items-center justify-center hover:border-orange-400 transition-colors">
                  <Play className="w-[16px] h-[16px] lg:w-[22px] lg:h-[22px] text-white fill-white ml-[-2px]" />
                </button>
                <span className="text-white/80 font-[family-name:var(--font-tajawal)] font-bold text-[12px] lg:text-[14px]">شاهد</span>
              </div>
            </div>

            {/* Left Column (RTL) */}
            <div className="flex flex-col items-center justify-center py-[32px] lg:py-[48px] md:pr-[32px] lg:pr-[56px]">
              <h3 className="font-[family-name:var(--font-tajawal)] text-[18px] sm:text-[24px] lg:text-[32px] font-bold leading-[1.3] text-center text-white">
                من تجربة محلية ...إلى أثر عالمي
              </h3>
              <p className="text-white/35 font-[family-name:var(--font-ibm-plex)] text-[10px] sm:text-[12px] lg:text-[16px] mt-[8px]">
                What started here... reached the world
              </p>
              <div className="flex flex-col items-center gap-[6px] mt-[20px] lg:mt-[24px]">
                <button className="w-[48px] h-[48px] lg:w-[60px] lg:h-[60px] rounded-full bg-black border-[2.5px] border-sparko-orange flex items-center justify-center hover:border-orange-400 transition-colors">
                  <Play className="w-[16px] h-[16px] lg:w-[22px] lg:h-[22px] text-white fill-white ml-[-2px]" />
                </button>
                <span className="text-white/80 font-[family-name:var(--font-tajawal)] font-bold text-[12px] lg:text-[14px]">شاهد</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/20 mx-[24px] lg:mx-[56px]" />

          {/* Bottom */}
          <div className="flex items-center justify-center py-[24px] lg:py-[36px] px-[16px] lg:px-[32px]">
            <p className="font-[family-name:var(--font-tajawal)] text-[16px] sm:text-[20px] lg:text-[28px] font-bold text-white text-center leading-[1.5]">
              التدريب الميداني ... ليس مجرد حضور بل &ldquo;تجربة تُبنى وفق معيار واضح&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
