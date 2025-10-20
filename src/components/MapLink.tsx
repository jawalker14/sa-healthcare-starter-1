import React from 'react';

const MapLink: React.FC<{ address: string }> = ({ address }) => {
    const handleClick = () => {
        const encodedAddress = encodeURIComponent(address);
        window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
    };

    return (
        <button 
            onClick={handleClick} 
            className="flex items-center p-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition"
        >
            <span className="mr-2">View on Map</span>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
            >
                <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 3h18M3 12h18M3 21h18" 
                />
            </svg>
        </button>
    );
};

export default MapLink;