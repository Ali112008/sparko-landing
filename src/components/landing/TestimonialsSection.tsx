'use client';

import Image from 'next/image';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useLang } from '@/context/LanguageContext';

const testimonials = [
  { id: 1, ar: 'لحظة السؤال', en: 'The Question Moment', isPlayButton: true },
  { id: 2, ar: 'الخطوة الأولى', en: 'The First Step', isPlayButton: false },
  { id: 3, ar: 'يشتغل فعليا', en: 'It Actually Works', isPlayButton: false },
  { id: 4, ar: 'الأثر مثبت', en: 'Proven Impact', isPlayButton: false },
  { id: 5, ar: 'يدنا بيده', en: 'Hand in Hand', isPlayButton: false },
  { id: 6, ar: 'يستفيد و يفيد', en: 'Benefits & Contributes', isPlayButton: false },
  { id: 7, ar: 'الفوز المستحق', en: 'Deserved Win', isPlayButton: false },
];

export default function TestimonialsSection() {
  const { lang } = useLang();
  const t = (ar: string, en: string) => lang === 'ar' ? ar : en;

  return (
    <section id="testimonials" className="relative py-[96px] overflow-hidden">
      <div className="relative z-10 max-w-[86%] mx-auto">
        <div
          className="rounded-[24px] overflow-hidden relative"
          style={{
            background: 'linear-gradient(180deg, #273C65 0%, #182B51 100%)',
            border: '1.5px solid rgba(255, 255, 255, 0.40)',
            boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
            padding: '44px',
          }}
        >
          {/* Blue glow line at bottom */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[103%] h-[1px]"
            style={{
              borderTop: '1px solid rgba(43, 127, 255, 0.7)',
              filter: 'blur(10px)',
            }}
          />

          {/* Title area */}
          <div className="flex flex-col items-center text-center gap-[24px] mb-[44px]">
            <div className="flex flex-col items-center">
              <h1 className="font-ibm-plex text-[40px] font-bold text-white leading-[48px]">
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
            </div>
            <p
              className="font-ibm-plex text-[20px] font-normal leading-[28px] text-white"
              style={{ letterSpacing: '0.16px' }}
            >
              &ldquo;{t('نتيجة حقيقية … تتكرر كل يوم', 'A real result… repeated every day')}&rdquo;
            </p>
          </div>

          {/* Avatars row */}
          <div className="flex items-center justify-between">
            <button className="text-white hover:text-white/80 transition-colors flex-shrink-0" aria-label={t('السابق', 'Previous')}>
              {lang === 'ar' ? <ChevronRight className="w-[18px] h-[36px]" /> : <ChevronLeft className="w-[18px] h-[36px]" />}
            </button>

            <div className="flex items-center gap-[64px] overflow-x-auto scrollbar-hide">
              {testimonials.map((person) => (
                <div key={person.id} className="flex flex-col items-center flex-shrink-0">
                  <div
                    className="w-[80px] h-[80px] bg-[#020913] rounded-full flex items-center justify-center overflow-hidden"
                    style={{
                      border: '1.5px solid rgba(255, 85, 0, 0.8)',
                      boxShadow: '0px 4px 4px rgba(1, 7, 255, 0.24)',
                    }}
                  >
                    <Image
                      src={person.isPlayButton ? '/avatar-play.png' : '/avatar-person.png'}
                      alt={lang === 'ar' ? person.ar : person.en}
                      width={80}
                      height={80}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="font-ibm-plex text-[20px] font-semibold leading-[32px] text-white text-center whitespace-nowrap">
                    {lang === 'ar' ? person.ar : person.en}
                  </p>
                </div>
              ))}
            </div>

            <button className="text-white hover:text-white/80 transition-colors flex-shrink-0" aria-label={t('التالي', 'Next')}>
              {lang === 'ar' ? <ChevronLeft className="w-[18px] h-[36px]" /> : <ChevronRight className="w-[18px] h-[36px]" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
