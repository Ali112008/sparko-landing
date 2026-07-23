'use client';

import Image from 'next/image';

export default function CTASection() {
  return (
    <section className="relative py-[24px] lg:py-[40px]">
      <div className="max-w-[88%] lg:max-w-[86%] mx-auto">
        {/* Background+Border+Shadow — matches Figma pattern from other sections */}
        <div
          className="rounded-[24px] overflow-hidden relative"
          style={{
            background: 'radial-gradient(circle at center, #21355A 0%, #0C1B3A 100%)',
            border: '1.5px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
          }}
        >
          {/* Content container */}
          {/* Figma: VERTICAL flex, CENTER alignment, gap 24px */}
          {/* VLM verified: CTA has NO blue glow line unlike Stats/Quote sections */}
          <div className="flex flex-col items-center py-[44px] lg:py-[64px] px-[32px] lg:px-[80px]" style={{ gap: '24px' }}>
            {/* Pill/Badge: منظومة Sparko. المتكاملة */}
            {/* Figma: HORIZONTAL flex, CENTER, gap 8px, bg white/10, rounded-full */}
            <div className="inline-flex items-center" style={{ gap: '8px', padding: '6px 16px', background: 'rgba(255, 255, 255, 0.10)', borderRadius: '50px' }}>
              {/* Figma: 16px w500 white, IBM Plex Sans Arabic */}
              <span className="font-ibm-plex text-[14px] lg:text-[16px] font-medium text-white">
                منظومة
              </span>
              <Image
                src="/logo.png"
                alt="Sparko."
                width={51}
                height={24}
                className="h-[20px] lg:h-[24px] w-auto"
              />
              <span className="font-ibm-plex text-[14px] lg:text-[16px] font-medium text-white">
                المتكاملة
              </span>
            </div>

            {/* Heading */}
            {/* Figma: 40px w700 lh48px white, IBM Plex Sans Arabic, textAlign CENTER */}
            <h2 className="font-ibm-plex text-[24px] lg:text-[40px] font-bold text-white text-center"
              style={{ lineHeight: '48px' }}>
              جاهز أنت الآن تبني قصة نجاحك؟
            </h2>

            {/* Subtitle */}
            {/* Figma: 24px w400 lh28px white 70% opacity, letterSpacing 0.16px, IBM Plex Sans Arabic */}
            <p className="font-ibm-plex text-[16px] lg:text-[24px] font-normal text-white/70 text-center"
              style={{ lineHeight: '28px', letterSpacing: '0.16px' }}>
              تجربة تعيشها ... و نتيجة تشوفها
            </p>

            {/* CTA Button */}
            {/* Figma: bg orange, rounded-full, cornerRadius 40 */}
            <a
              href="#contact"
              className="inline-flex flex-col items-center justify-center font-ibm-plex"
              style={{
                gap: '2px',
                padding: '16px 40px',
                background: '#FF5500',
                borderRadius: '40px',
                color: '#FFFFFF',
                fontSize: '20px',
                fontWeight: 500,
                boxShadow: '0px 10px 15px -3px rgba(255, 85, 0, 0.25)',
              }}
            >
              <span>ابدأ رحلتك الآن</span>
              <span style={{ fontSize: '10px', fontWeight: 400, opacity: 0.75 }}>Start your journey now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
