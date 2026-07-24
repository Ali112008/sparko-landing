'use client';

import { useLang } from '@/context/LanguageContext';

export default function WatchSection() {
  const { lang } = useLang();
  const t = (ar: string, en: string) => lang === 'ar' ? ar : en;

  return (
    <section className="relative py-[45px]">
      <div className="max-w-[87.5%] mx-auto">
        {/* Figma: Background+Border+Shadow — VERTICAL, spacing=44→33, pad=44→33 */}
        {/* cr=24→18, stroke=rgba(255,254,254,0.4) wt=1.5 */}
        {/* shadow: DROP_SHADOW(0,25,50,rgba(0,0,0,0.25)) */}
        {/* fill: radial-gradient (#21355A → #0C1B3A) from Gradient RECTANGLE children */}
        <div
          className="rounded-[18px] overflow-hidden relative"
          style={{
            background: 'radial-gradient(circle at center, #21355A 0%, #0C1B3A 100%)',
            border: '1.5px solid rgba(255, 255, 255, 0.4)',
            boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
            padding: '33px',
          }}
        >
          {/* Blue glow line at bottom — Figma */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[103%] h-[1px] pointer-events-none"
            style={{ borderTop: '1px solid rgba(43, 127, 255, 0.7)', filter: 'blur(10px)' }}
          />

          {/* Inner content — Figma: Frame 2121453379, VERTICAL spacing=44→33 */}
          <div className="flex flex-col items-center" style={{ gap: '33px' }}>
            {/* Upper Two-Column — Figma: Frame 2121453367, HORIZONTAL spacing=45→34 */}
            <div className="relative w-full flex" style={{ gap: '34px' }}>
              {/* Divider between columns */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/20 -translate-x-1/2" />

              {/* Right Column (RTL) / First column (LTR) */}
              {/* Figma: Frame 2121453332, VERTICAL spacing=44→33 */}
              <div className="flex flex-col items-center justify-center flex-1" style={{ gap: '33px' }}>
                <h3 className="font-ibm-plex text-[32px] font-semibold leading-[1.4] text-center text-white">
                  {t('ما هي تجربة واحدة … هي تجارب تتكرر', 'It\'s not just one experience… it\'s experiences that repeat')}
                </h3>
                <p className="text-white/60 font-ibm-plex text-[20px] font-normal">
                  {t('بنوك ، شركات ، جامعات ، جهات مختلفة', 'Banks, companies, universities, various organizations')}
                </p>
                {/* Play button */}
                <div className="flex flex-col items-center gap-[12px]">
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
                  <span className="font-ibm-plex text-[16px] font-normal text-white">
                    {t('شاهد', 'Watch')}
                  </span>
                </div>
              </div>

              {/* Left Column (RTL) / Second column (LTR) */}
              {/* Figma: Frame 2121453327, VERTICAL spacing=44→33 */}
              <div className="flex flex-col items-center justify-center flex-1" style={{ gap: '33px' }}>
                <h3 className="font-ibm-plex text-[32px] font-semibold leading-[1.4] text-center text-white">
                  {t('من تجربة محلية … إلى أثر عالمي', 'From a local experience… to a global impact')}
                </h3>
                <p className="text-white/60 font-ibm-plex text-[20px] font-normal">
                  {t('ما بدأ هنا… وصل العالم', 'What started here… reached the world')}
                </p>
                {/* Play button */}
                <div className="flex flex-col items-center gap-[12px]">
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
                  <span className="font-ibm-plex text-[16px] font-normal text-white">
                    {t('شاهد', 'Watch')}
                  </span>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)' }} />

            {/* Bottom — Figma: TEXT node */}
            <p className="font-ibm-plex text-[32px] font-bold text-white text-center leading-[1.4]">
              {t('التدريب الميداني … ليس مجرد حضور بل تجربة تُبنى وفق معيار واضح', 'Field training… is not just attendance but an experience built according to a clear standard')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
