'use client';

import { useEffect } from 'react';

/**
 * Dynamically measures the actual rendered heights of the fixed/sticky header
 * and footer, and sets reactive CSS custom properties on :root (--header-height,
 * --footer-height). This guarantees that available content height is calculated
 * dynamically without hardcoded pixel assumptions across zoom levels and viewports.
 */
export function ViewportMetrics() {
  useEffect(() => {
    const updateMetrics = () => {
      const header = document.querySelector('header');
      const footer = document.querySelector('footer');

      if (header) {
        const headerHeight = header.getBoundingClientRect().height;
        document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
      }
      if (footer) {
        const footerHeight = footer.getBoundingClientRect().height;
        document.documentElement.style.setProperty('--footer-height', `${footerHeight}px`);
      }
    };

    updateMetrics();

    // Use ResizeObserver for sub-pixel accuracy and real-time updates on zoom/resize/dynamic content
    let observer: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      observer = new ResizeObserver(() => {
        updateMetrics();
      });
      const header = document.querySelector('header');
      const footer = document.querySelector('footer');
      if (header) observer.observe(header);
      if (footer) observer.observe(footer);
    }

    window.addEventListener('resize', updateMetrics);

    return () => {
      if (observer) {
        observer.disconnect();
      }
      window.removeEventListener('resize', updateMetrics);
    };
  }, []);

  return null;
}
