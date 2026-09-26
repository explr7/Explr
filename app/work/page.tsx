import type { Metadata } from 'next';
import { caseStudies } from '@/content/work';
import { Container } from '@/components/layout/Container';
import { Tag } from '@/components/ui/Tag';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Selected work and digital products from explr — website development, web applications, and digital platforms.',
};

export default function WorkPage() {
  return (
    <div className="min-h-screen">
      {/* Page hero */}
      <section
        className="page-hero border-b border-[rgba(46,58,47,0.08)]"
        aria-labelledby="work-page-heading"
      >
        <Container className="max-w-4xl">
          <Eyebrow className="mb-4">Selected work</Eyebrow>
          <h1 id="work-page-heading" className="max-w-2xl mb-6">
            Work we&apos;re proud to put our name on
          </h1>
          <p className="text-[#5C6259] max-w-xl text-lg leading-relaxed">
            Every project starts with a problem worth solving. Here is how we engineered high-performance digital platforms that deliver results.
          </p>
        </Container>
      </section>

      {/* Work list */}
      <section aria-label="All case studies" className="section-py">
        <Container className="max-w-4xl">
          <div className="space-y-6" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }} >
            {caseStudies.map((study, i) => (
              <Reveal key={study.slug} delay={i * 80}>
                <Link href={`/work/${study.slug}`} className="no-underline group block">
                  <article
                  style={{padding:"24px"}}
                    className="flex flex-col md:flex-row gap-6 lg:gap-8 p-6 lg:p-8 rounded-xl border border-[rgba(46,58,47,0.1)] bg-[var(--bg-card)] hover:shadow-[var(--shadow-card)] transition-all duration-300"
                  >
                    {/* Color panel */}
                    <div
                      className="w-full md:w-56 h-40 rounded-lg shrink-0 flex items-center justify-center"
                      style={{ backgroundColor: study.color + '15', border: `1px solid ${study.color}25` }}
                    >
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center text-white font-black text-xl shadow-sm"
                        style={{ backgroundColor: study.color, fontFamily: 'var(--font-display)' }}
                      >
                        {study.title[0]}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-3 flex-1">
                      <p className="text-[#5C6259] text-xs font-semibold uppercase tracking-widest">
                        {study.year} · {study.category}
                      </p>
                      <h2
                        className="group-hover:text-[#C96F4F] transition-colors duration-200"
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '1.45rem',
                          fontWeight: 800,
                          letterSpacing: '-0.02em',
                          lineHeight: 1.25,
                        }}
                      >
                        {study.title}
                      </h2>
                      <p className="text-[#5C6259] font-medium text-sm">{study.hook}</p>
                      <p className="text-[#5C6259] text-sm leading-relaxed">{study.paragraph}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {study.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
                      </div>
                    </div>

                    <div className="hidden md:flex items-center shrink-0">
                      <div className="w-10 h-10 rounded-full border border-[rgba(46,58,47,0.15)] flex items-center justify-center group-hover:bg-[#C96F4F] group-hover:border-[#C96F4F] transition-all duration-200">
                        <ArrowUpRight size={16} className="text-[#2E3A2F] group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section
        className="section-py border-t border-[rgba(46,58,47,0.1)]"
        aria-labelledby="work-cta-heading"
      >
        <Container className="max-w-2xl flex flex-col items-center text-center">
          <h2 id="work-cta-heading" className="mb-4">
            Want to build something great?
          </h2>
          <p className="text-[#5C6259] mb-8">
            Whether it is a custom website, high-converting e-commerce platform, or
            dynamic video content, let&apos;s talk about your next project.
          </p>
          <Button href="/contact" variant="primary" size="lg" className="inline-flex items-center gap-2">
            Start a project <ArrowRight size={16} />
          </Button>
        </Container>
      </section>
    </div>
  );
}
