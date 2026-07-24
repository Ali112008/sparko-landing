'use client';

import Image from 'next/image';
import { useLang } from '@/context/LanguageContext';

const stats = [
  { icon: '/icon-stats-thumb.png', arTitle: 'نتائج تتكرر… وليست صدفة', enTitle: 'Repeatable results — not luck' },
  { icon: '/icon-stats-clock.png', arTitle: 'نتائج تُقاس بوضوح', enTitle: 'Clearly measurable outcomes' },
  { icon: '/icon-stats-grid.png', arTitle: 'تقييم مبني على الأداء', enTitle: 'Performance-based evaluation' },
  { icon: '/icon-stats-person.png', arTitle: 'تجارب موثقة', enTitle: 'Documented experiences' },
];

export default function StatsSection() {
  const { lang } = useLang();
  const t = (ar: string, en: string) => lang === 'ar' ? ar : en;

  return (
    <section className="relative py-[45px]">
      <div className="max-w-[87.5%] mx-auto">
        {/* Figma: 180:5911 — Background+Border+Shadow */}
        {/* VERTICAL, CENTER-CENTER, padding 44/48/44/48, cornerRadius=24 */}
        {/* fill: radial-gradient(#21355A → #0C1B3A) */}
        {/* stroke: rgba(255,255,255,0.12), strokeWeight=1.5, INSIDE */}
        {/* shadow: rgba(0,0,0,0.25) offset(0,25) radius=50 spread=-12 */}
        <div
          className="rounded-[24px] overflow-hidden relative"
          style={{
            background: 'radial-gradient(circle at center, #21355A 0%, #0C1B3A 100%)',
            border: '1.5px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
            padding: '44px 48px',
          }}
        >
          {/* Decorative vignette overlay — Figma: 180:5915 */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(3,9,20,0) 20%, rgba(3,9,20,0.8) 95%)',
            }}
          />

          {/* Blue glow line — Figma: 180:5913 (visible=false, kept for consistency) */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[103%] h-[1px] pointer-events-none"
            style={{ borderTop: '1px solid rgba(43, 127, 255, 0.7)', filter: 'blur(10px)' }}
          />

          {/* Figma: 180:5916 — Frame 2121453276 */}
          {/* HORIZONTAL, CENTER, itemSpacing=44 */}
          {/* Order reversed: text+trophy → divider → stat items */}
          {/* So Trophy appears on START side (RIGHT in RTL) */}
          {/* z-10 so vignette overlay doesn't darken text/icons */}
          <div className="relative z-10 flex items-center" style={{ gap: '33px' }}>
            {/* Figma: 180:5947 — Text+Image frame */}
            {/* HORIZONTAL, CENTER, itemSpacing=44 */}
            {/* Contains: text frame (229×124) + image frame (143×126) */}
            <div className="flex items-center flex-shrink-0" style={{ gap: '33px' }}>
              {/* Trophy image — Figma: 180:5952 */}
              {/* 143×126, IMAGE fill, scaleMode=STRETCH */}
              {/* Shadow: rgba(255,167,38,0.6) offset(0,5) radius=100 — orange glow */}
              <div
                className="flex-shrink-0"
                style={{
                  width: '143px',
                  height: '126px',
                  filter: 'drop-shadow(0px 5px 100px rgba(255, 167, 38, 0.6))',
                }}
              >
                <Image
                  src="/stats-image.png"
                  alt="Sparko Trophy"
                  width={143}
                  height={126}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>

              {/* Text frame — Figma: 180:5948 */}
              {/* VERTICAL, counterAxis=MAX, itemSpacing=16 */}
              {/* Single language only per user rule */}
              <div className="flex flex-col" style={{ gap: '12px' }}>
                {lang === 'ar' && (
                  <p
                    className="font-ibm-plex text-[24px] font-bold text-white text-start"
                    style={{ lineHeight: '31.2px' }}
                  >
                    منذ 2015 ،<br />نتائج مستمرة حتى اليوم
                  </p>
                )}
                {lang === 'en' && (
                  <p
                    className="font-ibm-plex text-[18px] font-bold text-start"
                    style={{ lineHeight: '23.4px', color: '#FF5500' }}
                  >
                    Since 2015,<br />results that continue today
                  </p>
                )}
              </div>
            </div>

            {/* Vertical divider — Figma: 180:5946, Line 2 */}
            {/* stroke rgba(255,255,255,0.24), strokeWeight=1.5 */}
            <div className="flex-shrink-0" style={{ width: '1.5px', alignSelf: 'stretch', background: 'rgba(255, 255, 255, 0.24)' }} />

            {/* Figma: 180:5917 — Stat items row */}
            {/* HORIZONTAL, SPACE_BETWEEN, CENTER, itemSpacing=40 */}
            {/* 4 items, each layoutGrow=1 (equal width) */}
            <div className="flex items-center flex-1" style={{ gap: '30px' }}>
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center"
                  style={{ flex: '1 1 0px', gap: '12px' }}
                >
                  {/* Icon — Figma: 44×44, stroke #FF5500 */}
                  <div className="w-[44px] h-[44px] flex items-center justify-center flex-shrink-0">
                    <Image src={stat.icon} alt={lang === 'ar' ? stat.arTitle : stat.enTitle} width={44} height={44} className="w-full h-full object-contain" />
                  </div>
                  {/* Title — Figma: fontSize=24, wt=700, lh=28.8, white, CENTER */}
                  <p
                    className="font-ibm-plex text-[24px] font-bold text-white text-center"
                    style={{ lineHeight: '28.8px' }}
                  >
                    {t(stat.arTitle, stat.enTitle)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
