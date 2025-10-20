# Portfolio Website Design Guidelines

## Design Approach
**Reference-Based:** Drawing from Linear's minimalist precision, GitHub's developer-focused aesthetic, and Dribbble's portfolio presentation. Clean, code-inspired design that lets projects speak for themselves.

## Core Design Elements

### Color Palette
**Dark Mode Primary:**
- Background: 220 15% 8%
- Surface: 220 15% 12%
- Border: 220 10% 20%
- Text Primary: 220 10% 95%
- Text Secondary: 220 8% 70%
- Accent: 280 70% 65% (purple for CTAs and highlights)
- Tech Tag Colors: 
  - JavaScript: 50 95% 60%
  - React: 195 85% 60%
  - Node: 120 45% 55%
  - TypeScript: 210 85% 65%

### Typography
- **Headings:** Inter (700, 600 weights)
- **Body:** Inter (400, 500 weights)
- **Code Elements:** JetBrains Mono (monospace accent for tech tags)
- **Scale:** text-5xl/6xl hero, text-3xl section headers, text-xl card titles, text-sm tags

### Layout System
**Spacing:** Tailwind units of 4, 6, 8, 12, 16, 24 (e.g., p-8, gap-6, mt-16)
**Max Widths:** max-w-7xl for main container, max-w-6xl for content sections
**Grid:** grid-cols-1 md:grid-cols-2 lg:grid-cols-3 for project cards

### Component Library

**Hero Section:**
- Full-width with py-24 md:py-32
- Large heading with animated gradient text on name
- Brief bio (2-3 lines) with tech stack summary
- Subtle animated code snippet background pattern
- Primary CTA "View Projects" button (accent color)
- Social links (GitHub, LinkedIn, Email) as icon buttons

**Project Cards:**
- Dark surface (surface color) with subtle border
- Aspect ratio 16:9 media container at top
- Auto-playing GIF/video on hover (muted)
- Project title (text-xl font-semibold)
- Brief description (2 lines, text-secondary)
- Tech stack tags row (pill-shaped, small, tech-specific colors)
- "View Details" link with arrow icon
- Smooth hover: lift effect (translate-y-1) and border glow

**Tech Stack Tags:**
- Rounded-full pills with semi-transparent backgrounds
- Technology-specific colors (low opacity: bg-opacity-20)
- Icon + label format using Heroicons or Font Awesome
- Monospace font for authenticity
- Small size (px-3 py-1 text-xs)

**Project Detail View:**
- Large media showcase (video player or GIF loop)
- Project title and full description
- Challenge/Solution/Result sections
- Tech stack chips (larger than card version)
- Live demo + GitHub repo buttons
- Navigation to next/previous projects

**Navigation:**
- Sticky header with backdrop blur
- Logo/name on left
- Nav links: Projects, About, Contact
- Minimal, borderless design
- Smooth scroll behavior

**About Section:**
- Two-column layout: profile image + bio
- Skills grid with technology logos
- Timeline/experience highlights
- Download resume button

**Footer:**
- Simple, centered layout
- Social links with hover animations
- Copyright and "Built with [tech stack]" note
- Newsletter signup with inline form

### Animations
**Minimal, Purposeful:**
- Hero text fade-in on load
- Project cards stagger-appear on scroll
- Media auto-play on hover only
- Smooth page transitions
- Micro-interactions on buttons (scale on press)

### Images
**Hero:** Large code editor screenshot or abstract geometric pattern as background with overlay (low opacity)
**Project Cards:** GIF/video thumbnails of each project in action
**About Section:** Professional headshot or coding setup photo

---

**Key Principles:** Code-inspired minimalism, project-focused hierarchy, smooth performance with media optimization, dark-mode native design, developer credibility through clean execution.