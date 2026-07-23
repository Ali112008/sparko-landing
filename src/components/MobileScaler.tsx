'use client';

import { useEffect } from 'react';

const DESKTOP_WIDTH = 1440;

/**
 * MobileScaler — dynamically sets viewport meta to show desktop layout
 * scaled down on mobile devices.
 *
 * Approach: Instead of CSS zoom/transform (which don't work reliably on
 * some browsers like Huawei), we manipulate the viewport meta tag directly.
 *
 * On mount, we detect the actual device width, calculate initial-scale
 * = deviceWidth / 1440, and set the viewport meta to:
 *   width=1440, initial-scale={scale}
 *
 * This tells the browser: "render the page at 1440px width, but start
 * at the calculated zoom level so it fits the device screen."
 * The browser handles scaling at viewport level — works on ALL browsers.
 */
export default function MobileScaler({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Capture device width BEFORE changing viewport
    // (after change, innerWidth would report 1440)
    const deviceWidth = window.innerWidth;

    if (deviceWidth < DESKTOP_WIDTH) {
      const initialScale = deviceWidth / DESKTOP_WIDTH;

      // Find the viewport meta tag and update it
      const viewportMeta = document.querySelector('meta[name="viewport"]');
      if (viewportMeta) {
        viewportMeta.setAttribute(
          'content',
          `width=${DESKTOP_WIDTH}, initial-scale=${initialScale}`
        );
      }
    }

    // Handle resize (e.g., orientation change on mobile)
    const handleResize = () => {
      // After viewport change, screen.width gives the actual device width
      // innerWidth now reports the viewport width (1440 on mobile)
      const actualDeviceWidth = window.screen.width;

      if (actualDeviceWidth < DESKTOP_WIDTH) {
        const newScale = actualDeviceWidth / DESKTOP_WIDTH;
        const viewportMeta = document.querySelector('meta[name="viewport"]');
        if (viewportMeta) {
          viewportMeta.setAttribute(
            'content',
            `width=${DESKTOP_WIDTH}, initial-scale=${newScale}`
          );
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <>{children}</>;
}
