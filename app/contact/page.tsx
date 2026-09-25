'use client';

import { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { CheckCircle, AlertCircle, Mail, MapPin, Clock } from 'lucide-react';

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
      <div className="min-h-screen flex items-center justify-center pt-36 pb-20">
        <Container className="max-w-lg text-center">
          <div className="bg-white/85 backdrop-blur-xl border border-[rgba(46,58,47,0.1)] rounded-3xl p-10 sm:p-12 shadow-lg">
            <CheckCircle size={56} className="mx-auto mb-6 text-[#6B7F5B]" />
            <h1 className="text-3xl sm:text-4xl font-black mb-4 text-[#1E2620] tracking-tight">Message received.</h1>
            <p className="text-[#5C6259] mb-8 font-sans text-base leading-relaxed">
              Thanks for reaching out! We&apos;ll get back to you at your email within one business day.
            </p>
            <Button href="/" variant="secondary">Back to home</Button>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-36 sm:pt-44 pb-20 sm:pb-28">
      <Container className="max-w-5xl">
        {/* Page Title & Intro */}
        <div className="mb-12 sm:mb-16">
          <Eyebrow className="mb-3">Contact explr</Eyebrow>
          <h1 id="contact-heading" className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1E2620] tracking-tight leading-[1.08] mb-4 max-w-2xl">
            Let&apos;s talk about your project
          </h1>
          <p className="text-[#5C6259] max-w-xl text-lg sm:text-xl font-sans leading-relaxed">
            We respond to every genuine enquiry within one business day. Direct, thoughtful, and no automated responses.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Form Column (Primary) */}
          <div className="lg:col-span-7">
            <div className="bg-white/85 backdrop-blur-xl border border-[rgba(46,58,47,0.1)] rounded-3xl p-7 sm:p-10 shadow-xs">
              {state === 'error' && (
                <div role="alert" className="flex items-center gap-3 p-4 mb-6 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-sm font-sans">
                  <AlertCircle size={18} className="shrink-0" />
                  Something went wrong. Please try again or email us directly at explr7060@gmail.com.
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate aria-label="Contact form" autoComplete="off">
                {/* Honeypot */}
                <div className="absolute opacity-0 pointer-events-none h-0 overflow-hidden" aria-hidden="true">
                  <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[#2E3A2F] mb-2 font-sans">
                      Name <span aria-hidden="true" className="text-[#C96F4F]">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="off"
                      autoCorrect="off"
                      spellCheck={false}
                      data-lpignore="true"
                      data-form-type="other"
                      required
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      aria-invalid={!!errors.name}
                      className="w-full px-4 py-3.5 rounded-xl border border-[rgba(46,58,47,0.18)] bg-white text-[#1E2620] text-sm font-sans placeholder:text-[#5C6259]/45 focus:outline-none focus:border-[#6B7F5B] focus:ring-4 focus:ring-[#6B7F5B]/15 transition-all shadow-xs"
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p id="name-error" role="alert" className="text-red-600 text-xs mt-1.5 font-sans">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#2E3A2F] mb-2 font-sans">
                      Email <span aria-hidden="true" className="text-[#C96F4F]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="off"
                      autoCorrect="off"
                      autoCapitalize="off"
                      spellCheck={false}
                      data-lpignore="true"
                      data-form-type="other"
                      required
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      aria-invalid={!!errors.email}
                      className="w-full px-4 py-3.5 rounded-xl border border-[rgba(46,58,47,0.18)] bg-white text-[#1E2620] text-sm font-sans placeholder:text-[#5C6259]/45 focus:outline-none focus:border-[#6B7F5B] focus:ring-4 focus:ring-[#6B7F5B]/15 transition-all shadow-xs"
                      placeholder="you@company.com"
                    />
                    {errors.email && (
                      <p id="email-error" role="alert" className="text-red-600 text-xs mt-1.5 font-sans">{errors.email}</p>
                    )}
                  </div>

                  {/* Company (optional) */}
                  <div>
                    <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-[#2E3A2F] mb-2 font-sans">
                      Company <span className="text-[#5C6259]/70 font-normal lowercase">(optional)</span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="off"
                      autoCorrect="off"
                      spellCheck={false}
                      data-lpignore="true"
                      data-form-type="other"
                      className="w-full px-4 py-3.5 rounded-xl border border-[rgba(46,58,47,0.18)] bg-white text-[#1E2620] text-sm font-sans placeholder:text-[#5C6259]/45 focus:outline-none focus:border-[#6B7F5B] focus:ring-4 focus:ring-[#6B7F5B]/15 transition-all shadow-xs"
                      placeholder="Your company name"
                    />
                  </div>

                  {/* Budget */}
                  <div>
                    <label htmlFor="budget" className="block text-xs font-bold uppercase tracking-wider text-[#2E3A2F] mb-2 font-sans">
                      Budget range <span className="text-[#5C6259]/70 font-normal lowercase">(optional)</span>
                    </label>
                    <div className="relative">
                      <select
                        id="budget"
                        name="budget"
                        autoComplete="off"
                        className="w-full px-4 py-3.5 rounded-xl border border-[rgba(46,58,47,0.18)] bg-white text-[#1E2620] text-sm font-sans focus:outline-none focus:border-[#6B7F5B] focus:ring-4 focus:ring-[#6B7F5B]/15 transition-all appearance-none cursor-pointer pr-10 shadow-xs"
                      >
                        <option value="">Select a range</option>
                        <option value="<10k">Under £10k</option>
                        <option value="10-25k">£10k – £25k</option>
                        <option value="25-50k">£25k – £50k</option>
                        <option value="50k+">£50k+</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#5C6259]">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#2E3A2F] mb-2 font-sans">
                      Tell us about your project <span aria-hidden="true" className="text-[#C96F4F]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      autoComplete="off"
                      autoCorrect="off"
                      spellCheck={false}
                      required
                      aria-describedby={errors.message ? 'message-error' : 'message-hint'}
                      aria-invalid={!!errors.message}
                      className="w-full px-4 py-3.5 rounded-xl border border-[rgba(46,58,47,0.18)] bg-white text-[#1E2620] text-sm font-sans placeholder:text-[#5C6259]/45 focus:outline-none focus:border-[#6B7F5B] focus:ring-4 focus:ring-[#6B7F5B]/15 transition-all resize-vertical min-h-[140px] shadow-xs"
                      placeholder="What are you building, what's the problem, and what does success look like?"
                    />
                    <p id="message-hint" className="text-[#5C6259] text-xs mt-1.5 font-sans">The more detail you give, the more useful our reply will be.</p>
                    {errors.message && (
                      <p id="message-error" role="alert" className="text-red-600 text-xs mt-1.5 font-sans">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full justify-center text-sm font-bold uppercase tracking-wider py-4 rounded-xl shadow-md"
                    disabled={state === 'submitting'}
                  >
                    {state === 'submitting' ? 'Sending…' : 'Send message'}
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Info Sidebar Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white/80 backdrop-blur-xl border border-[rgba(46,58,47,0.1)] rounded-3xl p-8 sm:p-10 shadow-xs space-y-8">
              
              {/* Email Item */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#C96F4F]/10 flex items-center justify-center shrink-0 text-[#C96F4F]">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#A85434] mb-1 font-sans">Direct email</p>
                  <a
                    href="mailto:explr7060@gmail.com"
                    className="text-base sm:text-lg font-bold text-[#1E2620] hover:text-[#C96F4F] transition-colors break-all font-sans"
                  >
                    explr7060@gmail.com
                  </a>
                </div>
              </div>

              {/* Location Item */}
              <div className="flex items-start gap-4 pt-7 border-t border-[rgba(46,58,47,0.08)]">
                <div className="w-11 h-11 rounded-2xl bg-[#6B7F5B]/10 flex items-center justify-center shrink-0 text-[#6B7F5B]">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#6B7F5B] mb-1 font-sans">Location</p>
                  <p className="text-sm sm:text-base font-semibold text-[#1E2620] font-sans">London, UK · Remote worldwide</p>
                </div>
              </div>

              {/* Response Time Item */}
              <div className="flex items-start gap-4 pt-7 border-t border-[rgba(46,58,47,0.08)]">
                <div className="w-11 h-11 rounded-2xl bg-[#2E3A2F]/10 flex items-center justify-center shrink-0 text-[#2E3A2F]">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#2E3A2F] mb-1 font-sans">Response time</p>
                  <p className="text-sm sm:text-base font-semibold text-[#1E2620] font-sans">Within 1 business day, always.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </div>
  );
}
