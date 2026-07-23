'use client';

import Image from 'next/image';
import { useLang } from '@/context/LanguageContext';

export default function JobOfferSection() {
  const { lang } = useLang();
  const t = (ar: string, en: string) => lang === 'ar' ? ar : en;

  return (
    <section className="relative py-[24px] lg:py-[40px]">
      <div className="max-w-[88%] lg:max-w-[86%] mx-auto">
        <div
          className="rounded-[24px] overflow-hidden relative"
          style={{
            background: `
              linear-gradient(to left, rgba(17,24,39,1) 0%, rgba(17,24,39,0.8) 61.5%, rgba(102,102,102,0) 100%),
              radial-gradient(circle at center, transparent 20%, rgba(3,9,20,0.95) 95%),
              url('/joboffer-bg-texture.png'),
              radial-gradient(circle at center, #21355A 0%, #0C1B3A 100%)`,
            backgroundSize: 'cover, cover, cover, cover',
            backgroundPosition: 'center',
            border: '1.5px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
          }}
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[103%] h-[1px] z-10" style={{ borderTop: '1px solid rgba(43, 127, 255, 0.7)', filter: 'blur(10px)' }} />

          <div className="flex flex-col lg:flex-row items-center px-[24px] sm:px-[32px] lg:px-[120px] py-[32px] sm:py-[40px] lg:py-[88px]" style={{ gap: '24px sm:gap-[32px] lg:gap-[44px]' }}>
            {/* Circle area */}
            <div className="flex-shrink-0 relative overflow-visible" style={{ width: 'clamp(140px, 18vw, 220px)', height: 'clamp(140px, 18vw, 220px)' }}>
              <Image src="/joboffer-circle.png" alt="Briefcase" width={420} height={400} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ width: 'clamp(267px, 36vw, 420px)', height: 'clamp(254px, 33vw, 400px)', objectFit: 'contain' }} priority />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full hidden lg:block" style={{ width: '220px', height: '220px', boxShadow: '0px -3px 100px 0px rgba(255, 85, 0, 1)' }} />
            </div>

            {/* Text container */}
            <div className="flex flex-col items-center text-center" style={{ gap: '24px' }}>
              <p className="font-ibm-plex text-[20px] lg:text-[32px] font-normal text-white text-center" style={{ lineHeight: '28px', letterSpacing: '0.16px' }}>
                {t('النتيجة التي تستحقها كل تجربة حقيقية', 'The result that every real experience deserves')}
              </p>
              <div className="flex items-center justify-center" style={{ gap: '12px' }}>
                <p className="font-ibm-plex text-[28px] lg:text-[40px] font-bold text-sparko-orange" style={{ lineHeight: '48px' }}>
                  {t('عرض وظيفي', 'Job Offer')}
                </p>
                <div className="flex-shrink-0 w-[32px] h-[32px] lg:w-[48px] lg:h-[48px]">
                  <Image src="/icon-joboffer-check.png" alt="Verified" width={48} height={48} className="w-full h-full object-contain" priority />
                </div>
              </div>
              <p className="font-ibm-plex text-[16px] lg:text-[24px] font-normal text-white text-center" style={{ lineHeight: '28px', letterSpacing: '0.16px' }}>
                {t('من احدى الجهات بعد انتهاء التدريب وتقييم الأداء', 'From one of the organizations after completing training and performance evaluation')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
