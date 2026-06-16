import { defineDocs, defineConfig } from "fumadocs-mdx/config"

// Per-project documentation is synced from each repo's markdown into
// content/projects/<slug>/... at build time; Fumadocs indexes it for the
// sidebar, table-of-contents, and search.
export const docs = defineDocs({
  dir: "content/projects",
})

export default defineConfig()
