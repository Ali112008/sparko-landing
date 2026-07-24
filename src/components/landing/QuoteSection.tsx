'use client';

import { useLang } from '@/context/LanguageContext';

export default function QuoteSection() {
  const { lang } = useLang();
  const t = (ar: string, en: string) => lang === 'ar' ? ar : en;

  return (
    <section className="relative py-[45px]">
      <div className="max-w-[87.5%] mx-auto">
        {/* Figma: 334:191 — Background+Border+Shadow */}
        {/* HORIZONTAL, CENTER-CENTER, padding: 48/48/44/44, cornerRadius=24 */}
        {/* fill: radial-gradient(#21355A → #0C1B3A) */}
        {/* stroke: rgba(255,255,255,0.12), strokeWeight=1.5, INSIDE */}
        {/* shadow: rgba(0,0,0,0.25) offset(0,25) radius=50 spread=-12 */}
        <div
          className="rounded-[24px] overflow-hidden relative flex items-center justify-center"
          style={{
            background: 'radial-gradient(circle at center, #21355A 0%, #0C1B3A 100%)',
            border: '1.5px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
            padding: '44px 48px',
          }}
        >
          {/* Decorative gradient overlay — Figma: 334:192 */}
          {/* Radial, white→transparent, opacity 10% */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 70%)',
            }}
          />

          {/* Decorative vignette overlay — Figma: 334:195 */}
          {/* Radial, rgba(3,9,20,0)→rgba(3,9,20,1) */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(3,9,20,0) 20%, rgba(3,9,20,0.8) 95%)',
            }}
          />

          {/* Blue glow line at bottom — Figma: 334:193 (visible=false, decorative) */}
          {/* Kept for visual consistency with other sections */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[103%] h-[1px] pointer-events-none"
            style={{
              borderTop: '1px solid rgba(43, 127, 255, 0.7)',
              filter: 'blur(10px)',
            }}
          />

          {/* Figma: 334:196 — Container (HORIZONTAL, SPACE_BETWEEN) */}
          {/* Figma: 334:197 — Frame 2121453283 (VERTICAL, CENTER-CENTER, itemSpacing=24) */}
          {/* 3 text nodes stacked vertically with 24px gap */}
          <div className="flex flex-col items-center text-center" style={{ gap: '24px' }}>
            {/* Line 1 — Figma: 334:198 */}
            {/* "إذا كنت تبحث عن تدريب ، هذا مو مكان تدريب … !" */}
            {/* fontSize=36, fontWeight=500 (Medium), lh=48, white, CENTER */}
            <p
              className="font-ibm-plex text-[36px] font-medium text-white"
              style={{ lineHeight: '48px', textAlign: 'center' }}
            >
              {t('إذا كنت تبحث عن تدريب ، هذا مو مكان تدريب … !', 'If you\'re looking for training, this isn\'t a training place…!')}
            </p>

            {/* Line 2 — Figma: 334:199 */}
            {/* "هذا مكان \" يصنع نتيجتك \"" */}
            {/* fontSize=56, fontWeight=700 (Bold), lh=80, #FF5500 (orange), CENTER */}
            <p
              className="font-ibm-plex text-[56px] font-bold"
              style={{ lineHeight: '80px', textAlign: 'center', color: '#FF5500' }}
            >
              {t('هذا مكان " يصنع نتيجتك "', 'This is a place that " makes your result "')}
            </p>


          </div>
        </div>
      </div>
    </section>
  );
}
