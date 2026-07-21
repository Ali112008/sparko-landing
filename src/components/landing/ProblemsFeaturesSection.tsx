'use client';

import Image from 'next/image';

const topFeatures = [
  { icon: '/icon-close.png', label: 'بدون توجيه واضح' },
  { icon: '/icon-star.png', label: 'بدون تقييم حقيقي' },
  { icon: '/icon-collaborate.png', label: 'بدون متابعة فعالة' },
  { icon: '/icon-file.png', label: 'بدون تقرير موثق' },
  { icon: '/icon-aiming.png', label: 'بدون نتيجة ملموسة' },
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
      <div className="max-w-[95%] lg:max-w-[93%] mx-auto">
        {/* Single Large Rounded Container */}
        <div className="rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] overflow-hidden shadow-2xl border-2 border-white/20">

          {/* ========== PART 1 — DARK BLUE TOP PANEL ========== */}
          <div
            className="px-8 sm:px-14 lg:px-24 pt-10 sm:pt-14 lg:pt-16 pb-8 sm:pb-10 lg:pb-12"
            style={{ background: 'linear-gradient(180deg, #273C65 0%, #182B51 100%)' }}
          >
            {/* Heading */}
            <h2 className="font-[family-name:var(--font-tajawal)] text-3xl sm:text-5xl lg:text-6xl font-bold text-white text-center leading-tight mb-3">
              أغلب التجارب تمر بدون أثر
            </h2>
            {/* Subtitle */}
            <p className="text-white/40 font-[family-name:var(--font-ibm-plex)] text-base sm:text-lg lg:text-xl text-center mb-8 sm:mb-10 lg:mb-12">
              Most training experiences pass without impact
            </p>

            {/* 5 Feature Items Row */}
            <div className="flex items-start justify-center gap-0">
              {topFeatures.map((item, index) => (
                <div key={index} className="flex items-start">
                  {/* Vertical Divider */}
                  {index > 0 && (
                    <div className="w-px h-28 sm:h-36 lg:h-44 bg-white/15 mx-5 sm:mx-8 lg:mx-12 flex-shrink-0 self-center" />
                  )}
                  {/* Feature Item */}
                  <div className="flex flex-col items-center text-center min-w-[120px] sm:min-w-[160px] lg:min-w-[200px]">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex items-center justify-center mb-4 sm:mb-5">
                      <Image
                        src={item.icon}
                        alt={item.label}
                        width={80}
                        height={80}
                        className="w-full h-full object-contain brightness-0 invert"
                      />
                    </div>
                    <p className="font-[family-name:var(--font-tajawal)] text-base sm:text-lg lg:text-xl font-bold text-white leading-tight">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ========== PART 2 — WHITE BOTTOM PANEL ========== */}
          <div className="bg-white px-8 sm:px-14 lg:px-24 pt-8 sm:pt-12 lg:pt-14 pb-10 sm:pb-14 lg:pb-16 relative">
            {/* Orange Heading */}
            <h2 className="font-[family-name:var(--font-tajawal)] text-3xl sm:text-5xl lg:text-6xl font-bold text-sparko-orange text-center leading-tight mb-2">
              هنا كل شيء محسوب
            </h2>
            {/* English Subtitle */}
            <p className="text-gray-400 font-[family-name:var(--font-ibm-plex)] text-base sm:text-lg lg:text-xl text-center mb-2">
              Here, everything is calculated
            </p>
            {/* Green Sentence */}
            <p className="font-[family-name:var(--font-tajawal)] text-lg sm:text-xl lg:text-2xl font-bold text-sparko-green text-center mb-8 sm:mb-10 lg:mb-12">
              كل خطوة لها هدف ... وكل تجربة لها نتيجة
            </p>

            {/* ===== DESKTOP: Cards + Phone (absolute positioned) ===== */}
            <div className="hidden lg:block relative">
              {/* Phone Mockup — absolute, LEFT side in RTL (end of row), extends from top of section */}
              <div className="absolute left-0 top-[-80px] xl:top-[-100px] z-10">
                <Image
                  src="/phone-mockup.png"
                  alt="Sparko App"
                  width={440}
                  height={880}
                  className="w-[340px] xl:w-[380px] h-auto object-contain"
                />
              </div>

              {/* Cards Grid — flows from RIGHT in RTL, leaves space on left for phone */}
              <div className="grid grid-cols-6 gap-5 xl:gap-6 mr-0 ml-[320px] xl:ml-[360px]">
                {bottomFeatures.map((card, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-2xl p-5 xl:p-6 flex flex-col items-center text-center min-h-[320px] xl:min-h-[360px] justify-center"
                    style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
                  >
                    {/* Orange Icon */}
                    <div className="w-20 h-20 xl:w-24 xl:h-24 flex items-center justify-center mb-4 xl:mb-5">
                      <Image
                        src={card.icon}
                        alt={card.ar}
                        width={80}
                        height={80}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {/* Arabic Title */}
                    <p className="font-[family-name:var(--font-tajawal)] text-sm xl:text-base font-bold text-[#0B1A3E] leading-snug mb-2">
                      {card.ar}
                    </p>
                    {/* English Subtitle */}
                    <p className="text-gray-400 font-[family-name:var(--font-ibm-plex)] text-[10px] xl:text-xs leading-snug">
                      {card.en}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ===== MOBILE/TABLET: Cards grid + phone below ===== */}
            <div className="lg:hidden">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
                {bottomFeatures.map((card, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center min-h-[180px] sm:min-h-[220px] justify-center"
                    style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
                  >
                    {/* Orange Icon */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-3 sm:mb-4">
                      <Image
                        src={card.icon}
                        alt={card.ar}
                        width={56}
                        height={56}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {/* Arabic Title */}
                    <p className="font-[family-name:var(--font-tajawal)] text-xs sm:text-sm font-bold text-[#0B1A3E] leading-snug mb-1.5">
                      {card.ar}
                    </p>
                    {/* English Subtitle */}
                    <p className="text-gray-400 font-[family-name:var(--font-ibm-plex)] text-[9px] sm:text-[10px] leading-snug">
                      {card.en}
                    </p>
                  </div>
                ))}
              </div>

              {/* Phone on mobile — centered below cards */}
              <div className="flex justify-center mt-8">
                <Image
                  src="/phone-mockup.png"
                  alt="Sparko App"
                  width={280}
                  height={560}
                  className="w-[240px] sm:w-[280px] h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
