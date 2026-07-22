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
          className="rounded-[24px] px-[32px] lg:px-[80px] py-[40px] lg:py-[64px] border-2 border-white/30"
          style={{
            background: 'linear-gradient(180deg, #273C65 0%, #182B51 100%)',
            boxShadow: '0 25px 45px rgba(0, 0, 0, 0.45), 0 10px 20px rgba(0, 0, 0, 0.25)',
          }}
        >
          {/* Main heading with logo - Figma: 40px w700 */}
          <div className="text-center mb-[16px] lg:mb-[20px]">
            <h1 className="font-[family-name:var(--font-ibm-plex)] text-[20px] sm:text-[28px] lg:text-[40px] font-bold text-white leading-[1.2]">
              مع{' '}
              <Image
                src="/logo.png"
                alt="Sparko."
                width={140}
                height={66}
                className="inline-block h-[1.2em] sm:h-[1.3em] lg:h-[1.4em] w-auto align-middle mx-[4px]"
              />{' '}
              التدريب الميداني يتحول إلى نجاح حقيقي
            </h1>
          </div>

          {/* Quote - Figma: 20px w400 */}
          <div className="text-center mb-[40px] lg:mb-[64px]">
            <p className="text-white font-[family-name:var(--font-ibm-plex)] text-[14px] lg:text-[20px] font-normal leading-[1.4]">
              &ldquo;نتيجة حقيقية … تتكرر كل يوم&rdquo;
            </p>
          </div>

          {/* Avatars row with arrows - Figma: 80x80, bg rgb(2,9,19) */}
          <div className="flex items-center justify-center gap-[8px] lg:gap-[32px]">
            <button className="hidden lg:block text-white/80 hover:text-white transition-colors flex-shrink-0" aria-label="السابق">
              <ChevronRight className="w-[28px] h-[28px]" />
            </button>
            <div className="flex items-center gap-[12px] lg:gap-[24px] overflow-x-auto scrollbar-hide px-[8px] snap-x snap-mandatory">
              {testimonials.map((person) => (
                <div key={person.id} className="flex flex-col items-center gap-[8px] lg:gap-[12px] flex-shrink-0 snap-start">
                  <div className="w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] bg-[#020913] rounded-full flex items-center justify-center">
                    <Image
                      src={person.isPlayButton ? '/avatar-play.png' : '/avatar-person.png'}
                      alt={person.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="font-[family-name:var(--font-ibm-plex)] text-[10px] lg:text-[20px] font-semibold text-white text-center whitespace-nowrap">
                    {person.name}
                  </p>
                </div>
              ))}
            </div>
            <button className="hidden lg:block text-white/80 hover:text-white transition-colors flex-shrink-0" aria-label="التالي">
              <ChevronLeft className="w-[28px] h-[28px]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
