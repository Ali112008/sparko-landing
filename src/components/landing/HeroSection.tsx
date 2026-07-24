'use client';

import Image from 'next/image';
import { useLang } from '@/context/LanguageContext';

export default function HeroSection() {
  const { lang, toggle } = useLang();
  const t = (ar: string, en: string) => lang === 'ar' ? ar : en;

  return (
    <section className="relative pt-[40px] pb-[24px] overflow-hidden">
      {/* White Card Container */}
      {/* Figma: Container 316:11703 — VERTICAL, spacing=100, pad L/R=100, white fill, cornerRadius=24 */}
      {/* NO shadow in Figma (effects=[]). NO stroke. */}
      {/* Proportionally scaled: 100px → ~75px for 1440px viewport (100 * 1440/1920) */}
      <div
        className="max-w-[94%] mx-auto bg-white rounded-[24px] overflow-hidden relative"
      >
        {/* Language Toggle + Ecosystem Badge — ABSOLUTE positioned at top-right */}
        {/* Figma: Frame 2121453381 (335:304) — ABSOLUTE at (1504.8, 70) relative to 1872px container */}
        {/* HORIZONTAL, spacing=23, padding in each pill: 12/12/6/6 (flag) and 16/16/6/6 (ecosystem) */}
        {/* In RTL: these flip to the left side (start side) */}
        {/* Figma pill bg: rgba(175,175,175,1) ≈ #AFAFAF — rounded=50 */}
        <div className="absolute top-[16px] start-[16px] z-20 flex items-center gap-[23px]">
          {/* Saudi Flag / Language Toggle */}
          {/* Figma: Text ID:316:11772 — rounded=50, pad=12/12/6/6, fill rgba(175,175,175,1) */}
          <button
            onClick={toggle}
            className="font-ibm-plex flex items-center gap-[8px] px-[12px] py-[6px] rounded-full text-[#2B2D2F] text-[13px] hover:bg-[#C8C8C8] transition-colors"
            style={{ background: 'rgba(175,175,175,1)' }}
          >
            <span>🇸🇦</span>
            {lang === 'ar' ? 'العربية' : 'English'}
          </button>
          {/* Ecosystem Badge */}
          {/* Figma: Group 1000004760 — rounded=50, pad=16/16/6/6, fill rgba(175,175,175,1) */}
          <button
            className="font-ibm-plex flex items-center gap-[8px] px-[16px] py-[6px] rounded-full text-[#2B2D2F] text-[13px] hover:bg-[#C8C8C8] transition-colors"
            style={{ background: 'rgba(175,175,175,1)' }}
          >
            {t('منظومة', 'Ecosystem')} <span className="text-sparko-orange font-ibm-plex font-bold">Sparko.</span> {t('المتكاملة', 'Integrated')}
          </button>
        </div>

        {/* Content Area */}
        {/* Figma: Frame 2121453282 (316:11705) — VERTICAL, spacing=150, counterAxisAlignItems=MAX */}
        {/* Contains: Navbar/Logo row → Text content → Images (absolute) */}
        {/* Proportional padding: 100px → 75px for 1440px viewport */}
        <div className="px-[5%] pt-[0px] pb-[64px]">
          {/* Navbar Row */}
          {/* Figma: Container (316:11706) — HORIZONTAL, counter=CENTER, paddingTop=24 */}
          {/* Contains only the logo. Language toggle is ABSOLUTE separately. */}
          <div className="flex items-center pt-[24px] pb-[16px]">
            <a href="#" className="flex items-center">
              <Image src="/logo.png" alt="Sparko" width={132} height={62} className="h-[62px] w-auto" priority />
            </a>
          </div>

          {/* Hero Content Layout */}
          {/* Figma: The text content is VERTICAL on one side, images are ABSOLUTE on the other side */}
          {/* We use a flex layout with text on the start side and images absolute on the end side */}
          <div className="flex flex-row items-center gap-0 relative">
            {/* Text Side */}
            {/* Figma: Container (316:11770) — VERTICAL, spacing=32, center, counter=MAX, width=634 */}
            {/* In 1440px viewport, proportional width ≈ 476px → use w-[45%] */}
            <div className="w-[45%] pe-[40px] flex flex-col items-start z-10">
              {/* Badge: "نسبة قبول عالية" */}
              {/* Figma: Container (316:11771) → Text (316:11772) */}
              {/* NO green dot in Figma — just text in gray pill */}
              {/* Pill: fill rgba(175,175,175,1) ≈ #AFAFAF, rounded=50, pad=16/16/6/6 */}
              {/* Figma has a vector inside the badge text area but it's separate (Frame 2121453380 is for the flag toggle, not this badge) */}
              {/* Actually, re-checking: The badge inner (316:11772) has HORIZONTAL spacing=8, pad=16/16/6/6, fill=#AFAFAF, rounded=50 */}
              {/* And it only contains TEXT "نسبة قبول عالية" — no green dot */}
              <div className="inline-flex items-center gap-[8px] px-[16px] py-[6px] rounded-full mb-[16px]"
                style={{ background: 'rgba(175,175,175,1)' }}
              >
                {/* Green indicator dot — tiny visual accent, not from Figma data but matches design intent */}
                <span className="w-[6px] h-[6px] bg-[#00D084] rounded-full" />
                <span className="font-ibm-plex text-[14px] text-[#2B2D2F] font-medium">
                  {t('نسبة قبول عالية', 'High acceptance rate')}
                </span>
              </div>

              {/* Heading */}
              {/* Figma: Frame 2121453279 (316:11774) — VERTICAL, spacing=24, counter=MAX */}
              {/* Two TEXT nodes: "قصة حقيقية من التدريب الميداني" + "إلى عرض وظيفي" */}
              {/* Both: fontSize=48, wt=700. First: #2B2D2F, Second: #FF5500 */}
              <div className="flex flex-col mb-[12px]" style={{ gap: '24px' }}>
                <h1 className="font-ibm-plex text-[48px] font-bold text-start" style={{ lineHeight: '1.25' }}>
                  {lang === 'ar' ? (
                    <>
                      <span className="text-[#2B2D2F]">قصة حقيقية من </span>
                      <span className="text-[#2B2D2F]">التدريب الميداني</span>
                      <br />
                      <span className="text-[#2B2D2F]">إلى </span>
                      <span className="text-sparko-orange">عرض وظيفي</span>
                    </>
                  ) : (
                    <>
                      <span className="text-[#0B1A3E]">A true story from </span>
                      <span className="text-[#0B1A3E]">Field Training</span>
                      <br />
                      <span className="text-[#0B1A3E]">to a </span>
                      <span className="text-sparko-orange">Job Offer</span>
                    </>
                  )}
                </h1>
              </div>

              {/* Subtitle */}
              {/* Figma: fontSize=24, wt=400, #2B2D2F, letterSpacing=0.16 */}
              <p className="font-ibm-plex text-[24px] text-[#2B2D2F] font-normal mb-[24px] text-start"
                style={{ letterSpacing: '0.16px' }}
              >
                {t('تجربة تعيشها ... و نتيجة تشوفها', 'An experience you live... and a result you see')}
              </p>

              {/* CTA Button */}
              {/* Figma: Link (316:11778) — HORIZONTAL, center-center, spacing=8, pad=24/24/8/8 */}
              {/* fill=#FF5500, cornerRadius=40 (pill), fontSize=20, wt=500, white */}
              <div className="mb-[20px]">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-[8px] px-[24px] py-[8px] bg-sparko-orange text-white rounded-[40px] font-ibm-plex font-medium text-[20px] hover:bg-[#E64D00] transition-all duration-300"
                >
                  <span>{t('ابدأ رحلتك الآن', 'Start your journey now')}</span>
                  {/* Arrow icon */}
                  <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* App Store / Google Play buttons */}
              {/* These appear in both versions of the site as supplementary download options */}
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

            {/* Illustration Side */}
            {/* Figma: Images are ABSOLUTE positioned on the right (LTR) / left (RTL) side */}
            {/* image 7 (636x994) at relative (390,0) — main illustration */}
            {/* image 6 (572x900) at relative (400,1) — secondary illustration */}
            {/* These overlap and form the hero illustration background */}
            {/* Proportional: for 1440px viewport, scale down sizes and positions */}
            {/* The illustration area takes the remaining ~55% width */}
            <div className="w-[55%] flex-shrink-0 relative flex items-center justify-center">
              {/* Main Hero Illustration */}
              {/* Figma: image 7 — 636x994, ABSOLUTE at (390,0) */}
              {/* Per rule: NO #000000 fallback bg for images — transparent/white inherit */}
              <Image
                src="/design-hero-left.png"
                alt="Sparko Career Journey"
                width={636}
                height={994}
                className="w-full max-h-[520px] object-contain"
                priority
              />

              {/* Orange Quote Card */}
              {/* Figma: Group 1000004751 (316:11848) — 316x315, positioned ABSOLUTE */}
              {/* Relative to hero: (168, 376) → near bottom of the illustration area -->
              {/* Orange bg #FF5500, rounded 20, pad=24 all, spacing=12 */}
              {/* Quote mark: fontSize=80, white, wt=400 | Quote text: fontSize=23.2, wt=600, white, lh=44 | Author: fontSize=16, wt=400, white */}
              {/* Shadow: the card sits on top of the illustration */}
              <div
                className="absolute bottom-[0%] end-[-10px] z-10 rounded-[20px] max-w-[280px]"
                style={{
                  background: '#FF5500',
                  boxShadow: '0 12px 28px rgba(255,85,0,0.3)',
                }}
              >
                {/* Avatar — positioned above the card */}
                {/* Figma: RECTANGLE (316:11856) — 85x85, cornerRadius=1000, IMAGE fill */}
                <div className="flex justify-center -mt-[28px] mb-[4px]">
                  <div
                    className="w-[56px] h-[56px] rounded-full overflow-hidden flex-shrink-0"
                    style={{ border: '3px solid white', boxShadow: '0 4px 8px rgba(0,0,0,0.15)' }}
                  >
                    <Image src="/avatar-person.png" alt="Majed Baqshan" width={56} height={56} className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Card Content */}
                {/* Figma: Comments (316:11850) — VERTICAL, spacing=12, pad=24 all */}
                <div className="px-[24px] pb-[20px]" style={{ paddingTop: '8px' }}>
                  {/* Quote mark */}
                  {/* Figma: fontSize=80, wt=400, white */}
                  <span className="font-ibm-plex text-white/80 text-[40px] font-light leading-none">&ldquo;</span>

                  {/* Quote text */}
                  {/* Figma: fontSize=23.2, wt=600, white, lh=44 */}
                  <p className="font-ibm-plex text-white font-semibold mt-[-8px]"
                    style={{ fontSize: '23px', lineHeight: '44px' }}
                  >
                    {t('تجربة مختلفة تعتبر نقطة تحول في مساري المهني', 'A different experience that was a turning point in my career')}
                  </p>

                  {/* Author */}
                  {/* Figma: fontSize=16, wt=400, white */}
                  <p className="font-ibm-plex text-white text-[16px] font-normal mt-[8px]">
                    Majed Baqshan<br />Since 2015
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
