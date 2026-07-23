'use client';

import Image from 'next/image';
import { useLang } from '@/context/LanguageContext';

export default function HeroSection() {
  const { lang, toggle } = useLang();

  const t = (ar: string, en: string) => lang === 'ar' ? ar : en;

  return (
    <section className="relative pt-[32px] pb-[16px] lg:pt-[40px] lg:pb-[24px] overflow-hidden">
      {/* White Card */}
      <div
        className="max-w-[96%] lg:max-w-[94%] mx-auto bg-white rounded-[24px] overflow-hidden"
        style={{
          boxShadow:
            '0 30px 60px rgba(0, 0, 0, 0.35), 0 12px 24px rgba(0, 0, 0, 0.2)',
        }}
      >
        {/* Navbar */}
        <div className="flex items-center justify-between px-[24px] lg:px-[100px] py-[20px] lg:py-[32px]">
          <a href="#" className="flex items-center">
            <Image src="/logo.png" alt="Sparko" width={132} height={62} className="h-[40px] lg:h-[62px] w-auto" priority />
          </a>
          <div className="hidden md:flex items-center gap-[12px]">
            {/* Language toggle — Saudi flag button */}
            <button
              onClick={toggle}
              className="font-ibm-plex flex items-center gap-[6px] px-[14px] py-[6px] bg-gray-100 border border-gray-200 rounded-full text-gray-600 text-[13px] hover:bg-gray-200 transition-colors"
            >
              <span>🇸🇦</span>
              {lang === 'ar' ? 'العربية' : 'English'}
            </button>
            <button className="font-ibm-plex flex items-center gap-[4px] px-[16px] py-[6px] bg-gray-100 border border-gray-200 rounded-full text-gray-700 text-[13px] hover:bg-gray-200 transition-colors">
              {t('منظومة', 'Ecosystem')} <span className="text-sparko-orange font-ibm-plex font-bold">Sparko.</span> {t('المتكاملة', 'Integrated')}
            </button>
          </div>
          {/* Mobile menu */}
          <div className="md:hidden flex items-center gap-[8px]">
            <button
              onClick={toggle}
              className="font-ibm-plex flex items-center gap-[4px] px-[12px] py-[4px] bg-gray-100 border border-gray-200 rounded-full text-gray-600 text-[12px] hover:bg-gray-200 transition-colors"
            >
              <span>🇸🇦</span>
              {lang === 'ar' ? 'AR' : 'EN'}
            </button>
            <button className="text-gray-600" aria-label={t('القائمة', 'Menu')}>
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Hero Content */}
        <div className="px-[24px] lg:px-[100px] pb-[32px] lg:pb-[64px]">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-[32px] lg:gap-0">
            {/* Illustration side */}
            <div className="w-full lg:w-[52%] flex-shrink-0 relative flex items-center justify-center">
              <Image
                src="/design-hero-left.png"
                alt="Sparko Career Journey"
                width={636}
                height={900}
                className="w-full max-h-[420px] lg:max-h-[520px] object-contain"
                priority
              />
              {/* Orange Quote Card */}
              <div
                className="absolute bottom-[2%] left-[4%] z-10 bg-sparko-orange rounded-[20px] max-w-[280px] overflow-visible"
                style={{ boxShadow: '0 12px 28px rgba(255,85,0,0.3)' }}
              >
                <div className="flex justify-center -mt-[28px] mb-[4px]">
                  <div
                    className="w-[56px] h-[56px] rounded-full overflow-hidden flex-shrink-0"
                    style={{ border: '3px solid white', boxShadow: '0 4px 8px rgba(0,0,0,0.15)' }}
                  >
                    <Image src="/avatar-person.png" alt="Majed Baqshan" width={56} height={56} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="px-[24px] pb-[20px]" style={{ paddingTop: '8px' }}>
                  <span className="font-ibm-plex text-white/80 text-[40px] font-light leading-none">&ldquo;</span>
                  <p className="font-ibm-plex text-white text-[23px] font-semibold leading-[44px] mt-[-8px]">
                    {t('تجربة مختلفة تعتبر نقطة تحول في مساري المهني', 'A different experience that was a turning point in my career')}
                  </p>
                  <p className="font-ibm-plex text-white text-[16px] font-normal mt-[8px]">
                    Majed Baqshan<br />Since 2015
                  </p>
                </div>
              </div>
            </div>

            {/* Text side */}
            <div className="w-full lg:w-[42%] lg:pl-[40px] xl:pl-[56px] flex flex-col items-center lg:items-start">
              <div className="inline-flex items-center gap-[6px] px-[12px] py-[6px] bg-gray-200 rounded-full mb-[16px]">
                <span className="w-[6px] h-[6px] bg-green-500 rounded-full" />
                <span className="font-ibm-plex text-[14px] text-gray-700 font-medium">
                  {t('نسبة قبول عالية', 'High acceptance rate')}
                </span>
              </div>
              <h1 className="font-ibm-plex text-[24px] sm:text-[36px] lg:text-[48px] font-bold leading-[1.25] mb-[12px] text-center lg:text-start">
                {lang === 'ar' ? (
                  <>
                    <span className="text-[#0B1A3E]">قصة حقيقية من </span>
                    <span className="text-[#0B1A3E]">التدريب الميداني</span>
                    <br />
                    <span className="text-[#0B1A3E]">إلى </span>
                    <span className="text-sparko-orange">عرض وظيفي</span>
                  </>
                ) : (
                  <>
                    <span className="text-[#0B1A3E]">A true story from </span>
                    <span className="text-[#0B1A3E]">Field Training</span>
                    <br />
                    <span className="text-[#0B1A3E]">to a </span>
                    <span className="text-sparko-orange">Job Offer</span>
                  </>
                )}
              </h1>
              <p className="font-ibm-plex text-[16px] sm:text-[20px] lg:text-[24px] text-[#2B2D2F] font-normal mb-[24px] text-center lg:text-start">
                {t('تجربة تعيشها ... و نتيجة تشوفها', 'An experience you live... and a result you see')}
              </p>
              <div className="mb-[20px]">
                <a
                  href="#contact"
                  className="inline-flex flex-col items-center justify-center gap-[2px] px-[32px] lg:px-[40px] py-[14px] lg:py-[16px] bg-sparko-orange text-white rounded-full font-ibm-plex font-medium text-[20px] hover:bg-[#E64D00] transition-all duration-300 shadow-lg shadow-sparko-orange/25"
                >
                  <span>{t('ابدأ رحلتك الآن', 'Start your journey now')}</span>
                </a>
              </div>
              <div className="flex items-center gap-[12px] justify-center lg:justify-start">
                <button className="font-ibm-plex inline-flex items-center gap-[10px] px-[16px] py-[10px] bg-[#253A63] text-white rounded-[12px] text-[12px] hover:bg-[#2F4A7A] transition-colors">
                  <svg className="w-[20px] h-[20px] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 16.56 2.93 11.3 4.7 7.72C5.57 5.94 7.36 4.86 9.28 4.84C10.56 4.81 11.78 5.72 12.57 5.72C13.36 5.72 14.85 4.62 16.4 4.8C17.07 4.83 18.89 5.08 20.07 6.78C19.96 6.85 17.62 8.24 17.65 11.1C17.69 14.52 20.62 15.63 20.65 15.64C20.62 15.72 20.17 17.28 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" /></svg>
                  <div className="font-ibm-plex text-right leading-none"><div className="text-[10px] text-white/70">Download on the</div><div className="font-semibold text-[13px] mt-[2px]">App Store</div></div>
                </button>
                <button className="font-ibm-plex inline-flex items-center gap-[10px] px-[16px] py-[10px] bg-[#253A63] text-white rounded-[12px] text-[12px] hover:bg-[#2F4A7A] transition-colors">
                  <svg className="w-[20px] h-[20px] flex-shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5Z" fill="#4CAF50"/>
                    <path d="M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12Z" fill="#F44336"/>
                    <path d="M20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.5 12.92 20.16 13.19L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81Z" fill="#FFC107"/>
                    <path d="M6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z" fill="#2196F3"/>
                  </svg>
                  <div className="font-ibm-plex text-right leading-none"><div className="text-[10px] text-white/70">GET IT ON</div><div className="font-semibold text-[13px] mt-[2px]">Google Play</div></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
