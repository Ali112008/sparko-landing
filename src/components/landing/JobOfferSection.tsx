'use client';

import Image from 'next/image';
import { useLang } from '@/context/LanguageContext';

export default function JobOfferSection() {
  const { lang } = useLang();
  const t = (ar: string, en: string) => lang === 'ar' ? ar : en;
  const isRTL = lang === 'ar';

  // ═══════════════════════════════════════════════════════════════
  // FIGMA EXACT SPECIFICATIONS — Node 180:5953 (LTR card)
  // Scaled ×0.75 for 1440px viewport (Figma = 1920px)
  // ═══════════════════════════════════════════════════════════════

  // CARD (180:5953): 1680×400 → 1260×300
  // cornerRadius=24 → 18, fill: radial-gradient(#21355A→#0C1B3A)
  // stroke: rgba(255,255,255,0.12) 1.5px
  // shadow: 0px 25px 50px -12px rgba(0,0,0,0.25)

  // CONTENT FRAME (180:5958): 1678×397 → ~1258×298
  // Fills stack (bottom to top):
  //   1) Solid white
  //   2) IMAGE — scaleMode=STRETCH (background photo)
  //   3) GRADIENT_LINEAR — language-dependent overlay
  //
  // LTR gradient (180:5958):
  //   0%   → rgba(17,24,39, 1.0)   — fully opaque LEFT (text side)
  //   61.5% → rgba(17,24,39, 0.8)  — 80% opacity middle
  //   100% → rgba(102,102,102, 0)  — transparent RIGHT (photo side)
  //
  // RTL gradient (304:8669, opacity 0.9 on fill):
  //   0%   → rgba(102,102,102, 0)   — transparent LEFT (photo side)
  //   38.5% → rgba(17,24,39, 0.72)  — 72% opacity middle (0.8×0.9)
  //   100% → rgba(17,24,39, 0.9)   — 90% opacity RIGHT (text side) (1.0×0.9)
  //
  // Layout: paddingLeft/Right=120→90, itemSpacing=44→33
  // primaryAxisAlignItems=MIN (items start from LEFT)
  // counterAxisAlignItems=CENTER
  //
  // Children positions (LTR):
  //   Icon circle: left=120, right=1338 → LEFT side
  //   Text container: left=384, right=632 → LEFT side (same as icon)
  //   Photo visible: right side (632+px from right edge)

  // ICON CIRCLE (180:5959): 220→165px, cornerRadius=110→83
  // padding=22→17, stroke: rgba(255,85,0,0.6) 2.5px→2px
  // shadow: drop rgba(255,85,0,1) offset(0,-3→-2) radius=100→75
  // backdropBlur: 50→37.5px

  // INNER ELLIPSE (180:5960): 176→132px
  // stroke: rgba(255,85,0,0.6) 1.5px→1px, layerBlur: 1→0.75px

  // BRIEFCASE ICON (180:5962): 120→90px, fill: rgba(255,85,0,1)

  // TEXT CONTAINER (180:5964): 662→497px, VERTICAL, CENTER
  // gap=24→18

  // TEXT 1 (180:5965): "النتيجة التي تستحقها كل تجربة حقيقية"
  // fontSize=32→24, Regular, lh=28→21, ls=0.16→0.12, white, CENTER

  // HEADING ROW (180:5966): gap=12→9
  // "عرض وظيفي" (180:5967): fontSize=40→30, Bold, lh=48→36, #FF5500
  // Check icon (180:5968): 48→36px

  // TEXT 3 (180:5972): "من احدى الجهات بعد انتهاء التدريب وتقييم الأداء"
  // fontSize=24→18, Regular, lh=28→21, ls=0.16→0.12, white, CENTER

  // ═══════════════════════════════════════════════════════════════

  const gradientLTR = 'linear-gradient(to right, rgba(17,24,39,1) 0%, rgba(17,24,39,0.8) 61.5%, rgba(102,102,102,0) 100%)';
  const gradientRTL = 'linear-gradient(to right, rgba(102,102,102,0) 0%, rgba(17,24,39,0.72) 38.5%, rgba(17,24,39,0.9) 100%)';
  const gradientOverlay = isRTL ? gradientRTL : gradientLTR;

  // In LTR: content on LEFT side (opaque gradient) → flex-start (default)
  // In RTL: content on RIGHT side (opaque gradient) → flex-end
  // Using direction:ltr so flex properties are always physical LEFT→RIGHT
  const justifyContent = isRTL ? 'flex-end' : 'flex-start';

  // In RTL (Arabic): icon should appear RIGHT of text visually
  // In LTR (English): icon should appear LEFT of text visually
  // Since direction=ltr, flex order is always physical LEFT→RIGHT
  // RTL flex-end pushes items to RIGHT, so order: [text, icon] → icon on far RIGHT
  // But in Arabic, icon should be LEFT of text within the content group
  // Actually, both are on the opaque side; order just affects which is more to the left/right

  return (
    <section className="relative py-[45px]">
      <div className="max-w-[87.5%] mx-auto">
        {/* ── THE CARD ── */}
        <div
          className="rounded-[18px] overflow-hidden relative"
          style={{
            background: 'radial-gradient(circle at center, #21355A 0%, #0C1B3A 100%)',
            border: '1.5px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0px 19px 38px -9px rgba(0, 0, 0, 0.25)',
            height: '300px',
          }}
        >
          {/* ── VIGNETTE ── Figma: 180:5957 has visible=false on fill, so NOT rendered */}

          {/* ── BLUE GLOW LINE ── Figma: 180:5955 */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[103%] h-[1px] pointer-events-none z-[1]"
            style={{ borderTop: '1px solid rgba(43, 127, 255, 0.7)', filter: 'blur(10px)' }}
          />

          {/* ── CONTENT FRAME ── Figma: 180:5958 */}
          {/* Figma: layoutSizingHorizontal=FIXED (1678px) → covers entire card */}
          {/* Figma: layoutSizingVertical=FILL → fills parent height */}
          {/* direction:ltr so CSS flex/gradients are always physical */}
          {/* Gradient overlay + background photo as layered background fills */}
          {/*
            Figma fills (bottom → top):
              1) Solid white (opaque base)
              2) IMAGE — scaleMode=STRETCH, imageTransform [[1.0,0.0,0.0],[0.0,0.3549,0.0972]]
              3) GRADIENT_LINEAR — dark overlay from left→right (LTR) or reversed (RTL)
            LTR stops:  0% rgba(17,24,39,1) | 61.48% rgba(17,24,39,0.8) | 100% rgba(102,102,102,0)
            RTL stops:  0% rgba(102,102,102,0) | 38.52% rgba(17,24,39,0.72) | 100% rgba(17,24,39,0.9)
          */}
          <div
            key={isRTL ? 'rtl-bg' : 'ltr-bg'}
            style={{
              direction: 'ltr',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: justifyContent,
              padding: '0px 90px',
              gap: '33px',
              width: '100%',
              height: '100%',
              background: `${gradientOverlay}, url('/joboffer-bg-original.png'), white`,
              backgroundSize: 'cover, cover, auto',
              backgroundPosition: 'center center, center 15%, center',
              backgroundRepeat: 'no-repeat, no-repeat, no-repeat',
            }}
          >
            {/* ── ICON CIRCLE ── Figma: 180:5959 */}
            {/* 220→165px, cornerRadius=110→83 */}
            {/* stroke: rgba(255,85,0,0.6) 2.5→2px INSIDE */}
            {/* effects: DROP_SHADOW orange offset(0,-3→-2) r=100→75 */}
            {/*          BACKGROUND_BLUR r=50→37.5 */}
            {/* fill: visible=false → transparent bg */}
            {/* All children ABSOLUTE centered for pixel-perfect positioning */}
            {/* (CSS border reduces content area; absolute centering bypasses this) */}
            <div
              className="flex-shrink-0 rounded-full relative"
              style={{
                width: '165px',
                height: '165px',
                border: '2px solid rgba(255, 85, 0, 0.6)',
                boxSizing: 'border-box',
                boxShadow: '0px -2px 75px 0px rgba(255, 85, 0, 1)',
                backdropFilter: 'blur(37.5px)',
              }}
            >
              {/* ── INNER ELLIPSE ── Figma: 180:5960 */}
              {/* 176→132px, stroke: rgba(255,85,0,0.6) 2.5→2px INSIDE */}
              {/* fill: visible=false, LAYER_BLUR r=1→0.75px */}
              {/* Absolute centered: left edge at 16.5px from outer boundary ≈ Figma 22×0.75 */}
              <div
                className="rounded-full pointer-events-none"
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '132px',
                  height: '132px',
                  border: '2px solid rgba(255, 85, 0, 0.6)',
                  boxSizing: 'border-box',
                  filter: 'blur(0.75px)',
                }}
              />

              {/* ── ORANGE GLOW ── Figma: 180:5961 */}
              {/* 147×134 → 110×101px, fill rgba(255,85,0,0.24) */}
              {/* LAYER_BLUR r=50→37.5px → soft orange glow */}
              <div
                className="rounded-full pointer-events-none"
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '110px',
                  height: '101px',
                  background: 'rgba(255, 85, 0, 0.24)',
                  filter: 'blur(37.5px)',
                }}
              />

              {/* ── BRIEFCASE ICON ── Figma: 180:5962 */}
              {/* 120→90px, ABSOLUTE centered */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                style={{ width: '90px', height: '90px' }}
              >
                <Image
                  src="/icon-joboffer-briefcase.svg"
                  alt="Work"
                  width={90}
                  height={90}
                  className="w-[90px] h-[90px] object-contain"
                />
              </div>
            </div>

            {/* ── TEXT CONTAINER ── Figma: 180:5964 */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: '18px',
              width: '497px',
            }}>
              {/* ── TEXT 1 ── Figma: 180:5965 */}
              <p
                className="font-ibm-plex text-[24px] font-normal text-white w-full"
                style={{ lineHeight: '21px', letterSpacing: '0.12px', textAlign: 'center' }}
              >
                {t('النتيجة التي تستحقها كل تجربة حقيقية', 'The result you deserve for every real experience')}
              </p>

              {/* ── HEADING ROW ── Figma: 180:5966 */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '9px',
                direction: 'ltr',
              }}>
                {isRTL ? (
                  <>
                    <div className="flex-shrink-0" style={{ width: '36px', height: '36px' }}>
                      <Image
                        src="/icon-joboffer-check.png"
                        alt="Verified"
                        width={36}
                        height={36}
                        className="w-full h-full object-contain"
                        style={{ filter: 'drop-shadow(0px 2px 14px rgba(255, 85, 0, 1))' }}
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
                        style={{ filter: 'drop-shadow(0px 2px 14px rgba(255, 85, 0, 1))' }}
                        priority
                      />
                    </div>
                  </>
                )}
              </div>

              {/* ── TEXT 3 ── Figma: 180:5972 */}
              <p
                className="font-ibm-plex text-[18px] font-normal text-white w-full"
                style={{ lineHeight: '21px', letterSpacing: '0.12px', textAlign: 'center' }}
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
