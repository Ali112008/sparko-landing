'use client';

import { useEffect, useState, useRef } from 'react';

const DESKTOP_WIDTH = 1440;

export default function MobileScaler({ children }: { children: React.ReactNode }) {
  const [scale, setScale] = useState(1);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScale = () => {
      const w = window.innerWidth;
      if (w < DESKTOP_WIDTH) {
        setScale(w / DESKTOP_WIDTH);
      } else {
        setScale(1);
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={{
        minWidth: `${DESKTOP_WIDTH}px`,
        zoom: scale < 1 ? scale : 1,
        overflowX: 'hidden',
      }}
    >
      {children}
    </div>
  );
}
