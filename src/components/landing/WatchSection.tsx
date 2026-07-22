'use client';

import Image from 'next/image';

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
              <h3 className="font-ibm-plex text-[18px] sm:text-[24px] lg:text-[32px] font-semibold leading-[1.5] text-center text-white">
                ما هي تجربة واحدة … هي تجارب تتكرر
              </h3>
              <p className="text-white/60 font-ibm-plex text-[12px] sm:text-[16px] lg:text-[20px] font-normal mt-[8px]">
                بنوك ، شركات ، جامعات ، جهات مختلفة
              </p>
              {/* Play button */}
              <div className="mt-[40px] lg:mt-[48px] flex flex-col items-center gap-[16px]">
                <button
                  className="w-[80px] h-[80px] rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: '#000000',
                    border: '4px solid #FF5500',
                    boxShadow: '0px 4px 4px rgba(1, 7, 255, 0.24)',
                  }}
                >
                  {/* White play triangle */}
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M10 6L22 14L10 22V6Z" fill="white" />
                  </svg>
                </button>
                <span className="font-ibm-plex text-[14px] lg:text-[16px] font-normal text-white">
                  شاهد
                </span>
              </div>
            </div>

            {/* Left Column (RTL) */}
            <div className="flex flex-col items-center justify-center py-[32px] lg:py-[48px] md:pr-[32px] lg:pr-[56px]">
              <h3 className="font-ibm-plex text-[18px] sm:text-[24px] lg:text-[32px] font-semibold leading-[1.5] text-center text-white">
                من تجربة محلية … إلى أثر عالمي
              </h3>
              <p className="text-white/60 font-ibm-plex text-[12px] sm:text-[16px] lg:text-[20px] font-normal mt-[8px]">
                What started here… reached the world
              </p>
              {/* Play button */}
              <div className="mt-[40px] lg:mt-[48px] flex flex-col items-center gap-[16px]">
                <button
                  className="w-[80px] h-[80px] rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: '#000000',
                    border: '4px solid #FF5500',
                    boxShadow: '0px 4px 4px rgba(1, 7, 255, 0.24)',
                  }}
                >
                  {/* White play triangle */}
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M10 6L22 14L10 22V6Z" fill="white" />
                  </svg>
                </button>
                <span className="font-ibm-plex text-[14px] lg:text-[16px] font-normal text-white">
                  شاهد
                </span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/20 mx-[24px] lg:mx-[56px]" />

          {/* Bottom - Figma: 32px w700 */}
          <div className="flex items-center justify-center py-[24px] lg:py-[36px] px-[16px] lg:px-[32px]">
            <p className="font-ibm-plex text-[16px] sm:text-[24px] lg:text-[32px] font-bold text-white text-center leading-[1.4]">
              التدريب الميداني … ليس مجرد حضور بل &ldquo;تجربة تُبنى وفق معيار واضح&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
