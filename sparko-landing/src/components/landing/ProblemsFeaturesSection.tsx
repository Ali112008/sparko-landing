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
  { icon: '/icon-training.png', ar: 'تدريب ميداني منظم', en: 'Structured Field Training' },
  { icon: '/icon-tasks.png', ar: 'تطبيق واقعي', en: 'Practical Tasks' },
  { icon: '/icon-rate.png', ar: 'تقييم أداء يومي', en: 'Daily evaluation' },
  { icon: '/icon-user-follow.png', ar: 'إشراف ومتابعة', en: 'Supervision & Follow-up' },
  { icon: '/icon-diploma.png', ar: 'تقرير مهني موثق', en: 'Verified Professional Report' },
  { icon: '/icon-verified.png', ar: 'توثيق تجربة احترافية', en: 'Professional Experience Documentation' },
];

export default function ProblemsFeaturesSection() {
  return (
    <section className="relative py-6 sm:py-10 lg:py-14">
      <div className="max-w-[88%] lg:max-w-[86%] mx-auto">
        {/* Single Large Rounded Container */}
        <div className="rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] overflow-hidden shadow-2xl border-2 border-white/20">

          {/* ========== PART 1 — DARK BLUE TOP PANEL ========== */}
          <div
            className="flex flex-col items-center py-[44px] px-[44px] gap-[44px]"
            style={{ background: 'linear-gradient(180deg, #273C65 0%, #182B51 100%)' }}
          >
            {/* Heading + Subtitle */}
            <div className="flex flex-col items-center gap-[24px]">
              <h2 className="font-[family-name:var(--font-tajawal)] text-[40px] leading-[48px] font-bold text-white text-center">
                أغلب التجارب تمر بدون أثر
              </h2>
              <p className="text-white/40 font-[family-name:var(--font-ibm-plex)] text-[24px] leading-[28px] font-normal text-center">
                Most training experiences pass without impact
              </p>
            </div>

            {/* 5 icons row with vertical dividers */}
            <div className="flex items-stretch justify-center">
              {topFeatures.map((item, index) => (
                <div key={index} className="flex items-center">
                  {index > 0 && (
                    <div
                      className="w-px bg-white/15 flex-shrink-0"
                      style={{ height: '148.5px', marginLeft: '32px', marginRight: '32px' }}
                    />
                  )}
                  <div className="flex flex-col items-center text-center" style={{ gap: '16px' }}>
                    <div className="w-[80px] h-[80px] flex items-center justify-center">
                      <Image
                        src={item.icon}
                        alt={item.label}
                        width={80}
                        height={80}
                        className="w-full h-full object-contain brightness-0 invert"
                      />
                    </div>
                    <p className="font-[family-name:var(--font-tajawal)] text-[20px] leading-[32px] font-semibold text-white">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ========== PART 2 — WHITE BOTTOM PANEL ========== */}
          <div className="bg-white flex flex-col items-center py-[44px] px-[44px] gap-[44px] relative">
            {/* Headings */}
            <div className="flex flex-col items-center gap-[24px]">
              <h2 className="font-[family-name:var(--font-tajawal)] text-[40px] leading-[48px] font-bold text-sparko-orange text-center">
                هنا كل شيء محسوب
              </h2>
              <p className="text-[#2B2D2F] font-[family-name:var(--font-ibm-plex)] text-[24px] leading-[28px] font-normal text-center">
                Here, everything is calculated
              </p>
            </div>
            <p className="font-[family-name:var(--font-tajawal)] text-[36px] leading-[48px] font-bold text-sparko-green text-center">
              كل خطوة لها هدف ... وكل تجربة لها نتيجة
            </p>

            {/* ===== DESKTOP: Cards + Phone ===== */}
            <div className="hidden lg:flex items-start gap-[24px] w-full">
              {/* Cards row */}
              <div className="flex gap-[16px] flex-1">
                {bottomFeatures.map((card, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 flex flex-col items-center text-center justify-center"
                    style={{
                      boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                      borderRadius: '24px',
                      padding: '24px',
                      gap: '16px',
                      flex: '1 1 0%',
                      minWidth: 0,
                    }}
                  >
                    <div className="w-[80px] h-[80px] flex items-center justify-center">
                      <Image
                        src={card.icon}
                        alt={card.ar}
                        width={80}
                        height={80}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="font-[family-name:var(--font-tajawal)] text-[20px] leading-[32px] font-semibold text-[#0B1A3E]">
                      {card.ar}
                    </p>
                    <p className="text-gray-400 font-[family-name:var(--font-ibm-plex)] text-[18px] leading-[32px] font-semibold">
                      {card.en}
                    </p>
                  </div>
                ))}
              </div>

              {/* Phone — actual image 352×410, displayed to match Figma visual */}
              <div className="flex-shrink-0 relative" style={{ marginTop: '-200px' }}>
                <Image
                  src="/phone-mockup.png"
                  alt="Sparko App"
                  width={352}
                  height={410}
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
                    className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center min-h-[180px] sm:min-h-[200px] justify-center"
                    style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-3 sm:mb-4">
                      <Image src={card.icon} alt={card.ar} width={56} height={56} className="w-full h-full object-contain" />
                    </div>
                    <p className="font-[family-name:var(--font-tajawal)] text-xs sm:text-sm font-semibold text-[#0B1A3E] leading-snug mb-1.5">{card.ar}</p>
                    <p className="text-gray-400 font-[family-name:var(--font-ibm-plex)] text-[9px] sm:text-[10px] leading-snug font-semibold">{card.en}</p>
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
