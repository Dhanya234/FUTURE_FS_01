export function SectionHeading({ label, title }) {
  return (
    <div className="mb-14">
      {label && (
        <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: '#FF6B00' }}>
          {label}
        </p>
      )}
      <h2 className="text-3xl font-black tracking-tight" style={{ color: '#F5F5F5' }}>
        {title}
      </h2>
      <div className="accent-bar" />
    </div>
  );
}

export function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.55, delay, ease: 'easeOut' },
  };
}

export function fadeLeft(delay = 0) {
  return {
    initial: { opacity: 0, x: -28 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.55, delay, ease: 'easeOut' },
  };
}

export function fadeRight(delay = 0) {
  return {
    initial: { opacity: 0, x: 28 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.55, delay, ease: 'easeOut' },
  };
}
