import React from 'react';

const SkipToContent: React.FC = () => {
    return (
        <a href="#main-content" className="absolute -top-10 left-0 p-2 bg-blue-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-300">
            Skip to main content
        </a>
    );
};

export default SkipToContent;