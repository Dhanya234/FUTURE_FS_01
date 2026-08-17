import { motion } from 'framer-motion';
import { GraduationCap, Star, MapPin, Calendar } from 'lucide-react';
import { SectionHeading, fadeUp, fadeLeft, fadeRight } from './shared';

const cards = [
  { icon: GraduationCap, label: 'Degree', value: 'B.E. — Computer Science' },
  { icon: Star,          label: 'CGPA',   value: '9.97 / 10.0' },
  { icon: MapPin,        label: 'Location', value: 'Mangaluru, Karnataka' },
  { icon: Calendar,      label: 'Graduation', value: '2028 (Expected)' },
];

export default function About() {
  return (
    <section id="about" className="section" style={{ background: '#0A0A0A' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 24px' }}>
        <motion.div {...fadeUp()}>
          <SectionHeading label="Who I Am" title="ABOUT ME" />
        </motion.div>

        <div className="grid lg:grid-cols-2" style={{ gap: 64, alignItems: 'start' }}>

          {/* Left — Bio */}
          <motion.div {...fadeLeft(0.15)}>
            <p style={{ fontSize: 15, lineHeight: 1.9, color: '#888', marginBottom: 20 }}>
              I am a Computer Science Engineering student at{' '}
              <span style={{ color: '#FF6B00', fontWeight: 600 }}>Sahyadri College of Engineering and Management</span>{' '}
              with a CGPA of{' '}
              <span style={{ color: '#FF6B00', fontWeight: 600 }}>9.97 / 10.0</span> and hands-on
              experience in full-stack software development and AI-enabled systems.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.9, color: '#888' }}>
              I enjoy solving problems using{' '}
              <span style={{ color: '#FF8A00', fontWeight: 500 }}>Data Structures and Algorithms</span>{' '}
              and building practical applications with modern web technologies. My experience includes
              REST APIs, relational and NoSQL databases, authentication systems, and real-time applications.
            </p>
          </motion.div>

          {/* Right — Info cards */}
          <motion.div {...fadeRight(0.2)}>
            <div className="grid grid-cols-2" style={{ gap: 14 }}>
              {cards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.label}
                    {...fadeUp(0.25 + i * 0.08)}
                    className="card"
                    style={{ padding: '20px 18px', cursor: 'default' }}
                  >
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(255,107,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                      <Icon size={16} style={{ color: '#FF6B00' }} />
                    </div>
                    <p style={{ fontSize: 11, fontWeight: 600, color: '#444', marginBottom: 5, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      {card.label}
                    </p>
                    <p style={{ fontSize: 13, fontWeight: 600, color: '#E0E0E0', lineHeight: 1.4 }}>
                      {card.value}
                    </p>
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
