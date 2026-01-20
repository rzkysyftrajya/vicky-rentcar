# TODO: Domain Medan Ads Configuration

## Progress Tracking

- [x] 1. Update middleware.ts untuk handle pt.vrnrentcarmedan.com
- [x] 2. Update next.config.ts dengan rewrite untuk pt.vrnrentcarmedan.com
- [x] 3. **NEW: Add GA4 and Google Ads Enhanced Tracking**
- [x] 4. **NEW: Add WhatsApp Click Conversion Tracking**
- [x] 5. **NEW: Add Phone Call Conversion Tracking**
- [x] 6. **NEW: Add Google Tag Manager (GTM) Container**
- [ ] 7. Deploy ke hosting
- [ ] 8. Konfigurasi DNS di domain provider
- [ ] 9. Setup A record dan/atau CNAME

## Google Ads Improvements (COMPLETED)

### ✅ Implemented:

1. **Google Tag Manager (GTM-PL8H5WK)**
   - Added GTM container for better tag management
   - Includes noscript fallback for non-JS users

2. **GA4 Integration**
   - GA4 config placeholder (G-XXXXXXXXXX) ready
   - Enhanced with Google Ads linked conversions

3. **Conversion Tracking**
   - WhatsApp click tracking implemented
   - Phone call tracking implemented
   - Conversion labels configured

4. **Enhanced Conversions**
   - User data collection setup for improved accuracy

### ⚠️ To Complete After Deployment:

1. Replace `G-XXXXXXXXXX` with actual GA4 Measurement ID
2. Create conversion actions in Google Ads dashboard:
   - WhatsAppConversion
   - PhoneCallConversion
3. Verify GTM container (GTM-PL8H5WK) is created in Google Tag Manager

---

## INSTRUKSI HOSTING (VERCEL)

### Langkah 1: Deploy ke Vercel

```bash
# Jika menggunakan Vercel CLI
vercel --prod

# Atau push ke GitHub dan connect ke Vercel
```

### Langkah 2: Konfigurasi Domain di Vercel

1. Login ke https://vercel.com
2. Pilih project vicky-rentcar
3. Go to **Settings** → **Domains**
4. Klik **Add Domain**
5. Masukkan: `pt.vrnrentcarmedan.com`
6. Klik **Add**

### Langkah 3: Konfigurasi DNS di Domain Provider

**OPSI A: Menggunakan CNAME (Disarankan)**

```
Type: CNAME
Name: pt
Value: cname.vercel-dns.com.
TTL: Auto/3600
```

**OPSI B: Menggunakan A Record (Jika provider tidak support CNAME)**

```
Type: A
Name: @
Value: 76.76.21.21
TTL: Auto/3600
```

### Langkah 4: Tunggu Propagasi DNS

- DNS propagation bisa memakan waktu 5-60 menit
- Setelah propagasi selesai, akses `pt.vrnrentcarmedan.com` akan langsung ke halaman Medan

---

## HASIL KONFIGURASI

**Domain Medan:**

- `pt.vrnrentcarmedan.com` → Halaman Medan (tanpa /medan di URL)
- `vrnrentcarmedan.com` → Halaman Medan (tanpa /medan di URL)

**Domain Utama:**

- `vickyrentcarnusantara.com` → Halaman utama (homepage)
