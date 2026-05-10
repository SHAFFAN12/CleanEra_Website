# Component: `Footer`

The site-wide footer for CleanEra. It is composed of three distinct sub-sections stacked vertically:

1. **CTA Circle Badge** — a circular button/badge that straddles the boundary between the last page section and the footer, half white / half dark navy.
2. **Main Footer Body** — dark navy background with 4 columns: Logo + Contact, Quick Links, Services, Business Hours.
3. **Bottom Bar / Copyright Strip** — a darker sub-footer strip with copyright text on the left and social media buttons on the right.

---

## 1. CTA Circle Badge (Top of Footer — Overlapping Element)

This is a **circular element that overlaps the footer's top edge** — its top half sits in the white section above the footer and its bottom half sits on the dark navy footer background. It creates a visual transition / floating button effect between the last section and the footer.

### Shape & Size
- **Shape:** Perfect circle.
- **Diameter:** Approximately **160–180px**.
- **Position:** Horizontally **centered** on the page. Vertically positioned so the circle **straddles the top edge** of the footer — approximately half above (in the white section) and half below (on the dark navy footer).
- **Z-index:** Above both the last section and the footer body — floats on top.

### Circle Styling
- **Background fill:** White `#FFFFFF` — the interior of the circle is solid white.
- **Border / Stroke:** A **two-tone ring** around the circle:
  - **Outer ring / top portion:** **Green** — approximately `#2ECC71` or the same brand green used throughout the site. The green portion appears to cover roughly the **top 60–70%** of the circle's circumference (the top arc).
  - **Inner ring / bottom portion:** **Teal/dark blue-green** — approximately `#1A6B8A` or `#0E7C8A`. The teal portion covers the **bottom 30–40%** of the circle's circumference.
  - **Ring thickness:** Approximately **4–6px** stroke width.
  - This creates a **gradient-stroke or split-color ring** effect — green on top transitioning to teal/dark teal at the bottom.
- **Drop shadow:** Subtle soft shadow around the circle — `box-shadow: 0 4px 20px rgba(0,0,0,0.12)` or similar. Gives the circle a floating/elevated feel.

### Text Inside Circle
- **Text:**
  - Line 1: `Request a Tailored`
  - Line 2: `Cleaning Plan`
- **Font:** Bold / semi-bold sans-serif.
- **Font size:** Approximately **15–17px**.
- **Color:** Dark navy — `#0D1B2A` or `#0A1628`. Clearly dark, high contrast against white background.
- **Alignment:** **Center-aligned** (both lines centered within the circle).
- **Line height:** ~1.3.
- **No icon, no arrow** inside the circle — text only.
- **Behavior:** This circle functions as a **clickable CTA button** (link/button to a contact or quote form).

---

## 2. Main Footer Body

### Background
- **Color:** Deep dark navy blue — `#0A1628` or `#0D1B2E`. Same deep navy as the dark banners used elsewhere in the site.
- **Full width** of the viewport.
- **Padding top:** ~60–70px (extra space at top to accommodate the overlapping circle badge above).
- **Padding bottom:** ~40–50px.
- **Padding left/right:** ~60–80px (or centered max-width container).

### Layout
Four columns arranged horizontally, left to right:
1. **Logo + Contact Info** (~25% width)
2. **Quick Link** (~20% width)
3. **Services** (~25% width)
4. **Business Hours** (~30% width)

- **Column gap:** ~40–60px between each column.
- **Vertical alignment:** All columns top-aligned.

---

### Column 1: Logo + Contact Info

#### Logo
- **CleanEra full logo** — same logo used in the site header.
- Composed of:
  - **CE emblem/icon** on the left: a square-ish geometric badge with stylized `CE` letters. Uses **dark green** and **white** colors (on the dark navy background the icon adapts — green and white visible).
  - **"CleanEra" wordmark** to the right of the icon: Bold sans-serif text. **"Clean"** appears in **white** and **"Era"** appears in a slightly different weight or the same white — or possibly **"Clean"** is white and **"Era"** is green. On the dark background: the full text reads as white/light.
- **Logo dimensions:** Approximately **140–160px wide × 30–36px tall**.
- **Margin bottom from logo to contact info:** ~20–28px.

#### Contact Info (below logo)
Three lines of contact information, each preceded by a small icon:

**Line 1 — Phone:**
- **Icon:** Phone/telephone icon — white outline, approximately **14–16px**.
- **Text:** `416-207-9500`
- **Font:** Regular sans-serif, ~13–14px.
- **Color:** White `#FFFFFF` or very light grey `#E0E0E0`.
- **Icon-text gap:** ~8px.

**Line 2 — Email:**
- **Icon:** Envelope/mail icon — white outline, approximately **14–16px**.
- **Text:** `support@getcleanera.com`
- **Font:** Regular sans-serif, ~13–14px.
- **Color:** White `#FFFFFF` or very light grey.
- **Icon-text gap:** ~8px.

**Line 3 — Address:**
- **Icon:** Map pin / location pin icon — white outline, approximately **14–16px**.
- **Text (exact — note: this appears to be a placeholder/dev note):**
  > `Suite 750 should be on the same line as the "Robert Speck Parkway`
  *(This is clearly a developer note / placeholder text — NOT the final address. The final address should be: `Suite 750, [number] Robert Speck Parkway` on a single line. The client must supply the complete final address.)*
- **Font:** Regular sans-serif, ~13–14px.
- **Color:** White `#FFFFFF` or very light grey.
- **Line wrapping:** The address text wraps to 2 lines within the column width.
- **Icon-text gap:** ~8px. Icon aligns to the **top** of the text block (top-aligned) when text wraps.

**Spacing between contact lines:** ~10–14px gap between each line item.

---

### Column 2: Quick Link

#### Column Heading
- **Text:** `Quick Link`
- **Font:** Bold / semi-bold sans-serif.
- **Font size:** ~15–17px.
- **Color:** White `#FFFFFF`.
- **Margin bottom:** ~14–18px before the link list.

#### Navigation Links (vertical list)
All links are plain text links — no icons, no bullets.

1. `About Us`
2. `Services`
3. `Facilities Served`
4. `Locations`
5. `Blog`
6. `Contact`

- **Font:** Regular weight sans-serif.
- **Font size:** ~13–14px.
- **Color:** White `#FFFFFF` or light grey `#D0D8E4` — slightly softer than full white (muted).
- **Line height / gap between links:** ~10–14px between each link item.
- **Hover state:** Not visible in screenshot — assume underline or color change to brand green on hover.
- **No underline in default state.**

---

### Column 3: Services

#### Column Heading
- **Text:** `Services`
- **Font:** Bold / semi-bold sans-serif.
- **Font size:** ~15–17px.
- **Color:** White `#FFFFFF`.
- **Margin bottom:** ~14–18px before the link list.

#### Navigation Links (vertical list)

1. `Commercial Cleaning`
2. `Specialized Cleaning Services`

- **Font:** Regular weight sans-serif.
- **Font size:** ~13–14px.
- **Color:** White `#FFFFFF` or light grey `#D0D8E4`.
- **Gap between links:** ~10–14px.
- **No underline in default state.**

---

### Column 4: Business Hours

#### Column Heading
- **Text:** `Business Hours`
- **Font:** Bold / semi-bold sans-serif.
- **Font size:** ~15–17px.
- **Color:** White `#FFFFFF`.
- **Margin bottom:** ~14–18px before the hours text.

#### Hours Content

**Line 1:**
- **Icon:** Clock icon — white outline, approximately **14–16px**. Positioned to the left of the text.
- **Text:** `Office: Monday - Friday 9 AM - 5 PM`
- **Font:** Regular sans-serif, ~13–14px.
- **Color:** White `#FFFFFF` or light grey.
- **Icon-text gap:** ~8px.

**Line 2:**
- **No icon** — plain text only (no icon on this line).
- **Text:** `Cleaning services available 24/7`
- **Font:** Regular sans-serif, ~13–14px.
- **Color:** White `#FFFFFF` or light grey.
- **Margin top from line 1:** ~8–10px.

---

## 3. Bottom Bar / Copyright Strip

A thinner strip at the very bottom of the footer, visually separated from the main footer body.

### Background
- **Color:** Slightly darker than the main footer body — approximately `#071020` or `#060E1A`. A deeper/darker navy, clearly distinguishable from the main footer above.
- **OR** it may be the same color as the main footer but separated by a **thin horizontal divider line** — approximately `1px solid rgba(255,255,255,0.1)` or `rgba(255,255,255,0.08)` — a very subtle white line.
- **Full width** of the viewport.
- **Height:** Approximately **52–60px** total (slim strip).
- **Padding:** ~14–18px vertical, ~60–80px horizontal (matching main footer container).

### Layout
Two elements side by side on the same horizontal row:
- **Left:** Copyright text.
- **Right:** Social media buttons (3 buttons).
- **Vertical alignment:** Both elements are **vertically centered** within the strip.

---

### Left: Copyright Text

- **Text:** `Copyright © 2026. Design & Developed by Geeks Root.`
- **Font:** Regular weight sans-serif.
- **Font size:** Approximately **12–13px**.
- **Color:** Light grey / muted white — approximately `#A0AABB` or `#8B98AE`. NOT full white — a softer, more muted tone.
- **Alignment:** Left-aligned.

---

### Right: Social Media Buttons (3 buttons)

Three pill-shaped social media buttons in a horizontal row, right-aligned.

#### Common Button Styling:
- **Shape:** Pill / rounded rectangle — `border-radius: ~20–24px`.
- **Background:** Slightly lighter navy than the bottom bar — approximately `#152238` or `#1A2B45`. Dark navy with subtle contrast against the strip background.
- **No visible outer border/stroke** on the buttons — they blend into the dark background but have enough contrast to be readable.
- **Padding:** ~8–10px vertical × ~16–20px horizontal.
- **Height:** Approximately **32–36px**.
- **Gap between buttons:** ~8–10px.

#### Button Content (each button has icon + text):
- **Icon:** Small social media platform icon — white, approximately **12–14px**.
- **Text:** Platform name — white, regular weight, ~12–13px.
- **Icon-text gap:** ~6px.
- **All text and icons:** White `#FFFFFF`.

#### The Three Buttons (left to right):

**Button 1 — LinkedIn:**
- Icon: LinkedIn `in` logo — white.
- Text: `linkedin`
- Full button label: `in linkedin`

**Button 2 — Facebook:**
- Icon: Facebook `f` logo — white.
- Text: `facebook`
- Full button label: `f facebook`

**Button 3 — Instagram:**
- Icon: Instagram camera/circle logo — white.
- Text: `instagram`
- Full button label: `@ instagram` *(the instagram icon resembles an `@` or camera shape)*

---

## Colors Reference

| Element | Color |
|---|---|
| CTA circle background | White `#FFFFFF` |
| CTA circle border — top arc | Brand green `#2ECC71` |
| CTA circle border — bottom arc | Dark teal `#1A6B8A` or `#0E7C8A` |
| CTA circle text | Dark navy `#0D1B2A` |
| Main footer background | Deep navy `#0A1628` or `#0D1B2E` |
| Logo — "CleanEra" text | White `#FFFFFF` (or white + green) |
| Logo — CE icon | Green + white |
| Contact info text | White or light grey `#E0E0E0` |
| Contact info icons | White `#FFFFFF` |
| Column headings | White `#FFFFFF` |
| Navigation / link text | White or muted `#D0D8E4` |
| Hours text | White or muted `#D0D8E4` |
| Hours clock icon | White `#FFFFFF` |
| Bottom bar background | Deeper navy `#071020` or divider from main footer |
| Copyright text | Muted grey `#A0AABB` |
| Social button background | Dark navy `#152238` or `#1A2B45` |
| Social button text/icons | White `#FFFFFF` |
| Divider line (if present) | `rgba(255,255,255,0.08)` |

---

## Typography Summary

| Element | Weight | Size (approx) | Color |
|---|---|---|---|
| CTA circle text | Bold / Semi-bold | 15–17px | Dark navy |
| Logo wordmark | Bold | ~18–22px | White / green |
| Footer column headings | Bold / Semi-bold | 15–17px | White |
| Contact / hours text | Regular | 13–14px | White / light grey |
| Navigation links | Regular | 13–14px | White / light grey |
| Copyright text | Regular | 12–13px | Muted grey |
| Social button text | Regular | 12–13px | White |

---

## Spacing & Sizing Summary

| Property | Value |
|---|---|
| CTA circle diameter | ~160–180px |
| CTA circle border stroke | ~4–6px |
| CTA circle vertical overlap | ~50% above / 50% below footer top edge |
| Main footer padding top | ~60–70px (clears circle) |
| Main footer padding bottom | ~40–50px |
| Main footer horizontal padding | ~60–80px |
| Column gap | ~40–60px |
| Contact line gap | ~10–14px |
| Nav link gap | ~10–14px |
| Bottom bar height | ~52–60px |
| Bottom bar padding vertical | ~14–18px |
| Social button height | ~32–36px |
| Social button border-radius | ~20–24px |
| Social button gap | ~8–10px |

---

## Important Notes for Development

1. **Address placeholder:** The address in Column 1 (`Suite 750 should be on the same line as the "Robert Speck Parkway`) is clearly a developer/content note — NOT final copy. The final address must be provided by the client and formatted correctly.
2. **CTA Circle interactivity:** The circle badge should be a clickable link/button navigating to a contact or quote request page.
3. **CTA circle positioning:** Use `position: absolute` or negative `margin-top` to pull the circle up so it overlaps the footer's top edge and the section above it. Ensure the section above has `overflow: visible` or sufficient `padding-bottom` to not clip the circle.
4. **Two-tone circle border:** Implement using an SVG circle with a `stroke-dasharray` split, or using two overlapping pseudo-elements with `border-color`, or a `conic-gradient` border trick.

---

## Responsive Notes

- On **tablet/mobile:** Stack the 4 footer columns into 2×2 or single column.
- The CTA circle remains centered and keeps its overlap behavior.
- Social media buttons may stack or reduce to icon-only on mobile.
- Bottom bar stacks copyright text above social buttons on mobile.
- Logo remains in the first position of the stacked columns.
