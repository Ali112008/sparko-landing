'use client';

import Image from 'next/image';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useLang } from '@/context/LanguageContext';

// Figma: 7 icon items in the dark strip
// Each: 80x80 icon circle (fill=#000000 EXPLICITLY by Figma, stroke=#FF5500 wt=3) + text (fontSize=20, wt=600, white, lh=32)
// Last item "لحظة السؤال" has a play icon inside
const testimonialItems = [
  { id: 1, ar: 'لحظة السؤال', en: 'The Question Moment', isPlay: true },
  { id: 2, ar: 'الخطوة الأولى', en: 'The First Step', isPlay: false },
  { id: 3, ar: 'يشتغل فعليا', en: 'It Actually Works', isPlay: false },
  { id: 4, ar: 'الأثر مثبت', en: 'Proven Impact', isPlay: false },
  { id: 5, ar: 'يدنا بيده', en: 'Hand in Hand', isPlay: false },
  { id: 6, ar: 'يستفيد و يفيد', en: 'Benefits & Contributes', isPlay: false },
  { id: 7, ar: 'الفوز المستحق', en: 'Deserved Win', isPlay: false },
];

export default function TestimonialsSection() {
  const { lang } = useLang();
  const t = (ar: string, en: string) => lang === 'ar' ? ar : en;

  return (
    <section id="testimonials" className="relative py-[96px] overflow-hidden">
      {/* Figma: Frame 2121453265 (180:5759) — VERTICAL, spacing=100, counterAxisAlignItems=CENTER */}
      {/* Inside: Background+Border+Shadow (180:5760) — the dark card */}
      <div className="relative z-10 max-w-[86%] mx-auto">
        {/* ===== DARK CARD CONTAINER ===== */}
        {/* Figma: Background+Border+Shadow (180:5760) */}
        {/* VERTICAL, center-center, spacing=44, pad=44 all, cornerRadius=24 */}
        {/* fill: linear-gradient(180deg, #273C65 → #182B51) */}
        {/* stroke: rgba(255,254,254,1), strokeWeight=1.5 */}
        {/* shadow: DROP_SHADOW rgba(0,0,0,0.25) offset(0,25) radius=50 spread=-12 */}
        {/* HorizontalBorder+Blur: ABSOLUTE, stroke rgba(43,127,255,1), strokeWeight=1 — blue glow line */}
        <div
          className="rounded-[24px] overflow-hidden relative"
          style={{
            background: 'linear-gradient(180deg, #273C65 0%, #182B51 100%)',
            border: '1.5px solid rgba(255, 254, 254, 1.0)',
            boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
            padding: '44px',
          }}
        >
          {/* Blue glow line at bottom — ABSOLUTE */}
          {/* Figma: HorizontalBorder+Blur (180:5762) — stroke rgba(43,127,255,1), 1px, with blur */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[103%] h-[1px]"
            style={{
              borderTop: '1px solid rgba(43, 127, 255, 0.7)',
              filter: 'blur(10px)',
            }}
          />

          {/* ===== CONTENT AREA ===== */}
          {/* Figma: VERTICAL, center-center, spacing=44 */}
          <div className="flex flex-col items-center justify-center" style={{ gap: '44px' }}>
            {/* ===== TITLE AREA ===== */}
            {/* Figma: Frame 2121453366 (302:8003) — VERTICAL, center, spacing=24 */}
            {/* Contains: heading group + subtitle */}
            <div className="flex flex-col items-center text-center" style={{ gap: '24px' }}>
              {/* Heading with inline logo */}
              {/* Figma: Group 1000004750 (302:8002) — 884x66 */}
              {/* Text: " مع [Sparko logo] التدريب الميداني يتحول إلى نجاح حقيقي " (fontSize=40, wt=700, white, lh=48, CENTER) */}
              {/* Logo (140x66) positioned inline within the text line */}
              <h1 className="font-ibm-plex text-[40px] font-bold text-white" style={{ lineHeight: '48px', textAlign: 'center' }}>
                &ldquo;{' '}
                <Image
                  src="/logo.png"
                  alt="Sparko."
                  width={140}
                  height={66}
                  className="inline-block h-[1.4em] w-auto align-middle mx-[4px]"
                />{' '}
                {t('التدريب الميداني يتحول إلى نجاح حقيقي', 'Field training turns into real success')}{' '}
                &rdquo;
              </h1>

              {/* Subtitle */}
              {/* Figma: TEXT (180:5768) — "نتيجة حقيقية … تتكرر كل يوم" */}
              {/* fontSize=20, wt=400, white, lh=28, ls=0.16, CENTER */}
              {/* Container (180:5765) — VERTICAL, counter=CENTER, spacing=24 */}
              <p
                className="font-ibm-plex text-[20px] font-normal text-white"
                style={{ lineHeight: '28px', letterSpacing: '0.16px' }}
              >
                &ldquo;{t('نتيجة حقيقية … تتكرر كل يوم', 'A real result… repeated every day')}&rdquo;
              </p>
            </div>

            {/* ===== ICON STRIP WITH ARROWS ===== */}
            {/* Figma: Frame 2121453292 (180:5769) — HORIZONTAL, SPACE_BETWEEN, center, spacing=24 */}
            {/* Contains: left arrow (18x36 white) + dark strip + right arrow (18x36 white) */}
            <div className="flex items-center justify-between w-full" style={{ gap: '24px' }}>
              {/* Left Arrow */}
              {/* Figma: weui:arrow-filled (18x36), fill=white */}
              <button className="text-white hover:text-white/80 transition-colors flex-shrink-0" aria-label={t('السابق', 'Previous')}>
                {lang === 'ar' ? <ChevronRight className="w-[18px] h-[36px]" /> : <ChevronLeft className="w-[18px] h-[36px]" />}
              </button>

              {/* ===== DARK STRIP ===== */}
              {/* Figma: Frame 1686552644 (180:5772) — HORIZONTAL, SPACE_BETWEEN, center, spacing=64 */}
              {/* fill: rgba(2,9,19,1) = #020919 — VERY dark navy (NOT #000000) */}
              {/* This is the dark strip background behind the icon row */}
              {/* Per user rule: #020919 is the EXPLICIT Figma fill, not #000000 — we must use it */}
              <div
                className="flex items-center overflow-x-auto scrollbar-hide flex-1"
                style={{
                  background: '#020919',
                  gap: '64px',
                  justifyContent: 'space-between',
                }}
              >
                {testimonialItems.map((item) => (
                  <div key={item.id} className="flex flex-col items-center justify-center flex-shrink-0" style={{ gap: '20px', paddingLeft: '24px', paddingRight: '24px' }}>
                    {/* Icon Circle */}
                    {/* Figma: Frame 2121453248 — 80x80 */}
                    {/* fill: #000000 — EXPLICITLY specified by Figma (per user rule, this is allowed!) */}
                    {/* stroke: #FF5500 strokeWeight=3 (NOT 1.5!) */}
                    {/* shadow: rgba(1,7,255,0.24) offset(0,4) radius=4 — blue glow shadow */}
                    {/* cornerRadius=50 (circle) */}
                    <div
                      className="w-[80px] h-[80px] rounded-full flex items-center justify-center overflow-hidden"
                      style={{
                        background: '#000000',
                        border: '3px solid #FF5500',
                        boxShadow: '0px 4px 4px rgba(1, 7, 255, 0.24)',
                      }}
                    >
                      {item.isPlay ? (
                        /* Play icon — Figma: solar:play-bold vector (30x31, white) with shadow rgba(255,255,255,0.25) */
                        <svg width="30" height="31" viewBox="0 0 30 31" fill="white">
                          <path d="M10 6L22 15.5L10 25V6Z" />
                        </svg>
                      ) : (
                        <Image
                          src="/avatar-person.png"
                          alt={lang === 'ar' ? item.ar : item.en}
                          width={80}
                          height={80}
                          className="w-full h-full object-contain"
                        />
                      )}
                    </div>
                    {/* Text label */}
                    {/* Figma: fontSize=20, wt=600, white, lh=32, CENTER */}
                    <p className="font-ibm-plex text-[20px] font-semibold text-white text-center whitespace-nowrap" style={{ lineHeight: '32px' }}>
                      {lang === 'ar' ? item.ar : item.en}
                    </p>
                  </div>
                ))}
              </div>

              {/* Right Arrow */}
              <button className="text-white hover:text-white/80 transition-colors flex-shrink-0" aria-label={t('التالي', 'Next')}>
                {lang === 'ar' ? <ChevronLeft className="w-[18px] h-[36px]" /> : <ChevronRight className="w-[18px] h-[36px]" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
