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
      <section className="pt-36 sm:pt-44 pb-14 sm:pb-20 border-b border-[rgba(46,58,47,0.08)]" aria-labelledby="insights-heading">
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
        <Container className="max-w-5xl">
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group p-8 sm:p-10 rounded-3xl border border-[rgba(46,58,47,0.1)] bg-white/80 backdrop-blur-xl hover:border-[#C96F4F]/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row md:items-start md:justify-between gap-6"
              >
                <div className="flex flex-col gap-3.5 flex-1">
                  <div className="flex items-center gap-3 text-[#5C6259] text-xs font-mono font-semibold tracking-wider uppercase">
                    <time dateTime={post.date}>{post.date}</time>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2
                    className="text-2xl sm:text-3xl font-black text-[#1E2620] group-hover:text-[#C96F4F] transition-colors duration-200 cursor-pointer tracking-tight leading-snug"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {post.title}
                  </h2>
                  <p className="text-[#5C6259] text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2.5 mt-2">
                    {post.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                  </div>
                </div>

                <div className="hidden md:flex items-center self-center shrink-0">
                  <div className="w-12 h-12 rounded-full border border-[rgba(46,58,47,0.15)] flex items-center justify-center group-hover:bg-[#C96F4F] group-hover:border-[#C96F4F] group-hover:text-white transition-all duration-200 text-[#2E3A2F]">
                    <ArrowUpRight size={20} />
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
