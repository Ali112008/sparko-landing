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
          className="rounded-[16px] lg:rounded-[20px] px-[32px] lg:px-[80px] py-[40px] lg:py-[64px] border-2 border-white/30"
          style={{
            background: 'linear-gradient(180deg, #273C65 0%, #182B51 100%)',
            boxShadow: '0 25px 45px rgba(0, 0, 0, 0.45), 0 10px 20px rgba(0, 0, 0, 0.25)',
          }}
        >
          {/* Main heading with logo */}
          <div className="text-center mb-[16px] lg:mb-[20px]">
            <h1 className="font-[family-name:var(--font-tajawal)] text-[20px] sm:text-[24px] lg:text-[36px] font-bold text-white leading-[1.5]">
              مع{' '}
              <Image
                src="/logo.png"
                alt="Sparko."
                width={100}
                height={40}
                className="inline-block h-[1.2em] sm:h-[1.3em] lg:h-[1.4em] w-auto align-middle mx-[4px]"
              />{' '}
              التدريب الميداني يتحول إلى نجاح حقيقي
            </h1>
          </div>

          {/* Quote */}
          <div className="text-center mb-[40px] lg:mb-[64px]">
            <h2 className="font-[family-name:var(--font-tajawal)] text-[18px] sm:text-[20px] lg:text-[28px] font-bold text-white leading-[1.5]">
              &ldquo;نتيجة حقيقة … تتكرر كل يوم&rdquo;
            </h2>
            <p className="text-white/40 font-[family-name:var(--font-ibm-plex)] text-[12px] lg:text-[16px] mt-[12px]">
              What started here... reached the world
            </p>
          </div>

          {/* Avatars row with arrows */}
          <div className="flex items-center justify-center gap-[8px] lg:gap-[32px]">
            <button className="hidden lg:block text-white/80 hover:text-white transition-colors flex-shrink-0" aria-label="السابق">
              <ChevronRight className="w-[28px] h-[28px]" />
            </button>
            <div className="flex items-center gap-[12px] lg:gap-[36px] overflow-x-auto scrollbar-hide px-[8px] snap-x snap-mandatory">
              {testimonials.map((person) => (
                <div key={person.id} className="flex flex-col items-center gap-[6px] lg:gap-[10px] flex-shrink-0 snap-start">
                  <div className="w-[50px] h-[50px] lg:w-[91px] lg:h-[91px] relative">
                    <Image
                      src={person.isPlayButton ? '/avatar-play.png' : '/avatar-person.png'}
                      alt={person.name}
                      width={91}
                      height={91}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="font-[family-name:var(--font-tajawal)] text-[10px] lg:text-[14px] font-bold text-white text-center whitespace-nowrap">
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
