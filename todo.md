# Apex Omnis Studios - Project TODO

## Simplified Portfolio Structure - 6 Projects Total

### Tagline Update
- [x] Change tagline to "Automation for Gamers, Teachers, and Creatives"
- [ ] Update About section to explain all three audiences

### Gaming Tools (2 projects - COMPLETE)
- [x] Event Tracker Pro - with complexity indicators, before/after, testimonial
- [x] TCG Portfolio Dashboard - with complexity indicators, before/after, testimonial
- [x] Generate all images for gaming tools

### Education Tools (2 projects)
- [x] Classroom Automation Hub - created with full complexity indicators
- [x] AI Lesson Plan Generator - created with full complexity indicators
- [x] Delete Student Progress Dashboard (too complex, permission issues)
- [x] Generate hero image for Classroom Automation Hub
- [x] Generate gallery images for Classroom Automation Hub (2 images)
- [x] Generate hero image for AI Lesson Plan Generator
- [x] Generate gallery images for AI Lesson Plan Generator (2 images)

### Creative Tools (2 projects - NEW)
- [x] Create ProjectIdeaOrganizer.tsx - AI assistant for organizing scattered ideas
- [x] Create QuickLaunchWebsite.tsx - Turn concepts into live websites in 24 hours
- [x] Add complexity indicators, before/after, testimonials to both
- [x] Generate hero image for Project Idea Organizer
- [x] Generate gallery images for Project Idea Organizer (2 images)
- [x] Generate hero image for Quick Launch Website
- [x] Generate gallery images for Quick Launch Website (2 images)

### Homepage Updates
- [x] Create 3 separate sections: "Gaming Tools," "Education Tools," "Creative Tools"
- [x] Update ProjectsSection.tsx to show 6 projects in 3 categories
- [x] Add category headers and descriptions

### Routing & Integration
- [x] Add routes for ClassroomAutomation.tsx
- [x] Add routes for LessonPlanGenerator.tsx
- [x] Add routes for ProjectIdeaOrganizer.tsx
- [x] Add routes for QuickLaunchWebsite.tsx

### Gaming Projects - Add Missing Complexity Indicators
- [x] Update TCG Portfolio Dashboard with complexity indicators
- [x] Update AI Content Pipeline with complexity indicators

### Testing & Deployment
- [x] Test all 6 project pages load correctly
- [x] Verify all images display properly
- [x] Check complexity indicators are impressive on all projects
- [ ] Save checkpoint with complete 6-project portfolio

### Apex Commons Progress Reports (separate task)
- [ ] Create November 2025 progress report
- [ ] Add progress reports section to apexcommons.org

## Recreate Missing Components (CRITICAL - Current Session)

### Component Files Lost During Environment Exhaustion
- [ ] Recreate ConstellationBackground.tsx
- [ ] Recreate HowWeWorkSection.tsx
- [ ] Recreate AIStackSection.tsx
- [ ] Recreate FAQSection.tsx
- [ ] Recreate Ethics.tsx page
- [ ] Recreate FAQ.tsx page

### Integration
- [ ] Integrate new sections into Home.tsx
- [ ] Add routes for Ethics and FAQ pages in App.tsx
- [ ] Test all components render correctly

### Documentation
- [ ] Mark tasks complete in todo.md
- [ ] Update next-steps.md with progress
- [ ] Prepare handoff for next development phase

## Follow-up Tasks (Current Session)

- [x] Update contact form to use Make.com webhook (better for complex routing)
- [ ] Get Make.com webhook URL from user and add to secrets
- [x] Generate 30 theme showcase images (5 themes × 6 projects)
- [x] Expand Ethics page with detailed community principles and anti-scalper safeguards
- [x] Test all changes and verify functionality (TypeScript: 0 errors)
- [x] Save final checkpoint with all follow-up tasks complete (version: 8470f9af)

## Services Page - Premium Custom Builds (Current Session)

- [x] Create Services.tsx page with ethical positioning
- [x] Add vetting process section (application-based, not open to everyone)
- [x] Add done-with-you approach explanation
- [x] Add ethical requirements and red flags
- [x] Add premium pricing positioning
- [x] Add route for /services
- [x] Update navigation to include Services link
- [x] Test and save checkpoint (TypeScript: 0 errors)

## Client Application Form (Current Session)

- [x] Update Services page to position early clients as opportunity
- [x] Remove case study/testimonial language
- [x] Create multi-step ClientApplicationForm component
- [x] Add form steps: Business Info, Challenges & Goals, Community & Ethics, Budget & Timeline
- [x] Add form validation and progress indicator
- [x] Integrate form into Services page
- [x] Connect form to Make.com webhook for submissions (uses VITE_MAKE_WEBHOOK_URL)
- [x] Test and save checkpoint (TypeScript: 0 errors)

## What Happens Next Section (Current Session)

- [x] Add "What Happens Next" section below application form
- [x] Explain review process and timeline
- [x] Set expectations for applicants
- [x] Test and save checkpoint (TypeScript: 0 errors)

## File Upload Feature (Current Session)

- [x] Add file upload field to Step 1 of ClientApplicationForm
- [x] Implement file validation (type, size limits)
- [x] Convert uploaded files to base64 for webhook transmission
- [x] Update form submission to include file data
- [x] Add file upload UI with drag-and-drop support
- [x] Test and save checkpoint (TypeScript: 0 errors)

## File Upload Enhancements (Current Session)

- [x] Add file type icons (PDF, Word, PowerPoint, Image)
- [x] Implement multiple file upload (up to 3 files)
- [x] Update UI to show multiple file previews
- [x] Update form submission to handle multiple files
- [x] Create Make.com file handling documentation
- [x] Test and save checkpoint (TypeScript: 0 errors)

## File Upload UX Enhancements (Current Session)

- [x] Add drag-and-drop handlers (onDrop, onDragOver, onDragLeave)
- [x] Add visual feedback for drag state
- [x] Create file preview modal component
- [x] Add PDF preview support
- [x] Add image preview support
- [x] Add upload progress indicators for large files
- [x] Test and save checkpoint (TypeScript: 0 errors)

## File Upload Polish Features (Current Session)

- [x] Add file size warnings for files 8-10MB
- [x] Add "Remove All" bulk delete button (when 2+ files)
- [x] Add compression hints below upload zone
- [x] Add links to free compression tools (TinyPNG, iLovePDF, WeCompress)
- [x] Test and save checkpoint (TypeScript: 0 errors)

## Applicant Experience Enhancements (Current Session)

- [x] Implement form auto-save with localStorage (30-second intervals)
- [x] Add form restore on page load
- [x] Add "Draft restored" notification
- [x] Create ApplicationStatus.tsx page
- [x] Add email + confirmation code lookup
- [x] Add route for /application-status
- [x] Add estimated review time to What Happens Next section
- [x] Test and save checkpoint (TypeScript: 0 errors)

## Applicant Workflow Completion (Current Session)

- [x] Add "Clear Draft" button to application form
- [x] Add confirmation dialog for clear draft action
- [x] Link status page from form success message
- [x] Create email confirmation template for Make.com
- [x] Include confirmation code generation in template
- [x] Add status tracking link to email template
- [x] Test and save checkpoint (TypeScript: 0 errors)

## Application Management System (Current Session)

- [x] Create rejection email template for Make.com
- [x] Include helpful resources in rejection email
- [x] Add encouraging tone and feedback
- [x] Build ApplicationAnalytics dashboard page
- [x] Add metrics: volume, review time, approval rates
- [x] Add charts and visualizations
- [x] Document backend integration for status lookup
- [x] Create Make.com webhook integration guide
- [x] Test and save checkpoint (TypeScript: 0 errors)

## Market Bubble Safeguards & Pending Features (Current Session)

- [x] Add password protection to /analytics dashboard (password: apex2024)
- [x] Create approval email template for accepted applications
- [x] Add market bubble warning system to TCG Portfolio Dashboard
- [x] Add portfolio diversification analysis (low-end vs high-end ratio)
- [x] Add price trend alerts for sudden drops
- [x] Add risk score calculation for holdings
- [x] Document Make.com setup instructions
- [x] Test and save checkpoint (TypeScript: 0 errors)

## Homepage & Market Warnings Expansion (Current Session)

- [x] Add TCG Portfolio Tracker link/button to homepage
- [x] Create Event Tracker page with market bubble warnings
- [x] Add sports card market volatility alerts
- [x] Create Make.com quick-start guide
- [x] Draft influencer partnership email (for 6-12 months from now)
- [x] Test and save checkpoint (TypeScript: 0 errors)

## Ty Wilson Insights Implementation (Current Session)

- [x] Add sealed product speculation warning to TCG Portfolio Tracker
- [x] Add consistency score to Event Tracker Pro
- [x] Add offer negotiation tracking to Event Tracker Pro
- [ ] Add shipping method performance tracking
- [x] Research CHASING CARDBOARD YouTube channel (Ty Wilson)
- [x] Research Leonhart X profile (@LeonhartYT)
- [x] Research DeepPocketMonster X profile (@DeepPocketMnstr / Pat Flynn)
- [x] Save comprehensive TCG influencer network analysis
- [x] Create Make.com quick-start guide
- [x] Draft influencer partnership email (for 6-12 months from now)
- [x] Test and save checkpoint (TypeScript: 0 errors)

## Leonhart & Deep Pocket Monster Insights (Current Session)

### Leonhart Insights to Implement:
- [x] Add competitive play tracking to Event Tracker (tournaments, team performance)
- [x] Add content creation ROI calculator (video views vs card value)
- [x] Add charitable event tracking (Make-A-Wish style)
- [x] Add community building metrics (Discord, YouTube memberships)

### Deep Pocket Monster Insights to Implement:
- [x] Add challenge completion tracker ("Complete set in 48 hours")
- [x] Add "Open vs Keep" decision tracker with historical results
- [x] Add pack opening ROI calculator (packs vs singles cost comparison)
- [x] Add grading pipeline management (PSA/BGS/CGC submissions)
- [ ] Add YouTube revenue tracking (ad revenue + memberships) - Future feature


## Real Data Integration & Challenge Mode (Current Session)

### API Research & Integration:
- [x] Research TCGPlayer API for Pokemon card pricing (no longer available)
- [x] Research PokemonTCG.io API (FREE, includes TCGPlayer pricing)
- [ ] Research eBay API for sports card pricing
- [x] Integrate live pricing API into TCG Portfolio Tracker
- [x] Add card search feature with live TCGPlayer pricing
- [x] Create Pokemon TCG API service helper
- [ ] Add API documentation for users

### Challenge Mode Feature:
- [ ] Build Challenge Mode page component
- [ ] Add countdown timer (48-hour challenge)
- [ ] Add progress tracking (cards collected / total cards)
- [ ] Add budget tracker (spent / total budget)
- [ ] Add leaderboard (future feature)
- [ ] Add route for /challenge-mode

### Make.com Setup:
- [ ] Create simplified webhook setup instructions
- [ ] Test webhook integration
- [ ] Document troubleshooting steps

## Public Leaderboard Feature (Current Session)

- [x] Design leaderboard data structure (user, set, time, budget, date)
- [x] Create ChallengeLeaderboard.tsx page component
- [x] Add top 10 fastest completions section
- [x] Add top 10 best budgets section
- [x] Add recent completions feed
- [x] Add submission form for users to add results
- [x] Add filters by set/challenge type
- [x] Add route for /challenge-leaderboard
- [x] Link leaderboard from Challenge Mode page
- [x] Link Challenge Mode from TCG Portfolio Tracker
- [x] Test and save checkpoint (TypeScript: 0 errors)

## Leaderboard Enhancements (Current Session)

- [x] Add screenshot upload to challenge submission form
- [x] Add file validation for screenshot (image types only)
- [x] Convert screenshot to base64 for webhook transmission
- [x] Connect leaderboard submission to Make.com webhook (VITE_LEADERBOARD_WEBHOOK_URL)
- [x] Add social sharing buttons (Twitter/X) to leaderboard entries
- [x] Generate shareable text for social posts
- [x] Create Make.com integration guide for leaderboard submissions
- [x] Document Notion database schema for leaderboard
- [x] Test all features and save checkpoint (TypeScript: 0 errors)

## Admin Dashboard for Leaderboard (Current Session)

- [ ] Add email field to leaderboard submission form
- [ ] Update form validation to require email
- [ ] Include email in webhook payload
- [ ] Create LeaderboardAdmin.tsx page component
- [ ] Add password protection to admin dashboard
- [ ] Display pending submissions with screenshots
- [ ] Add approve/reject buttons for each submission
- [ ] Add bulk actions (approve all, reject all)
- [ ] Add route for /leaderboard-admin
- [ ] Update webhook integration guide with email notifications
- [ ] Test all features and save checkpoint (TypeScript: 0 errors)

## Critical Design Fixes (Current Session)


- [x] Apply constellation animation background to ALL pages (Services, Projects, TCG, Event Tracker, Challenge Mode, Leaderboard, Admin)
- [x] Update home page bio with real education background (diplomacy, geography analysis)
- [x] Fix "Schedule a Call" button functionality (email link working)
- [x] Fix "Explore My Work" button functionality (scrolls to #projects)
- [x] Ensure consistent spacing and layout across all pages
- [x] Test all navigation and buttons work correctly
- [x] Save checkpoint with all fixes (TypeScript: 0 errors)

## Video Transcript Extractor Tool (Current Session)

- [ ] Download Ty Wilson's Twitter video about TCG hobby concerns
- [ ] Transcribe video using manus-speech-to-text utility
- [ ] Save transcript to file for analysis
- [ ] Create VideoTranscriptExtractor.tsx page component
- [ ] Add URL input field for Twitter/YouTube/TikTok videos
- [ ] Add video download functionality
- [ ] Add transcription processing with progress indicator
- [ ] Add transcript display with formatting
- [ ] Add export options (TXT, JSON, Copy to clipboard)
- [ ] Add route for /video-transcript-extractor
- [ ] Test tool with multiple video platforms
- [ ] Save checkpoint (TypeScript: 0 errors)


## Post-Vercel Deployment Fixes (User Feedback - Current Session)

- [ ] Fix Ethics page 404 error (routing issue)
- [ ] Fix Services button in hamburger menu navigation
- [ ] Remove ALL red colors from website (replace with cyan/purple brand colors)
- [ ] Redesign project detail pages:
  - [ ] Make System Architecture section collapsible or grid format
  - [ ] Make Results section more visually appealing (collapsible/grid)
  - [ ] Remove testimonials from all project pages
- [ ] Convert Recent Projects section to horizontal carousel (side-scrolling)
- [ ] Add category filter tabs (Gaming, Education, Creative) for projects
- [ ] Make all project categories share the same section with tab switching
- [ ] Document old www.apexomnis.io website for Framer template sale
- [ ] Push all fixes to GitHub and redeploy to Vercel


## Post-Vercel Deployment Fixes (Nov 11, 2025)

- [x] Fix Ethics page 404 error (route was already configured)
- [x] Add /services route to App.tsx
- [x] Fix Services button in hamburger menu (use client-side routing instead of window.location)
- [x] Remove red colors from ProjectPage Before section (replaced with orange)
- [x] Remove red colors from Services page (replaced with orange)
- [x] Make System Architecture section collapsible with grid layout
- [x] Make Results section collapsible with 2-column grid
- [x] Remove testimonials from all project pages
- [x] Convert Recent Projects to horizontal carousel
- [x] Add category tabs (Gaming Tools, Education Tools, Creative Tools)
- [x] Add left/right scroll arrows to carousel
- [x] Reduce vertical space in projects section
- [ ] Test all fixes locally
- [ ] Push to GitHub for Vercel deployment
- [ ] Save old apexomnis.io website as Framer template
- [ ] Save apexcommons.org website as Framer template
- [ ] Rewrite About section to sound more natural and less awkward
