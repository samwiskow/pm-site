# GitHub Pages Deployment Guide

## Quick Setup

1. **Push to GitHub**: Commit and push all files to your GitHub repository
2. **Enable GitHub Pages**: 
   - Go to repository Settings → Pages
   - Source: "GitHub Actions"
3. **Deploy**: The workflow triggers automatically on push to main/master branch

## Files Created for Deployment

- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `vite.config.static.ts` - Static build configuration  
- `client/public/404.html` - SPA routing support
- `client/public/CNAME` - Custom domain (optional)
- `README.md` - Documentation

## Configuration Details

### Static Build Features
- Contact form falls back to direct email for static deployment
- Environment variable `VITE_STATIC_BUILD=true` enables static mode
- Optimized build without backend dependencies

### Custom Domain Setup
- Update `client/public/CNAME` with your domain
- Configure DNS A records to point to GitHub Pages IPs:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153

## Build Commands

- Development: `npm run dev` (full-stack)
- Static build: `npx vite build --config vite.config.static.ts`
- Regular build: `npm run build` (full-stack)

The deployment is now ready for GitHub Pages with automatic CI/CD pipeline.