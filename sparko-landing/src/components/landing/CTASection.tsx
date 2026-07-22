'use client';

import Image from 'next/image';

export default function CTASection() {
  return (
    <section className="relative py-[24px] lg:py-[40px]">
      <div className="max-w-[88%] lg:max-w-[86%] mx-auto">
        <div
          className="rounded-[24px] border-2 border-white/30 overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, #16284D 0%, #0F1D38 100%)',
          }}
        >
          <div className="flex flex-col items-center py-[48px] lg:py-[64px] px-[32px] lg:px-[80px]">
            {/* Pill: منظومة Sparko. المتكاملة - Figma: 16px w500 */}
            <div className="inline-flex items-center gap-[8px] px-[16px] py-[6px] bg-white/10 rounded-full mb-[24px]">
              <span className="font-[family-name:var(--font-ibm-plex)] text-[14px] lg:text-[16px] font-medium text-white">
                منظومة
              </span>
              <Image
                src="/logo.png"
                alt="Sparko."
                width={51}
                height={24}
                className="h-[20px] lg:h-[24px] w-auto"
              />
              <span className="font-[family-name:var(--font-ibm-plex)] text-[14px] lg:text-[16px] font-medium text-white">
                المتكاملة
              </span>
            </div>

            {/* Heading - Figma: 40px w700 */}
            <h2 className="font-[family-name:var(--font-ibm-plex)] text-[24px] sm:text-[32px] lg:text-[40px] font-bold leading-[1.2] text-white text-center mb-[16px]">
              جاهز أنت الآن تبني قصة نجاحك؟
            </h2>

            {/* Subtitle - Figma: 24px w400 */}
            <p className="font-[family-name:var(--font-ibm-plex)] text-[16px] sm:text-[20px] lg:text-[24px] font-normal leading-[1.4] text-white/70 text-center mb-[32px]">
              تجربة تعيشها ... و نتيجة تشوفها
            </p>

            {/* CTA Button - Figma: bg orange cr:40 */}
            <a
              href="#contact"
              className="inline-flex flex-col items-center justify-center gap-[2px] px-[40px] py-[16px] bg-sparko-orange text-white rounded-full font-[family-name:var(--font-tajawal)] font-medium text-[20px] hover:bg-[#E64D00] transition-all duration-300 shadow-lg shadow-sparko-orange/25"
            >
              <span>ابدأ رحلتك الآن</span>
              <span className="font-[family-name:var(--font-ibm-plex)] text-[10px] font-normal opacity-75">Start your journey now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
