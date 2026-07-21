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
          <div className="bg-white px-8 sm:px-14 lg:px-24 pt-8 sm:pt-12 lg:pt-14 pb-10 sm:pb-14 lg:pb-16 relative overflow-hidden">
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

            {/* 6 Feature Cards + Phone Mockup */}
            <div className="flex items-start justify-center gap-4 sm:gap-6 lg:gap-7 relative">
              {/* Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 lg:gap-6 flex-1">
                {bottomFeatures.map((card, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 lg:p-7 flex flex-col items-center text-center min-h-[220px] sm:min-h-[260px] lg:min-h-[340px] justify-center"
                    style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
                  >
                    {/* Orange Icon */}
                    <div className="w-[72px] h-[72px] sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex items-center justify-center mb-4 sm:mb-5 lg:mb-6">
                      <Image
                        src={card.icon}
                        alt={card.ar}
                        width={80}
                        height={80}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {/* Arabic Title */}
                    <p className="font-[family-name:var(--font-tajawal)] text-sm sm:text-base lg:text-lg font-bold text-[#0B1A3E] leading-snug mb-2">
                      {card.ar}
                    </p>
                    {/* English Subtitle */}
                    <p className="text-gray-400 font-[family-name:var(--font-ibm-plex)] text-[10px] sm:text-xs lg:text-sm leading-snug">
                      {card.en}
                    </p>
                  </div>
                ))}
              </div>

              {/* Phone Mockup — right side, overlapping, positioned higher */}
              <div className="hidden lg:block flex-shrink-0 relative -mr-6 xl:-mr-10 -mt-4">
                <Image
                  src="/phone-mockup.png"
                  alt="Sparko App"
                  width={440}
                  height={880}
                  className="w-[340px] lg:w-[380px] xl:w-[420px] h-auto object-contain"
                />
              </div>
            </div>

            {/* Phone on mobile — centered below cards */}
            <div className="lg:hidden flex justify-center mt-8">
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
    </section>
  );
}
