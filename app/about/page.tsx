import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Team } from '@/components/sections/Team';
import { CTA } from '@/components/sections/CTA';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about explr — our story, values, and the small team behind the work.',
};

const beliefs = [
  {
    num: '01',
    title: 'Craft is a competitive advantage.',
    body: "Good design isn't decoration — it's the thing that makes people trust you before they've read a single word. We treat it accordingly, obsessing over every pixel, transition, and micro-interaction.",
  },
  {
    num: '02',
    title: 'Opinions are part of the service.',
    body: "We'll tell you if we think you're heading in the wrong direction. Not to be difficult — because you're paying for senior expertise, high judgment, and honest partnership, not passive agreement.",
  },
  {
    num: '03',
    title: 'Slow is smooth. Smooth is fast.',
    body: 'The projects that rush into execution without clear strategic architecture always cost twice as much to fix. We take the time to get the core right so rapid execution doesn’t break down.',
  },
  {
    num: '04',
    title: 'No brief survives first contact.',
    body: "Requirements evolve as real users interact with your brand. We're comfortable with ambiguity and build fluid, adaptive processes that accommodate momentum rather than resist it.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-36 sm:pt-44 pb-14 sm:pb-20 border-b border-[rgba(46,58,47,0.08)]" aria-labelledby="about-heading">
        <Container className="max-w-5xl">
          <Eyebrow className="mb-4">About explr</Eyebrow>
          <h1 id="about-heading" className="max-w-3xl mb-6 text-4xl sm:text-5xl lg:text-6xl font-black text-[#1E2620] tracking-tight leading-[1.08]">
            A small studio with an unreasonably high bar.
          </h1>
          <p className="text-[#5C6259] max-w-2xl text-lg sm:text-xl leading-relaxed font-sans">
            We started explr because we kept seeing the same pattern: brilliant founders with world-changing
            ideas, let down by bloated agencies that treated them like tickets in a queue. We build lean, thoughtful,
            and exceptionally crafted digital products.
          </p>
        </Container>
      </section>

      {/* Values / What we believe */}
      <section className="py-20 sm:py-28" aria-labelledby="values-heading">
        <Container className="max-w-5xl">
          <div className="mb-14">
            <Eyebrow className="mb-3">What we believe</Eyebrow>
            <h2 id="values-heading" className="text-3xl sm:text-4xl font-black text-[#1E2620] tracking-tight">
              Four principles that shape our work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {beliefs.map((b) => (
              <div
                key={b.title}
                className="bg-white/80 backdrop-blur-xl border border-[rgba(46,58,47,0.1)] rounded-3xl p-8 sm:p-10 shadow-xs hover:shadow-md hover:border-[#6B7F5B]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="inline-flex items-center justify-center px-3.5 py-1 rounded-full bg-[#C96F4F]/10 text-[#C96F4F] font-mono text-xs font-bold tracking-widest mb-6">
                    {b.num}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#1E2620] mb-3 leading-snug tracking-tight">
                    {b.title}
                  </h3>
                  <p className="text-[#5C6259] text-sm sm:text-base leading-relaxed font-sans">
                    {b.body}
                  </p>
                </div>
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
