"use client";
import { useEffect } from 'react';
import { trackFileDownload } from '@/lib/analytics';

export default function AnalyticsLinkTracker() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const path = e.composedPath?.() || [];
      const anchor = path.find((el) => el instanceof HTMLAnchorElement) as HTMLAnchorElement | undefined;
      if (!anchor) return;
      const href = anchor.getAttribute('href') || '';
      const hasDownloadAttr = anchor.hasAttribute('download');
      const isFile = /\.(pdf|docx?|xlsx?|pptx?)($|[?#])/i.test(href);
      if (!(hasDownloadAttr || isFile)) return;
      try {
        const url = new URL(href, window.location.href);
        const fileName = url.pathname.split('/').pop() || href;
        trackFileDownload(fileName);
      } catch {
        // Fallback to raw href
        trackFileDownload(href);
      }
    };
    document.addEventListener('click', handler, { capture: true });
    return () => document.removeEventListener('click', handler, { capture: true } as any);
  }, []);
  return null;
}
