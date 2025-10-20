"use client";
import React, { useState } from 'react';

const ConsentNotice: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleAccept = () => {
        setIsVisible(false);
        // Logic to handle consent acceptance (e.g., setting a cookie)
    };

    const handleDecline = () => {
        setIsVisible(false);
        // Logic to handle consent decline (e.g., setting a cookie)
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