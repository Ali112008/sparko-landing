'use client';

import Image from 'next/image';
import { useLang } from '@/context/LanguageContext';

export default function WatchSection() {
  const { lang } = useLang();
  const t = (ar: string, en: string) => lang === 'ar' ? ar : en;

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

            {/* Right Column (RTL) / First column (LTR) */}
            <div className="flex flex-col items-center justify-center py-[32px] lg:py-[48px] md:pl-[32px] lg:pl-[56px]">
              <h3 className="font-ibm-plex text-[18px] sm:text-[24px] lg:text-[32px] font-semibold leading-[1.5] text-center text-white">
                {t('ما هي تجربة واحدة … هي تجارب تتكرر', 'It\'s not just one experience… it\'s experiences that repeat')}
              </h3>
              <p className="text-white/60 font-ibm-plex text-[12px] sm:text-[16px] lg:text-[20px] font-normal mt-[8px]">
                {t('بنوك ، شركات ، جامعات ، جهات مختلفة', 'Banks, companies, universities, various organizations')}
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
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M10 6L22 14L10 22V6Z" fill="white" />
                  </svg>
                </button>
                <span className="font-ibm-plex text-[14px] lg:text-[16px] font-normal text-white">
                  {t('شاهد', 'Watch')}
                </span>
              </div>
            </div>

            {/* Left Column (RTL) / Second column (LTR) */}
            <div className="flex flex-col items-center justify-center py-[32px] lg:py-[48px] md:pr-[32px] lg:pr-[56px]">
              <h3 className="font-ibm-plex text-[18px] sm:text-[24px] lg:text-[32px] font-semibold leading-[1.5] text-center text-white">
                {t('من تجربة محلية … إلى أثر عالمي', 'From a local experience… to a global impact')}
              </h3>
              <p className="text-white/60 font-ibm-plex text-[12px] sm:text-[16px] lg:text-[20px] font-normal mt-[8px]">
                {t('What started here… reached the world', 'What started here… reached the world')}
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
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M10 6L22 14L10 22V6Z" fill="white" />
                  </svg>
                </button>
                <span className="font-ibm-plex text-[14px] lg:text-[16px] font-normal text-white">
                  {t('شاهد', 'Watch')}
                </span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/20 mx-[24px] lg:mx-[56px]" />

          {/* Bottom */}
          <div className="flex items-center justify-center py-[24px] lg:py-[36px] px-[16px] lg:px-[32px]">
            <p className="font-ibm-plex text-[16px] sm:text-[24px] lg:text-[32px] font-bold text-white text-center leading-[1.4]">
              {t('التدريب الميداني … ليس مجرد حضور بل تجربة تُبنى وفق معيار واضح', 'Field training… is not just attendance but an experience built according to a clear standard')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
