# Component: `IndustrySection`

A full-width, tabbed/switchable section that showcases **what is included** in CleanEra's cleaning services across **multiple industry types** (e.g. Office Cleaning, Industrial). Each industry tab displays a **dark navy header banner** with the category label, a **horizontal scrollable row of image cards** with caption labels, and a **CTA button** at the end of all tabs. Navigation arrows let the user move between industry tabs.

There are **two screenshots** showing two different states/tabs of the same component:
- **State 1 (Image 1):** "Office Cleaning" tab active
- **State 2 (Image 2):** "Industrial" tab active

---

## Overall Section Structure (Top to Bottom)

1. **Section Heading** — centered above everything
2. **Tab Content Block** — composed of:
   - Dark navy banner (left-anchored) with the industry label title
   - Left/Right navigation arrows (right-side or left-side, outside the banner)
   - Horizontal row of 4 image cards with captions
3. **CTA Button** — centered below the image cards (visible only at bottom of last tab / or persistent)

---

## 1. Section Heading

- **Text:** `What's Included in Our Office Cleaning`
  *(Note: This heading appears only in Image 1 / the first tab state. It is center-aligned above the component. It may change per tab or be a static intro heading.)*
- **Position:** Horizontally centered, above the dark navy banner block.
- **Font:** Medium-bold weight, sans-serif. Dark near-black color (`#1A1A2E` or `#111111`).
- **Font size:** Approximately **28–34px**.
- **Line height:** ~1.3 — wraps to 2 lines:
  - Line 1: `What's Included in Our Office`
  - Line 2: `Cleaning`
- **Alignment:** **Center-aligned** text.
- **Margin bottom:** ~32–48px before the dark navy banner.
- **Background:** White / very light grey — matches the page background.

---

## 2. Dark Navy Banner (Industry Title Block)

This is a large dark-colored rectangular block that is **left-aligned** and extends from the left edge of the viewport partway across the screen. It is NOT full-width — it ends roughly 70–72% of the viewport width, leaving the right ~28–30% as white space (where the nav arrows appear in Image 1).

### Positioning & Size
- **Starts at:** Far left edge of the viewport (0px left margin, bleeds to the left edge).
- **Ends at:** Approximately **70–72% of viewport width** (right edge is a hard vertical cut, no rounding on the right side visible).
- **Height:** Approximately **160–200px** tall (tall enough to comfortably contain the 2-line heading text with generous padding).
- **Top edge:** Flush with the visible area, a little padding from the top.
- **Bottom edge:** The image card row begins to overlap/sit below this banner (the cards start below the banner's bottom edge with some visual overlap or tight spacing).

### Background Color
- **Deep dark navy blue:** `#0A1628` or `#0D1B2E` — very dark, almost black-navy.
- Solid fill, no gradient, no texture.

### Border Radius
- **Top-left:** 0 (flush with left edge)
- **Bottom-left:** 0 (flush with left edge)
- **Top-right:** ~12–16px rounded
- **Bottom-right:** ~12–16px rounded
- *(Only the right corners are rounded; left side is flush/straight.)*

### Title Text Inside Banner

#### Image 1 (Office tab):
- **Text:** `Office Cleaning Includes:`
- **Wraps to 2 lines:**
  - Line 1: `Office Cleaning`
  - Line 2: `Includes:`
- **Font:** **Bold, heavy weight** — appears to be a chunky bold sans-serif (possibly a condensed or display weight). White color `#FFFFFF`.
- **Font size:** Large — approximately **40–48px**.
- **Line height:** ~1.1–1.2 (tight).
- **Padding inside banner:** ~32–40px left, ~28–36px top/bottom.
- **Text alignment:** Left-aligned within the banner.

#### Image 2 (Industrial tab):
- **Text:** `Industrial Includes:`
- **Single line** (shorter text, fits on one line).
- Same font, weight, color, and size as above.
- Same padding rules.

---

## 3. Navigation Arrows

Two arrow buttons for switching between industry tabs (prev/next).

### Image 1 (Office tab) — Arrow Position:
- Located to the **right of the dark navy banner**, in the white space area.
- Positioned vertically at the **center of the banner's height**.
- Two arrows side by side: **← (left arrow)** and **→ (right arrow)**.
- Horizontal gap between arrows: ~16–20px.

### Image 2 (Industrial tab) — Arrow Position:
- Located to the **left side of the screen**, outside/before the dark navy banner (since in Image 2 the banner starts further right).
- Same vertical alignment — centered with the banner height.
- Same two arrows: **← (left arrow)** and **→ (right arrow)**.

### Arrow Button Styling:
- **Shape:** No visible background box or circle — the arrows appear as bare icon arrows with no fill.
- **Color:** **Light periwinkle / muted sky blue** — approximately `#A0B4CC` or `#B0C4D8`. NOT dark, NOT bright. Soft, muted tone.
- **Size:** Approximately **24–32px** total width per arrow icon.
- **Style:** Simple chevron or thin arrow icon (`←` / `→`). Stroke-style, not filled arrow heads.
- **Hover state:** Not visible in screenshots (assume standard hover effect — darken or brand color on hover).
- **No border, no background card** around the arrows — they float freely in the white space.

---

## 4. Image Card Row

A horizontal row of **4 image cards** displayed side by side below the dark navy banner. The cards are uniform in size, evenly spaced, and each has a text caption overlaid at the bottom.

### Row Layout
- **Number of visible cards:** 4 at a time (horizontal scroll or pagination — the navigation arrows switch between sets of 4 cards).
- **Card alignment:** The row of cards spans the **full width of the viewport** — cards bleed from left edge to right edge.
- **Gap between cards:** Approximately **8–12px** (small gap).
- **Vertical position:** Cards sit directly below the banner. The top of the cards is approximately at or just below the bottom of the dark navy banner. There is a slight overlap impression — the banner visually sits above/behind the cards.

### Individual Card Dimensions
- **Width:** Each card is approximately **~300–330px** wide (roughly 1/4 of viewport).
- **Height:** Approximately **380–420px** tall (portrait orientation, tall cards).
- **Border radius:** **~16–20px** on all four corners (uniformly rounded rectangle).
- **Overflow:** `hidden` — images fill the card completely, rounded corners clip the image edges.

### Card Image Styling
- Each card contains a **full-bleed photograph** — the image covers 100% of the card (no padding, no white border around image within card).
- Images are in **portrait / vertical orientation** matching the tall card shape.
- **Object-fit: cover** — images are cropped/zoomed to fill the card.
- No visible inner border or stroke on any card (in Image 1 or Image 2).

### Card Caption (Text Overlay)
- **Position:** Bottom-left corner of each card, overlaid on top of the image.
- **Background:** The caption text sits directly on the image — there is a **dark gradient overlay** at the bottom of each card (dark navy to transparent from bottom upward, approximately 40–50% of card height) so the white text is legible.
- **Gradient:** Bottom portion of image fades from `rgba(10, 22, 40, 0.85)` or similar dark navy/black to fully transparent toward the center of the card.
- **Text color:** White `#FFFFFF`.
- **Font:** Bold or semi-bold sans-serif.
- **Font size:** Approximately **16–18px**.
- **Text alignment:** Left-aligned.
- **Padding from bottom/left:** ~16–20px from bottom edge, ~16–20px from left edge.
- **Line wrapping:** Some captions wrap to 2 lines (e.g. "Production floor cleaning", "Background checked Cleaning Teams").

---

## Image Card Details — Per Tab

### Tab 1: Office Cleaning (Image 1)

| Card # | Image Description | Caption Text |
|---|---|---|
| 1 | Close-up of hands (wearing orange rubber gloves) using a scrubbing brush on a dark wooden surface — dust/debris visible. Indoor kitchen or breakroom setting, wooden cabinetry in background. | `Workstations & common areas` |
| 2 | A male cleaner (wearing grey t-shirt, black apron, yellow rubber gloves) kneeling and scrubbing a white tiled wall or bath/shower area. Dispenser unit visible on wall. Bright window light in background. | `Washroom sanitation` |
| 3 | Two workers in **bright orange hi-vis safety vests and hard hats** carrying large black garbage bags in an outdoor/semi-outdoor industrial area. A large **green garbage truck/compactor** machine is visible in the background. | `Garbage removal` |
| 4 | A smiling female cleaner wearing a **dark navy/blue apron**, white t-shirt, and **yellow rubber gloves**, holding a **blue spray bottle**. She is standing at a glass partition/door. Another person with blue gloves is visible behind the glass. Modern office interior in background. | `Floor care` |

---

### Tab 2: Industrial (Image 2)

| Card # | Image Description | Caption Text |
|---|---|---|
| 1 | Same female cleaner as Card 4 in Office tab — smiling, dark navy apron, white t-shirt, yellow gloves, blue spray bottle. Glass partition setting. Another gloved person visible in background. | `Production floor cleaning` *(wraps to 2 lines)* |
| 2 | Two workers in a **warehouse/industrial facility** — one male wearing a **bright neon yellow/green safety vest** (dark shirt underneath, bearded), and a female colleague also in a **neon yellow/green safety vest** (black jacket underneath). They are smiling and appear to be in conversation. Large industrial cylindrical tanks or storage containers visible in the background (brownish/metallic). | `Warehouse aisles` |
| 3 | A male worker wearing **dark overalls/work clothes** and **yellow rubber gloves**, reaching upward to clean a wooden surface (appears to be a wall panel or cabinet door in a hallway or corridor). His arm is fully extended above his head. A door or doorframe is visible behind him. | `Break rooms` |
| 4 | A male worker wearing **white t-shirt**, **dark navy/denim dungarees/overalls**, and **yellow rubber gloves**, leaning forward over a desk area with **black office chairs** and what appear to be **computer monitors/screens** in an office setting. He is wiping/cleaning the desk surface. | `Locker rooms` |

---

## 5. CTA Button (Bottom of Section)

Visible only in **Image 2** (at the bottom of the Industrial tab, after the image cards).

- **Text:** `Get a Custom Scope`
- **Position:** **Horizontally centered** below the image card row.
- **Margin top:** ~40–56px above the button, after the image cards.
- **Style:**
  - **Background:** Light sky blue / baby blue — approximately `#87CEEB` or `#6EC6F5` (same style as the CTA button in ProblemsSection).
  - **Text color:** White `#FFFFFF`.
  - **Font:** Regular or semi-bold, sans-serif. ~14–15px.
  - **Border radius:** Pill/capsule shape — ~50px radius (fully rounded ends).
  - **Padding:** ~12–14px vertical × ~36–44px horizontal.
  - **No border/stroke.**
  - **No drop shadow visible** (flat style).
  - **Width:** approximately **180–200px** (snug fit to text with padding).

---

## Tab / State Switching Logic

This component has **multiple tabs/states**, one per industry type. Based on the two screenshots:

- **Tab 1:** Office Cleaning → heading: `"What's Included in Our Office Cleaning"`, banner label: `"Office Cleaning Includes:"`
- **Tab 2:** Industrial → no separate section heading visible (or heading may update), banner label: `"Industrial Includes:"`

### Switching Mechanism
- The **← / → arrow buttons** switch between tabs.
- When switching:
  - The **dark navy banner text** updates to the new industry label.
  - The **4 image cards** update to show the new industry's photos and captions.
  - The banner position may shift (in Image 1 it is left-anchored starting at 0; in Image 2 it appears to start further right — approximately 28–30% from left — leaving white space on the LEFT where the arrows are placed).
- **Transition:** Likely a slide or fade animation between tab states.

### Banner Position Difference Between Tabs
- **Image 1 (Office tab):** Banner starts at the **far left (0px)**, arrows are on the **right side** in the white space.
- **Image 2 (Industrial tab):** Banner starts at **~28–30% from left**, arrows are on the **left side** in the white space before the banner.
- This suggests the banner may **slide or shift position** between tabs, OR the layout structure is mirrored between certain tabs.

---

## Colors Reference

| Element | Color |
|---|---|
| Page / section background | Very light grey-white `#F5F7FA` or `#FFFFFF` |
| Section heading text | Dark near-black `#111111` or `#1A1A2E` |
| Dark navy banner background | Deep navy `#0A1628` or `#0D1B2E` |
| Banner title text | White `#FFFFFF` |
| Navigation arrow icons | Muted periwinkle blue `#A0B4CC` or `#B0C4D8` |
| Image card bottom gradient | Dark navy to transparent `rgba(10, 22, 40, 0.85)` → transparent |
| Card caption text | White `#FFFFFF` |
| CTA button background | Sky blue `#87CEEB` or `#6EC6F5` |
| CTA button text | White `#FFFFFF` |

---

## Typography Summary

| Element | Weight | Size (approx) | Notes |
|---|---|---|---|
| Section heading | Medium-bold | 28–34px | Center-aligned, wraps 2 lines |
| Banner industry label | Bold / Heavy | 40–48px | White, left-aligned, wraps 1–2 lines |
| Card caption text | Bold/Semi-bold | 16–18px | White, bottom-left of card, may wrap |
| CTA button text | Regular/Semi-bold | 14–15px | White, center-aligned |

---

## Spacing & Sizing Summary

| Property | Value |
|---|---|
| Section top padding | ~60–80px |
| Section heading margin-bottom | ~32–48px |
| Dark navy banner height | ~160–200px |
| Dark navy banner width | ~70–72% viewport (Image 1) / ~72% from right edge (Image 2) |
| Banner padding-left | ~32–40px |
| Banner padding-top/bottom | ~28–36px |
| Image card width | ~300–330px (~25% viewport) |
| Image card height | ~380–420px |
| Image card border-radius | ~16–20px |
| Gap between image cards | ~8–12px |
| Card caption padding (bottom/left) | ~16–20px |
| Card bottom gradient height | ~40–50% of card height |
| Nav arrow size | ~24–32px |
| CTA button border-radius | ~50px |
| CTA button margin-top | ~40–56px |
| Section bottom padding | ~60–80px |

---

## Responsive Notes

- On **mobile**: Stack vertically — show 1 card at a time with swipe/arrow navigation.
- Section heading remains centered.
- Dark navy banner goes full width on mobile.
- Navigation arrows move to below the cards or become swipe gestures.
- CTA button goes full-width or stays centered with auto width.
