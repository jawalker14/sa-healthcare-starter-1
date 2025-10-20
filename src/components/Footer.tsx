import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <p className="text-sm opacity-80">
                    This practice adheres to HPCSA regulations and POPIA. Information on this site is not a substitute for professional
                    medical advice.
                </p>
                <div className="mt-4">
                    <p>&copy; {new Date().getFullYear()} Your Practice Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;