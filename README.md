# Samcote - Black & White Next.js Website

A modern, elegant website built with Next.js featuring a clean black and white theme. This project showcases best practices in web development with TypeScript, Tailwind CSS, and responsive design.

## Features

- ✨ **Clean Black & White Design** - Minimalist aesthetic focusing on clarity
- ⚡ **Next.js 14** - Server components, API routes, and optimizations
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🎨 **Tailwind CSS** - Utility-first styling for rapid development
- 🔤 **TypeScript** - Type-safe code for better development experience
- ♿ **Accessible** - Built with accessibility standards in mind
- 🚀 **SEO Optimized** - Metadata, structured data, and performance

## Project Structure

```
src/
├── app/              # Next.js app router (pages and layout)
├── components/       # Reusable React components
│   ├── Header.tsx    # Navigation header
│   ├── Hero.tsx      # Hero section
│   ├── Features.tsx  # Features showcase
│   └── Footer.tsx    # Footer
└── styles/
    └── globals.css   # Global styles and Tailwind utilities
```

## Getting Started

### Installation

1. Navigate to the project directory
2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Build

Create an optimized production build:
```bash
npm run build
```

### Production

Start the production server:
```bash
npm start
```

## Customization

### Colors
The black and white theme uses:
- **Black**: Text and primary elements (`#000000`)
- **White**: Background (`#FFFFFF`)
- **Gray**: Accent colors (`#F3F4F6`, `#1F2937`, etc.)

To modify the color scheme, edit the Tailwind configuration in `tailwind.config.ts`.

### Components
All components are located in `src/components/` and are fully customizable. Components use:
- Tailwind CSS classes for styling
- TypeScript for type safety
- Next.js Link component for navigation

### Sections
The homepage includes:
1. **Header** - Sticky navigation with mobile menu
2. **Hero** - Main banner with call-to-action buttons
3. **Features** - 6-column feature showcase with icons
4. **Footer** - Multi-column footer with links and social media

## Technologies Used

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS transformations
- **ESLint** - Code quality

## Performance

This project is optimized for:
- Fast page loads with Next.js optimizations
- Minimal CSS with Tailwind
- Image optimization
- Code splitting and lazy loading
- SEO with metadata

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project as a template.

## Next Steps

To further customize this website:
1. Update the content in components
2. Add more pages in the `src/app` directory
3. Implement additional sections or features
4. Connect to a backend API
5. Deploy to Vercel or your preferred hosting

---

Made with ❤️ using Next.js
