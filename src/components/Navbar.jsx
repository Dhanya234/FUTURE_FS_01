import { useState, useEffect } from 'react';
import { Menu, X, Download, Sun, Moon } from 'lucide-react';
import { navLinks } from '../data';
import { useTheme } from '../ThemeContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('Home');
  const { dark, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const el = document.getElementById(navLinks[i].toLowerCase());
        if (el && window.scrollY >= el.offsetTop - 130) {
          setActive(navLinks[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (section) => {
    document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
    setActive(section);
  };

  const navBg = scrolled
    ? dark ? 'rgba(10,10,10,0.94)' : 'rgba(248,248,248,0.94)'
    : 'transparent';

  const navBorder = scrolled
    ? dark ? '1px solid #161616' : '1px solid #e0e0e0'
    : 'none';

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: navBg,
      backdropFilter: scrolled ? 'blur(14px)' : 'none',
      borderBottom: navBorder,
      transition: 'background 0.3s ease, border-color 0.3s ease',
    }}>
      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>

          {/* Logo */}
          <button
            onClick={() => scrollTo('Home')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#FF6B00', fontSize: 20, fontWeight: 900, letterSpacing: '-0.5px', fontFamily: 'Inter, sans-serif' }}
          >
            DHANYA.
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex" style={{ alignItems: 'center', gap: 28 }}>
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontSize: 13, fontWeight: 500, fontFamily: 'Inter, sans-serif',
                  color: active === link ? '#FF6B00' : 'var(--text-muted)',
                  borderBottom: active === link ? '1px solid #FF6B00' : '1px solid transparent',
                  paddingBottom: 2,
                  transition: 'color 0.2s ease',
                }}
              >
                {link}
              </button>
            ))}

            {/* Theme toggle */}
            <button onClick={toggle} className="theme-toggle" aria-label="Toggle theme">
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <a href="/Resume-upto%20August.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '8px 18px', fontSize: 13 }}>
              <Download size={13} /> Resume
            </a>
          </div>

          {/* Mobile right side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }} className="md:hidden">
            <button onClick={toggle} className="theme-toggle" aria-label="Toggle theme">
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{ border: 'none', background: 'none', color: '#FF6B00', cursor: 'pointer', display: 'flex' }}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden"
          style={{
            background: dark ? 'rgba(8,8,8,0.98)' : 'rgba(248,248,248,0.98)',
            borderTop: `1px solid ${dark ? '#161616' : '#e0e0e0'}`,
            padding: '16px 24px 24px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
                  padding: '10px 0', fontSize: 14, fontWeight: 500, fontFamily: 'Inter, sans-serif',
                  color: active === link ? '#FF6B00' : 'var(--text-muted)',
                  borderBottom: `1px solid ${dark ? '#111' : '#eee'}`,
                }}
              >
                {link}
              </button>
            ))}
            <a href="/Resume-upto%20August.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 12, width: 'fit-content' }}>
              <Download size={13} /> Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
