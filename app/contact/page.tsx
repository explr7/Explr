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

    if (data.get('website')) return;

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
      if (res.ok) setState('success');
      else setState('error');
    } catch {
      setState('error');
    }
  }

  if (state === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32 pb-20">
        <Container className="max-w-lg text-center">
          <div className="bg-white border border-[rgba(46,58,47,0.12)] rounded-xl p-10 sm:p-12 shadow-sm">
            <CheckCircle size={56} className="mx-auto mb-6 text-[#6B7F5B]" />
            <h1 className="text-xl sm:text-4xl font-black mb-4 text-[#1E2620] tracking-tight">Message received.</h1>
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
    <div className="min-h-screen page-hero pb-24 sm:pb-32">
      <Container className="max-w-5xl" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

        {/* ── Page Header — full width ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }} className="mb-12 sm:mb-16">
          <Eyebrow>Contact explr</Eyebrow>
          <h1
            id="contact-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1E2620] tracking-tight leading-[1.08] max-w-2xl"
          >
            Let&apos;s talk about<br />your project
          </h1>
          <p className="text-[#5C6259] max-w-lg text-base sm:text-lg font-sans leading-relaxed">
            We respond to every genuine enquiry within one business day. Direct, thoughtful, and no automated responses.
          </p>
        </div>

        {/* ── Two-column grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* ── Left: Form Card ── */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[rgba(46,58,47,0.12)] rounded-xl p-8 sm:p-10 shadow-xs">

              {state === 'error' && (
                <div role="alert" className="flex items-center gap-3 p-4 mb-6 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-sans">
                  <AlertCircle size={18} className="shrink-0" />
                  Something went wrong. Please try again or email us directly at explr7060@gmail.com.
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate aria-label="Contact form" autoComplete="new-password">
                {/* Honeypot */}
                <div style={{ position: 'absolute', left: '-9999px', width: 0, height: 0, overflow: 'hidden' }} aria-hidden="true">
                  <input type="text" name="website" tabIndex={-1} autoComplete="new-password" />
                </div>

                <div className="flex flex-col gap-5" style={{ padding: "24px",}}>

                  {/* Name */}
                  <div>
                    <label htmlFor="cf-name" className="block text-[0.7rem] font-bold uppercase tracking-widest text-[#2E3A2F] mb-2 font-sans">
                      Name <span aria-hidden="true" className="text-[#C96F4F]">*</span>
                    </label>
                    <input
                      id="cf-name" name="name" type="text"
                      autoComplete="new-password" autoCorrect="off" spellCheck={false}
                      data-lpignore="true" data-form-type="other" required
                      aria-describedby={errors.name ? 'name-err' : undefined}
                      aria-invalid={!!errors.name}
                      className="w-full h-12 px-4 rounded-xl border border-[rgba(46,58,47,0.18)] bg-[#F8F6EE]/60 text-[#1E2620] text-sm font-sans focus:outline-none focus:bg-white focus:border-[#6B7F5B] focus:ring-2 focus:ring-[#6B7F5B]/20 transition-all"
                    />
                    {errors.name && <p id="name-err" role="alert" className="text-red-600 text-xs mt-1.5 font-sans">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="cf-email" className="block text-[0.7rem] font-bold uppercase tracking-widest text-[#2E3A2F] mb-2 font-sans">
                      Email <span aria-hidden="true" className="text-[#C96F4F]">*</span>
                    </label>
                    <input
                      id="cf-email" name="email" type="email"
                      autoComplete="new-password" autoCorrect="off" autoCapitalize="off" spellCheck={false}
                      data-lpignore="true" data-form-type="other" required
                      aria-describedby={errors.email ? 'email-err' : undefined}
                      aria-invalid={!!errors.email}
                      className="w-full h-12 px-4 rounded-xl border border-[rgba(46,58,47,0.18)] bg-[#F8F6EE]/60 text-[#1E2620] text-sm font-sans focus:outline-none focus:bg-white focus:border-[#6B7F5B] focus:ring-2 focus:ring-[#6B7F5B]/20 transition-all"
                    />
                    {errors.email && <p id="email-err" role="alert" className="text-red-600 text-xs mt-1.5 font-sans">{errors.email}</p>}
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="cf-company" className="block text-[0.7rem] font-bold uppercase tracking-widest text-[#2E3A2F] mb-2 font-sans">
                      Company <span className="text-[#5C6259]/60 font-normal normal-case text-xs">(optional)</span>
                    </label>
                    <input
                      id="cf-company" name="company" type="text"
                      autoComplete="new-password" autoCorrect="off" spellCheck={false}
                      data-lpignore="true" data-form-type="other"
                      className="w-full h-12 px-4 rounded-xl border border-[rgba(46,58,47,0.18)] bg-[#F8F6EE]/60 text-[#1E2620] text-sm font-sans focus:outline-none focus:bg-white focus:border-[#6B7F5B] focus:ring-2 focus:ring-[#6B7F5B]/20 transition-all"
                    />
                  </div>

                  {/* Budget */}
                  <div>
                    <label htmlFor="cf-budget" className="block text-[0.7rem] font-bold uppercase tracking-widest text-[#2E3A2F] mb-2 font-sans">
                      Budget range <span className="text-[#5C6259]/60 font-normal normal-case text-xs">(optional)</span>
                    </label>
                    <div className="relative">
                      <select
                        id="cf-budget" name="budget" autoComplete="off" defaultValue=""
                        className="w-full h-12 rounded-xl border border-[rgba(46,58,47,0.18)] bg-[#F8F6EE]/60 text-[#1E2620] text-sm font-sans focus:outline-none focus:bg-white focus:border-[#6B7F5B] focus:ring-2 focus:ring-[#6B7F5B]/20 transition-all appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select a range</option>
                        <option value="&lt;10k">Under £10k</option>
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
                    <label htmlFor="cf-message" className="block text-[0.7rem] font-bold uppercase tracking-widest text-[#2E3A2F] mb-2 font-sans">
                      Tell us about your project <span aria-hidden="true" className="text-[#C96F4F]">*</span>
                    </label>
                    <textarea
                      id="cf-message" name="message" rows={6}
                      autoComplete="new-password" autoCorrect="off" spellCheck={false} required
                      aria-describedby={errors.message ? 'msg-err' : undefined}
                      aria-invalid={!!errors.message}
                      className="w-full p-4 rounded-xl border border-[rgba(46,58,47,0.18)] bg-[#F8F6EE]/60 text-[#1E2620] text-sm font-sans focus:outline-none focus:bg-white focus:border-[#6B7F5B] focus:ring-2 focus:ring-[#6B7F5B]/20 transition-all resize-none min-h-[150px]"
                    />
                    {errors.message && <p id="msg-err" role="alert" className="text-red-600 text-xs mt-1.5 font-sans">{errors.message}</p>}
                  </div>

                  <Button
                    type="submit" variant="primary" size="lg"
                    className="w-full justify-center text-sm font-bold uppercase tracking-wider h-12 rounded-xl"
                    disabled={state === 'submitting'}
                  >
                    {state === 'submitting' ? 'Sending…' : 'Send message'}
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* ── Right: Info Card ── */}
          <div className="lg:col-span-5 lg:sticky lg:top-[88px]">
            <div
              style={{ padding: "24px" }}
              className="bg-white border border-[rgba(46,58,47,0.12)] rounded-xl shadow-xs overflow-hidden flex flex-col gap-4"
            >
              {/* Email */}
              <div className="flex items-start gap-4 p-8 sm:p-10">
                <div className="w-11 h-11 rounded-2xl bg-[#C96F4F]/10 flex items-center justify-center shrink-0 text-[#C96F4F] mt-0.5">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[0.65rem] font-bold uppercase tracking-widest text-[#A85434] mb-1.5 font-sans">Direct email</p>
                  <a
                    href="mailto:explr7060@gmail.com"
                    className="text-sm sm:text-base font-bold text-[#1E2620] hover:text-[#C96F4F] transition-colors break-all font-sans leading-snug block"
                  >
                    explr7060@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 p-8 sm:p-10 border-t border-[rgba(46,58,47,0.08)]">
                <div className="w-11 h-11 rounded-2xl bg-[#6B7F5B]/10 flex items-center justify-center shrink-0 text-[#6B7F5B] mt-0.5">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[0.65rem] font-bold uppercase tracking-widest text-[#6B7F5B] mb-1.5 font-sans">Location</p>
                  <p className="text-sm sm:text-base font-semibold text-[#1E2620] font-sans">London, UK · Remote worldwide</p>
                </div>
              </div>

              {/* Response Time */}
              <div className="flex items-start gap-4 p-8 sm:p-10 border-t border-[rgba(46,58,47,0.08)]">
                <div className="w-11 h-11 rounded-2xl bg-[#2E3A2F]/10 flex items-center justify-center shrink-0 text-[#2E3A2F] mt-0.5">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-[0.65rem] font-bold uppercase tracking-widest text-[#2E3A2F] mb-1.5 font-sans">Response time</p>
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
