'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/context/LanguageContext';

const sections = [
  { num: '01', arTitle: 'القبول', enTitle: 'Acceptance', arBody: 'باستخدام Sparko، فإنك توافق على هذه الشروط. إذا كنت لا توافق على أي من هذه الشروط، يجب عليك عدم استخدام المنصة.', enBody: 'By using Sparko, you agree to these terms. If you do not agree with any of these terms, you must not use the platform.' },
  { num: '02', arTitle: 'وصف الخدمة', enTitle: 'Service Description', arBody: 'Sparko تقدم منظومة للتدريب الميداني، تقييم الأداء، والتوثيق المهني. المنصة توفر أدوات لتنظيم التجارب التدريبية، تقييم المتدربين بشكل يومي، وإنشاء تقارير مهنية موثقة.', enBody: 'Sparko provides a system for field training, performance evaluation, and professional documentation. The platform offers tools to organize training experiences, evaluate trainees daily, and generate verified professional reports.' },
  { num: '03', arTitle: 'حساب المستخدم', enTitle: 'User Account', arBody: 'أنت مسؤول عن دقة بياناتك، حماية حسابك، وأي نشاط يتم من خلاله. يجب عليك 保持 بياناتك محدثة وصحيحة.', enBody: 'You are responsible for the accuracy of your information, securing your account, and any activities conducted under your account. You must keep your information up to date and accurate.' },
  { num: '04', arTitle: 'الاستخدام المقبول', enTitle: 'Acceptable Use', arBody: 'يجب عليك عدم إساءة استخدام المنصة، أو تقديم بيانات غير صحيحة، أو محاولة اختراق أو تعطيل الخدمة. أي استخدام غير مشروع قد يؤدي إلى إيقاف حسابك.', enBody: 'You must not misuse the system, provide false data, or attempt to hack or disrupt the service. Any unauthorized use may result in account suspension.' },
  { num: '05', arTitle: 'الملكية الفكرية', enTitle: 'Intellectual Property', arBody: 'جميع الحقوق المتعلقة بالمنصة والمحتوى تعود إلى Sparko. لا يسمح بإعادة استخدام أو نسخ أي جزء من المنصة أو محتواها دون إذن مسبق.', enBody: 'All rights related to the platform and content belong to Sparko. Reuse or copying of any part of the platform or its content without prior permission is not allowed.' },
  { num: '06', arTitle: 'حدود المسؤولية', enTitle: 'Limitation of Liability', arBody: 'Sparko غير مسؤول عن الأضرار غير المباشرة الناتجة عن استخدام الخدمة. لا تضمن SparkO نتائج محددة من استخدام المنصة.', enBody: 'Sparko is not liable for indirect damages resulting from the use of the service. Sparko does not guarantee specific results from using the platform.' },
  { num: '07', arTitle: 'التعديلات', enTitle: 'Modifications', arBody: 'قد نحدّث هذه الشروط في أي وقت. الاستخدام المستمر للمنصة يعني قبولك للتعديلات.', enBody: 'We may update these terms at any time. Continued use implies acceptance of modifications.' },
  { num: '08', arTitle: 'الإنهاء', enTitle: 'Termination', arBody: 'قد نوقف أو ننهي حسابات التي تنتهك هذه الشروط.', enBody: 'We may suspend or terminate accounts that violate these terms.' },
  { num: '09', arTitle: 'القانون الحاكم', enTitle: 'Governing Law', arBody: 'هذه الشروط تخضع لقوانين المملكة العربية السعودية.', enBody: 'These terms are governed by the laws of Saudi Arabia.' },
  { num: '10', arTitle: 'التواصل', enTitle: 'Contact', arBody: 'للاستفسارات أو الشكاوى المتعلقة بهذه الشروط، يرجى التواصل معنا عبر المنصة.', enBody: 'For inquiries or complaints related to these terms, please contact us through the platform.' },
];

export default function TermsPage() {
  const { lang } = useLang();
  const t = (ar: string, en: string) => lang === 'ar' ? ar : en;

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
            <div className="flex justify-center mb-[24px]">
              <Link href="/">
                <Image src="/sparko-logo-white.png" alt="Sparko." width={120} height={57} className="h-[36px] lg:h-[44px] w-auto" priority />
              </Link>
            </div>

            <h1 className="font-ibm-plex text-[28px] lg:text-[40px] font-bold text-white text-center mb-[40px] lg:mb-[56px]">
              {t('الشروط والأحكام وسياسة الاستخدام', 'Terms, Conditions & Acceptable Use')}
            </h1>

            <div className="flex flex-col" style={{ gap: '32px' }}>
              {sections.map((s) => (
                <div key={s.num}>
                  <div className="flex items-center" style={{ gap: '12px' }}>
                    <span className="font-ibm-plex text-[20px] lg:text-[28px] font-bold text-sparko-orange">{s.num}</span>
                    <h2 className="font-ibm-plex text-[20px] lg:text-[28px] font-bold text-white">{t(s.arTitle, s.enTitle)}</h2>
                  </div>
                  <p className="font-ibm-plex text-[16px] lg:text-[20px] font-normal text-white/80 mt-[12px]" style={{ lineHeight: '1.7' }}>
                    {t(s.arBody, s.enBody)}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-[40px] lg:mt-[56px] flex items-center justify-center" style={{ gap: '8px' }}>
              <span className="text-[18px]">🇸🇦</span>
              <p className="font-ibm-plex text-[16px] lg:text-[18px] font-medium text-white/80">Saudi-born. Built for real impact.</p>
            </div>

            <div className="mt-[24px] lg:mt-[32px] flex justify-center">
              <Link
                href="/"
                className="font-ibm-plex inline-flex items-center justify-center gap-[8px] px-[32px] py-[12px] rounded-full text-white text-[16px] font-medium hover:bg-white/20 transition-colors"
                style={{ background: 'rgba(255, 255, 255, 0.10)' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                {t('العودة للصفحة الرئيسية', 'Back to homepage')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
