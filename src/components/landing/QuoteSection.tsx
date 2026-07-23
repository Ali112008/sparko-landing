'use client';

import { useLang } from '@/context/LanguageContext';

export default function QuoteSection() {
  const { lang } = useLang();
  const t = (ar: string, en: string) => lang === 'ar' ? ar : en;

  return (
    <section className="relative py-[20px] sm:py-[24px] lg:py-[40px]">
      <div className="max-w-[88%] lg:max-w-[86%] mx-auto">
        <div
          className="rounded-[24px] overflow-hidden relative"
          style={{
            background: 'radial-gradient(circle at center, #21355A 0%, #0C1B3A 100%)',
            border: '1.5px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
          }}
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[103%] h-[1px]" style={{ borderTop: '1px solid rgba(43, 127, 255, 0.7)', filter: 'blur(10px)' }} />

          <div className="flex items-center justify-center py-[24px] sm:py-[32px] lg:py-[44px] px-[20px] sm:px-[24px] lg:px-[48px]">
            <div className="flex flex-col items-center text-center gap-[16px] sm:gap-[20px] lg:gap-[24px]">
              <p className="font-ibm-plex text-[16px] sm:text-[22px] lg:text-[36px] font-medium leading-[22px] sm:leading-[30px] lg:leading-[48px] text-white">
                {t('إذا كنت تبحث عن تدريب ، هذا مو مكان تدريب … !', 'If you\'re looking for training, this isn\'t a training place…!')}
              </p>
              <p className="font-ibm-plex text-[22px] sm:text-[32px] lg:text-[56px] font-bold leading-[28px] sm:leading-[40px] lg:leading-[80px] text-sparko-orange">
                {t('هذا مكان يصنع نتيجتك', 'This is a place that makes your result')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
