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
- **Framework**: Next.js 15.5.3 with App Router (server components)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 with CSS variables (OKLCH color space)
- **UI Components**: shadcn/ui (New York style) with Radix UI primitives
- **Code Quality**: Biome for linting and formatting (ESM, spaces, 2-width)
- **Email**: Resend API with React Email templates
- **Content**: WordPress REST API integration

### Directory Structure
- `src/app/` - Next.js App Router pages and layouts
  - Industry pages: `health-industry/`, `retail-industry/`, etc.
  - Service pages: `services/implementation/`, `services/migration/`, etc.
  - Odoo pages: `odoo-consulting/`, `odoo-implementations/`, etc.
  - Blog: `/blog` with pagination and filtering, `/[slug]` for posts
  - Sitemaps: `sitemap_index.xml`, `[type]-sitemap.xml`
- `src/components/` - Reusable React components
  - Layout: Header, Footer, HeroSection
  - Content: FeaturesSection, FAQSection, TestimonialSection
  - Blog: post-card, filter, search-post, Sidebar
  - Forms: contact-form with server actions
  - `ui/` - shadcn/ui components (button, card, input, etc.)
- `src/lib/` - Utilities and integrations
  - `wordpress.ts` - WordPress API with retry logic
  - `utils.ts` - cn() utility for class merging
  - Type definitions for WordPress and global types

### Key Configuration
- **Path Alias**: `@/*` maps to `./src/*`
- **Image Optimization**: Configured for teckzilla.net domain
- **Build Output**: Standalone mode for Docker deployment
- **Revalidation**: ISR with cache tags, 1-hour default

## WordPress API Integration

The codebase integrates with WordPress REST API at `process.env.WORDPRESS_URL`:

### Key Functions in `lib/wordpress.ts`
- `wordpressFetch<T>()` - Basic fetch with retry logic (3 attempts, exponential backoff)
- `getPostsPaginated()` - Blog posts with filtering (9 per page)
- `getAllPostSlugs()` - For generateStaticParams
- `getAllPostsForSitemap()` - SEO sitemap generation

### Error Handling Pattern
```typescript
// Retry logic: 1s, 2s, 4s delays
// Custom WordPressAPIError class
// Rate limit awareness with headers
```

### Pagination
- Uses X-WP-Total and X-WP-TotalPages headers
- Query params: `?page=`, `?category=`, `?tag=`, `?author=`, `?search=`

## Server Components & Actions

### Page Structure
- Server components by default (async functions)
- Client components with `"use client"` only where needed
- Dynamic metadata generation for SEO
- ISR with revalidation (e.g., `revalidate = 3600`)

### Form Handling
- Server actions in `contact-actions.ts` with `"use server"`
- React 19's `useActionState` for form state
- Resend API for email delivery
- Toast notifications with sonner

## Styling Patterns

### Tailwind CSS v4
- CSS variables for theming in globals.css
- OKLCH color space for modern color handling
- Dark mode support with `.dark` class
- Custom animations: marquee, fadeInUp

### Component Variants
- CVA (class-variance-authority) for component variants
- cn() utility for conditional class merging
- Consistent spacing scale across components

## Environment Configuration

Required environment variables (see `.env.example`):
```
WORDPRESS_URL="https://teckzilla.net/"
WORDPRESS_HOSTNAME="teckzilla.net"
RESEND_API_KEY=""              # For email sending
EMAIL_FROM=""                   # Sender address
EMAIL_TO=""                     # Recipient addresses (comma-separated)
```

## Development Patterns

### Component Guidelines
- Use server components by default
- Add `"use client"` only for interactivity
- Leverage shadcn/ui components for consistency
- Icons from lucide-react library

### Data Fetching
- Server-side fetching in page components
- WordPress API with embedded media (_embed=true)
- Cache tags for granular revalidation
- Error boundaries for API failures

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Sheet component for mobile navigation
- Hidden/show utilities for responsive elements

## Business Context

This is the Teckzilla website - an Odoo Gold Partner company offering:
- Odoo ERP implementation and consulting
- Industry-specific Odoo solutions (health, retail, telecom, education, manufacturing, hospitality, service)
- Odoo training and support services
- Third-party integration services
- Custom development and migrations