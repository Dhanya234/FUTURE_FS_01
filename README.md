# Dhanya — Personal Portfolio Website

> **Full Stack Web Development Intern Task 1 — Future Interns (2026)**

A modern, responsive personal portfolio website built with React.js and Vite, featuring a black + orange developer theme.

🔗 **Live Site:** _Add your deployed URL here_
📁 **GitHub:** https://github.com/Dhanya234

---

## About

This portfolio presents me as a Computer Science Engineering student and full-stack developer. It is designed to communicate my skills, projects, and background to recruiters and hiring managers clearly and professionally.

---

## Features

- **Hero section** — Animated developer code window with live typing effect
- **About section** — Professional introduction with info cards
- **Technical Skills** — Categorized skill cards with hover effects
- **Featured Projects** — ParentAlert (AI safety system) and FleetGuard (fleet management)
- **Education** — Degree details and relevant coursework
- **Profiles** — GitHub and LinkedIn cards
- **Contact** — Contact form (Formspree) + direct email/phone
- **Responsive** — Works on mobile, tablet, and desktop
- **SEO** — Meta tags and Open Graph metadata

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React.js 19 |
| Build Tool | Vite 8 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Contact Form | Formspree |
| Language | JavaScript / JSX |

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx       # Sticky nav with active section + hamburger menu
│   ├── Hero.jsx         # Animated hero with code window visual
│   ├── About.jsx        # Two-column about + info cards
│   ├── Skills.jsx       # Skill category cards
│   ├── Projects.jsx     # Featured project cards
│   ├── Education.jsx    # Education timeline + coursework
│   ├── Profiles.jsx     # GitHub & LinkedIn cards
│   ├── Contact.jsx      # Contact form + info
│   ├── Footer.jsx       # Footer with social links
│   └── Icons.jsx        # Custom SVG brand icons
├── data.js              # All content data (skills, projects, coursework)
├── App.jsx              # Root layout
└── index.css            # Global styles + Tailwind
```

---

## Setup & Running Locally

### Prerequisites
- Node.js 18+
- npm

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/Dhanya234/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open http://localhost:5173 in your browser.

### Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder.

---

## Activating the Contact Form

The contact form uses [Formspree](https://formspree.io) for email notifications.

1. Go to https://formspree.io and create a free account
2. Create a new form — you'll get a form ID like `xpwzabcd`
3. Open `src/components/Contact.jsx`
4. Replace `YOUR_FORM_ID` with your actual form ID:

```js
const res = await fetch('https://formspree.io/f/xpwzabcd', {
```

5. Formspree will forward all submissions to your email address.

---

## Adding Your Resume

Place your resume PDF at:

```
public/resume.pdf
```

The "Download Resume" button is already wired to `/resume.pdf`.

---

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Drag and drop the dist/ folder to netlify.com/drop
```

### GitHub Pages

```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"homepage": "https://Dhanya234.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Then run:
```bash
npm run deploy
```

---

## Customization

All content is centralized in `src/data.js`. To update skills, projects, or coursework — edit only that file.

---

## License

© 2026 Dhanya. All rights reserved.
