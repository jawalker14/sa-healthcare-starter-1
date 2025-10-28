"use client";
import { isAllowed, onConsentChange } from '@/lib/consent';
import React, { useEffect } from 'react';

/**
 * Loads GA4 (gtag.js) only when Analytics consent is granted.
 * Respects consent changes at runtime. No output rendered.
 */
export default function GoogleAnalytics() {
  useEffect(() => {
    const GA_ID = process.env.NEXT_PUBLIC_GA4_ID;
    if (!GA_ID) return;

    const loadGA = () => {
      if ((window as any).__gaLoaded) return;
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      document.head.appendChild(script);

      (window as any).dataLayer = (window as any).dataLayer || [];
      function gtag(...args: any[]) {
        (window as any).dataLayer.push(args);
      }
      (window as any).gtag = gtag;
      gtag('js', new Date());
      // Minimal privacy baseline
      gtag('config', GA_ID, {
        anonymize_ip: true,
        transport_type: 'beacon',
      });
      (window as any).__gaLoaded = true;
    };

    // Initialize immediately if consent already granted
    if (isAllowed('analytics')) {
      loadGA();
    }

    // React to consent changes
    const off = onConsentChange((prefs) => {
      if (prefs.analytics) {
        loadGA();
        // Signal consent granted if gtag present
        if (typeof (window as any).gtag === 'function') {
          (window as any).gtag('consent', 'update', { analytics_storage: 'granted' });
        }
      } else {
        if (typeof (window as any).gtag === 'function') {
          (window as any).gtag('consent', 'update', { analytics_storage: 'denied' });
        }
      }
    });

    return () => off();
  }, []);

  return null;
}
