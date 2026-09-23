import Link from 'next/link';
import { caseStudies } from '@/content/work';
import { Tag } from '@/components/ui/Tag';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const cardBg = ['#FFF4EC', '#EEF2FF'];

export function WorkGrid() {
  return (
    <section id="work" className="section-py" style={{ background: '#F8F6EE' }} aria-labelledby="work-heading">
      <div className="container">
        {/* Header */}
        <div className="work-header">
          <div>
            <span className="eyebrow">Selected work</span>
            <h2 id="work-heading">Results worth talking about</h2>
          </div>
          <a href="/work" className="btn btn-ghost btn-md">
            All case studies <ArrowRight size={14} />
          </a>
        </div>

        {/* Cards */}
        <div className="work-list">
          {caseStudies.map((study, i) => (
            <Link key={study.slug} href={`/work/${study.slug}`} className="work-card" aria-label={`Case study: ${study.title}`}>
              {/* Color panel */}
              <div className="work-card-color" style={{ background: cardBg[i % cardBg.length] }}>
                <div>
                  <div className="work-card-logo" style={{ background: study.color }}>
                    {study.title[0]}
                  </div>
                  <p className="work-card-year">{study.year}</p>
                  <p className="work-card-cat">{study.category}</p>
                </div>
              </div>

              {/* Body */}
              <div className="work-card-body">
                <div>
                  <h3 className="work-card-title">{study.title}</h3>
                  <p className="work-card-hook">{study.hook}</p>
                  <p className="work-card-para">{study.paragraph}</p>
                </div>
                <div className="work-card-tags">
                  {study.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                </div>
              </div>

              {/* Arrow */}
              <div className="work-card-arrow">
                <div className="work-arrow-btn">
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
