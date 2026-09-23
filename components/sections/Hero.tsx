import { Button } from '@/components/ui/Button';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      {/* Decorative dot grid */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
        <svg width="100%" height="100%" style={{ opacity: 0.035 }} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="#2E3A2F" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-dots)" />
        </svg>
        {/* Warm blob */}
        <div style={{
          position: 'absolute', top: '-10rem', right: '-10rem',
          width: '600px', height: '600px', borderRadius: '50%',
          background: 'radial-gradient(circle, #D9C9B2 0%, transparent 70%)',
          opacity: 0.22, filter: 'blur(100px)',
        }} />
        {/* Sage blob */}
        <div style={{
          position: 'absolute', bottom: '-8rem', left: '-8rem',
          width: '450px', height: '450px', borderRadius: '50%',
          background: 'radial-gradient(circle, #6B7F5B 0%, transparent 70%)',
          opacity: 0.12, filter: 'blur(80px)',
        }} />
      </div>

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Eyebrow */}
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-line" aria-hidden="true" />
          <span className="eyebrow" style={{ marginBottom: 0 }}>Brand &amp; Digital Studio · London</span>
        </div>

        {/* H1 */}
        <h1 className="hero-h1">
          We build brands that{' '}
          <span className="accent-text">feel alive.</span>
        </h1>

        {/* Subtext */}
        <p className="hero-sub">
          explr is a brand and digital studio for companies that refuse to look like
          everyone else. Strategy, design, and code — under one roof.
        </p>

        {/* CTAs */}
        <div className="hero-ctas">
          <Button href="/contact" variant="primary" size="lg" className="glass-btn">
            Start a project <ArrowRight size={15} />
          </Button>
          <Button href="/work" variant="secondary" size="lg">
            See our work <ArrowUpRight size={15} />
          </Button>
        </div>

        {/* Stats */}
        <div className="hero-stats glass-card" style={{ background: 'rgba(255,255,255,0.38)' }}>
          {[
            { num: '8+',  label: 'Years of craft' },
            { num: '60+', label: 'Brands launched' },
            { num: '3×',  label: 'Avg. revenue lift' },
            { num: '95+', label: 'Lighthouse score' },
          ].map((s) => (
            <div key={s.label} className="hero-stat">
              <span className="hero-stat-num">{s.num}</span>
              <span className="hero-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
