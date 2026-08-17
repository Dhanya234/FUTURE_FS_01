import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { SectionHeading, fadeUp, fadeLeft, fadeRight } from './shared';

const contactInfo = [
  { icon: Mail,   label: 'Email',    value: 'dhanyamogaveera2006@gmail.com', href: 'mailto:dhanyamogaveera2006@gmail.com' },
  { icon: Phone,  label: 'Phone',    value: '+91 6362462148',                href: 'tel:6362462148' },
  { icon: MapPin, label: 'Location', value: 'Mangaluru, Karnataka, India',   href: null },
];

const EMPTY = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const ref = useRef(null);
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState(null);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/xyegnerw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) { setStatus('success'); setForm(EMPTY); }
      else setStatus('error');
    } catch { setStatus('error'); }
  };

  return (
    <section id="contact" className="section section-alt" ref={ref}>
      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 24px' }}>
        <motion.div {...fadeUp()}>
          <SectionHeading label="Get In Touch" title="LET'S BUILD SOMETHING TOGETHER" />
        </motion.div>

        <div className="grid lg:grid-cols-5" style={{ gap: 40, alignItems: 'start' }}>

          {/* ── Left: contact info ── */}
          <motion.div {...fadeLeft(0.15)} className="lg:col-span-2" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <p style={{ fontSize: 14, lineHeight: 1.8, color: '#666', marginBottom: 8 }}>
              Have a project idea, internship opportunity, or just want to connect?
              Feel free to reach out — I'll respond promptly.
            </p>

            {contactInfo.map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <div className="card" style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 18px' }}>
                  <div style={{ width: 38, height: 38, borderRadius: 9, background: 'rgba(255,107,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={16} style={{ color: '#FF6B00' }} />
                  </div>
                  <div>
                    <p style={{ fontSize: 10, fontWeight: 700, color: '#444', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 3 }}>{label}</p>
                    <p style={{ fontSize: 13, fontWeight: 500, color: '#D0D0D0' }}>{value}</p>
                  </div>
                </div>
              );
              return href
                ? <a key={label} href={href} style={{ textDecoration: 'none' }}>{inner}</a>
                : <div key={label}>{inner}</div>;
            })}

            <a href="mailto:dhanyamogaveera2006@gmail.com" className="btn-primary" style={{ marginTop: 6, justifyContent: 'center' }}>
              <Mail size={15} /> Send Direct Email
            </a>
          </motion.div>

          {/* ── Right: form ── */}
          <motion.div {...fadeRight(0.2)} className="lg:col-span-3">
            <form onSubmit={onSubmit} className="card card-stripe" style={{ overflow: 'hidden' }}>
              <div style={{ padding: '32px' }}>

                <div className="grid sm:grid-cols-2" style={{ gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 700, color: '#555', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>
                      Name <span style={{ color: '#FF6B00' }}>*</span>
                    </label>
                    <input className="form-input" type="text" name="name" value={form.name} onChange={onChange} required placeholder="Your full name" />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 700, color: '#555', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>
                      Email <span style={{ color: '#FF6B00' }}>*</span>
                    </label>
                    <input className="form-input" type="email" name="email" value={form.email} onChange={onChange} required placeholder="your@email.com" />
                  </div>
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: 'block', fontSize: 11, fontWeight: 700, color: '#555', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>
                    Subject <span style={{ color: '#FF6B00' }}>*</span>
                  </label>
                  <input className="form-input" type="text" name="subject" value={form.subject} onChange={onChange} required placeholder="Internship / Project collaboration / Other" />
                </div>

                <div style={{ marginBottom: 24 }}>
                  <label style={{ display: 'block', fontSize: 11, fontWeight: 700, color: '#555', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>
                    Message <span style={{ color: '#FF6B00' }}>*</span>
                  </label>
                  <textarea
                    className="form-input"
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    style={{ resize: 'vertical', minHeight: 120 }}
                  />
                </div>

                {status === 'success' && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 16px', borderRadius: 8, background: 'rgba(74,222,128,0.07)', border: '1px solid rgba(74,222,128,0.18)', color: '#4ade80', fontSize: 13, fontWeight: 500, marginBottom: 16 }}>
                    <CheckCircle2 size={15} /> Message sent! I'll get back to you soon.
                  </div>
                )}
                {status === 'error' && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 16px', borderRadius: 8, background: 'rgba(255,107,0,0.07)', border: '1px solid rgba(255,107,0,0.18)', color: '#FF8A00', fontSize: 13, fontWeight: 500, marginBottom: 16 }}>
                    <AlertCircle size={15} /> Something went wrong. Please email me directly.
                  </div>
                )}

                <button type="submit" disabled={status === 'sending'} className="btn-primary" style={{ opacity: status === 'sending' ? 0.6 : 1, cursor: status === 'sending' ? 'not-allowed' : 'pointer' }}>
                  <Send size={14} />
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>

              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
