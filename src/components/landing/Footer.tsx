'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative pt-[24px] lg:pt-[40px] pb-0">
      {/* Main footer card */}
      <div className="max-w-[88%] lg:max-w-[86%] mx-auto">
        <div
          className="rounded-[24px] overflow-hidden relative"
          style={{
            background: 'radial-gradient(circle at center, #20345A 0%, #0C1B3A 100%)',
            border: '1.5px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
          }}
        >
          <div className="py-[60px] lg:py-[64px] px-[48px] lg:px-[64px]">
            {/* Top row: two-column layout */}
            {/* In RTL: first child → right/start side, second child → left/end side */}
            <div className="flex justify-between items-center">
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

                {/* Heading: Arabic */}
                <h2
                  className="font-ibm-plex text-[24px] lg:text-[28px] font-bold text-white text-start"
                  style={{ lineHeight: '36px' }}
                >
                  حيث يتحول التدريب الميداني إلى تجربة حقيقية
                </h2>

                {/* Subtitle: English */}
                <p
                  className="font-ibm-plex text-[16px] lg:text-[20px] font-normal text-white/70 text-start"
                  style={{ lineHeight: '28px' }}
                >
                  Where Field Training Becomes Real Experience
                </p>
              </div>

              {/* End side (left in RTL): Partners Portal badge */}
              <div
                className="inline-flex items-center shrink-0"
                style={{
                  padding: '8px 20px',
                  background: 'rgba(255, 255, 255, 0.10)',
                  borderRadius: '50px',
                  gap: '8px',
                }}
              >
                <span className="font-ibm-plex text-[16px] font-medium text-white">
                  بوابة الجهات
                </span>
                <span className="font-ibm-plex text-[14px] font-normal text-white/60">
                  Partners Portal
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/[0.12] my-[24px] lg:my-[32px]" />

            {/* Saudi-born */}
            <div className="flex items-center justify-center" style={{ gap: '10px' }}>
              <Image
                src="/saudi-flag.png"
                alt="Saudi Arabia"
                width={16}
                height={11}
                className="h-[11px] lg:h-[13px] w-auto object-contain"
              />
              <p className="font-ibm-plex text-[16px] lg:text-[18px] font-medium text-white/80">
                Saudi-born. Built for real impact.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar - outside the card */}
      <div className="max-w-[88%] lg:max-w-[86%] mx-auto mt-[16px] lg:mt-[24px]">
        <div className="flex flex-col items-center gap-[12px] py-[16px] lg:py-[24px]">
          <div className="flex items-center gap-[24px] lg:gap-[40px]">
            <a href="#" className="font-ibm-plex text-[14px] lg:text-[16px] font-medium text-white/70 hover:text-white transition-colors">
              سياسة الخصوصية و حماية البيانات
            </a>
            <a href="#" className="font-ibm-plex text-[14px] lg:text-[16px] font-medium text-white/70 hover:text-white transition-colors">
              الشروط و الأحكام و سياسة الاستخدام
            </a>
          </div>
          <p className="font-ibm-plex text-[14px] lg:text-[16px] font-medium text-white/50">
            © Sparko جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
}
