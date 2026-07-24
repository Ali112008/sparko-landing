'use client';

import Image from 'next/image';
import { useLang } from '@/context/LanguageContext';

// Figma: Dark panel — 5 problem items
// Each: icon (80x80, white) + text (fontSize=20, wt600, white, lh=32)
// Dividers between: stroke white opacity=0.24, height ~148px
// Container: VERTICAL, itemSpacing=20, padding L=24 R=24
// Strip: HORIZONTAL, itemSpacing=64, fill visible=false → NO background
const problemItems = [
  { icon: '/icon-close.png', ar: 'بدون نتيجة ملموسة', en: 'No tangible result' },
  { icon: '/icon-file.png', ar: 'بدون تقرير موثق', en: 'No documented report' },
  { icon: '/icon-aiming.png', ar: 'بدون متابعة فعالة', en: 'No effective follow-up' },
  { icon: '/icon-collaborate.png', ar: 'بدون تقييم حقيقي', en: 'No real evaluation' },
  { icon: '/icon-star.png', ar: 'بدون توجيه واضح', en: 'No clear guidance' },
];

// Figma: White panel — 6 feature cards
// Each card: VERTICAL, itemSpacing=20, padding=24, cornerRadius=24
// border: rgba(0,0,0,0.24)
// fills=[] → NO background (transparent, inherits white from parent)
// Icon: 80x80, original color (NOT inverted)
// AR text: fontSize=20, wt600, #2B2D2F, lh=32
// EN text: fontSize=18, wt600, #2B2D2F, lh=32
const featureItems = [
  { icon: '/icon-diploma.png', ar: 'توثيق تجربة احترافية', en: 'Professional Experience Documentation' },
  { icon: '/icon-verified.png', ar: 'تقرير مهني موثق', en: 'Verified Professional Report' },
  { icon: '/icon-user-follow.png', ar: 'اشراف ومتابعة', en: 'Supervision & Follow-up' },
  { icon: '/icon-rate.png', ar: 'تقييم أداء يومي', en: 'Daily Performance Evaluation' },
  { icon: '/icon-tasks.png', ar: 'تطبيق واقعي', en: 'Practical Tasks' },
  { icon: '/icon-training.png', ar: 'تدريب ميداني منظم', en: 'Structured Field Training' },
];

export default function ProblemsFeaturesSection() {
  const { lang } = useLang();
  const t = (ar: string, en: string) => lang === 'ar' ? ar : en;

  return (
    <section className="relative py-14">
      <div className="max-w-[86%] mx-auto">
        {/* ========== DARK BLUE TOP PANEL ========== */}
        {/* Figma: 180:5807 — Background+Border+Shadow */}
        {/* VERTICAL, CENTER-CENTER, padding=44, itemSpacing=44 */}
        {/* fill: linear-gradient(180deg, #273C65 → #182B51) */}
        {/* stroke: rgba(255,254,254,0.4), strokeWeight=1.5 */}
        {/* shadow: DROP_SHADOW(0,25,50,rgba(0,0,0,0.25)) */}
        {/* cornerRadius: 24px 24px 0 0 (top only) */}
        <div
          className="overflow-hidden relative"
          style={{
            background: 'linear-gradient(180deg, #273C65 0%, #182B51 100%)',
            border: '1.5px solid rgba(255, 254, 254, 0.4)',
            boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
            borderRadius: '24px 24px 0 0',
          }}
        >
          {/* Figma: Container (180:5812) — VERTICAL, itemSpacing=24, CENTER */}
          <div className="flex flex-col items-center justify-center py-[44px] px-[44px]" style={{ gap: '44px' }}>
            {/* Heading + Subtitle */}
            {/* Figma: Container — VERTICAL, itemSpacing=24, CENTER */}
            <div className="flex flex-col items-center text-center" style={{ gap: '24px' }}>
              {/* Heading: "أغلب التجارب تمر بدون أثر" (fontSize=40, wt=700, white, lh=48) */}
              <h2 className="font-ibm-plex text-[40px] font-bold text-white text-center" style={{ lineHeight: '48px' }}>
                {t('أغلب التجارب تمر بدون أثر', 'Most experiences pass without impact')}
              </h2>
              {/* Subtitle: "Most training experiences pass without impact" (fontSize=24, wt=400, white, lh=28, ls=0.16) */}
              <p className="font-ibm-plex text-[24px] font-normal text-white text-center" style={{ lineHeight: '28px', letterSpacing: '0.16px' }}>
                {t('أغلب تجارب التدريب تمر بدون أثر', 'Most training experiences pass without impact')}
              </p>
            </div>

            {/* 5 Problem Icons Row */}
            {/* Figma: 180:5816 — HORIZONTAL, itemSpacing=24 */}
            {/* Desktop: 5 items in a single row with dividers */}
            {/* Mobile: wraps to a grid (3+2) with dividers hidden */}
            <div className="hidden md:flex items-center w-full" style={{ gap: '24px' }}>
              <div className="flex items-center justify-between w-full">
                {problemItems.map((item, index) => (
                  <div key={index} className="flex items-center">
                    {/* Vertical divider between items */}
                    {/* Figma: stroke white opacity=0.24 (NOT 0.4) */}
                    {index > 0 && (
                      <div className="flex-shrink-0" style={{ width: '1px', height: '148px', background: 'rgba(255, 255, 255, 0.24)' }} />
                    )}
                    {/* Container: VERTICAL, itemSpacing=20, padding L=24 R=24 */}
                    <div className="flex flex-col items-center justify-center" style={{ gap: '20px', paddingLeft: '24px', paddingRight: '24px' }}>
                      {/* Icon: 80x80, white color (brightness-0 invert for PNG on dark bg) */}
                      <div className="w-[80px] h-[80px] flex items-center justify-center">
                        <Image src={item.icon} alt={lang === 'ar' ? item.ar : item.en} width={80} height={80} className="w-full h-full object-contain brightness-0 invert" />
                      </div>
                      {/* Text: fontSize=20, wt=600, white, lh=32 */}
                      <p className="font-ibm-plex text-[20px] font-semibold text-white text-center" style={{ lineHeight: '32px' }}>
                        {lang === 'ar' ? item.ar : item.en}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile: Problem icons in a wrapping grid */}
            <div className="flex md:hidden flex-wrap justify-center w-full" style={{ gap: '24px' }}>
              {problemItems.map((item, index) => (
                <div key={`mobile-p-${index}`} className="flex flex-col items-center justify-center" style={{ gap: '12px', padding: '12px' }}>
                  {/* Icon: 48x48 on mobile */}
                  <div className="w-[48px] h-[48px] flex items-center justify-center">
                    <Image src={item.icon} alt={lang === 'ar' ? item.ar : item.en} width={48} height={48} className="w-full h-full object-contain brightness-0 invert" />
                  </div>
                  {/* Text: fontSize=14 on mobile */}
                  <p className="font-ibm-plex text-[14px] font-semibold text-white text-center" style={{ lineHeight: '22px' }}>
                    {lang === 'ar' ? item.ar : item.en}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========== WHITE BOTTOM PANEL ========== */}
        {/* Figma: 261:1733 — Background+Border+Shadow */}
        {/* VERTICAL, counter=CENTER, padding=44, itemSpacing=44 */}
        {/* fill: rgba(255,255,255,1) = WHITE */}
        {/* stroke: rgba(255,254,254,0.4), strokeWeight=1.5 */}
        {/* shadow: DROP_SHADOW(0,25,50,rgba(0,0,0,0.25)) */}
        {/* cornerRadius: 0 0 24px 24px (bottom only) */}
        <div
          className="bg-white relative overflow-hidden"
          style={{
            border: '1.5px solid rgba(255, 254, 254, 0.4)',
            boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
            borderRadius: '0 0 24px 24px',
          }}
        >
          {/* Figma: Container — VERTICAL, itemSpacing=24, CENTER */}
          <div className="flex flex-col items-center py-[44px] px-[44px]" style={{ gap: '44px' }}>
            {/* Heading + Subtitle */}
            <div className="flex flex-col items-center text-center" style={{ gap: '24px' }}>
              {/* Heading: "هنا كل شيء محسوب" (fontSize=40, wt=700, #FF5500, lh=48) */}
              <h2 className="font-ibm-plex text-[40px] font-bold text-sparko-orange text-center" style={{ lineHeight: '48px' }}>
                {t('هنا كل شيء محسوب', 'Here, everything is calculated')}
              </h2>
              {/* Subtitle: "Here, everything is calculated" (fontSize=24, wt=400, #2B2D2F, lh=28, ls=0.16) */}
              <p className="font-ibm-plex text-[24px] font-normal text-[#2B2D2F] text-center" style={{ lineHeight: '28px', letterSpacing: '0.16px' }}>
                {t('Here, everything is calculated', 'Here, everything is calculated')}
              </p>
            </div>

            {/* Green statement: "كل خطوة لها هدف ... وكل تجربة لها نتيجة" */}
            {/* Figma: fontSize=36, wt=700, #00D084, lh=48 */}
            <p className="font-ibm-plex text-[36px] font-bold text-sparko-green text-center" style={{ lineHeight: '48px' }}>
              {t('كل خطوة لها هدف ... وكل تجربة لها نتيجة', 'Every step has a goal... and every experience has a result')}
            </p>

            {/* ===== Phone Mockup + Feature Cards ===== */}
            {/* Figma: Frame 2121453275 — HORIZONTAL, itemSpacing=24, CENTER */}
            {/* Child 0: Features strip (LEFT in LTR) */}
            {/* Child 1: Phone mockup (RIGHT in LTR) */}
            {/* RTL: Phone START(RIGHT), Features END(LEFT) */}
            {/* HTML order: phone first → START(RTL), features second → END(RTL) */}
            <div className="flex w-full items-center" style={{ gap: '24px' }}>
              {/* Phone Mockup */}
              {/* Figma: Group 1000004725 — 283x575 */}
              {/* Desktop only — hidden on mobile to let cards wrap freely */}
              <div className="hidden md:block flex-shrink-0" style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))' }}>
                <Image src="/phone-mockup.png" alt="Sparko App" width={283} height={575} className="h-auto object-contain" style={{ width: '283px', maxHeight: '575px' }} />
              </div>

              {/* Feature Cards Strip */}
              {/* Figma: Frame 1686552644 — HORIZONTAL, itemSpacing=16 */}
              {/* fill visible=false → NO dark background strip (per user rule!) */}
              {/* Desktop: 6 cards in a row with phone mockup */}
              {/* Mobile: cards wrap in a grid, phone hidden on smallest screens */}
              <div className="hidden md:flex gap-[16px] flex-1 min-w-0">
                {featureItems.map((card, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center flex-1 min-w-0"
                    style={{
                      padding: '24px',
                      gap: '20px',
                      borderRadius: '24px',
                      border: '1px solid rgba(0, 0, 0, 0.24)',
                      /* NO background fill — inherits white from parent */
                    }}
                  >
                    {/* Icon: 80x80, ORIGINAL color (NOT brightness-0 invert!) */}
                    <div className="w-[80px] h-[80px] flex items-center justify-center">
                      <Image src={card.icon} alt={lang === 'ar' ? card.ar : card.en} width={80} height={80} className="w-full h-full object-contain" />
                    </div>
                    {/* Text: SINGLE language display */}
                    {/* AR: fontSize=20, wt=600, #2B2D2F, lh=32 */}
                    {/* EN: fontSize=18, wt=600, #2B2D2F, lh=32 */}
                    <p
                      className="font-ibm-plex text-[#2B2D2F] text-center"
                      style={{
                        fontSize: lang === 'ar' ? '20px' : '18px',
                        fontWeight: 600,
                        lineHeight: '32px',
                      }}
                    >
                      {lang === 'ar' ? card.ar : card.en}
                    </p>
                  </div>
                ))}
              </div>

              {/* Mobile: Feature cards in wrapping grid, phone hidden */}
              <div className="flex md:hidden flex-wrap justify-center flex-1 min-w-0" style={{ gap: '12px' }}>
                {featureItems.map((card, index) => (
                  <div
                    key={`mobile-f-${index}`}
                    className="flex flex-col items-center justify-center"
                    style={{
                      padding: '16px',
                      gap: '12px',
                      borderRadius: '16px',
                      border: '1px solid rgba(0, 0, 0, 0.24)',
                      minWidth: '140px',
                      flex: '1 1 140px',
                    }}
                  >
                    {/* Icon: 48x48 on mobile */}
                    <div className="w-[48px] h-[48px] flex items-center justify-center">
                      <Image src={card.icon} alt={lang === 'ar' ? card.ar : card.en} width={48} height={48} className="w-full h-full object-contain" />
                    </div>
                    {/* Text: smaller on mobile */}
                    <p
                      className="font-ibm-plex text-[#2B2D2F] text-center"
                      style={{
                        fontSize: '13px',
                        fontWeight: 600,
                        lineHeight: '20px',
                      }}
                    >
                      {lang === 'ar' ? card.ar : card.en}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
