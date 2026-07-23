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
            background: 'radial-gradient(circle at center, #21355A 0%, #0C1B3A 100%)',
            border: '1.5px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
          }}
        >
          {/* Top content area — generous spacing */}
          <div className="py-[56px] lg:py-[80px] px-[48px] lg:px-[64px]">
            {/* Top row: two-column layout */}
            {/* In RTL: first child → right/start side, second child → left/end side */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-[24px] lg:gap-[0px]">
              {/* Start side (right in RTL): Logo + Brand Message */}
              <div className="flex flex-col items-start lg:items-start" style={{ gap: '16px' }}>
                {/* Sparko. white logo — top-right of the section */}
                <Image
                  src="/sparko-logo-white.png"
                  alt="Sparko."
                  width={120}
                  height={57}
                  className="h-[36px] lg:h-[44px] w-auto"
                  priority
                />

                {/* Arabic heading — right-aligned */}
                <p
                  className="font-ibm-plex text-[20px] lg:text-[28px] font-bold text-white text-start"
                  style={{ lineHeight: '1.4' }}
                >
                  حيث يتحول التدريب الميداني إلى تجربة حقيقية
                </p>

                {/* English subtitle — right-aligned */}
                <p
                  className="font-ibm-plex text-[14px] lg:text-[18px] font-medium text-white/60 text-start"
                  style={{ lineHeight: '1.4' }}
                >
                  Where Field Training Becomes Real Experience
                </p>
              </div>

              {/* End side (left in RTL): Partners Portal label */}
              <div
                className="inline-flex items-center shrink-0 self-start lg:self-center"
                style={{
                  padding: '8px 20px',
                  background: 'rgba(255, 255, 255, 0.10)',
                  borderRadius: '50px',
                  gap: '8px',
                }}
              >
                <span className="font-ibm-plex text-[16px] lg:text-[18px] font-semibold text-white">
                  بوابة الجهات
                </span>
                <span className="font-ibm-plex text-[14px] lg:text-[16px] font-normal text-white/60">
                  Partners Portal
                </span>
              </div>
            </div>

            {/* Thin horizontal divider line */}
            <div
              className="my-[32px] lg:my-[40px]"
              style={{
                borderTop: '1px solid rgba(255, 255, 255, 0.12)',
              }}
            />

            {/* Bottom: Saudi-born tagline — centered */}
            <div className="flex items-center justify-center" style={{ gap: '8px' }}>
              <span className="text-[18px]">🇸🇦</span>
              <p className="font-ibm-plex text-[16px] lg:text-[18px] font-medium text-white/80">
                Saudi-born. Built for real impact.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar — outside the card */}
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
