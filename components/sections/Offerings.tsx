import { offerings } from '@/content/offerings';

const visualBg   = ['#E8EFE8', '#F5EBE6'];
const iconColors = ['#2E3A2F', '#C96F4F'];

const icons: Record<string, React.ReactNode> = {
  Globe: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  Film: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/>
    </svg>
  ),
};

export function Offerings() {
  return (
    <section id="services" className="section-py" style={{ background: '#F8F6EE' }} aria-labelledby="services-heading">
      <div className="container">
        {/* Header */}
        <div className="offerings-header">
          <span className="eyebrow">What we do</span>
          <h2 id="services-heading" style={{ maxWidth: '24ch' }}>
            Two core ways we help ambitious brands grow
          </h2>
        </div>

        {/* Rows */}
        {offerings.map((o, i) => (
          <div key={o.id} className={`offering-row${i % 2 === 1 ? ' reverse' : ''}`}>
            {/* Visual panel */}
            <div className="offering-visual" style={{ background: visualBg[i] }}>
              {i === 0 ? (
                /* Website Development visual */
                <div style={{ position: 'absolute', inset: 0, padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.75)', borderRadius: '20px', padding: '0.35rem 0.75rem' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FF5F56', display: 'inline-block' }} />
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FFBD2E', display: 'inline-block' }} />
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#27C93F', display: 'inline-block' }} />
                      <span style={{ marginLeft: '6px', fontSize: '0.65rem', fontFamily: 'var(--font-display)', fontWeight: 700, color: '#2E3A2F', opacity: 0.75 }}>explr.co</span>
                    </div>
                    <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: iconColors[0], color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {icons[o.icon]}
                    </div>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.65)', borderRadius: '12px', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', border: '1px solid rgba(46,58,47,0.06)' }}>
                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                      <div style={{ height: '10px', borderRadius: '99px', background: '#6B7F5B', width: '35%' }} />
                      <div style={{ height: '8px', borderRadius: '99px', background: 'rgba(46,58,47,0.15)', width: '20%' }} />
                    </div>
                    <div style={{ height: '8px', borderRadius: '99px', background: 'rgba(46,58,47,0.1)', width: '85%' }} />
                    <div style={{ height: '8px', borderRadius: '99px', background: 'rgba(46,58,47,0.07)', width: '60%' }} />
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', marginTop: '0.4rem' }}>
                      {[1, 2, 3].map((n) => (
                        <div key={n} style={{ height: '32px', borderRadius: '6px', background: 'rgba(107,127,91,0.12)', border: '1px solid rgba(107,127,91,0.18)' }} />
                      ))}
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2E3A2F', opacity: 0.6 }}>99+ LIGHTHOUSE · RESPONSIVE</span>
                    <span style={{ fontSize: '0.65rem', fontWeight: 800, color: '#6B7F5B' }}>01 / 02</span>
                  </div>
                </div>
              ) : (
                /* Video Editing visual */
                <div style={{ position: 'absolute', inset: 0, padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.75)', borderRadius: '20px', padding: '0.35rem 0.75rem' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#C96F4F', display: 'inline-block' }} />
                      <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-display)', fontWeight: 800, color: '#C96F4F', letterSpacing: '0.08em' }}>REC 4K · 60 FPS</span>
                    </div>
                    <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: iconColors[1], color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {icons[o.icon]}
                    </div>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.65)', borderRadius: '12px', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', border: '1px solid rgba(46,58,47,0.06)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.62rem', fontWeight: 700, color: 'rgba(46,58,47,0.6)' }}>
                      <span>00:14:22</span>
                      <span>9:16 REELS / 16:9 YT</span>
                    </div>
                    <div style={{ display: 'flex', gap: '4px' }}>
                      <div style={{ height: '14px', borderRadius: '4px', background: '#C96F4F', width: '45%' }} />
                      <div style={{ height: '14px', borderRadius: '4px', background: '#A85434', width: '30%' }} />
                      <div style={{ height: '14px', borderRadius: '4px', background: '#D9C9B2', width: '25%' }} />
                    </div>
                    <div style={{ display: 'flex', gap: '4px' }}>
                      <div style={{ height: '10px', borderRadius: '4px', background: 'rgba(46,58,47,0.18)', width: '35%' }} />
                      <div style={{ height: '10px', borderRadius: '4px', background: 'rgba(46,58,47,0.25)', width: '40%' }} />
                      <div style={{ height: '10px', borderRadius: '4px', background: 'rgba(46,58,47,0.14)', width: '25%' }} />
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2E3A2F', opacity: 0.6 }}>MOTION &amp; SOUND SYNC</span>
                    <span style={{ fontSize: '0.65rem', fontWeight: 800, color: '#C96F4F' }}>02 / 02</span>
                  </div>
                </div>
              )}
            </div>

            {/* Text */}
            <div className="offering-content">
              <div className="offering-num-row">
                <span className="offering-num">0{i + 1}</span>
                <span className="offering-num-dash" />
              </div>
              <h3 className="offering-title">{o.title}</h3>
              <p className="offering-hook">{o.summary}</p>
              <p className="offering-body">{o.detail}</p>

              {/* Sub-services pills */}
              <div className="offering-tags">
                {o.items.map((item) => (
                  <span key={item} className="offering-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
