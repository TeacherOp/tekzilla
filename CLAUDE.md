# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Essential Commands
- `pnpm dev` - Start development server with Turbopack (runs on http://localhost:3000)
- `pnpm build` - Build production application with Turbopack
- `pnpm start` - Start production server
- `pnpm lint` - Run Biome linter checks
- `pnpm format` - Auto-format code with Biome
- `pnpm ui` - Add new shadcn/ui components

### Docker
- `docker-compose up` - Run application in Docker container
- Production build creates standalone output for containerization

## Project Architecture

### Tech Stack
- **Framework**: Next.js 15.5.3 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 with CSS variables
- **UI Components**: shadcn/ui (New York style)
- **Code Quality**: Biome for linting and formatting
- **Font**: Geist font family

### Directory Structure
- `src/app/` - Next.js App Router pages and layouts
  - Industry-specific pages (health, retail, telecom, education, etc.)
  - Service pages under `services/` subdirectory
  - Odoo-related service pages (consulting, implementations, etc.)
- `src/components/` - Reusable React components
  - Business components (Header, Footer, HeroSection, etc.)
  - `ui/` - shadcn/ui components (accordion, button, card, etc.)
- `public/` - Static assets

### Key Configuration
- **Path Alias**: `@/*` maps to `./src/*`
- **Image Optimization**: Configured for teckzilla.net domain
- **Build Output**: Standalone mode for Docker deployment
- **Biome Config**: Spaces (2 width), Next.js and React recommended rules

### Component Patterns
- All UI components use shadcn/ui with Radix UI primitives
- Components use `class-variance-authority` for variant styling
- Icons from `lucide-react`
- Consistent use of Tailwind CSS utility classes

## Business Context
This is the Teckzilla website - an Odoo Gold Partner company offering:
- Odoo ERP implementation and consulting
- Industry-specific Odoo solutions
- Odoo training and support services
- Third-party integration services