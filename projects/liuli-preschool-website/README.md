# Լի ու Լի Մանկապարտեզ — Website

A mobile-friendly, bilingual (Armenian/English) website for Li u Li Preschool
(Yerevan, Ajapnyak & Davtashen branches). Built as plain HTML/CSS/JS — no
build tools, no framework, no dependencies. Open any `.html` file directly in
a browser, or serve the folder with any static file server.

**Status:** Draft, built for an "AI for PMs" coursework assignment. Several
sections are marked `[TO BE CONFIRMED]` / `TBD` with real content still
needed before this could be published as the preschool's official site (see
below).

## Pages

| File | Armenian | English |
|---|---|---|
| `index.html` | Գլխավոր | Home |
| `programs.html` | Ծրագրեր | Programs |
| `admissions.html` | Ընդունելություն և Վճարներ | Admissions & Fees |
| `reviews.html` | Կարծիքներ | Reviews |
| `about.html` | Մեր Մասին | About Us |
| `contact.html` | Կապ | Contact |

## Structure

```
liuli-preschool-website/
  index.html, programs.html, admissions.html, reviews.html, about.html, contact.html
  css/style.css   — all styling, colors, responsive rules
  js/main.js      — mobile nav toggle + language (AM/EN) toggle, saved via localStorage
  images/logo.svg — recreated vector logo (see note below)
```

## Design notes

- **Colors** pulled from the Facebook logo: green (`#4CAF50`), coral/red
  (`#E23A5A`), yellow/orange (`#FFDE3D` / `#F7A927`), sky/navy blue
  (`#A9D3EC` / `#2F6CA6`), on a warm cream background.
- **Fonts:** Noto Sans / Noto Sans Armenian (Google Fonts) — chosen
  specifically because they render Armenian glyphs correctly; many playful
  display fonts don't support Armenian script at all.
- **Mobile-first & responsive:** hamburger nav under 900px, fluid type sizes,
  responsive card/photo grids, no horizontal scrolling.
- **Bilingual:** every page has both Armenian and English copy baked in;
  the ՀԱՅ/EN toggle in the header switches instantly (no page reload) and
  remembers the visitor's choice. Armenian is the default language.
- **No fake photos:** since no real facility/child photos were available,
  placeholder blocks mark exactly where real photos should go instead of
  generating stand-in images of children.
- **No working contact form:** a form that doesn't actually send anywhere
  would be misleading, so the Contact page uses call/email/Facebook links
  instead. Add a real form (with a backend or a service like Formspree)
  before publishing if you want one.

## Logo

The original Facebook profile picture couldn't be saved as a file in this
build environment, so `images/logo.svg` is a hand-recreated vector version
matching the original's shapes, colors, and wordmark ("Լի ու Լի"). If you
have the original export, swap it in — SVG is recommended (scales cleanly to
any size), but a high-resolution PNG works too (update the `<img>`/`<link
rel="icon">` references accordingly).

## What's real vs. placeholder

**Confirmed content (from you):**
- Name, both branch addresses (Աջափնյակ, Դավթաշեն), both phone numbers
  (shared across both branches), hours (Mon–Fri 08:30–18:30), age range
  (1–6), language classes for ages 3+, tuition (90,000 AMD full day /
  50,000 AMD half day, meals included), and the tagline.

**Marked `[TO BE CONFIRMED]` / `TBD` — needs real input before publishing:**
- Email address
- Exact age-group breakdown and curriculum details on the Programs page
- Sample daily schedule
- Registration fee and language-class pricing
- Enrollment steps and required documents
- About Us history/founding story and staff bios/photos
- Real facility/classroom photos (placeholders currently mark where these go)
- **Reviews page:** all testimonials are clearly-labeled placeholder
  examples — replace with real reviews (e.g. from Facebook) before this
  page is published, since fabricated reviews attributed to real parents
  would be misleading.

## Before publishing as the official site

This was built for a coursework exercise but may become the real site — if
so, before going live:
1. Fill in every `[TO BE CONFIRMED]` item above.
2. Replace the placeholder testimonials with real ones (with permission).
3. Swap in the real logo file and real photos.
4. Decide on hosting (e.g. GitHub Pages, Netlify) and a domain name.
5. Consider adding a real contact form and basic analytics.
6. Re-test on a real phone, not just a browser's mobile emulator.
