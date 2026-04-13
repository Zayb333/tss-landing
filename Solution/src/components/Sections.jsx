import React from 'react'

// ── Solution ──────────────────────────────────────────────────────────────────
const solutions = [
  { num: '01', title: 'Custom Automation Systems', body: 'Workflow engines built from scratch around your processes — not adapted from generic templates that require you to change how you work.' },
  { num: '02', title: 'Intelligent Data Workflows', body: 'Automated pipelines that collect, clean, transform, and deliver your data exactly where it needs to be — without human intervention.' },
  { num: '03', title: 'AI Integrations', body: 'We embed large language models and AI tools into your workflows for document processing, classification, summarization, and decision support.' },
  { num: '04', title: 'Seamless System Integration', body: 'We plug into your existing stack — CRMs, ERPs, databases, APIs, cloud storage — so nothing needs to be replaced, only enhanced.' },
]

export function Solution() {
  return (
    <section id="solution" style={{ padding: '8rem 4rem', background: 'var(--black)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start', marginBottom: '5rem' }}>
        <div>
          <p className="reveal" style={{ fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>Our Solution</p>
          <h2 className="reveal reveal-delay-1" style={{ fontFamily: '"Playfair Display",Georgia,serif', fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 400, lineHeight: 1.15, color: 'var(--white)' }}>
            We build systems that<br />work while you <em style={{ color: 'var(--gold)' }}>sleep.</em>
          </h2>
          <div className="reveal reveal-delay-2" style={{ width: 40, height: 1, background: 'var(--gold)', margin: '2rem 0', opacity: 0.6 }} />
        </div>
        <div className="reveal reveal-delay-2" style={{ paddingTop: '3rem' }}>
          <p style={{ fontSize: '0.95rem', fontWeight: 300, color: 'var(--light-gray)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Time Saving Solutions designs and deploys custom automation engines tailored to your exact workflows. We don't sell software licenses. We build the system your business actually needs.
          </p>
          <p style={{ fontSize: '0.95rem', fontWeight: 300, color: 'var(--light-gray)', lineHeight: 1.8 }}>
            From simple task automation to complex AI-assisted pipelines — we engineer it, integrate it, and hand you back your time.
          </p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 1, background: 'var(--border)' }}>
        {solutions.map((s, i) => (
          <div key={i} className={`reveal reveal-delay-${i}`} style={{ background: 'var(--off-black)', padding: '2.5rem', borderLeft: '2px solid transparent', transition: 'background 0.3s' }}>
            <div style={{ fontFamily: '"DM Mono",monospace', fontSize: '0.7rem', color: 'var(--gold)', marginBottom: '1.25rem', opacity: 0.7 }}>{s.num}</div>
            <h3 style={{ fontFamily: '"Playfair Display",Georgia,serif', fontSize: '1.25rem', fontWeight: 400, marginBottom: '0.75rem', lineHeight: 1.3 }}>{s.title}</h3>
            <p style={{ fontSize: '0.85rem', fontWeight: 300, color: 'var(--light-gray)', lineHeight: 1.7 }}>{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── How It Works ──────────────────────────────────────────────────────────────
const steps = [
  { roman: 'I', tag: 'Analyze', title: 'Diagnose', body: 'We map every manual process in your operation. Time audits, workflow interviews, and system reviews reveal exactly where hours are being lost.' },
  { roman: 'II', tag: 'Build', title: 'Engineer', body: 'Our team designs and builds your custom automation system. Tested rigorously, documented completely, and integrated cleanly into your stack.' },
  { roman: 'III', tag: 'Save Time', title: 'Reclaim', body: 'Deploy, monitor, and measure. We track the hours saved, errors eliminated, and return on investment — transparently and continuously.' },
]

export function HowItWorks() {
  return (
    <section id="how" style={{ padding: '8rem 4rem', background: 'var(--near-black)' }}>
      <p className="reveal" style={{ fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem', textAlign: 'center' }}>How It Works</p>
      <h2 className="reveal reveal-delay-1" style={{ fontFamily: '"Playfair Display",Georgia,serif', fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 400, lineHeight: 1.15, color: 'var(--white)', textAlign: 'center', margin: '0 auto' }}>
        Three steps from<br />manual to <em style={{ color: 'var(--gold)' }}>automatic.</em>
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', marginTop: '5rem' }}>
        {steps.map((s, i) => (
          <div key={i} className={`reveal reveal-delay-${i}`} style={{ padding: '2.5rem', textAlign: 'center' }}>
            <div style={{ width: 64, height: 64, border: '1px solid var(--gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
              <span style={{ fontFamily: '"DM Mono",monospace', fontSize: '0.85rem', color: 'var(--gold)' }}>{s.roman}</span>
            </div>
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.5rem' }}>{s.tag}</p>
            <h3 style={{ fontFamily: '"Playfair Display",Georgia,serif', fontSize: '1.5rem', fontWeight: 400, marginBottom: '0.75rem' }}>{s.title}</h3>
            <p style={{ fontSize: '0.85rem', fontWeight: 300, color: 'var(--light-gray)', lineHeight: 1.7, maxWidth: 240, margin: '0 auto' }}>{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── Use Cases ─────────────────────────────────────────────────────────────────
const cases = [
  { badge: 'Reporting', title: 'Automated Report Generation', body: 'Eliminate manual report compilation. We build systems that pull live data, generate formatted outputs, and deliver to stakeholders on schedule.', result: '→ 8 hrs/week returned to analytics team' },
  { badge: 'Data Operations', title: 'File & Data Comparison', body: 'Reconcile datasets, flag discrepancies, and merge records across systems automatically — replacing a process that took hours with one that takes seconds.', result: '→ 99.2% accuracy vs 94% manual baseline' },
  { badge: 'Process Management', title: 'Workflow Approvals', body: 'Multi-stage approval chains with automatic routing, deadline tracking, escalation logic, and audit trails — no email chains required.', result: '→ Approval cycle time cut by 73%' },
  { badge: 'Integration', title: 'Cross-System Data Sync', body: 'Keep your CRM, ERP, spreadsheets, and databases in perfect sync without manual exports, imports, or intervention of any kind.', result: '→ Zero manual sync tasks per week' },
  { badge: 'AI-Powered', title: 'Document Intelligence', body: 'AI reads, classifies, and extracts data from contracts, invoices, and emails — then routes information to the right place automatically.', result: '→ 3,000+ documents processed hands-free / month' },
  { badge: 'Operations', title: 'Inventory & Fulfillment', body: 'Trigger reorders, update stock levels, and notify teams based on real-time thresholds — without anyone watching a spreadsheet.', result: '→ Stockouts reduced by 89%' },
]

export function UseCases() {
  return (
    <section id="cases" style={{ padding: '8rem 4rem', background: 'var(--off-white)', color: 'var(--black)' }}>
      <p className="reveal" style={{ fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold-dark)', marginBottom: '1rem' }}>Real-World Applications</p>
      <h2 className="reveal reveal-delay-1" style={{ fontFamily: '"Playfair Display",Georgia,serif', fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 400, lineHeight: 1.15, maxWidth: 640, color: 'var(--black)' }}>
        What we've already<br />built — and proven.
      </h2>
      <div className="reveal reveal-delay-2" style={{ width: 40, height: 1, background: 'var(--gold-dark)', margin: '2rem 0', opacity: 0.6 }} />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', marginTop: '3.5rem' }}>
        {cases.map((c, i) => (
          <div key={i} className={`reveal reveal-delay-${i % 3}`} style={{ background: 'var(--white)', border: '1px solid var(--border-light)', padding: '2rem' }}>
            <span style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-dark)', background: 'rgba(201,168,76,0.1)', padding: '0.3rem 0.7rem', display: 'inline-block', marginBottom: '1.25rem' }}>{c.badge}</span>
            <h3 style={{ fontFamily: '"Playfair Display",Georgia,serif', fontSize: '1.1rem', fontWeight: 400, color: 'var(--black)', marginBottom: '0.6rem', lineHeight: 1.3 }}>{c.title}</h3>
            <p style={{ fontSize: '0.82rem', fontWeight: 300, color: 'var(--mid-gray)', lineHeight: 1.65 }}>{c.body}</p>
            <div style={{ marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-light)', fontSize: '0.75rem', letterSpacing: '0.05em', color: 'var(--gold-dark)', fontWeight: 500 }}>{c.result}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── Results ───────────────────────────────────────────────────────────────────
const metrics = [
  { num: '12+', label: 'Hours saved per employee, weekly' },
  { num: '98%', label: 'Reduction in process errors' },
  { num: '6wk', label: 'Typical time to full deployment' },
  { num: '4×', label: 'Average ROI within year one' },
]

export function Results() {
  return (
    <section id="results" style={{ padding: '8rem 4rem', background: 'var(--black)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
        <div>
          <p className="reveal" style={{ fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>Outcomes</p>
          <h2 className="reveal reveal-delay-1" style={{ fontFamily: '"Playfair Display",Georgia,serif', fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 400, lineHeight: 1.15, color: 'var(--white)' }}>
            Results you can<br />measure from<br /><em style={{ color: 'var(--gold)' }}>week one.</em>
          </h2>
          <div className="reveal reveal-delay-2" style={{ width: 40, height: 1, background: 'var(--gold)', margin: '2rem 0', opacity: 0.6 }} />
          <p className="reveal reveal-delay-2" style={{ fontSize: '0.9rem', fontWeight: 300, color: 'var(--light-gray)', lineHeight: 1.7, maxWidth: 400 }}>
            Every engagement is tracked against a clear baseline. You'll know exactly what you gained — not just in productivity, but in dollars.
          </p>
          <div className="reveal reveal-delay-3" style={{ fontFamily: '"Playfair Display",Georgia,serif', fontSize: '1.15rem', fontStyle: 'italic', fontWeight: 400, color: 'var(--light-gray)', lineHeight: 1.7, marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            "Within six weeks of deployment, we recovered over 40 hours of weekly capacity. The system paid for itself in 30 days."
            <div style={{ fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--mid-gray)', marginTop: '1rem' }}>
              — Operations Director, Mid-Size Logistics Firm
            </div>
          </div>
        </div>

        <div className="reveal reveal-delay-1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--border)' }}>
          {metrics.map((m, i) => (
            <div key={i} style={{ background: 'var(--off-black)', padding: '2.5rem' }}>
              <div style={{ fontFamily: '"Playfair Display",Georgia,serif', fontSize: '3.2rem', fontWeight: 400, color: 'var(--gold)', lineHeight: 1 }}>{m.num}</div>
              <div style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--light-gray)', marginTop: '0.5rem' }}>{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── CTA Band ──────────────────────────────────────────────────────────────────
export function CTABand() {
  return (
    <section style={{ background: 'var(--gold)', padding: '6rem 4rem', textAlign: 'center' }}>
      <h2 style={{ fontFamily: '"Playfair Display",Georgia,serif', fontSize: 'clamp(2rem,4.5vw,3.5rem)', fontWeight: 400, color: 'var(--black)', lineHeight: 1.15, maxWidth: 640, margin: '0 auto' }}>
        Stop paying people<br />to do a <em>machine's</em> job.
      </h2>
      <p style={{ fontSize: '0.95rem', fontWeight: 300, color: 'var(--dark-gray)', margin: '1.5rem auto 0', maxWidth: 480, lineHeight: 1.65 }}>
        Book a free process audit. We'll identify your highest-value automation opportunity at no cost — no commitment required.
      </p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2.5rem', flexWrap: 'wrap' }}>
        <a href="#contact" style={{ padding: '0.9rem 2.25rem', background: 'var(--black)', color: 'var(--white)', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500, textDecoration: 'none', display: 'inline-block' }}>
          Book a Free Audit
        </a>
        <a href="#contact" style={{ padding: '0.9rem 2.25rem', background: 'transparent', color: 'var(--black)', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 400, border: '1px solid rgba(0,0,0,0.35)', textDecoration: 'none', display: 'inline-block' }}>
          Submit a Process for Review
        </a>
      </div>
    </section>
  )
}

// ── Contact ───────────────────────────────────────────────────────────────────
export function Contact() {
  const [form, setForm] = React.useState({ name: '', email: '', company: '', process: '' })
  const [sent, setSent] = React.useState(false)

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = (e) => { e.preventDefault(); setSent(true) }

  const inputStyle = { background: 'var(--dark-gray)', border: '1px solid var(--border)', color: 'var(--white)', padding: '0.85rem 1rem', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '0.88rem', fontWeight: 300, outline: 'none', width: '100%' }
  const labelStyle = { fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--light-gray)', display: 'block', marginBottom: '0.5rem' }

  return (
    <section id="contact" style={{ padding: '8rem 4rem', background: 'var(--off-black)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem' }}>
        {/* Left */}
        <div>
          <p className="reveal" style={{ fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>Get Started</p>
          <h2 className="reveal reveal-delay-1" style={{ fontFamily: '"Playfair Display",Georgia,serif', fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 400, lineHeight: 1.15, color: 'var(--white)' }}>
            Let's audit<br />your first<br /><em style={{ color: 'var(--gold)' }}>process — free.</em>
          </h2>
          <div className="reveal reveal-delay-2" style={{ width: 40, height: 1, background: 'var(--gold)', margin: '2rem 0', opacity: 0.6 }} />
          <p className="reveal reveal-delay-2" style={{ fontSize: '0.9rem', fontWeight: 300, color: 'var(--light-gray)', lineHeight: 1.7, maxWidth: 400 }}>
            Tell us what your team does manually. We'll identify the automation opportunity and show you what's possible — at no cost.
          </p>

          <div className="reveal reveal-delay-3" style={{ marginTop: '2.5rem' }}>
            {[
              { label: 'Email', value: 'hello@timesavingsolutions.com' },
              { label: 'Response Time', value: 'Within 24 hours on business days' },
              { label: 'Engagement Scope', value: 'SMBs to mid-market, any industry' },
            ].map((d, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', padding: '1.25rem 0', borderBottom: '1px solid var(--border)' }}>
                <span style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)' }}>{d.label}</span>
                <span style={{ fontSize: '0.9rem', color: 'var(--white)', fontWeight: 300 }}>{d.value}</span>
              </div>
            ))}
          </div>

          <div className="reveal reveal-delay-4" style={{ background: 'var(--border)', padding: '1.75rem', marginTop: '1.5rem', borderLeft: '2px solid var(--gold)', fontSize: '0.82rem', color: 'var(--light-gray)', lineHeight: 1.5 }}>
            <strong style={{ color: 'var(--gold)', fontWeight: 500, display: 'block', marginBottom: '0.35rem' }}>Prefer to book directly?</strong>
            Schedule a 30-minute discovery call — Calendly widget loads here. Zero sales pressure, pure strategy.
          </div>
        </div>

        {/* Right — Form */}
        <div className="reveal reveal-delay-2">
          {sent ? (
            <div style={{ padding: '3rem', border: '1px solid var(--gold)', textAlign: 'center' }}>
              <p style={{ fontFamily: '"Playfair Display",Georgia,serif', fontSize: '1.5rem', fontWeight: 400, color: 'var(--gold)', marginBottom: '1rem' }}>Received.</p>
              <p style={{ fontSize: '0.88rem', fontWeight: 300, color: 'var(--light-gray)', lineHeight: 1.7 }}>We'll review your process and respond within 24 hours with a clear recommendation.</p>
            </div>
          ) : (
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                <div>
                  <label style={labelStyle} htmlFor="name">Full Name</label>
                  <input style={inputStyle} type="text" id="name" name="name" placeholder="Jane Smith" value={form.name} onChange={handle} required />
                </div>
                <div>
                  <label style={labelStyle} htmlFor="email">Work Email</label>
                  <input style={inputStyle} type="email" id="email" name="email" placeholder="jane@company.com" value={form.email} onChange={handle} required />
                </div>
              </div>
              <div>
                <label style={labelStyle} htmlFor="company">Company</label>
                <input style={inputStyle} type="text" id="company" name="company" placeholder="Acme Corp" value={form.company} onChange={handle} required />
              </div>
              <div>
                <label style={labelStyle} htmlFor="process">Describe a Manual Process You'd Like Automated</label>
                <textarea
                  style={{ ...inputStyle, minHeight: 120, resize: 'vertical' }}
                  id="process" name="process"
                  placeholder="e.g. Every Monday we manually pull data from three spreadsheets, combine them, and email a report to 12 people..."
                  value={form.process} onChange={handle} required
                />
              </div>
              <p style={{ fontSize: '0.72rem', color: 'var(--mid-gray)' }}>No sales pitch. Just a genuine review of your process and a clear recommendation.</p>
              <button type="submit" style={{ padding: '1rem 2rem', background: 'var(--gold)', color: 'var(--black)', fontFamily: '"DM Sans",system-ui,sans-serif', fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500, border: 'none', cursor: 'pointer', alignSelf: 'flex-start' }}>
                Submit for Free Review →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

// ── Footer ────────────────────────────────────────────────────────────────────
export function Footer() {
  return (
    <footer style={{ background: 'var(--black)', padding: '3rem 4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border)', flexWrap: 'wrap', gap: '1rem' }}>
      <div style={{ fontFamily: '"Playfair Display",Georgia,serif', fontSize: '1rem' }}>
        Time<span style={{ color: 'var(--gold)' }}>Saving</span> Solutions
      </div>
      <div style={{ display: 'flex', gap: '2rem' }}>
        {[['#problem','Problem'],['#solution','Solution'],['#how','How It Works'],['#contact','Contact']].map(([h,l]) => (
          <a key={h} href={h} style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--mid-gray)', textDecoration: 'none' }}>{l}</a>
        ))}
      </div>
      <div style={{ fontSize: '0.72rem', color: 'var(--mid-gray)', letterSpacing: '0.05em' }}>
        © 2025 Time Saving Solutions. All rights reserved.
      </div>
    </footer>
  )
}
