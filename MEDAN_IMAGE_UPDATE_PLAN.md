# Plan: Medan Image Update dengan Premium Style Enhancement

## Tujuan:

1. Ganti semua gambar dengan gambar lokal dari `public/medan/`
2. Buat tampilan lebih premium dengan mengurangi badge-badge yang terlalu "AI-looking"
3. Gunakan gambar armada, hero section, layanan, dan destinasi yang sudah tersedia

## Files yang Perlu Diedit:

### 1. src/data/fleet-data.ts

- Update image paths untuk semua armada dari /armada/ ke /medan/armada/

### 2. src/components/medan/HeroSection.tsx

- Hero background: Ganti URL Unsplash dengan `/medan/hero-section.webp`
- Simplifikasi badge "Bagian dari Vicky Rent Car Nusantara"

### 3. src/components/medan/ServicesSection.tsx

- VIP Services images: Ganti dengan path dari /medan/layanan/

### 4. src/components/medan/DestinationsSection.tsx

- Ganti destinasi dengan gambar lokal:
  - Danau Toba → /medan/destinasi-wisata/danau-toba.webp
  - Berastagi → /medan/destinasi-wisata/sibayak.webp
  - Bukit Lawang → /medan/destinasi-wisata/bukit-lawang.webp
  - Air Terjun Sipiso-piso → /medan/destinasi-wisata/air-terjun-sikulikap.webp
  - Istana Maimun → tetap Unsplash (tidak ada lokal)
  - Merdeka Walk → tetap Unsplash (tidak ada lokal)

### 5. src/components/medan/AirportSection.tsx

- Airport image: Gunakan `/medan/layanan/vip-airport-transfer.webp` atau tetap Unsplash

### 6. src/app/medan/page.tsx

- VIP Services grid images (vipServices array)
- Premium Fleet Preview images (dari fleet-data yang sudah diupdate)

## Gambar yang Tersedia di public/medan/:

### Armada (/medan/armada/):

- ALPHARD-GEN-3.webp, ALPHARD-GEN-4.webp
- CALYA.webp, DAIHATSU-AYLA.webp, DAIHATSU-SIGRA.webp
- DAIHATSU-TERIOS-DOUBLE-CABIN.webp, ERTIGA-HYBRID.webp
- FORTUNER-GR-4X2.webp, FORTUNER-GR-4X4.webp, FORTUNER.webp
- HIACE-COMMUTER.webp, HIACE-PREMIO.webp
- HILUX-DOUBLE-CABIN.webp, HONDA-BRIO.webp
- INNOVA-REBORN.webp, INNOVA-ZENIX.webp
- ISUZU-ELF-MINIBUS.webp
- LAND-CRUISER.webp, MERCY-E-300.webp
- PAJERO.webp, SUZUKI-XL7.webp
- TOYOTA-AGYA.webp, TOYOTA-RUSH.webp, XPANDER.webp

### Layanan (/medan/layanan/):

- EXECUTIVE-CORPORATE.webp
- luxury-city-tour.webp
- vip-airport-transfer.webp
- VIP-WEDDING-CAR.webp

### Destinasi (/medan/destinasi-wisata/):

- danau-toba.webp
- sibayak.webp
- bukit-lawang.webp
- air-terjun-sikulikap.webp
- kawa-putih-tinggi-raja.webp
- pemandian-karang-anyar.webp
- sibeabea.webp
- Bukit-Holbung-Samosir.webp

### Hero:

- hero-section.webp

## Badge Simplification Plan:

- Hapus/simplifikasi badge "Bagian dari Vicky Rent Car Nusantara"
- Ganti badge "Award Winner" dengan yang lebih understated
- Simplifikasi badge lainnya untuk tampilan yang lebih clean

## Dependent Files:

- src/data/fleet-data.ts
- src/components/medan/HeroSection.tsx
- src/components/medan/ServicesSection.tsx
- src/components/medan/DestinationsSection.tsx
- src/components/medan/AirportSection.tsx
- src/app/medan/page.tsx

## Followup Steps:

1. Update fleet-data.ts dengan path gambar yang benar
2. Update semua component yang menggunakan gambar
3. Simplifikasi badge styles
4. Test tampilan di browser
