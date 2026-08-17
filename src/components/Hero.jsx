import { motion } from 'framer-motion';
import { Download, ArrowRight, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const codeLines = [
  { indent: 0, text: 'const developer = {',        color: '#cdd6f4' },
  { indent: 1, text: 'name:      "Dhanya",',        color: '#cba6f7' },
  { indent: 1, text: 'role:      "Full-Stack Dev",', color: '#cba6f7' },
  { indent: 1, text: 'stack:     ["React", "Node", "MongoDB"],', color: '#a6e3a1' },
  { indent: 1, text: 'cgpa:      9.97,',            color: '#fab387' },
  { indent: 1, text: 'available: true,',            color: '#a6e3a1' },
  { indent: 0, text: '};',                          color: '#cdd6f4' },
  { indent: 0, text: '',                            color: '' },
  { indent: 0, text: 'developer.build();',          color: '#FF6B00' },
];

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: '#0A0A0A',
        paddingTop: 68,
      }}
    >
      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '64px 24px', width: '100%' }}>
        <div className="grid lg:grid-cols-2" style={{ gap: 64, alignItems: 'center' }}>

          {/* ── Left: Text ── */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: '#FF6B00', marginBottom: 16, textTransform: 'uppercase' }}
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontSize: 'clamp(52px, 8vw, 80px)', fontWeight: 900, letterSpacing: '-2px', color: '#F5F5F5', lineHeight: 1, marginBottom: 20 }}
            >
              DHANYA
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              style={{ fontSize: 16, fontWeight: 600, color: '#FF8A00', marginBottom: 20, lineHeight: 1.5 }}
            >
              CS Engineering Student &amp; Full-Stack Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              style={{ fontSize: 15, lineHeight: 1.8, color: '#777', maxWidth: 460, marginBottom: 36 }}
            >
              I build modern, scalable web applications and AI-enabled systems
              using React, Node.js, databases, and modern engineering practices.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 32 }}
            >
              <button
                className="btn-primary"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Projects <ArrowRight size={15} />
              </button>
              <a href="/Resume-upto%20August.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline">
                <Download size={15} /> Download Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.55 }}
              style={{ display: 'flex', gap: 10 }}
            >
              <a href="https://github.com/Dhanya234" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="icon-btn">
                <GithubIcon size={18} />
              </a>
              <a href="https://www.linkedin.com/in/dhanya-029496339" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="icon-btn">
                <LinkedinIcon size={18} />
              </a>
            </motion.div>
          </div>

          {/* ── Right: Code window ── */}
          <motion.div
            initial={{ opacity: 0, x: 36 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:block"
          >
            {/* Editor window */}
            <div style={{ background: '#0d0d0d', border: '1px solid #1e1e1e', borderRadius: 14, overflow: 'hidden', boxShadow: '0 0 60px rgba(255,107,0,0.07)' }}>
              {/* Title bar */}
              <div style={{ background: '#141414', borderBottom: '1px solid #1e1e1e', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }} />
                <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#febc2e', display: 'inline-block' }} />
                <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840', display: 'inline-block' }} />
                <div style={{ marginLeft: 12, display: 'flex', alignItems: 'center', gap: 6, color: '#444', fontSize: 12 }}>
                  <Terminal size={11} />
                  <span>portfolio.js</span>
                </div>
              </div>

              {/* Code body */}
              <div style={{ padding: '24px 20px', fontFamily: "'Fira Code', 'Courier New', monospace", fontSize: 13, lineHeight: 2 }}>
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.07 }}
                    style={{ display: 'flex', paddingLeft: line.indent * 20 }}
                  >
                    <span style={{ color: '#2a2a2a', minWidth: 28, userSelect: 'none', fontSize: 11, paddingTop: 1 }}>
                      {i + 1}
                    </span>
                    <span style={{ color: line.color }}>{line.text || '\u00A0'}</span>
                  </motion.div>
                ))}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1.1, repeat: Infinity }}
                  style={{ display: 'inline-block', width: 8, height: 16, background: '#FF6B00', marginLeft: 28, verticalAlign: 'middle', borderRadius: 1 }}
                />
              </div>
            </div>

            {/* Status pill */}
            <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 10, padding: '10px 16px', background: '#0d0d0d', border: '1px solid #161616', borderRadius: 10, fontSize: 12, color: '#555' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80', display: 'inline-block', flexShrink: 0 }} />
              <span>Open to internships &amp; opportunities</span>
              <span style={{ marginLeft: 'auto', color: '#FF6B00', fontWeight: 600 }}>CGPA 9.97 / 10</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
