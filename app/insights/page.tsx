import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Tag } from '@/components/ui/Tag';
import { CTA } from '@/components/sections/CTA';
import { ArrowUpRight } from 'lucide-react';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Website development, video editing, digital craft, and growth thinking from the explr team.',
};

const posts = [
  {
    slug: 'why-your-ecommerce-is-losing-customers',
    title: 'Why your digital storefront is losing customers at checkout',
    excerpt: 'A clunky checkout flow and slow mobile performance silently drain revenue. Here is what separates high-converting e-commerce web platforms from the rest.',
    tags: ['E-Commerce', 'Web Development', 'Conversion'],
    date: '12 Sep 2026',
    readTime: '5 min read',
  },
  {
    slug: 'the-lcp-obsession',
    title: 'The LCP obsession: why sub-second load times drive business',
    excerpt: 'Every 100ms of extra load time is a micro-moment of customer doubt. We engineer web architectures around instant LCP and 99+ Lighthouse scores — here is how.',
    tags: ['Performance', 'Next.js', 'Web Development'],
    date: '3 Sep 2026',
    readTime: '7 min read',
  },
  {
    slug: 'high-retention-video-editing',
    title: 'Pacing and hooks: the anatomy of high-retention video editing',
    excerpt: 'Scroll-stopping content is not just flashy transitions. It is rhythm, audio cueing, and strategic narrative pacing that keeps viewers glued to the screen.',
    tags: ['Video Editing', 'Motion Graphics', 'Short-Form'],
    date: '22 Aug 2026',
    readTime: '6 min read',
  },
];

export default function InsightsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-10 border-b border-[rgba(46,58,47,0.1)]" aria-labelledby="insights-heading">
        <Container className="max-w-4xl">
          <Eyebrow className="mb-4">Insights</Eyebrow>
          <h1 id="insights-heading" className="max-w-xl mb-4">
            Thinking from the studio
          </h1>
          <p className="text-[#5C6259] max-w-xl text-lg leading-relaxed">
            Website development, video editing, digital craft, and technical insights from the explr team.
          </p>
        </Container>
      </section>

      {/* Posts */}
      <section className="section-py" aria-label="Articles">
        <Container className="max-w-4xl">
          <div className="space-y-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group p-6 lg:p-8 rounded-xl border border-[rgba(46,58,47,0.1)] bg-[var(--bg-card)] hover:border-[rgba(46,58,47,0.22)] hover:shadow-[var(--shadow-card)] transition-all duration-300 flex flex-col md:flex-row md:items-start md:justify-between gap-6"
              >
                <div className="flex flex-col gap-3 flex-1">
                  <div className="flex items-center gap-3 text-[#5C6259] text-xs font-medium">
                    <time dateTime={post.date}>{post.date}</time>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2
                    className="group-hover:text-[#C96F4F] transition-colors duration-200 cursor-pointer"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.35rem',
                      lineHeight: 1.3,
                      fontWeight: 800,
                      letterSpacing: '-0.02em',
                      margin: 0,
                    }}
                  >
                    {post.title}
                  </h2>
                  <p className="text-[#5C6259] text-sm leading-relaxed max-w-2xl">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {post.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                  </div>
                </div>

                <div className="hidden md:flex items-center self-center shrink-0">
                  <div className="w-10 h-10 rounded-full border border-[rgba(46,58,47,0.15)] flex items-center justify-center group-hover:bg-[#C96F4F] group-hover:border-[#C96F4F] group-hover:text-white transition-all duration-200 text-[#2E3A2F]">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </div>
  );
}
