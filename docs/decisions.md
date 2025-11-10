# Design Decisions & Patterns

**Last Updated:** November 9, 2025  
**Project:** Apex Omnis Studios

---

## Visual Design Decisions

### Color Palette
**Primary Colors:**
- Cyan: `#00D9FF` - Technology, intelligence, clarity
- Purple: `#7B2CBF` - Creativity, imagination, premium

**Usage:**
- Gradients for headings and CTAs
- Accent colors for interactive elements
- Never use red/green together (looks like errors)

**Decision Rationale:**
Cyberpunk aesthetic conveys intelligence and futurism while remaining professional.

---

### Typography
**Approach:** System fonts for performance  
**Hierarchy:**
- H1: 3xl-4xl, gradient text
- H2: 2xl-3xl, gradient text
- Body: lg, muted-foreground
- Small text: sm, muted-foreground

**Decision Rationale:**
Clear hierarchy without custom font loading delays.

---

### Layout Patterns

#### Homepage Structure
```
1. Hero (with animated logo)
2. About (3 paragraphs max)
3. Projects (grid, 3 categories)
4. How We Work (horizontal 5-step)
5. AI Stack (subtle showcase)
6. FAQ (5 questions, link to full page)
7. Contact Form
```

**Decision Rationale:**
Flow from "who we are" → "what we build" → "how we work" → "get in touch"

#### Project Page Structure
```
1. Hero (with theme switcher visible)
2. Overview
3. Scale Metrics (horizontal cards)
4. Key Features (grid)
5. Transformation (before/after, 2 columns)
6. System Architecture (collapsible accordion)
7. Results (compact list with icons)
8. Gallery (2 images)
9. Ethics Note (if applicable)
10. CTA
```

**Decision Rationale:**
Lead with impact (hero + scale), then dive into details for serious prospects.

---

### Animation Decisions

#### Constellation Background
**What:** Animated stars with connecting lines  
**Where:** All pages  
**Why:** Reinforces "intelligence" theme, adds depth without distraction

**Parameters:**
- 100 stars
- 150px connection distance
- Subtle cyan lines (15% opacity)
- Slow movement (0.2 velocity)

**Decision Rationale:**
Consistent brand element that doesn't compete with content.

#### Scroll Animations
**Pattern:** `framer-motion` with `whileInView`  
**Timing:** 0.5s duration, staggered by 0.1s  
**Viewport:** `once: true, margin: "-100px"`

**Decision Rationale:**
Subtle reveals without annoying repeat animations.

---

## Component Patterns

### Card Design
**Standard Pattern:**
```tsx
<div className="border border-border/50 bg-card/30 backdrop-blur 
                hover:bg-card/50 transition-colors rounded-lg p-6">
  {content}
</div>
```

**Decision Rationale:**
Glass-morphism effect with subtle hover states.

### Button Hierarchy
1. **Primary:** Gradient background, white text
2. **Secondary:** Border only, transparent background
3. **Ghost:** No border, hover background only

**Decision Rationale:**
Clear visual hierarchy for CTAs.

### Icon Usage
**Library:** `lucide-react`  
**Size:** Consistent 20-24px  
**Color:** Match text color or use gradient

**Decision Rationale:**
Lightweight, consistent icon system.

---

## Content Decisions

### Tagline Evolution
1. ~~"Automation for TCG Collectors"~~ (too narrow)
2. ~~"Automation for Collectors, Educators, and Entrepreneurs"~~ (awkward list)
3. **"Automation for Gamers, Teachers, and Creatives"** ✓ (clear, parallel)

**Decision Rationale:**
Parallel structure, clear audiences, not generic.

### About Section Length
**Rule:** 3 paragraphs maximum on homepage  
**Structure:**
1. Who you are (background)
2. What you build (offerings)
3. Why it matters (ethics/values)

**Link:** "Learn more about our ethics →" to dedicated page

**Decision Rationale:**
Scannable homepage, depth available for interested visitors.

### FAQ Strategy
**Homepage:** 5 most urgent questions  
**Dedicated Page:** 12+ questions organized by category

**Categories:**
- Getting Started
- Technical Details
- Pricing & Process
- Ethics & Values

**Decision Rationale:**
Address deal-breakers immediately, provide comprehensive answers for serious prospects.

---

## Technical Decisions

### Theme System
**Approach:** CSS variables + theme provider  
**Themes:** Dark (default), Light, Cyberpunk, Pink, Professional

**Implementation:**
- Theme switcher visible in hero images
- Separate showcase section on project pages
- NOT just dark/light toggle - full customization

**Decision Rationale:**
Differentiation from competitors, shows depth of customization capability.

### Image Strategy
**Hero Images:**
- Show dashboard UI with theme switcher visible
- NO device mockups (trademark issues)
- High resolution (1920x1080+)
- Realistic lighting and depth

**Gallery Images:**
- System architecture diagrams
- Workflow visualizations
- Before/after comparisons

**Decision Rationale:**
Professional without legal risk, clearly shows product in use.

### File Naming Convention
**Pattern:** `{project-slug}-{type}-{version}.png`  
**Examples:**
- `event-tracker-hero-themes.png`
- `tcg-portfolio-gallery-1-v1.png`

**Decision Rationale:**
Clear, sortable, version-trackable.

---

## UX Decisions

### Portfolio Display
**Evolution:**
1. ~~Long vertical scroll~~ (too much scrolling)
2. ~~Carousel~~ (wonky, hard to navigate)
3. **Grid with categories** ✓ (clear, scannable)

**Layout:** 3 sections (Gaming, Education, Creative) with 2 projects each

**Decision Rationale:**
Reinforces three-audience positioning, easy to scan.

### Navigation
**Pattern:** Sticky nav with logo + links  
**Links:** Home, Projects, About, Ethics, FAQ, Contact

**Mobile:** Hamburger menu

**Decision Rationale:**
Always accessible, clear hierarchy.

### Scroll Depth
**Rule:** No section should require more than 1 full scroll  
**Exception:** Dedicated pages (Ethics, FAQ) can be longer

**Decision Rationale:**
Respect user attention, provide depth on demand.

---

## Content Tone Decisions

### Voice
**Style:** Professional but not corporate  
**Approach:** Direct, honest, data-driven  
**Avoid:** Jargon, hype, fake enthusiasm

**Examples:**
- ✓ "We build automation systems for communities we understand"
- ✗ "Revolutionizing the future of AI-powered solutions"

**Decision Rationale:**
Authenticity builds trust with target audiences.

### Metrics Presentation
**Pattern:** Specific numbers, not ranges  
**Examples:**
- "847 events tracked" (not "800+ events")
- "$50K portfolio value" (not "up to $50K")
- "15 hours saved weekly" (not "save time")

**Decision Rationale:**
Specificity conveys reality, not marketing fluff.

---

## Accessibility Decisions

### Color Contrast
**Standard:** WCAG AA minimum  
**Text on background:** Always test with contrast checker  
**Interactive elements:** Visible focus states

**Decision Rationale:**
Professional sites are accessible sites.

### Keyboard Navigation
**Pattern:** All interactive elements keyboard-accessible  
**Focus indicators:** Visible ring on focus  
**Skip links:** Available for screen readers

**Decision Rationale:**
Inclusive design is good design.

---

## Performance Decisions

### Image Optimization
**Format:** PNG for dashboards, WebP where supported  
**Loading:** Lazy load below fold  
**Sizing:** Responsive with srcset

**Decision Rationale:**
Fast load times without sacrificing quality.

### Animation Performance
**Approach:** CSS transforms and opacity only  
**Avoid:** Layout thrashing, heavy JS animations  
**Fallback:** Reduced motion media query

**Decision Rationale:**
Smooth 60fps on all devices.

---

## Mistakes to Avoid (Learned)

### ❌ Too Many Colored Boxes
**Problem:** Looks cheap, cluttered  
**Solution:** Subtle borders, glass-morphism, horizontal layouts

### ❌ Red/Green Before/After
**Problem:** Looks like error messages  
**Solution:** Neutral colors with checkmark/X icons

### ❌ Fake Testimonials
**Problem:** Looks like Kickstarter, damages credibility  
**Solution:** Metrics only until real testimonials available

### ❌ Long Scrolling Sections
**Problem:** Loses user attention  
**Solution:** Condense, link to dedicated pages

### ❌ Generic "Our Process" Boxes
**Problem:** Boring, forgettable  
**Solution:** Horizontal layout with visual mockups (Nebula-inspired)

---

## Patterns That Work

### ✓ Horizontal Process Flows
**Why:** Natural reading direction, feels modern  
**Example:** How We Work section (5 steps with connector lines)

### ✓ Collapsible Complexity
**Why:** Shows depth without overwhelming  
**Example:** System Architecture accordion

### ✓ Specific Scale Metrics
**Why:** IP protection, credibility  
**Example:** "847 events tracked across 23 cities"

### ✓ Theme Switcher in Hero
**Why:** Shows customization immediately  
**Example:** Dropdown visible in all hero images

### ✓ Constellation Background
**Why:** Brand consistency, depth  
**Example:** All pages have same animated background

---

**Update this document when you discover new patterns or make new decisions.**
