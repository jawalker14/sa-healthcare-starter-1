"use client";
import React, { useEffect, useState } from 'react';
import { getConsent, setConsent } from '@/lib/consent';

const ConsentNotice: React.FC = () => {
    const [open, setOpen] = useState(true);
    const [analytics, setAnalytics] = useState(false);
    const [marketing, setMarketing] = useState(false);

    useEffect(() => {
        const prefs = getConsent();
        if (prefs.analytics || prefs.marketing) {
            setOpen(false);
        }
        setAnalytics(prefs.analytics);
        setMarketing(prefs.marketing);
    }, []);

    if (!open) return null;

    const acceptAll = () => {
        setConsent({ analytics: true, marketing: true });
        setOpen(false);
    };
    const savePrefs = () => {
        setConsent({ analytics, marketing });
        setOpen(false);
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur border-t border-navy-100 p-4 z-50 shadow-soft">
            <div className="max-w-7xl mx-auto grid gap-3 sm:grid-cols-[1fr_auto] items-start">
                <div>
                    <p className="text-sm text-navy-800">
                        We use cookies to improve your experience. Manage your preferences below. See our{' '}
                        <a href="/privacy" className="underline text-navy-900">Privacy Policy</a>.
                    </p>
                    <div className="mt-2 flex flex-col sm:flex-row gap-4">
                        <label className="inline-flex items-center gap-2 text-sm text-navy-900">
                            <input type="checkbox" checked disabled aria-disabled className="accent-navy-800" /> Necessary
                        </label>
                        <label className="inline-flex items-center gap-2 text-sm text-navy-900">
                            <input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} className="accent-navy-800" /> Analytics
                        </label>
                        <label className="inline-flex items-center gap-2 text-sm text-navy-900">
                            <input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} className="accent-navy-800" /> Marketing
                        </label>
                    </div>
                </div>
                <div className="flex items-center justify-end gap-2">
                    <button onClick={savePrefs} className="text-navy-700 hover:text-navy-900 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-navy-300 rounded-lg px-3 py-2">Save</button>
                    <button onClick={acceptAll} className="inline-flex items-center justify-center rounded-2xl bg-navy-800 text-white px-4 py-2 shadow-soft hover:shadow-soft-lg hover:bg-navy-900 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-navy-400">Accept all</button>
                </div>
            </div>
        </div>
    );
};

export default ConsentNotice;