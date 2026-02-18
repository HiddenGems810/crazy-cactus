---
name: elite-frontend-ux
description: Create distinctive, production-grade interfaces that combine bold aesthetics with systematic UX excellence.
---

# Elite Frontend UX Design Skill

Create distinctive, production-grade interfaces that combine bold aesthetics with systematic UX excellence. Every output must be visually striking AND functionally flawless.

## 1. Design Philosophy
Before writing code, commit to a clear direction:
- **Context Analysis**: Analyze who uses this, what action they should take, and why they should trust/engage.
- **Aesthetic Commitment**: Choose and COMMIT to a bold direction (e.g., Brutally minimal, Luxury/refined, Neo-brutalist).
- **The Memorability Test**: Identify the ONE thing users will remember.

## 2. Design Token System
Use these systematic values. Never eyeball spacing or pick arbitrary colors.

### Typography Scale
- xs: 0.75rem (12px) - captions, labels
- sm: 0.875rem (14px) - secondary text
- base: 1rem (16px) - body text (MINIMUM for mobile)
- lg: 1.125rem (18px) - lead paragraphs
- xl: 1.25rem (20px) - H4
- 2xl: 1.5rem (24px) - H3
- 3xl: 2rem (32px) - H2
- 4xl: 2.5rem (40px) - H1
- 5xl: 3.5rem (56px) - Display

**Rules**: Line height 1.5-1.6 for body, 1.1-1.2 for headings. Max 2-3 typefaces. PAIR: One distinctive display font + one refined body font.

### Spacing Scale (8px base)
- 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px, 80px, 96px, 128px.
- Section Spacing: 80-120px between major landing page sections.

### Color System
Use HSL for easy dark mode manipulation.
- 60-30-10 ratio: 60% dominant, 30% secondary, 10% accent.
- ONE bold accent color maximum.

### Animation Timing
- Instant: 50ms, Fast: 100ms, Normal: 200ms, Slow: 300ms, Slower: 500ms.
- **Rules**: ONLY animate transform and opacity. NEVER animate layout properties. Respect prefers-reduced-motion.

## 3. Accessibility Requirements (Non-Negotiable)
- **Touch Targets**: Min 44x44px, min 8px spacing.
- **Interactive Elements**: Visible focus states required. Focus contrast 3:1.
- **Forms**: associated <label> required. aria-describedby for errors.
- **Images & Icons**: descriptive alt text or aria-hidden="true". icon-only buttons need aria-label.
- **Semantic HTML**: Use <button>, <a> correctly. First rule of ARIA: Use native HTML if possible.

## 4. SaaS Dashboard Patterns
- **Layout**: Top bar (56-64px), Sidebar (240-280px).
- **Hierarchy**: Value-first metrics, Actionable insights, Progressive disclosure.
- **Data Viz**: Semantic colors with backup icons, legends required, axis labels mandatory.
- **Empty States**: Helpful, action-oriented.
- **Settings**: Bucket + side panel for complexity, Danger Zone for destructive actions.
- **Toasts**: 4-5s default, min 6s for accessibility. Formula: 500ms/word + 3s base.

## 5. Landing Page Patterns
- **Above-the-Fold**: Headline (5-10 words), supporting subheadline, single primary CTA, visual element.
- **Section Flow**: Hero -> Social Proof -> Problem/Solution -> Features -> Testimonials -> Pricing -> FAQ -> Final CTA -> Footer.
- **CTA**: Min 44px height, action verbs, 2-5 words.
- **Forms**: Single column, minimize fields, validate on blur.

## 6. Tailwind CSS Best Practices
- **cn() Helper**: Always use for conditional classes.
- **NO Dynamic Classes**: Use object maps for dynamic styles.
- **Variants**: Use `class-variance-authority` (CVA).
- **Responsive**: Mobile-first approach.
- **Dark Mode**: Class-based prefered.

## 7. React Component Patterns
- **Compound Components**: Prefer composition over prop soup.
- **Reduced Motion**: Use `useReducedMotion` where applicable.
- **Loading States**: Skeleton screens over spinners.

## 8. Anti-Patterns (NEVER DO)
- Visual: Purple gradients on white, AI default fonts, inconsistent radius.
- UX: Confirmshaming, pre-selected dark options, placeholder as labels.
- Technical: outline:none without focus, <div onclick>, animating layout properties.
- Mobile: Touch targets < 44px, body text < 16px, horizontal scroll.

## 9. Pre-Delivery Checklist
- [ ] Color contrast ≥ 4.5:1
- [ ] Touch targets ≥ 44x44px
- [ ] All images have alt text
- [ ] Visible focus states on all elements
- [ ] Mobile-first responsive
- [ ] Animations use only transform/opacity
- [ ] No dynamic Tailwind class names
- [ ] loading states exist

## 10. Implementation Notes
- Start with design token CSS.
- Mobile-first layered up with breakpoints.
- Semantic HTML first.
- Component composition over props.
- Test extremes (small screen, long content).
