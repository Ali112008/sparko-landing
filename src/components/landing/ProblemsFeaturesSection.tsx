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
    <section className="relative py-6 sm:py-10 lg:py-14">
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

          <div className="flex flex-col items-center justify-center py-[24px] sm:py-[32px] lg:py-[44px] px-[20px] sm:px-[32px] lg:px-[44px] gap-[24px] sm:gap-[32px] lg:gap-[44px]">
            <div className="flex flex-col items-center gap-[24px]">
              <h2 className="font-ibm-plex text-[24px] sm:text-[32px] lg:text-[40px] leading-[30px] sm:leading-[38px] lg:leading-[48px] font-bold text-white text-center">
                {t('أغلب التجارب تمر بدون أثر', 'Most experiences pass without impact')}
              </h2>
              <p className="font-ibm-plex text-[14px] sm:text-[18px] lg:text-[24px] leading-[20px] sm:leading-[24px] lg:leading-[28px] font-normal text-white text-center" style={{ letterSpacing: '0.16px' }}>
                {t('Most training experiences pass without impact', 'Most training experiences pass without impact')}
              </p>
            </div>

            {/* 5 icons row — desktop: row */}
            <div className="flex items-stretch justify-center gap-0">
              {topFeatureIcons.map((icon, index) => (
                <div key={index} className="flex items-center">
                  {/* Divider */}
                  {index > 0 && (
                    <div className="w-px flex-shrink-0" style={{ height: '120px', marginLeft: '40px', marginRight: '40px', background: 'rgba(255, 255, 255, 0.24)' }} />
                  )}
                  <div className="flex flex-col items-center text-center" style={{ gap: '16px' }}>
                    <div className="w-[72px] h-[72px] flex items-center justify-center">
                      <Image src={icon} alt={lang === 'ar' ? topFeaturesAr[index] : topFeaturesEn[index]} width={72} height={72} className="w-full h-full object-contain brightness-0 invert" />
                    </div>
                    <p className="font-ibm-plex text-[18px] leading-[28px] font-semibold text-white">
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

          <div className="flex flex-col items-center py-[24px] sm:py-[32px] lg:py-[44px] px-[20px] sm:px-[32px] lg:px-[44px]" style={{ gap: '24px sm:gap-[32px] lg:gap-[44px]' }}>
            <div className="flex flex-col items-center gap-[24px]">
              <h2 className="font-ibm-plex text-[24px] sm:text-[32px] lg:text-[40px] leading-[30px] sm:leading-[38px] lg:leading-[48px] font-bold text-sparko-orange text-center">
                {t('هنا كل شيء محسوب', 'Here, everything is calculated')}
              </h2>
              <p className="font-ibm-plex text-[14px] sm:text-[18px] lg:text-[24px] leading-[20px] sm:leading-[24px] lg:leading-[28px] font-normal text-[#2B2D2F] text-center" style={{ letterSpacing: '0.16px' }}>
                {t('Here, everything is calculated', 'Here, everything is calculated')}
              </p>
            </div>

            <p className="font-ibm-plex text-[24px] sm:text-[32px] lg:text-[36px] leading-[32px] sm:leading-[40px] lg:leading-[48px] font-bold text-sparko-green text-center">
              {t('كل خطوة لها هدف ... وكل تجربة لها نتيجة', 'Every step has a goal... and every experience has a result')}
            </p>

            {/* ===== DESKTOP LAYOUT (always shown) ===== */}
            <div className="flex w-full items-center gap-[24px]">
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
          </div>
        </div>
      </div>
    </section>
  );
}
