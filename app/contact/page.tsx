'use client';

import { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { CheckCircle, AlertCircle } from 'lucide-react';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactPage() {
  const [state, setState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot check
    if (data.get('website')) return;

    // Validate
    const newErrors: Record<string, string> = {};
    if (!data.get('name')) newErrors.name = 'Please enter your name.';
    if (!data.get('email') || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.get('email')))) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!data.get('message') || String(data.get('message')).length < 20) {
      newErrors.message = 'Please tell us a bit more (at least 20 characters).';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setState('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          company: data.get('company'),
          budget: data.get('budget'),
          message: data.get('message'),
        }),
      });
      if (res.ok) {
        setState('success');
      } else {
        setState('error');
      }
    } catch {
      setState('error');
    }
  }

  if (state === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ paddingTop: '5rem' }}>
        <Container className="max-w-lg text-center">
          <CheckCircle size={48} className="mx-auto mb-6 text-[#6B7F5B]" />
          <h1 className="mb-4">Message received.</h1>
          <p className="text-[#5C6259] mb-8">
            Thanks for reaching out. We'll get back to you within one business day.
          </p>
          <Button href="/" variant="secondary">Back to home</Button>
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="section-py pt-32 border-b border-[rgba(46,58,47,0.1)]" aria-labelledby="contact-heading">
        <Container className="max-w-4xl">
          <Eyebrow className="mb-4">Contact</Eyebrow>
          <h1 id="contact-heading" className="mb-4 max-w-xl">Let's talk about your project</h1>
          <p className="text-[#5C6259] max-w-lg">
            We respond to every genuine enquiry within one business day. No automated responses.
          </p>
        </Container>
      </section>

      {/* Form */}
      <section className="section-py" aria-label="Contact form">
        <Container className="max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact details */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-lg font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>Direct email</h2>
                <a href="mailto:hello@explr.co" className="text-[#A85434] font-semibold">hello@explr.co</a>
              </div>
              <div>
                <h2 className="text-lg font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>Location</h2>
                <p className="text-[#5C6259] text-sm">London, UK · Remote worldwide</p>
              </div>
              <div>
                <h2 className="text-lg font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>Response time</h2>
                <p className="text-[#5C6259] text-sm">Within 1 business day, always.</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {state === 'error' && (
                <div role="alert" className="flex items-center gap-3 p-4 mb-6 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
                  <AlertCircle size={18} className="shrink-0" />
                  Something went wrong. Please try again or email us directly.
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                {/* Honeypot */}
                <div className="absolute opacity-0 pointer-events-none h-0 overflow-hidden" aria-hidden="true">
                  <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[#2E3A2F] mb-2">
                      Name <span aria-hidden="true" className="text-[#C96F4F]">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      aria-invalid={!!errors.name}
                      className="w-full px-4 py-3 rounded-[4px] border border-[rgba(46,58,47,0.2)] bg-white text-[#1E2620] text-sm focus:outline-none focus:border-[#6B7F5B] focus:ring-2 focus:ring-[#6B7F5B]/20 transition-all duration-200"
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p id="name-error" role="alert" className="text-red-600 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#2E3A2F] mb-2">
                      Email <span aria-hidden="true" className="text-[#C96F4F]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      aria-invalid={!!errors.email}
                      className="w-full px-4 py-3 rounded-[4px] border border-[rgba(46,58,47,0.2)] bg-white text-[#1E2620] text-sm focus:outline-none focus:border-[#6B7F5B] focus:ring-2 focus:ring-[#6B7F5B]/20 transition-all duration-200"
                      placeholder="you@company.com"
                    />
                    {errors.email && (
                      <p id="email-error" role="alert" className="text-red-600 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Company (optional) */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-[#2E3A2F] mb-2">
                      Company <span className="text-[#5C6259] font-normal">(optional)</span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      className="w-full px-4 py-3 rounded-[4px] border border-[rgba(46,58,47,0.2)] bg-white text-[#1E2620] text-sm focus:outline-none focus:border-[#6B7F5B] focus:ring-2 focus:ring-[#6B7F5B]/20 transition-all duration-200"
                      placeholder="Your company name"
                    />
                  </div>

                  {/* Budget */}
                  <div>
                    <label htmlFor="budget" className="block text-sm font-semibold text-[#2E3A2F] mb-2">
                      Budget range <span className="text-[#5C6259] font-normal">(optional)</span>
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      className="w-full px-4 py-3 rounded-[4px] border border-[rgba(46,58,47,0.2)] bg-white text-[#1E2620] text-sm focus:outline-none focus:border-[#6B7F5B] focus:ring-2 focus:ring-[#6B7F5B]/20 transition-all duration-200 appearance-none cursor-pointer"
                    >
                      <option value="">Select a range</option>
                      <option value="<10k">Under £10k</option>
                      <option value="10-25k">£10k – £25k</option>
                      <option value="25-50k">£25k – £50k</option>
                      <option value="50k+">£50k+</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[#2E3A2F] mb-2">
                      Tell us about your project <span aria-hidden="true" className="text-[#C96F4F]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      aria-describedby={errors.message ? 'message-error' : 'message-hint'}
                      aria-invalid={!!errors.message}
                      className="w-full px-4 py-3 rounded-[4px] border border-[rgba(46,58,47,0.2)] bg-white text-[#1E2620] text-sm focus:outline-none focus:border-[#6B7F5B] focus:ring-2 focus:ring-[#6B7F5B]/20 transition-all duration-200 resize-vertical min-h-[120px]"
                      placeholder="What are you building, what's the problem, and what does success look like?"
                    />
                    <p id="message-hint" className="text-[#5C6259] text-xs mt-1">The more detail you give, the more useful our reply will be.</p>
                    {errors.message && (
                      <p id="message-error" role="alert" className="text-red-600 text-xs mt-1">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full justify-center"
                    disabled={state === 'submitting'}
                  >
                    {state === 'submitting' ? 'Sending…' : 'Send message'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
