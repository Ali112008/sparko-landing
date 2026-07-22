'use client';

import Image from 'next/image';

export default function JobOfferSection() {
  return (
    <section className="relative py-[24px] lg:py-[40px]">
      <div className="max-w-[88%] lg:max-w-[86%] mx-auto">
        <div
          className="rounded-[24px] overflow-hidden relative"
          style={{
            /* Figma outer frame (180:5953) background composition:
               1. Base: radial-gradient (#21355A → #0C1B3A)
               2. Subtle white highlight at center (opacity 0.1) — overlay (180:5954)
               3. Vignette: dark edges overlay (180:5957)
               4. Linear gradient overlay (from inner frame fills): dark blue on circle side fading to transparent on text side
               For RTL: circle is on RIGHT, so linear gradient darkens RIGHT side */
            background: `
              linear-gradient(to left, rgba(17,24,39,1) 0%, rgba(17,24,39,0.8) 61.5%, rgba(102,102,102,0) 100%),
              radial-gradient(circle at center, transparent 20%, rgba(3,9,20,0.95) 95%),
              radial-gradient(circle at center, rgba(255,255,255,0.05) 6%, transparent 6%),
              radial-gradient(circle at center, #21355A 0%, #0C1B3A 100%
            )`,
            /* Figma: strokeWeight 1.5, white stroke at 12% opacity */
            border: '1.5px solid rgba(255, 255, 255, 0.12)',
            /* Figma: DROP_SHADOW #000 a=0.25 offset(0,25) radius=50 spread=-12 */
            boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
          }}
        >
          {/* Blue glow line at bottom — same pattern as StatsSection */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[103%] h-[1px]"
            style={{
              borderTop: '1px solid rgba(43, 127, 255, 0.7)',
              filter: 'blur(10px)',
            }}
          />

          {/* Main content: HORIZONTAL flex, gap 44px, items centered */}
          {/* RTL: Circle appears on RIGHT, Text container on LEFT */}
          {/* Figma inner frame (180:5958): px=120, py≈88, gap=44 */}
          <div className="flex items-center px-[32px] lg:px-[120px] py-[40px] lg:py-[88px]" style={{ gap: '44px' }}>
            {/* Circle area — Figma (180:5959): 220x220, cornerRadius 110 */}
            <div
              className="w-[140px] h-[140px] lg:w-[220px] lg:h-[220px] rounded-full flex-shrink-0 relative"
              style={{
                /* Figma: DROP_SHADOW #ff5500 offset(0,-3) radius=100 */
                boxShadow: '0px -3px 100px 0px rgba(255, 85, 0, 1)',
                /* Figma: BACKGROUND_BLUR radius=50 — approximated with backdrop-filter */
                backdropFilter: 'blur(50px)',
              }}
            >
              {/* Outer ellipse ring — Figma (180:5960): 176x176, stroke 2.5px orange 60% */}
              {/* Desktop: inset-[22px] (220-176=44/2=22), Mobile: inset-[14px] */}
              <div
                className="absolute inset-[14px] lg:inset-[22px] rounded-full"
                style={{
                  border: '2.5px solid rgba(255, 85, 0, 0.6)',
                  /* Figma: LAYER_BLUR radius=1 on the ellipse */
                  filter: 'blur(1px)',
                }}
              />

              {/* Inner ellipse — Figma (180:5961): 147x134, fill rgba(255,85,0,0.24) */}
              {/* With LAYER_BLUR radius=50 for glow effect */}
              {/* Mobile version: proportionally smaller (~94x86) */}
              <div
                className="block lg:hidden absolute rounded-full"
                style={{
                  width: '94px',
                  height: '86px',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  background: 'rgba(255, 85, 0, 0.24)',
                  /* Figma: LAYER_BLUR radius=50 */
                  filter: 'blur(50px)',
                }}
              />
              {/* Desktop version: Figma exact 147x134 */}
              <div
                className="hidden lg:block absolute rounded-full"
                style={{
                  width: '147px',
                  height: '134px',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  background: 'rgba(255, 85, 0, 0.24)',
                  /* Figma: LAYER_BLUR radius=50 */
                  filter: 'blur(50px)',
                }}
              />

              {/* Briefcase icon — Figma (180:5962): 120x120 container, 110x82 vector */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[76px] h-[76px] lg:w-[120px] lg:h-[120px] flex items-center justify-center">
                <Image
                  src="/icon-joboffer-briefcase.svg"
                  alt="Briefcase"
                  width={110}
                  height={82}
                  className="w-[70px] h-[52px] lg:w-[110px] lg:h-[82px] object-contain"
                />
              </div>
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
                {/* عرض وظيفي — Figma (180:5967): fontSize=40, weight=700, lh=48px, letterSpacing=0 */}
                <p
                  className="font-ibm-plex text-[28px] lg:text-[40px] font-bold text-sparko-orange"
                  style={{ lineHeight: '48px', letterSpacing: '0px' }}
                >
                  عرض وظيفي
                </p>
                {/* Check icon — Figma (180:5968): 48x48, with orange drop shadow on inner Group */}
                <div className="flex-shrink-0 w-[32px] h-[32px] lg:w-[48px] lg:h-[48px] relative">
                  <Image
                    src="/icon-joboffer-check.svg"
                    alt="Verified"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                  {/* Figma (180:5969): DROP_SHADOW #ff5500 offset(0,4) radius=24 */}
                  {/* Simulated as a separate glow div behind the icon */}
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      boxShadow: '0px 4px 24px rgba(255, 85, 0, 1)',
                      opacity: 0.6,
                      zIndex: -1,
                    }}
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
