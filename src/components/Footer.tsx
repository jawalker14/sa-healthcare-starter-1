import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-navy-900 text-white pt-12 pb-8 mt-20 border-t border-navy-800">
            <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
                <p className="text-sm/6 text-white/80 max-w-3xl mx-auto">
                    This practice adheres to HPCSA regulations and POPIA. Content on this site is informational and not a substitute for
                    professional medical advice, diagnosis, or treatment.
                </p>
                <div className="pt-2">
                    <p className="text-white/70">&copy; {new Date().getFullYear()} Your Practice Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;