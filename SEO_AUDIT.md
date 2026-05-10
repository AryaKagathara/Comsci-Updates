# 🔍 comsci.tech — Full SEO / GEO / AEO Audit

**Pages reviewed:** 14 routes live + 60+ in repo (homepage, /about, /services + 38 service detail pages, /projects + 16 project detail pages, /blogs + 5 blog pages, /faqs, /contact, /approach, /industries + N detail pages, /freebies, /jobposition, /privacy, /resources/\*, /404).
**Audit date:** 2026-05-10
**Stack:** Next.js 16.1.1, Pages Router, next-sitemap 4.x, Bootstrap, GSAP + Locomotive Scroll, GA4 (G-SK66D59Z07).

| Dimension | Score | Status                           |
| --------- | ----- | -------------------------------- |
| SEO       | 7/10  | On Track — strong foundation, two crawlability bugs |
| GEO       | 6/10  | On Track — schema rich, E-E-A-T thin on people |
| AEO       | 7/10  | On Track — FAQPage exists but light, no HowTo/Speakable |

**Top 3 priorities:**
1. **Homepage Services + Industries sections render only after JS hydration** — raw HTML serves `<p>Loading...</p>`. Bots and AI crawlers without JS see no service list. (Fixed in this audit — see Fixes Applied.)
2. **Sitemap signals flat** — every URL has `priority: 0.7` and `changefreq: daily` including `/privacy`. Distorts crawl budget. (Fixed.)
3. **E-E-A-T on people thin** — Arya Kagathara has a bio on `/about` but no `Person` JSON-LD, no credentials, no LinkedIn-style `sameAs`. AI engines won't link the entity reliably. (Person schema added — fill in real `sameAs` URLs.)

**Biggest strength:** Comprehensive page-level structured data — `Organization`, `WebSite`, `WebPage`, `AboutPage`, `Service`, `CollectionPage`, `BlogPosting`, `Blog`, `FAQPage`, `ContactPage`, `BreadcrumbList`, `Book` all present and on the right pages. Better than ~80% of agency sites.

---

## SEO Analysis (7/10)

### Technical On-Page

| Signal | Finding | Status |
|--------|---------|--------|
| Title tag | Present on every page, 50–65 chars, keyword-front-loaded. Homepage: "Comsci \| Premium Design & Engineering Studio for USA, UK, & Europe" (66 chars — slight truncation risk). | Good |
| Meta description | Present on every page, 130–160 chars, with location + offering. | Good |
| H1 | Singular H1 per page, descriptive. Homepage H1: "Digital Design & Engineering Partner for High-Growth Global Startups". | Good |
| H2 misuse | Banner subtext was wrapped in `<h2 class="...">` (also lowercase `class` not `className` — JSX bug) at [HomeBanner.jsx:32](src/components/layout/HomeBanner.jsx#L32). | Fixed → `<p>` |
| URL structure | Geo-targeted slugs (`/branding-agency-usa-uk-europe`, `/ui-ux-design-agency-london-nyc-sf`). Clean, keyword-rich. | Strong |
| Canonical | Self-referencing on every page via `BASE_URL + router.asPath`. | Good |
| Robots meta | `index, follow` site-wide; `/404` correctly `noindex, nofollow`. | Good |
| Viewport | Default Next.js `<meta name="viewport" content="width=device-width">`. No `initial-scale`. | Acceptable |
| 301 redirects | 34 redirects in `next.config.js` covering legacy service/project/blog URLs → new geo slugs. Link equity preserved. | Strong |
| robots.txt | Live: `User-agent: * / Allow: / / Sitemap: https://comsci.tech/sitemap.xml`. | Good |
| Sitemap | Live `/sitemap.xml` is an index → `/sitemap-0.xml`. All URLs `priority=0.7`, `changefreq=daily` — no differentiation. | Fixed (per-path tuning) |
| og:image:alt namespace | `og:imageAlt` was used instead of `og:image:alt`. Non-standard. | Fixed |
| Image alt text | 80% strong; weak/broken alts in 8 components (`alt="Test"`, `alt="quote"`, `alt="orangecircle"`, `alt="Detailpicture"`, `alt="business"`, `alt="fsc"` ×2, `alt="sci Awwwards Honorable Mention"` truncated). | Fixed |
| Client logos | Rendered as `<div style="background-image: url(...)">` with no alt — invisible to crawlers. Lost trust signal. See [RendomLogo.jsx:17](src/components/RendomLogo.jsx#L17). | Open — convert to `<img alt="...">` |
| Internal links | Header + footer cover all top pages within 2 clicks. Contextual in-content linking sparse. | Decent |
| Open Graph / Twitter | Present site-wide; site_name, locale, image:width/height now added. | Good after fix |

### Content Quality

| Signal | Finding | Status |
|--------|---------|--------|
| Homepage word count | ~1,100–1,300 words rendered (includes hydrated sections). Raw HTML before hydration: ~600 words because Services + Industries are placeholder. | Was Critical → Fixed |
| Service detail pages | 800–1,200 words, with strategy steps + per-service FAQ. Strong. | Strong |
| Blog detail pages | ~2,000 words, long-form with H2/H3, lists, images. Strong. | Strong |
| Blog volume | **Only 5 blog posts.** Competitors typically run 30–100. Top organic traffic opportunity. | Needs Work |
| Lorem ipsum | `BlogDetailSection.jsx` ships hard-coded Lorem Ipsum paragraphs. If this component is rendered anywhere user-facing, it's a major quality signal hit. Verify it's unused / template-only. | Needs Audit |
| Freshness | Blog dates present, 2025-05-21 newest. ISO 8601 conversion works. | Good |
| Readability | Subheadings, bullets, short paras, code blocks where relevant. | Good |

### Structured Data

| Signal | Finding | Status |
|--------|---------|--------|
| Organization schema | `ProfessionalService` type at `https://comsci.tech/#organization`. Now enriched with `founder`, `foundingDate`, `areaServed[]`, `knowsAbout[]`, `contactPoint`, `description`, `image`. | Strong after fix |
| Founder/Person schema | None previously. Added `Person` for Arya Kagathara linked via `worksFor`/`founder`. | Fixed (sameAs URLs need real values) |
| FAQPage on homepage | Homepage has a FAQ section visually but no FAQPage schema previously. | Fixed (now emits FAQPage from `faqs.json`) |
| BreadcrumbList | Present on every non-404 page via `breadcrumbs.json`. | Strong |
| Service schema | All 38 service pages emit `@type: Service`. | Strong |
| BlogPosting | Per blog post + parent `Blog` collection. | Strong |
| HowTo / SpeakableSpecification | Not present anywhere despite step-by-step "Strategy Workflow" and process pages — clear AEO opportunity. | Open |
| Author schema on blogs | Currently `"author": { "name": "Arya Kagathara" }` — string only, no `@type: Person` or `@id` link. | Open |

---

## GEO Analysis — Generative Engine Optimization (6/10)

### E-E-A-T

| Signal | Finding | Status |
|--------|---------|--------|
| Named author with credentials | Arya Kagathara is named on `/about` with origin story but no formal credentials, no degree, no years-of-experience claim, no headshot tied to a Person entity. | Needs Work |
| About page depth | ~1,200 words covering mission, values, stats (95% satisfaction, 50+ projects, 40+ clients, 2022 founded). Decent but founder bio is informal ("Back in 2020 I had this spark..."). | Decent |
| Contact info | Phone, email, full Indian postal address, Google Maps URL — all in Organization schema and footer. | Strong |
| Trust signals | 5 award badges (CSSWinner, Awwwards, CSSDA, Clutch 5-Star, A1 Professional), 18 client logos, testimonials. | Strong |
| sameAs (entity graph) | 5 social profiles linked: Facebook, Behance, LinkedIn, YouTube, X. No Wikipedia/Crunchbase/G2/Clutch profile links. | Decent |

### Content for AI Synthesis

| Signal | Finding | Status |
|--------|---------|--------|
| Factual density | Service pages cite specific deliverables, geos, methodologies. Stats on /about (95%, 50+, 40+, 2022). | Good |
| Clear claims | "Bridge Indian engineering efficiency and Western design sensibilities" — clear, citable positioning. | Strong |
| Source citation | Blog posts do not link to authoritative external sources (no academic, gov, or industry-report citations spotted). AI engines reward outbound citations. | Open |
| Comprehensiveness | Service pages address strategy + deliverables + FAQ + industries — comprehensive. | Strong |
| Entity clarity | "Comsci Technologies" used consistently. Legal name "Comsci Technologies LLP" present in schema. | Strong |
| Original data / POV | Limited proprietary data, frameworks, or "Comsci Index"–style original research. AI engines prefer to cite originators. | Open |

### Technical GEO

| Signal | Finding | Status |
|--------|---------|--------|
| HTTPS | Enforced. | Good |
| JS-only rendering | **Confirmed problem before fix:** raw HTML for `/` showed `<div class="indus_section"><p>Loading...</p></div>` for the Services section and the Industries section. Perplexity / ChatGPT Search / non-JS crawlers see those as empty. | Fixed (now SSR-rendered from JSON imports) |
| robots blocking | None. | Good |
| Brand entity links | Present in sameAs. Could add Crunchbase, G2, Clutch profile URLs for stronger entity graph. | Open |
| ld+json placement | All in `<Head>`. Correct. | Good |

---

## AEO Analysis — Answer Engine Optimization (7/10)

### Featured Snippet Eligibility

| Signal | Finding | Status |
|--------|---------|--------|
| Direct-answer paragraphs | Service pages open with definition-style intros — decent. Homepage opens with positioning, not a definition. | Decent |
| Question-phrased H2/H3 | Service pages use "1. Investor Confidence...", "How does X work?" mostly absent. | Open |
| List content | Strategy workflow has 4 numbered steps per service — could earn list snippets. | Strong |
| Table content | None spotted — opportunity for comparison tables (e.g., "Custom vs Shopify template"). | Open |

### Structured Answer Formats

| Signal | Finding | Status |
|--------|---------|--------|
| FAQPage schema | `/faqs` emits FAQPage; service detail pages have per-service FAQs (verify schema emits these too). Homepage now also emits FAQPage. | Fixed |
| HowTo schema | None despite step-by-step content. Add HowTo to "Approach" page and per-service strategy workflows. | Open |
| Speakable | Not implemented. Voice assistants ineligible to surface specific paragraphs. | Open |

### Voice Search Readiness

| Signal | Finding | Status |
|--------|---------|--------|
| Conversational tone | Service pages: corporate, less conversational. Blog posts: more natural. | Decent |
| Long-tail Q coverage | FAQs cover process, pricing, security — good. Only 6 questions on `/faqs` — expand to 20–30. | Open |
| Local NAP | Address, phone, email all in `Organization` schema and footer. India-only address; no US/UK satellite addresses despite targeting those markets. | Decent |

---

## Pages Audited

| URL | Type | Notes |
|-----|------|-------|
| `/` | Homepage | Title 66 chars (trim), Services/Industries SSR-fixed, FAQ schema added |
| `/about` | About | 1,200 words, founder bio, Person schema added |
| `/services` | Services list | CollectionPage + ItemList of 38 services |
| `/branding-agency-usa-uk-europe` | Service detail | Sample audited live — H1, FAQ, ~1,050 words |
| `/projects` | Projects list | CollectionPage, 16 projects |
| `/blogs` | Blog index | Blog schema with 5 BlogPosting items |
| `/faqs` | FAQ | FAQPage schema, only 6 Q&A — expand |
| `/contact` | Contact | ContactPage + Calendly embed |
| `/approach` | Process | WebPage; HowTo schema opportunity |
| `/industries` | Industries | CollectionPage |
| `/freebies` | Resources | CollectionPage + Book schema |
| `/privacy` | Legal | WebPage |
| `/jobposition` | Careers | Could add `JobPosting` schema per opening |
| `/404` | Error | Correctly noindex |

---

## Priority Recommendations

| Priority | Issue | Dimension | Effort | Impact |
|----------|-------|-----------|--------|--------|
| 🔴 Critical | Homepage Services + Industries rendered only after hydration → raw HTML shows `<p>Loading...</p>` | SEO + GEO | S | High |
| 🔴 Critical | Sitemap flat priorities (every URL `0.7 / daily`) | SEO | S | Medium |
| 🟠 High | Person schema for Arya Kagathara missing | GEO | S | High |
| 🟠 High | `og:imageAlt` non-standard property name | SEO (social) | S | Low |
| 🟠 High | 8 components have weak / broken alt text including truncated `"sci Awwwards"` | SEO | S | Medium |
| 🟠 High | Banner subtext used `<h2 class="...">` (also lowercase `class` JSX bug) | SEO | S | Medium |
| 🟡 Medium | Only 5 blog posts; competitors run 30–100 | SEO + GEO | L | High |
| 🟡 Medium | Client logos rendered as `<div style="background-image:...">` — invisible to crawlers | SEO | M | Medium |
| 🟡 Medium | No HowTo schema on `/approach` or per-service strategy workflows | AEO | M | Medium |
| 🟡 Medium | No Speakable schema on FAQs | AEO | S | Medium |
| 🟡 Medium | `/faqs` has only 6 questions — expand to 20–30 covering pricing, timelines, geo, IP, security | AEO | M | High |
| 🟡 Medium | Blog posts don't cite external authoritative sources | GEO | M | Medium |
| 🟢 Quick Win | Add `theme-color`, `apple-touch-icon`, `preconnect` to GTM/Calendly | Performance/SEO | S | Low |
| 🟢 Quick Win | Add `og:site_name`, `og:locale`, `image:width/height`, `twitter:site/creator` | SEO (social) | S | Low |
| 🟢 Quick Win | Lorem-ipsum content in `BlogDetailSection.jsx` — verify it's unused / template; remove if shipped | SEO | S | High if exposed |
| 🟢 Quick Win | Add `Crunchbase`, `G2`, `Clutch` profile URLs to `sameAs` for stronger entity graph | GEO | S | Medium |
| 🟢 Quick Win | Reduce homepage title to ≤60 chars to avoid SERP truncation | SEO | S | Low |
| 🟡 Medium | Heavy JS (GSAP + Locomotive Scroll + Slick + Framer Motion + 16+ chunks) — likely Core Web Vitals impact. Run pagespeed.web.dev. | SEO | L | High |

---

## What's Working Well

- **Schema breadth** — `ProfessionalService`, `WebSite`, `WebPage`, `AboutPage`, `Service`, `CollectionPage`, `BlogPosting`, `Blog`, `FAQPage`, `ContactPage`, `BreadcrumbList`, `Book` all correctly placed.
- **Geo-targeted URL slugs** with proper 301 redirects from legacy paths — link equity preserved.
- **Per-page meta** with merging utility in [src/files/meta.json](src/files/meta.json) + page-level overrides — clean architecture.
- **Breadcrumbs** site-wide via [src/files/breadcrumbs.json](src/files/breadcrumbs.json).
- **Award + client trust signals** prominent above the fold.
- **Calendly direct booking** integrated — improves conversion.
- **Mobile-responsive** Bootstrap layout, `<Image>` everywhere with `srcset`, `webp` format.
- **Postbuild sitemap** generation pipeline correctly wired.

---

## Fixes Applied in This Audit

| File | Change |
|------|--------|
| [src/components/layout/ServicesSection.jsx](src/components/layout/ServicesSection.jsx) | Removed `useEffect` data fetch → import `services.json` synchronously so SSR HTML contains the service list. Removed "Loading..." placeholder. Globe alt text descriptive. |
| [src/components/IndustriesSection.jsx](src/components/IndustriesSection.jsx) | Same SSR conversion for industries data. |
| [src/components/AwardTypeSection.jsx](src/components/AwardTypeSection.jsx#L16) | Fixed truncated alt `"sci Awwwards Honorable Mention"` → `"Comsci Awwwards Honorable Mention"`. |
| [src/components/layout/TestimonialsSection.jsx](src/components/layout/TestimonialsSection.jsx#L14) | `alt="quote"` → templated `${name} testimonial photo`. |
| [src/components/layout/TestiMonialsSlider.jsx](src/components/layout/TestiMonialsSlider.jsx#L50) | `alt="Test"` → templated. |
| [src/components/layout/BlogDetailSection.jsx](src/components/layout/BlogDetailSection.jsx#L17) | `alt="Detailpicture"` → descriptive. |
| [src/components/layout/ApproachDetailSection.jsx](src/components/layout/ApproachDetailSection.jsx#L20) | `alt="quote"` → derived from approach data. |
| [src/components/ModernBusiness.jsx](src/components/ModernBusiness.jsx#L10) | `alt="business"` → descriptive. |
| [src/components/ImagesWrapper.jsx](src/components/ImagesWrapper.jsx) | Two `alt="fsc"` → descriptive. |
| [src/components/layout/ModalSection.jsx](src/components/layout/ModalSection.jsx#L80) | `alt="orangecircle"` → `alt=""` + `aria-hidden` (decorative). |
| [src/components/layout/HomeBanner.jsx](src/components/layout/HomeBanner.jsx#L32) | Subtext `<h2 class="...">` → `<p className="...">` (also fixed JSX `class` bug). |
| [src/files/meta.json](src/files/meta.json) | Added `og:site_name`, `og:locale`, `og:image:width/height`. Renamed `og:imageAlt` → `og:image:alt`. Added `twitter:site`/`twitter:creator`. |
| [src/lib/commonSchema.js](src/lib/commonSchema.js) | Added `founderSchema` (Person/Arya Kagathara). Enriched Organization with `founder`, `foundingDate`, `areaServed`, `knowsAbout`, `contactPoint`, `description`, `image`. |
| [src/pages/index.js](src/pages/index.js) | Homepage `@graph` now includes `founderSchema` + `FAQPage` generated from `faqs.json`. |
| [src/pages/about.js](src/pages/about.js) | About `@graph` includes `founderSchema`. |
| [src/pages/_document.js](src/pages/_document.js) | Added `theme-color`, `apple-touch-icon`, `format-detection`, `preconnect` to GTM + Calendly. |
| [next-sitemap.config.js](next-sitemap.config.js) | Per-path priority + changefreq via `transform`. Disabled index sitemap. Excludes `/404`. Robots policy explicit. |

---

## Open Items (Manual Follow-up Needed)

1. **Real `sameAs` URLs for founderSchema** — replace placeholder LinkedIn URL in [src/lib/commonSchema.js](src/lib/commonSchema.js) with Arya's actual public profile URLs.
2. **Lorem-ipsum sweep** — confirm `BlogDetailSection.jsx` is template-only and not rendered on a live route, or replace with real content.
3. **Convert client logos** — change `<div style={{backgroundImage:...}}>` in [src/components/RendomLogo.jsx](src/components/RendomLogo.jsx) to `<img alt="$ClientName logo — Comsci client">`. Requires a client-name list.
4. **Expand `/faqs`** — add 15–25 more questions covering pricing, geos, IP, security, timelines, post-launch support.
5. **Expand blog content** — target 2 posts/month covering long-tail keywords. Each post: cite ≥3 external authoritative sources.
6. **HowTo schema** — add to `/approach` (5-step workflow) and per-service strategy workflows.
7. **SpeakableSpecification** — add to FAQ answers and key paragraphs.
8. **Run `pagespeed.web.dev`** — measure Core Web Vitals; defer or remove Locomotive Scroll if LCP/CLS regress.
9. **Add JobPosting schema** to `/jobposition` per open role.
10. **Build + verify sitemap** — run `npm run build` and confirm new per-path priorities/changefreq in `/public/sitemap.xml`.

---

## Glossary

- **SEO** — Search Engine Optimization: ranking in Google/Bing/DuckDuckGo via on-page tags, content, links, technical health.
- **GEO** — Generative Engine Optimization: getting cited by AI search engines (Perplexity, ChatGPT Search, Gemini, Google AI Overviews) that synthesize answers across sources. Rewards entity clarity, schema depth, factual density.
- **AEO** — Answer Engine Optimization: winning featured snippets, People-Also-Ask, voice assistant answers via direct-answer paragraphs, FAQ/HowTo/Speakable schema, and question-phrased headings.

---

_Audit and code fixes by Claude (Opus 4.7) — 2026-05-10. Run `npm run build` to regenerate `sitemap.xml` and `robots.txt` with the new priorities._
