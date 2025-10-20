"use client";
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

type Props = {
  enabled?: boolean;
  pixelId?: string;
  bookingUrl?: string;
};

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

export default function MetaPixel({ enabled, pixelId, bookingUrl }: Props) {
  const pathname = usePathname();

  useEffect(() => {
    if (!enabled || !pixelId || typeof window === 'undefined') return;
    if (!window.fbq) {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://connect.facebook.net/en_US/fbevents.js';
      document.head.appendChild(script);
      window.fbq = function (...args: any[]) {
        // Queue until script loads
        (window.fbq as any).callMethod
          ? (window.fbq as any).callMethod.apply(window.fbq, args)
          : ((window.fbq as any).queue = ((window.fbq as any).queue || [])).push(args);
      } as any;
      (window.fbq as any).loaded = true;
      (window.fbq as any).version = '2.0';
      (window.fbq as any).queue = [];
    }
    (window.fbq as any)('init', pixelId);
  }, [enabled, pixelId]);

  // Track page views on navigation
  useEffect(() => {
    if (!enabled || !pixelId) return;
    window.fbq?.('track', 'PageView');
  }, [enabled, pixelId, pathname]);

  // Bind "Book Now" click events
  useEffect(() => {
    if (!enabled || !pixelId) return;
    const handler = (ev: Event) => {
      const target = ev.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest('a,button') as HTMLAnchorElement | HTMLButtonElement | null;
      if (!anchor) return;
      const isBookAttr = anchor.getAttribute('data-book-now') === 'true';
      const text = (anchor.textContent || '').toLowerCase();
      const isBookText = text.includes('book') && text.includes('now');
      const isBookingUrl = bookingUrl && 'href' in anchor && typeof anchor.href === 'string' && anchor.href.includes(bookingUrl);
      if (isBookAttr || isBookText || isBookingUrl) {
        window.fbq?.('track', 'Lead', { source: 'book_now_click' });
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [enabled, pixelId, bookingUrl]);

  return null;
}
