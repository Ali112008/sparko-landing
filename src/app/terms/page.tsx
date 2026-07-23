'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <section className="relative py-[40px] lg:py-[80px]">
      <div className="max-w-[88%] lg:max-w-[86%] mx-auto">
        <div
          className="rounded-[24px] overflow-hidden relative"
          style={{
            background: 'radial-gradient(circle at center, #21355A 0%, #0C1B3A 100%)',
            border: '1.5px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
          }}
        >
          <div className="py-[48px] lg:py-[64px] px-[32px] lg:px-[64px]">
            {/* Logo */}
            <div className="flex justify-center mb-[24px]">
              <Link href="/">
                <Image src="/sparko-logo-white.png" alt="Sparko." width={120} height={57} className="h-[36px] lg:h-[44px] w-auto" priority />
              </Link>
            </div>

            {/* Title */}
            <h1 className="font-ibm-plex text-[28px] lg:text-[40px] font-bold text-white text-center mb-[8px]">
              الشروط والأحكام وسياسة الاستخدام
            </h1>
            <p className="font-ibm-plex text-[16px] lg:text-[20px] font-normal text-white/70 text-center mb-[40px] lg:mb-[56px]">
              Terms, Conditions & Acceptable Use — Sparko.
            </p>

            {/* Sections */}
            <div className="flex flex-col" style={{ gap: '32px' }}>

              {/* 1. Acceptance */}
              <div>
                <div className="flex items-center" style={{ gap: '12px' }}>
                  <span className="font-ibm-plex text-[20px] lg:text-[28px] font-bold text-sparko-orange">01</span>
                  <h2 className="font-ibm-plex text-[20px] lg:text-[28px] font-bold text-white">القبول | Acceptance</h2>
                </div>
                <p className="font-ibm-plex text-[16px] lg:text-[20px] font-normal text-white/80 mt-[12px]" style={{ lineHeight: '1.7' }}>
                  باستخدام Sparko، فإنك توافق على هذه الشروط. إذا كنت لا توافق على أي من هذه الشروط، يجب عليك عدم استخدام المنصة.
                  By using Sparko, you agree to these terms. If you do not agree with any of these terms, you must not use the platform.
                </p>
              </div>

              {/* 2. Service Description */}
              <div>
                <div className="flex items-center" style={{ gap: '12px' }}>
                  <span className="font-ibm-plex text-[20px] lg:text-[28px] font-bold text-sparko-orange">02</span>
                  <h2 className="font-ibm-plex text-[20px] lg:text-[28px] font-bold text-white">وصف الخدمة | Service Description</h2>
                </div>
                <p className="font-ibm-plex text-[16px] lg:text-[20px] font-normal text-white/80 mt-[12px]" style={{ lineHeight: '1.7' }}>
                  Sparko تقدم منظومة للتدريب الميداني، تقييم الأداء، والتوثيق المهني. المنصة توفر أدوات لتنظيم التجارب التدريبية، تقييم المتدربين بشكل يومي، وإنشاء تقارير مهنية موثقة.
                  Sparko provides a system for field training, performance evaluation, and professional documentation. The platform offers tools to organize training experiences, evaluate trainees daily, and generate verified professional reports.
                </p>
              </div>

              {/* 3. User Account */}
              <div>
                <div className="flex items-center" style={{ gap: '12px' }}>
                  <span className="font-ibm-plex text-[20px] lg:text-[28px] font-bold text-sparko-orange">03</span>
                  <h2 className="font-ibm-plex text-[20px] lg:text-[28px] font-bold text-white">حساب المستخدم | User Account</h2>
                </div>
                <p className="font-ibm-plex text-[16px] lg:text-[20px] font-normal text-white/80 mt-[12px]" style={{ lineHeight: '1.7' }}>
                  أنت مسؤول عن دقة بياناتك، حماية حسابك، وأي نشاط يتم من خلاله. يجب عليك 保持 بياناتك محدثة وصحيحة.
                  You are responsible for the accuracy of your information, securing your account, and any activities conducted under your account. You must keep your information up to date and accurate.
                </p>
              </div>

              {/* 4. Acceptable Use */}
              <div>
                <div className="flex items-center" style={{ gap: '12px' }}>
                  <span className="font-ibm-plex text-[20px] lg:text-[28px] font-bold text-sparko-orange">04</span>
                  <h2 className="font-ibm-plex text-[20px] lg:text-[28px] font-bold text-white">الاستخدام المقبول | Acceptable Use</h2>
                </div>
                <p className="font-ibm-plex text-[16px] lg:text-[20px] font-normal text-white/80 mt-[12px]" style={{ lineHeight: '1.7' }}>
                  يجب عليك عدم إساءة استخدام المنصة، أو تقديم بيانات غير صحيحة، أو محاولة اختراق أو تعطيل الخدمة. أي استخدام غير مشروع قد يؤدي إلى إيقاف حسابك.
                  You must not misuse the system, provide false data, or attempt to hack or disrupt the service. Any unauthorized use may result in account suspension.
                </p>
              </div>

              {/* 5. Intellectual Property */}
              <div>
                <div className="flex items-center" style={{ gap: '12px' }}>
                  <span className="font-ibm-plex text-[20px] lg:text-[28px] font-bold text-sparko-orange">05</span>
                  <h2 className="font-ibm-plex text-[20px] lg:text-[28px] font-bold text-white">الملكية الفكرية | Intellectual Property</h2>
                </div>
                <p className="font-ibm-plex text-[16px] lg:text-[20px] font-normal text-white/80 mt-[12px]" style={{ lineHeight: '1.7' }}>
                  جميع الحقوق المتعلقة بالمنصة والمحتوى تعود إلى Sparko. لا يسمح بإعادة استخدام أو نسخ أي جزء من المنصة أو محتوىها دون إذن مسبق.
                  All rights related to the platform and content belong to Sparko. Reuse or copying of any part of the platform or its content without prior permission is not allowed.
                </p>
              </div>

              {/* 6. Limitation of Liability */}
              <div>
                <div className="flex items-center" style={{ gap: '12px' }}>
                  <span className="font-ibm-plex text-[20px] lg:text-[28px] font-bold text-sparko-orange">06</span>
                  <h2 className="font-ibm-plex text-[20px] lg:text-[28px] font-bold text-white">حدود المسؤولية | Limitation of Liability</h2>
                </div>
                <p className="font-ibm-plex text-[16px] lg:text-[20px] font-normal text-white/80 mt-[12px]" style={{ lineHeight: '1.7' }}>
                  Sparko غير مسؤول عن الأضرار غير المباشرة الناتجة عن استخدام الخدمة. لا تضمن Sparko نتائج محددة من استخدام المنصة.
                  Sparko is not liable for indirect damages resulting from the use of the service. Sparko does not guarantee specific results from using the platform.
                </p>
              </div>

              {/* 7. Modification */}
              <div>
                <div className="flex items-center" style={{ gap: '12px' }}>
                  <span className="font-ibm-plex text-[20px] lg:text-[28px] font-bold text-sparko-orange">07</span>
                  <h2 className="font-ibm-plex text-[20px] lg:text-[28px] font-bold text-white">التعديلات | Modifications</h2>
                </div>
                <p className="font-ibm-plex text-[16px] lg:text-[20px] font-normal text-white/80 mt-[12px]" style={{ lineHeight: '1.7' }}>
                  قد نحدّث هذه الشروط في أي وقت. الاستخدام المستمر للمنصة يعني قبولك للتعديلات.
                  We may update these terms at any time. Continued use implies acceptance of modifications.
                </p>
              </div>

              {/* 8. Termination */}
              <div>
                <div className="flex items-center" style={{ gap: '12px' }}>
                  <span className="font-ibm-plex text-[20px] lg:text-[28px] font-bold text-sparko-orange">08</span>
                  <h2 className="font-ibm-plex text-[20px] lg:text-[28px] font-bold text-white">الإنهاء | Termination</h2>
                </div>
                <p className="font-ibm-plex text-[16px] lg:text-[20px] font-normal text-white/80 mt-[12px]" style={{ lineHeight: '1.7' }}>
                  قد نوقف أو ننهي حسابات التي ت violate هذه الشروط.
                  We may suspend or terminate accounts that violate these terms.
                </p>
              </div>

              {/* 9. Governing Law */}
              <div>
                <div className="flex items-center" style={{ gap: '12px' }}>
                  <span className="font-ibm-plex text-[20px] lg:text-[28px] font-bold text-sparko-orange">09</span>
                  <h2 className="font-ibm-plex text-[20px] lg:text-[28px] font-bold text-white">القانون الحاكم | Governing Law</h2>
                </div>
                <p className="font-ibm-plex text-[16px] lg:text-[20px] font-normal text-white/80 mt-[12px]" style={{ lineHeight: '1.7' }}>
                  هذه الشروط تخضع لقوانين المملكة العربية السعودية.
                  These terms are governed by the laws of Saudi Arabia.
                </p>
              </div>

              {/* 10. Contact */}
              <div>
                <div className="flex items-center" style={{ gap: '12px' }}>
                  <span className="font-ibm-plex text-[20px] lg:text-[28px] font-bold text-sparko-orange">10</span>
                  <h2 className="font-ibm-plex text-[20px] lg:text-[28px] font-bold text-white">التواصل | Contact</h2>
                </div>
                <p className="font-ibm-plex text-[16px] lg:text-[20px] font-normal text-white/80 mt-[12px]" style={{ lineHeight: '1.7' }}>
                  للاستفسارات أو الشكاوى المتعلقة بهذه الشروط، يرجى التواصل معنا عبر المنصة.
                  For inquiries or complaints related to these terms, please contact us through the platform.
                </p>
              </div>

            </div>

            {/* Footer tagline */}
            <div className="mt-[40px] lg:mt-[56px] flex items-center justify-center" style={{ gap: '8px' }}>
              <span className="text-[18px]">🇸🇦</span>
              <p className="font-ibm-plex text-[16px] lg:text-[18px] font-medium text-white/80">Saudi-born. Built for real impact.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
