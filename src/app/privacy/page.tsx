'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/context/LanguageContext';

const sections = [
  { num: '01', arTitle: 'المقدمة', enTitle: 'Introduction', arBody: 'في Sparko، نلتزم بحماية خصوصيتك ومعاملة بياناتك بأعلى المعايير المهنية والتقنية. هذه السياسة توضح كيف نجمع، نستخدم، ونحمي بياناتك.', enBody: 'At Sparko, we are committed to protecting your privacy and handling your data with high professional and technical standards. This policy explains how we collect, use, and protect your data.' },
  { num: '02', arTitle: 'البيانات التي نجمعها', enTitle: 'Data We Collect', arBody: 'نجمع البيانات التالية: معلومات الحساب (الاسم، البريد الإلكتروني، رقم الهاتف)، بيانات الاستخدام داخل التطبيق، وبيانات التدريب والتقييم والتقارير.', enBody: 'We collect the following data: Account information (name, email, phone), usage data within the app, and training, evaluation, and report data.' },
  { num: '03', arTitle: 'كيف نستخدم البيانات', enTitle: 'How We Use Data', arBody: 'نستخدم البيانات لتشغيل وتحسين الخدمة، تقييم الأداء المهني، إنشاء تقارير مهنية، وتقديم تجربة مخصصة للمستخدم.', enBody: 'We use data to: Operate and improve the service, evaluate professional performance, generate professional reports, and personalize user experience.' },
  { num: '04', arTitle: 'مشاركة البيانات', enTitle: 'Data Sharing', arBody: 'لا نشارك بياناتك إلا: بموافقتك، لأغراض تشغيلية (مثل استضافة البيانات)، أو عند وجود متطلب قانوني.', enBody: 'We do not share your data except: With your consent, for operational purposes (e.g., hosting), or when required by law.' },
  { num: '05', arTitle: 'حماية البيانات', enTitle: 'Data Protection', arBody: 'ننفذ measures تقنية وتنظيمية لحماية بياناتك من الوصول غير المصرح به أو الفقدان أو التلف.', enBody: 'We implement technical and organizational measures to protect your data from unauthorized access, loss, or damage.' },
  { num: '06', arTitle: 'حقوقك', enTitle: 'Your Rights', arBody: 'يحق لك: طلب الوصول إلى بياناتك، طلب التصحيح أو الحذف، وسحب الموافقة في أي وقت.', enBody: 'You have the right to: Access your data, request correction or deletion, and withdraw consent at any time.' },
  { num: '07', arTitle: 'الاحتفاظ بالبيانات', enTitle: 'Data Retention', arBody: 'نحتفظ بالبيانات طالما كان ذلك ضرورياً لتوفير الخدمة أو الامتثال للالتزامات القانونية.', enBody: 'We retain data as long as necessary to provide the service or comply with legal obligations.' },
  { num: '08', arTitle: 'التواصل', enTitle: 'Contact', arBody: 'للاستفسارات المتعلقة بسياسة الخصوصية، يرجى التواصل معنا عبر المنصة.', enBody: 'For inquiries related to the privacy policy, please contact us through the platform.' },
];

export default function PrivacyPage() {
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
              {t('سياسة الخصوصية وحماية البيانات', 'Privacy & Data Protection Policy')}
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
