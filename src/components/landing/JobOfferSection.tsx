'use client';

import Image from 'next/image';
import { useLang } from '@/context/LanguageContext';

export default function JobOfferSection() {
  const { lang } = useLang();
  const t = (ar: string, en: string) => lang === 'ar' ? ar : en;

  // Proportional scaling: Figma_px × 0.75 for 1440px viewport
  // Figma layout: Icon LEFT, Text RIGHT, pushed to RIGHT side (primaryAxisAlignItems=MAX)
  // direction: ltr override ensures physical LEFT→RIGHT layout matches Figma regardless of page dir
  return (
    <section className="relative py-[30px]">
      <div className="max-w-[86%] mx-auto">
        {/* Figma: 180:5953 / 304:8664 — Background+Border+Shadow (THE CARD) */}
        {/* Figma 1680×400 → scaled ~1260×300 */}
        {/* cornerRadius=24→18, fill: radial-gradient(#21355A→#0C1B3A) */}
        {/* stroke: rgba(255,255,255,0.12), 1.5px, INSIDE */}
        {/* shadow: rgba(0,0,0,0.25) offset(0,19) radius=38 spread=-9 */}
        <div
          className="rounded-[18px] overflow-hidden relative"
          style={{
            background: 'radial-gradient(circle at center, #21355A 0%, #0C1B3A 100%)',
            border: '1.5px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0px 19px 38px -9px rgba(0, 0, 0, 0.25)',
          }}
        >
          {/* Vignette overlay — Figma: 180:5957 */}
          {/* BELOW content frame (z-[1]) so it only darkens card edges */}
          <div
            className="absolute inset-0 pointer-events-none z-[1]"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(3,9,20,0) 20%, rgba(3,9,20,0.5) 95%)',
            }}
          />

          {/* Blue glow line — Figma: 180:5955 (visible=false) */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[103%] h-[1px] pointer-events-none z-[1]"
            style={{ borderTop: '1px solid rgba(43, 127, 255, 0.7)', filter: 'blur(10px)' }}
          />

          {/* Figma: 180:5958 / 304:8669 — CONTENT FRAME */}
          {/* direction: ltr ensures Icon on LEFT, Text on RIGHT (matches Figma physical layout) */}
          {/* primaryAxisAlignItems=MAX → justify-end pushes content to RIGHT */}
          {/* Background: white → photo → gradient overlay (same for both languages) */}
          {/* Gradient: LEFT transparent (photo visible) → RIGHT opaque dark (text readable) */}
          {/* Z-[2] above vignette so gradient overlay isn't double-darkened */}
          <div
            className="flex items-center justify-end relative z-[2]"
            style={{
              direction: 'ltr',
              padding: '0px 90px',
              gap: '33px',
              minHeight: '298px',
              background: `linear-gradient(to right, rgba(102,102,102,0) 0%, rgba(17,24,39,0.72) 38.52%, rgba(17,24,39,0.9) 100%), url('/joboffer-bg-photo.png'), white`,
              backgroundSize: 'cover, cover, auto',
              backgroundPosition: 'center, center, center',
            }}
          >
            {/* Figma: 180:5959 — ICON CIRCLE */}
            {/* Figma 220→165px, cornerRadius=110→83, padding=22→17 */}
            {/* stroke: rgba(255,85,0,0.6) 2→1.5px, shadow: rgba(255,85,0,1) 0 -2 75px */}
            {/* backdropFilter: blur(50px) */}
            <div
              className="flex-shrink-0 rounded-full flex items-center justify-center"
              style={{
                width: '165px',
                height: '165px',
                padding: '17px',
                border: '2px solid rgba(255, 85, 0, 0.6)',
                boxShadow: '0px -2px 75px 0px rgba(255, 85, 0, 1)',
                backdropFilter: 'blur(50px)',
              }}
            >
              {/* Inner ellipse — Figma: 180:5960 */}
              {/* 176→132px, stroke 1.5px@60%, blur(1px) — double ring effect */}
              <div
                className="rounded-full flex items-center justify-center"
                style={{
                  width: '132px',
                  height: '132px',
                  border: '1.5px solid rgba(255, 85, 0, 0.6)',
                  filter: 'blur(1px)',
                }}
              >
                {/* Briefcase icon — Figma: 180:5962, 120→90px */}
                <Image
                  src="/icon-joboffer-briefcase.svg"
                  alt="Work"
                  width={90}
                  height={90}
                  className="w-[90px] h-[90px] object-contain"
                />
              </div>
            </div>

            {/* Figma: 180:5964 — TEXT CONTAINER */}
            {/* 662→497px max-width, VERTICAL, CENTER, gap=24→18 */}
            <div className="flex flex-col items-center text-center" style={{ gap: '18px', maxWidth: '497px' }}>
              {/* Text 1 — Figma: 180:5965 */}
              {/* "النتيجة التي تستحقها كل تجربة حقيقية" */}
              {/* 32→24px, Regular, lh=28→21, ls=0.16→0.12, white, CENTER */}
              <p
                className="font-ibm-plex text-[24px] font-normal text-white text-center w-full"
                style={{ lineHeight: '21px', letterSpacing: '0.12px' }}
              >
                {t('النتيجة التي تستحقها كل تجربة حقيقية', 'The result you deserve for every real experience')}
              </p>

              {/* Heading row — Figma: 180:5966 */}
              {/* HORIZONTAL, CENTER, gap=12→9 */}
              {/* Arabic: icon left, text right; English: text left, icon right */}
              <div className="flex items-center justify-center" style={{ gap: '9px', direction: 'ltr' }}>
                {lang === 'ar' ? (
                  <>
                    {/* Arabic: check icon appears to the LEFT (visually before text in physical layout) */}
                    <div className="flex-shrink-0" style={{ width: '36px', height: '36px' }}>
                      <Image
                        src="/icon-joboffer-check.png"
                        alt="Verified"
                        width={36}
                        height={36}
                        className="w-full h-full object-contain"
                        style={{ filter: 'drop-shadow(0px 3px 18px rgba(255, 85, 0, 1))' }}
                        priority
                      />
                    </div>
                    <p
                      className="font-ibm-plex text-[30px] font-bold"
                      style={{ lineHeight: '36px', color: '#FF5500' }}
                    >
                      عرض وظيفي
                    </p>
                  </>
                ) : (
                  <>
                    <p
                      className="font-ibm-plex text-[30px] font-bold"
                      style={{ lineHeight: '36px', color: '#FF5500' }}
                    >
                      Job Offer
                    </p>
                    <div className="flex-shrink-0" style={{ width: '36px', height: '36px' }}>
                      <Image
                        src="/icon-joboffer-check.png"
                        alt="Verified"
                        width={36}
                        height={36}
                        className="w-full h-full object-contain"
                        style={{ filter: 'drop-shadow(0px 3px 18px rgba(255, 85, 0, 1))' }}
                        priority
                      />
                    </div>
                  </>
                )}
              </div>

              {/* Text 3 — Figma: 180:5972 */}
              {/* "من احدى الجهات بعد انتهاء التدريب وتقييم الأداء" */}
              {/* 24→18px, Regular, lh=28→21, ls=0.16→0.12, white, CENTER */}
              <p
                className="font-ibm-plex text-[18px] font-normal text-white text-center w-full"
                style={{ lineHeight: '21px', letterSpacing: '0.12px' }}
              >
                {t('من احدى الجهات بعد انتهاء التدريب وتقييم الأداء', 'From one of the organizations after completing training and performance evaluation')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
