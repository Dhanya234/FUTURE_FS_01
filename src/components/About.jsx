import { motion } from 'framer-motion';
import { GraduationCap, Star, MapPin, Calendar } from 'lucide-react';
import { SectionHeading, fadeUp, fadeLeft, fadeRight } from './shared';

const cards = [
  { icon: GraduationCap, label: 'Degree',     value: 'B.E. — Computer Science' },
  { icon: Star,          label: 'CGPA',        value: '9.97 / 10.0' },
  { icon: MapPin,        label: 'Location',    value: 'Mangaluru, Karnataka' },
  { icon: Calendar,      label: 'Graduation',  value: '2028 (Expected)' },
];

export default function About() {
  return (
    <section id="about" className="section" style={{ background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 24px' }}>
        <motion.div {...fadeUp()}>
          <SectionHeading label="Who I Am" title="ABOUT ME" />
        </motion.div>

        <div className="about-grid grid lg:grid-cols-3" style={{ gap: 48, alignItems: 'start' }}>

          {/* Col 1 — Profile photo */}
          <motion.div {...fadeLeft(0.1)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ position: 'relative', marginBottom: 16 }}>
              {/* Orange conic ring */}
              <div style={{
                position: 'absolute', inset: -4, borderRadius: '50%',
                background: 'conic-gradient(#FF6B00 0deg, #FF8A00 120deg, transparent 180deg, #FF6B00 360deg)',
                zIndex: 0,
              }} />
              {/* Gap ring */}
              <div style={{
                position: 'absolute', inset: -2, borderRadius: '50%',
                background: 'var(--bg)', zIndex: 1,
              }} />
              {/* Photo */}
              <div style={{
                position: 'relative', zIndex: 2,
                width: 180, height: 180, borderRadius: '50%',
                overflow: 'hidden', border: '3px solid var(--border)',
              }}>
                <img
                  src="/WhatsApp Image 2026-08-19 at 9.17.46 PM.jpeg"
                  alt="Dhanya — Computer Science Engineering Student"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
              {/* Online dot */}
              <div style={{
                position: 'absolute', bottom: 8, right: 8, zIndex: 3,
                width: 18, height: 18, borderRadius: '50%',
                background: '#4ade80', border: '3px solid var(--bg)',
              }} />
            </div>

            <h3 style={{ fontSize: 17, fontWeight: 800, color: 'var(--text)', marginBottom: 4 }}>Dhanya</h3>
            <p style={{ fontSize: 11, color: 'var(--text-dim)', textAlign: 'center' }}>Mangaluru, Karnataka</p>
          </motion.div>

          {/* Col 2 — Bio + cards */}
          <motion.div {...fadeRight(0.15)} className="lg:col-span-2">
            <p style={{ fontSize: 15, lineHeight: 1.9, color: 'var(--text-muted)', marginBottom: 20 }}>
              I am a Computer Science Engineering student at{' '}
              <span style={{ color: '#FF6B00', fontWeight: 600 }}>Sahyadri College of Engineering and Management</span>{' '}
              with a CGPA of{' '}
              <span style={{ color: '#FF6B00', fontWeight: 600 }}>9.97 / 10.0</span> and hands-on
              experience in full-stack software development and AI-enabled systems.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.9, color: 'var(--text-muted)', marginBottom: 28 }}>
              I enjoy solving problems using{' '}
              <span style={{ color: '#FF8A00', fontWeight: 500 }}>Data Structures and Algorithms</span>{' '}
              and building practical applications with modern web technologies. My experience includes
              REST APIs, relational and NoSQL databases, authentication systems, and real-time applications.
            </p>

            {/* Info cards */}
            <div className="info-cards grid grid-cols-2" style={{ gap: 12 }}>
              {cards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.label}
                    {...fadeUp(0.25 + i * 0.07)}
                    className="card"
                    style={{ padding: '16px', cursor: 'default' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(255,107,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Icon size={14} style={{ color: '#FF6B00' }} />
                      </div>
                      <div>
                        <p style={{ fontSize: 10, fontWeight: 600, color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 2 }}>
                          {card.label}
                        </p>
                        <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-sub)', lineHeight: 1.3 }}>
                          {card.value}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
