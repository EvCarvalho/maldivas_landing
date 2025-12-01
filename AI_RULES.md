# AI Rules for Espaço Maldivas App

## Tech Stack

- **React 19** - Main UI framework for building the application
- **TypeScript** - Type-safe JavaScript development
- **React Router DOM** - Client-side routing and navigation
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Framer Motion** - Animation library for smooth UI transitions
- **Lucide React** - Icon library for consistent UI icons
- **Vite** - Build tool and development server
- **shadcn/ui** - Pre-built UI component library (available but not currently used)

## Library Usage Rules

### UI Components
- **Use shadcn/ui components** when available for common UI elements (buttons, cards, inputs, etc.)
- **Create custom components** when shadcn/ui doesn't have what you need
- **Always use Tailwind CSS classes** for styling - no inline styles or CSS files
- **Keep components small and focused** - aim for under 100 lines per component

### Icons
- **Always use Lucide React icons** - no other icon libraries
- **Import icons individually** (e.g., `import { Star } from 'lucide-react'`)
- **Use consistent sizing** (typically w-5 h-5 or w-6 h-6 for most icons)

### Animations
- **Use Framer Motion** for all animations and transitions
- **Keep animations simple and purposeful** - avoid over-animating
- **Use viewport animations** sparingly - only for hero sections and important content

### Routing
- **Keep all routes in App.tsx** - don't create separate routing files
- **Use React Router DOM** for all navigation
- **Follow the existing route structure** (/ for Home, /obrigado for Thank You)

### State Management
- **Use React hooks** (useState, useEffect) for local state
- **Avoid complex state management libraries** unless specifically requested
- **Keep state as close to the component as possible**

### Styling Guidelines
- **Use Tailwind CSS exclusively** - no CSS modules or styled-components
- **Follow the existing color scheme** (amber, gray, white)
- **Use responsive classes** (md:, lg:, etc.) for mobile-first design
- **Maintain consistent spacing** (p-4, p-6, p-8, etc.)

### File Organization
- **Put pages in src/pages/** - Home.tsx, ThankYou.tsx
- **Put components in src/components/** - Navbar.tsx, Hero.tsx, etc.
- **Keep constants in src/constants.tsx**
- **Put types in src/types.ts**

### Performance
- **Use React.memo** for expensive components that don't change often
- **Lazy load components** when they're not immediately needed
- **Optimize images** - use appropriate formats and sizes

### Code Quality
- **Use TypeScript interfaces** for all component props
- **Write descriptive variable and function names**
- **Add JSDoc comments** for complex functions
- **Follow the existing code style and conventions**

### Dependencies
- **Only add packages that are specifically requested**
- **Check package.json before adding new dependencies**
- **Use the latest stable versions** of packages
- **Avoid adding heavy dependencies** for simple functionality