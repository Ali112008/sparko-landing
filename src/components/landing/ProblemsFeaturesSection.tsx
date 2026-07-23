'use client';

import Image from 'next/image';
import { useLang } from '@/context/LanguageContext';

const topFeaturesAr = ['بدون نتيجة ملموسة', 'بدون تقرير موثق', 'بدون متابعة فعالة', 'بدون تقييم حقيقي', 'بدون توجيه واضح'];
const topFeaturesEn = ['No tangible result', 'No documented report', 'No effective follow-up', 'No real evaluation', 'No clear guidance'];
const topFeatureIcons = ['/icon-close.png', '/icon-file.png', '/icon-collaborate.png', '/icon-star.png', '/icon-aiming.png'];

const bottomFeatures = [
  { icon: '/icon-training.png', ar: 'تدريب ميداني\nمنظم', en: 'Structured Field\nTraining' },
  { icon: '/icon-tasks.png', ar: 'تطبيق واقعي', en: 'Practical Tasks' },
  { icon: '/icon-rate.png', ar: 'تقييم أداء\nيومي', en: 'Daily Performance\nEvaluation' },
  { icon: '/icon-user-follow.png', ar: 'اشراف ومتابعة', en: 'Supervision\n& Follow-up' },
  { icon: '/icon-verified.png', ar: 'تقرير مهني موثق', en: 'Verified\nProfessional\nReport' },
  { icon: '/icon-diploma.png', ar: 'توثيق تجربة احترافية', en: 'Professional\nExperience\nDocumentation' },
];

export default function ProblemsFeaturesSection() {
  const { lang } = useLang();
  const t = (ar: string, en: string) => lang === 'ar' ? ar : en;

  return (
    <section className="relative py-[16px] sm:py-8 lg:py-14">
      <div className="max-w-[88%] lg:max-w-[86%] mx-auto">
        {/* ========== PART 1 — DARK BLUE TOP PANEL ========== */}
        <div
          className="overflow-hidden relative"
          style={{
            background: 'linear-gradient(180deg, #273C65 0%, #182B51 100%)',
            border: '1.5px solid rgba(255, 254, 254, 0.4)',
            boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
            borderRadius: '24px 24px 0 0',
          }}
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[103%] h-[1px]" style={{ borderTop: '1px solid rgba(43, 127, 255, 0.7)', filter: 'blur(10px)' }} />

          <div className="flex flex-col items-center justify-center py-[20px] sm:py-[28px] lg:py-[44px] px-[16px] sm:px-[24px] lg:px-[44px] gap-[16px] sm:gap-[24px] lg:gap-[44px]">
            <div className="flex flex-col items-center gap-[24px]">
              <h2 className="font-ibm-plex text-[20px] sm:text-[28px] lg:text-[40px] leading-[26px] sm:leading-[36px] lg:leading-[48px] font-bold text-white text-center">
                {t('أغلب التجارب تمر بدون أثر', 'Most experiences pass without impact')}
              </h2>
              <p className="font-ibm-plex text-[12px] sm:text-[16px] lg:text-[24px] leading-[16px] sm:leading-[22px] lg:leading-[28px] font-normal text-white text-center" style={{ letterSpacing: '0.16px' }}>
                {t('Most training experiences pass without impact', 'Most training experiences pass without impact')}
              </p>
            </div>

            {/* 5 icons row — mobile: wrap, desktop: row */}
            <div className="flex flex-wrap items-stretch justify-center gap-[12px] sm:gap-[16px] lg:gap-0">
              {topFeatureIcons.map((icon, index) => (
                <div key={index} className="flex items-center">
                  {/* Divider only visible on desktop */}
                  {index > 0 && (
                    <div className="hidden lg:block w-px flex-shrink-0" style={{ height: '120px', marginLeft: '40px', marginRight: '40px', background: 'rgba(255, 255, 255, 0.24)' }} />
                  )}
                  <div className="flex flex-col items-center text-center" style={{ gap: '8px sm:gap-[12px]' }}>
                    <div className="w-[36px] h-[36px] sm:w-[48px] sm:h-[48px] lg:w-[72px] lg:h-[72px] flex items-center justify-center">
                      <Image src={icon} alt={lang === 'ar' ? topFeaturesAr[index] : topFeaturesEn[index]} width={72} height={72} className="w-full h-full object-contain brightness-0 invert" />
                    </div>
                    <p className="font-ibm-plex text-[12px] sm:text-[14px] lg:text-[18px] leading-[16px] sm:leading-[20px] lg:leading-[28px] font-semibold text-white">
                      {lang === 'ar' ? topFeaturesAr[index] : topFeaturesEn[index]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========== PART 2 — WHITE BOTTOM PANEL ========== */}
        <div
          className="bg-white relative"
          style={{
            border: '1.5px solid rgba(255, 254, 254, 0.4)',
            boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
            borderRadius: '0 0 24px 24px',
          }}
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[103%] h-[1px]" style={{ borderTop: '1px solid rgba(43, 127, 255, 0.7)', filter: 'blur(10px)' }} />

          <div className="flex flex-col items-center py-[20px] sm:py-[28px] lg:py-[44px] px-[16px] sm:px-[24px] lg:px-[44px]" style={{ gap: '16px sm:gap-[24px] lg:gap-[44px]' }}>
            <div className="flex flex-col items-center gap-[16px] sm:gap-[20px]">
              <h2 className="font-ibm-plex text-[20px] sm:text-[28px] lg:text-[40px] leading-[26px] sm:leading-[36px] lg:leading-[48px] font-bold text-sparko-orange text-center">
                {t('هنا كل شيء محسوب', 'Here, everything is calculated')}
              </h2>
              <p className="font-ibm-plex text-[12px] sm:text-[16px] lg:text-[24px] leading-[16px] sm:leading-[22px] lg:leading-[28px] font-normal text-[#2B2D2F] text-center" style={{ letterSpacing: '0.16px' }}>
                {t('Here, everything is calculated', 'Here, everything is calculated')}
              </p>
            </div>

            <p className="font-ibm-plex text-[18px] sm:text-[24px] lg:text-[36px] leading-[24px] sm:leading-[32px] lg:leading-[48px] font-bold text-sparko-green text-center">
              {t('كل خطوة لها هدف ... وكل تجربة لها نتيجة', 'Every step has a goal... and every experience has a result')}
            </p>

            {/* ===== DESKTOP ===== */}
            <div className="hidden lg:flex w-full items-center gap-[24px]">
              <div className="flex-shrink-0" style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))' }}>
                <Image src="/phone-mockup.png" alt="Sparko App" width={283} height={575} className="h-auto object-contain" style={{ width: '283px', maxHeight: '575px' }} />
              </div>

              <div className="flex gap-[16px] flex-1 min-w-0">
                {bottomFeatures.map((card, index) => (
                  <div key={index} className="flex flex-col items-center text-center flex-1 min-w-0" style={{ padding: '24px', gap: '20px', border: '1px solid rgba(0, 0, 0, 0.24)' }}>
                    <div className="w-[80px] h-[80px] flex items-center justify-center">
                      <Image src={card.icon} alt={lang === 'ar' ? card.ar : card.en} width={80} height={80} className="w-full h-full object-contain" />
                    </div>
                    <p className="font-ibm-plex text-[20px] leading-[32px] font-semibold text-[#2B2D2F]">
                      {(lang === 'ar' ? card.ar : card.en).split('\n').map((line, i) => (
                        <span key={i}>{line}{i < (lang === 'ar' ? card.ar : card.en).split('\n').length - 1 && <br />}</span>
                      ))}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ===== MOBILE/TABLET ===== */}
            <div className="lg:hidden">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5">
                {bottomFeatures.map((card, index) => (
                  <div key={index} className="bg-white flex flex-col items-center text-center min-h-[140px] sm:min-h-[180px] justify-center" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)', borderRadius: '16px', padding: '12px', gap: '12px', border: '1px solid rgba(0, 0, 0, 0.24)' }}>
                    <div className="w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center">
                      <Image src={card.icon} alt={lang === 'ar' ? card.ar : card.en} width={56} height={56} className="w-full h-full object-contain" />
                    </div>
                    <p className="font-ibm-plex text-xs sm:text-sm font-semibold text-[#2B2D2F] leading-snug">
                      {(lang === 'ar' ? card.ar : card.en).split('\n').map((line, i) => (
                        <span key={i}>{line}{i < (lang === 'ar' ? card.ar : card.en).split('\n').length - 1 && <br />}</span>
                      ))}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-4 sm:mt-8">
                <Image src="/phone-mockup.png" alt="Sparko App" width={280} height={560} className="w-[240px] sm:w-[280px] h-auto object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
