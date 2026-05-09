# Component: `ServicesCarousel`

> **Note:** This component is named `IndustrySection` per the brief, but it is visually and functionally distinct from the previously documented `IndustrySection` (the tabbed dark-banner + image-grid layout). This component is a **horizontal card carousel/slider** showcasing individual cleaning service types. It should be treated as a separate component. Recommend naming it `ServicesCarousel` or `ServiceCardsSlider` to avoid confusion.

---

## Component Overview

A **horizontally scrollable card carousel** displaying cleaning service categories. Cards are arranged in a fan/stacked layout where the **center card is elevated and larger** than the surrounding cards, creating a 3D-depth or "active card" visual effect. The component includes dot pagination indicators below and a CTA button on the active (center) card only.

There are **5 cards visible** simultaneously, with the middle (3rd) card being the active/featured card.

---

## Overall Layout & Structure

- **Background:** White `#FFFFFF` — the entire carousel sits on a white page background.
- **Width:** Full container width — cards span from ~left edge to ~right edge of the content area.
- **Height of component area:** Approximately **480–520px** total (including cards + dots below).
- **Card arrangement:** 5 cards visible at once — the outer cards (1st, 2nd, 4th, 5th) are shorter/smaller and the center card (3rd) is taller and more prominent.
- **No visible track, rail, or container border** — cards appear to float on the white background.

---

## Card Size & Scale Relationship

The carousel uses a **graduated scale** — cards scale up toward the center:

| Position | Scale / Size | Approximate Dimensions | Vertical Alignment |
|---|---|---|---|
| 1st (far left) | Smallest | ~180–200px wide × ~320–340px tall | Bottom-aligned with center card |
| 2nd (left) | Medium-small | ~220–240px wide × ~360–380px tall | Bottom-aligned with center card |
| 3rd (center / active) | Largest | ~260–290px wide × ~440–460px tall | Tallest — reference height |
| 4th (right) | Medium-small | ~220–240px wide × ~360–380px tall | Bottom-aligned with center card |
| 5th (far right) | Smallest | ~180–200px wide × ~320–340px tall | Bottom-aligned with center card |

- All cards share the **same bottom baseline** — shorter cards align their bottoms with the center card's bottom edge. The center card extends higher than all others.
- This creates a **rising-toward-center** silhouette / fan effect.
- The center card appears visually elevated — it pops forward/upward.

---

## Card Styling (All Cards — Common Properties)

- **Shape:** Rounded rectangle — `border-radius: ~20–24px` on all 4 corners.
- **Image:** Full-bleed photograph filling the entire card area — `object-fit: cover`.
- **Overflow:** `hidden` — image is clipped to the rounded rectangle.
- **Background beneath image:** Not applicable (image fills card fully).
- **Drop shadow / Box shadow:**
  - All cards have a soft drop shadow.
  - Center (active) card has a **more pronounced shadow** — deeper and more spread than side cards.
  - Side cards have a lighter, subtler shadow.
  - Shadow color: soft grey/navy, approximately `rgba(0, 0, 0, 0.12)–rgba(0, 0, 0, 0.20)`.
- **Gap between cards:** ~12–16px horizontal gap between each adjacent card.
- **No visible border/stroke** on any card.

---

## Card Content Layout (Per Card — Bottom Section)

Each card has a **white content area at the bottom** — a white rectangular section that overlays the bottom portion of the image. This is NOT a gradient — it is a solid white block that sits on top of the lower portion of the image card.

### White Content Area
- **Background:** Solid white `#FFFFFF`.
- **Position:** Anchored to the bottom of the card — it appears as a white "footer" inside the card.
- **Height:** Approximately **25–30% of the card's total height** (~80–110px depending on card size).
- **Width:** Full card width.
- **Border radius:** The white area follows the card's bottom rounded corners — bottom-left and bottom-right are also rounded to ~20–24px, matching the card container.
- **Padding:** ~14–18px left and right, ~12–16px top.

### Content Inside White Area
Each card's white footer contains:
1. **Service Title** (bold text)
2. **"Discover More" link** (for non-active cards) OR **"Get a Custom Scope" CTA button** (for the active/center card only)

---

## Card-by-Card Detail

### Card 1 — Far Left (Smallest)

- **Image:** Female cleaner in **profile/side view** (facing right), wearing:
  - Grey t-shirt
  - Dark grey/charcoal dungaree apron
  - **Yellow rubber gloves**
  - Dark hair in a low ponytail
  - She is reaching forward with both hands toward a large **bright window** — appears to be cleaning the window or glass surface. Natural daylight flooding in from the window behind her.
- **Image tone:** Bright, airy, warm window light.
- **Service Title:**
  - Text: `General Commer` (truncated — full text is `General Commercial Cleaning`)
  - Line 2: `Cleaning`
  - **Font:** Bold/semi-bold sans-serif, dark navy or near-black `#1A1A2E`. ~14–16px.
  - **Line height:** ~1.3.
  - **Alignment:** Left-aligned.
- **"Discover More" Link:**
  - Text: `Discover More`
  - Color: **Medium blue** — approximately `#4A90D9` or `#3B82F6` (standard link blue).
  - Font: Regular weight, ~12–13px.
  - Underline: Not clearly visible, but likely an underline on hover.
  - Alignment: Left-aligned, below the title.
  - Margin-top from title: ~6–8px.

---

### Card 2 — Left (Medium-Small)

- **Image:** Male cleaner wearing:
  - **White t-shirt**
  - **Dark navy/blue apron**
  - **Black face mask** (worn over nose and mouth)
  - **White cap/beanie**
  - **Orange rubber gloves** (partially visible)
  - He is **bending forward/leaning down** — body bent at the waist — appearing to scrub or clean a **floor or low surface**. He is holding a **spray bottle** or cleaning tool in one hand.
  - Indoor setting — **green plants/foliage** visible in the background (upper left of image). Warm indoor lighting.
- **Image tone:** Warm, indoor natural tones.
- **Service Title:**
  - Text: `Cleaning`
  - Line 2: `for Health`
  - **Font:** Bold/semi-bold sans-serif, dark navy/near-black. ~14–16px.
  - **Alignment:** Left-aligned.
- **"Discover More" Link:**
  - Same style as Card 1 — medium blue, ~12–13px, left-aligned.

---

### Card 3 — Center / Active (Largest, Featured)

This is the **hero/active card**. It is the tallest card and has a distinct treatment in its white footer area — it shows a CTA button instead of "Discover More."

- **Image:** Male cleaner wearing:
  - **Mint green / teal polo shirt**
  - **Dark navy/blue apron** (bib-style apron)
  - **Orange rubber gloves** (partially visible at bottom)
  - He is **leaning forward with both hands on the floor**, in a crouched/lunging position — actively scrubbing or wiping the floor. His face is turned slightly toward the camera — **smiling / looking downward**.
  - **Blue upright vacuum cleaner** is visible standing behind him (left side of image).
  - **Grey sofa/couch** visible in the background — residential or commercial lounge setting.
  - **Blue apron strings** visible.
- **Image tone:** Bright, well-lit interior. Clean modern space.
- **Service Title:**
  - Text: `Deep`
  - Line 2: `Cleaning`
  - **Font:** Bold/semi-bold sans-serif, dark navy/near-black `#1A1A2E`. Slightly **larger than non-active cards** — approximately **16–18px**.
  - **Alignment:** Left-aligned.
  - **Margin-bottom from title to button:** ~10–14px.

- **CTA Button (replaces "Discover More" on active card):**
  - Text: `Get a Custom Scope`
  - **Background:** Light sky blue / baby blue — `#87CEEB` or `#6EC6F5` (same brand CTA blue used throughout the site).
  - **Text color:** White `#FFFFFF`.
  - **Font:** Regular or semi-bold, ~13–14px.
  - **Border radius:** Pill/capsule — `~50px` border-radius (fully rounded ends).
  - **Padding:** ~10–12px vertical × ~24–28px horizontal.
  - **Width:** Approximately full width of the white footer area minus padding (~200–230px).
  - **No border/stroke.** Flat button (no shadow visible).
  - **Alignment:** The button appears **center-aligned** or **left-aligned** within the white footer.

---

### Card 4 — Right (Medium-Small)

- **Image:** Female cleaner wearing:
  - **Light mint/sage green long-sleeve top**
  - **Dark navy/blue apron or work vest**
  - **Yellow rubber gloves**
  - She is leaning forward/downward, face very close to a **reflective surface (glass table or floor)** — intensely focused, cleaning the surface with a cloth or sponge in both hands.
  - **Close-up / low angle** — face is prominent and in sharp focus, staring directly forward.
  - Background: blurred indoor setting.
- **Image tone:** Cool tones, clinical/professional feel.
- **Service Title:**
  - Text: `High-Touch Point`
  - Line 2: `Disinfection`
  - **Font:** Bold/semi-bold sans-serif, dark navy/near-black. ~14–16px.
  - **Alignment:** Left-aligned.
- **"Discover More" Link:**
  - Same style as Cards 1 & 2.

---

### Card 5 — Far Right (Smallest)

- **Image:** Female cleaner wearing:
  - **Yellow rubber gloves**
  - She is cleaning a **large glass surface / window** using a cloth or squeegee-style tool — arm raised, actively wiping in a circular or vertical motion.
  - The glass surface has **soapy water / foam/mist** visible on it (from cleaning spray).
  - Background is mostly the glass/window — bright and reflective.
- **Image tone:** Bright, high-key, reflective surfaces.
- **Service Title:**
  - Text: `Wall &`
  - Line 2: `Window`
  - **Font:** Bold/semi-bold sans-serif, dark navy/near-black. ~14–16px.
  - **Alignment:** Left-aligned.
- **"Discover More" Link:**
  - Same style as Cards 1, 2, & 4.

---

## Dot Pagination Indicators

Below the card row, there are **dot indicators** showing the current slide/page position.

- **Position:** Horizontally centered below the card row.
- **Margin top from cards:** ~20–28px.
- **Number of dots:** **4 dots** total (indicating 4 pages/slides).
- **Dot gap:** ~8px between each dot.

### Dot Styling:
| Dot | State | Color | Size |
|---|---|---|---|
| Dot 1 (leftmost) | **Active** | Solid **green** — `#2ECC71` or brand green | ~10–12px diameter, circle |
| Dot 2 | Inactive | **Light grey outline circle** — empty/hollow with thin grey border | ~10–12px diameter |
| Dot 3 | Inactive | Same as Dot 2 | ~10–12px diameter |
| Dot 4 | Inactive | Same as Dot 2 | ~10–12px diameter |

- Active dot: **solid filled green** circle.
- Inactive dots: **hollow/outline** circles — thin grey stroke (~1.5px), no fill (transparent inside), or very light grey fill.
- All dots are the **same size** (no size difference between active and inactive).

---

## Carousel Behavior / Interaction

- **Sliding:** Clicking/tapping advances or retreats one position — the center card changes.
- **Active card:** Always the center card (3rd of 5 visible).
- When a new card becomes active:
  - It **scales up** to the large center size.
  - Its white footer changes from `"Discover More"` link to the `"Get a Custom Scope"` CTA button.
  - Previously active card scales back down.
- **Dot updates:** The active dot updates to the green filled state; others revert to hollow.
- **Animation:** Smooth slide/transition — likely CSS transform or a library like Swiper.js / Embla / Keen-slider.
- **Total slides:** 4 sets (based on 4 dots) — implies more cards exist off-screen; sliding cycles through them.

---

## Colors Reference

| Element | Color |
|---|---|
| Page/carousel background | White `#FFFFFF` |
| Card image area | Full-bleed photo |
| Card white footer background | White `#FFFFFF` |
| Service title text | Dark navy `#1A1A2E` or `#0D1B2A` |
| "Discover More" link text | Medium blue `#4A90D9` or `#3B82F6` |
| CTA button background | Sky blue `#87CEEB` or `#6EC6F5` |
| CTA button text | White `#FFFFFF` |
| Active dot | Brand green `#2ECC71` |
| Inactive dots | Hollow/outline grey `#CCCCCC` border, transparent fill |
| Card box shadow | Soft grey `rgba(0,0,0,0.12)–rgba(0,0,0,0.20)` |

---

## Typography Summary

| Element | Weight | Size (approx) | Notes |
|---|---|---|---|
| Service title (non-active cards) | Bold / Semi-bold | 14–16px | Dark navy, left-aligned, 1–2 lines |
| Service title (active/center card) | Bold / Semi-bold | 16–18px | Slightly larger, same color |
| "Discover More" link | Regular | 12–13px | Medium blue, left-aligned |
| CTA button text | Regular / Semi-bold | 13–14px | White, center or left-aligned |

---

## Spacing & Sizing Summary

| Property | Value |
|---|---|
| Center card width | ~260–290px |
| Center card height | ~440–460px |
| Side cards (2nd/4th) width | ~220–240px |
| Side cards (2nd/4th) height | ~360–380px |
| Outer cards (1st/5th) width | ~180–200px |
| Outer cards (1st/5th) height | ~320–340px |
| Card border-radius | ~20–24px |
| Gap between cards | ~12–16px |
| White footer height | ~25–30% of card height (~80–110px) |
| White footer padding (left/right) | ~14–18px |
| White footer padding (top) | ~12–16px |
| Title to link/button gap | ~6–10px |
| Dot size | ~10–12px diameter |
| Dot gap | ~8px |
| Dots margin-top from cards | ~20–28px |

---

## Responsive Notes

- On **tablet:** Show 3 cards (reduce to 3 visible — center + 1 each side).
- On **mobile:** Show 1 card at a time (center card full width), dots navigation remains visible.
- The "Discover More" / CTA button logic stays the same — active card shows CTA button.
- On mobile, swipe gestures replace arrow/dot navigation as the primary interaction.
