'use client';

import Image from 'next/image';

export default function JobOfferSection() {
  return (
    <section className="relative py-[24px] lg:py-[40px]">
      <div className="max-w-[88%] lg:max-w-[86%] mx-auto">
        <div
          className="rounded-[24px] overflow-hidden relative"
          style={{
            /* Figma (180:5953) background composition:
               1. Base: radial-gradient (#21355A → #0C1B3A)
               2. Photo texture (blurred Figma export) — gives the rich atmospheric depth with bokeh
               3. Vignette: dark edges overlay
               4. Linear gradient: dark on circle side → transparent on text side
               For RTL: circle is on RIGHT, so linear gradient darkens RIGHT side */
            background: `
              linear-gradient(to left, rgba(17,24,39,1) 0%, rgba(17,24,39,0.8) 61.5%, rgba(102,102,102,0) 100%),
              radial-gradient(circle at center, transparent 20%, rgba(3,9,20,0.95) 95%),
              url('/joboffer-bg-texture.png'),
              radial-gradient(circle at center, #21355A 0%, #0C1B3A 100%
            )`,
            backgroundSize: 'cover, cover, cover, cover',
            backgroundPosition: 'center',
            /* Figma: strokeWeight 1.5, white stroke at 12% opacity */
            border: '1.5px solid rgba(255, 255, 255, 0.12)',
            /* Figma: DROP_SHADOW #000 a=0.25 offset(0,25) radius=50 spread=-12 */
            boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
          }}
        >
          {/* Blue glow line at bottom — Figma (180:5955): HorizontalBorder+Blur */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[103%] h-[1px] z-10"
            style={{
              borderTop: '1px solid rgba(43, 127, 255, 0.7)',
              filter: 'blur(10px)',
            }}
          />

          {/* Main content: HORIZONTAL flex, gap 44px, items centered */}
          {/* Figma inner frame (180:5958): px=120, py≈88, gap=44 */}
          <div className="flex items-center px-[32px] lg:px-[120px] py-[40px] lg:py-[88px]" style={{ gap: '44px' }}>
            {/* Circle area — using Figma exported PNG with all visual effects baked in
                Figma (180:5959): 220x220 circle, rendered area 420x400 including glow
                The image includes: outer ring stroke, inner ellipse glow, briefcase icon, orange glow */}
            <div
              className="flex-shrink-0 relative overflow-visible"
              style={{
                width: 'clamp(140px, 18vw, 220px)',
                height: 'clamp(140px, 18vw, 220px)',
              }}
            >
              {/* Figma circle image centered — extends beyond the layout area to show full glow */}
              <Image
                src="/joboffer-circle.png"
                alt="Briefcase"
                width={420}
                height={400}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                style={{
                  width: 'clamp(267px, 36vw, 420px)',
                  height: 'clamp(254px, 33vw, 400px)',
                  objectFit: 'contain',
                }}
                priority
              />
              {/* Additional CSS glow on desktop — Figma DROP_SHADOW #ff5500 offset(0,-3) radius=100 */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full hidden lg:block"
                style={{
                  width: '220px',
                  height: '220px',
                  boxShadow: '0px -3px 100px 0px rgba(255, 85, 0, 1)',
                }}
              />
            </div>

            {/* Text container — Figma (180:5964): VERTICAL, gap=24, counterAlign CENTER */}
            <div className="flex flex-col items-center text-center" style={{ gap: '24px' }}>
              {/* First text — Figma (180:5965): fontSize=32, weight=400, lh=28px, letterSpacing=0.16px */}
              <p
                className="font-ibm-plex text-[20px] lg:text-[32px] font-normal text-white text-center"
                style={{ lineHeight: '28px', letterSpacing: '0.16px' }}
              >
                النتيجة التي تستحقها كل تجربة حقيقية
              </p>

              {/* Heading 2 — Figma (180:5966): HORIZONTAL, gap=12, center aligned */}
              <div className="flex items-center justify-center" style={{ gap: '12px' }}>
                {/* عرض وظيفي — Figma (180:5967): fontSize=40, weight=700, lh=48px */}
                <p
                  className="font-ibm-plex text-[28px] lg:text-[40px] font-bold text-sparko-orange"
                  style={{ lineHeight: '48px', letterSpacing: '0px' }}
                >
                  عرض وظيفي
                </p>
                {/* Check icon — Figma exported PNG with orange glow baked in
                    Figma (180:5968): 48x48, Group has DROP_SHADOW #ff5500 */}
                <div className="flex-shrink-0 w-[32px] h-[32px] lg:w-[48px] lg:h-[48px]">
                  <Image
                    src="/icon-joboffer-check.png"
                    alt="Verified"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Third text — Figma (180:5972): fontSize=24, weight=400, lh=28px, letterSpacing=0.16px */}
              <p
                className="font-ibm-plex text-[16px] lg:text-[24px] font-normal text-white text-center"
                style={{ lineHeight: '28px', letterSpacing: '0.16px' }}
              >
                من احدى الجهات بعد انتهاء التدريب وتقييم الأداء
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
