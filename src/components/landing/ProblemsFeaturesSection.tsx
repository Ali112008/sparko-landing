'use client';

import Image from 'next/image';

const topFeatures = [
  { icon: '/icon-close.png', label: 'بدون نتيجة ملموسة' },
  { icon: '/icon-file.png', label: 'بدون تقرير موثق' },
  { icon: '/icon-collaborate.png', label: 'بدون متابعة فعالة' },
  { icon: '/icon-star.png', label: 'بدون تقييم حقيقي' },
  { icon: '/icon-aiming.png', label: 'بدون توجيه واضح' },
];

const bottomFeatures = [
  { icon: '/icon-training.png', ar: 'تدريب ميداني\nمنظم', en: 'Structured Field\nTraining' },
  { icon: '/icon-tasks.png', ar: 'تطبيق واقعي', en: 'Practical Tasks' },
  { icon: '/icon-rate.png', ar: 'تقييم أداء\nيومي', en: 'Daily evaluation' },
  { icon: '/icon-user-follow.png', ar: 'اشراف ومتابعة', en: 'Supervision\n& Follow-up' },
  { icon: '/icon-verified.png', ar: 'تقرير مهني موثق', en: 'Verified\nProfessional\nReport' },
  { icon: '/icon-diploma.png', ar: 'توثيق تجربة احترافية', en: 'Professional\nExperience\nDocumentation' },
];

export default function ProblemsFeaturesSection() {
  return (
    <section className="relative overflow-visible py-6 sm:py-10 lg:py-14">
      {/* Reduced content width → larger margins, more breathing room */}
      <div className="max-w-[88%] lg:max-w-[78%] mx-auto overflow-visible">
        {/* ========== PART 1 — DARK BLUE TOP PANEL ========== */}
        <div
          className="overflow-hidden relative"
          style={{
            background: 'linear-gradient(180deg, #273C65 0%, #182B51 100%)',
            border: '1.5px solid rgba(255, 254, 254, 0.4)',
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

          {/* Reduced height: padding 36px, gap 32px (≈9% reduction from 44px) */}
          <div className="flex flex-col items-center justify-center py-[36px] px-[44px] gap-[32px]">
            {/* Heading + Subtitle, reduced gap: 20px */}
            <div className="flex flex-col items-center gap-[20px]">
              <h2 className="font-[family-name:var(--font-ibm-plex)] text-[40px] leading-[48px] font-bold text-white text-center">
                أغلب التجارب تمر بدون أثر
              </h2>
              <p
                className="font-[family-name:var(--font-ibm-plex)] text-[24px] leading-[28px] font-normal text-white text-center"
                style={{ letterSpacing: '0.16px' }}
              >
                Most training experiences pass without impact
              </p>
            </div>

            {/* 5 icons row — increased spacing between icons (40px each side of divider) */}
            <div className="flex items-stretch justify-center">
              {topFeatures.map((item, index) => (
                <div key={index} className="flex items-center">
                  {index > 0 && (
                    <div
                      className="w-px flex-shrink-0"
                      style={{
                        height: '120px',
                        marginLeft: '40px',
                        marginRight: '40px',
                        background: 'rgba(255, 255, 255, 0.24)',
                      }}
                    />
                  )}
                  <div className="flex flex-col items-center text-center" style={{ gap: '16px' }}>
                    <div className="w-[72px] h-[72px] flex items-center justify-center">
                      <Image
                        src={item.icon}
                        alt={item.label}
                        width={72}
                        height={72}
                        className="w-full h-full object-contain brightness-0 invert"
                      />
                    </div>
                    <p className="font-[family-name:var(--font-ibm-plex)] text-[18px] leading-[28px] font-semibold text-white">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========== PART 2 — WHITE BOTTOM PANEL ========== */}
        <div
          className="bg-white overflow-visible relative"
          style={{
            border: '1.5px solid rgba(255, 254, 254, 0.4)',
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

          {/* Phone mockup — absolute positioned at bottom-right, extending ~35% outside */}
          <div
            className="absolute z-10 hidden lg:block"
            style={{
              right: '-20px',
              bottom: '-35%',
              filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))',
            }}
          >
            <Image
              src="/phone-mockup.png"
              alt="Sparko App"
              width={280}
              height={410}
              className="h-auto object-contain"
              style={{ width: '280px' }}
            />
          </div>

          {/* Content — increased top padding, reduced gaps for headings */}
          <div className="flex flex-col items-center pt-[56px] pb-[44px] px-[44px] gap-[28px]">
            {/* Headings — reduced spacing to move upward */}
            <div className="flex flex-col items-center gap-[18px]">
              <h2 className="font-[family-name:var(--font-ibm-plex)] text-[40px] leading-[48px] font-bold text-sparko-orange text-center">
                هنا كل شيء محسوب
              </h2>
              <p
                className="font-[family-name:var(--font-ibm-plex)] text-[24px] leading-[28px] font-normal text-[#2B2D2F] text-center"
                style={{ letterSpacing: '0.16px' }}
              >
                Here, everything is calculated
              </p>
            </div>

            {/* Green text — reduced gap above */}
            <p className="font-[family-name:var(--font-ibm-plex)] text-[36px] leading-[48px] font-bold text-sparko-green text-center">
              كل خطوة لها هدف ... وكل تجربة لها نتيجة
            </p>

            {/* ===== DESKTOP: Cards row from LEFT ===== */}
            {/* Cards packed to the left side (justify-end in RTL = visual left) */}
            {/* Reduced card width via max-width constraint, leaving space for phone on right */}
            <div className="hidden lg:flex gap-[12px] justify-end w-full" style={{ maxWidth: '72%' }}>
              {bottomFeatures.map((card, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                  style={{
                    borderRadius: '20px',
                    padding: '18px 14px',
                    gap: '14px',
                    flex: '1 1 0%',
                    minWidth: 0,
                    border: '1px solid rgba(0, 0, 0, 0.24)',
                  }}
                >
                  {/* Smaller icons: 60x60 */}
                  <div className="w-[60px] h-[60px] flex items-center justify-center">
                    <Image
                      src={card.icon}
                      alt={card.ar}
                      width={60}
                      height={60}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* Arabic text: 18px w600 */}
                  <p className="font-[family-name:var(--font-ibm-plex)] text-[18px] leading-[28px] font-semibold text-[#2B2D2F]">
                    {card.ar.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < card.ar.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                  {/* English text: 14px w600 */}
                  <p className="font-[family-name:var(--font-ibm-plex)] text-[14px] leading-[22px] font-semibold text-[#2B2D2F]">
                    {card.en.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < card.en.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>

            {/* ===== MOBILE/TABLET ===== */}
            <div className="lg:hidden">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
                {bottomFeatures.map((card, index) => (
                  <div
                    key={index}
                    className="bg-white flex flex-col items-center text-center min-h-[180px] sm:min-h-[200px] justify-center"
                    style={{
                      boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                      borderRadius: '24px',
                      padding: '16px',
                      gap: '16px',
                      border: '1px solid rgba(0, 0, 0, 0.24)',
                    }}
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
                      <Image src={card.icon} alt={card.ar} width={56} height={56} className="w-full h-full object-contain" />
                    </div>
                    <p className="font-[family-name:var(--font-ibm-plex)] text-xs sm:text-sm font-semibold text-[#2B2D2F] leading-snug">
                      {card.ar.split('\n').map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < card.ar.split('\n').length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                    <p className="font-[family-name:var(--font-ibm-plex)] text-[9px] sm:text-[10px] leading-snug font-semibold text-[#2B2D2F]">
                      {card.en.split('\n').map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < card.en.split('\n').length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <Image src="/phone-mockup.png" alt="Sparko App" width={280} height={560} className="w-[240px] sm:w-[280px] h-auto object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
