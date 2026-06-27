# 🦷 DentCare Pro — Next.js 15 Dental Website

DentCare Pro is a modern, responsive dental clinic website built with Next.js, TypeScript, and Tailwind CSS. It features an elegant UI, service showcase, doctor profiles, treatment-based appointment booking, and a fully responsive design. The appointment form automatically assigns doctors based on the selected treatment and securely submits booking requests through a backend integration. The project focuses on performance, accessibility, SEO, and a premium user experience.



A premium, production-ready dental clinic website built with **Next.js 15 App Router**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.
---
**TECH STACK**
• Next.js 15
• React
• TypeScript
• Tailwind CSS
• Framer Motion
• Lucide Icons
• Responsive Design
• Google Forms / Apps Script Integration
• Vercel Deployment
---

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```

### 3. Open in browser
```
http://localhost:3000
```

---

## 🛠 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 15.0.3 | App Router, SSR/SSG |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 3.x | Styling |
| Framer Motion | 11.x | Hero animations |
| Lucide React | 0.454 | Icons |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css        # Global styles, animations, fonts
│   ├── layout.tsx         # Root layout with metadata & SEO
│   └── page.tsx           # Home page (assembles all sections)
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx     # Sticky navbar with mobile menu
│   │   └── Footer.tsx     # Premium dark footer
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx        # Full-height hero with form
│   │   ├── InfoStrip.tsx          # 3 info cards
│   │   ├── AboutSection.tsx       # 2-col about with badge
│   │   ├── ServicesSection.tsx    # 6 service cards grid
│   │   ├── WhyChooseUs.tsx        # 4 feature cards + counters
│   │   ├── DoctorsSection.tsx     # 4 doctor cards
│   │   ├── TestimonialsSection.tsx # Auto-sliding carousel
│   │   ├── BlogSection.tsx        # 3 blog cards
│   │   └── ContactSection.tsx     # Contact form + details
│   │
│   └── ui/
│       ├── BackToTop.tsx          # Floating back-to-top button
│       └── ScrollRevealProvider.tsx # IntersectionObserver for reveals
│
├── hooks/
│   ├── useScrollReveal.ts   # Scroll reveal hook
│   └── useCounter.ts        # Animated number counter hook
│
└── lib/
    ├── constants.ts         # All site content/data
    └── utils.ts             # cn() utility
```

---

## ✨ Features

- ✅ **Next.js 15 App Router** — Server components by default
- ✅ **Fully TypeScript** — Zero `any` types
- ✅ **Mobile-first responsive** — 320px to 1920px
- ✅ **Sticky navbar** — Transparent → blur on scroll
- ✅ **Animated hero** — Framer Motion entrance animations
- ✅ **Booking form** — With success state
- ✅ **Scroll reveal** — IntersectionObserver on every section
- ✅ **Animated counters** — Count up on scroll into view
- ✅ **Auto testimonial slider** — With dots + arrow controls
- ✅ **Contact form** — With loading and success states
- ✅ **Back to top** — Smooth scroll
- ✅ **SEO optimized** — Metadata API, OG tags
- ✅ **Zero errors** — No TypeScript or ESLint issues

---

## 🎨 Colors

| Name | Value |
|------|-------|
| Primary | `#00B7B0` |
| Primary Light | `#14D6CC` |
| Secondary | `#0F172A` |

---

## 📱 Responsive Breakpoints

| Size | Breakpoint |
|------|-----------|
| Mobile S | 320px |
| Mobile M | 375px |
| Mobile L | 425px |
| Tablet | 768px |
| Laptop | 1024px |
| Desktop | 1440px |
| Large | 1920px |

---

## 🔧 Customization

All site content lives in `src/lib/constants.ts` — edit names, services, doctors, testimonials etc there.

Colors are in `tailwind.config.ts` under `theme.extend.colors`.

---

## 📦 Build for Production

```bash
npm run build
npm start
```

---

Made with ❤️ — DentCare Pro © 2026
