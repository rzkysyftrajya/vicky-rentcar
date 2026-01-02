# Medan Landing Page Upgrade Plan

## Overview

Upgrade the Medan landing page to be more professional, trustworthy, and conversion-focused without breaking the current structure.

---

## Files to Edit

### 1. src/app/medan/page.tsx (Main Landing Page)

- Add dedicated "Why Choose Us" trust section
- Add dedicated Final CTA section at end
- Improve section ordering and flow
- Add better visual hierarchy

### 2. src/components/medan/HeroSection.tsx

- Improve headline copy (clearer, more professional)
- Add video/image placeholder support
- Make WhatsApp CTA more prominent
- Improve trust indicators visual hierarchy

### 3. src/components/medan/FeaturesSection.tsx

- Reorganize as trust/credibility section
- Highlight: 10+ years experience, 500+ customers, 24/7 service
- Better layout and spacing
- Add subtle icons for trust signals

### 4. src/components/medan/ServicesSection.tsx

- Make "Lihat Detail / Pesan" buttons visually stronger
- Improve readability of service descriptions
- Better visual hierarchy between title, description, features, and CTA

### 5. src/components/medan/AirportSection.tsx

- Add service flow section (How it works)
- Better explanation of the process
- Keep WhatsApp CTA strong

### 6. src/components/medan/DestinationsSection.tsx

- Improve card layout and hierarchy
- Keep static content but make it more scannable
- Better visual presentation

### 7. src/components/medan/TestimonialsSection.tsx

- Improve layout and visual hierarchy
- Make quotes more prominent
- Better avatar and author info styling

### 8. src/components/medan/FleetSection.tsx

- Make "Cek Harga" buttons stronger
- Improve card visual hierarchy
- Better category filter styling

### 9. src/components/medan/StatsSection.tsx

- Keep existing counter animations
- Add better visual containers

### 10. src/components/medan/Footer.tsx

- Add clearer contact hierarchy
- Improve trust signals

---

## Detailed Changes by Section

### 1. Hero Section Changes

```
Current: "Rental Mobil Medan – Antar Jemput Bandara Kualanamu"
New:     "Sewa Mobil Medan Terpercaya – Sopir Profesional & Armada Terawat"

Changes:
- Add video placeholder structure (commented out for future)
- Make WhatsApp button larger and more prominent
- Add "VRN" trust badge near logo
- Improve trust indicators with icons
```

### 2. Trust/Credibility Section (NEW)

```
Add after Quick Stats:
- 10+ Tahun Pengalaman → with clock icon
- 500+ Pelanggan Puas → with users icon
- 24/7 Layanan → with phone icon
- Armada Terawat → with car icon
```

### 3. Services Section Changes

```
- Make buttons: bg-green-600 (WhatsApp color) for primary CTAs
- Add hover effects to buttons
- Improve feature tag styling
```

### 4. Airport Section Changes

```
Add "Cara Pemesanan" flow:
1. Hubungi kami via WhatsApp
2. Konfirmasi tanggal & waktu
3. Driver menjemput di lokasi
4. Perjalanan nyaman

Add pricing range placeholder
```

### 5. Destinations Section Changes

```
- Remove modal complexity, make cards more informative
- Add "Mulai dari Rp XXX" pricing hint
- Make highlights more visible
```

### 6. Testimonials Section Changes

```
- Add Google Review badge
- Make star ratings larger
- Add "Verified Customer" badge
- Improve quote typography
```

### 7. Final CTA Section (NEW)

```
Add before Footer:
- Strong emotional headline
- Clear WhatsApp button
- Contact info (phone, email, location)
- Operating hours
```

---

## Design Guidelines to Follow

### Colors (Preserve existing)

- Primary: blue-600 (trust, professional)
- Success: green-600 (WhatsApp, positive action)
- Accent: yellow-400 (stars, highlights)

### Typography

- Headings: Bold, clear hierarchy
- Body: Readable, good line-height
- Font: Inter (existing)

### Spacing

- Sections: py-16 or py-20
- Cards: rounded-2xl, shadow-lg
- Buttons: consistent sizing

### Buttons

- Primary: bg-green-600 hover:bg-green-700 (WhatsApp)
- Secondary: bg-blue-600 hover:bg-blue-700
- Outline: Clean borders

---

## Implementation Order

1. Create TODO.md with all tasks
2. Edit HeroSection.tsx
3. Edit FeaturesSection.tsx (Trust section)
4. Edit ServicesSection.tsx
5. Edit AirportSection.tsx
6. Edit DestinationsSection.tsx
7. Edit TestimonialsSection.tsx
8. Edit FleetSection.tsx
9. Edit page.tsx (add trust section + final CTA)
10. Build and verify

---

## Constraints

- NO new libraries
- NO refactoring unrelated files
- NO breaking existing structure
- Keep Tailwind config as-is
- Preserve semantic HTML
- No framer-motion unless already present
- Keep all content static (no new data fetching)

---

## Success Criteria

✅ Page builds successfully
✅ Page looks more professional
✅ Page feels more trustworthy
✅ WhatsApp CTAs are prominent
✅ No console errors
✅ Responsive design preserved
