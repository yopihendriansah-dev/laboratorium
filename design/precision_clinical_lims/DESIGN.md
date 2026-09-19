---
name: Precision Clinical LIMS
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#414754'
  inverse-surface: '#263143'
  inverse-on-surface: '#ecf1ff'
  outline: '#727785'
  outline-variant: '#c2c6d6'
  surface-tint: '#005ac2'
  primary: '#0058bd'
  on-primary: '#ffffff'
  primary-container: '#1470e8'
  on-primary-container: '#fefcff'
  inverse-primary: '#adc6ff'
  secondary: '#5f559a'
  on-secondary: '#ffffff'
  secondary-container: '#bdb2ff'
  on-secondary-container: '#4b4185'
  tertiary: '#72545c'
  on-tertiary: '#ffffff'
  tertiary-container: '#8d6c75'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a41'
  on-primary-fixed-variant: '#004494'
  secondary-fixed: '#e5deff'
  secondary-fixed-dim: '#c8bfff'
  on-secondary-fixed: '#1b0c53'
  on-secondary-fixed-variant: '#473d81'
  tertiary-fixed: '#ffd9e2'
  tertiary-fixed-dim: '#e4bcc6'
  on-tertiary-fixed: '#2b151c'
  on-tertiary-fixed-variant: '#5b3f47'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d8e3fb'
typography:
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
  numeric-data:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: -0.01em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-desktop: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1.25rem
  space-xl: 2rem
---

## Brand & Style

This design system establishes a high-precision, clinical-grade interface engineered for laboratory directors, diagnostic technicians, and research scientists. The design direction merges **Clinical Minimalism** with high-density informational ergonomics. It balances the uncompromising clarity required in regulated diagnostic environments with a humanized, modern aesthetic that reduces cognitive fatigue during prolonged shifts.

### Emotional Response
- **Surgical Accuracy:** Every layout line, badge, and metric communicates strict data integrity, chain of custody, and zero-tolerance for operational ambiguity.
- **Calm Authority:** Soft, sterile warm undertones prevent the clinical sterility from feeling intimidating or harsh under intense workstation lighting.
- **Controlled Focus:** Interactive states and high-priority flags immediately command focus without triggering visual panic.

### Style Directives
- **Substrate Separation:** Layer elevated pure white panels (`#FFFFFF`) against a softened, warm-sterile canvas (`#FFF4F4`) to establish physical workspace compartmentalization.
- **Micro-Structured Density:** Compact vertical bounds, hairline borders, and strict numeric alignment facilitate scanning thousands of diagnostic rows, sample tubes, and turnaround thresholds.

## Colors

The palette balances clinical rigor with specialized diagnostic signaling. High-contrast interactive triggers stand out against subdued analytical registers.

### Palette Architecture
- **Primary (`#3A86FF` - Royal Blue):** Primary execution triggers, active specimen filtering, selected table rows, data-sync indicators, and focused form outlines.
- **Secondary (`#BDB2FF` - Soft Lavender):** Workflow stage tags, batch tracking IDs, secondary informational badges, and peripheral navigation highlights.
- **Tertiary (`#FFD6E0` - Soft Blush):** Urgent turnaround warnings, critical alerts, flagged specimen indicators, and priority container states.
- **Neutral Canvas & Foundations:**
  - Base Laboratory Canvas: `#FFF4F4` (Warm Soft White providing warmth and glare reduction).
  - Surface Elevation Tiers: `#FFFFFF` (Pure White diagnostic modules, specimen cards, and modal sheets).
  - Text Primary: `#1E293B` (Deep Slate for high legibility on small-scale alphanumeric assay labels).
  - Text Muted: `#334155` (Mid Slate for metric descriptors and secondary metadata).
  - Structural Hairlines: `#E2E8F0` (Crisp border grids separating high-density analytical columns).

## Typography

Typography balances clinical warmth and technical precision. **Plus Jakarta Sans** provides structural accessibility for structural navigational markers, view titles, and analytical headers. **Inter** drives data density across assays, chain-of-custody logs, specimen labels, and diagnostic metric lists.

### Typography Rules
- **Tabular Figures:** All numeric readouts, turnaround times (TAT), volume microliters (µL), and sample IDs must enforce `font-feature-settings: "tnum" 1, "cv05" 1` to guarantee vertical column alignment.
- **Hierarchy Anchors:** Header scales are capped at standard application dashboard sizing to prioritize workspace area over decorative display scale.
- **Micro-Badges:** Small uppercase metadata tags (`label-sm`) require positive tracking (`0.04em`) to ensure legibility when printed or viewed on mobile telemetry hardware.

## Layout & Spacing

This design system uses a strict 12-column modular fluid grid anchored by an 8pt base layout rhythm with 4pt sub-increments for high-density diagnostic interfaces.

### Grid Architecture
- **Desktop (1280px and above):** 12-column fluid grid, `margin-desktop` (2rem / 32px), `gutter-desktop` (1.5rem / 24px). Accommodates concurrent split screens: live instrument telemetry side-by-side with batch accessioning queues.
- **Tablet (768px - 1279px):** 8-column layout, `gutter` (1rem / 16px), collapsible sidebar navigation to preserve full visibility for standard 96-well microplate mappings.
- **Mobile Handheld (Under 768px):** Single-column stacked stream, `margin` (1rem / 16px), tailored for barcode scanning, specimen intake, and mobile temperature monitoring.

### Spacing Rules
- Component internal padding uses compact boundaries (`space-sm` for table cells and chips; `space-md` for form controls).
- Analytical dashboards group related metrics inside self-contained cards with `space-lg` separation, eliminating excessive visual gaps.

## Elevation & Depth

Visual hierarchy is maintained through **Tonal Surface Layering** combined with **Low-Contrast Outlines**, avoiding heavy ambient shadows that obscure data grids.

### Layer Hierarchy
- **Level 0 (Canvas Base):** Default viewport background rendered in `#FFF4F4`. Establishes a comfortable, glare-free foundation.
- **Level 1 (Card & Module Surfaces):** Work surfaces, analytical grids, and toolbars rendered in solid `#FFFFFF` with a structural border: `1px solid #E2E8F0`. No shadow is applied; structure is conveyed purely through edge definition.
- **Level 2 (Hovered Records & Floating Controls):** Interactive rows and contextual action menus elevate using a crisp hairline border and a clinical ambient blur: `box-shadow: 0 4px 12px -2px rgba(30, 41, 59, 0.06), 0 2px 4px -1px rgba(30, 41, 59, 0.03)`.
- **Level 3 (Diagnostic Overlays & Drawers):** Modal accession forms, specimen split-views, and critical result confirmations float with: `box-shadow: 0 12px 32px -4px rgba(30, 41, 59, 0.12), 0 4px 8px -2px rgba(30, 41, 59, 0.04)`.

## Shapes

The design system employs a **Soft (Level 1)** geometric standard. This geometry projects clinical hygiene, order, and spatial efficiency.

### Corner Radius Standards
- **Core Controls (0.25rem / 4px):** Form fields, action buttons, table cell selections, and utility toggles. Keeps corners tight to prevent loss of clickable area in dense data grids.
- **Cards & Data Modules (`rounded-lg` - 0.5rem / 8px):** Main analytics cards, specimen inventory wrappers, and accession batches.
- **Drawers & Modals (`rounded-xl` - 0.75rem / 12px):** Top-level containment surfaces and diagnostic alert sheets.
- **Pill Exceptions:** Status badges, assay condition chips, and phase tags use a fully pill-shaped profile (`9999px`) to visually differentiate status indicators from square, interactive data cells.

## Components

### Buttons
- **Primary:** Background `#3A86FF`, text `#FFFFFF`, border `none`, radius `0.25rem`. Hover state transitions to `#2563EB`. Active state shifts to `#1D4ED8`. Focus: `2px solid #FFFFFF` with an outer ring of `2px solid #3A86FF`.
- **Secondary:** Background `#FFFFFF`, text `#1E293B`, border `1px solid #E2E8F0`. Hover state switches surface to `#FFF4F4`.
- **Destructive/Critical Action:** Background `#FFD6E0`, text `#991B1B`, border `1px solid #F87171`.

### Chips & Badges
- **Status Pills:** Pill-shaped (`9999px`), padding `0.125rem 0.5rem`.
- **Batch Processing Indicator:** Background `#BDB2FF` at 20% opacity, text `#4338CA`, border `1px solid #BDB2FF`.
- **Urgent / Flagged Specimen:** Background `#FFD6E0`, text `#9F1239`, border `1px solid #FDA4AF`.
- **Complete / Validated:** Background `#DCFCE7`, text `#166534`, border `1px solid #86EFAC`.

### Lists & Tables (Accession Grids)
- **Header Cells:** Background `#FFFFFF`, border-bottom `2px solid #E2E8F0`, typography `label-sm`, text `#334155`.
- **Row Architecture:** Background alternates between `#FFFFFF` and `#FAFAFA` on dense sets. Row height strictly bounded to `36px` (compact) or `44px` (standard). Border bottom `1px solid #E2E8F0`.
- **Row Selected State:** Background tint `#3A86FF` at 8% opacity, left indicator accent `3px solid #3A86FF`.

### Checkboxes & Radios
- **Checkboxes:** Size `16px x 16px`, radius `2px`, border `1.5px solid #CBD5E1`. Checked state: background `#3A86FF`, check icon `#FFFFFF`, border `#3A86FF`.
- **Radio Buttons:** Size `16px x 16px`, fully round, checked state displays an inner filled circle `#3A86FF` with `2px` white buffer.

### Input Fields
- **Base Style:** Background `#FFFFFF`, border `1px solid #E2E8F0`, typography `body-md`, radius `0.25rem`, padding `0.5rem 0.75rem`.
- **Focus State:** Border `#3A86FF`, box-shadow `0 0 0 1px #3A86FF`.
- **Error State (Invalid Calibration / Range):** Border `#E11D48`, background `#FFF1F2`.

### Cards & Container Panels
- **Structure:** Solid `#FFFFFF` background, border `1px solid #E2E8F0`, radius `0.5rem`.
- **Card Highlight Variant:** For high-priority sample alerts, applies an accent container layer with `#FFD6E0` at 30% fill and a left-rail border of `4px solid #F43F5E`.

### Domain-Specific Components
- **Specimen Well Plate Map:** A 96-well grid container (`8 x 12`) using circular cells (`24px x 24px`) with dynamic fills (`#BDB2FF` for queued, `#3A86FF` for active, `#FFD6E0` for contaminated, `#F1F5F9` for empty).
- **Chain of Custody Timeline:** Micro-stepper component connected by a `2px` vertical track in `#E2E8F0` with timestamps set in `Inter` tabular font.