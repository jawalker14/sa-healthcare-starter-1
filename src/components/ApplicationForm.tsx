"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Input, TextArea, Select } from '@/components/ui/Input';
import { trackFormSubmit } from '@/lib/analytics';

type Props = {
  roles: string[];
};

const ApplicationForm: React.FC<Props> = ({ roles }) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string>('');
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    startTimeRef.current = Date.now();
  }, []);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setStatus('submitting');

    const form = e.currentTarget;
    const data = new FormData(form);

    // Basic spam guard: require >= 2s dwell and a hidden honeypot to be empty
    const dwellMs = Date.now() - startTimeRef.current;
    if (dwellMs < 2000 || (data.get('website') as string)) {
      setStatus('error');
      setError('Submission failed. Please try again.');
      return;
    }

    // POPIA: ensure explicit consent
    if (!data.get('consent')) {
      setStatus('error');
      setError('Please provide consent to process your application.');
      return;
    }

    data.set('message', `[Role: ${data.get('role')}]\n${data.get('message') || ''}`);

    try {
      const res = await fetch('/api/contact', { method: 'POST', body: data });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      form.reset();
  trackFormSubmit('application', 'success');
    } catch (err) {
      setStatus('error');
      setError('Something went wrong. Please try again later.');
  trackFormSubmit('application', 'error');
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Input id="name" name="name" label="Full name" required placeholder="Your name" />
        <Input id="email" name="email" type="email" label="Email" required placeholder="you@example.com" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Input id="phone" name="phone" type="tel" label="Phone" placeholder="+27 ..." />
        <Select id="role" name="role" label="Role" required>
          <option value="">Select a role</option>
          {roles.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </Select>
      </div>
      <TextArea id="message" name="message" label="Cover note" hint="Share relevant experience and availability." rows={5} />
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="flex items-start gap-3">
        <input id="consent" name="consent" type="checkbox" className="mt-1" required />
        <label htmlFor="consent" className="text-sm text-navy-800/90">
          I consent to the processing of my application details for recruitment purposes as outlined in the{' '}
          <a href="/privacy" className="underline">Privacy Policy</a>.
        </label>
      </div>
      <div className="flex items-center gap-3">
        <button type="submit" className="inline-flex items-center justify-center rounded-2xl bg-navy-800 text-white px-4 py-2 shadow-soft hover:bg-navy-900 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-navy-400" disabled={status==='submitting'}>
          {status === 'submitting' ? 'Submitting…' : 'Submit application'}
        </button>
        {status === 'success' && <span className="text-sm text-emerald-600">Thank you — we’ll be in touch.</span>}
        {status === 'error' && <span className="text-sm text-red-600">{error}</span>}
      </div>
    </form>
  );
};

export default ApplicationForm;
