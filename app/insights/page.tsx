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
      <section className="page-hero " aria-labelledby="insights-heading">
        <Container className="max-w-5xl">
          <Eyebrow className="mb-4">Studio Insights</Eyebrow>
          <h1 id="insights-heading" className="max-w-3xl mb-6 text-4xl sm:text-5xl lg:text-6xl font-black text-[#1E2620] tracking-tight leading-[1.08]">
            Thinking from the studio
          </h1>
          <p className="text-[#5C6259] max-w-2xl text-lg sm:text-xl leading-relaxed font-sans">
            Website development, video editing, digital craft, and technical insights from the explr team.
          </p>
        </Container>
      </section>

      {/* Posts */}
      <section className="py-16 sm:py-24" aria-label="Articles">
        <Container className="max-w-5xl" style={{paddingBottom: "24px"}}>
          <div className="flex flex-col gap-5">
            {posts.map((post) => (
              <article
                key={post.slug}
                style={{ padding: '24px' }}
                className="group bg-white rounded-2xl border border-[rgba(46,58,47,0.12)] shadow-xs hover:shadow-md hover:border-[#C96F4F]/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6 p-8 sm:p-10">

                  {/* Content */}
                  <div className="flex flex-col gap-3 flex-1 min-w-0">
                    {/* Meta row */}
                    <div className="flex items-center gap-2.5 text-[#9BA899] text-xs font-mono font-semibold tracking-wider uppercase">
                      <time dateTime={post.date}>{post.date}</time>
                      <span aria-hidden="true" className="text-[#D9C9B2]">·</span>
                      <span>{post.readTime}</span>
                    </div>

                    {/* Title */}
                    <h2
                      className="text-xl sm:text-2xl font-black text-[#1E2620] group-hover:text-[#C96F4F] transition-colors duration-200 tracking-tight leading-snug"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-[#5C6259] text-sm leading-relaxed max-w-2xl font-sans">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {post.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:flex shrink-0 self-center pl-2">
                    <div className="w-10 h-10 rounded-full border border-[rgba(46,58,47,0.15)] flex items-center justify-center group-hover:bg-[#C96F4F] group-hover:border-[#C96F4F] group-hover:text-white transition-all duration-200 text-[#2E3A2F]">
                      <ArrowUpRight size={16} />
                    </div>
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
