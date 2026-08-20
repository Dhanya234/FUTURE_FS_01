import { motion } from 'framer-motion';
import { skillCategories } from '../data';
import { SectionHeading, fadeUp } from './shared';

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 24px' }}>
        <motion.div {...fadeUp()}>
          <SectionHeading label="What I Know" title="TECHNICAL SKILLS" />
        </motion.div>

        <div className="skills-grid grid md:grid-cols-2 lg:grid-cols-3" style={{ gap: 20 }}>
          {skillCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div key={cat.title} {...fadeUp(i * 0.08)} className="card" style={{ padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(255,107,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={16} style={{ color: '#FF6B00' }} />
                  </div>
                  <h3 style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-sub)' }}>{cat.title}</h3>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {cat.skills.map((skill) => (
                    <span key={skill} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
