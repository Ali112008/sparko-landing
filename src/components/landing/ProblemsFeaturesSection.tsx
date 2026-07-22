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
    <section className="relative py-6 sm:py-10 lg:py-14">
      {/* Match other sections: max-w-[88%] lg:max-w-[86%] */}
      <div className="max-w-[88%] lg:max-w-[86%] mx-auto">
        {/* ========== PART 1 — DARK BLUE TOP PANEL ========== */}
        <div
          className="overflow-hidden relative"
          style={{
            background: 'linear-gradient(180deg, #273C65 0%, #182B51 100%)',
            border: '1.5px solid rgba(255, 254, 254, 0.4)',
            boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
            borderRadius: '24px 24px 0 0',
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

          {/* Content: padding 44px, gap 44px per Figma */}
          <div className="flex flex-col items-center justify-center py-[44px] px-[44px] gap-[44px]">
            {/* Heading + Subtitle */}
            <div className="flex flex-col items-center gap-[24px]">
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

            {/* 5 icons row — Figma dividers */}
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
          className="bg-white relative"
          style={{
            border: '1.5px solid rgba(255, 254, 254, 0.4)',
            boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
            borderRadius: '0 0 24px 24px',
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

          {/* Content: padding 44px all sides, gap 44px per Figma */}
          <div className="flex flex-col items-center py-[44px] px-[44px]" style={{ gap: '44px' }}>
            {/* Headings — gap 24px between title and subtitle per Figma */}
            <div className="flex flex-col items-center gap-[24px]">
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

            {/* Green text per Figma */}
            <p className="font-[family-name:var(--font-ibm-plex)] text-[36px] leading-[48px] font-bold text-sparko-green text-center">
              كل خطوة لها هدف ... وكل تجربة لها نتيجة
            </p>

            {/* ===== DESKTOP: Cards + Phone in HORIZONTAL layout per Figma ===== */}
            {/* Figma node 261:1743: HORIZONTAL flex, items vertically centered, 24px gap */}
            {/* Cards area takes ~80% width, Phone takes ~18% width, side by side */}
            <div className="hidden lg:flex w-full items-center gap-[24px]">
              {/* Cards area — flex row, 16px gap between cards per Figma */}
              {/* Each card: ~200px wide, padding 24px, gap 20px, border 1px rgba(0,0,0,0.24) */}
              <div className="flex gap-[16px] flex-1 min-w-0">
                {bottomFeatures.map((card, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center flex-1 min-w-0"
                    style={{
                      padding: '24px',
                      gap: '20px',
                      border: '1px solid rgba(0, 0, 0, 0.24)',
                    }}
                  >
                    {/* Icon: 80×80 per Figma */}
                    <div className="w-[80px] h-[80px] flex items-center justify-center">
                      <Image
                        src={card.icon}
                        alt={card.ar}
                        width={80}
                        height={80}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {/* Arabic text: fontSize 20, lineHeight 32, fontWeight 600 per Figma */}
                    <p className="font-[family-name:var(--font-ibm-plex)] text-[20px] leading-[32px] font-semibold text-[#2B2D2F]">
                      {card.ar.split('\n').map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < card.ar.split('\n').length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                    {/* English text: fontSize 18, lineHeight 32, fontWeight 600 per Figma */}
                    <p className="font-[family-name:var(--font-ibm-plex)] text-[18px] leading-[32px] font-semibold text-[#2B2D2F]">
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

              {/* Phone mockup — beside cards, 283×575 per Figma */}
              {/* Soft shadow for subtle elevation */}
              <div
                className="flex-shrink-0"
                style={{
                  filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))',
                }}
              >
                <Image
                  src="/phone-mockup.png"
                  alt="Sparko App"
                  width={283}
                  height={575}
                  className="h-auto object-contain"
                  style={{ width: '283px', maxHeight: '575px' }}
                />
              </div>
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
