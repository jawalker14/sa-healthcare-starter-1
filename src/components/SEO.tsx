import React from 'react';
import Head from 'next/head';

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  author?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, author }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:image" content="/path/to/image.jpg" />
      <link rel="canonical" href={window.location.href} />
    </Head>
  );
};

export default SEO;