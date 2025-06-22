# Alex Morgan Creative Director Portfolio

## Overview

This is a premium portfolio website for Alex Morgan, a Creative Director specializing in digital experiences. The application features a modern, responsive design built with React and TypeScript, showcasing work samples and providing a contact form for potential clients.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Animations**: Framer Motion for smooth, professional animations
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured via Neon serverless)
- **Development**: In-memory storage fallback with interface-based design

### Design System
- **Theme**: Dark theme with premium blue accent (#015FFC)
- **Typography**: Inter font family for modern, clean appearance
- **Layout**: Mobile-first responsive design
- **Components**: Reusable UI components following atomic design principles

## Key Components

### Frontend Components
- **Navbar**: Fixed navigation with smooth scroll to sections
- **Hero**: Full-screen landing section with animated elements
- **Intro**: Mission statement with intersection observer animations
- **About**: Personal information with professional portrait
- **Work**: Portfolio showcase with project cards
- **Contact**: Contact form with validation and submission handling
- **Footer**: Social links and copyright information

### Backend Services
- **Contact API**: RESTful endpoint for form submissions (`/api/contact`)
- **Storage Interface**: Abstracted storage layer supporting both in-memory and database persistence
- **Form Validation**: Server-side validation using Zod schemas

### Database Schema
- **Users Table**: Basic user authentication structure
- **Contact Submissions**: Stores form submissions with timestamp
- **Schema Validation**: Drizzle-Zod integration for type-safe operations

## Data Flow

1. **Page Load**: React app renders with Vite dev server in development
2. **Form Submission**: Contact form validates client-side, submits to `/api/contact`
3. **Server Processing**: Express server validates and stores submission
4. **Database Operations**: Drizzle ORM handles PostgreSQL interactions
5. **Response Handling**: TanStack Query manages API responses and updates UI
6. **Toast Notifications**: Success/error feedback via shadcn/ui toast system

## External Dependencies

### Development Tools
- **Vite**: Development server and build tool
- **TypeScript**: Type checking and compilation
- **ESBuild**: Production server bundling
- **PostCSS**: CSS processing with Tailwind

### UI Libraries
- **@radix-ui/***: Accessible UI primitives
- **framer-motion**: Animation library
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management

### Backend Libraries
- **@neondatabase/serverless**: PostgreSQL connection
- **drizzle-orm**: Database ORM
- **connect-pg-simple**: Session storage (configured but not used)
- **zod**: Schema validation

## Deployment Strategy

### Development
- **Environment**: Replit with Node.js 20, Web, and PostgreSQL 16 modules
- **Hot Reload**: Vite HMR for instant development feedback
- **Database**: PostgreSQL via environment variable `DATABASE_URL`

### Production Build
- **Frontend**: Vite builds static assets to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Deployment**: Replit Autoscale deployment target
- **Port Configuration**: Server runs on port 5000, exposed as port 80

### Database Migration
- **Schema Management**: Drizzle Kit for database schema migrations
- **Push Command**: `npm run db:push` applies schema changes
- **Migration Files**: Generated in `./migrations` directory

## Changelog

Changelog:
- June 22, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.