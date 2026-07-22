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
      <div className="max-w-[88%] lg:max-w-[86%] mx-auto">
        {/* ========== PART 1 — DARK BLUE TOP PANEL ========== */}
        <div
          className="overflow-hidden relative"
          style={{
            background: 'linear-gradient(180deg, #273C65 0%, #182B51 100%)',
            border: '1.5px solid rgba(255, 254, 254, 0.4)',
            boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
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

          {/* Figma: Container - VERTICAL, spacing:44, CENTER */}
          <div className="flex flex-col items-center justify-center py-[44px] px-[44px] gap-[44px]">
            {/* Figma: Heading + Subtitle, VERTICAL, spacing:24, CENTER */}
            <div className="flex flex-col items-center gap-[24px]">
              {/* Figma: 40px w700 lh:48px white, IBM Plex Sans Arabic */}
              <h2 className="font-[family-name:var(--font-ibm-plex)] text-[40px] leading-[48px] font-bold text-white text-center">
                أغلب التجارب تمر بدون أثر
              </h2>
              {/* Figma: 24px w400 lh:28px white, letterSpacing: 0.16px */}
              <p
                className="font-[family-name:var(--font-ibm-plex)] text-[24px] leading-[28px] font-normal text-white text-center"
                style={{ letterSpacing: '0.16px' }}
              >
                Most training experiences pass without impact
              </p>
            </div>

            {/* Figma: 5 icons row - HORIZONTAL, spacing:64, SPACE_BETWEEN, CENTER */}
            <div className="flex items-stretch justify-center">
              {topFeatures.map((item, index) => (
                <div key={index} className="flex items-center">
                  {/* Figma: Line - rgba(255,255,255,0.24) */}
                  {index > 0 && (
                    <div
                      className="w-px flex-shrink-0"
                      style={{
                        height: '148.5px',
                        marginLeft: '32px',
                        marginRight: '32px',
                        background: 'rgba(255, 255, 255, 0.24)',
                      }}
                    />
                  )}
                  {/* Figma: Container - VERTICAL, spacing:20, CENTER, padding:24 */}
                  <div className="flex flex-col items-center text-center" style={{ gap: '20px' }}>
                    {/* Figma: Icon 80x80 */}
                    <div className="w-[80px] h-[80px] flex items-center justify-center">
                      <Image
                        src={item.icon}
                        alt={item.label}
                        width={80}
                        height={80}
                        className="w-full h-full object-contain brightness-0 invert"
                      />
                    </div>
                    {/* Figma: 20px w600 lh:32px white */}
                    <p className="font-[family-name:var(--font-ibm-plex)] text-[20px] leading-[32px] font-semibold text-white">
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
          className="bg-white overflow-hidden relative"
          style={{
            border: '1.5px solid rgba(255, 254, 254, 0.4)',
            boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
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

          {/* Figma: VERTICAL, spacing:44, CENTER */}
          <div className="flex flex-col items-center py-[44px] px-[44px] gap-[44px]">
            {/* Figma: Container - VERTICAL, spacing:24 */}
            <div className="flex flex-col items-center gap-[24px]">
              {/* Figma: 40px w700 lh:48px orange, IBM Plex Sans Arabic */}
              <h2 className="font-[family-name:var(--font-ibm-plex)] text-[40px] leading-[48px] font-bold text-sparko-orange text-center">
                هنا كل شيء محسوب
              </h2>
              {/* Figma: 24px w400 lh:28px #2B2D2F, letterSpacing: 0.16px */}
              <p
                className="font-[family-name:var(--font-ibm-plex)] text-[24px] leading-[28px] font-normal text-[#2B2D2F] text-center"
                style={{ letterSpacing: '0.16px' }}
              >
                Here, everything is calculated
              </p>
            </div>

            {/* Figma: 36px w700 lh:48px green (#00D084), IBM Plex Sans Arabic */}
            <p className="font-[family-name:var(--font-ibm-plex)] text-[36px] leading-[48px] font-bold text-sparko-green text-center">
              كل خطوة لها هدف ... وكل تجربة لها نتيجة
            </p>

            {/* ===== DESKTOP: Cards + Phone ===== */}
            {/* Figma: Frame 2121453275, HORIZONTAL, spacing:24 */}
            <div className="hidden lg:flex items-start gap-[24px] w-full">
              {/* Figma: Frame 2121453273 - Cards row, HORIZONTAL, spacing:24, paddingTop:60, cA:CENTER */}
              <div className="flex flex-1" style={{ paddingTop: '60px' }}>
                {/* Figma: Frame 1686552644 - 6 Cards, HORIZONTAL, spacing:16 */}
                <div className="flex gap-[16px] flex-1">
                  {bottomFeatures.map((card, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center"
                      style={{
                        borderRadius: '24px',
                        padding: '24px',
                        gap: '20px',
                        flex: '1 1 0%',
                        minWidth: 0,
                        border: '1px solid rgba(0, 0, 0, 0.24)',
                      }}
                    >
                      {/* Figma: Icon 80x80, orange fill */}
                      <div className="w-[80px] h-[80px] flex items-center justify-center">
                        <Image
                          src={card.icon}
                          alt={card.ar}
                          width={80}
                          height={80}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      {/* Figma: 20px w600 lh:32px #2B2D2F */}
                      <p className="font-[family-name:var(--font-ibm-plex)] text-[20px] leading-[32px] font-semibold text-[#2B2D2F]">
                        {card.ar.split('\n').map((line, i) => (
                          <span key={i}>
                            {line}
                            {i < card.ar.split('\n').length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                      {/* Figma: 18px w600 lh:32px #2B2D2F */}
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
              </div>

              {/* Figma: Group 1000004725 - Phone mockup, 283x575, aligned to top */}
              <div className="flex-shrink-0 relative">
                <Image
                  src="/phone-mockup-figma.png"
                  alt="Sparko App"
                  width={283}
                  height={546}
                  className="h-auto object-contain"
                  style={{ width: '283px' }}
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
