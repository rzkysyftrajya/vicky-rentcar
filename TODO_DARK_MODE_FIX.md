# TODO: Dark Mode Fix for Medan Pages

## Progress

- [x] Create TODO file
- [ ] 1. Update globals.css - improve dark mode CSS variables for better contrast
- [ ] 2. Fix medan/page.tsx - add dark mode classes to all sections
- [ ] 3. Fix Header.tsx - add dark mode support
- [ ] 4. Fix HeroSection.tsx - ensure proper dark mode text colors
- [ ] 5. Fix Footer.tsx - add dark mode support
- [ ] 6. Fix ServicesSection.tsx - add dark mode classes
- [ ] 7. Fix FeaturesSection.tsx - add dark mode support
- [ ] 8. Fix about-us/page.tsx - add dark mode to all sections
- [ ] 9. Fix services/page.tsx - add dark mode to all sections
- [ ] 10. Fix faq/page.tsx - add dark mode support

## Notes

Focus on:

- Change `bg-white` → `bg-white dark:bg-slate-800`
- Change `bg-gray-50` → `bg-gray-50 dark:bg-slate-900`
- Change `bg-gray-100` → `bg-gray-100 dark:bg-slate-800`
- Change `text-gray-900` → `text-gray-900 dark:text-white`
- Change `text-gray-700` → `text-gray-700 dark:text-gray-200`
- Change `text-gray-600` → `text-gray-600 dark:text-gray-400`
- Add dark mode variants to section backgrounds
- Update gradient backgrounds that don't work well in dark mode
