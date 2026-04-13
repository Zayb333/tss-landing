import React from 'react'

const S = {
  section: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 4rem',
    position: 'relative',
    overflow: 'hidden',
  },
  bg: {
    position: 'absolute', inset: 0,
    background: 'radial-gradient(ellipse 60% 60% at 70% 50%,rgba(201,168,76,0.06) 0%,transparent 70%),radial-gradient(ellipse 40% 40% at 20% 80%,rgba(201,168,76,0.04) 0%,transparent 60%)',
    pointerEvents: 'none',
  },
  grid: {
    position: 'absolute', inset: 0,
    backgroundImage: 'linear-gradient(rgba(201,168,76,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,0.04) 1px,transparent 1px)',
    backgroundSize: '80px 80px',
    WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%,black 0%,transparent 80%)',
    maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%,black 0%,transparent 80%)',
    pointerEvents: 'none',
  },
  label: {
    fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase',
    color: 'var(--gold)', marginBottom: '1.5rem',
    opacity: 0, animation: 'fadeUp 0.8s 0.2s forwards',
  },
  h1: {
    fontFamily: '"Playfair Display", Georgia, serif',
    fontSize: 'clamp(3rem,6vw,5.5rem)', fontWeight: 400,
    lineHeight: 1.05, maxWidth: 800,
    opacity: 0, animation: 'fadeUp 0.8s 0.4s forwards',
  },
  sub: {
    fontSize: '1.1rem', fontWeight: 300,
    color: 'var(--light-gray)', maxWidth: 520, lineHeight: 1.7, marginTop: '1.75rem',
    opacity: 0, animation: 'fadeUp 0.8s 0.6s forwards',
  },
  ctas: {
    display: 'flex', gap: '1rem', marginTop: '2.5rem', alignItems: 'center',
    opacity: 0, animation: 'fadeUp 0.8s 0.8s forwards', flexWrap: 'wrap',
  },
  btnPrimary: {
    padding: '0.9rem 2.25rem', background: 'var(--gold)', color: 'var(--black)',
    fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '0.8rem',
    letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500,
    border: 'none', cursor: 'pointer', textDecoration: 'none', display: 'inline-block',
  },
  btnGhost: {
    padding: '0.9rem 2.25rem', background: 'transparent', color: 'var(--white)',
    fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '0.8rem',
    letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 400,
    border: '1px solid rgba(255,255,255,0.2)', cursor: 'pointer',
    textDecoration: 'none', display: 'inline-block',
  },
  statRow: {
    display: 'flex', gap: '3rem', marginTop: '4rem', paddingTop: '4rem',
    borderTop: '1px solid var(--border)',
    opacity: 0, animation: 'fadeUp 0.8s 1s forwards', flexWrap: 'wrap',
  },
}

const stats = [
  { num: '12', unit: 'hrs', label: 'Saved per employee / week' },
  { num: '98', unit: '%', label: 'Reduction in manual errors' },
  { num: '6', unit: 'wk', label: 'Average deployment time' },
]

export default function Hero() {
  return (
    <section style={S.section} id="home">
      <div style={S.bg} />
      <div style={S.grid} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <p style={S.label}>Process Automation &amp; AI Systems</p>
        <h1 style={S.h1}>
          Your team was built<br />
          to think — not to<br />
          <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>repeat</em> themselves.
        </h1>
        <p style={S.sub}>
          We engineer bespoke automation systems that eliminate manual workflows,
          reduce error, and return hundreds of hours to your business every year.
        </p>
        <div style={S.ctas}>
          <a href="#contact" style={S.btnPrimary}>Get a Free Process Audit</a>
          <a href="#how" style={S.btnGhost}>See How It Works</a>
        </div>
        <div style={S.statRow}>
          {stats.map((s, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <div style={{ fontFamily: '"Playfair Display",Georgia,serif', fontSize: '2.2rem', fontWeight: 400 }}>
                {s.num}<span style={{ color: 'var(--gold)' }}>{s.unit}</span>
              </div>
              <div style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--light-gray)' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
