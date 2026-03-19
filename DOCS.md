# DOCS

## Purpose

- This file is the high-level documentation index for `avion-client-react`.
- It summarizes the repo layout and points to the detailed project docs generated alongside it.
- It is intentionally verbose so the project can be scanned quickly without opening source files first.
- Every line below is derived from files present in the repository tree at generation time.

## Documentation Set

- README.md: broad repository overview, dependency inventory, and source map
- docs/architecture.md: system structure, execution flow, and integration boundaries
- docs/development.md: scripts, setup workflow, configuration, and day-to-day development touchpoints
- docs/features.md: route, page, module, service, and feature inventory

## Repository Profile

- Name: `avion-client-react`
- Kind: `frontend`
- Runtime: `Node.js`
- Framework: `React`
- Rendering or execution model: `Single-page application style client runtime`
- Package manager metadata: `pnpm@10.7.1`

## Scripts Snapshot

- `dev`: `vite`
- `build`: `tsc -b && vite build`
- `preview`: `vite preview`
- `lint`: `eslint . --fix`
- `format`: `prettier --write "src/**/*.{js,ts,tsx,jsx,json,css,md}"`
- `clean`: `rimraf ./dist`

## Environment Variable Snapshot

- `MONGO_URI`
- `NODE_ENV`
- `VITE_BACKEND_URL`
- `VITE_BASE_PATH`

## Top-Level Directories

- `.github/`
- `docs/`
- `public/`
- `src/`

## Top-Level Files

- `.gitignore`
- `.npmrc`
- `.prettierrc`
- `DOCS.md`
- `LICENSE.txt`
- `README.md`
- `env.d.ts`
- `index.html`
- `package.json`
- `pnpm-lock.yaml`
- `pnpm-workspace.yaml`
- `postcss.config.js`
- `tailwind.config.ts`
- `tsconfig.json`
- `tsconfig.tsbuildinfo`
- `vercel.json`
- `vite.config.ts`

## Integration Snapshot

- Axios is declared for HTTP calls
- Zod validation is declared
- React Redux is declared

## Authentication Snapshot

- Repository contains auth-related source files or routes

## Database Snapshot

- Confirmed database/storage implementation is not fully documented in the scanned files

## Primary Source Areas

- `src/` is present
- `public/` is present

## Detailed File Inventory

- `.github/dependabot.yml`
- `.prettierrc`
- `env.d.ts`
- `index.html`
- `package.json`
- `pnpm-lock.yaml`
- `pnpm-workspace.yaml`
- `postcss.config.js`
- `src/App.tsx`
- `src/components/badges/AvatarBadge.tsx`
- `src/components/badges/CartBadge.tsx`
- `src/components/badges/SearchBadge.tsx`
- `src/components/badges/index.ts`
- `src/components/feedback/Error.tsx`
- `src/components/feedback/Loading.tsx`
- `src/components/feedback/index.ts`
- `src/components/layout/DesktopHeader.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/layout/Header.tsx`
- `src/components/layout/MenuModal.tsx`
- `src/components/layout/MobileHeader.tsx`
- `src/components/navigation/NavLink.tsx`
- `src/components/navigation/NavLinksList.tsx`
- `src/components/search/SearchBar.tsx`
- `src/components/ui/Accordion.tsx`
- `src/components/ui/AspectRatio.tsx`
- `src/components/ui/Button.tsx`
- `src/components/ui/CheckBox.tsx`
- `src/components/ui/DropDownHeader.tsx`
- `src/components/ui/DropDownList.tsx`
- `src/components/ui/Label.tsx`
- `src/components/ui/LoadMoreButton.tsx`
- `src/components/ui/QuantitySelector.tsx`
- `src/components/ui/Section.tsx`
- `src/components/ui/SelectDropDown.tsx`
- `src/components/ui/Semantic.tsx`
- `src/config/index.ts`
- `src/config/navLinks.ts`
- `src/config/sortOptions.ts`
- `src/features/cart/CartButtons.tsx`
- `src/features/cart/CartItem.tsx`
- `src/features/cart/CartModal.tsx`
- `src/features/cart/CheckoutSummaryItem.tsx`
- `src/features/cart/sample.tsx`
- `src/features/filter-sort/ColorVariant.tsx`
- `src/features/filter-sort/FilterSortBar.tsx`
- `src/features/filter-sort/FilterSortContainer.tsx`
- `src/features/filter-sort/FilterSortContent.tsx`
- `src/features/filter-sort/FilterSortFooter.tsx`
- `src/features/filter-sort/FilterSortModal.tsx`
- `src/features/filter-sort/Filters.tsx`
- `src/features/filter-sort/Sort.tsx`
- `src/features/products/CatalogCard.tsx`
- `src/features/products/CatalogData.tsx`
- `src/features/products/ProductCard.tsx`
- `src/features/products/ProductDetails.tsx`
- `src/features/products/ProductListMobile.tsx`
- `src/features/products/ProductSkeleton.tsx`
- `src/features/products/RecommendedProducts.tsx`
- `src/hooks/TrackBreakPointsTW.tsx`
- `src/hooks/useAuth.ts`
- `src/hooks/useCart.ts`
- `src/hooks/useDebouncedSearch.ts`
- `src/icons/LogoIcon.tsx`
- `src/icons/MenuIcon.tsx`
- `src/icons/SearchIcon.tsx`
- `src/icons/index.ts`
- `src/main.tsx`
- `src/routes/About.tsx`
- `src/routes/Category.tsx`
- `src/routes/Checkout.tsx`
- `src/routes/ErrorPage.tsx`
- `src/routes/Home.tsx`
- `src/routes/Layout.tsx`
- `src/routes/Login.tsx`
- `src/routes/NotFound.tsx`
- `src/routes/ProductOverview.tsx`
- `src/routes/Products.tsx`
- `src/routes/SignUp.tsx`
- `src/routes/router.tsx`
- `src/sections/AboutSection.tsx`
- `src/sections/Hero.tsx`
- `src/sections/JoinTheClub.tsx`
- `src/sections/UICredit.tsx`
- `src/sections/UniqueSection.tsx`
- `src/sections/WhatsMake.tsx`
- `src/services/api/base.ts`
- `src/services/api/catalog/images.ts`
- `src/services/api/catalog/index.ts`
- `src/services/db/dbClients.ts`
- `src/services/db/index.ts`
- `src/services/db/models/Products.ts`
- `src/services/db/repositories/ProductRepository.ts`
- `src/stores/auth/index.ts`
- `src/stores/auth/selectors.ts`
- `src/stores/auth/slice.ts`
- `src/stores/auth/thunks.ts`
- `src/stores/cart/index.ts`
- `src/stores/cart/selectors.ts`
- `src/stores/cart/slice.ts`
- `src/stores/cart/thunks.ts`
- `src/stores/core/hooks.ts`
- `src/stores/core/rootReducer.ts`
- `src/stores/core/store.ts`
- `src/stores/modal/index.ts`
- `src/stores/modal/selectors.ts`
- `src/stores/modal/slice.ts`
- `src/stores/modal/thunks.ts`
- `src/stores/products/index.ts`
- `src/stores/products/selectors.ts`
- `src/stores/products/slice.ts`
- `src/stores/products/thunks.ts`
- `src/stores/search/index.ts`
- `src/stores/search/selectors.ts`
- `src/stores/search/slice.ts`
- `src/stores/user/selectors.ts`
- `src/stores/user/slice.ts`
- `src/stores/user/thunks.ts`
- `src/styles/css/AboutSc.module.css`
- `src/styles/css/AllProducts.module.css`
- `src/styles/css/Content-m.module.css`
- `src/styles/css/HomeM.module.css`
- `src/styles/css/Inspect.module.css`
- `src/styles/css/ProductListMobile.module.css`
- `src/styles/global.css`
- `src/types/cart.ts`
- `src/types/core.ts`
- `src/types/filter.ts`
- `src/types/index.ts`
- `src/types/optionsTypes.ts`
- `src/types/products.ts`
- `src/types/user.ts`
- `src/utils/calculateDiscount.ts`
- `src/utils/format.ts`
- `src/utils/index.ts`
- `src/utils/toaster.ts`
- `src/utils/tw.ts`
- `src/utils/updateFilter.ts`
- `src/vite-env.d.ts`
- `tailwind.config.ts`
- `tsconfig.json`
- `vercel.json`
- `vite.config.ts`

## Known Unknowns

- Deployment platform configuration was not explicitly confirmed from a Render manifest
- No dedicated test files were categorized from the scanned repository tree
