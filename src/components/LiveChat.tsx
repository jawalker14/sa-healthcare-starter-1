"use client";
import React, { useEffect, useRef } from 'react';

type Props = {
  enabled?: boolean;
  provider?: 'tawk' | 'custom';
  propertyId?: string; // For Tawk: property ID
  widgetId?: string;   // For Tawk: widget ID
  scriptUrl?: string;  // For custom provider
};

function hasConsent() {
  if (typeof document === 'undefined') return false;
  // Temporary: boolean cookie until CMP categories in Phase 11
  const name = encodeURIComponent('cookieConsent') + '=';
  return document.cookie.split('; ').some((c) => c.startsWith(name) && c.split('=')[1] === 'true');
}

export default function LiveChat({ enabled, provider = 'tawk', propertyId, widgetId, scriptUrl }: Props) {
  const loadedRef = useRef<boolean>(false);

  useEffect(() => {
    if (!enabled || loadedRef.current) return;
    if (!hasConsent()) return; // Require consent

    const loadScript = (src: string) => {
      if (!src) return;
      const s = document.createElement('script');
      s.async = true;
      s.src = src;
      s.crossOrigin = 'anonymous';
      document.head.appendChild(s);
      loadedRef.current = true;
    };

    if (provider === 'tawk') {
      const pid = propertyId || process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID;
      const wid = widgetId || process.env.NEXT_PUBLIC_TAWK_WIDGET_ID;
      if (pid && wid) {
        loadScript(`https://embed.tawk.to/${pid}/${wid}`);
      }
    } else if (provider === 'custom' && scriptUrl) {
      loadScript(scriptUrl);
    }
  }, [enabled, provider, propertyId, widgetId, scriptUrl]);

  return null;
}
