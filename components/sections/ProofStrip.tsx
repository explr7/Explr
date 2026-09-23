const clients = ['Roots Collective','Canopy Capital','Mesa Studio','Verdant Foods','Northlight Films','Terrace Club'];

export function ProofStrip() {
  return (
    <section className="proof-strip" aria-label="Trusted by">
      <div className="container">
        <div className="proof-inner">
          <span className="proof-label">Trusted by</span>
          <div className="proof-scroll">
            <div className="proof-clients">
              {clients.map((c) => (
                <span key={c} className="proof-client">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
