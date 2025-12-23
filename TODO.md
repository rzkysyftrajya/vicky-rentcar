# Hydration Error Fixes - TODO

## Issues Identified:

1. **Math.random() usage** causing server/client mismatches
2. **Direct DOM manipulation** during render
3. **new Date() calls** with timing differences
4. **Missing SSR guards** for client-only code

## Files to Fix:

### 1. Math.random() Issues

- [ ] `src/components/ui/chart.tsx` - Replace Math.random() with useId()
- [ ] `src/components/ui/colourful-text.tsx` - Replace Math.random() with useId() or stable hash
- [ ] `src/components/ui/sidebar.tsx` - Replace Math.random() in SidebarMenuSkeleton

### 2. Direct DOM Access Issues

- [ ] `src/hooks/use-mobile.tsx` - Add SSR guards for window usage
- [ ] `src/components/CityPage.tsx` - Move DOM manipulation to useEffect
- [ ] `src/app/layout.tsx` - Add SSR guards for service worker registration

### 3. Date Usage Issues

- [ ] `src/components/layout/Footer.tsx` - Fix new Date() usage
- [ ] `src/components/landing/sections/Footer.tsx` - Fix new Date() usage
- [ ] `src/app/rental-mobil-semarang/page.tsx` - Fix new Date() usage

### 4. Additional Client-Only Code

- [ ] Add `use client` directives where needed
- [ ] Add dynamic imports for client-heavy components

## Progress:

- [x] Identify all hydration issues
- [ ] Fix Math.random() issues
- [ ] Fix DOM access issues
- [ ] Fix Date usage issues
- [ ] Test fixes

## Notes:

- Maintain exact visual appearance
- Ensure all functionality remains intact
- Use React.useId() for stable identifiers
- Use useEffect for client-only operations
