import { ArrowRight } from 'lucide-react';

export function WhyExplr() {
  return (
    <section id="why" className="why-section section-py" aria-labelledby="why-heading">
      <div className="container">
        <div className="why-grid">
          {/* Left — editorial */}
          <div className="why-left">
            <span className="eyebrow why-eyebrow">Why explr</span>
            <h2 id="why-heading" className="why-h2">
              Most agencies sell you a deliverable. We obsess over the outcome.
            </h2>
            <div className="why-body">
              <p>
                There&apos;s a version of agency work where everything looks polished in the
                presentation, ships on time, and then… nothing changes. You got a
                website. You got a logo. But the business didn&apos;t move.
              </p>
              <p>
                We work differently. Every decision — colour, headline, page-load
                millisecond — is made in service of a specific outcome agreed before we
                open a design file.
              </p>
              <p>
                We&apos;re small on purpose. A focused team who know each other&apos;s craft deeply.
                No account managers. You talk directly to the person making the thing.
              </p>
            </div>
            <a href="/about" className="why-btn">
              Learn about us <ArrowRight size={14} />
            </a>
          </div>

          {/* Right — metrics */}
          <div className="why-right" style={{ position: 'relative' }}>
            <div className="why-card why-card-glass">
              {[
                { label: 'Average client retention',     value: '3.4 yrs', note: 'vs 1.2 yr industry avg' },
                { label: 'Projects delivered on brief',  value: '97%',     note: 'first presentation' },
                { label: 'Net Promoter Score',           value: '78',      note: 'world class threshold: 70' },
                { label: 'Post-launch support window',   value: '30 days', note: 'included on every project' },
              ].map((m) => (
                <div key={m.label} className="why-metric">
                  <div>
                    <p className="why-metric-label">{m.label}</p>
                    <p className="why-metric-note">{m.note}</p>
                  </div>
                  <span className="why-metric-val">{m.value}</span>
                </div>
              ))}
            </div>
            <div className="why-orb" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
