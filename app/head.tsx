import { getSettings } from '@/lib/settings';

export default function Head() {
  const s = getSettings();
  const whatsappHost = 'https://wa.me';
  let bookingHost = '';
  try {
    if (s.booking?.url) bookingHost = new URL(s.booking.url).origin;
  } catch {}

  return (
    <>
      {/* Preconnect/DNS-prefetch for non-marketing third-parties used by primary flows */}
      <link rel="dns-prefetch" href={whatsappHost} />
      <link rel="preconnect" href={whatsappHost} crossOrigin="anonymous" />
      {bookingHost ? <link rel="dns-prefetch" href={bookingHost} /> : null}
      {bookingHost ? <link rel="preconnect" href={bookingHost} crossOrigin="anonymous" /> : null}
    </>
  );
}
