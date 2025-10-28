import React from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import SkipToContent from '../src/components/SkipToContent';
import ConsentNotice from '../src/components/ConsentNotice';
import MetaPixel from '../src/components/MetaPixel';
import GoogleAnalytics from '../src/components/GoogleAnalytics';
import AnalyticsLinkTracker from '../src/components/AnalyticsLinkTracker';
import LiveChat from '../src/components/LiveChat';
import { getSettings } from '../src/lib/settings';
import { Metadata } from 'next';
import Schema from '../src/components/Schema';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat', display: 'swap' });

export const metadata: Metadata = {
  title: {
    default: 'South African Healthcare Practices',
    template: '%s | South African Healthcare Practices',
  },
  description: 'A website starter for healthcare practices in South Africa, aligned with HPCSA and POPIA.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    title: 'South African Healthcare Practices',
    description: 'A website starter for healthcare practices in South Africa, aligned with HPCSA and POPIA.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'South African Healthcare Practices',
    description: 'A website starter for healthcare practices in South Africa, aligned with HPCSA and POPIA.',
  },
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const settings = getSettings();
  const orgSchema = settings.analytics?.schema
    ? {
        '@context': 'https://schema.org',
        '@type': 'MedicalClinic',
        name: 'Healthcare Practice',
        url: process.env.NEXT_PUBLIC_SITE_URL || undefined,
        address: {
          '@type': 'PostalAddress',
          streetAddress: settings.address?.street,
          addressLocality: settings.address?.city,
          addressRegion: settings.address?.province,
          postalCode: settings.address?.postalCode,
          addressCountry: 'ZA',
        },
        telephone: settings.contacts?.phone,
        email: settings.contacts?.email,
      }
    : null;
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="bg-white text-navy-900">
        <SkipToContent />
        <Header />
        <main id="main-content" className="min-h-[60vh] focus:outline-none">
          {children}
        </main>
        <Footer />
        <ConsentNotice />
  {/* Load GA4 only with Analytics consent */}
  <GoogleAnalytics />
  {/* Passive listeners for analytics events like file downloads */}
  <AnalyticsLinkTracker />
  {/* Technical SEO: JSON-LD (toggle via settings.analytics.schema) */}
  {orgSchema ? <Schema schema={orgSchema} /> : null}
        <MetaPixel
          enabled={settings.metaPixel?.enabled}
          pixelId={settings.metaPixel?.pixelId}
          bookingUrl={settings.booking?.url}
        />
        <LiveChat
          enabled={settings.liveChat?.enabled}
          provider={settings.liveChat?.provider as any}
          propertyId={settings.liveChat?.propertyId}
          widgetId={settings.liveChat?.widgetId}
          scriptUrl={settings.liveChat?.scriptUrl}
        />
      </body>
    </html>
  );
};

export default Layout;