import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="sticky top-0 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-navy-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="text-lg md:text-xl font-bold text-navy-900 tracking-tight focus-visible:ring-2 focus-visible:ring-navy-300 rounded-lg px-1">
                        SA Healthcare
                    </Link>
                    <nav className="hidden md:flex items-center gap-6">
                        <Link href="/" className="text-navy-700 hover:text-navy-900 focus-visible:ring-2 focus-visible:ring-navy-300 rounded-lg px-1 py-1">
                            Home
                        </Link>
                        <Link href="/about" className="text-navy-700 hover:text-navy-900 focus-visible:ring-2 focus-visible:ring-navy-300 rounded-lg px-1 py-1">
                            About
                        </Link>
                        <Link href="/resources" className="text-navy-700 hover:text-navy-900 focus-visible:ring-2 focus-visible:ring-navy-300 rounded-lg px-1 py-1">
                            Resources
                        </Link>
                        <Link href="/privacy" className="text-navy-700 hover:text-navy-900 focus-visible:ring-2 focus-visible:ring-navy-300 rounded-lg px-1 py-1">
                            Privacy
                        </Link>
                        <Link href="/terms" className="text-navy-700 hover:text-navy-900 focus-visible:ring-2 focus-visible:ring-navy-300 rounded-lg px-1 py-1">
                            Terms
                        </Link>
                        <Link href="/#contact" className="inline-flex items-center justify-center rounded-2xl bg-navy-800 text-white px-4 py-2 shadow-soft hover:shadow-soft-lg hover:bg-navy-900 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-navy-400">
                            Book now
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;