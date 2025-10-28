"use client";
import { isAllowed } from '@/lib/consent';

function canTrack() {
  return typeof window !== 'undefined' && !!(window as any).gtag && isAllowed('analytics');
}

export function trackEvent(name: string, params?: Record<string, any>) {
  if (!canTrack()) return;
  try {
    (window as any).gtag('event', name, params || {});
  } catch {
    // no-op
  }
}

export function trackWhatsAppClick(context: string = 'floating') {
  trackEvent('whatsapp_click', { context });
}

export function trackBookingClick(stage: 'open' | 'scheduled' | 'cta' = 'cta') {
  trackEvent('booking_click', { stage });
}

export function trackFormSubmit(form: 'contact' | 'application', status: 'success' | 'error') {
  trackEvent('form_submit', { form, status });
}

export function trackFileDownload(fileName: string) {
  trackEvent('file_download', { file_name: fileName });
}
