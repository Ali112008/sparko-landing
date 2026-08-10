'use client';

import { Play } from 'lucide-react';

export default function WatchSection() {
  return (
    <section className="relative py-8 sm:py-12 lg:py-14">
      <div className="max-w-[88%] lg:max-w-[86%] mx-auto">
        <div
          className="rounded-[24px] border-2 border-white/30 overflow-hidden"
          style={{ background: 'linear-gradient(180deg, #273C65 0%, #182B51 100%)' }}
        >
          {/* Upper Two-Column */}
          <div className="relative grid grid-cols-1 md:grid-cols-2">
            <div className="hidden md:block absolute left-1/2 top-6 bottom-6 w-px bg-white/20 -translate-x-1/2" />

            {/* Right Column (RTL) */}
            <div className="flex flex-col items-center justify-center py-8 sm:py-10 lg:py-12 md:pl-8 lg:pl-14">
              <h3 className="font-[family-name:var(--font-tajawal)] text-lg sm:text-2xl lg:text-[1.85rem] font-bold leading-tight text-center text-white">
                ما هي تجربة واحدة ...هي تجارب تتكرر
              </h3>
              <p className="text-white/45 font-[family-name:var(--font-tajawal)] text-xs sm:text-sm lg:text-base mt-2">
                بنوك، شركات، جامعات، جهات مختلفة
              </p>
              <div className="flex flex-col items-center gap-1.5 mt-5 sm:mt-6">
                <button className="w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] lg:w-[60px] lg:h-[60px] rounded-full bg-black border-[2.5px] border-sparko-orange flex items-center justify-center hover:border-orange-400 transition-colors">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white fill-white ml-[-2px]" />
                </button>
                <span className="text-white/80 font-[family-name:var(--font-tajawal)] font-bold text-xs sm:text-sm">شاهد</span>
              </div>
            </div>

            {/* Left Column (RTL) */}
            <div className="flex flex-col items-center justify-center py-8 sm:py-10 lg:py-12 md:pr-8 lg:pr-14">
              <h3 className="font-[family-name:var(--font-tajawal)] text-lg sm:text-2xl lg:text-[1.85rem] font-bold leading-tight text-center text-white">
                من تجربة محلية ...إلى أثر عالمي
              </h3>
              <p className="text-white/35 font-[family-name:var(--font-ibm-plex)] text-[10px] sm:text-xs lg:text-sm mt-2">
                What started here... reached the world
              </p>
              <div className="flex flex-col items-center gap-1.5 mt-5 sm:mt-6">
                <button className="w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] lg:w-[60px] lg:h-[60px] rounded-full bg-black border-[2.5px] border-sparko-orange flex items-center justify-center hover:border-orange-400 transition-colors">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white fill-white ml-[-2px]" />
                </button>
                <span className="text-white/80 font-[family-name:var(--font-tajawal)] font-bold text-xs sm:text-sm">شاهد</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/20 mx-6 sm:mx-10 lg:mx-14" />

          {/* Bottom */}
          <div className="flex items-center justify-center py-6 sm:py-8 lg:py-9 px-4 sm:px-8">
            <p className="font-[family-name:var(--font-tajawal)] text-base sm:text-xl lg:text-2xl font-bold text-white text-center leading-relaxed">
              التدريب الميداني ... ليس مجرد حضور بل &ldquo;تجربة تُبنى وفق معيار واضح&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
