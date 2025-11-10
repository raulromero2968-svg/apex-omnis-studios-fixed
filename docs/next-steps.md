# Next Steps & Prioritized Backlog

**Last Updated:** November 9, 2025  
**Current Checkpoint:** a82149c8  
**Status:** Ready to continue in fresh session

---

## 🚨 Immediate Actions (Session 1 - Foundation)

### 1. Recreate Missing Components
**Priority:** CRITICAL  
**Estimated Time:** 30 minutes

**Files to Create:**
- [ ] `/client/src/components/HowWeWorkSection.tsx`
- [ ] `/client/src/components/AIStackSection.tsx`
- [ ] `/client/src/components/FAQSection.tsx`
- [ ] `/client/src/components/ConstellationBackground.tsx`
- [ ] `/client/src/pages/Ethics.tsx`
- [ ] `/client/src/pages/FAQ.tsx`

**Code Available:** All code is documented in `/docs/patterns.md`

**Why Critical:** These were completed but lost during environment exhaustion. Need to restore to continue.

---

### 2. Integrate Components into Homepage
**Priority:** CRITICAL  
**Estimated Time:** 15 minutes

**Tasks:**
- [ ] Add imports to `Home.tsx` for HowWeWorkSection, AIStackSection, FAQSection
- [ ] Insert sections in correct order (after Projects, before Contact)
- [ ] Test layout and spacing

**Order:**
1. Hero
2. About
3. Projects
4. How We Work ← NEW
5. AI Stack ← NEW
6. FAQ ← NEW
7. Contact

---

### 3. Add Routes for New Pages
**Priority:** CRITICAL  
**Estimated Time:** 5 minutes

**Tasks:**
- [ ] Add `/ethics` route to `App.tsx`
- [ ] Add `/faq` route to `App.tsx`
- [ ] Test navigation

---

### 4. Test & Save Checkpoint
**Priority:** CRITICAL  
**Estimated Time:** 10 minutes

**Tasks:**
- [ ] Test all pages load correctly
- [ ] Check responsive design (mobile/desktop)
- [ ] Verify constellation background on all pages
- [ ] Save checkpoint with description: "Industry-standard sections added"

**Total Session 1 Time:** ~1 hour

---

## 🎨 High Priority (Session 2 - Theme Showcase)

### 5. Generate Theme Variation Images
**Priority:** HIGH  
**Estimated Time:** 1-2 hours

**What to Generate:**
For each of the 6 projects, create 4 additional theme variations:
- Light Mode version
- Cyberpunk version
- Pink version
- Professional version

**Total Images:** 24 (6 projects × 4 themes)

**File Naming:**
- `event-tracker-theme-light.png`
- `event-tracker-theme-cyberpunk.png`
- `event-tracker-theme-pink.png`
- `event-tracker-theme-professional.png`

**Why High Priority:** Core differentiator, shows customization depth

---

### 6. Add Theme Showcase Section
**Priority:** HIGH  
**Estimated Time:** 30 minutes

**Tasks:**
- [ ] Create `ThemeShowcase` component
- [ ] Add to `ProjectPage.tsx` template
- [ ] Display 5 theme variations in grid
- [ ] Add theme names and descriptions

**Layout:**
```
[Dark Mode] [Light Mode] [Cyberpunk] [Pink] [Professional]
```

---

### 7. Update All Project Pages
**Priority:** HIGH  
**Estimated Time:** 30 minutes

**Tasks:**
- [ ] Add `themeImages` prop to all 6 project pages
- [ ] Pass theme variation image paths
- [ ] Test theme showcase displays correctly

**Total Session 2 Time:** ~2-3 hours

---

## 📹 Medium Priority (Session 3 - Video Materials)

### 8. Create Video Scripts
**Priority:** MEDIUM  
**Estimated Time:** 1 hour

**Video 1: Intro to Apex Omnis (30 sec)**
```
0-5s:   Dark screen, constellation animation fades in
5-10s:  Logo reveal with "Apex Omnis Studios"
10-15s: Tagline: "Automation for Gamers, Teachers, and Creatives"
15-25s: Quick glimpse of all 6 tools (4s each)
25-30s: "Intelligence, Impact, Imagination" + CTA
```

**Video 2: Tool Showcase (30 sec)**
```
0-5s:   Hook: "Your tools, your style"
5-20s:  Rapid cuts showing theme switching (dark→light→cyberpunk)
20-25s: Key metrics flash (847 events, $50K, 15 hours saved)
25-30s: CTA: "Get in Touch"
```

**Deliverables:**
- [ ] Full scripts with timing
- [ ] Storyboard sketches
- [ ] Asset list (what images/clips needed)
- [ ] Voiceover script (if using narration)

---

### 9. Prepare Video Assets
**Priority:** MEDIUM  
**Estimated Time:** 1 hour

**Tasks:**
- [ ] Export high-res screenshots of all dashboards
- [ ] Create screen recordings of theme switching
- [ ] Prepare logo animations
- [ ] Organize in `/video-assets` folder

---

### 10. Record Video Demos
**Priority:** MEDIUM  
**Estimated Time:** 2-3 hours

**Note:** User will do this with Grok Imagine when home

**Support Needed:**
- Provide handoff materials
- Ensure all assets are ready
- Be available for questions

**Total Session 3 Time:** ~4-5 hours

---

## 📝 Lower Priority (Session 4 - Content Expansion)

### 11. Expand Ethics Page
**Priority:** LOW  
**Estimated Time:** 30 minutes

**Current:** Basic ethics statement  
**Goal:** Comprehensive community principles

**Sections to Add:**
- [ ] Our Commitment to Collectors
- [ ] Anti-Scalper Policy Details
- [ ] Community Guidelines
- [ ] Transparency Principles
- [ ] Contact for Ethics Questions

---

### 12. Create Notion Database Template
**Priority:** LOW  
**Estimated Time:** 1 hour

**Purpose:** Manage hero images across projects

**Fields:**
- Project Name
- Hero Image (file upload)
- Theme Variations (gallery)
- Last Updated
- Status (Draft/Published)
- Notes

**Deliverable:** Shareable Notion template link

---

### 13. Add "Get Started" Section
**Priority:** LOW  
**Estimated Time:** 30 minutes

**Location:** Homepage, after FAQ, before Contact

**Content:**
- Clear CTA: "Ready to automate your workflow?"
- Three-step process: Contact → Consult → Build
- Pricing indication (if decided)

---

### 14. Create Case Study Template
**Priority:** LOW  
**Estimated Time:** 1 hour

**Purpose:** Framework for future case studies

**Structure:**
- Client background (anonymized)
- Challenge
- Solution
- Results (metrics)
- Testimonial

**Deliverable:** Markdown template file

**Total Session 4 Time:** ~3 hours

---

## 🚀 Future Enhancements (Backlog)

### Content
- [ ] Add real testimonials when available
- [ ] Write detailed case studies
- [ ] Create blog/resources section
- [ ] Add "Team" or "About Us" page

### Features
- [ ] Add pricing page
- [ ] Create client portal mockup
- [ ] Build demo/sandbox for tools
- [ ] Add newsletter signup

### Marketing
- [ ] SEO optimization
- [ ] Social media preview cards
- [ ] Press kit
- [ ] Partner showcase (LAN Hero, etc.)

### Technical
- [ ] Performance audit
- [ ] Accessibility audit
- [ ] Analytics integration
- [ ] A/B testing setup

---

## 📊 Progress Tracking

### Completed ✓
- [x] 6 complete projects (Gaming, Education, Creative)
- [x] Grid portfolio layout
- [x] Constellation backgrounds
- [x] Theme switchers in hero images
- [x] Condensed sections
- [x] Anti-scalper ethics statement
- [x] Content calendar template
- [x] All project pages with full details

### In Progress 🔄
- [ ] Industry-standard sections (How We Work, AI Stack, FAQ)
- [ ] Theme variation showcases
- [ ] Video materials

### Not Started ⏳
- [ ] Real testimonials
- [ ] Case studies
- [ ] Pricing page
- [ ] Blog/resources

---

## 🎯 Success Metrics

### Short Term (1-2 weeks)
- [ ] All immediate actions completed
- [ ] Theme showcases live on all projects
- [ ] Video materials ready for production
- [ ] Fresh checkpoint saved

### Medium Term (1 month)
- [ ] First video published
- [ ] Ethics page expanded
- [ ] Notion database in use
- [ ] At least 1 inquiry from website

### Long Term (3 months)
- [ ] First paying client
- [ ] Real testimonial added
- [ ] Case study published
- [ ] Video views > 1000

---

## 💡 Ideas to Explore

### Potential Features
- Interactive demo of theme switching
- Live chat integration
- Client dashboard preview
- Tool comparison matrix

### Content Ideas
- "How We Built This" blog series
- Behind-the-scenes development process
- AI stack deep-dive articles
- Community spotlight features

### Partnership Opportunities
- LAN Hero collaboration
- TCG community partnerships
- Education technology conferences
- Local business showcases

---

## 🔄 Maintenance Schedule

### Weekly
- [ ] Check for broken links
- [ ] Review contact form submissions
- [ ] Update todo.md with new tasks

### Monthly
- [ ] Review and update metrics
- [ ] Check for outdated content
- [ ] Update project screenshots if tools evolved
- [ ] Backup all assets

### Quarterly
- [ ] Full content audit
- [ ] Design refresh check
- [ ] Performance optimization
- [ ] Competitor analysis

---

## 📌 Quick Reference

**Current Checkpoint:** a82149c8  
**Next Checkpoint Goal:** Industry-standard sections integrated  
**Estimated Time to Next Checkpoint:** 1 hour  

**Priority Order:**
1. Recreate missing components (CRITICAL)
2. Theme showcases (HIGH)
3. Video materials (MEDIUM)
4. Content expansion (LOW)

**Blockers:** None - fresh session will resolve environment issues

**Dependencies:** All code documented in `/docs/patterns.md`

---

**Update this document as you complete tasks and discover new priorities.**
