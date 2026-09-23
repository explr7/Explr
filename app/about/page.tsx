import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Team } from '@/components/sections/Team';
import { CTA } from '@/components/sections/CTA';
import { Button } from '@/components/ui/Button';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about explr — our story, values, and the small team behind the work.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="section-py pt-32 border-b border-[rgba(46,58,47,0.1)]" aria-labelledby="about-heading">
        <Container className="max-w-4xl">
          <Eyebrow className="mb-4">About explr</Eyebrow>
          <h1 id="about-heading" className="max-w-2xl mb-6">
            A small studio with an unreasonably high bar.
          </h1>
          <p className="text-[#5C6259] max-w-xl text-lg leading-relaxed">
            We started explr because we kept seeing the same pattern: brilliant founders with world-changing
            ideas, let down by agencies that treated them like tickets in a queue. We wanted to build
            something better.
          </p>
        </Container>
      </section>

      {/* Values */}
      <section className="section-py" aria-labelledby="values-heading">
        <Container className="max-w-4xl">
          <Eyebrow className="mb-8">What we believe</Eyebrow>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Craft is a competitive advantage.', body: 'Good design isn\'t decoration — it\'s the thing that makes people trust you before they\'ve read a single word. We treat it accordingly.' },
              { title: 'Opinions are part of the service.', body: 'We\'ll tell you if we think you\'re wrong. Not to be difficult — because you\'re paying for expertise, not agreement.' },
              { title: 'Slow is smooth. Smooth is fast.', body: 'The projects that rush into execution without a clear strategy always cost more to fix than they saved at the start.' },
              { title: 'No brief survives first contact.', body: 'The spec changes. We\'re comfortable with ambiguity. We build processes that accommodate it rather than pretend it won\'t happen.' },
            ].map((v) => (
              <div key={v.title} className="p-6 rounded-xl border border-[rgba(46,58,47,0.1)]">
                <h3 className="text-base font-bold mb-3" style={{ fontFamily: 'var(--font-display)' }}>{v.title}</h3>
                <p className="text-[#5C6259] text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Team />
      <CTA />
    </div>
  );
}
