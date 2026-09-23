import { team } from '@/content/team';

export function Team() {
  return (
    <section id="team" className="section-py" style={{ background: '#F8F6EE' }} aria-labelledby="team-heading">
      <div className="container">
        <span className="eyebrow">The team</span>
        <h2 id="team-heading">
          Small team.<br />Big accountability.
        </h2>

        <div className="team-grid">
          {team.map((member) => {
            const isDark = member.accent === '#D9C9B2';
            return (
              <div key={member.name} className="team-card">
                <div
                  className="team-avatar"
                  style={{
                    background: member.accent + '22',
                    border: `2px solid ${member.accent}44`,
                    color: isDark ? '#2E3A2F' : member.accent,
                  }}
                >
                  {member.initials}
                </div>
                <div>
                  <p className="team-name">{member.name}</p>
                  <p className="team-role">{member.role}</p>
                </div>
                <p className="team-bio">{member.bio}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
