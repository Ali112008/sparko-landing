'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative pt-[24px] lg:pt-[40px] pb-0">
      {/* Main footer card */}
      <div className="max-w-[88%] lg:max-w-[86%] mx-auto">
        <div
          className="rounded-[24px] border-2 border-white/30 overflow-hidden"
          style={{ background: 'linear-gradient(180deg, #273C65 0%, #182B51 100%)' }}
        >
          <div className="py-[40px] lg:py-[56px] px-[32px] lg:px-[80px]">
            {/* Partners Portal */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-[24px] lg:gap-[48px]">
              {/* Left: Partners Portal info */}
              <div className="flex items-center gap-[12px] lg:gap-[16px]">
                <div className="bg-[#020913] rounded-lg px-[16px] py-[8px]">
                  <p className="font-ibm-plex text-[16px] lg:text-[20px] font-semibold text-white">
                    بوابة الجهات Partners Portal
                  </p>
                </div>
              </div>

              {/* Center: Description */}
              <div className="text-center lg:text-right">
                <p className="font-ibm-plex text-[14px] lg:text-[20px] font-semibold text-white leading-[1.5]">
                  حيث يتحول التدريب الميداني إلى تجربة حقيقية
                </p>
                <p className="font-ibm-plex text-[14px] lg:text-[20px] font-semibold text-white/60 leading-[1.5]">
                  Where Field Training Becomes Real Experience
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/10 my-[24px] lg:my-[32px]" />

            {/* Saudi-born */}
            <div className="flex items-center justify-center gap-[8px]">
              <span className="text-[18px]">🇸🇦</span>
              <p className="font-ibm-plex text-[16px] lg:text-[20px] font-semibold text-white">
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
