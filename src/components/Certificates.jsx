import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { certificates } from '../data';
import { SectionHeading, fadeUp } from './shared';

export default function Certificates() {
  return (
    <section id="certificates" className="section">
      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 24px' }}>
        <motion.div {...fadeUp()}>
          <SectionHeading label="Professional Learning" title="CERTIFICATES" />
        </motion.div>

        <div className="certificates-grid grid sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 20 }}>
          {certificates.map((certificate, index) => (
            <motion.article
              key={certificate.file}
              {...fadeUp(0.1 + index * 0.08)}
              className="card card-lift"
              style={{ padding: 24, display: 'flex', flexDirection: 'column', minHeight: 220 }}
            >
              <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(255,107,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 22 }}>
                <Award size={21} style={{ color: '#FF6B00' }} />
              </div>
              <p style={{ fontSize: 12, fontWeight: 700, color: '#FF6B00', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>
                {certificate.issuer}
              </p>
              <h3 style={{ fontSize: 16, fontWeight: 800, color: 'var(--text)', lineHeight: 1.35, marginBottom: 20 }}>
                {certificate.title}
              </h3>
              <a
                href={encodeURI(certificate.file)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                aria-label={`View ${certificate.title}`}
                style={{ marginTop: 'auto', width: 'fit-content' }}
              >
                View certificate <ExternalLink size={14} />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
