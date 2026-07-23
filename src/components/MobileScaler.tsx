'use client';

import { useEffect, useState, useRef, useCallback } from 'react';

const DESKTOP_WIDTH = 1440;

/**
 * MobileScaler — scales the desktop layout to fit mobile devices
 * using CSS transform: scale() instead of viewport manipulation.
 *
 * Why transform:scale() instead of viewport meta manipulation?
 * 1. Universally supported on ALL browsers (including Huawei)
 * 2. Doesn't mess with viewport dimensions (JS still gets real device width)
 * 3. More predictable — no browser-specific viewport behavior differences
 * 4. The viewport meta stays clean: width=device-width, initial-scale=1
 *
 * How it works:
 * - Inner wrapper is fixed at 1440px width (desktop layout)
 * - On mobile (< 1440px), we apply transform: scale(ratio) where ratio = deviceWidth/1440
 * - Outer wrapper adjusts its height to match the scaled-down content height
 * - This prevents extra whitespace after the scaled content
 * - On desktop (>= 1440px), no scaling is applied
 */
export default function MobileScaler({ children }: { children: React.ReactNode }) {
  const [scale, setScale] = useState(1);
  const [contentHeight, setContentHeight] = useState(0);
  const innerRef = useRef<HTMLDivElement>(null);

  const updateScale = useCallback(() => {
    const w = window.innerWidth;
    if (w < DESKTOP_WIDTH) {
      const newScale = w / DESKTOP_WIDTH;
      setScale(newScale);
    } else {
      setScale(1);
    }
  }, []);

  // Calculate scale on mount and resize
  useEffect(() => {
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, [updateScale]);

  // Measure inner content height and adjust outer wrapper height
  useEffect(() => {
    if (!innerRef.current) return;

    const updateHeight = () => {
      if (innerRef.current) {
        // scrollHeight gives the full content height of the 1440px container
        setContentHeight(innerRef.current.scrollHeight);
      }
    };

    // Initial measurement
    updateHeight();

    // Observe size changes (content loading, images, etc.)
    const observer = new ResizeObserver(updateHeight);
    observer.observe(innerRef.current);

    return () => observer.disconnect();
  }, []);

  // The outer wrapper height must be = contentHeight * scale
  // because transform:scale() doesn't affect document flow
  const outerHeight = scale < 1 && contentHeight > 0
    ? Math.ceil(contentHeight * scale)
    : undefined;

  return (
    <div
      style={{
        // Outer wrapper: sized to the scaled dimensions so no extra whitespace
        width: '100%',
        height: outerHeight ? `${outerHeight}px` : 'auto',
        overflow: 'hidden',
      }}
    >
      <div
        ref={innerRef}
        style={{
          // Inner wrapper: fixed desktop width, scaled down on mobile
          width: `${DESKTOP_WIDTH}px`,
          transform: scale < 1 ? `scale(${scale})` : 'none',
          transformOrigin: 'top left',
          // On desktop, no transform, so width should be auto
          ...(scale >= 1 ? { width: 'auto' } : {}),
        }}
      >
        {children}
      </div>
    </div>
  );
}
