'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative pt-8 sm:pt-10 pb-4 sm:pb-6 overflow-hidden">
      {/* White Card */}
      <div
        className="max-w-[96%] lg:max-w-[94%] mx-auto bg-white rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] overflow-hidden"
        style={{
          boxShadow:
            '0 30px 60px rgba(0, 0, 0, 0.35), 0 12px 24px rgba(0, 0, 0, 0.2)',
        }}
      >
        {/* Navbar */}
        <div className="flex items-center justify-between px-6 sm:px-8 lg:px-12 py-4 sm:py-5">
          <a href="#" className="flex items-center">
            <Image src="/logo.png" alt="Sparko" width={105} height={50} className="h-8 sm:h-10 w-auto" priority />
          </a>
          <div className="hidden md:flex items-center gap-3" dir="ltr">
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-full text-gray-600 text-xs hover:bg-gray-200 transition-colors">
              <span>🇸🇦</span>
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
            </button>
            <button className="flex items-center gap-1 px-4 py-1.5 bg-gray-100 border border-gray-200 rounded-full text-gray-700 text-xs hover:bg-gray-200 transition-colors">
              منظومة <span className="text-sparko-orange font-[family-name:var(--font-ibm-plex)] font-bold">Sparko.</span> المتكاملة
            </button>
          </div>
          <button className="md:hidden text-gray-600" aria-label="القائمة">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Hero Content */}
        <div className="px-6 sm:px-8 lg:px-12 pb-8 sm:pb-12 lg:pb-16" dir="ltr">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-0">
            {/* LEFT — Illustration */}
            <div className="w-full lg:w-[52%] flex-shrink-0 relative flex items-center justify-center">
              <Image src="/design-hero-left.png" alt="رحلة Sparko المهنية" width={636} height={900} className="w-full max-h-[420px] lg:max-h-[480px] object-contain" priority />
              <div className="absolute bottom-[2%] left-[3%] sm:left-[5%] lg:left-[4%] z-10" style={{ filter: 'drop-shadow(0 12px 28px rgba(0,0,0,0.25))' }}>
                <Image src="/testimonial-card.png" alt="تجربة مستخدم" width={200} height={193} className="w-[140px] sm:w-[170px] lg:w-[200px] h-auto" />
              </div>
            </div>

            {/* RIGHT — Text */}
            <div className="w-full lg:w-[42%] lg:pl-10 xl:pl-14 flex flex-col items-center lg:items-start" dir="rtl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-100 rounded-full mb-4">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                <span className="font-[family-name:var(--font-tajawal)] text-[11px] sm:text-xs text-gray-600 font-medium">نسبة قبول عالية</span>
              </div>
              <h1 className="font-[family-name:var(--font-tajawal)] text-xl sm:text-2xl lg:text-[1.65rem] xl:text-[1.9rem] font-extrabold leading-[1.35] mb-3 text-center lg:text-right">
                <span className="text-[#0B1A3E]">قصة حقيقية من </span>
                <span className="text-sparko-orange">التدريب الميداني</span>
                <br />
                <span className="text-[#0B1A3E]">إلى </span>
                <span className="text-sparko-orange">عرض وظيفي</span>
              </h1>
              <p className="font-[family-name:var(--font-tajawal)] text-sm sm:text-base lg:text-[15px] text-gray-400 font-medium mb-6 text-center lg:text-right whitespace-nowrap">
                تجربة تعيشها ... ونتيجة تشوفها
              </p>
              <div className="mb-5">
                <a href="#contact" className="inline-flex flex-col items-center justify-center gap-[2px] px-8 sm:px-10 py-3 sm:py-3.5 bg-sparko-orange text-white rounded-full font-[family-name:var(--font-tajawal)] font-bold text-base sm:text-[17px] hover:bg-[#E64D00] transition-all duration-300 shadow-lg shadow-sparko-orange/25">
                  <span>ابدأ رحلتك الآن</span>
                  <span className="font-[family-name:var(--font-ibm-plex)] text-[9px] sm:text-[10px] font-normal opacity-75">Start your journey now</span>
                </a>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <button className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-[#253A63] text-white rounded-xl text-xs hover:bg-[#2F4A7A] transition-colors">
                  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 16.56 2.93 11.3 4.7 7.72C5.57 5.94 7.36 4.86 9.28 4.84C10.56 4.81 11.78 5.72 12.57 5.72C13.36 5.72 14.85 4.62 16.4 4.8C17.07 4.83 18.89 5.08 20.07 6.78C19.96 6.85 17.62 8.24 17.65 11.1C17.69 14.52 20.62 15.63 20.65 15.64C20.62 15.72 20.17 17.28 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" /></svg>
                  <div className="text-right leading-none"><div className="text-[9px] text-white/70">Download on the</div><div className="font-semibold text-[12px] mt-0.5">App Store</div></div>
                </button>
                <button className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-[#253A63] text-white rounded-xl text-xs hover:bg-[#2F4A7A] transition-colors">
                  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5Z" fill="#4CAF50"/>
                    <path d="M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12Z" fill="#F44336"/>
                    <path d="M20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.5 12.92 20.16 13.19L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81Z" fill="#FFC107"/>
                    <path d="M6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z" fill="#2196F3"/>
                  </svg>
                  <div className="text-right leading-none"><div className="text-[9px] text-white/70">GET IT ON</div><div className="font-semibold text-[12px] mt-0.5">Google Play</div></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
