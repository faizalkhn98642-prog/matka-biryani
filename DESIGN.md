# Design Brief

## Concept
Premium luxury restaurant brand (Matka Biryani) — refined, minimal, dark + warm aesthetic inspired by high-end food experiences. Deep charcoal backgrounds with gold/saffron accents. Strong spacing and breathing room. Smooth micro-interactions.

## Palette
| Token | OKLCH | Usage |
|-------|-------|-------|
| **Primary** | `72 0.22 48` (dark), `68 0.18 48` (light) | Gold/saffron accent, CTA buttons, active states |
| **Secondary** | `58 0.15 42` (dark), `50 0.12 42` (light) | Warm spice tones, secondary accents |
| **Background** | `0.12 0 0` (dark), `0.96 0.01 47` (light) | Deep charcoal (dark mode primary) |
| **Foreground** | `0.93 0.01 47` (dark) | Warm off-white text on dark |
| **Card** | `0.16 0.01 47` (dark) | Elevated surfaces, slight warm tone |
| **Muted** | `0.22 0.01 47` (dark) | Secondary information, subtle dividers |
| **Destructive** | `0.65 0.19 22` | Error/alert (red-orange) |

## Typography
| Tier | Font | Usage |
|------|------|-------|
| **Display** | Instrument Serif (Italic, 400) | Headlines, hero text (luxury serif) |
| **Body** | DM Sans (400) | Body text, descriptions, UI labels |
| **Mono** | JetBrains Mono (400) | Code, technical elements (if needed) |

## Elevation & Depth
- **card**: `shadow-soft` (0 1px 4px, 0.08 opacity)
- **standard**: `shadow-card` (0 2px 8px, 0.12 opacity)
- **elevated**: `shadow-elevated` (0 8px 16px, 0.16 opacity)
- No harsh borders; use elevation + warm background shifts instead

## Structural Zones
| Zone | Background | Treatment |
|------|------------|-----------|
| **Header** | `bg-card` | Subtle elevation, minimal border-b |
| **Hero** | `bg-background` | Full-width image overlay with dark gradient |
| **Content** | `bg-background` | Default, alternates with `bg-muted/10` for sections |
| **Card/Dish** | `bg-card` | Soft shadow, rounded-soft (6px), hover: scale + shadow-elevated |
| **CTA Section** | `bg-accent/5` | Subtle warm accent tint, strong text hierarchy |
| **Footer** | `bg-muted/30` | Minimal, warm grey, light border-t |

## Spacing & Rhythm
- Base unit: 4px; scale: 4/8/12/16/24/32/48/64px
- Hero padding: 48px/64px vertical, 16px/24px horizontal (mobile/desktop)
- Card gap: 16px (grid/flex)
- Section margin: 64px top/bottom
- Text line-height: 1.6 (body), 1.2 (headings)

## Component Patterns
- **Buttons**: `bg-accent`, `text-accent-foreground`, `rounded-subtle` (4px), hover: `scale-105` + `shadow-elevated`
- **Cards**: `bg-card`, `rounded-soft` (6px), hover: `translate-y-[-2px]` + `shadow-elevated`
- **Links**: `text-accent`, underline on hover
- **Inputs**: `bg-input`, `border-border`, `rounded-subtle` (4px), focus: `ring-accent`

## Motion
- **Entrance**: `animate-fade-in` (0.5s) + `animate-slide-up` (0.6s) on section scroll
- **Hover**: `transition-smooth` (0.3s cubic-bezier) for button scale, card lift
- **Scroll animations**: Subtle parallax on hero image, staggered fade-in for dish cards
- No bounce, no excessive animation — refined, purposeful motion only

## Constraints
- ✗ No bright neons, gradients on text, or harsh shadows
- ✗ No overcrowded layouts, 2+ borders per card, or heavy opacity stacking
- ✗ Rounded corners: intentional variation (0/4/6/12px) by context, never uniform
- ✓ Always use CSS variables; no hex literals, no arbitrary Tailwind classes
- ✓ Mobile-first responsive; card stacking at `sm`, grid at `md`+

## Signature Detail
Warm-toned OKLCH palette with subtle chroma — never washed-out (minimum 0.12C on color tones). Gold/saffron accents (48° hue) serve emotional warmth without cheapness. Deep charcoal (`L: 0.12`) allows white text (`L: 0.93`) for 8.1:1 contrast, accessible + luxurious. Serif display font (Instrument) paired with sans-body (DM Sans) creates "premium editorial" feel. Soft shadows + breathing room replace borders.
