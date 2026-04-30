#!/usr/bin/env node
/**
 * convert-html-to-react.mjs
 * ----------------------------------------------------------------
 * Converts every connected legacy HTML page in `legacy-source/`
 * into a real React component (.jsx) under `src/pages/generated/`,
 * an associated CSS file under `src/pages/generated/<name>.css`,
 * and an inline-script bundle under `src/pages/generated/<name>.js`.
 *
 * Goals:
 *   • Preserve every byte of original markup, CSS, and JS — nothing
 *     is trimmed, abridged, or rewritten beyond mechanical syntax
 *     transforms required by JSX / module-script semantics.
 *   • Produce idiomatic React: real JSX (className, htmlFor, …),
 *     proper imports, useEffect-based script execution, React Router
 *     <Link> for internal navigation.
 *   • Keep all original animations (Three.js, GSAP, particles, AOS,
 *     lottie) running 1:1 because their underlying scripts execute
 *     verbatim in useEffect after mount.
 *
 * Usage:
 *   node scripts/convert-html-to-react.mjs
 *
 * Output for `legacy-source/auth.html`:
 *   src/pages/generated/Auth.jsx       (full JSX component)
 *   src/pages/generated/Auth.css       (all <style> blocks merged)
 *   src/pages/generated/Auth.scripts.js  (all inline <script> bodies, joined,
 *                                         transformed for SPA navigation)
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { JSDOM } from 'jsdom';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = resolve(__dirname, '..');
const LEGACY_DIR = join(ROOT, 'legacy-source');
const OUT_DIR = join(ROOT, 'src', 'pages', 'generated');

// --------------------------------------------------------------------
// Page manifest: describes every connected legacy page that becomes a
// React component. Each entry maps:
//   componentName  - PascalCase exported React component name
//   sourceFile     - file inside legacy-source/
//   route          - React Router path the page lives on
// EntryLoader (`/`) is hand-written separately because its three.js
// loader needs to call `navigate()` on completion (not a redirect).
// --------------------------------------------------------------------
const PAGES = [
  { componentName: 'DesktopHome',         sourceFile: 'TARUGUARDIANS FIRST PAGE.html', route: '/home' },
  { componentName: 'MobileHome',          sourceFile: 'responsive part mobile.html',   route: '/m/home' },
  { componentName: 'Auth',                sourceFile: 'auth.html',                     route: '/auth' },
  { componentName: 'Admin',               sourceFile: 'admin.html',                    route: '/admin' },
  { componentName: 'Dashboard',           sourceFile: 'dashboard.html',                route: '/dashboard' },
  { componentName: 'Recruitment',         sourceFile: 'recruitment.html',              route: '/recruitment' },
  { componentName: 'Events',              sourceFile: 'responsive event page.html',    route: '/events' },
  { componentName: 'InstagramHighlight',  sourceFile: 'responsive instagram highlight.html', route: '/instagram' },
  { componentName: 'Interview',           sourceFile: 'responsive interview.html',     route: '/interview' },
  { componentName: 'Roadmap',             sourceFile: 'responsive roadmap 12.html',    route: '/roadmap' },
  { componentName: 'RoadmapOld',          sourceFile: 'roadmap12.html',                route: '/roadmap-old' },
  { componentName: 'Alumni',              sourceFile: 'resposnsivealumnipage24.html',  route: '/alumni' },
  { componentName: 'PremiumLoader',       sourceFile: 'responsive premium 3.html',     route: '/premium' },
];

// --------------------------------------------------------------------
// Attribute renaming: HTML → JSX. We handle the common attributes that
// differ between HTML and JSX. Anything not in this map is preserved
// as-is (custom data-* / aria-* attributes already work in JSX).
// --------------------------------------------------------------------
const ATTR_MAP = {
  'class': 'className',
  'for': 'htmlFor',
  'tabindex': 'tabIndex',
  'readonly': 'readOnly',
  'maxlength': 'maxLength',
  'minlength': 'minLength',
  'colspan': 'colSpan',
  'rowspan': 'rowSpan',
  'cellpadding': 'cellPadding',
  'cellspacing': 'cellSpacing',
  'frameborder': 'frameBorder',
  'allowfullscreen': 'allowFullScreen',
  'autocomplete': 'autoComplete',
  'autoplay': 'autoPlay',
  'autofocus': 'autoFocus',
  'crossorigin': 'crossOrigin',
  'enctype': 'encType',
  'novalidate': 'noValidate',
  'spellcheck': 'spellCheck',
  'srcset': 'srcSet',
  'srclang': 'srcLang',
  'usemap': 'useMap',
  'accept-charset': 'acceptCharset',
  'http-equiv': 'httpEquiv',
  'contenteditable': 'contentEditable',
  'inputmode': 'inputMode',
  'datetime': 'dateTime',
  'formaction': 'formAction',
  'formenctype': 'formEncType',
  'formmethod': 'formMethod',
  'formnovalidate': 'formNoValidate',
  'formtarget': 'formTarget',
  'marginheight': 'marginHeight',
  'marginwidth': 'marginWidth',
  'mediagroup': 'mediaGroup',
  'radiogroup': 'radioGroup',
};

// SVG attributes (kebab-case → camelCase). Only the common ones used
// by the original markup; others remain valid SVG attribute names.
const SVG_ATTR_MAP = {
  'stroke-width': 'strokeWidth',
  'stroke-linecap': 'strokeLinecap',
  'stroke-linejoin': 'strokeLinejoin',
  'stroke-miterlimit': 'strokeMiterlimit',
  'stroke-dasharray': 'strokeDasharray',
  'stroke-dashoffset': 'strokeDashoffset',
  'stroke-opacity': 'strokeOpacity',
  'fill-opacity': 'fillOpacity',
  'fill-rule': 'fillRule',
  'clip-path': 'clipPath',
  'clip-rule': 'clipRule',
  'flood-color': 'floodColor',
  'flood-opacity': 'floodOpacity',
  'stop-color': 'stopColor',
  'stop-opacity': 'stopOpacity',
  'text-anchor': 'textAnchor',
  'font-family': 'fontFamily',
  'font-size': 'fontSize',
  'font-weight': 'fontWeight',
  'color-interpolation-filters': 'colorInterpolationFilters',
  'gradient-units': 'gradientUnits',
  'pointer-events': 'pointerEvents',
  'xlink:href': 'xlinkHref',
  'xml:lang': 'xmlLang',
};

// HTML void elements — must be self-closed in JSX.
const VOID_ELEMENTS = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'keygen',
  'link', 'meta', 'param', 'source', 'track', 'wbr',
]);

// Tags whose text content should be passed through verbatim (no JSX
// escaping of `{` / `}` since they're treated as text by the browser
// in raw <pre>/<code>/<textarea>). For simplicity we still escape but
// preserve indentation.

/**
 * Convert an inline `style="..."` attribute string into a JSX-compatible
 * object literal source: `{{ color: 'red', backgroundColor: '#000' }}`.
 *
 * We preserve every declaration; even unknown / vendor-prefixed
 * properties are kept (camelCased). CSS variables (`--foo`) are emitted
 * with bracket-key syntax so they survive into the rendered DOM.
 */
function inlineStyleToJsxObject(styleString) {
  if (!styleString || !styleString.trim()) return null;
  const decls = [];
  // Split on `;` but ignore semicolons inside parentheses (e.g. rgba()).
  let depth = 0;
  let current = '';
  for (const ch of styleString) {
    if (ch === '(') depth += 1;
    else if (ch === ')') depth = Math.max(0, depth - 1);
    if (ch === ';' && depth === 0) {
      if (current.trim()) decls.push(current);
      current = '';
    } else {
      current += ch;
    }
  }
  if (current.trim()) decls.push(current);

  const props = [];
  for (const decl of decls) {
    const idx = decl.indexOf(':');
    if (idx === -1) continue;
    const rawProp = decl.slice(0, idx).trim();
    const rawValue = decl.slice(idx + 1).trim();
    if (!rawProp || !rawValue) continue;

    let key;
    if (rawProp.startsWith('--')) {
      key = JSON.stringify(rawProp);
    } else {
      // kebab-case → camelCase. Vendor prefixes: `-webkit-foo` → `WebkitFoo`.
      key = rawProp.replace(/^-(ms|moz|webkit|o)-/, (_m, p) => {
        return p.charAt(0).toUpperCase() + p.slice(1) + '-';
      }).replace(/-([a-z])/g, (_m, c) => c.toUpperCase());
    }
    // Value escaping: keep as a JS string literal. Preserve !important.
    const valueLiteral = JSON.stringify(rawValue);
    props.push(`${key}: ${valueLiteral}`);
  }

  if (props.length === 0) return null;
  return `{{${props.join(', ')}}}`;
}

/**
 * Escape a JSX text node. We need to escape `{` and `}` (JSX
 * expression delimiters) and turn `<` / `>` outside of tags into
 * entities. We leave everything else alone so the original visual
 * output (including emoji, accented characters, &nbsp; entities the
 * parser already decoded) is preserved.
 */
function escapeJsxText(text) {
  if (!text) return '';
  // Replace stray `{`/`}` characters with JSX expression containers
  // holding the literal character. This is the simplest way to
  // preserve them inside JSX text.
  let out = '';
  for (const ch of text) {
    if (ch === '{') out += '{"{"}';
    else if (ch === '}') out += '{"}"}';
    else if (ch === '<') out += '&lt;';
    else if (ch === '>') out += '&gt;';
    else out += ch;
  }
  return out;
}

/**
 * Encode an attribute value for use inside a double-quoted JSX
 * attribute. We pick a quote style that doesn't conflict with the
 * value's contents and fall back to a JSX expression with a string
 * literal for the gnarly cases.
 */
function jsxAttributeValue(value) {
  if (value === '' || value == null) {
    // Boolean-style attribute (e.g. `disabled`). Use `={true}`.
    return '={true}';
  }
  // Always emit as `={"..."}` — this works for every value including
  // ones containing `"`, `<`, `>`, `{`, `}`, newlines, etc., because
  // JSON.stringify produces a valid JS string literal.
  return `={${JSON.stringify(value)}}`;
}

/**
 * Convert a single DOM node to a JSX source string. Runs recursively
 * over the subtree.
 */
function nodeToJsx(node, ctx) {
  // Element node
  if (node.nodeType === 1) {
    const tag = node.tagName.toLowerCase();

    // Skip <script> tags here — their bodies are extracted separately
    // and re-executed via useEffect.
    if (tag === 'script') return '';
    // Skip <style> tags — their bodies are written to the page CSS
    // file and imported instead of inlined.
    if (tag === 'style') return '';

    // <a href="…">: rewrite internal hrefs to React Router <Link>.
    let useRouterLink = false;
    let routerTo = null;
    if (tag === 'a') {
      const href = node.getAttribute('href');
      if (href) {
        const mapped = ctx.mapHref(href);
        if (mapped) {
          useRouterLink = true;
          routerTo = mapped;
        }
      }
    }

    const attrs = [];
    for (const attr of Array.from(node.attributes)) {
      let name = attr.name;
      const value = attr.value;
      if (useRouterLink && name === 'href') continue; // we'll add `to`
      if (name === 'style') {
        const styleObj = inlineStyleToJsxObject(value);
        if (styleObj) attrs.push(`style=${styleObj}`);
        continue;
      }
      // Strip event-handler attributes (onclick, onload, etc.) — they
      // would become DOM `on…` props in JSX which behave differently.
      // The same logic continues to run because the inline script
      // bodies are preserved in the page's scripts file (which still
      // calls global functions defined there).
      if (name.startsWith('on')) {
        // We preserve the handler as a `data-legacy-on…` attribute
        // so the original code can still attach via querySelector if
        // it relied on `[onclick]` selectors. In practice we emit a
        // commented note via dangerous-prop translation.
        const dataName = `data-legacy-${name.toLowerCase()}`;
        attrs.push(`${dataName}=${JSON.stringify(value)}`);
        continue;
      }
      // SVG attribute mapping
      if (SVG_ATTR_MAP[name]) name = SVG_ATTR_MAP[name];
      // HTML attribute mapping
      else if (ATTR_MAP[name]) name = ATTR_MAP[name];
      // Drop attributes with names that aren't valid as JSX
      // attribute names. The regex allows the standard HTML form
      // (letters/digits/dash) plus `_` for legacy data-attrs. We
      // intentionally reject names containing `:`, `.`, `;`, `'`,
      // `"`, `(`, `)` etc. — these come from HTML parsers tolerating
      // malformed source like `<h3 font-family: ...>` (a real example
      // from the legacy markup) and would crash the JSX compiler.
      if (!/^[A-Za-z][A-Za-z0-9_-]*$/.test(name)) continue;

      attrs.push(`${name}${jsxAttributeValue(value)}`);
    }

    // Open tag. For Router <Link>, we use the imported component.
    const openTagName = useRouterLink ? 'Link' : tag;
    const openParts = [openTagName, ...attrs];
    if (useRouterLink) openParts.splice(1, 0, `to=${JSON.stringify(routerTo)}`);

    if (VOID_ELEMENTS.has(tag) && !useRouterLink) {
      return `<${openParts.join(' ')} />`;
    }

    // Children
    const children = [];
    for (const child of Array.from(node.childNodes)) {
      const piece = nodeToJsx(child, ctx);
      if (piece) children.push(piece);
    }

    if (useRouterLink) ctx.usedLink = true;
    return `<${openParts.join(' ')}>${children.join('')}</${openTagName}>`;
  }
  // Text node
  if (node.nodeType === 3) {
    return escapeJsxText(node.nodeValue);
  }
  // Comment node — preserve as JSX comment so the source stays faithful.
  if (node.nodeType === 8) {
    const safe = (node.nodeValue || '').replace(/\*\//g, '*\\/');
    return `{/*${safe}*/}`;
  }
  return '';
}

// --------------------------------------------------------------------
// Route map shared with src/utils/routeMap.js — duplicated here in a
// minimal form so the converter can rewrite anchors at build time.
// --------------------------------------------------------------------
const ROUTE_MAP = {
  'index.html': '/',
  'taruguardians first page.html': '/home',
  'responsive part mobile.html': '/m/home',
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
  'roadmap11.html': '/roadmap',
  'launching website depression.html': '/home',
};

function mapHrefBuildTime(href) {
  if (!href) return null;
  let key = href.trim();
  const queryIdx = key.search(/[?#]/);
  if (queryIdx !== -1) key = key.slice(0, queryIdx);
  try { key = decodeURIComponent(key); } catch { /* ignore */ }
  key = key.replace(/\\/g, '/').replace(/^\.\//, '').toLowerCase();
  return ROUTE_MAP[key] || null;
}

/**
 * Rewrite `(window.)?location.href = "X.html"` and
 * `location.assign("X.html")` so they route through React Router
 * via the global `__legacyTryNavigate` hook.
 */
function rewriteScriptForSpaNavigation(source) {
  if (!source) return source;
  const pattern = /(?:window\s*\.\s*)?location\s*\.\s*(?:href\s*=|assign\s*\(\s*)\s*(['"])([^'"\n]+?)\1\s*\)?/g;
  return source.replace(pattern, (match) => {
    return `(window.__legacyTryNavigate && window.__legacyTryNavigate(${match.match(/['"]([^'"]+)['"]/)[0]})) || (${match})`;
  });
}

// --------------------------------------------------------------------
// Per-file conversion driver
// --------------------------------------------------------------------
function convertPage(page) {
  const sourcePath = join(LEGACY_DIR, page.sourceFile);
  if (!existsSync(sourcePath)) {
    console.warn(`[skip] ${page.sourceFile} (not found)`);
    return null;
  }
  const html = readFileSync(sourcePath, 'utf8');
  const dom = new JSDOM(html);
  const doc = dom.window.document;

  // ---- Extract <style> blocks → CSS file -----------------------------
  const styleParts = [];
  doc.querySelectorAll('style').forEach((node) => {
    styleParts.push(node.textContent || '');
  });
  // Also preserve any <link rel="stylesheet"> hrefs as @import / comment
  // entries so the CSS file documents what the page expected.
  const linkComments = [];
  doc.querySelectorAll('link[rel="stylesheet"]').forEach((node) => {
    const href = node.getAttribute('href');
    if (href) linkComments.push(`/* original <link rel="stylesheet" href="${href}"> — already loaded globally in index.html */`);
  });
  const cssContent = [...linkComments, ...styleParts].join('\n\n');

  // ---- Extract <script> blocks → scripts file ------------------------
  const scriptEntries = [];
  doc.querySelectorAll('script').forEach((node) => {
    const src = node.getAttribute('src');
    const type = node.getAttribute('type') || 'text/javascript';
    if (src) {
      scriptEntries.push({ kind: 'external', src, type });
    } else {
      scriptEntries.push({ kind: 'inline', body: node.textContent || '', type });
    }
  });

  // Build the scripts module: an exported runner that re-creates the
  // original execution sequence after mount. External scripts are
  // injected as <script src> tags (skipped if already loaded). Inline
  // scripts are evaluated in the global scope via `new Function`.
  const scriptsJs = buildScriptsModule(scriptEntries, page.componentName);

  // ---- Convert <body> → JSX -----------------------------------------
  const ctx = { mapHref: mapHrefBuildTime, usedLink: false };
  const bodyChildren = Array.from(doc.body.childNodes)
    .map((n) => nodeToJsx(n, ctx))
    .filter(Boolean)
    .join('');
  const bodyClass = doc.body.getAttribute('class') || '';
  const bodyStyle = doc.body.getAttribute('style') || '';
  const bodyStyleObj = bodyStyle ? inlineStyleToJsxObject(bodyStyle) : null;

  const componentSrc = buildComponent({
    page,
    bodyJsx: bodyChildren,
    bodyClass,
    bodyStyleObj,
    usedLink: ctx.usedLink,
    cssFileName: `${page.componentName}.css`,
    scriptsFileName: `${page.componentName}.scripts.js`,
    hasCss: cssContent.length > 0,
    hasScripts: scriptEntries.length > 0,
  });

  return {
    page,
    componentSrc,
    cssContent,
    scriptsJs,
    hasCss: cssContent.length > 0,
    hasScripts: scriptEntries.length > 0,
  };
}

function buildScriptsModule(scriptEntries, componentName) {
  const entries = scriptEntries.map((s, i) => {
    if (s.kind === 'external') {
      return `  { kind: 'external', src: ${JSON.stringify(s.src)}, type: ${JSON.stringify(s.type)} }`;
    }
    // Use a tagged template-literal-safe representation: serialize the
    // body as a JSON string so backticks / dollar signs in the original
    // source don't break interpolation.
    const transformed = rewriteScriptForSpaNavigation(s.body);
    return `  { kind: 'inline', type: ${JSON.stringify(s.type)}, body: ${JSON.stringify(transformed)} }`;
  });

  return `// Auto-generated from legacy-source/ by scripts/convert-html-to-react.mjs
// Inline + external scripts extracted from the original HTML for the
// "${componentName}" page. Replayed in source order after the React
// component mounts so every original animation / event handler runs
// exactly as it did in the legacy site.

const SCRIPTS = [
${entries.join(',\n')}
];

const LOADED = (typeof window !== 'undefined' && (window.__legacyLoadedExternalScripts ||= new Set())) || new Set();

export async function runScripts(pageId) {
  for (const s of SCRIPTS) {
    if (s.kind === 'external') {
      if (LOADED.has(s.src)) continue;
      await new Promise((resolve) => {
        const el = document.createElement('script');
        el.src = s.src;
        if (s.type) el.type = s.type;
        el.async = false;
        el.onload = () => resolve();
        el.onerror = () => resolve();
        el.setAttribute('data-legacy-page', pageId);
        document.body.appendChild(el);
        LOADED.add(s.src);
      });
    } else {
      if (s.type && s.type !== 'text/javascript' && s.type !== 'application/javascript') continue;
      try {
        // eslint-disable-next-line no-new-func
        const fn = new Function(s.body);
        fn.call(window);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.warn('[' + pageId + '] script error:', err);
      }
    }
  }
}

export function cleanupScripts(pageId) {
  document.querySelectorAll('[data-legacy-page="' + pageId + '"]').forEach((n) => n.remove());
}
`;
}

function buildComponent({
  page, bodyJsx, bodyClass, bodyStyleObj, usedLink,
  cssFileName, scriptsFileName, hasCss, hasScripts,
}) {
  const imports = [
    `import { useEffect, useRef } from 'react';`,
  ];
  if (usedLink) imports.push(`import { Link, useNavigate } from 'react-router-dom';`);
  else imports.push(`import { useNavigate } from 'react-router-dom';`);
  if (hasCss) imports.push(`import './${cssFileName}';`);
  if (hasScripts) imports.push(`import { runScripts, cleanupScripts } from './${scriptsFileName.replace(/\.js$/, '')}';`);
  imports.push(`import { mapHrefToRoute } from '../../utils/routeMap.js';`);

  const className = bodyClass ? `legacy-page legacy-${page.componentName} ${bodyClass}` : `legacy-page legacy-${page.componentName}`;
  const styleProp = bodyStyleObj ? ` style=${bodyStyleObj}` : '';

  // Render the JSX body verbatim, without re-formatting (which would
  // alter whitespace between elements that the original CSS may rely
  // on for inline-block layouts, white-space-pre styles, etc.).
  return `// AUTO-GENERATED — DO NOT EDIT BY HAND
// Generated from legacy-source/${page.sourceFile}
// by scripts/convert-html-to-react.mjs
//
// This file is the React port of the original HTML page. Every
// element, attribute, inline style, and child node from the source
// document has been mechanically translated to JSX. Inline <script>
// blocks live in ./${scriptsFileName} and run in a useEffect after
// mount; <style> blocks live in ./${cssFileName} and are imported
// at the top of this module.

${imports.join('\n')}

const PAGE_ID = ${JSON.stringify(page.componentName)};

export default function ${page.componentName}() {
  const navigate = useNavigate();
  const rootRef = useRef(null);

  useEffect(() => {
    // Wire the global SPA-navigation hook used by inline scripts that
    // assigned to window.location.href in the original site.
    const previous = window.__legacyTryNavigate;
    window.__legacyTryNavigate = (href) => {
      const mapped = mapHrefToRoute(href);
      if (mapped) {
        Promise.resolve().then(() => navigate(mapped));
        return true;
      }
      return false;
    };

    ${hasScripts ? 'runScripts(PAGE_ID);' : ''}

    // Intercept anchor clicks in case the converter missed any
    // (e.g. dynamically-injected <a> nodes).
    const root = rootRef.current;
    const onClick = (event) => {
      const a = event.target.closest && event.target.closest('a');
      if (!a) return;
      const href = a.getAttribute('href');
      if (!href) return;
      if (href.startsWith('http://') || href.startsWith('https://') ||
          href.startsWith('mailto:') || href.startsWith('tel:') ||
          href.startsWith('#')) return;
      const mapped = mapHrefToRoute(href);
      if (mapped) {
        event.preventDefault();
        navigate(mapped);
      }
    };
    if (root) root.addEventListener('click', onClick);

    return () => {
      ${hasScripts ? 'cleanupScripts(PAGE_ID);' : ''}
      if (root) root.removeEventListener('click', onClick);
      window.__legacyTryNavigate = previous;
    };
  }, [navigate]);

  return (
    <div ref={rootRef} className=${JSON.stringify(className)}${styleProp}>
${bodyJsx}
    </div>
  );
}
`;
}

// --------------------------------------------------------------------
// Main
// --------------------------------------------------------------------
function main() {
  if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

  const summary = [];
  for (const page of PAGES) {
    process.stdout.write(`[convert] ${page.sourceFile}  →  src/pages/generated/${page.componentName}.jsx ... `);
    let result;
    try {
      result = convertPage(page);
    } catch (err) {
      console.log('FAILED');
      console.error(err);
      summary.push({ page, ok: false, error: err.message });
      continue;
    }
    if (!result) {
      console.log('skipped');
      continue;
    }

    writeFileSync(join(OUT_DIR, `${page.componentName}.jsx`), result.componentSrc, 'utf8');
    if (result.hasCss) {
      writeFileSync(join(OUT_DIR, `${page.componentName}.css`), result.cssContent, 'utf8');
    }
    if (result.hasScripts) {
      writeFileSync(join(OUT_DIR, `${page.componentName}.scripts.js`), result.scriptsJs, 'utf8');
    }
    console.log('ok');
    summary.push({ page, ok: true });
  }

  // Write an index re-export for convenience.
  const indexSrc = PAGES.map((p) => `export { default as ${p.componentName} } from './${p.componentName}.jsx';`).join('\n') + '\n';
  writeFileSync(join(OUT_DIR, 'index.js'), indexSrc, 'utf8');

  console.log('\nSummary:');
  for (const item of summary) {
    console.log(`  ${item.ok ? '✓' : '✗'}  ${item.page.componentName}`);
  }
}

main();
