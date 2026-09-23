import { processSteps } from '@/content/process';

export function Process() {
  return (
    <section id="process" className="process-section section-py" aria-labelledby="process-heading">
      <div className="container">
        <span className="eyebrow">How we work</span>
        <h2 id="process-heading" style={{ maxWidth: '28ch' }}>
          A process as clear as the outcome
        </h2>

        <div className="process-grid">
          {processSteps.map((step, i) => (
            <div key={step.number} className="process-step">
              <div className="process-step-top">
                <div className="process-step-num">{i + 1}</div>
                {i < processSteps.length - 1 && (
                  <div className="process-step-line" aria-hidden="true" />
                )}
              </div>
              <p className="process-step-label">{step.number}</p>
              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-body">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
