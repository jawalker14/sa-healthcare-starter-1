import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <Link href="/" className="text-xl font-bold text-gray-900">
                            SA Healthcare
                        </Link>
                        <nav className="ml-10 flex space-x-4">
                            <Link href="/" className="text-gray-500 hover:text-gray-900">
                                Home
                            </Link>
                            <Link href="/about" className="text-gray-500 hover:text-gray-900">
                                About
                            </Link>
                            <Link href="/resources" className="text-gray-500 hover:text-gray-900">
                                Resources
                            </Link>
                            <Link href="/privacy" className="text-gray-500 hover:text-gray-900">
                                Privacy
                            </Link>
                            <Link href="/terms" className="text-gray-500 hover:text-gray-900">
                                Terms
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;