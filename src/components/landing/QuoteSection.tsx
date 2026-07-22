'use client';

export default function QuoteSection() {
  return (
    <section className="relative py-[24px] lg:py-[40px]">
      <div className="max-w-[88%] lg:max-w-[86%] mx-auto">
        <div
          className="rounded-[24px] overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, #273C65 0%, #182B51 100%)',
            boxShadow: '0 0 50px rgba(0, 0, 0, 0.25)',
            border: '1.5px solid rgba(255, 254, 254, 1)',
          }}
        >
          {/* Figma: Container 1581x232, HORIZONTAL, SPACE_BETWEEN, CENTER */}
          <div className="flex items-center justify-between py-[44px] px-[48px]">
            {/* Figma: Frame 2121453283 (692x232), VERTICAL, CENTER */}
            <div className="flex flex-col items-center text-center">
              {/* Figma: 36px w500 lh:48px white */}
              <p className="font-[family-name:var(--font-ibm-plex)] text-[36px] font-medium leading-[48px] text-white">
                إذا كنت تبحث عن تدريب ، هذا مو مكان تدريب … !
              </p>
              {/* Figma: 56px w700 lh:80px rgb(255,85,0) */}
              <p className="font-[family-name:var(--font-ibm-plex)] text-[56px] font-bold leading-[80px] text-sparko-orange">
                هذا مكان &ldquo; يصنع نتيجتك &rdquo;
              </p>
              {/* Figma: 20px w400 lh:28px white */}
              <p className="font-[family-name:var(--font-ibm-plex)] text-[20px] font-normal leading-[28px] text-white max-w-[526px]">
                &ldquo;If you&apos;re looking for training, this isn&apos;t a training place…!
                This is a place that &ldquo;makes your result&rdquo;&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
