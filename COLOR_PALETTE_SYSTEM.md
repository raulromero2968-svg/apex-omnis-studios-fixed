# Apex Omnis Studios - Color Palette System

## Overview

This document defines the standardized color palette for Apex Omnis Studios. The palette is designed to be **modular and swappable**, allowing for industry-specific theme variations while maintaining brand consistency.

## Brand Colors

### Primary: Apex Cyan
- **Hex**: `#00D9FF`
- **RGB**: `rgb(0, 217, 255)`
- **RGBA (with opacity)**: `rgba(0, 217, 255, [opacity])`
- **Usage**: Primary actions, links, highlights, main brand color, constellation background, holographic effects

### Secondary: Apex Purple
- **Hex**: `#7B2CBF`
- **RGB**: `rgb(123, 44, 191)`
- **RGBA (with opacity)**: `rgba(123, 44, 191, [opacity])`
- **Usage**: Secondary emphasis, accents, hover states, gradient endpoints

### Supporting Colors
- **Deep Black**: `#0A0A0A` - Primary background
- **Charcoal Gray**: `#1A1A1A` - Cards and surfaces
- **Pure White**: `#FFFFFF` - Primary text

## CSS Variable System

The color system is defined in `client/src/index.css` under the `.dark` theme:

```css
.dark {
  /* === APEX BRAND COLORS === */
  --apex-cyan: #00D9FF;        /* Primary cyan from Apex Commons */
  --apex-purple: #7B2CBF;      /* Consistent purple (NOT pink/magenta) */
  --apex-black: #0A0A0A;       /* Deep black background */
  --apex-gray: #1A1A1A;        /* Charcoal gray for cards/surfaces */
  --apex-white: #FFFFFF;       /* Pure white text */
}
```

## Color Applications

### Gradients
All gradients use combinations of cyan and purple:

```css
/* Text gradients */
bg-gradient-to-r from-cyan-400 to-purple-600

/* Button gradients */
bg-gradient-to-r from-cyan-500 to-blue-600

/* Holographic effects */
linear-gradient(135deg, #00D9FF 0%, #7B2CBF 100%)
```

### Shadows & Glows
All shadows and glows use Apex cyan and purple:

```css
/* Cyan glow */
box-shadow: 0 0 20px rgba(0, 217, 255, 0.5)

/* Purple glow */
box-shadow: 0 0 40px rgba(123, 44, 191, 0.3)

/* Combined holographic glow */
box-shadow: 0 0 20px rgba(0, 217, 255, 0.5), 0 0 40px rgba(123, 44, 191, 0.3)
```

### Animations
All animated elements use consistent colors:

```css
/* Shimmer effect */
background: linear-gradient(
  90deg,
  transparent 0%,
  rgba(0, 217, 255, 0.3) 50%,
  transparent 100%
)

/* Glow pulse */
@keyframes glow-pulse {
  0%, 100% {
    box-shadow: 0 0 20px rgba(0, 217, 255, 0.5), 0 0 40px rgba(123, 44, 191, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(0, 217, 255, 0.8), 0 0 60px rgba(123, 44, 191, 0.5);
  }
}
```

## Industry-Specific Theme Swapping

The CSS variable system enables easy palette swapping for different industries:

### Education Theme (Example)
```css
.theme-education {
  --apex-cyan: #4A90E2;        /* Calming blue */
  --apex-purple: #7B68EE;      /* Trustworthy purple */
}
```

### Finance Theme (Example)
```css
.theme-finance {
  --apex-cyan: #00C9A7;        /* Professional teal */
  --apex-purple: #6B46C1;      /* Authoritative purple */
}
```

### Tech Theme (Example)
```css
.theme-tech {
  --apex-cyan: #00F5FF;        /* Electric cyan */
  --apex-purple: #9D4EDD;      /* Vibrant purple */
}
```

## Implementation Guidelines

### DO:
✅ Use CSS variables for all brand colors  
✅ Maintain cyan as primary, purple as secondary  
✅ Use consistent opacity values across similar elements  
✅ Test color contrast for accessibility  
✅ Document any new color applications  

### DON'T:
❌ Mix pink/magenta with purple (use ONE consistent purple)  
❌ Use multiple shades of cyan without documentation  
❌ Hardcode color values (use variables instead)  
❌ Create gradients that don't include brand colors  
❌ Use colors that clash with the cyberpunk aesthetic  

## Files Using Color System

### Core Styles
- `client/src/index.css` - CSS variables, animations, global styles

### Components
- `client/src/components/AnimatedButton.tsx` - Button gradients, glow effects
- `client/src/components/AnimatedIconBox.tsx` - Icon hover shadows
- `client/src/components/InteractiveWolfLogo.tsx` - Logo drop-shadows
- `client/src/components/StickyNav.tsx` - Navigation gradients
- `client/src/components/ProjectsSection.tsx` - Project card gradients

### Pages
- `client/src/pages/Home.tsx` - Constellation background, gradient orbs, decorative elements, section headers

## Color Psychology

### Cyan (#00D9FF)
- **Associations**: Technology, innovation, clarity, intelligence
- **Effect**: Creates sense of cutting-edge expertise and digital mastery
- **Use**: Primary actions, main brand identity, trust signals

### Purple (#7B2CBF)
- **Associations**: Creativity, wisdom, luxury, transformation
- **Effect**: Balances tech-forward cyan with human creativity
- **Use**: Secondary emphasis, creative services, premium offerings

### Combined Effect
The cyan-purple combination creates a **"cyberpunk intelligentsia"** aesthetic that positions Apex Omnis Studios as both technically sophisticated and creatively intelligent—perfect for collectors, educators, and entrepreneurs who want to maintain control while leveraging AI.

## Accessibility Notes

- All text maintains WCAG AA contrast ratios against dark backgrounds
- Glow effects are decorative and don't convey critical information
- Color is never the sole indicator of interactive elements
- Animations respect `prefers-reduced-motion` settings

## Version History

- **v1.0** (Current): Standardized to Apex Commons cyan (#00D9FF) and consistent purple (#7B2CBF)
- **v0.9**: Initial color system with mixed blues and pink/purple variations

## Future Enhancements

1. **Theme Switcher Component**: Allow users to preview industry-specific themes
2. **Color Picker Tool**: Generate custom palettes while maintaining brand consistency
3. **Dark/Light Mode**: Adapt colors for light theme variant
4. **Accessibility Checker**: Automated contrast ratio validation
5. **Brand Guidelines**: Expand to include typography, spacing, and component patterns

---

**Last Updated**: November 2025  
**Maintained By**: Apex Omnis Studios Development Team
