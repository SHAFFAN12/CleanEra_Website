# Component: `OnboardingSection`

A two-column section layout where the **left column** contains a heading, description text, and a CTA button, and the **right column** contains a **2×3 grid of feature cards** — each card has a circular photo and a text label beneath it. One card has a visually distinct "active/highlighted" state. The entire section sits on a white background.

---

## Overall Section Structure

- **Layout:** Two columns side by side.
  - **Left column (~35–38% width):** Text block — heading, description, CTA button.
  - **Right column (~62–65% width):** 2-row × 3-column grid of feature cards.
- **Background:** White `#FFFFFF` throughout.
- **Section padding:** ~60–80px top and bottom, ~60–80px horizontal (or centered max-width container).
- **Vertical alignment:** Left column content is **top-aligned** with the right column grid.
- **Column gap:** ~40–60px between left text block and right card grid.

---

## LEFT COLUMN — Text Block

### Vertical Layout (top to bottom):
1. Heading
2. Description paragraph
3. CTA Button

---

### 1. Heading

- **Text:**
  - Line 1: `Why Businesses Switch to`
  - Line 2: `CleanEra`
- **Font:** Bold / heavy weight sans-serif.
- **Font size:** Approximately **32–38px**.
- **Color:** Dark near-black / dark navy — `#0D1B2A` or `#111111`.
- **Line height:** ~1.2.
- **Alignment:** Left-aligned.
- **Margin bottom:** ~12–16px before description paragraph.
- **No decorative underline or accent** below heading.

---

### 2. Description Paragraph

- **Text (exact):**
  > *"Many companies chose CleanEra after dealing with poor communication, missed cleans, staffing issues, or lack of accountability."*
- **Font:** Regular weight sans-serif.
- **Font size:** Approximately **13–15px**.
- **Color:** Medium-dark grey — `#555555` or `#666666`.
- **Line height:** ~1.5–1.6.
- **Alignment:** Left-aligned.
- **Width:** Constrained to the left column width — wraps across approximately 2–3 lines.
- **Margin bottom:** ~20–28px before CTA button.

---

### 3. CTA Button

- **Text:** `Talk to Our Team`
- **Background:** Light sky blue / baby blue — `#87CEEB` or `#6EC6F5` (same brand CTA blue used throughout the site).
- **Text color:** White `#FFFFFF`.
- **Font:** Regular or semi-bold sans-serif. ~13–15px.
- **Border radius:** Pill/capsule shape — `~50px` (fully rounded ends).
- **Padding:** ~10–13px vertical × ~28–36px horizontal.
- **Width:** Approximately **160–180px** — snug fit to text with padding.
- **No border/stroke.** Flat button, no visible shadow.
- **Alignment:** Left-aligned (aligns with left edge of heading and description text).
- **Margin top:** ~20–28px from description paragraph.

---

## RIGHT COLUMN — Feature Card Grid

### Grid Layout
- **Structure:** **2 rows × 3 columns** = 6 cards total.
  - **Row 1 (top):** 2 cards visible + 1 partially cut off on the right edge (the component may scroll or the viewport clips it — see note below).
  - **Row 2 (bottom):** 4 cards visible fully.

> **Important layout note:** Looking carefully at the screenshot:
> - **Row 1** shows only **2 full cards** (cards 1 and 2) and then white space to the right — suggesting the top row is only 2 cards wide, OR the 3rd card in row 1 is off-screen/cut off by the viewport.
> - **Row 2** shows **4 full cards** in a row.
> - This creates an asymmetric visual: top row = 2 cards, bottom row = 4 cards.
> - The most likely interpretation is: the grid is **4 columns wide** for row 2, but row 1 only uses the **last 2 columns** (right-aligned), leaving the leftmost 2 columns in row 1 empty — this aligns the top-right 2 cards with the heading on the left.
> - **Alternative interpretation:** The full grid is 4 columns × 2 rows = 8 cards total, but in the screenshot the left column text block covers the first 2 columns of row 1, making only the rightmost 2 cards of row 1 visible.
> - **Recommended implementation:** 4-column grid for both rows (8 cards total), where the left column of the page layout overlaps/sits alongside the first half of the grid, making only 2 cards of row 1 visible in the viewport alongside the text block.

- **Gap between cards (horizontal):** ~16–20px.
- **Gap between rows (vertical):** ~16–20px.
- **Card alignment:** Top-aligned within each row.

---

### Individual Card Styling (Common Properties)

- **Background:** White `#FFFFFF`.
- **Border:** Thin light grey border — approximately `1px solid #E0E0E0` or `#EBEBEB`.
- **Border radius:** ~12–16px on all four corners.
- **Box shadow:** Very soft and subtle — `box-shadow: 0 2px 10px rgba(0,0,0,0.06)`. Barely visible lift.
- **Padding:** ~20–24px on all sides.
- **Width:** Approximately **190–220px** per card (equal width across all columns).
- **Height:** Approximately **220–250px** (equal height across all cards in both rows).

#### Active / Highlighted Card State:
- Card 2 in Row 1 (`Trained and Background checked staff`) has a visually distinct **active/selected state**:
  - The card's **border becomes a visible blue** — approximately `2px solid #4A90D9` or `#3B82F6` (medium blue, clearly visible vs the inactive grey border).
  - OR the card has a **light blue background tint** — approximately `#EBF4FF` or `#F0F7FF` (very pale blue wash).
  - The **title text is also blue** (see Typography section below) instead of the usual dark navy/black.
  - No other structural difference — same layout, same image, same padding.

---

### Card Internal Layout (Top to Bottom, Inside Each Card)

1. **Circular photo** — centered horizontally within the card.
2. **Feature label text** — centered below the photo.

No number labels, no icons, no buttons — just photo + text.

---

### A. Circular Photo

- **Shape:** Perfect circle — `border-radius: 50%`.
- **Size:** Approximately **130–150px** diameter (consistent across all 6 cards).
- **Position:** Horizontally centered within the card.
- **Margin top from card edge:** ~8–12px (photo is near the top of the card).
- **Image style:** Portrait photograph of a cleaning professional — `object-fit: cover` filling the circle.
- **Border on circle:** No visible stroke/border around the circle itself — image clips cleanly to the circle shape.
- **Background behind circle:** White card background shows at the sides.

---

### B. Feature Label Text

- **Position:** Centered below the circular photo.
- **Margin top from circle:** ~16–20px.
- **Font:** Regular or semi-bold sans-serif.
- **Font size:** Approximately **14–15px**.
- **Alignment:** **Center-aligned**.
- **Line height:** ~1.4.
- **Wrapping:** Some labels wrap to 2 lines.

#### Text Color:
- **Default (inactive) cards:** Dark near-black / dark navy — `#0D1B2A` or `#1A1A2E`.
- **Active/highlighted card (Card 2 Row 1):** **Medium blue** — approximately `#3B82F6` or `#4A90D9`. The text is clearly blue, matching the active border color.

---

## All 6 Cards — Detail

### ROW 1 (Top Row — 2 visible cards in right portion of grid)

#### Card R1-1: `Dedicated account management`

- **Photo description:**
  - Female cleaning professional, smiling, facing slightly left toward camera.
  - Wearing: **blue cap/baseball hat**, **blue apron or work shirt**, holding **yellow and green cleaning supply bottles** in front of her at chest level.
  - Background: **Bright teal/turquoise blue** — a solid or near-solid vivid teal background. Bright and colorful.
  - Mood: Friendly, professional, warm smile.
- **Label text:** `Dedicated account management`
  - Wraps to 2 lines: `Dedicated account` / `management`
  - Color: Dark navy/near-black (default state).
  - Weight: Regular or semi-bold.

---

#### Card R1-2: `Trained and Background checked staff` *(ACTIVE CARD)*

- **Photo description:**
  - Two male cleaning professionals standing side by side, both in **grey/dark work uniforms or jumpsuits**.
  - One is holding what appears to be **cleaning equipment** (mop or similar tall tool).
  - They appear to be in a **commercial/industrial interior setting** — light grey/blue background, possibly a hallway or facility.
  - Both figures are standing upright, face-forward or slightly turned.
  - Mood: Professional, competent, team-oriented.
- **Label text:** `Trained and Background checked staff`
  - Wraps to 3 lines: `Trained and` / `Background checked` / `staff`
  - **Color: Medium blue `#3B82F6` or `#4A90D9`** — this is the ACTIVE card styling.
  - Weight: Semi-bold (appears slightly bolder than inactive labels due to the blue color emphasis).
- **Card border:** Visible **blue border** (~2px solid blue matching the text color).
- **Card background:** May have very faint blue tint — `#F0F7FF` or white — subtle.

---

### ROW 2 (Bottom Row — 4 full cards)

#### Card R2-1: `Reliable scheduling systems`

- **Photo description:**
  - Male cleaning professional, bearded, facing the camera with a neutral/serious expression.
  - Wearing: **White t-shirt**, **dark navy/blue apron** (bib-style).
  - Holding: **Yellow rubber gloves** in one hand, a **blue cleaning supply bottle or container** in the other — items held at waist/hip level.
  - Background: **Blurred indoor kitchen or cleaning supply area** — warm tones, slightly dark background.
  - Mood: Reliable, composed, experienced.
- **Label text:** `Reliable scheduling systems`
  - Wraps to 2 lines: `Reliable scheduling` / `systems`
  - Color: Dark navy/near-black (default state).

---

#### Card R2-2: `Quality inspections`

- **Photo description:**
  - Female cleaning professional, smiling broadly, facing the camera directly.
  - Wearing: **White t-shirt**, **dark navy/dark blue apron** (bib-style).
  - Holding: **Multiple colorful cleaning supply spray bottles** — pink, yellow, blue — held together in front of her at chest level. The bottles are upright and clearly visible.
  - Background: **Blurred modern kitchen interior** — light grey/white cabinetry, bright and airy.
  - Mood: Cheerful, professional, well-equipped.
- **Label text:** `Quality inspections`
  - Single line (fits on 1 line).
  - Color: Dark navy/near-black (default state).

---

#### Card R2-3: `Fast issue resolution`

- **Photo description:**
  - Male cleaning professional, smiling broadly, facing directly at camera.
  - Wearing: **Blue baseball cap**, **blue work shirt or jacket** (darker blue than the cap).
  - Holding: A **bucket or caddy with colorful cleaning supplies** — orange, blue tools visible inside the bucket — held at waist level in front.
  - Background: **Blurred light interior** — very light/pale background, possibly a residential or commercial hallway.
  - Mood: Approachable, fast-moving, solution-ready.
- **Label text:** `Fast issue resolution`
  - Single line (fits on 1 line).
  - Color: Dark navy/near-black (default state).

---

#### Card R2-4: `Scalable multi-site service`

- **Photo description:**
  - Female cleaning professional in the foreground (right side), smiling and looking to her left.
  - Wearing: **White shirt**, **dark navy/blue apron or vest**.
  - A second person (male) is visible in the **background/slightly out of focus** to her left — also appears to be in work attire. The background person adds a "team" impression.
  - Setting: **Warm interior** — appears to be a hotel lobby, reception area, or upscale commercial space. Warm ambient lighting, brown/cream tones in background.
  - Mood: Professional team, premium/upscale service feel.
- **Label text:** `Scalable multi-site service`
  - Wraps to 2 lines: `Scalable multi-site` / `service`
  - Color: Dark navy/near-black (default state).

---

## Decorative Background Elements (Right Side of Component)

Visible in the **far right background** of the screenshot (partially visible, outside the main content area), there are **faint circular clock/timer outlines**:
- Two overlapping light grey circle outlines — resembling clock faces or abstract rings.
- Color: Very light grey / near-white — `rgba(200,200,200,0.3)` or similar. Very subtle, decorative only.
- Size: Large circles, approximately **100–160px** diameter.
- Position: Far right edge of the section, vertically centered around the top card row.
- These are purely decorative background SVG elements — no interactivity.

---

## Colors Reference

| Element | Color |
|---|---|
| Section background | White `#FFFFFF` |
| Heading text | Dark navy `#0D1B2A` or `#111111` |
| Description paragraph text | Medium grey `#555555` or `#666666` |
| CTA button background | Sky blue `#87CEEB` or `#6EC6F5` |
| CTA button text | White `#FFFFFF` |
| Card background (all) | White `#FFFFFF` |
| Card border — inactive | Light grey `1px solid #E0E0E0` |
| Card border — active | Medium blue `2px solid #3B82F6` or `#4A90D9` |
| Card background — active (optional) | Very pale blue tint `#F0F7FF` (subtle) |
| Card box-shadow | Soft grey `rgba(0,0,0,0.06)` |
| Feature label text — inactive | Dark navy `#0D1B2A` or `#1A1A2E` |
| Feature label text — active | Medium blue `#3B82F6` or `#4A90D9` |
| Decorative circle outlines | Very light grey `rgba(200,200,200,0.3)` |

---

## Typography Summary

| Element | Weight | Size (approx) | Alignment |
|---|---|---|---|
| Section heading | Bold / Heavy | 32–38px | Left |
| Description paragraph | Regular | 13–15px | Left |
| CTA button text | Regular / Semi-bold | 13–15px | Center |
| Feature label — inactive | Regular / Semi-bold | 14–15px | Center |
| Feature label — active | Semi-bold | 14–15px | Center, blue color |

---

## Spacing & Sizing Summary

| Property | Value |
|---|---|
| Section top/bottom padding | ~60–80px |
| Section horizontal padding | ~60–80px (or centered container) |
| Left column width | ~35–38% |
| Right column width | ~62–65% |
| Column gap | ~40–60px |
| Heading margin-bottom | ~12–16px |
| Description margin-bottom | ~20–28px |
| Card grid columns | 4 columns (row 2) / 2 visible (row 1, right-aligned) |
| Card grid row gap | ~16–20px |
| Card grid column gap | ~16–20px |
| Card width | ~190–220px |
| Card height | ~220–250px |
| Card border-radius | ~12–16px |
| Card padding | ~20–24px all sides |
| Circle photo diameter | ~130–150px |
| Circle photo margin-top | ~8–12px |
| Label margin-top from circle | ~16–20px |
| CTA button border-radius | ~50px (pill) |
| CTA button width | ~160–180px |

---

## Responsive Notes

- On **tablet:** Left text column stacks above the card grid (full-width single column layout). Card grid becomes 2×3 (2 columns, 3 rows).
- On **mobile:** Full single-column stack. Text block first, card grid below as 2-column grid (2 cards per row, 3 rows).
- Active card styling (blue border + blue text) persists across all breakpoints.
- Decorative circle background elements can be hidden on mobile.
