// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Base path for GitHub Pages deployment at https://madhulathachintala5.github.io/mlsc-view/
// The GH_PAGES flag is only set by the GitHub Actions workflow, so local dev
// and the Lovable preview keep working at the root path.
const base = process.env.GH_PAGES === "true" ? "/mlsc-view/" : "/";

export default defineConfig({
  vite: {
    base,
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // GitHub Pages is static-only: prerender every page to plain HTML.
    prerender: {
      enabled: true,
      crawlLinks: true,
      failOnError: false,
    },
  },
  // For the GitHub Pages build, use a Node server bundle so every page can be
  // prerendered to static HTML during the build.
  ...(process.env.GH_PAGES === "true" ? { nitro: { preset: "node-server" } } : {}),
});
