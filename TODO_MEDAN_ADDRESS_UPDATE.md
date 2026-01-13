# TODO: Update Alamat Medan di Seluruh Halaman

## Files yang perlu diupdate:

### 1. src/app/medan/page.tsx

- Update alamat di section "Kantor Kami"
- Old: "Jl. Gatot Subroto No. 123, Medan, Sumatera Utara"
- New: "Jl. Sempurna Gg. Mawar No.12 dusun II, sambirejo timur, Kec. Medan Tembung, Kabupaten Deli Serdang, Sumatera Utara 20371"

### 2. src/app/medan/about-us/page.tsx

- Update alamat di officeInfo
- Old: "Jl. Sisingamangaraja No. 123, Medan Kota, Sumatera Utara 20211"
- New: "Jl. Sempurna Gg. Mawar No.12 dusun II, sambirejo timur, Kec. Medan Tembung, Kabupaten Deli Serdang, Sumatera Utara 20371"

### 3. src/app/contact/page.tsx

- Update alamat di card informasi kontak
- Old: "Jalan Sempurna Dusun II Mawar, Desa Sambirejo Timur, Kec. Percut Sei Tuan, Deli Serdang, Sumatera Utara"
- New: "Jl. Sempurna Gg. Mawar No.12 dusun II, sambirejo timur, Kec. Medan Tembung, Kabupaten Deli Serdang, Sumatera Utara 20371"
- Update Google Maps iframe dengan embed baru

## Map Embed Baru:

```html
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.9722727809753!2d98.77453057416143!3d3.593831696380299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303137a8ded38db1%3A0x698e30b68ac357e5!2sPT.VICKY%20RENTAL%20NUSANTARA!5e0!3m2!1sid!2sid!4v1768310361303!5m2!1sid!2sid"
  width="600"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>
```

## Progress:

- [x] src/app/medan/page.tsx - Update alamat
- [x] src/app/medan/about-us/page.tsx - Update alamat
- [x] src/app/contact/page.tsx - Update alamat dan map iframe

## Completed: 2024

Semua halaman sudah diupdate dengan alamat baru dan map embed baru.
