'use client';

import Image from 'next/image';
import { useLang } from '@/context/LanguageContext';

export default function JobOfferSection() {
  const { lang } = useLang();
  const t = (ar: string, en: string) => lang === 'ar' ? ar : en;
  const isRTL = lang === 'ar';

  // Proportional scaling: Figma_px × 0.75 for 1440px viewport
  return (
    <section className="relative py-[30px]">
      <div className="max-w-[86%] mx-auto">
        {/* Figma: 180:5953 / 304:8664 — Background+Border+Shadow (THE CARD) */}
        {/* Figma 1680×400 → scaled ~1260×300 */}
        {/* cornerRadius=24 → scaled 18 */}
        {/* fill: radial-gradient(#21355A → #0C1B3A) */}
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
          {/* Figma: 180:5957 / 304:8668 — Vignette overlay */}
          {/* BELOW content frame (z-index lower) so it only affects card background */}
          <div
            className="absolute inset-0 pointer-events-none z-[1]"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(3,9,20,0) 20%, rgba(3,9,20,0.6) 95%)',
            }}
          />

          {/* Figma: 180:5955 / 304:8666 — Blue glow line at bottom */}
          {/* visible=false in Figma, kept for consistency */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[103%] h-[1px] pointer-events-none z-[1]"
            style={{ borderTop: '1px solid rgba(43, 127, 255, 0.7)', filter: 'blur(10px)' }}
          />

          {/* Figma: 180:5958 / 304:8669 — Frame (CONTENT FRAME with background image) */}
          {/* Figma 1678×397 → scaled ~1259×298 */}
          {/* HORIZONTAL, CENTER, itemSpacing=44→33, primaryAxisAlignItems=MAX→justify-end */}
          {/* padding: L=120→90, R=120→90 */}
          {/* Background: 3 layers — solid white → IMAGE → GRADIENT_LINEAR overlay */}
          {/* Z-index 2 so vignette doesn't darken the background image */}
          {/* Gradient overlay direction depends on language:
              RTL (node 304:8669): LEFT transparent → RIGHT opaque dark (photo visible behind text)
              LTR (node 180:5958): LEFT opaque dark → RIGHT transparent (photo visible behind text) */}
          <div
            className="flex items-center justify-end relative z-[2]"
            style={{
              padding: '0px 90px',
              gap: '33px',
              minHeight: '298px',
              background: isRTL
                ? `linear-gradient(to right, rgba(102,102,102,0) 0%, rgba(17,24,39,0.72) 38.52%, rgba(17,24,39,0.9) 100%), url('/joboffer-bg-optimized.png'), white`
                : `linear-gradient(to right, rgba(17,24,39,1) 0%, rgba(17,24,39,0.8) 61.48%, rgba(102,102,102,0) 100%), url('/joboffer-bg-optimized.png'), white`,
              backgroundSize: 'cover, cover, auto',
              backgroundPosition: 'center, center, center',
            }}
          >
            {/* Figma: 180:5959 — Frame 2121453282 (ICON CIRCLE) */}
            {/* Figma 220×220 → scaled 165×165 */}
            {/* cornerRadius=110→83 (circle), padding=22→17 */}
            {/* stroke: rgba(255,85,0,0.6), 2.5→2px, INSIDE */}
            {/* shadow: rgba(255,85,0,1) offset(0,-2) radius=75 */}
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
              {/* Figma 176×176 → scaled 132×132 */}
              {/* orange stroke 2→1.5px@60%, layer blur 1px */}
              <div
                className="rounded-full flex items-center justify-center"
                style={{
                  width: '132px',
                  height: '132px',
                  border: '1.5px solid rgba(255, 85, 0, 0.6)',
                  filter: 'blur(1px)',
                }}
              >
                {/* Work/briefcase icon — Figma: 180:5962 */}
                {/* Figma 120×120 → scaled 90×90 */}
                <Image
                  src="/icon-joboffer-briefcase.svg"
                  alt="Work"
                  width={90}
                  height={90}
                  className="w-[90px] h-[90px] object-contain"
                />
              </div>
            </div>

            {/* Figma: 180:5964 — Container (TEXT) */}
            {/* Figma 662×152 → scaled ~497×114 */}
            {/* VERTICAL, CENTER, itemSpacing=24→18 */}
            {/* layoutSizingHorizontal: FIXED (662→497px) */}
            <div className="flex flex-col items-center text-center" style={{ gap: '18px', maxWidth: '497px' }}>
              {/* Text 1 — Figma: 180:5965 */}
              {/* "النتيجة التي تستحقها كل تجربة حقيقية" */}
              {/* Figma: fontSize=32→24, wt=400, lh=28→21, ls=0.16→0.12, white, CENTER */}
              <p
                className="font-ibm-plex text-[24px] font-normal text-white text-center w-full"
                style={{ lineHeight: '21px', letterSpacing: '0.12px' }}
              >
                {t('النتيجة التي تستحقها كل تجربة حقيقية', 'The result you deserve for every real experience')}
              </p>

              {/* Figma: 180:5966 — Heading row (HORIZONTAL, CENTER, itemSpacing=12→9) */}
              <div className="flex items-center justify-center" style={{ gap: '9px' }}>
                {/* Text 2 — Figma: 180:5967 */}
                {/* "عرض وظيفي" — fontSize=40→30, wt=700, lh=48→36, #FF5500 */}
                <p
                  className="font-ibm-plex text-[30px] font-bold"
                  style={{ lineHeight: '36px', color: '#FF5500' }}
                >
                  {t('عرض وظيفي', 'Job Offer')}
                </p>

                {/* Check icon — Figma: 180:5968 */}
                {/* Figma 48×48 → scaled 36×36 */}
                {/* Shadow: rgba(255,85,0,1) offset(0,3) radius=18 */}
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
              </div>

              {/* Text 3 — Figma: 180:5972 */}
              {/* "من احدى الجهات بعد انتهاء التدريب وتقييم الأداء" */}
              {/* Figma: fontSize=24→18, wt=400, lh=28→21, ls=0.16→0.12, white, CENTER */}
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
