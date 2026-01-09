# TODO: Domain Medan Ads Configuration

## Progress Tracking

- [x] 1. Update middleware.ts untuk handle pt.vrnrentcarmedan.com
- [x] 2. Update next.config.ts dengan rewrite untuk pt.vrnrentcarmedan.com
- [ ] 3. Test konfigurasi secara lokal
- [ ] 4. Deploy ke hosting
- [ ] 5. Konfigurasi DNS di domain provider
- [ ] 6. Setup A record dan/atau CNAME

## Notes

- Domain utama: vickyrentcarnusantara.com
- Domain Medan: pt.vrnrentcarmedan.com
- Goal: Saat akses pt.vrnrentcarmedan.com langsung ke halaman Medan tanpa /medan di URL

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
