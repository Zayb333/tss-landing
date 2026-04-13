import React from 'react'

const painPoints = [
  {
    tag: 'Repetitive Work',
    title: 'Your team re-does the same tasks every day',
    body: 'Copy-paste. Re-format. Send again. Skilled people are trapped in low-value loops that a machine could handle in seconds.',
  },
  {
    tag: 'Spreadsheet Chaos',
    title: 'Spreadsheets are your de facto software',
    body: 'Version conflicts, broken formulas, manual refreshes. What started as a quick fix has become a fragile system running your business.',
  },
  {
    tag: 'Human Error',
    title: 'Mistakes that cost real money',
    body: 'A miskeyed figure, a missed row, a wrong formula — manual processes create compounding inaccuracies that erode trust and profit.',
  },
  {
    tag: 'Lost Time',
    title: 'Hours consumed by process, not progress',
    body: 'Every hour spent managing data is an hour not spent on strategy, growth, or serving clients. The cost is invisible — but enormous.',
  },
]

export default function Problem() {
  return (
    <section
      id="problem"
      style={{ padding: '8rem 4rem', background: 'var(--off-white)', color: 'var(--black)' }}
    >
      <p className="reveal" style={{ fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold-dark)', marginBottom: '1rem' }}>
        The Problem
      </p>
      <h2 className="reveal reveal-delay-1" style={{ fontFamily: '"Playfair Display",Georgia,serif', fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 400, lineHeight: 1.15, maxWidth: 640, color: 'var(--black)' }}>
        Manual work is quietly<br />destroying your margins.
      </h2>
      <div className="reveal reveal-delay-2" style={{ width: 40, height: 1, background: 'var(--gold-dark)', margin: '2rem 0', opacity: 0.6 }} />

      {/* Pain point grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--border-light)', marginTop: '3rem' }}>
        {painPoints.map((p, i) => (
          <div
            key={i}
            className={`reveal reveal-delay-${i}`}
            style={{ background: 'var(--off-white)', padding: '3rem', borderBottom: '1px solid var(--border-light)' }}
          >
            <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-dark)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ display: 'block', width: 24, height: 1, background: 'var(--gold-dark)' }} />
              {p.tag}
            </div>
            <h3 style={{ fontFamily: '"Playfair Display",Georgia,serif', fontSize: '1.4rem', fontWeight: 400, color: 'var(--black)', marginBottom: '0.75rem', lineHeight: 1.3 }}>
              {p.title}
            </h3>
            <p style={{ fontSize: '0.9rem', fontWeight: 300, color: 'var(--mid-gray)', lineHeight: 1.7 }}>{p.body}</p>
          </div>
        ))}
      </div>

      {/* Cost callout */}
      <div className="reveal" style={{ background: 'var(--black)', color: 'var(--white)', padding: '3rem', marginTop: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '3rem', flexWrap: 'wrap' }}>
          <div style={{ fontFamily: '"Playfair Display",Georgia,serif', fontSize: '5rem', fontWeight: 400, color: 'var(--gold)', lineHeight: 1 }}>
            $50k
          </div>
          <div>
            <h3 style={{ fontFamily: '"Playfair Display",Georgia,serif', fontSize: '1.3rem', fontWeight: 400, marginBottom: '0.5rem' }}>
              The average annual cost of manual processes<br />for a team of 10
            </h3>
            <p style={{ fontSize: '0.85rem', fontWeight: 300, color: 'var(--light-gray)', maxWidth: 360, lineHeight: 1.6 }}>
              That's before you account for the strategic opportunities missed while your people are buried in tasks that shouldn't exist.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
