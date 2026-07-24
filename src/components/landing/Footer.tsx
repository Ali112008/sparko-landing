'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/context/LanguageContext';

export default function Footer() {
  const { lang } = useLang();
  const t = (ar: string, en: string) => lang === 'ar' ? ar : en;

  return (
    <footer className="relative pt-[45px] pb-0">
      {/* Main card — From Figma: Frame 2121453293 > Background+Border+Shadow */}
      {/* Card: 1680x324, cornerRadius=24, border white 1.5px, shadow drop(0,25,50,rgba(0,0,0,0.25)) */}
      {/* Card fill: GRADIENT_RADIAL center(#21355A → #0C1B3A) */}
      {/* Card padding: 44 all sides, itemSpacing=32, layoutMode=VERTICAL */}
      {/* primaryAxisAlignItems=CENTER, counterAxisAlignItems=CENTER */}
      <div className="max-w-[87.5%] mx-auto">
        <div
          className="rounded-[18px] overflow-hidden relative flex flex-col items-center justify-center"
          style={{
            background: 'radial-gradient(circle at center, #21355A 0%, #0C1B3A 100%)',
            border: '1.5px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
            padding: '33px',
            gap: '24px',
          }}
        >
          {/* Top row: Logo+Tagline (START/right in RTL) | Badge (END/left in RTL) */}
          {/* From Figma: Frame 2121453284 = HORIZONTAL, SPACE_BETWEEN, counterAxisAlignItems=CENTER */}
          {/* Figma order: Badge first (LEFT in canvas), Logo+Tagline second (RIGHT in canvas) */}
          {/* RTL flip: Logo+Tagline → RIGHT(START), Badge → LEFT(END) */}
          {/* HTML order: Logo+Tagline first, Badge second → RTL puts Logo RIGHT, Badge LEFT ✅ */}
          <div className="flex flex-row justify-between items-center w-full">
            {/* Logo+Tagline side — From Figma: Frame 1686552645 */}
            {/* Figma: Container=VERTICAL gap=12, containing logo(120x57) + tagline text */}
            {/* Badge frame fill: visible=false (no background) */}
            <div className="flex flex-col" style={{ gap: '12px' }}>
              {/* Figma: logo — 120×57px exact */}
              <Image src="/sparko-logo-white.png" alt="Sparko." width={120} height={57} className="inline-block" style={{ width: '120px', height: '57px' }} priority />
              {/* From Figma: ONE text node "حيث يتحول...\r\nWhere..." */}
              {/* Both lines SAME style: fontSize=20, fontWeight=600, color=white(#FFFFFF), lineHeight=32 */}
              {/* textAlignHorizontal: RIGHT (= START in RTL) */}
              <div className="flex flex-col" style={{ gap: '0px' }}>
                <p className="font-ibm-plex text-[20px] font-semibold text-white text-start" style={{ lineHeight: '32px' }}>
                  {t('حيث يتحول التدريب الميداني إلى تجربة حقيقية', 'Where Field Training Becomes Real Experience')}
                </p>
              </div>
            </div>

            {/* Badge — From Figma: Frame 1686552644 */}
            {/* Text: "بوابة الجهات Partners Portal", fontSize=20, fontWeight=600, color=white */}
            {/* Badge frame fill: visible=false (NO background container, just plain text) */}
            <span className="font-ibm-plex text-[20px] font-semibold text-white" style={{ lineHeight: '32px' }}>
              {t('بوابة الجهات', 'Partners Portal')}
            </span>
          </div>

          {/* Divider line — From Figma: Line 6 */}
          {/* Stroke: white, opacity=0.4, strokeWeight=1 */}
          {/* Current was 0.12, Figma shows 0.4 */}
          <div className="w-full" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.4)' }} />

          {/* Saudi-born tagline — From Figma: Frame 2121453285 */}
          {/* HORIZONTAL, itemSpacing=24, CENTER-CENTER alignment */}
          {/* Text: "🇸🇦 Saudi-born. Built for real impact." fontSize=20, fontWeight=600, color=white */}
          <div className="flex items-center justify-center w-full">
            <p className="font-ibm-plex text-[20px] font-semibold text-white text-center" style={{ lineHeight: '32px' }}>
              🇸🇦 {t('سعودي المنشأ. مبني لأثر حقيقي.', 'Saudi-born. Built for real impact.')}
            </p>
          </div>
        </div>
      </div>

      {/* Links section — From Figma: Frame 2121453290 */}
      {/* VERTICAL, itemSpacing=4, primaryAxisAlignItems=CENTER, counterAxisAlignItems=MAX */}
      {/* Padding: L=44, R=44, T=0, B=0 */}
      {/* Links are RIGHT-aligned (START in RTL) with full white color */}
      <div className="max-w-[87.5%] mx-auto mt-[18px]" style={{ paddingLeft: '33px', paddingRight: '33px' }}>
        <div className="flex flex-col" style={{ gap: '3px' }}>
          <Link
            href="/privacy"
            className="font-ibm-plex text-[16px] font-medium text-white hover:text-white/80 transition-colors text-start"
            style={{ lineHeight: '32px', letterSpacing: '0.4px' }}
          >
            {t('سياسة الخصوصية و حماية البيانات', 'Privacy & Data Protection Policy')}
          </Link>
          <Link
            href="/terms"
            className="font-ibm-plex text-[16px] font-medium text-white hover:text-white/80 transition-colors text-start"
            style={{ lineHeight: '32px' }}
          >
            {t('الشروط و الأحكام و سياسة الاستخدام', 'Terms, Conditions & Acceptable Use')}
          </Link>
        </div>
      </div>

      {/* Copyright section — From Figma: Frame 2121453291 */}
      {/* VERTICAL, primaryAxisAlignItems=CENTER, counterAxisAlignItems=CENTER */}
      {/* Padding: L=44, R=44, T=0, B=0 */}
      {/* Text: "© Sparko جميع الحقوق محفوظة" fontSize=16, fontWeight=500, color=white */}
      {/* letterSpacing=0.4, textAlign=RIGHT, CENTERED in frame */}
      {/* Footer root itemSpacing=24 between card, links, and copyright */}
      <div className="max-w-[87.5%] mx-auto mt-[18px]" style={{ paddingLeft: '33px', paddingRight: '33px' }}>
        <p className="font-ibm-plex text-[16px] font-medium text-white text-center" style={{ lineHeight: '32px', letterSpacing: '0.4px' }}>
          © Sparko {t('جميع الحقوق محفوظة', 'All rights reserved')}
        </p>
      </div>
    </footer>
  );
}
