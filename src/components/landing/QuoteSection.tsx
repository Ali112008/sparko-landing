'use client';

export default function QuoteSection() {
  return (
    <section className="relative py-[24px] lg:py-[40px]">
      <div className="max-w-[88%] lg:max-w-[86%] mx-auto">
        <div
          className="rounded-[24px] overflow-hidden relative"
          style={{
            background: 'radial-gradient(circle at center, #21355A 0%, #0C1B3A 100%)',
            border: '1.5px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
          }}
        >
          {/* Figma: Gradient overlay (invisible in Figma, skip) */}

          {/* Figma: HorizontalBorder+Blur - blue glow line at bottom */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[103%] h-[1px]"
            style={{
              borderTop: '1px solid rgba(43, 127, 255, 0.7)',
              filter: 'blur(10px)',
            }}
          />

          {/* Figma: Container 1581x232, HORIZONTAL, SPACE_BETWEEN, CENTER */}
          <div className="flex items-center justify-center py-[44px] px-[48px]">
            {/* Figma: Frame 2121453283 (692x232), VERTICAL, CENTER, itemSpacing: 24 */}
            <div className="flex flex-col items-center text-center gap-[24px]">
              {/* Figma: 36px w500 lh:48px white, IBM Plex Sans Arabic */}
              <p
                className="font-[family-name:var(--font-ibm-plex)] text-[36px] font-medium leading-[48px] text-white"
              >
                إذا كنت تبحث عن تدريب ، هذا مو مكان تدريب … !
              </p>
              {/* Figma: 56px w700 lh:80px rgb(255,85,0), IBM Plex Sans Arabic */}
              <p
                className="font-[family-name:var(--font-ibm-plex)] text-[56px] font-bold leading-[80px] text-sparko-orange"
              >
                هذا مكان &ldquo; يصنع نتيجتك &rdquo;
              </p>
              {/* Figma: 20px w400 lh:28px white (full opacity), letterSpacing: 0.16px, IBM Plex Sans Arabic */}
              <p
                className="font-[family-name:var(--font-ibm-plex)] text-[20px] font-normal leading-[28px] text-white"
                style={{ letterSpacing: '0.16px' }}
              >
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
