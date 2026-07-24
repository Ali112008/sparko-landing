'use client';

import Image from 'next/image';
import { useLang } from '@/context/LanguageContext';

export default function HeroSection() {
  const { lang, toggle } = useLang();
  const t = (ar: string, en: string) => lang === 'ar' ? ar : en;

  return (
    <section className="relative pt-[40px] pb-[24px] overflow-hidden">
      {/* ===== WHITE CARD CONTAINER ===== */}
      {/* Figma: Container 316:11703 — VERTICAL layout, spacing=100, pad L/R=100, white, cornerRadius=24 */}
      {/* NO effects/shadows. NO strokes. Proportional: pad 100px→75px for 1440px viewport */}
      <div
        className="max-w-[94%] mx-auto bg-white rounded-[24px] overflow-hidden relative"
      >
        {/* ===== CONTENT AREA ===== */}
        {/* Figma: Frame 2121453282 (316:11705) — VERTICAL, spacing=150, counterAxisAlignItems=MAX */}
        {/* In Figma LTR: navbar (left) then text content (right, at x=1038) */}
        {/* In RTL: text content aligns to start (right), images on end (left) */}
        {/* Proportional padding: 100px→75px for 1440px viewport */}
        <div className="px-[5%] pb-[64px]">
          {/* Navbar Row — Layout follows page direction: RTL→Logo RIGHT/Toggle LEFT, LTR→Logo LEFT/Toggle RIGHT */}
          <div className="flex items-center justify-between pt-[24px]" style={{ paddingBottom: '16px' }}>
            <a href="#" className="flex items-center">
              <Image src="/logo.png" alt="Sparko" width={150} height={70} className="h-[70px] w-auto" priority />
            </a>
            <div className="flex items-center" style={{ gap: '23px' }}>
              {/* Saudi Flag / Language Toggle — Figma order: Flag first (closer to center) */}
              <button
                onClick={toggle}
                className="font-ibm-plex flex items-center justify-center gap-[8px] px-[12px] py-[6px] rounded-full text-[#2B2D2F] text-[13px] hover:bg-[#C8C8C8] transition-colors"
                style={{ background: 'rgba(175,175,175,0.1)', border: '0.8px solid rgba(126,126,126,0.2)' }}
              >
                {/* Chevron/Arrow vector — Figma: 15x6, fill=#2B2D2F, opacity=0.6 */}
                <svg className="w-[15px] h-[6px]" viewBox="0 0 15 6" fill="#2B2D2F" opacity="0.6">
                  <path d="M7.5 6L0 0h15L7.5 6z" />
                </svg>
                <span className="text-[22px]">{lang === 'ar' ? '🇸🇦' : '🇬🇧'}</span>
              </button>
              {/* Ecosystem Badge — Figma order: Ecosystem second (at far edge) */}
              <button
                className="font-ibm-plex flex items-center justify-center gap-[8px] px-[16px] py-[6px] rounded-full text-[#2B2D2F] hover:bg-[#C8C8C8] transition-colors"
                style={{ background: 'rgba(175,175,175,0.1)', fontSize: '12.8px', fontWeight: 500, border: '0.8px solid rgba(126,126,126,0.2)' }}
              >
                {t('منظومة', 'Ecosystem')} <span className="text-sparko-orange font-ibm-plex font-bold">Sparko.</span> {t('المتكاملة', 'Integrated')}
              </button>
            </div>
          </div>

          {/* Gap between navbar and text content */}
          {/* Figma: itemSpacing=150 in content frame. Proportional for 1440px: ~112px */}
          <div style={{ height: '112px' }} />

          {/* ===== HERO CONTENT ===== */}
          {/* Figma: Container (316:11770) — VERTICAL, spacing=32, primary=CENTER, counter=MAX */}
          {/* Text content at position (1038, 298) in LTR → aligns to right/end side */}
          {/* In RTL: text content aligns to start (right) side */}
          {/* Width: 634px in Figma → proportional ~38% of content width */}
          {/* We use flex-row with text on start side (right in RTL) and illustration on end side */}
          <div className="flex flex-row items-center gap-0 relative">
            {/* ===== TEXT SIDE ===== */}
            {/* Figma: Container (316:11770) — VERTICAL, spacing=32, width=634 */}
            <div className="w-[40%] pe-[40px] flex flex-col items-start z-10" style={{ gap: '32px' }}>
              {/* Badge: "نسبة قبول عالية" */}
              {/* Figma: Badge container (316:11771) — HORIZONTAL, primary=MAX, counter=CENTER, spacing=10 */}
              {/* Badge inner pill (316:11772) — HORIZONTAL, counter=CENTER, spacing=8, pad=16/16/6/6 */}
              {/* fill=#AFAFAF (rgba(175,175,175,1)), cornerRadius=50 */}
              {/* Contains ONLY TEXT "نسبة قبول عالية" — NO green dot, NO vector */}
              {/* Text: fontSize=14, wt=500, #2B2D2F, lh=19.2 */}
              <div className="inline-flex items-center gap-[8px] px-[16px] py-[6px] rounded-full"
                style={{ background: 'rgba(175,175,175,0.2)', border: '0.8px solid rgba(255,255,255,0.2)' }}
              >
                <span className="font-ibm-plex text-[14px] text-[#2B2D2F] font-medium" style={{ lineHeight: '19.2px' }}>
                  {t('نسبة قبول عالية', 'High acceptance rate')}
                </span>
              </div>

              {/* Heading */}
              {/* Figma: Frame 2121453279 (316:11774) — VERTICAL, spacing=24, counter=MAX */}
              {/* Two TEXT nodes with spacing=24 between them */}
              {/* Text 1: "قصة حقيقية من التدريب الميداني" fontSize=48, wt=700, #2B2D2F, lh=60, textAlign=RIGHT */}
              {/* Text 2: "إلى عرض وظيفي" fontSize=48, wt=700, #FF5500, lh=60, textAlign=RIGHT */}
              <div className="flex flex-col" style={{ gap: '24px' }}>
                <h1 className="font-ibm-plex font-bold text-start" style={{ fontSize: '48px', lineHeight: '60px' }}>
                  {lang === 'ar' ? (
                    <>
                      <span className="text-[#2B2D2F]">قصة حقيقية من </span>
                      <span className="text-[#FF5500]">التدريب الميداني</span>
                    </>
                  ) : (
                    <>
                      <span className="text-[#0B1A3E]">A true story from </span>
                      <span className="text-[#FF5500]">Field Training</span>
                    </>
                  )}
                </h1>
                <h1 className="font-ibm-plex font-bold text-start" style={{ fontSize: '48px', lineHeight: '60px' }}>
                  {lang === 'ar' ? (
                    <>
                      <span className="text-[#2B2D2F]">إلى </span>
                      <span className="text-[#FF5500]">عرض وظيفي</span>
                    </>
                  ) : (
                    <>
                      <span className="text-[#0B1A3E]">to a </span>
                      <span className="text-[#FF5500]">Job Offer</span>
                    </>
                  )}
                </h1>
              </div>

              {/* Subtitle */}
              {/* Figma: TEXT (316:11777) — "تجربة تعيشها ... و نتيجة تشوفها" */}
              {/* fontSize=24, wt=400, #2B2D2F, lh=24 (tight!), ls=0.16, textAlign=RIGHT */}
              <p className="font-ibm-plex text-[#2B2D2F] font-normal text-start"
                style={{ fontSize: '24px', lineHeight: '24px', letterSpacing: '0.16px' }}
              >
                {t('تجربة تعيشها ... و نتيجة تشوفها', 'An experience you live... and a result you see')}
              </p>

              {/* CTA Button */}
              {/* Figma: Link (316:11778) — HORIZONTAL, center-center, spacing=8 */}
              {/* pad=24/24/8/8, fill=#FF5500, cornerRadius=40, NO effects */}
              {/* Text: "ابدأ رحلتك الآن Start your journey now" fontSize=20, wt=500, white, lh=24 */}
              {/* NO arrow icon in Figma — just text */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-[8px] px-[24px] py-[8px] text-white rounded-[40px] font-ibm-plex font-medium hover:bg-[#E64D00] transition-all duration-300"
                style={{ fontSize: '20px', fontWeight: 500, lineHeight: '24px', background: '#FF5500', border: '1.6px solid #FF5500' }}
              >
                <span>{t('ابدأ رحلتك الآن', 'Start your journey now')}</span>
              </a>

              {/* App Store / Google Play buttons */}
              {/* These are supplementary download options (not from Figma hero data but from site design) */}
              <div className="flex items-center gap-[12px] justify-start">
                <button className="font-ibm-plex inline-flex items-center gap-[10px] px-[16px] py-[10px] bg-[#253A63] text-white rounded-[12px] text-[12px] hover:bg-[#2F4A7A] transition-colors">
                  <svg className="w-[20px] h-[20px] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 16.56 2.93 11.3 4.7 7.72C5.57 5.94 7.36 4.86 9.28 4.84C10.56 4.81 11.78 5.72 12.57 5.72C13.36 5.72 14.85 4.62 16.4 4.8C17.07 4.83 18.89 5.08 20.07 6.78C19.96 6.85 17.62 8.24 17.65 11.1C17.69 14.52 20.62 15.63 20.65 15.64C20.62 15.72 20.17 17.28 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" /></svg>
                  <div className="font-ibm-plex text-start leading-none"><div className="text-[10px] text-white/70">Download on the</div><div className="font-semibold text-[13px] mt-[2px]">App Store</div></div>
                </button>
                <button className="font-ibm-plex inline-flex items-center gap-[10px] px-[16px] py-[10px] bg-[#253A63] text-white rounded-[12px] text-[12px] hover:bg-[#2F4A7A] transition-colors">
                  <svg className="w-[20px] h-[20px] flex-shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5Z" fill="#4CAF50"/>
                    <path d="M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12Z" fill="#F44336"/>
                    <path d="M20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.5 12.92 20.16 13.19L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81Z" fill="#FFC107"/>
                    <path d="M6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z" fill="#2196F3"/>
                  </svg>
                  <div className="font-ibm-plex text-start leading-none"><div className="text-[10px] text-white/70">GET IT ON</div><div className="font-semibold text-[13px] mt-[2px]">Google Play</div></div>
                </button>
              </div>
            </div>

            {/* ===== ILLUSTRATION SIDE ===== */}
            {/* Figma: Images are ABSOLUTE positioned on the left side (LTR) / right side (RTL end) */}
            {/* image 7 (636x994) at relative (390,0) from container — main illustration */}
            {/* image 6 (572x900) at relative (400,1) — background illustration */}
            {/* NO #000000 fallback bg for images — transparent, inherit white from parent */}
            <div className="w-[60%] flex-shrink-0 relative flex items-center justify-center">
              <Image
                src="/design-hero-left.png"
                alt="Sparko Career Journey"
                width={636}
                height={994}
                className="w-full max-h-[520px] object-contain"
                priority
              />

              {/* ===== ORANGE QUOTE CARD ===== */}
              {/* Figma: Group 1000004751 (316:11848) — 316x315 */}
              {/* Inner structure: Avatar (85x85) at top-center sticking out ~42px above card */}
              {/* Card "Comments" (316:11850): 316x273, fill=#FF5500, cornerRadius=20 */}
              {/* VERTICAL, spacing=12, pad=24 all, counterAxisSizingMode=FIXED */}
              {/* Card effects: 2 DROP_SHADOWs */}
              {/* Shadow 1: rgba(0,0,0,0.07), offset(0,0), radius=15 */}
              {/* Shadow 2: rgba(0,0,0,0.25), offset(0,25), radius=50, spread=-12 */}
              {/* Positioned at bottom of illustration area */}
              {/* Proportional for 1440px: card width ~237px, avatar ~64px */}
              <div
                className="absolute bottom-[0%] end-[-10px] z-10"
                style={{ maxWidth: '280px' }}
              >
                {/* Avatar — positioned ABOVE the card */}
                {/* Figma: RECTANGLE 85x85, cornerRadius=1000, IMAGE fill */}
                {/* Avatar at relative (116,0) in group → centered horizontally (316/2 - 85/2 ≈ 115.5) */}
                {/* Avatar sticks out 42px above the card (card starts at y=42 relative to group) */}
                {/* Proportional: avatar 64px, offset ~31px above card */}
                <div className="flex justify-center -mt-[31px] mb-[0px]">
                  <div
                    className="w-[64px] h-[64px] rounded-full overflow-hidden flex-shrink-0"
                    style={{ border: '2px solid #FF5500' }}
                  >
                    <Image src="/avatar-person.png" alt="Majed Baqshan" width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Card Body */}
                {/* Figma: VERTICAL, spacing=12, pad=24 all, fill=#FF5500, cornerRadius=20 */}
                {/* Shadows: 0 0 15px rgba(0,0,0,0.07), 0 25px 50px -12px rgba(0,0,0,0.25) */}
                <div
                  className="rounded-[20px] p-[24px]"
                  style={{
                    background: 'rgba(255,85,0,0.8)',
                    boxShadow: '0 0 15px rgba(0,0,0,0.07), 0 25px 50px -12px rgba(0,0,0,0.25)',
                  }}
                >
                  {/* Quote mark " — Figma: fontSize=80, wt=400, white, ls=0.16 */}
                  <span className="font-ibm-plex text-white text-[80px] font-normal leading-none" style={{ letterSpacing: '0.16px' }}>&ldquo;</span>

                  {/* Quote text */}
                  {/* Figma: fontSize=23.2, wt=600, white, lh=44, textAlign=RIGHT */}
                  {/* Inner frame spacing≈10 between quote text blocks */}
                  <p className="font-ibm-plex text-white font-semibold text-start"
                    style={{ fontSize: '23px', lineHeight: '44px', marginTop: '-8px' }}
                  >
                    {t('تجربة مختلفة تعتبر نقطة تحول في مساري المهني', 'A different experience that was a turning point in my career')}
                  </p>

                  {/* Author */}
                  {/* Figma: fontSize=16, wt=400, white, lh=24 */}
                  <p className="font-ibm-plex text-white font-normal text-start"
                    style={{ fontSize: '16px', lineHeight: '24px', marginTop: '12px' }}
                  >
                    Majed Baqshan<br />{t('منذ 2015', 'Since 2015')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
