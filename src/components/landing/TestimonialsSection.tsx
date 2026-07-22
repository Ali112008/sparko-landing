'use client';

import Image from 'next/image';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const testimonials = [
  { id: 1, name: 'لحظة السؤال', isPlayButton: true },
  { id: 2, name: 'الخطوة الأولى', isPlayButton: false },
  { id: 3, name: 'يشتغل فعليا', isPlayButton: false },
  { id: 4, name: 'الأثر مثبت', isPlayButton: false },
  { id: 5, name: 'يدنا بيده', isPlayButton: false },
  { id: 6, name: 'يستفيد و يفيد', isPlayButton: false },
  { id: 7, name: 'الفوز المستحق', isPlayButton: false },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-[56px] lg:py-[96px] overflow-hidden">
      <div className="relative z-10 max-w-[88%] lg:max-w-[86%] mx-auto">
        <div
          className="rounded-[24px] overflow-hidden relative"
          style={{
            background: 'linear-gradient(180deg, #273C65 0%, #182B51 100%)',
            border: '1.5px solid rgba(255, 255, 255, 0.40)',
            boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
            padding: '44px',
          }}
        >
          {/* Figma: HorizontalBorder+Blur - blue glow line at bottom */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[103%] h-[1px]"
            style={{
              borderTop: '1px solid rgba(43, 127, 255, 0.7)',
              filter: 'blur(10px)',
            }}
          />

          {/* Figma: Frame 2121453366 - Title area, VERTICAL, itemSpacing: 24, counterAxisAlignItems: CENTER */}
          <div className="flex flex-col items-center text-center gap-[24px] mb-[44px]">
            {/* Figma: Group 1000004750 - Heading with logo */}
            <div className="flex flex-col items-center">
              {/* Figma: 40px w700 lh:48px white, IBM Plex Sans Arabic */}
              <h1 className="font-ibm-plex text-[40px] font-bold text-white leading-[48px]">
                &ldquo;{' '}
                <Image
                  src="/logo.png"
                  alt="Sparko."
                  width={140}
                  height={66}
                  className="inline-block h-[1.4em] w-auto align-middle mx-[4px]"
                />{' '}
                التدريب الميداني يتحول إلى نجاح حقيقي{' '}
                &rdquo;
              </h1>
            </div>

            {/* Figma: Container - 20px w400 lh:28px white, letterSpacing: 0.16px */}
            <p
              className="font-ibm-plex text-[20px] font-normal leading-[28px] text-white"
              style={{ letterSpacing: '0.16px' }}
            >
              &ldquo;نتيجة حقيقية … تتكرر كل يوم&rdquo;
            </p>
          </div>

          {/* Figma: Frame 2121453292 - Avatars row, HORIZONTAL, SPACE_BETWEEN, CENTER, itemSpacing: 24 */}
          <div className="flex items-center justify-between">
            {/* Figma: Left arrow - weui:arrow-filled */}
            <button className="text-white hover:text-white/80 transition-colors flex-shrink-0" aria-label="السابق">
              <ChevronRight className="w-[18px] h-[36px]" />
            </button>

            {/* Figma: Frame 1686552644 - Avatars container, HORIZONTAL, itemSpacing: 64 */}
            <div className="flex items-center gap-[64px] overflow-x-auto scrollbar-hide">
              {testimonials.map((person) => (
                <div key={person.id} className="flex flex-col items-center flex-shrink-0">
                  {/* Figma: Avatar - 80x80, cornerRadius: 50 (circle), border: 1.5px orange 0.8 opacity, shadow */}
                  <div
                    className="w-[80px] h-[80px] bg-[#020913] rounded-full flex items-center justify-center overflow-hidden"
                    style={{
                      border: '1.5px solid rgba(255, 85, 0, 0.8)',
                      boxShadow: '0px 4px 4px rgba(1, 7, 255, 0.24)',
                    }}
                  >
                    <Image
                      src={person.isPlayButton ? '/avatar-play.png' : '/avatar-person.png'}
                      alt={person.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* Figma: Heading 3 - 20px w600 lh:32px white, IBM Plex Sans Arabic */}
                  <p className="font-ibm-plex text-[20px] font-semibold leading-[32px] text-white text-center whitespace-nowrap">
                    {person.name}
                  </p>
                </div>
              ))}
            </div>

            {/* Figma: Right arrow - weui:arrow-filled */}
            <button className="text-white hover:text-white/80 transition-colors flex-shrink-0" aria-label="التالي">
              <ChevronLeft className="w-[18px] h-[36px]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
