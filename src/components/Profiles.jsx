import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon } from './Icons';
import { SectionHeading, fadeUp } from './shared';

const profiles = [
  {
    Icon: GithubIcon,
    platform: 'GitHub',
    username: 'Dhanya234',
    description: 'Explore my source code, projects, and development activity.',
    link: 'https://github.com/Dhanya234',
    cta: 'View GitHub Profile',
  },
  {
    Icon: LinkedinIcon,
    platform: 'LinkedIn',
    username: 'dhanya-029496339',
    description: 'Connect professionally and explore my academic background.',
    link: 'https://www.linkedin.com/in/dhanya-029496339',
    cta: 'Connect on LinkedIn',
  },
];

export default function Profiles() {
  return (
    <section className="section" style={{ background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 24px' }}>
        <motion.div {...fadeUp()}>
          <SectionHeading label="Find Me Online" title="PROFILES" />
        </motion.div>

        <div className="profiles-grid grid md:grid-cols-2" style={{ gap: 24 }}>
          {profiles.map((p, i) => {
            const { Icon } = p;
            return (
              <motion.div key={p.platform} {...fadeUp(i * 0.12)} className="card" style={{ padding: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 12, background: 'rgba(255,107,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={24} style={{ color: '#FF6B00' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: 17, fontWeight: 800, color: 'var(--text)', marginBottom: 3 }}>{p.platform}</h3>
                    <p style={{ fontSize: 12, color: '#FF6B00', fontWeight: 500, marginBottom: 12 }}>@{p.username}</p>
                    <p style={{ fontSize: 13, lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: 20 }}>{p.description}</p>
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '9px 20px', fontSize: 13 }}>
                      <Icon size={14} /> {p.cta}
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
