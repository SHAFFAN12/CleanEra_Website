# Component: `ProblemsSection`

A full-width section component for the CleanEra website. It is divided into two major sub-sections stacked vertically:
1. **Text Ticker / Marquee Strip** (top)
2. **Two-Column Content Block** (bottom) — Left: layered image collage, Right: text + feature list + CTA button

---

## 1. Text Ticker / Marquee Strip

### Layout & Position
- Sits at the very top of the `ProblemsSection`, spanning the full width of the viewport.
- Background: **white / very light grey** — same as the page background (no visible background differentiation).
- There is a very thin **light grey horizontal divider line** visible above the ticker strip separating it from the section above.

### Content
- The ticker contains repeating text phrases separated by **green asterisk / star decorators (`✳` or `*`)**.
- The text scrolls **horizontally from right to left** in a continuous loop (marquee/ticker animation).
- Example visible text segments (partially readable due to scroll position):
  - `CLEANING SERVICES`
  - `TRUSTED PROFESSIONALS`
  - `COMMERCIAL CLEANING`
  - `FACILITY MANAGEMENT`
  *(exact phrases may vary — the pattern is: ALL CAPS keyword phrases separated by green star icons)*

### Text Styling
- Font: **Bold, large, wide-spaced display font** — appears to be a heavy condensed or extended serif/sans. Very large font size (~48–64px range).
- Color: **Light grey / near-white** — the text is very low contrast against the white background, giving a **ghost / watermark text** effect. It is NOT meant to be easily readable — it is decorative.
- The text has a slightly **outlined or faded** quality — possibly using a light grey stroke or low opacity fill.

### Separator Icons
- Between each text phrase: a **solid green star/asterisk icon** (`✳`).
- Color: **#2ECC71 or similar medium green** (matches the brand green used throughout).
- Size: approximately **20–28px**.
- These icons are sharp and fully opaque — contrasting with the faded text around them.

### Animation
- Continuous **left-scrolling marquee** — infinite loop, no pause.
- Speed: moderate — not too fast, not too slow.
- No hover pause required (purely decorative).

---

## 2. Two-Column Content Block

### Overall Layout
- **Full-width white background** section.
- Two columns side by side:
  - **Left column (~45–50% width):** Image collage / visual block
  - **Right column (~50–55% width):** Text content block
- Vertical alignment: both columns are **centered vertically** relative to each other.
- Generous padding top and bottom (~80–100px).
- Horizontal padding on outer edges (~60–80px or container max-width centered).

---

## LEFT COLUMN — Image Collage Block

### Overall Structure
The left column is a **layered, overlapping image composition** — not a simple side-by-side or grid. Elements are absolutely/relatively positioned to overlap one another intentionally.

### Background Decorative Elements (behind the images)

#### 1. Hand-drawn Peace Sign / Victory Hand (top-left of left column)
- Position: **top-left corner** of the left column, partially outside/overlapping the column edge.
- Style: **line-drawn / outline illustration** of a hand making a peace/victory sign (two fingers up).
- Color: **light blue / sky blue outline** — thin stroke, no fill.
- Size: approximately **80–100px tall**.
- This is a decorative illustration asset (SVG or PNG with transparency).

#### 2. Abstract Pink/Coral Blob Shape (bottom-left)
- Position: **lower-left area** of the left column, behind the main images.
- Style: **soft organic blob / splash shape** — irregular, rounded edges.
- Color: **very light pink / blush / rose** — low opacity, almost pastel watercolor feel.
- Size: approximately **120–160px** in diameter.
- This is a background decorative element — sits behind all images.

#### 3. Spray Bottle Line Illustration (bottom-right of entire section / right side of left column boundary)
- Position: **far bottom-right** of the overall section (near the right edge).
- Style: **outline/line-drawing illustration** of a spray bottle.
- Color: **light blue outline**, thin stroke, no fill — matches the peace hand style.
- Size: approximately **80–120px tall**.
- Purely decorative background asset.

---

### Main Image 1 — Large Background Image (Cleaner at Desk)

- **Position:** Dominant/primary image, takes up most of the left column.
- **Content:** A cleaning professional (person with tattoos on arms, wearing a **black apron/overalls**, **white t-shirt**, **yellow rubber gloves**) leaning over a **white office desk**, cleaning it with a **green microfiber cloth**. A **blue spray bottle** is also visible on the desk. The background shows **white office shelving/cabinets**.
- **Shape/Styling:**
  - **Rounded rectangle** with large border-radius (~20–24px).
  - No visible border or stroke.
  - Slight **drop shadow** — soft, diffused, dark shadow behind the image card.
- **Dimensions (approximate):** ~320px wide × ~420px tall (portrait orientation).
- **Positioning:** Centered-left within the left column. The image card is positioned behind the logo card and partially behind the second image.

---

### Logo Card (Overlaid on Main Image — Left Center)

- **Position:** Overlaid on the **left edge / center-left** of the main image — overlapping the left side of the large image and extending slightly off it.
- **Content:** The **CleanEra logo** — composed of:
  - **Icon/Emblem:** A square-ish icon with a stylized `CE` monogram inside a geometric/angular badge shape. The icon uses **dark navy blue** and **green** colors.
  - **Text:** `CleanEra` in a **vertical orientation** — the text is rotated **90 degrees counterclockwise** (reads bottom to top). Font is bold sans-serif. Color: **dark navy / dark teal blue**.
- **Card Styling:**
  - **White background card** with rounded corners (~12–16px radius).
  - **Drop shadow** — soft shadow giving it a floating/elevated appearance.
  - Padding inside the card: approximately **12–16px** on all sides.
  - Card dimensions: approximately **60–70px wide × 180–220px tall** (tall and narrow due to rotated text).
- **Z-index:** Above the main image, below or same level as second image.

---

### Main Image 2 — Small Foreground Image (Female Cleaner Portrait)

- **Position:** **Bottom-right** of the image composition, overlapping the bottom-right corner of the large background image. It floats in front of the primary image.
- **Content:** A smiling female cleaning professional wearing:
  - **Blue baseball cap**
  - **Dark navy / denim work shirt or apron**
  - Holding **yellow and green cleaning supply bottles/sprays** in front of her.
  - Background of this image is **teal/blue-green** — appears to be a studio or environment with teal tones.
- **Shape/Styling:**
  - **Rounded rectangle** with large border-radius (~20–24px) — matching the first image's style.
  - **White border/stroke** around the image card — approximately **3–4px** solid white border, giving it a "framed" look.
  - **Drop shadow** — more pronounced shadow than the first image, giving it clear elevation/floating above.
- **Dimensions (approximate):** ~170–190px wide × ~200–220px tall (portrait, smaller than the main image).
- **Z-index:** Highest — in front of everything else in the left column.

---

## RIGHT COLUMN — Text Content Block

### Vertical Layout (top to bottom):
1. Heading
2. Body paragraph
3. Sub-heading
4. Two-column feature/bullet list
5. CTA Button

---

### 1. Main Heading

- **Text:** `Cleaning Problems That Hurt Operations`
- **Font:** Bold, heavy weight serif or semi-serif — appears to be a **dark navy/near-black** color (`#1A1A2E` or `#0D1B2A` range).
- **Font size:** Large — approximately **36–42px**.
- **Line height:** Tight — approximately 1.2–1.3.
- **Width:** Text wraps across 2 lines as shown:
  - Line 1: `Cleaning Problems That Hurt`
  - Line 2: `Operations`
- **No underline, no decoration.**
- **Margin bottom:** ~16–20px before the paragraph.

---

### 2. Body Paragraph

- **Text (exact):**
  > *"If your current provider is inconsistent, understaffed, hard to reach, or failing inspections, it creates risk, complaints, downtime, and wasted management time. CleanEra provides structured cleaning programs with accountability, trained teams, task checklists, and responsive management."*
- **Font:** Regular weight, sans-serif. Small-medium size (~14–16px).
- **Color:** Medium grey — `#555555` or `#666666` range (softer than the heading).
- **Line height:** ~1.6–1.7 (comfortable reading spacing).
- **Margin bottom:** ~20–28px before sub-heading.

---

### 3. Sub-Heading

- **Text:** `Professional cleaning solutions for commercial spaces of every size`
- **Font:** Medium-bold weight, sans-serif. Slightly smaller than the main heading (~18–22px).
- **Color:** Dark navy / near-black — same family as main heading (`#1A1A2E`).
- **Line height:** ~1.3.
- **This text wraps across 2 lines:**
  - Line 1: `Professional cleaning solutions for commercial`
  - Line 2: `spaces of every size`
- **Margin bottom:** ~16–20px before the feature list.

---

### 4. Feature / Benefits List (Two-Column Grid)

- **Layout:** 2 columns × 4 rows = **8 items total**.
- **Column gap:** ~40–60px.
- **Row gap:** ~8–12px.

#### Left Column Items (top to bottom):
1. Dedicated Account Manager
2. Photo Verified Checklists
3. Weekly/Monthly Reports
4. Background checked Cleaning Teams

#### Right Column Items (top to bottom):
5. Supervisor Audits
6. Consistent Quality
7. 24/7 On-Call Support
8. WHMIS Trained Staff

#### Item Styling:
- Each item has a **green checkmark circle icon** on the left.
  - Icon: Filled **green circle** with a **white checkmark** inside. 
  - Color: **#2ECC71** or similar medium/brand green.
  - Size: approximately **16–18px** diameter.
- Text: Regular weight sans-serif, ~13–15px, dark grey (`#333333` or `#444444`).
- Icon and text are **vertically centered** on the same line.
- Gap between icon and text: ~6–8px.

**Special note on item 4:** "Background checked Cleaning Teams" wraps to 2 lines within its cell — the text is slightly longer than the others.

---

### 5. CTA Button

- **Text:** `Fix My Cleaning Issues`
- **Position:** Below the feature list, left-aligned (aligned to the start of the left feature column).
- **Style:**
  - **Background:** Light sky blue / baby blue — approximately `#87CEEB` or `#6EC6F5` (NOT the brand green — it's a soft, lighter blue).
  - **Text color:** White (`#FFFFFF`).
  - **Font:** Bold or semi-bold, sans-serif. ~14–16px.
  - **Border radius:** Pill/rounded — large radius (~50px) giving a fully rounded/capsule shape.
  - **Padding:** ~14–16px vertical × ~32–40px horizontal.
  - **No visible border/stroke.**
  - **No drop shadow visible** (flat button).
  - **Width:** Approximately **200–220px** wide (fits the text comfortably with padding).
- **Margin top:** ~24–32px above button, after the feature list.

---

## Colors Reference

| Element | Color |
|---|---|
| Page / Section background | White `#FFFFFF` |
| Main heading text | Dark navy `#0D1B2A` or `#1A1A2E` |
| Body paragraph text | Medium grey `#555555` |
| Sub-heading text | Dark navy `#0D1B2A` |
| Feature list text | Dark grey `#333333` |
| Checkmark icon circle | Brand green `#2ECC71` (approx) |
| Checkmark icon tick | White `#FFFFFF` |
| Ticker star/asterisk icons | Brand green `#2ECC71` |
| Ticker text | Light grey / ghost white (very low opacity or `#CCCCCC`) |
| CTA button background | Light sky blue `#87CEEB` or `#6EC6F5` |
| CTA button text | White `#FFFFFF` |
| Peace hand illustration | Light blue outline `#A8D8EA` or similar |
| Spray bottle illustration | Light blue outline `#A8D8EA` or similar |
| Blob shape | Blush pink / rose `#FFD6D6` or `#F9C5C5`, low opacity |
| Logo text "CleanEra" | Dark teal/navy `#1A3C5E` or similar |
| Logo icon | Dark navy + green accent |
| Image card borders | White `#FFFFFF` (on second image only) |

---

## Typography Summary

| Element | Weight | Size (approx) | Style |
|---|---|---|---|
| Ticker text | Bold / Heavy | 48–64px | All caps, ghost/faded |
| Main heading | Bold | 36–42px | Title case |
| Sub-heading | Semi-bold | 18–22px | Sentence case |
| Body paragraph | Regular | 14–16px | Sentence case |
| Feature list items | Regular | 13–15px | Sentence case |
| CTA button text | Bold/Semi-bold | 14–16px | Title case |

---

## Decorative / Illustration Assets Required

1. **Peace/Victory hand** — outline illustration, light blue, SVG preferred.
2. **Spray bottle** — outline illustration, light blue, SVG preferred.
3. **Pink blob/splash shape** — soft organic shape, blush pink, low opacity, SVG or PNG with transparency.
4. **Green asterisk/star** — used in ticker strip between text segments, solid green.
5. **CleanEra logo** — full logo with CE emblem + wordmark (used vertically rotated in logo card).
6. **Green filled checkmark circle icons** — for feature list (can use icon library e.g. HeroIcons, FontAwesome, or Lucide).

---

## Spacing & Sizing Summary

| Property | Value |
|---|---|
| Section outer padding (top/bottom) | ~80–100px |
| Section outer padding (left/right) | ~60–80px or centered container |
| Left column width | ~45–50% |
| Right column width | ~50–55% |
| Gap between columns | ~40–60px |
| Large image dimensions | ~320 × 420px |
| Small image dimensions | ~180 × 210px |
| Logo card dimensions | ~65 × 200px (portrait) |
| Feature list column gap | ~40–60px |
| Feature list row gap | ~8–12px |
| CTA button width | ~200–220px |
| CTA button border-radius | ~50px (pill shape) |

---

## Responsive Notes

- On **mobile**: stack left and right columns vertically (image block on top, text block below).
- The ticker strip should continue scrolling at all breakpoints (full width).
- The image collage may simplify on mobile — consider stacking or reducing overlap.
- CTA button can go full-width on mobile.
