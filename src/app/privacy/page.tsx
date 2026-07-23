'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function PrivacyPage() {
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
              سياسة الخصوصية وحماية البيانات
            </h1>
            <p className="font-ibm-plex text-[16px] lg:text-[20px] font-normal text-white/70 text-center mb-[40px] lg:mb-[56px]">
              Privacy & Data Protection Policy — Sparko.
            </p>

            {/* Sections */}
            <div className="flex flex-col" style={{ gap: '32px' }}>

              {/* 1. Introduction */}
              <div>
                <div className="flex items-center" style={{ gap: '12px' }}>
                  <span className="font-ibm-plex text-[20px] lg:text-[28px] font-bold text-sparko-orange">01</span>
                  <h2 className="font-ibm-plex text-[20px] lg:text-[28px] font-bold text-white">المقدمة | Introduction</h2>
                </div>
                <p className="font-ibm-plex text-[16px] lg:text-[20px] font-normal text-white/80 mt-[12px]" style={{ lineHeight: '1.7' }}>
                  في Sparko، نلتزم بحماية خصوصيتك ومعاملة بياناتك بأعلى المعايير المهنية والتقنية. هذه السياسة توضح كيف نجمع، نستخدم، ونحمي بياناتك.
                  At Sparko, we are committed to protecting your privacy and handling your data with high professional and technical standards. This policy explains how we collect, use, and protect your data.
                </p>
              </div>

              {/* 2. Data We Collect */}
              <div>
                <div className="flex items-center" style={{ gap: '12px' }}>
                  <span className="font-ibm-plex text-[20px] lg:text-[28px] font-bold text-sparko-orange">02</span>
                  <h2 className="font-ibm-plex text-[20px] lg:text-[28px] font-bold text-white">البيانات التي نجمعها | Data We Collect</h2>
                </div>
                <p className="font-ibm-plex text-[16px] lg:text-[20px] font-normal text-white/80 mt-[12px]" style={{ lineHeight: '1.7' }}>
                  نجمع البيانات التالية: معلومات الحساب (الاسم، البريد الإلكتروني، رقم الهاتف)، بيانات الاستخدام داخل التطبيق، وبيانات التدريب والتقييم والتقارير.
                  We collect the following data: Account information (name, email, phone), usage data within the app, and training, evaluation, and report data.
                </p>
              </div>

              {/* 3. How We Use Data */}
              <div>
                <div className="flex items-center" style={{ gap: '12px' }}>
                  <span className="font-ibm-plex text-[20px] lg:text-[28px] font-bold text-sparko-orange">03</span>
                  <h2 className="font-ibm-plex text-[20px] lg:text-[28px] font-bold text-white">كيف نستخدم البيانات | How We Use Data</h2>
                </div>
                <p className="font-ibm-plex text-[16px] lg:text-[20px] font-normal text-white/80 mt-[12px]" style={{ lineHeight: '1.7' }}>
                  نستخدم البيانات لتشغيل وتحسين الخدمة، تقييم الأداء المهني، إنشاء تقارير مهنية، وتقديم تجربة مخصصة للمستخدم.
                  We use data to: Operate and improve the service, evaluate professional performance, generate professional reports, and personalize user experience.
                </p>
              </div>

              {/* 4. Data Sharing */}
              <div>
                <div className="flex items-center" style={{ gap: '12px' }}>
                  <span className="font-ibm-plex text-[20px] lg:text-[28px] font-bold text-sparko-orange">04</span>
                  <h2 className="font-ibm-plex text-[20px] lg:text-[28px] font-bold text-white">مشاركة البيانات | Data Sharing</h2>
                </div>
                <p className="font-ibm-plex text-[16px] lg:text-[20px] font-normal text-white/80 mt-[12px]" style={{ lineHeight: '1.7' }}>
                  لا نشارك بياناتك إلا: بموافقتك، لأغراض تشغيلية (مثل استضافة البيانات)، أو عند وجود متطلب قانوني.
                  We do not share your data except: With your consent, for operational purposes (e.g., hosting), or when required by law.
                </p>
              </div>

              {/* 5. Data Protection */}
              <div>
                <div className="flex items-center" style={{ gap: '12px' }}>
                  <span className="font-ibm-plex text-[20px] lg:text-[28px] font-bold text-sparko-orange">05</span>
                  <h2 className="font-ibm-plex text-[20px] lg:text-[28px] font-bold text-white">حماية البيانات | Data Protection</h2>
                </div>
                <p className="font-ibm-plex text-[16px] lg:text-[20px] font-normal text-white/80 mt-[12px]" style={{ lineHeight: '1.7' }}>
                  ننفذ measures تقنية وتنظيمية لحماية بياناتك من الوصول غير المصرح به أو الفقدان أو التلف.
                  We implement technical and organizational measures to protect your data from unauthorized access, loss, or damage.
                </p>
              </div>

              {/* 6. Your Rights */}
              <div>
                <div className="flex items-center" style={{ gap: '12px' }}>
                  <span className="font-ibm-plex text-[20px] lg:text-[28px] font-bold text-sparko-orange">06</span>
                  <h2 className="font-ibm-plex text-[20px] lg:text-[28px] font-bold text-white">حقوقك | Your Rights</h2>
                </div>
                <p className="font-ibm-plex text-[16px] lg:text-[20px] font-normal text-white/80 mt-[12px]" style={{ lineHeight: '1.7' }}>
                  يحق لك: طلب الوصول إلى بياناتك، طلب التصحيح أو الحذف، وسحب الموافقة في أي وقت.
                  You have the right to: Access your data, request correction or deletion, and withdraw consent at any time.
                </p>
              </div>

              {/* 7. Data Retention */}
              <div>
                <div className="flex items-center" style={{ gap: '12px' }}>
                  <span className="font-ibm-plex text-[20px] lg:text-[28px] font-bold text-sparko-orange">07</span>
                  <h2 className="font-ibm-plex text-[20px] lg:text-[28px] font-bold text-white">الاحتفاظ بالبيانات | Data Retention</h2>
                </div>
                <p className="font-ibm-plex text-[16px] lg:text-[20px] font-normal text-white/80 mt-[12px]" style={{ lineHeight: '1.7' }}>
                  نحتفظ بالبيانات طالما كان ذلك ضرورياً لتوفير الخدمة أو الامتثال للالتزامات القانونية.
                  We retain data as long as necessary to provide the service or comply with legal obligations.
                </p>
              </div>

              {/* 8. Contact */}
              <div>
                <div className="flex items-center" style={{ gap: '12px' }}>
                  <span className="font-ibm-plex text-[20px] lg:text-[28px] font-bold text-sparko-orange">08</span>
                  <h2 className="font-ibm-plex text-[20px] lg:text-[28px] font-bold text-white">التواصل | Contact</h2>
                </div>
                <p className="font-ibm-plex text-[16px] lg:text-[20px] font-normal text-white/80 mt-[12px]" style={{ lineHeight: '1.7' }}>
                  للاستفسارات المتعلقة بسياسة الخصوصية، يرجى التواصل معنا عبر المنصة.
                  For inquiries related to the privacy policy, please contact us through the platform.
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
