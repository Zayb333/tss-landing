# Time Saving Solutions — Landing Page

A premium, conversion-focused landing page for Time Saving Solutions.

**Stack:** React 18 · Vite 5 · Tailwind CSS 3 · DM Sans + Playfair Display

---

## Quick Start

### Prerequisites
- Node.js 18+ installed

### Install & Run

```bash
cd tss-landing
npm install
npm run dev
```

Visit **http://localhost:5173** in your browser.

### Build for Production

```bash
npm run build
npm run preview   # preview the production build locally
```

The `dist/` folder is ready to deploy to Netlify, Vercel, or any static host.

---

## Project Structure

```
tss-landing/
├── index.html                  # HTML entry point
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx                # ReactDOM root render
    ├── App.jsx                 # Root component — assembles all sections
    ├── index.css               # Global CSS vars, base styles, animations
    ├── hooks/
    │   └── useReveal.js        # Scroll reveal IntersectionObserver hook
    └── components/
        ├── Nav.jsx             # Fixed navigation bar
        ├── Hero.jsx            # Hero section (above the fold)
        └── Sections.jsx        # All other sections:
                                #   Solution, HowItWorks, UseCases,
                                #   Results, CTABand, Contact, Footer
```

---

## Sections

| Section | Purpose |
|---|---|
| **Nav** | Fixed top bar with logo, links, CTA |
| **Hero** | Headline, subheadline, dual CTA, key stats |
| **Problem** | 4 pain-point cards + cost callout |
| **Solution** | 4 automation service tiles |
| **How It Works** | 3-step process (Diagnose → Engineer → Reclaim) |
| **Use Cases** | 6 real-world automation examples with results |
| **Results** | Outcome metrics + testimonial quote |
| **CTA Band** | High-contrast conversion push in gold |
| **Contact** | Form (name/email/company/process) + Calendly placeholder |
| **Footer** | Logo, nav links, copyright |

---

## Customisation

### Colors
Edit CSS variables in `src/index.css`:

```css
:root {
  --gold: #c9a84c;       /* primary accent */
  --gold-light: #e8d5a0;
  --gold-dark: #8b6914;
  --off-white: #f9f8f6;  /* light section background */
}
```

### Calendly Integration
In `src/components/Sections.jsx`, find the `Contact` component and replace the Calendly placeholder div with:

```jsx
<div style={{ marginTop: '1.5rem' }}>
  <InlineWidget url="https://calendly.com/YOUR_LINK" />
</div>
```

Install `react-calendly`:
```bash
npm install react-calendly
```

Then import at the top of Sections.jsx:
```jsx
import { InlineWidget } from 'react-calendly'
```

### Form Submission
The form in `Contact` is currently client-side only (shows a success state on submit).
To wire it to a backend, replace the `submit` handler:

```js
const submit = async (e) => {
  e.preventDefault()
  await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  })
  setSent(true)
}
```

---

## Deployment

### Netlify (recommended)
1. Push to GitHub
2. Connect repo in Netlify dashboard
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Vercel
```bash
npm install -g vercel
vercel --prod
```

---

## Design System

- **Serif:** Playfair Display (headlines, pull quotes)
- **Sans:** DM Sans (body, UI elements)
- **Mono:** DM Mono (numbered labels, code)
- **Palette:** Black `#0a0a0a` · Off-white `#f9f8f6` · Gold `#c9a84c`
- **Motion:** CSS `@keyframes fadeUp` for hero; `IntersectionObserver` for scroll reveals
