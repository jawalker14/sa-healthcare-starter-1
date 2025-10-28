export function buildWhatsAppUrl(rawNumber?: string, message?: string) {
  if (!rawNumber) return '#';
  const digits = rawNumber.replace(/[^0-9]/g, '');
  const text = encodeURIComponent(message || 'Hello, I would like to enquire.');
  const utm = 'utm_source=website&utm_medium=whatsapp&utm_campaign=cta';
  return `https://wa.me/${digits}?text=${text}&${utm}`;
}
