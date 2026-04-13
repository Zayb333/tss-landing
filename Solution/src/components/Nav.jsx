import React, { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1.25rem 4rem',
        background: scrolled ? 'rgba(10,10,10,0.97)' : 'rgba(10,10,10,0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(201,168,76,0.12)',
        transition: 'background 0.3s',
      }}
    >
      <div style={{ fontFamily: 'var(--serif, "Playfair Display")', fontSize: '1.1rem', letterSpacing: '0.02em' }}>
        Time<span style={{ color: 'var(--gold)' }}>Saving</span> Solutions
      </div>

      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        {['#problem', '#solution', '#how', '#contact'].map((href, i) => (
          <a
            key={i}
            href={href}
            style={{
              fontSize: '0.78rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--light-gray)',
              textDecoration: 'none',
            }}
          >
            {['The Problem', 'Solution', 'How It Works', 'Contact'][i]}
          </a>
        ))}
        <a
          href="#contact"
          style={{
            fontSize: '0.75rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            padding: '0.6rem 1.5rem',
            border: '1px solid var(--gold)',
            color: 'var(--gold)',
            textDecoration: 'none',
          }}
        >
          Free Audit
        </a>
      </div>
    </nav>
  )
}
