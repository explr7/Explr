import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { caseStudies } from '@/content/work';
import { Container } from '@/components/layout/Container';
import { Tag } from '@/components/ui/Tag';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';

export const dynamic = 'force-static';

export async function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.hook,
  };
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  const nextStudy = caseStudies[(caseStudies.indexOf(study) + 1) % caseStudies.length];

  return (
    <article className="min-h-screen">
      {/* Hero */}
      <section
        className="section-py pt-32"
        aria-labelledby="case-heading"
        style={{
          background: `linear-gradient(135deg, ${study.color}0D 0%, var(--explr-bg) 60%)`,
          borderBottom: '1px solid rgba(46,58,47,0.1)',
        }}
      >
        <Container className="max-w-4xl">
          <Button href="/work" variant="ghost" className="mb-8 pl-0 text-[#5C6259] hover:text-[#2E3A2F]">
            <ArrowLeft size={14} /> All work
          </Button>
          <p className="text-[#5C6259] text-xs font-semibold uppercase tracking-widest mb-4">
            {study.year} · {study.category}
          </p>
          <h1 id="case-heading" className="mb-4">{study.title}</h1>
          <p
            className="text-[#5C6259] mb-8 max-w-2xl"
            style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.3rem)', lineHeight: 1.6 }}
          >
            {study.hook}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {study.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
            {study.url && (
              <a
                href={study.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-white transition-opacity hover:opacity-90 ml-auto"
                style={{ backgroundColor: study.color, fontFamily: 'var(--font-display)' }}
              >
                Visit Live Site <ArrowUpRight size={13} />
              </a>
            )}
          </div>
        </Container>
      </section>

      {/* Color panel */}
      <div
        className="w-full h-64 flex items-center justify-center"
        style={{ backgroundColor: study.color + '12', border: 'none' }}
        aria-hidden="true"
      >
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center text-white font-black text-3xl shadow-md"
          style={{ backgroundColor: study.color, fontFamily: 'var(--font-display)' }}
        >
          {study.title[0]}
        </div>
      </div>

      {/* Body */}
      <section aria-label="Case study detail" className="section-py">
        <Container className="max-w-3xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="mb-0">The overview</h2>
            {study.url && (
              <a
                href={study.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A85434] hover:underline font-semibold text-sm inline-flex items-center gap-1"
              >
                {study.url.replace(/^https?:\/\//, '').replace(/\/$/, '')} <ArrowUpRight size={14} />
              </a>
            )}
          </div>
          <p className="text-[#5C6259] leading-relaxed text-lg">{study.paragraph}</p>

          <hr className="divider my-16" />

          {/* Key metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {study.metrics.map((m) => (
              <div key={m.label} className="p-6 rounded-xl bg-[rgba(46,58,47,0.03)] border border-[rgba(46,58,47,0.08)]">
                <p className="text-[#5C6259] text-xs uppercase tracking-widest mb-2">{m.label}</p>
                <p className="font-black text-[#2E3A2F] text-2xl" style={{ fontFamily: 'var(--font-display)' }}>
                  {m.value}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Next project */}
      <section
        className="section-py border-t border-[rgba(46,58,47,0.1)]"
        aria-label="Next case study"
      >
        <Container className="max-w-4xl">
          <p className="eyebrow mb-4">Next project</p>
          <a
            href={`/work/${nextStudy.slug}`}
            className="group flex items-center justify-between gap-4 no-underline"
          >
            <h2
              className="text-[2rem] group-hover:text-[#C96F4F] transition-colors duration-200"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.03em' }}
            >
              {nextStudy.title}
            </h2>
            <div className="w-12 h-12 rounded-full border border-[rgba(46,58,47,0.2)] flex items-center justify-center group-hover:bg-[#C96F4F] group-hover:border-[#C96F4F] transition-all duration-300 shrink-0">
              <ArrowRight size={18} className="text-[#2E3A2F] group-hover:text-white transition-colors" />
            </div>
          </a>
        </Container>
      </section>
    </article>
  );
}
