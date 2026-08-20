import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, MapPin, Calendar } from 'lucide-react';
import { coursework } from '../data';
import { SectionHeading, fadeUp, fadeLeft, fadeRight } from './shared';

export default function Education() {
  return (
    <section id="education" className="section section-alt">
      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 24px' }}>
        <motion.div {...fadeUp()}>
          <SectionHeading label="Academic Background" title="EDUCATION" />
        </motion.div>

        <div className="edu-grid grid lg:grid-cols-2" style={{ gap: 24 }}>

          {/* Degree card */}
          <motion.div {...fadeLeft(0.15)} className="card card-stripe" style={{ overflow: 'hidden' }}>
            <div style={{ padding: '28px' }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(255,107,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <GraduationCap size={20} style={{ color: '#FF6B00' }} />
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 800, color: 'var(--text)', marginBottom: 6, lineHeight: 1.3 }}>
                Sahyadri College of Engineering and Management
              </h3>
              <p style={{ fontSize: 13, fontWeight: 600, color: '#FF6B00', marginBottom: 20 }}>
                Bachelor of Engineering — Computer Science Engineering
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--text-muted)' }}>
                  <MapPin size={13} style={{ color: '#FF6B00', flexShrink: 0 }} />
                  Mangaluru, Karnataka
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--text-muted)' }}>
                  <Calendar size={13} style={{ color: '#FF6B00', flexShrink: 0 }} />
                  Expected Graduation: 2028
                </div>
              </div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 14, padding: '14px 20px', background: 'rgba(255,107,0,0.07)', border: '1px solid rgba(255,107,0,0.18)', borderRadius: 10 }}>
                <span style={{ fontSize: 28, fontWeight: 900, color: '#FF6B00', lineHeight: 1 }}>9.97</span>
                <div>
                  <p style={{ fontSize: 10, fontWeight: 700, color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>CGPA</p>
                  <p style={{ fontSize: 12, fontWeight: 600, color: '#FF8A00' }}>out of 10.0</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Coursework card */}
          <motion.div {...fadeRight(0.2)} className="card" style={{ padding: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 22 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(255,107,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <BookOpen size={17} style={{ color: '#FF6B00' }} />
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-sub)' }}>Relevant Coursework</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {coursework.map((course, i) => (
                <motion.div key={course} {...fadeUp(0.3 + i * 0.06)} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#FF6B00', flexShrink: 0 }} />
                  <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{course}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
