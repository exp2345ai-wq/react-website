/**
 * Maps original HTML hrefs (the ones used inside the legacy pages) to
 * React Router paths. Every connected page in the original site has
 * an entry here so anchor clicks navigate inside the SPA without
 * reloading the bundle.
 *
 * Keys are normalised: lowercased, URL-decoded, with backslashes turned
 * into forward slashes and any leading `./` stripped. Unknown hrefs
 * return `null` and are left to the browser's default behaviour
 * (typically a no-op since the file doesn't exist anymore).
 */

const MAP = {
  // Entry / homes
  'index.html': '/',
  'taruguardians first page.html': '/home',
  'responsive part mobile.html': '/m/home',

  // Connected sub-pages
  'auth.html': '/auth',
  'admin.html': '/admin',
  'dashboard.html': '/dashboard',
  'recruitment.html': '/recruitment',
  'responsive event page.html': '/events',
  'responsive instagram highlight.html': '/instagram',
  'responsive interview.html': '/interview',
  'responsive roadmap 12.html': '/roadmap',
  'roadmap12.html': '/roadmap-old',
  'resposnsivealumnipage24.html': '/alumni',
  'responsive premium 3.html': '/premium',

  // Pages that were referenced in the original but never actually
  // existed in the repo are routed home so users don't hit dead ends.
  'roadmap11.html': '/roadmap',
  'launching website depression.html': '/home',
};

export function mapHrefToRoute(href) {
  if (!href) return null;
  let key = href.trim();
  // Strip query/hash so we match on the path only.
  const queryIdx = key.search(/[?#]/);
  if (queryIdx !== -1) key = key.slice(0, queryIdx);
  try {
    key = decodeURIComponent(key);
  } catch {
    /* ignore — keep raw if not decodable */
  }
  key = key.replace(/\\/g, '/').replace(/^\.\//, '').toLowerCase();
  return MAP[key] || null;
}
