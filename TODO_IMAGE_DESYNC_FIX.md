# TODO: Fix Image-Card Desync on Medan Armada Page

## Status: ✅ COMPLETED

### Files Edited:

1. [x] `src/components/medan/FleetSection.tsx`

   - [x] Fixed CarCard component image wrapper
   - [x] Fixed VIPCarCard component image wrapper

2. [x] `src/components/vip/VIPVehicleCard.tsx`

   - [x] Fixed image wrapper with aspect-[2/3]

3. [x] `src/app/layanan/vip/page.tsx`

   - [x] Fixed image wrapper with aspect-[2/3]

4. [x] `src/app/home/page.tsx`
   - [x] Fixed fleet section armada images with aspect-[2/3]

### Changes Applied:

#### FleetSection.tsx - CarCard:

- Old: `<div className="relative h-[450px] bg-gray-100 overflow-hidden">`
- New: `<div className="relative w-full aspect-[2/3] overflow-hidden bg-gray-100">`
- Image class: Added `absolute inset-0` for proper positioning

#### FleetSection.tsx - VIPCarCard:

- Old: `<div className="relative h-[450px] bg-slate-900 overflow-hidden">`
- New: `<div className="relative w-full aspect-[2/3] overflow-hidden bg-slate-900">`
- Image class: Added `absolute inset-0` for proper positioning

#### VIPVehicleCard.tsx:

- Old: `<div className="relative h-[450px] w-full overflow-hidden">`
- New: `<div className="relative w-full aspect-[2/3] overflow-hidden">`

#### layanan/vip/page.tsx:

- Old: `<div className="relative h-64 w-full overflow-hidden">`
- New: `<div className="relative w-full aspect-[2/3] overflow-hidden">`
- Changed `object-cover` to `object-contain` to prevent cropping

#### home/page.tsx - Fleet Section:

- Old: Fixed `width={600} height={400}` with `object-cover`
- New: Added wrapper `<div className="relative w-full aspect-[2/3] overflow-hidden">` with `fill` and `object-contain`

### Expected Results:

- ✅ Images stay full and large
- ✅ No floating/shrinking effect
- ✅ Card and image feel unified
- ✅ Works on mobile & desktop
- ✅ Home page fleet section now matches the 2:3 aspect ratio of armada images
