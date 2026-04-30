import { useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { mapHrefToRoute } from '../utils/routeMap.js';

/**
 * The link mapping rewrites original HTML href values like
 * "auth.html" or "TARUGUARDIANS FIRST PAGE.html" to React Router
 * paths like "/auth" or "/home" while leaving external URLs alone.
 *
 * Anchor clicks are intercepted at the page root so navigation
 * stays inside the SPA without reloading the bundle.
 */

/**
 * Parses a raw HTML document string into:
 *   - `head`     : the contents of <head> (minus <title>) so we can
 *                  inject any inline <style>/<link> the original page
 *                  relied on
 *   - `body`     : the contents of <body> with its scripts removed
 *                  (we run them separately after mount)
 *   - `scripts`  : an array of { src?, type?, body, async, defer }
 *                  describing every <script> in the document, in the
 *                  original order
 */
function parseHtmlDocument(rawHtml) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(rawHtml, 'text/html');

  // Collect <script> tags in source order, then remove them so they
  // don't try to run a second time when the body is injected.
  const scripts = [];
  doc.querySelectorAll('script').forEach((script) => {
    scripts.push({
      src: script.getAttribute('src') || null,
      type: script.getAttribute('type') || null,
      body: script.textContent || '',
      async: script.hasAttribute('async'),
      defer: script.hasAttribute('defer'),
    });
    script.remove();
  });

  // Pull <style> and <link rel="stylesheet"> from <head> so we can
  // inject them — without them many pages lose their fonts / icons.
  const headStyles = [];
  doc.head.querySelectorAll('style').forEach((node) => {
    headStyles.push({ kind: 'style', body: node.textContent || '' });
  });
  doc.head.querySelectorAll('link[rel="stylesheet"]').forEach((node) => {
    const href = node.getAttribute('href');
    if (href) headStyles.push({ kind: 'link', href });
  });

  return {
    body: doc.body ? doc.body.innerHTML : '',
    bodyClass: doc.body ? doc.body.getAttribute('class') || '' : '',
    bodyStyle: doc.body ? doc.body.getAttribute('style') || '' : '',
    headStyles,
    scripts,
  };
}

/**
 * Renders a legacy HTML page inside React with full visual + behavioural
 * parity, while routing internal navigation through React Router.
 *
 * The approach: render the original `<body>` markup verbatim into a
 * container (preserving every class, attribute, inline style and
 * animation hook the original CSS / JS depends on), inject the page's
 * `<style>` and stylesheet `<link>`s into the document head, then
 * re-execute every original `<script>` so animations, particle systems,
 * three.js scenes, GSAP timelines, etc. all run as designed.
 *
 * When the page unmounts we tear all of that down so navigating between
 * routes doesn't leak DOM nodes, intervals, or animation frames.
 */
export default function LegacyPage({ html, pageId }) {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const parsed = useMemo(() => parseHtmlDocument(html), [html]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    // ---- Inject head styles & stylesheet links ----------------------
    const injectedHeadNodes = [];
    parsed.headStyles.forEach((item) => {
      if (item.kind === 'style') {
        const styleEl = document.createElement('style');
        styleEl.setAttribute('data-legacy-page', pageId);
        styleEl.textContent = item.body;
        document.head.appendChild(styleEl);
        injectedHeadNodes.push(styleEl);
      } else if (item.kind === 'link' && item.href) {
        // Skip duplicates already loaded globally (e.g. font-awesome).
        const existing = document.head.querySelector(
          `link[rel="stylesheet"][href="${item.href}"]`,
        );
        if (existing) return;
        const linkEl = document.createElement('link');
        linkEl.setAttribute('rel', 'stylesheet');
        linkEl.setAttribute('href', item.href);
        linkEl.setAttribute('data-legacy-page', pageId);
        document.head.appendChild(linkEl);
        injectedHeadNodes.push(linkEl);
      }
    });

    // ---- Mirror body class/style on our container ------------------
    if (parsed.bodyClass) container.className = `legacy-page ${parsed.bodyClass}`;
    else container.className = 'legacy-page';
    if (parsed.bodyStyle) container.setAttribute('style', parsed.bodyStyle);

    // ---- Sequentially execute scripts ------------------------------
    // Inline scripts are run via `new Function` so they share the
    // global scope (matching how the browser runs <script> tags).
    // External scripts are appended as <script src> nodes; we await
    // each one before continuing to preserve original ordering.
    let cancelled = false;
    const injectedScripts = [];

    const runScripts = async () => {
      for (const script of parsed.scripts) {
        if (cancelled) return;
        if (script.src) {
          // Skip CDN scripts already loaded globally in index.html.
          if (
            window.__legacyLoadedExternalScripts &&
            window.__legacyLoadedExternalScripts.has(script.src)
          ) {
            continue;
          }
          await new Promise((resolve) => {
            const el = document.createElement('script');
            el.src = script.src;
            if (script.type) el.type = script.type;
            el.async = false;
            el.onload = () => resolve();
            el.onerror = () => resolve();
            el.setAttribute('data-legacy-page', pageId);
            document.body.appendChild(el);
            injectedScripts.push(el);
            window.__legacyLoadedExternalScripts =
              window.__legacyLoadedExternalScripts || new Set();
            window.__legacyLoadedExternalScripts.add(script.src);
          });
        } else if (script.body && script.body.trim().length > 0) {
          // Skip module / JSON scripts — they would error if executed
          // outside of a real <script type="module"> in a fresh doc.
          if (script.type && script.type !== 'text/javascript' && script.type !== 'application/javascript') {
            continue;
          }
          try {
            // eslint-disable-next-line no-new-func
            const fn = new Function(script.body);
            fn.call(window);
          } catch (err) {
            // We log but don't crash — many original scripts contain
            // best-effort animation loops that gracefully degrade.
            // eslint-disable-next-line no-console
            console.warn(`[LegacyPage:${pageId}] script error:`, err);
          }
        }
      }
    };

    runScripts();

    // ---- Intercept anchor clicks for SPA navigation ----------------
    const handleClick = (event) => {
      const anchor = event.target.closest && event.target.closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href) return;
      // Leave external / hash-only / mailto / tel links alone.
      if (
        href.startsWith('http://') ||
        href.startsWith('https://') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('#')
      ) {
        return;
      }
      const mapped = mapHrefToRoute(href);
      if (mapped) {
        event.preventDefault();
        navigate(mapped);
      }
    };

    container.addEventListener('click', handleClick);

    // Cleanup on unmount: remove style/link/script nodes we appended,
    // restore scroll, and best-effort cancel running animation timers.
    return () => {
      cancelled = true;
      container.removeEventListener('click', handleClick);
      injectedHeadNodes.forEach((n) => n.remove());
      injectedScripts.forEach((n) => n.remove());
      // Remove globally-injected <script>/<style> belonging to this page id.
      document
        .querySelectorAll(`[data-legacy-page="${pageId}"]`)
        .forEach((n) => n.remove());
    };
  }, [parsed, pageId, navigate]);

  return (
    <div
      ref={containerRef}
      className="legacy-page"
      // The original body markup is rendered verbatim. React doesn't
      // re-render this HTML on subsequent updates because the parsed
      // value is memoised on `html`.
      dangerouslySetInnerHTML={{ __html: parsed.body }}
    />
  );
}
