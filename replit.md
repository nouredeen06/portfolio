# Developer Portfolio Website

## Overview

This is a modern developer portfolio website built as a full-stack application. It showcases coding projects with interactive features, designed with a minimalist aesthetic inspired by Linear, GitHub, and Dribbble. The application features a dark-mode-first design with smooth animations, responsive layouts, and an elegant presentation of technical work.

The portfolio displays project cards with details, technology stacks, and media previews. Users can browse projects, view detailed information in dialogs, and navigate through different sections including Hero, Projects, About, and Contact.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tool**
- React 18+ with TypeScript for type-safe component development
- Vite as the build tool and development server, configured to serve the client from the `/client` directory
- Wouter for lightweight client-side routing (non-SSR application)

**UI Component System**
- Shadcn UI component library (New York style variant) providing pre-built, accessible components
- Radix UI primitives as the foundation for accessible, unstyled components
- Tailwind CSS for utility-first styling with custom design tokens defined in CSS variables
- Custom color palette optimized for dark mode with HSL color values
- Responsive grid system using Tailwind's breakpoint utilities (md, lg)

**State Management**
- TanStack Query (React Query) for server state management and API data fetching
- Custom query client with configured defaults (no refetching on window focus, infinite stale time)
- Local React state for UI interactions (theme toggle, dialog state, mobile menu)

**Design System**
- Inter font for headings and body text
- JetBrains Mono for code elements and tech badges
- Custom elevation system using CSS variables (`--elevate-1`, `--elevate-2`)
- Technology-specific color coding for project badges (React blue, Node green, TypeScript purple, etc.)
- Hover and active state animations via Tailwind utility classes

### Backend Architecture

**Server Framework**
- Express.js server with TypeScript
- ESM module system throughout the codebase
- Custom middleware for request logging with performance metrics
- API routes prefixed with `/api/` for clear separation from frontend routes

**Data Storage Strategy**
- In-memory storage implementation (`MemStorage` class) for development
- Prepared for PostgreSQL integration via Drizzle ORM (schema defined but database layer abstracted)
- Storage interface (`IStorage`) allowing easy swapping between in-memory and database implementations
- Pre-seeded sample project data for demonstration purposes

**API Design**
- RESTful endpoints:
  - `GET /api/projects` - Retrieve all projects
  - `GET /api/projects/:id` - Retrieve single project by ID
- JSON responses with proper error handling (404 for not found, 500 for server errors)
- Type-safe data transfer using shared schema types between frontend and backend

**Development Environment**
- Vite middleware integration in development mode for HMR (Hot Module Replacement)
- Replit-specific plugins for error handling and development tooling
- Static file serving for production builds
- Custom logging with formatted timestamps for API requests

### Type System & Validation

**Shared Schema**
- Centralized TypeScript types in `/shared/schema.ts`
- Drizzle ORM schema definitions for PostgreSQL tables (projects table)
- Zod validation schemas derived from Drizzle schemas for runtime type checking
- Type inference using Drizzle's `$inferSelect` for database query results

**Project Data Model**
```
- id: UUID (auto-generated)
- title: string
- description: string (short)
- longDescription: string (detailed)
- technologies: string[] (array of tech stack items)
- imageUrl: string (project preview image)
- videoUrl: string | null (optional demo video)
- liveUrl: string | null (optional deployment link)
- githubUrl: string | null (optional repository link)
```

### Build & Deployment

**Build Process**
- Frontend: Vite builds React app to `/dist/public`
- Backend: esbuild bundles server code to `/dist` with ESM format
- Separate TypeScript compilation step for type checking (`npm run check`)

**Development vs Production**
- Development: Vite dev server with middleware mode, HMR enabled
- Production: Compiled static assets served by Express
- Environment-based plugin loading (Replit cartographer and dev banner only in development)

**Path Aliases**
- `@/` → Client source files (`/client/src`)
- `@shared/` → Shared schemas and types
- `@assets/` → Static assets directory

## External Dependencies

### Core Framework Dependencies
- **React** (^18) - UI framework
- **Express** - Node.js web server
- **Vite** - Build tool and dev server
- **TypeScript** - Type system

### Database & ORM
- **Drizzle ORM** (^0.39.1) - Type-safe database ORM
- **@neondatabase/serverless** (^0.10.4) - PostgreSQL driver for serverless environments
- **drizzle-zod** - Zod schema generation from Drizzle schemas
- **connect-pg-simple** - PostgreSQL session store (configured but not actively used)

### UI Component Libraries
- **@radix-ui/*** - Extensive collection of accessible, unstyled primitives (accordion, dialog, dropdown, toast, etc.)
- **shadcn/ui** - Pre-styled component implementations based on Radix
- **lucide-react** - Icon library
- **embla-carousel-react** - Carousel component

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **class-variance-authority** - Type-safe variant styling
- **tailwindcss-animate** - Animation utilities
- **clsx** / **tailwind-merge** - Conditional class merging

### Form & Data Handling
- **react-hook-form** - Form state management
- **@hookform/resolvers** - Validation resolvers for react-hook-form
- **zod** - Runtime type validation
- **@tanstack/react-query** - Server state management

### Development Tools
- **tsx** - TypeScript execution for development server
- **esbuild** - Fast JavaScript bundler for production server
- **@replit/vite-plugin-*** - Replit-specific development tooling

### Routing & Navigation
- **wouter** - Lightweight client-side router

### Asset Management
- Static images stored in `/attached_assets/generated_images/`
- Vite alias configured for easy asset imports (`@assets`)
- Hero background pattern and project preview images included