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
        <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg z-50">
            <p className="text-sm">
                We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of cookies.
            </p>
            <div className="flex justify-end mt-2">
                <button onClick={handleDecline} className="mr-2 text-gray-500">
                    Decline
                </button>
                <button onClick={handleAccept} className="bg-blue-500 text-white px-4 py-2 rounded">
                    Accept
                </button>
            </div>
        </div>
    );
};

export default ConsentNotice;