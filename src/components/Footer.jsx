import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const socials = [
  { Icon: GithubIcon,   href: 'https://github.com/Dhanya234',                  label: 'GitHub' },
  { Icon: LinkedinIcon, href: 'https://www.linkedin.com/in/dhanya-029496339',  label: 'LinkedIn' },
  { Icon: Mail,         href: 'mailto:dhanyamogaveera2006@gmail.com',           label: 'Email' },
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '36px 24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          <p style={{ fontSize: 22, fontWeight: 900, color: '#FF6B00', letterSpacing: '-0.5px' }}>DHANYA.</p>
          <p style={{ fontSize: 13, color: 'var(--text-dim)', textAlign: 'center' }}>
            Computer Science Engineering Student &nbsp;·&nbsp; Full-Stack Developer
          </p>
          <div style={{ display: 'flex', gap: 10 }}>
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="icon-btn"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
          <div style={{ width: '100%', borderTop: '1px solid var(--border)', paddingTop: 16, textAlign: 'center' }}>
            <p style={{ fontSize: 12, color: 'var(--text-faint)' }}>© 2026 Dhanya. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
