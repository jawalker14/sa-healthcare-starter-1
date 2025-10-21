"use client";
import React, { useEffect, useState } from 'react';

const ConsentNotice: React.FC = () => {
    const COOKIE_NAME = 'cookieConsent';

    const hasConsentCookie = () => {
        if (typeof document === 'undefined') return false;
        const encodedName = encodeURIComponent(COOKIE_NAME) + '=';
        return document.cookie.split('; ').some((c) => c.startsWith(encodedName));
    };

    const setCookie = (name: string, value: string, maxAgeSeconds = 31536000) => {
        if (typeof document === 'undefined') return;
        const cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; path=/; max-age=${maxAgeSeconds}; samesite=lax`;
        document.cookie = cookie;
    };

    // Start visible for SSR compatibility; hide after mount if cookie exists.
    const [isVisible, setIsVisible] = useState<boolean>(true);

    useEffect(() => {
        if (hasConsentCookie()) {
            setIsVisible(false);
        }
    }, []);

    const handleAccept = () => {
        setCookie(COOKIE_NAME, 'true');
        setIsVisible(false);
    };

    const handleDecline = () => {
        setCookie(COOKIE_NAME, 'false');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur border-t border-navy-100 p-4 z-50 shadow-soft">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-sm text-navy-800">
                    We use cookies to improve your experience. By using our site, you agree to our <a href="/privacy" className="underline text-navy-900">Privacy Policy</a>.
                </p>
                <div className="flex items-center gap-2">
                    <button onClick={handleDecline} className="text-navy-700 hover:text-navy-900 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-navy-300 rounded-lg px-2 py-1">
                        Decline
                    </button>
                    <button onClick={handleAccept} className="inline-flex items-center justify-center rounded-2xl bg-navy-800 text-white px-4 py-2 shadow-soft hover:shadow-soft-lg hover:bg-navy-900 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-navy-400">
                        Accept
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConsentNotice;