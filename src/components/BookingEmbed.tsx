"use client";
import React, { useEffect, useRef } from 'react';
import { trackBookingClick } from '@/lib/analytics';
import { pixelSchedule } from '@/lib/pixel';

type Props = {
  src: string;
};

export default function BookingEmbed({ src }: Props) {
  const ref = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const handler = (event: MessageEvent) => {
      try {
        const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
        // Calendly emits event = 'calendly.event_scheduled'
        if (data?.event === 'calendly.event_scheduled') {
          // Track booking scheduled in GA4 and Meta Pixel
          trackBookingClick('scheduled');
          pixelSchedule({ source: 'calendly' });
        }
      } catch {
        // ignore
      }
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);

  return (
    <div className="relative w-full" style={{ paddingTop: '125%' }}>
      <iframe
        ref={ref}
        src={src}
        title="Appointment scheduling"
        className="absolute inset-0 w-full h-full rounded-2xl border border-navy-100 shadow-soft"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
