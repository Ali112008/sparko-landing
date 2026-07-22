'use client';

import { Briefcase, CheckCircle } from 'lucide-react';

export default function JobOfferSection() {
  return (
    <section className="relative py-[24px] lg:py-[40px]">
      <div className="max-w-[88%] lg:max-w-[86%] mx-auto">
        <div
          className="rounded-[24px] border-2 border-white/30 overflow-hidden"
          style={{ background: 'linear-gradient(180deg, #273C65 0%, #182B51 100%)' }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-center py-[48px] lg:py-[64px] px-[32px] lg:px-[80px] gap-[32px] lg:gap-[48px]">
            {/* Circle with job icon - Figma: 220x220 cr:110 */}
            <div className="w-[140px] h-[140px] lg:w-[220px] lg:h-[220px] rounded-full bg-[#D9D9D9] flex items-center justify-center flex-shrink-0 relative">
              <div className="w-[110px] h-[110px] lg:w-[176px] lg:h-[176px] rounded-full bg-[#D9D9D9] flex items-center justify-center">
                <div className="w-[90px] h-[90px] lg:w-[147px] lg:h-[134px] rounded-full bg-sparko-orange flex items-center justify-center">
                  <Briefcase className="w-[48px] h-[48px] lg:w-[80px] lg:h-[80px] text-white" strokeWidth={1.5} />
                </div>
              </div>
            </div>

            {/* Text content */}
            <div className="text-center lg:text-right">
              {/* Figma: 32px w400 white */}
              <p className="font-[family-name:var(--font-ibm-plex)] text-[20px] lg:text-[32px] font-normal leading-[1.4] text-white">
                النتيجة التي تستحقها كل تجربة حقيقية
              </p>
              {/* Figma: 40px w700 orange + check icon */}
              <div className="flex items-center justify-center lg:justify-start gap-[12px] mt-[12px]">
                <p className="font-[family-name:var(--font-ibm-plex)] text-[28px] lg:text-[40px] font-bold leading-[1.2] text-sparko-orange">
                  عرض وظيفي
                </p>
                <CheckCircle className="w-[32px] h-[32px] lg:w-[48px] lg:h-[48px] text-white flex-shrink-0" />
              </div>
              {/* Figma: 24px w400 white */}
              <p className="font-[family-name:var(--font-ibm-plex)] text-[16px] lg:text-[24px] font-normal leading-[1.4] text-white mt-[12px]">
                من احدى الجهات بعد انتهاء التدريب وتقييم الأداء
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
