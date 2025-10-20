import React from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import SkipToContent from '../src/components/SkipToContent';
import ConsentNotice from '../src/components/ConsentNotice';
import MetaPixel from '../src/components/MetaPixel';
import { getSettings } from '../src/lib/settings';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'South African Healthcare Practices',
  description: 'A website starter for healthcare practices in South Africa, aligned with HPCSA and POPIA.',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const settings = getSettings();
  return (
    <html lang="en">
      <body>
        <SkipToContent />
        <Header />
        <main>{children}</main>
        <Footer />
        <ConsentNotice />
        <MetaPixel
          enabled={settings.metaPixel?.enabled}
          pixelId={settings.metaPixel?.pixelId}
          bookingUrl={settings.booking?.url}
        />
      </body>
    </html>
  );
};

export default Layout;