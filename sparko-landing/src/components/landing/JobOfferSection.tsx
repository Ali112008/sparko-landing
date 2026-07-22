'use client';

import Image from 'next/image';

export default function JobOfferSection() {
  return (
    <section className="relative py-[24px] lg:py-[40px]">
      <div className="max-w-[88%] lg:max-w-[86%] mx-auto">
        <div
          className="rounded-[24px] overflow-hidden relative"
          style={{
            background: 'radial-gradient(circle at center, #21355A 0%, #0C1B3A 100%)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
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
          {/* Figma inner frame: px-[120px] (desktop), py-[88px] (desktop to achieve 400px card height) */}
          <div className="flex items-center px-[32px] lg:px-[120px] py-[40px] lg:py-[88px]" style={{ gap: '44px' }}>
            {/* Circle area — Figma: 220x220, cornerRadius 110, orange glow shadow */}
            <div
              className="w-[140px] h-[140px] lg:w-[220px] lg:h-[220px] rounded-full flex-shrink-0 relative"
              style={{
                boxShadow: '0px -3px 100px 0px rgba(255, 85, 0, 1)',
              }}
            >
              {/* Outer ellipse ring — Figma: 176x176, orange stroke 2.5px at 60% opacity */}
              {/* Mobile: inset-[14px] (140-112=28/2=14), Desktop: inset-[22px] (220-176=44/2=22) */}
              <div
                className="absolute inset-[14px] lg:inset-[22px] rounded-full"
                style={{
                  border: '2.5px solid rgba(255, 85, 0, 0.6)',
                }}
              />

              {/* Inner ellipse — Figma: 147x134, orange fill at 24% opacity */}
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
                }}
              />

              {/* Briefcase icon — Figma: 120x120 container, 110x82 vector, orange fill */}
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

            {/* Text container — Figma: VERTICAL flex, gap 24px, counterAlign CENTER */}
            <div className="flex flex-col items-center text-center" style={{ gap: '24px' }}>
              {/* First text — Figma: 32px w400 white, textAlign CENTER */}
              <p className="font-ibm-plex text-[20px] lg:text-[32px] font-normal leading-[1.4] text-white text-center">
                النتيجة التي تستحقها كل تجربة حقيقية
              </p>

              {/* Heading 2 — Figma: HORIZONTAL flex, gap 12px, primaryAlign CENTER */}
              <div className="flex items-center justify-center" style={{ gap: '12px' }}>
                {/* عرض وظيفي — Figma: 40px w700 lh48px orange */}
                <p className="font-ibm-plex text-[28px] lg:text-[40px] font-bold leading-[48px] text-sparko-orange">
                  عرض وظيفي
                </p>
                {/* Check icon — Figma: 48x48 lets-icons:done-ring-round */}
                <Image
                  src="/icon-joboffer-check.svg"
                  alt="Verified"
                  width={48}
                  height={48}
                  className="w-[32px] h-[32px] lg:w-[48px] lg:h-[48px] flex-shrink-0"
                />
              </div>

              {/* Third text — Figma: 24px w400 white, textAlign CENTER */}
              <p className="font-ibm-plex text-[16px] lg:text-[24px] font-normal leading-[1.4] text-white text-center">
                من احدى الجهات بعد انتهاء التدريب وتقييم الأداء
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
