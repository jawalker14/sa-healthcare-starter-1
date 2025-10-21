"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import CTA from '../src/components/ui/CTA';

// Custom 404 page for Next.js App Router (app/not-found.tsx)
// This file is automatically used for 404s in the app directory.
export default function NotFound() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  // Move focus to the main heading for screen readers on mount
  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-6 py-16">
      <div className="max-w-xl text-center">
        <p className="text-sm font-semibold tracking-wider text-navy-500" aria-hidden>
          404
        </p>
        <h1
          ref={headingRef}
          tabIndex={-1}
          className="mt-2 text-3xl font-extrabold text-navy-900 sm:text-4xl"
        >
          Page Not Found
        </h1>
        <p className="mt-3 text-navy-700">
          Sorry, we couldn’t find that page. It may have been moved or deleted.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <CTA as="link" href="/" variant="primary" size="md">
            Go to Home
          </CTA>
          <Link
            href="/contact"
            className="text-navy-800 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-navy-400 rounded"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
