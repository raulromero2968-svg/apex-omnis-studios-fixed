# Code Patterns & Reusable Snippets

**Last Updated:** November 9, 2025  
**Project:** Apex Omnis Studios

---

## Component Architecture

### Project Page Template
**File:** `client/src/components/ProjectPage.tsx`

**Props Interface:**
```typescript
interface ProjectPageProps {
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  category: string;
  scaleMetrics: Array<{ label: string; value: string; icon: LucideIcon }>;
  features: Array<{ title: string; description: string; icon: LucideIcon }>;
  transformation: {
    before: Array<{ text: string }>;
    after: Array<{ text: string }>;
  };
  systemArchitecture: Array<{ category: string; tools: Array<{ name: string; purpose: string }> }>;
  results: Array<{ text: string }>;
  gallery: string[];
  ethicsNote?: string;
}
```

**Usage Pattern:**
```tsx
<ProjectPage
  title="Event Tracker Pro"
  tagline="Never miss a tournament or release"
  // ... other props
/>
```

---

## Animation Patterns

### Scroll Reveal Animation
```tsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true, margin: "-100px" }}
>
  {content}
</motion.div>
```

### Staggered List Animation
```tsx
{items.map((item, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
  >
    {item}
  </motion.div>
))}
```

---

## Styling Patterns

### Glass-Morphism Card
```tsx
<div className="border border-border/50 bg-card/30 backdrop-blur 
                hover:bg-card/50 transition-colors rounded-lg p-6">
  {content}
</div>
```

### Gradient Text
```tsx
<h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 
               bg-clip-text text-transparent">
  Heading Text
</h2>
```

### Gradient Button
```tsx
<button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 
                   text-white rounded-lg hover:opacity-90 transition-opacity">
  Click Me
</button>
```

### Horizontal Metric Cards
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {metrics.map((metric, index) => (
    <div key={index} className="flex items-center gap-4 p-4 rounded-lg 
                                 border border-border/50 bg-card/20">
      <metric.icon className="w-8 h-8 text-cyan-400" />
      <div>
        <div className="text-2xl font-bold text-foreground">{metric.value}</div>
        <div className="text-sm text-muted-foreground">{metric.label}</div>
      </div>
    </div>
  ))}
</div>
```

---

## Constellation Background

### Implementation
```tsx
import { useEffect, useRef } from "react";

export function ConstellationBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = document.documentElement.scrollHeight;

    const stars: Array<{ x: number; y: number; radius: number; vx: number; vy: number }> = [];
    const starCount = 100;

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0 || star.x > canvas.width) star.vx *= -1;
        if (star.y < 0 || star.y > canvas.height) star.vy *= -1;
      });

      // Draw connections
      ctx.strokeStyle = 'rgba(0, 217, 255, 0.15)';
      ctx.lineWidth = 0.5;
      stars.forEach((star, i) => {
        stars.slice(i + 1).forEach(otherStar => {
          const dx = star.x - otherStar.x;
          const dy = star.y - otherStar.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(otherStar.x, otherStar.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
```

---

## Section Patterns

### How We Work (Horizontal Steps)
```tsx
const steps = [
  { number: "01", title: "Discovery", description: "..." },
  { number: "02", title: "Strategy", description: "..." },
  // ... more steps
];

<div className="grid grid-cols-1 md:grid-cols-5 gap-6">
  {steps.map((step, index) => (
    <div key={index} className="relative">
      <div className="flex flex-col items-center text-center space-y-4 p-6 
                      rounded-lg border border-border/50 bg-card/30 backdrop-blur">
        <div className="text-4xl font-bold bg-gradient-to-br from-cyan-400 to-purple-600 
                        bg-clip-text text-transparent">
          {step.number}
        </div>
        <h3 className="text-xl font-semibold">{step.title}</h3>
        <p className="text-sm text-muted-foreground">{step.description}</p>
      </div>
      
      {/* Connector line */}
      {index < steps.length - 1 && (
        <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 
                        bg-gradient-to-r from-cyan-400/50 to-purple-600/50" />
      )}
    </div>
  ))}
</div>
```

### AI Stack (Subtle Showcase)
```tsx
const aiTools = [
  { name: "Manus", role: "Web development & automation", icon: Cpu },
  { name: "Claude", role: "Deep research & analysis", icon: BookOpen },
  // ... more tools
];

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
  {aiTools.map((tool, index) => (
    <div key={index} className="flex flex-col items-center text-center space-y-2">
      <tool.icon className="w-8 h-8 text-cyan-400" />
      <div className="font-semibold text-sm">{tool.name}</div>
      <div className="text-xs text-muted-foreground">{tool.role}</div>
    </div>
  ))}
</div>
```

### FAQ (Collapsible)
```tsx
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { question: "...", answer: "..." },
  // ... more FAQs
];

<Accordion type="single" collapsible className="space-y-4">
  {faqs.map((faq, index) => (
    <AccordionItem key={index} value={`item-${index}`}>
      <AccordionTrigger className="text-left">
        {faq.question}
      </AccordionTrigger>
      <AccordionContent className="text-muted-foreground">
        {faq.answer}
      </AccordionContent>
    </AccordionItem>
  ))}
</Accordion>
```

---

## Icon Usage Patterns

### With Gradient
```tsx
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 
                flex items-center justify-center">
  <Icon className="w-6 h-6 text-white" />
</div>
```

### With Background
```tsx
<div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center">
  <Icon className="w-6 h-6 text-cyan-400" />
</div>
```

---

## Before/After Pattern

```tsx
<div className="grid md:grid-cols-2 gap-8">
  {/* Before */}
  <div className="space-y-4">
    <h3 className="text-xl font-semibold flex items-center gap-2">
      <X className="w-5 h-5 text-muted-foreground" />
      Before
    </h3>
    <ul className="space-y-3">
      {transformation.before.map((item, index) => (
        <li key={index} className="flex items-start gap-3 text-muted-foreground">
          <X className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
  </div>

  {/* After */}
  <div className="space-y-4">
    <h3 className="text-xl font-semibold flex items-center gap-2">
      <Check className="w-5 h-5 text-cyan-400" />
      After
    </h3>
    <ul className="space-y-3">
      {transformation.after.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
  </div>
</div>
```

---

## System Architecture Pattern

```tsx
<Accordion type="single" collapsible className="space-y-4">
  {systemArchitecture.map((category, catIndex) => (
    <AccordionItem key={catIndex} value={`category-${catIndex}`}>
      <AccordionTrigger className="text-lg font-semibold">
        {category.category}
      </AccordionTrigger>
      <AccordionContent>
        <div className="space-y-3 pt-2">
          {category.tools.map((tool, toolIndex) => (
            <div key={toolIndex} className="flex items-start gap-3 p-3 rounded-lg 
                                            border border-border/30 bg-card/10">
              <ExternalLink className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-medium text-foreground">{tool.name}</div>
                <div className="text-sm text-muted-foreground">{tool.purpose}</div>
              </div>
            </div>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  ))}
</Accordion>
```

---

## Responsive Patterns

### Mobile-First Grid
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map(item => <Card key={item.id}>{item.content}</Card>)}
</div>
```

### Conditional Mobile Menu
```tsx
const [isOpen, setIsOpen] = useState(false);

<div className="md:hidden">
  <button onClick={() => setIsOpen(!isOpen)}>
    {isOpen ? <X /> : <Menu />}
  </button>
</div>

<nav className={`md:flex ${isOpen ? 'block' : 'hidden'}`}>
  {/* Navigation items */}
</nav>
```

---

## Form Patterns

### Contact Form with Validation
```tsx
const [formData, setFormData] = useState({ name: '', email: '', message: '' });
const [errors, setErrors] = useState({});

const validate = () => {
  const newErrors = {};
  if (!formData.name) newErrors.name = 'Name is required';
  if (!formData.email) newErrors.email = 'Email is required';
  if (!formData.message) newErrors.message = 'Message is required';
  return newErrors;
};

const handleSubmit = (e) => {
  e.preventDefault();
  const newErrors = validate();
  if (Object.keys(newErrors).length === 0) {
    // Submit form
  } else {
    setErrors(newErrors);
  }
};
```

---

## Performance Patterns

### Lazy Load Images
```tsx
<img 
  src={imageSrc} 
  alt={altText}
  loading="lazy"
  className="w-full h-auto"
/>
```

### Debounced Search
```tsx
import { useState, useEffect } from 'react';

const [searchTerm, setSearchTerm] = useState('');
const [debouncedTerm, setDebouncedTerm] = useState('');

useEffect(() => {
  const timer = setTimeout(() => {
    setDebouncedTerm(searchTerm);
  }, 500);

  return () => clearTimeout(timer);
}, [searchTerm]);

useEffect(() => {
  if (debouncedTerm) {
    // Perform search
  }
}, [debouncedTerm]);
```

---

## Utility Functions

### Class Name Merger
```tsx
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### Scroll to Top
```tsx
export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
```

---

**Add new patterns as you discover them. Keep this as your code reference library.**
