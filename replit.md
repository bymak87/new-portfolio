# replit.md

## Overview

This is a portfolio website for a creative designer/developer. It showcases projects, services, experience, and provides contact functionality. The application is built as a full-stack TypeScript project with a React frontend and Express backend, using PostgreSQL for data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight alternative to React Router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **Build Tool**: Vite with hot module replacement

The frontend follows a page-based structure with reusable components:
- Pages: Home, Portfolio, Project (detail), About, Resume, Contact
- Layout components: Header, Footer, Layout wrapper
- Feature components organized by section (home/HeroSection, home/FeaturedProjects, etc.)

### Backend Architecture
- **Framework**: Express 5 on Node.js
- **API Pattern**: RESTful endpoints under `/api` prefix
- **Database ORM**: Drizzle ORM with PostgreSQL
- **Schema Validation**: Zod with drizzle-zod integration

API endpoints:
- `GET /api/projects` - List all projects
- `GET /api/projects/:id` - Get single project
- `POST /api/contact` - Submit contact form

### Data Storage
- **Database**: PostgreSQL (configured via DATABASE_URL environment variable)
- **Schema Location**: `shared/schema.ts` - shared between frontend and backend
- **Migrations**: Drizzle Kit with `db:push` command

Current schema includes:
- `users` table (id, username, password)
- `contactMessages` table for contact form submissions
- TypeScript interfaces for Project, Service, Experience, Skill (currently stored in-memory in storage.ts)

### Development vs Production
- **Development**: Vite dev server with HMR, proxied through Express
- **Production**: Static file serving from `dist/public`, bundled with esbuild

### Build Process
- Custom build script in `script/build.ts`
- Frontend: Vite builds to `dist/public`
- Backend: esbuild bundles server code with selective dependency bundling

## External Dependencies

### Database
- PostgreSQL database (required)
- Connection via `DATABASE_URL` environment variable
- Session storage via `connect-pg-simple`

### UI/Component Libraries
- Radix UI primitives (dialogs, dropdowns, forms, etc.)
- Embla Carousel for carousels
- React Hook Form with Zod resolver
- Lucide React for icons

### Development Tools
- Replit-specific plugins: runtime error overlay, cartographer, dev banner
- TypeScript for type safety across full stack