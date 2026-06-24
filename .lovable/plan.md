

## Plan: Build Search & Discovery Page + Provider Profile Page

### Overview
Create two new pages matching the existing warm amber/Fredoka design system: a Search & Discovery page (`/search`) with filterable provider listings, and a Provider Profile page (`/provider/:id`) with full provider details, services, reviews, and availability.

---

### 1. Search & Discovery Page (`/search`)

**New file:** `src/pages/Search.tsx`

- **Header area:** Compact search bar with location, service type, date inputs on a warm gradient background strip (reusing `gradient-hero` + `rounded-2xl` card pattern from HeroSection)
- **Filter sidebar (left):** Collapsible filter groups using the existing `shadow-card` / `rounded-2xl` card style:
  - Service Type (Boarding, Walking, Day Care, House Sitting, Drop-Ins) as checkboxes
  - Price Range slider ($25-$80)
  - Pet Size (Small/Medium/Large) as pill toggles
  - Provider Features (Fenced yard, No other pets, Accepts cats, etc.) as checkboxes
- **Results grid (right):** Provider cards in a responsive grid (`grid-cols-1 lg:grid-cols-2 gap-6`), each card showing:
  - Avatar initials circle with `gradient-hero`
  - Name, star rating, review count, specialty tags
  - Price per night, distance, response time
  - Verified/Top Rated badges using `bg-secondary text-primary` pill style
  - Hover: `shadow-card` → `shadow-elevated` transition
- **Sort dropdown:** Top of results (Recommended, Price Low-High, Rating, Distance)
- **Layout:** On mobile, filters collapse into a slide-out sheet; results go single column
- **Mock data:** 5 providers from the spec (Emily Chen, Marcus Johnson, Sophie Martinez, Alex Patel, Rachel Foster)
- All sections use `framer-motion` `whileInView` fade-up animations matching existing patterns

**New file:** `src/components/search/SearchFilters.tsx`
**New file:** `src/components/search/ProviderCard.tsx`

---

### 2. Provider Profile Page (`/provider/:id`)

**New file:** `src/pages/ProviderProfile.tsx`

- **Profile header:** Large card with provider avatar (gradient circle), name, location, verification badge, key stats (response rate, repeat clients, total bookings) in a horizontal stat grid
- **Bio section:** Full bio text with home description, using the `bg-card rounded-2xl shadow-card p-8` card pattern
- **Services & Pricing:** 2-column grid of service cards, each showing service name, description, and price — styled like the ServicesSection icon cards
- **Availability calendar:** Simple month-view grid showing available/booked/blocked days with color-coded cells (green/gray/muted)
- **Reviews section:**
  - Rating breakdown bar chart (5-star to 1-star with horizontal fill bars)
  - Review cards with star visualization, reviewer avatar initials, pet info, review text, and timestamp
- **Sticky booking CTA:** Fixed bottom bar on mobile with price and "Book Now" button
- **Mock data:** Emily Chen's full profile from the spec

**New file:** `src/components/provider/ProviderServices.tsx`
**New file:** `src/components/provider/ProviderReviews.tsx`
**New file:** `src/components/provider/AvailabilityCalendar.tsx`

---

### 3. Routing Updates

**Edit:** `src/App.tsx` — Add routes:
- `/search` → `Search` page
- `/provider/:id` → `ProviderProfile` page

---

### 4. Design Consistency
- All components use the existing design tokens: `shadow-card`, `shadow-elevated`, `gradient-hero`, `rounded-2xl`, `font-display`
- Animations: `framer-motion` `whileInView` fade-ups with staggered delays
- Colors: amber primary, warm cream secondary, muted foreground for secondary text
- Cards link from Search → Provider Profile via React Router `<Link>`

