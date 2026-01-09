# Medan Multi-Domain Implementation Plan

## Task 1: Middleware - Domain Rewrite

**File**: `middleware.ts`

- Handle `pt.vrnrentcarmedan.com` and `www.pt.vrnrentcarmedan.com`
- Rewrite all paths: `/` → `/medan`, `/fleet` → `/medan/fleet`, etc.
- Exclude `_next`, `favicon.ico`, static files

## Task 2: Next Config Cleanup

**File**: `next.config.ts`

- Remove host-based rewrites (handled by middleware)
- Keep only essential config

## Task 3: Dynamic Metadata for Medan Layout

**File**: `src/app/medan/layout.tsx`

- Generate canonical URL based on actual hostname
- For `pt.vrnrentcarmedan.com`: canonical = `https://pt.vrnrentcarmedan.com`

## Task 4: Create Medan-specific Sitemap

**File**: `public/pt-vrnrentcarmedan-sitemap.xml`

- Only contains Medan-specific pages
- No mixing with main domain content

## Task 5: Update robots.txt

**File**: `public/robots.txt`

- Add Medan-specific sitemap reference

## Task 6: Update individual Medan page metadata

**Files**:

- `src/app/medan/fleet/page.tsx`
- `src/app/medan/services/page.tsx`
- `src/app/medan/contact/page.tsx`
- `src/app/medan/faq/page.metadata.ts`
- Update canonical to use actual hostname

## Task 7: Google Ads Safety Checklist

- ✅ No 301/302 redirects (rewrite only)
- ✅ URL stays as root domain (no `/medan` shown)
- ✅ Correct canonical tags
- ✅ No cloaking (same content for all visitors)

## Validation Steps

1. Test `pt.vrnrentcarmedan.com/` → shows Medan content, URL stays root
2. Test `pt.vrnrentcarmedan.com/fleet` → shows fleet page, URL stays root
3. Check View Source: canonical points to `pt.vrnrentcarmedan.com`
4. Verify sitemap only contains Medan URLs
