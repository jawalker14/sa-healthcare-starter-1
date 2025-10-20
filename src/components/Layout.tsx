import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SkipToContent from './SkipToContent';
import ConsentNotice from './ConsentNotice';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <SkipToContent />
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
            <ConsentNotice />
        </div>
    );
};

export default Layout;