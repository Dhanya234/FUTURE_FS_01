import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'var(--bg)',
        paddingTop: 68,
      }}
    >
      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '64px 24px', width: '100%' }}>
        <div className="grid lg:grid-cols-2" style={{ gap: 64, alignItems: 'center' }}>

          {/* ── Left: Text ── */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: 'var(--orange, #FF6B00)', marginBottom: 16, textTransform: 'uppercase' }}
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontSize: 'clamp(52px, 8vw, 80px)', fontWeight: 900, letterSpacing: '-2px', color: 'var(--text)', lineHeight: 1, marginBottom: 20 }}
            >
              DHANYA
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              style={{ fontSize: 16, fontWeight: 600, color: 'var(--orange-btn, #FF8A00)', marginBottom: 20, lineHeight: 1.5 }}
            >
              CS Engineering Student &amp; Full-Stack Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text-muted)', maxWidth: 460, marginBottom: 36 }}
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

          {/* ── Right: Illustration ── */}
          <motion.div
            initial={{ opacity: 0, x: 36 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:flex"
            style={{ justifyContent: 'center', alignItems: 'center' }}
          >
            <div style={{ position: 'relative', width: 420, height: 420 }}>

              {/* Outer glow ring */}
              <div style={{
                position: 'absolute', inset: 0, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255,107,0,0.06) 0%, transparent 70%)',
              }} />

              {/* Rotating dashed ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                style={{
                  position: 'absolute', inset: 20,
                  borderRadius: '50%',
                  border: '1px dashed rgba(255,107,0,0.2)',
                }}
              />

              {/* Static ring */}
              <div style={{
                position: 'absolute', inset: 50,
                borderRadius: '50%',
                border: '1px solid rgba(255,107,0,0.08)',
              }} />

              {/* Center SVG illustration */}
              <div style={{
                position: 'absolute', inset: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="260" height="260" viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Monitor body */}
                  <rect x="30" y="40" width="200" height="130" rx="10" fill="#111111" stroke="#1e1e1e" strokeWidth="2"/>
                  {/* Screen */}
                  <rect x="44" y="54" width="172" height="102" rx="6" fill="#0d0d0d"/>
                  {/* Screen glow */}
                  <rect x="44" y="54" width="172" height="102" rx="6" fill="url(#screenGlow)" opacity="0.4"/>
                  {/* Code lines on screen */}
                  <rect x="58" y="70" width="60" height="5" rx="2.5" fill="#FF6B00" opacity="0.9"/>
                  <rect x="58" y="82" width="100" height="4" rx="2" fill="#444"/>
                  <rect x="68" y="92" width="80" height="4" rx="2" fill="#333"/>
                  <rect x="68" y="102" width="90" height="4" rx="2" fill="#333"/>
                  <rect x="68" y="112" width="70" height="4" rx="2" fill="#FF8A00" opacity="0.7"/>
                  <rect x="58" y="122" width="50" height="4" rx="2" fill="#444"/>
                  <rect x="58" y="134" width="110" height="4" rx="2" fill="#333"/>
                  {/* Cursor blink */}
                  <rect x="172" y="134" width="6" height="4" rx="1" fill="#FF6B00" opacity="0.9"/>
                  {/* Monitor stand neck */}
                  <rect x="118" y="170" width="24" height="22" rx="2" fill="#111111" stroke="#1e1e1e" strokeWidth="1.5"/>
                  {/* Monitor stand base */}
                  <rect x="90" y="192" width="80" height="10" rx="5" fill="#111111" stroke="#1e1e1e" strokeWidth="1.5"/>
                  {/* Keyboard */}
                  <rect x="55" y="212" width="150" height="32" rx="6" fill="#111111" stroke="#1e1e1e" strokeWidth="1.5"/>
                  {/* Keyboard rows */}
                  {[0,1,2].map(row =>
                    [0,1,2,3,4,5,6,7,8,9].map(col => (
                      <rect
                        key={`${row}-${col}`}
                        x={62 + col * 14}
                        y={217 + row * 9}
                        width="10" height="6"
                        rx="1.5"
                        fill="#1a1a1a"
                        stroke="#222"
                        strokeWidth="0.5"
                      />
                    ))
                  )}
                  {/* Spacebar */}
                  <rect x="90" y="244" width="80" height="6" rx="2" fill="#1a1a1a" stroke="#222" strokeWidth="0.5"/>
                  {/* Decorative dots */}
                  <circle cx="210" cy="60" r="3" fill="#FF6B00" opacity="0.6"/>
                  <circle cx="222" cy="60" r="3" fill="#FF8A00" opacity="0.4"/>
                  <circle cx="234" cy="60" r="3" fill="#FF6B00" opacity="0.2"/>
                  <defs>
                    <radialGradient id="screenGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#FF6B00"/>
                      <stop offset="100%" stopColor="transparent"/>
                    </radialGradient>
                  </defs>
                </svg>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  position: 'absolute', top: 40, right: 10,
                  background: 'var(--bg-card)', border: '1px solid var(--border)',
                  borderRadius: 10, padding: '8px 14px',
                  fontSize: 12, fontWeight: 600, color: '#FF6B00',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                }}
              >
                ⚛️ React.js
              </motion.div>

              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  position: 'absolute', bottom: 60, left: 5,
                  background: 'var(--bg-card)', border: '1px solid var(--border)',
                  borderRadius: 10, padding: '8px 14px',
                  fontSize: 12, fontWeight: 600, color: '#4ade80',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                }}
              >
                🟢 Node.js
              </motion.div>

              <motion.div
                animate={{ y: [-4, 8, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  position: 'absolute', bottom: 80, right: 0,
                  background: 'var(--bg-card)', border: '1px solid var(--border)',
                  borderRadius: 10, padding: '8px 14px',
                  fontSize: 12, fontWeight: 600, color: '#60a5fa',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                }}
              >
                🍃 MongoDB
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  position: 'absolute', top: 80, left: 0,
                  background: 'var(--bg-card)', border: '1px solid rgba(255,107,0,0.3)',
                  borderRadius: 10, padding: '8px 14px',
                  fontSize: 11, fontWeight: 700, color: 'var(--text)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                }}
              >
                CGPA 9.97 ⭐
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
