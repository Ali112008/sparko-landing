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
            className="px-6 sm:px-10 lg:px-20 pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-14 lg:pb-16"
            style={{ background: 'linear-gradient(180deg, #273C65 0%, #182B51 100%)' }}
          >
            {/* Heading */}
            <h2 className="font-[family-name:var(--font-tajawal)] text-2xl sm:text-4xl lg:text-5xl font-bold text-white text-center leading-tight mb-3">
              أغلب التجارب تمر بدون أثر
            </h2>
            {/* Subtitle */}
            <p className="text-white/40 font-[family-name:var(--font-ibm-plex)] text-sm sm:text-base lg:text-lg text-center mb-10 sm:mb-14 lg:mb-16">
              Most training experiences pass without impact
            </p>

            {/* 5 Feature Items Row */}
            <div className="flex items-start justify-center gap-0">
              {topFeatures.map((item, index) => (
                <div key={index} className="flex items-start">
                  {/* Vertical Divider */}
                  {index > 0 && (
                    <div className="w-px h-24 sm:h-28 lg:h-32 bg-white/15 mx-4 sm:mx-6 lg:mx-10 flex-shrink-0 self-center" />
                  )}
                  {/* Feature Item */}
                  <div className="flex flex-col items-center text-center min-w-[100px] sm:min-w-[130px] lg:min-w-[170px]">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center mb-4 sm:mb-5">
                      <Image
                        src={item.icon}
                        alt={item.label}
                        width={64}
                        height={64}
                        className="w-full h-full object-contain brightness-0 invert"
                      />
                    </div>
                    <p className="font-[family-name:var(--font-tajawal)] text-sm sm:text-base lg:text-lg font-bold text-white leading-tight">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ========== PART 2 — WHITE BOTTOM PANEL ========== */}
          <div className="bg-white px-6 sm:px-10 lg:px-20 pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 relative overflow-hidden">
            {/* Orange Heading */}
            <h2 className="font-[family-name:var(--font-tajawal)] text-2xl sm:text-4xl lg:text-5xl font-bold text-sparko-orange text-center leading-tight mb-3">
              هنا كل شيء محسوب
            </h2>
            {/* English Subtitle */}
            <p className="text-gray-400 font-[family-name:var(--font-ibm-plex)] text-sm sm:text-base lg:text-lg text-center mb-3">
              Here, everything is calculated
            </p>
            {/* Green Sentence */}
            <p className="font-[family-name:var(--font-tajawal)] text-base sm:text-lg lg:text-xl font-bold text-sparko-green text-center mb-10 sm:mb-14 lg:mb-16">
              كل خطوة لها هدف ... وكل تجربة لها نتيجة
            </p>

            {/* 6 Feature Cards + Phone Mockup */}
            <div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-7 relative">
              {/* Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-5 lg:gap-6 flex-1">
                {bottomFeatures.map((card, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-2xl sm:rounded-2xl lg:rounded-2xl p-4 sm:p-5 lg:p-6 flex flex-col items-center text-center min-h-[160px] sm:min-h-[180px] lg:min-h-[220px] justify-center"
                    style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
                  >
                    {/* Orange Icon */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center mb-3 sm:mb-4">
                      <Image
                        src={card.icon}
                        alt={card.ar}
                        width={56}
                        height={56}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {/* Arabic Title */}
                    <p className="font-[family-name:var(--font-tajawal)] text-xs sm:text-sm lg:text-base font-bold text-[#0B1A3E] leading-tight mb-1.5">
                      {card.ar}
                    </p>
                    {/* English Subtitle */}
                    <p className="text-gray-400 font-[family-name:var(--font-ibm-plex)] text-[9px] sm:text-[10px] lg:text-xs leading-tight">
                      {card.en}
                    </p>
                  </div>
                ))}
              </div>

              {/* Phone Mockup — right side, large and overlapping */}
              <div className="hidden lg:block flex-shrink-0 relative -mr-6 xl:-mr-10">
                <Image
                  src="/phone-mockup.png"
                  alt="Sparko App"
                  width={340}
                  height={680}
                  className="w-[280px] lg:w-[320px] xl:w-[360px] h-auto object-contain"
                />
              </div>
            </div>

            {/* Phone on mobile — centered below cards */}
            <div className="lg:hidden flex justify-center mt-8">
              <Image
                src="/phone-mockup.png"
                alt="Sparko App"
                width={240}
                height={480}
                className="w-[200px] sm:w-[240px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
