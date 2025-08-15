# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Installation & Setup
- `npm install --legacy-peer-deps` - Install dependencies (required due to React 19 peer dependency conflicts)
- `npm run dev` - Start development server at http://localhost:3000
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Key Development Notes
- This project requires `--legacy-peer-deps` flag for npm install due to vaul package requiring React ^18 while project uses React 19
- Build configuration ignores ESLint and TypeScript errors (`ignoreDuringBuilds: true`, `ignoreBuildErrors: true`)
- Images are unoptimized for deployment compatibility

## Architecture Overview

### Project Structure
This is a Next.js 15 App Router application for TriMeal, an AI-powered meal guidance platform combining automated nutrition analysis with personal trainer support.

**Core Architecture:**
- **App Router Structure**: Uses Next.js App Router with file-based routing in `/app`
- **UI Framework**: Radix UI + Tailwind CSS with shadcn/ui components
- **Type Safety**: TypeScript with path aliases (`@/` prefix)
- **Styling**: Tailwind CSS v4 with CSS variables and Geist fonts

### Key Application Areas

**User-Facing Pages:**
- `/` - Landing page with marketing content, testimonials, and pricing
- `/counseling` - Free consultation booking form
- `/dashboard` - User dashboard for meal tracking and progress
- `/meal-input` - Food photography and meal logging interface
- `/meal-calendar` - Calendar view of meal history
- `/chat` - Communication with assigned trainers
- `/profile` - User settings and account management
- `/appointments` - Trainer session booking

**Trainer Platform:**
- `/trainer/dashboard` - Trainer overview with client management
- `/trainer/clients/[id]` - Individual client progress and interaction

**Authentication Flow:**
- `/login`, `/register` - User authentication
- `/forgot-password`, `/reset-password` - Password recovery
- `/onboarding` - New user setup process

### Component System
- **UI Components**: Located in `/components/ui/` following shadcn/ui patterns
- **Utility Function**: Single `cn()` helper in `/lib/utils.ts` for className merging
- **Theme System**: Uses CSS variables with dark/light mode support via `theme-provider.tsx`

### Configuration Files
- `components.json` - shadcn/ui configuration with New York style and Lucide icons
- `next.config.mjs` - Next.js config with build error ignoring and image optimization disabled
- `postcss.config.mjs` - PostCSS with Tailwind CSS v4 plugin
- Path aliases: `@/` maps to root, with shortcuts for components, utils, ui, lib, hooks

### Business Logic Context
TriMeal's core value proposition is combining AI meal analysis with human trainer guidance to teach sustainable eating habits rather than temporary diet solutions. The application facilitates:
- Photo-based meal logging with AI nutritional analysis  
- Weekly 1:1 trainer consultations
- Progressive curriculum over 3-6 months
- Focus on education over restriction ("graduation" model)

### Asset Management
Images stored in `/public/` include meal photos, user avatars, demo screenshots, and marketing visuals for the landing page experience.