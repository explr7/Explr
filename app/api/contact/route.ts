import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory rate limit (per-IP, 3 requests per 10 min)
const rateMap = new Map<string, { count: number; ts: number }>();
const RATE_LIMIT = 3;
const WINDOW_MS = 10 * 60 * 1000;

export async function POST(req: NextRequest) {
  // Rate limiting
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0] ?? 'unknown';
  const now = Date.now();
  const record = rateMap.get(ip);
  if (record && now - record.ts < WINDOW_MS) {
    if (record.count >= RATE_LIMIT) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }
    record.count++;
  } else {
    rateMap.set(ip, { count: 1, ts: now });
  }

  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }

  const { name, email, company, budget, message } = body;

  // Server-side validation
  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 422 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 422 });
  }

  // In production: send via Resend / Nodemailer here
  // For now: log to console (replace with actual email service)
  console.log('[Contact form submission]', { name, email, company, budget, message: message.slice(0, 200) });

  return NextResponse.json({ success: true }, { status: 200 });
}
