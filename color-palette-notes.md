# Apex Omnis Studios Color Palette System

## Target Colors (from apexcommons.org screenshot)

### Primary Cyan/Blue
- **Apex Commons Blue**: `#00D9FF` (bright cyan used in "For the Public Good" text)
- Alternative: `#00F5FF` (electric cyan)
- Usage: Primary actions, links, highlights, main brand color

### Secondary Purple
- **Consistent Purple**: `#7B2CBF` (NOT pink/magenta)
- Usage: Secondary emphasis, accents, hover states

### Supporting Colors
- **Deep Black Background**: `#0A0A0A`
- **Charcoal Gray**: `#1A1A1A` (cards, surfaces)
- **Pure White Text**: `#FFFFFF`

## Current Issues

1. **Inconsistent Blues**: Some elements use different shades of blue/cyan
2. **Pink vs Purple**: Mixing `#FF1493` (pink/magenta) with `#7B2CBF` (purple)
3. **No CSS Variable System**: Colors are hardcoded throughout components

## Solution

Create CSS custom properties (variables) in `index.css`:

```css
:root {
  --apex-cyan: #00D9FF;
  --apex-purple: #7B2CBF;
  --apex-black: #0A0A0A;
  --apex-gray: #1A1A1A;
  --apex-white: #FFFFFF;
}
```

Then replace ALL hardcoded colors with `var(--apex-cyan)`, etc.

## Files to Audit

- [ ] client/src/index.css
- [ ] client/src/pages/Home.tsx
- [ ] client/src/components/AnimatedButton.tsx
- [ ] client/src/components/AnimatedIconBox.tsx
- [ ] client/src/components/StickyNav.tsx
- [ ] client/src/components/ProjectsSection.tsx
- [ ] client/src/components/InteractiveWolfLogo.tsx
