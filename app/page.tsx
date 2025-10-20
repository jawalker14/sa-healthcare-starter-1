import React from 'react';
import Layout from '../src/components/Layout';
import { SEO } from '../src/components/SEO';
import { getSettings } from '../src/lib/settings';

const HomePage = () => {
  const settings = getSettings();

  return (
    <Layout>
      <SEO title="Home" description="Welcome to our healthcare practice." />
      <main>
        <h1 className="text-4xl font-bold">Welcome to Our Healthcare Practice</h1>
        <p className="mt-4">Your health is our priority. We are committed to providing quality healthcare services.</p>
        <p className="mt-2">Contact us at: {settings.contacts.email}</p>
      </main>
    </Layout>
  );
};

export default HomePage;