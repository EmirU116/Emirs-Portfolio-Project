# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm lint
```

## Project Architecture

This is a **Next.js 16 portfolio application** using the App Router pattern (introduced in Next.js 13). It's a single-page portfolio with multiple sections that users can navigate via anchor links.

### Technology Stack
- **Framework**: Next.js 16.1.6 (App Router)
- **UI Library**: React 19.2.4
- **Styling**: CSS Modules (scoped styles per component) + global CSS variables
- **Language**: JavaScript ES6+
- **Path Aliases**: `@/*` maps to root directory (defined in jsconfig.json)

### Directory Structure

```
app/
├── layout.jsx          # Root layout, wraps all pages with Navigation
├── page.jsx            # Main page, renders all portfolio sections
└── globals.css         # Global styles and CSS variables

components/
├── Navigation.jsx      # Navigation bar (client component)
├── Hero.jsx            # Landing section
├── About.jsx           # About section
├── Projects.jsx        # Projects showcase with Projects.module.css
├── ProjectCard.jsx     # Reusable project card component
├── Skills.jsx          # Skills section
├── Contact.jsx         # Contact form and social links
└── *.module.css        # Component-scoped styles
```

### Key Architectural Patterns

1. **Client Components**: Navigation uses `'use client'` directive (interactive elements). Other components are server components by default.

2. **CSS Modules**: Each component has a corresponding `.module.css` file for scoped styling. Import with: `import styles from './ComponentName.module.css'`

3. **Theming**: Global CSS variables in `app/globals.css` control the theme:
   - `--primary-color`: Main background
   - `--secondary-color`: Secondary background
   - `--accent-color`: Primary accent
   - `--text-light`: Light text color
   - `--border-color`: Border color

4. **Navigation**: Uses anchor links (`#about`, `#projects`, etc.) with `id` attributes on sections for smooth scrolling. Each section component should have an `id` matching the navigation link.

### Component Responsibility

- **Navigation**: Site header with internal anchor links (client component for interactivity)
- **Hero**: Eye-catching landing section
- **About**: Personal introduction
- **Projects**: Grid/list of projects; uses ProjectCard component
- **ProjectCard**: Reusable card for individual projects
- **Skills**: Skill categories and expertise display
- **Contact**: Contact form and social media links

## Important Customization Points

- **Portfolio Content**: Each component (Hero, About, Projects, Skills, Contact) contains hardcoded content that should be updated with real information
- **Projects Array**: Typically defined in `Projects.jsx` as a data structure
- **Colors**: Modify CSS variables in `app/globals.css` for theming across all components
- **Social Links**: Usually in `Contact.jsx`

## Notes

- The project uses React 19 with the latest Next.js version
- No external UI library (custom CSS only)
- Contact form likely needs backend integration or third-party service (Formspree, EmailJS, etc.)
- Deployment-ready for Vercel
