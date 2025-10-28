export type ConsentCategories = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

const COOKIE_NAME = 'consent.prefs';
const ONE_YEAR = 60 * 60 * 24 * 365;

export function getConsent(): ConsentCategories {
  if (typeof document === 'undefined') return { necessary: true, analytics: false, marketing: false };
  const name = encodeURIComponent(COOKIE_NAME) + '=';
  const match = document.cookie.split('; ').find((c) => c.startsWith(name));
  if (!match) return { necessary: true, analytics: false, marketing: false };
  try {
    const raw = decodeURIComponent(match.split('=')[1] || '');
    const data = JSON.parse(raw);
    return {
      necessary: true,
      analytics: !!data.analytics,
      marketing: !!data.marketing,
    };
  } catch {
    return { necessary: true, analytics: false, marketing: false };
  }
}

export function setConsent(prefs: Partial<ConsentCategories>) {
  if (typeof document === 'undefined') return;
  const current = getConsent();
  const next = { ...current, ...prefs, necessary: true } as ConsentCategories;
  const value = encodeURIComponent(JSON.stringify({ analytics: next.analytics, marketing: next.marketing }));
  document.cookie = `${encodeURIComponent(COOKIE_NAME)}=${value}; path=/; max-age=${ONE_YEAR}; samesite=lax`;
  emitConsentChange(next);
}

export function isAllowed(category: keyof Omit<ConsentCategories, 'necessary'>): boolean {
  const prefs = getConsent();
  return !!prefs[category];
}

export function onConsentChange(listener: (prefs: ConsentCategories) => void) {
  if (typeof window === 'undefined') return () => {};
  const handler = (ev: Event) => {
    const detail = (ev as CustomEvent).detail as ConsentCategories | undefined;
    if (detail) listener(detail);
  };
  window.addEventListener('consentchange', handler as EventListener);
  return () => window.removeEventListener('consentchange', handler as EventListener);
}

export function emitConsentChange(prefs: ConsentCategories) {
  if (typeof window === 'undefined') return;
  const ev = new CustomEvent('consentchange', { detail: prefs });
  window.dispatchEvent(ev);
}
