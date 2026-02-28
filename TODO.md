# Responsive Audit & Fix Plan for batam Pages

## Status: IN PROGRESS

## Files to Fix:
- [ ] 1. src/app/batam/page.tsx - Main landing page
- [ ] 2. src/app/batam/armada/page.tsx - Armada listing page
- [ ] 3. src/app/batam/layanan/page.tsx - Layanan page
- [ ] 4. src/components/batam/PromoLebaranSection.tsx - Promo section
- [ ] 5. src/components/batam/FaqSection.tsx - FAQ section
- [ ] 6. src/components/batam/Navbar.tsx - Navigation

## Issues to Fix:
1. Grid layouts - Add `grid-cols-1` for mobile
2. Fixed heights - Replace `h-64`, `h-48`, `h-80` with aspect ratios
3. Button spacing - Add proper gap values
4. Container padding - Standardize `px-4 sm:px-6 lg:px-8`
5. Negative margins - Fix overlap issues
6. Hero section - Fix min-height and negative margin
