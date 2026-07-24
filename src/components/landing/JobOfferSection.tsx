'use client';

import Image from 'next/image';
import { useLang } from '@/context/LanguageContext';

export default function JobOfferSection() {
  const { lang } = useLang();
  const t = (ar: string, en: string) => lang === 'ar' ? ar : en;

  return (
    <section className="relative py-[40px]">
      <div className="max-w-[86%] mx-auto">
        {/* Figma: 180:5953 — Background+Border+Shadow (THE CARD) */}
        {/* 1680×400, cornerRadius=24, clipsContent=true */}
        {/* fill: radial-gradient(#21355A → #0C1B3A) */}
        {/* stroke: rgba(255,255,254,1) at 0.12 opacity, 1.5px, INSIDE */}
        {/* shadow: rgba(0,0,0,0.25) offset(0,25) radius=50 spread=-12 */}
        {/* NO padding on card — padding is on content frame */}
        <div
          className="rounded-[24px] overflow-hidden relative"
          style={{
            background: 'radial-gradient(circle at center, #21355A 0%, #0C1B3A 100%)',
            border: '1.5px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
          }}
        >
          {/* Decorative vignette overlay — Figma: 180:5957 */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(3,9,20,0) 20%, rgba(3,9,20,0.8) 95%)',
            }}
          />

          {/* Blue glow line — Figma: 180:5955 (visible=false, kept for consistency) */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[103%] h-[1px] pointer-events-none z-10"
            style={{ borderTop: '1px solid rgba(43, 127, 255, 0.7)', filter: 'blur(10px)' }}
          />

          {/* Figma: 180:5958 — Frame (CONTENT FRAME) */}
          {/* 1678×397, HORIZONTAL, CENTER, itemSpacing=44 */}
          {/* padding: L=120, R=120, T=0, B=0 */}
          {/* Background fills (3 layers): solid white → texture → linear gradient overlay */}
          {/* Layout: HORIZONTAL, counterAxisAlignItems=CENTER */}
          {/* primaryAxisAlignItems=MAX → items pushed to end */}
          <div
            className="flex items-center relative"
            style={{
              padding: '0px 120px',
              gap: '44px',
              background: `
                linear-gradient(to left, rgba(17,24,39,1) 0%, rgba(17,24,39,0.8) 61.5%, rgba(102,102,102,0) 100%),
                url('/joboffer-bg-texture.png'),
                white`,
              backgroundSize: 'cover, cover, auto',
              backgroundPosition: 'center, center, center',
              minHeight: '397px',
            }}
          >
            {/* Figma: 180:5959 — Frame 2121453282 (ICON CIRCLE AREA) */}
            {/* 220×220, cornerRadius=110 (circle), padding=22 all */}
            {/* stroke: rgba(255,85,0,1) at 0.6 opacity, 2.5px, INSIDE */}
            {/* shadow: rgba(255,85,0,1) offset(0,-3) radius=100 (upward orange glow) */}
            {/* background blur: 50px */}
            {/* Contains: Ellipse 176×176 + work icon 120×120 */}
            <div
              className="flex-shrink-0 rounded-full flex items-center justify-center"
              style={{
                width: '220px',
                height: '220px',
                padding: '22px',
                border: '2.5px solid rgba(255, 85, 0, 0.6)',
                boxShadow: '0px -3px 100px 0px rgba(255, 85, 0, 1)',
                backdropFilter: 'blur(50px)',
              }}
            >
              {/* Inner ellipse ring — Figma: 180:5960 */}
              {/* 176×176, orange stroke 2.5px@60%, layer blur 1px */}
              {/* This creates the double ring effect */}
              <div
                className="rounded-full flex items-center justify-center"
                style={{
                  width: '176px',
                  height: '176px',
                  border: '2.5px solid rgba(255, 85, 0, 0.6)',
                  filter: 'blur(1px)',
                }}
              >
                {/* Work icon — Figma: 180:5962 (fluent-mdl2:work) */}
                {/* 120×120, ABSOLUTE positioned in Figma, orange fill vectors */}
                {/* Using PNG fallback image */}
                <Image
                  src="/icon-joboffer-briefcase.svg"
                  alt="Work"
                  width={120}
                  height={120}
                  className="w-[120px] h-[120px] object-contain"
                  style={{ filter: 'blur(0px)' }}
                />
              </div>
            </div>

            {/* Figma: 180:5964 — Container (TEXT CONTAINER) */}
            {/* 662×152, VERTICAL, CENTER, itemSpacing=24 */}
            {/* layoutSizingHorizontal: HUG */}
            <div className="flex flex-col items-center text-center" style={{ gap: '24px', maxWidth: '662px' }}>
              {/* Text 1 — Figma: 180:5965 */}
              {/* "النتيجة التي تستحقها كل تجربة حقيقية" */}
              {/* fontSize=32, wt=400 (Regular), lh=28, ls=0.16, white, CENTER */}
              {/* layoutSizingHorizontal: FIXED (662px) */}
              <p
                className="font-ibm-plex text-[32px] font-normal text-white text-center w-full"
                style={{ lineHeight: '28px', letterSpacing: '0.16px' }}
              >
                {t('النتيجة التي تستحقها كل تجربة حقيقية', 'The result that every real experience deserves')}
              </p>

              {/* Figma: 180:5966 — Heading 2 */}
              {/* HORIZONTAL, CENTER, itemSpacing=12 */}
              {/* Contains: "عرض وظيفي" text + check icon */}
              <div className="flex items-center justify-center" style={{ gap: '12px' }}>
                {/* Text 2 — Figma: 180:5967 */}
                {/* "عرض وظيفي" — fontSize=40, wt=700, lh=48, #FF5500 (orange), LEFT */}
                <p
                  className="font-ibm-plex text-[40px] font-bold"
                  style={{ lineHeight: '48px', color: '#FF5500' }}
                >
                  {t('عرض وظيفي', 'Job Offer')}
                </p>

                {/* Check icon — Figma: 180:5968 (lets-icons:done-ring-round) */}
                {/* 48×48, contains Group with orange stroke vectors */}
                {/* Shadow: rgba(255,85,0,1) offset(0,4) radius=24 */}
                <div className="flex-shrink-0" style={{ width: '48px', height: '48px' }}>
                  <Image
                    src="/icon-joboffer-check.png"
                    alt="Verified"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                    style={{ filter: 'drop-shadow(0px 4px 24px rgba(255, 85, 0, 1))' }}
                    priority
                  />
                </div>
              </div>

              {/* Text 3 — Figma: 180:5972 */}
              {/* "من احدى الجهات بعد انتهاء التدريب وتقييم الأداء" */}
              {/* fontSize=24, wt=400 (Regular), lh=28, ls=0.16, white, CENTER */}
              {/* layoutSizingHorizontal: FIXED (662px) */}
              <p
                className="font-ibm-plex text-[24px] font-normal text-white text-center w-full"
                style={{ lineHeight: '28px', letterSpacing: '0.16px' }}
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
