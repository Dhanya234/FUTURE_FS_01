import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data';
import { SectionHeading, fadeUp } from './shared';

function ProjectCard({ project, index }) {
  return (
    <motion.article
      {...fadeUp(index * 0.12)}
      className="card card-lift card-stripe"
      style={{ overflow: 'hidden' }}
    >
      <div style={{ padding: '28px 28px 32px' }}>

        {/* Number + badge */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 20 }}>
          <span style={{ fontSize: 48, fontWeight: 900, color: 'rgba(255,107,0,0.12)', lineHeight: 1, userSelect: 'none' }}>
            {project.number}
          </span>
          <span style={{ fontSize: 11, fontWeight: 600, padding: '4px 12px', borderRadius: 20, background: 'rgba(255,107,0,0.08)', color: '#FF8A00', border: '1px solid rgba(255,107,0,0.18)', whiteSpace: 'nowrap' }}>
            {project.type}
          </span>
        </div>

        {/* Title */}
        <h3 style={{ fontSize: 22, fontWeight: 900, color: '#F5F5F5', marginBottom: 4 }}>
          {project.title}
        </h3>
        <p style={{ fontSize: 13, fontWeight: 600, color: '#FF6B00', marginBottom: 14 }}>
          {project.subtitle}
        </p>

        {/* Description */}
        <p style={{ fontSize: 13, lineHeight: 1.8, color: '#777', marginBottom: 20 }}>
          {project.description}
        </p>

        {/* Features */}
        <div className="grid grid-cols-2" style={{ gap: '6px 12px', marginBottom: 20 }}>
          {project.features.slice(0, 6).map((f) => (
            <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              <CheckCircle2 size={11} style={{ color: '#FF6B00', flexShrink: 0 }} />
              <span style={{ fontSize: 12, color: '#666' }}>{f}</span>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
          {project.highlights.map((h) => (
            <span key={h} style={{ fontSize: 11, fontWeight: 600, padding: '5px 12px', borderRadius: 6, background: 'rgba(255,107,0,0.07)', color: '#FF8A00', border: '1px solid rgba(255,107,0,0.14)' }}>
              {h}
            </span>
          ))}
        </div>

        {/* Tech stack */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 24 }}>
          {project.tech.map((t) => (
            <span key={t} className="tech-badge">{t}</span>
          ))}
        </div>

        {/* Action buttons */}
        <div style={{ display: 'flex', gap: 10 }}>
          {project.github ? (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <GithubIcon size={14} /> GitHub
            </a>
          ) : (
            <button disabled className="btn-ghost" title="Repository coming soon">
              <GithubIcon size={14} /> GitHub
            </button>
          )}
          {project.demo ? (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '8px 16px', fontSize: 13 }}>
              <ExternalLink size={14} /> Live Demo
            </a>
          ) : (
            <button disabled className="btn-ghost" title="Demo coming soon">
              <ExternalLink size={14} /> Live Demo
            </button>
          )}
        </div>

      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section" style={{ background: '#0A0A0A' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 24px' }}>
        <motion.div {...fadeUp()}>
          <SectionHeading label="What I've Built" title="FEATURED PROJECTS" />
        </motion.div>

        <div className="grid lg:grid-cols-2" style={{ gap: 24 }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
