# Sam Wiskow - Product Manager Portfolio

A premium portfolio website showcasing product management expertise with modern web technologies and cinematic design.

## 🚀 Live Demo

- **Development**: [Replit Development Environment](https://replit.com/@samwiskow/portfolio)
- **Production**: [GitHub Pages Deployment](https://samwiskow.github.io/portfolio)

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Framer Motion
- **UI Components**: shadcn/ui (Radix UI)
- **Backend**: Node.js, Express, PostgreSQL (development)
- **Deployment**: GitHub Pages (static), Replit (full-stack)

## 📦 Installation & Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🌐 GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages:

### Setup Instructions

1. **Fork or clone this repository**
2. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: "GitHub Actions"
   - The workflow will trigger automatically on push to main/master

3. **Custom Domain (Optional)**:
   - Update `client/public/CNAME` with your domain
   - Configure DNS to point to GitHub Pages

### Deployment Features

- **Automatic Builds**: Triggers on every push to main branch
- **Static Site Generation**: Optimized for fast loading
- **SPA Support**: Client-side routing with 404 fallback
- **Contact Form Fallback**: Shows direct email for static builds

### Build Configuration

- **Static Build**: `vite.config.static.ts` - GitHub Pages optimized
- **Full-Stack Build**: `vite.config.ts` - Development/Replit deployment

## 📧 Contact Form Behavior

- **Development**: Full backend integration with database storage
- **GitHub Pages**: Falls back to direct email contact (sam.wiskow@gmail.com)

## 🎨 Design Features

- **Dark Theme**: Professional color scheme with cyan accents
- **Smooth Animations**: Framer Motion powered interactions
- **Responsive Design**: Mobile-first approach
- **Performance Optimized**: Fast loading and smooth scrolling

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utilities and configuration
├── server/                 # Backend Express server
├── shared/                 # Shared types and schemas
├── .github/workflows/      # GitHub Actions deployment
└── vite.config.static.ts   # Static build configuration
```

## 🔧 Environment Variables

For local development with backend features:
- `DATABASE_URL`: PostgreSQL connection string

## 📝 License

MIT License - feel free to use this as a template for your own portfolio.

---

**Sam Wiskow** - Principal Product Manager  
Building products that solve real problems