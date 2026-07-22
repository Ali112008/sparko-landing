'use client';

export default function QuoteSection() {
  return (
    <section className="relative py-[24px] lg:py-[40px]">
      <div className="max-w-[88%] lg:max-w-[86%] mx-auto">
        <div
          className="rounded-[24px] border-2 border-white/30 overflow-hidden"
          style={{ background: 'linear-gradient(180deg, #273C65 0%, #182B51 100%)' }}
        >
          <div className="flex flex-col items-center justify-center py-[48px] lg:py-[64px] px-[32px] lg:px-[80px]">
            <p className="font-[family-name:var(--font-ibm-plex)] text-[20px] sm:text-[28px] lg:text-[36px] font-medium leading-[1.3] text-white text-center">
              إذا كنت تبحث عن تدريب ، هذا مو مكان تدريب … !
            </p>
            <p className="font-[family-name:var(--font-ibm-plex)] text-[28px] sm:text-[40px] lg:text-[56px] font-bold leading-[1.4] text-sparko-orange text-center mt-[12px] lg:mt-[16px]">
              هذا مكان &ldquo; يصنع نتيجتك &rdquo;
            </p>
            <p className="font-[family-name:var(--font-ibm-plex)] text-[14px] sm:text-[16px] lg:text-[20px] font-normal leading-[1.4] text-white/70 text-center mt-[16px] lg:mt-[20px] max-w-[600px]">
              &ldquo;If you&apos;re looking for training, this isn&apos;t a training place…!
              This is a place that &ldquo;makes your result&rdquo;&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
