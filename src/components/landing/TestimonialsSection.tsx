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
    <section id="testimonials" className="relative py-14 sm:py-20 lg:py-24 overflow-hidden">
      <div className="relative z-10 max-w-[88%] lg:max-w-[86%] mx-auto">
        <div
          className="rounded-2xl px-8 py-10 sm:px-12 sm:py-14 lg:px-20 lg:py-16 border-2 border-white/30"
          style={{
            background: 'linear-gradient(180deg, #273C65 0%, #182B51 100%)',
            boxShadow: '0 25px 45px rgba(0, 0, 0, 0.45), 0 10px 20px rgba(0, 0, 0, 0.25)',
          }}
        >
          <div className="text-center mb-4 sm:mb-5">
            <h1 className="font-[family-name:var(--font-tajawal)] text-xl sm:text-2xl lg:text-[2.2rem] font-bold text-white leading-relaxed">
              مع{' '}
              <Image
                src="/logo.png"
                alt="Sparko."
                width={100}
                height={40}
                className="inline-block h-[1.2em] sm:h-[1.3em] lg:h-[1.4em] w-auto align-middle mx-1"
              />{' '}
              التدريب الميداني يتحول إلى نجاح حقيقي
            </h1>
          </div>
          <div className="text-center mb-10 sm:mb-14 lg:mb-16">
            <h2 className="font-[family-name:var(--font-tajawal)] text-lg sm:text-xl lg:text-2xl font-bold text-white leading-relaxed">
              &ldquo;نتيجة حقيقية … تتكرر كل يوم&rdquo;
            </h2>
            <p className="text-white/40 font-[family-name:var(--font-ibm-plex)] text-xs sm:text-sm mt-3">
              What started here... reached the world
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 sm:gap-4 lg:gap-8">
            <button className="hidden sm:block text-white/80 hover:text-white transition-colors flex-shrink-0" aria-label="السابق">
              <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
            </button>
            <div className="flex items-center gap-3 sm:gap-5 lg:gap-9 overflow-x-auto scrollbar-hide px-2 sm:px-0 snap-x snap-mandatory">
              {testimonials.map((person) => (
                <div key={person.id} className="flex flex-col items-center gap-1.5 sm:gap-2 flex-shrink-0 snap-start">
                  <div className="relative w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] lg:w-[90px] lg:h-[90px]">
                    <Image
                      src={person.isPlayButton ? '/avatar-play.png' : '/avatar-person.png'}
                      alt={person.name}
                      width={91}
                      height={91}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="font-[family-name:var(--font-tajawal)] text-[10px] sm:text-[13px] lg:text-sm font-bold text-white text-center whitespace-nowrap">
                    {person.name}
                  </p>
                </div>
              ))}
            </div>
            <button className="hidden sm:block text-white/80 hover:text-white transition-colors flex-shrink-0" aria-label="التالي">
              <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
