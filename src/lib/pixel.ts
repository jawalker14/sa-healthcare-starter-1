"use client";
import { isAllowed } from '@/lib/consent';

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

function canPixel() {
  return typeof window !== 'undefined' && typeof window.fbq === 'function' && isAllowed('marketing');
}

export function pixel(event: string, params?: Record<string, any>) {
  if (!canPixel()) return;
  try {
    window.fbq!(
      'track',
      event,
      params || {}
    );
  } catch {
    // no-op
  }
}

export function pixelLead(source: string = 'cta') {
  pixel('Lead', { source });
}

export function pixelContact(channel: string = 'form') {
  pixel('Contact', { channel });
}

export function pixelSchedule(details?: Record<string, any>) {
  pixel('Schedule', details);
}
