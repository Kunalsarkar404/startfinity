# Typography & Design Standards Guide

## 📐 Professional UI/UX Standards Implemented

This document outlines the typography and design standards implemented to match professional UI/UX guidelines based on the reference website https://www.enego.co.in/

---

## 🎯 Core Typography Principles

### 1. **Font Stack**
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif
```

### 2. **Base Font Size**
- **Body Text**: 16px (1rem) - Critical for mobile to prevent auto-zoom on iOS
- **Line Height**: 1.6-1.7 for body text
- **Font Smoothing**: Enabled antialiasing for crisp rendering

---

## 📏 Responsive Typography Scale

### Heading Sizes (Using clamp() for fluid responsiveness)

| Element | Min Size | Ideal Size | Max Size | Use Case |
|---------|----------|------------|----------|----------|
| **H1** | 36px (2.25rem) | 5vw | 60px (3.75rem) | Hero headlines |
| **H2** | 30px (1.875rem) | 4vw | 48px (3rem) | Section titles |
| **H3** | 24px (1.5rem) | 3vw | 36px (2.25rem) | Subsection headings |
| **H4** | 20px (1.25rem) | 2.5vw | 30px (1.875rem) | Card titles |
| **H5** | 18px (1.125rem) | 2vw | 24px (1.5rem) | Small headings |
| **H6** | 16px (1rem) | 1.5vw | 20px (1.25rem) | Minor headings |

### Body Text Sizes

| Element | Size | Line Height | Use Case |
|---------|------|-------------|----------|
| **Large Body** | 18-20px (1.125-1.25rem) | 1.6 | Hero descriptions, important text |
| **Base Body** | 16px (1rem) | 1.6-1.7 | Main content, paragraphs |
| **Small Text** | 14px (0.875rem) | 1.4-1.5 | Meta info, labels, captions |
| **Tiny Text** | 12px (0.75rem) | 1.25 | Fine print, disclaimers |

---

## 🎨 Color System

### Primary Colors (Blue Theme)
```css
primary-50:  #eff6ff
primary-100: #dbeafe
primary-200: #bfdbfe
primary-300: #93c5fd
primary-400: #60a5fa
primary-500: #3b82f6
primary-600: #2563eb  /* Main brand color */
primary-700: #1d4ed8  /* Dark brand color */
primary-800: #1e40af
primary-900: #1e3a8a
```

### Accent Colors
```css
Orange: #ff6b35  /* CTAs, highlights */
Yellow: #fbbf24  /* Success, special offers */
Green:  #10b981  /* Success, verification */
Teal:   #14b8a6  /* Alternative accent */
```

---

## 🔘 Button Standards

### Size Standards
```css
/* Standard Button */
padding: 1rem 2rem (16px 32px)
font-size: 1rem (16px)
line-height: 1.5
border-radius: 0.75rem (12px)
font-weight: 600 (semibold)

/* Large Button (Hero CTAs) */
padding: 1rem 2rem
font-size: 1rem
Prominent shadows and hover effects
```

### Button Types

#### Primary Button
- Background: `primary-600`
- Hover: `primary-700`
- Shadow: `soft` → `medium` on hover

#### Gradient Button
- Gradient: `primary-600` → `blue-700`
- Shadow: `medium` → `large` on hover
- Transform: scale(1.05) on hover

#### Secondary Button
- Background: White
- Border: 2px `primary-600`
- Hover: `primary-50` background

---

## 📦 Card Standards

### Card Padding
- **Standard Card**: 1.5rem (24px)
- **Large Card**: 2rem (32px)
- **Hero Form Card**: 2-2.5rem (32-40px)

### Card Shadows
```css
.card           → shadow-soft (subtle elevation)
.card-elevated  → shadow-medium (more prominent)
.card:hover     → shadow-large (dramatic lift)
```

### Border Radius
- Cards: `1.5rem` (24px) to `2rem` (32px)
- Buttons/Inputs: `0.75rem` to `1rem` (12-16px)
- Large containers: `2rem` to `3rem` (32-48px)

---

## 📝 Form Input Standards

### Critical Mobile Optimization
```css
font-size: 1rem (16px)  /* Prevents iOS auto-zoom */
line-height: 1.5
padding: 0.875rem 1rem (14px 16px)
border: 2px solid
border-radius: 0.75rem (12px)
```

### States
- **Default**: `bg-gray-50`, `border-gray-200`
- **Focus**: `bg-white`, `border-primary-500`, `ring-2 ring-primary-500`
- **Hover**: Subtle background transition

### Labels
```css
font-size: 0.875rem (14px)
font-weight: 600 (semibold)
margin-bottom: 0.625rem (10px)
color: gray-700
```

---

## 📊 Stat Numbers (Dashboard Metrics)

### Large Stats
```css
font-size: clamp(2rem, 4vw, 2.5rem)  /* 32-40px */
font-weight: 800 (extrabold)
line-height: 1.1
```

### Stat Labels
```css
font-size: 0.875rem (14px)
font-weight: 500 (medium)
line-height: 1.4
```

---

## 🎭 Section Layout Standards

### Section Spacing
- **Vertical Padding**: `py-16` to `py-20` (64-80px)
- **Container Max Width**: `max-w-7xl` (1280px)
- **Content Max Width**: `max-w-3xl` for text-heavy sections

### Section Titles
```css
.section-title {
  font-size: clamp(1.875rem, 4vw, 3rem);  /* 30-48px */
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}
```

### Section Subtitles
```css
.section-subtitle {
  font-size: clamp(1.125rem, 2vw, 1.25rem);  /* 18-20px */
  font-weight: normal (400);
  line-height: 1.6;
  color: gray-600;
  margin-bottom: 2rem;
}
```

---

## 🎪 Badge/Pill Standards

### Size
```css
padding: 0.5rem 1rem (8px 16px)
font-size: 0.875rem (14px)
font-weight: 600
border-radius: 9999px (full)
line-height: 1.25
```

---

## 📱 Responsive Breakpoints

```css
sm:  640px   /* Mobile landscape, small tablets */
md:  768px   /* Tablets */
lg:  1024px  /* Laptops */
xl:  1280px  /* Desktops */
2xl: 1536px  /* Large desktops */
```

### Mobile-First Typography
- Always define mobile sizes first
- Use `clamp()` for fluid scaling
- Test on actual devices (especially iOS for 16px rule)
- Ensure touch targets are minimum 44x44px

---

## 🎯 Accessibility Standards

### Contrast Ratios
- **Normal Text**: 4.5:1 minimum
- **Large Text** (18px+): 3:1 minimum
- **UI Components**: 3:1 minimum

### Font Weights
- **Light (300)**: Avoid for body text
- **Regular (400)**: Body text, descriptions
- **Medium (500)**: Emphasized text
- **Semibold (600)**: Buttons, labels, important text
- **Bold (700)**: Headings, section titles
- **Extrabold (800+)**: Large numbers, hero headlines

### Letter Spacing
- **Headings**: -0.02em to -0.025em (tighter)
- **Body**: Normal (0em)
- **Uppercase Text**: 0.05em to 0.1em (wider)

---

## ✅ Quality Checklist

### Before Deployment
- [ ] All text is minimum 14px (mobile exceptions: 12px for fine print)
- [ ] Form inputs are 16px to prevent iOS zoom
- [ ] Headings use proper hierarchy (H1 > H2 > H3...)
- [ ] Line height is appropriate (1.6-1.7 for body)
- [ ] Touch targets are minimum 44x44px
- [ ] Color contrast meets WCAG AA standards
- [ ] Responsive scaling works on 320px to 1920px screens
- [ ] Font weights are semantically correct
- [ ] Shadows create visual hierarchy
- [ ] Spacing is consistent (8px grid system)

---

## 🔧 Implementation Examples

### Hero Heading
```jsx
<h1 style={{ 
  fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', 
  lineHeight: '1.1',
  fontWeight: '800',
  letterSpacing: '-0.02em'
}}>
  Your Business Deserves Funding
</h1>
```

### Section Title
```jsx
<h2 className="section-title">
  Our Strategic Partners
</h2>
```

### Body Text
```jsx
<p style={{ 
  fontSize: '1rem', 
  lineHeight: '1.6',
  color: '#4b5563'
}}>
  Description text here
</p>
```

### Button
```jsx
<button style={{ 
  padding: '1rem 2rem',
  fontSize: '1rem',
  lineHeight: '1.5',
  fontWeight: '600'
}} className="btn-gradient">
  Apply Now
</button>
```

---

## 📚 References

- **Material Design Typography**: https://material.io/design/typography
- **Apple Human Interface Guidelines**: https://developer.apple.com/design/human-interface-guidelines/
- **WCAG 2.1 Guidelines**: https://www.w3.org/WAI/WCAG21/quickref/
- **Type Scale Calculator**: https://type-scale.com/
- **Contrast Checker**: https://webaim.org/resources/contrastchecker/

---

## 🚀 Performance Tips

1. **Font Loading**: Use `font-display: swap` for web fonts
2. **Variable Fonts**: Consider Inter Variable for better performance
3. **Subset Fonts**: Load only required character sets
4. **CSS Custom Properties**: Use for dynamic sizing
5. **Preload Critical Fonts**: Add `<link rel="preload">` for above-fold text

---

**Last Updated**: October 9, 2025  
**Version**: 1.0  
**Maintained By**: Development Team
