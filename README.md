# My Portfolio

A modern personal portfolio built with Next.js, React, and CSS modules.

## Features

- ✨ Responsive design
- 🎨 Modern UI with smooth animations
- 📱 Mobile-friendly layout
- 🚀 Fast performance with Next.js
- 📝 Contact form with form state management
- 🎯 Smooth scroll navigation

## Sections

- **Hero**: Eye-catching landing section
- **About**: Personal introduction
- **Projects**: Showcase your work
- **Skills**: Display your expertise
- **Contact**: Get in touch form and social links

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Update Your Information

- **Hero Section**: Edit `components/Hero.jsx`
- **About Section**: Edit `components/About.jsx`
- **Projects**: Update the `projects` array in `components/Projects.jsx`
- **Skills**: Modify the `skillCategories` in `components/Skills.jsx`
- **Social Links**: Update the links in `components/Contact.jsx`

### Styling

All components use CSS modules for scoped styling. You can customize the global theme by editing:
- `app/globals.css` - Global styles and CSS variables

CSS Variables Available:
- `--primary-color`: Main background color
- `--secondary-color`: Secondary background color
- `--accent-color`: Primary accent color
- `--text-light`: Light text color
- `--border-color`: Border color

## Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
portfolio/
├── app/
│   ├── layout.jsx
│   ├── page.jsx
│   └── globals.css
├── components/
│   ├── Navigation.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── ProjectCard.jsx
│   ├── Skills.jsx
│   ├── Contact.jsx
│   └── *.module.css
├── package.json
├── next.config.js
└── jsconfig.json
```

## Next Steps

1. **Personalize Content**: Update all sections with your information
2. **Add Projects**: Update your actual projects with descriptions and links
3. **Customize Colors**: Modify CSS variables in `globals.css`
4. **Deploy**: Deploy to Vercel or your preferred hosting platform
5. **Add Images**: Consider adding project screenshots or a profile picture
6. **Form Integration**: Connect the contact form to an email service (e.g., Formspree, EmailJS)

## Technologies Used

- **Next.js** - React framework
- **React** - UI library
- **CSS Modules** - Component scoped styling
- **JavaScript ES6+** - Modern JavaScript

## License

This project is open source and available under the MIT License.
