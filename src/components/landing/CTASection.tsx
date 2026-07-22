'use client';

import Image from 'next/image';

export default function CTASection() {
  return (
    <section className="relative py-[24px] lg:py-[40px]">
      <div className="max-w-[88%] lg:max-w-[86%] mx-auto">
        {/* Container: Background + Border + Shadow */}
        <div
          className="rounded-[24px] overflow-hidden relative"
          style={{
            background: 'radial-gradient(circle at center, #20345A 0%, #0C1B3A 100%)',
            border: '1.5px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
          }}
        >
          {/* Inner content area */}
          {/* Padding: ~48px sides, ~60px top, ~55px bottom (pixel-verified) */}
          <div className="px-[48px] lg:px-[64px] pt-[60px] lg:pt-[64px] pb-[55px] lg:pb-[56px]">
            {/* Top row: two-column layout (flex justify-between in RTL) */}
            {/* In RTL: first child → right/start side, second child → left/end side */}
            <div className="flex justify-between items-start">
              {/* Start side (right in RTL): Logo + Heading + Subtitle */}
              <div className="flex flex-col" style={{ gap: '12px' }}>
                {/* Sparko. logo */}
                <Image
                  src="/logo.png"
                  alt="Sparko."
                  width={51}
                  height={24}
                  className="h-[24px] lg:h-[28px] w-auto"
                />

                {/* Heading: Arabic text */}
                <h2
                  className="font-ibm-plex text-[24px] lg:text-[28px] font-bold text-white text-start"
                  style={{ lineHeight: '36px' }}
                >
                  حيث يتحول التدريب الميداني إلى تجربة حقيقية
                </h2>

                {/* Subtitle: English text */}
                <p
                  className="font-ibm-plex text-[16px] lg:text-[20px] font-normal text-white/70 text-start"
                  style={{ lineHeight: '28px' }}
                >
                  Where Field Training Becomes Real Experience
                </p>
              </div>

              {/* End side (left in RTL): Partners Portal badge */}
              <div
                className="inline-flex items-center self-center shrink-0"
                style={{
                  padding: '8px 20px',
                  background: 'rgba(255, 255, 255, 0.10)',
                  borderRadius: '50px',
                  gap: '8px',
                }}
              >
                <span className="font-ibm-plex text-[16px] font-medium text-white">
                  بوابة الشركاء
                </span>
                <span className="font-ibm-plex text-[14px] font-normal text-white/60">
                  Partners Portal
                </span>
              </div>
            </div>

            {/* Bottom: Saudi flag + tagline (centered) */}
            {/* Gap from subtitle to bottom: ~78px (pixel-verified) */}
            <div
              className="flex items-center justify-center mt-[78px] lg:mt-[80px]"
              style={{ gap: '10px' }}
            >
              <Image
                src="/saudi-flag.png"
                alt="Saudi Arabia"
                width={16}
                height={11}
                className="h-[11px] lg:h-[13px] w-auto object-contain"
              />
              <span
                className="font-ibm-plex text-[16px] lg:text-[18px] font-medium text-white/80"
              >
                Saudi-born. Built for real impact.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
