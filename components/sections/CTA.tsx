import { Button } from '@/components/ui/Button';
import { ArrowRight, Mail } from 'lucide-react';

export function CTA() {
  return (
    <section style={{paddingBottom: "0px"}} className="cta-section section-py" aria-labelledby="cta-heading">
      {/* Background blobs */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-8rem', right: '-8rem', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle,#C96F4F 0%,transparent 70%)', opacity: 0.12, filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: '-8rem', left: '-8rem', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle,#6B7F5B 0%,transparent 70%)', opacity: 0.08, filter: 'blur(80px)' }} />
        <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.035 }} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="#F8F6EE" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-dots)" />
        </svg>
      </div>

      <div className="container">
        <div className="cta-inner">
          <span className="eyebrow cta-eyebrow">Ready when you are</span>

          <h2 id="cta-heading" className="cta-h2">
            Let&apos;s build something you&apos;re{' '}
            <span className="accent-text">genuinely proud of.</span>
          </h2>

          <p className="cta-sub">
            Tell us about your project. We&apos;ll get back within one business day with an
            honest assessment of how we can help.
          </p>

          <div className="cta-btns">
            <Button href="/contact" variant="primary" size="lg" className="glass-btn">
              Start a project <ArrowRight size={15} />
            </Button>
            <a href="mailto:explr7060@gmail.com" className="cta-email-btn">
              <Mail size={14} /> explr7060@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>  
  );
}
