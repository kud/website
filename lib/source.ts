import { docs } from "collections/server"
import { loader } from "fumadocs-core/source"
import type { Root, Node, Folder } from "fumadocs-core/page-tree"

// All per-project docs live under content/projects/<slug>/docs/**, so a single
// loader with baseUrl "/projects" maps them to /projects/<slug>/docs/** — the
// exact routes served by app/projects/[slug]/docs.
export const source = loader({
  baseUrl: "/projects",
  source: docs.toFumadocsSource(),
})

const isFolder = (node: Node): node is Folder => node.type === "folder"

const matchesDocs = (node: Node, prefix: string): boolean => {
  if (node.type === "page") {
    return node.url === prefix || node.url.startsWith(`${prefix}/`)
  }
  if (node.type === "folder") {
    return (
      (node.index ? matchesDocs(node.index, prefix) : false) ||
      node.children.some((child) => matchesDocs(child, prefix))
    )
  }
  return false
}

// Fumadocs builds one tree spanning every project; the sidebar for a single
// project is the subtree rooted at that project's docs folder.
export const getProjectDocsTree = (slug: string): Root => {
  const prefix = `/projects/${slug}/docs`

  const projectFolder = source.pageTree.children
    .filter(isFolder)
    .find((node) => matchesDocs(node, prefix))

  if (!projectFolder) return { name: slug, children: [] }

  const docsFolder =
    projectFolder.children
      .filter(isFolder)
      .find((node) => matchesDocs(node, prefix)) ?? projectFolder

  const children = [...docsFolder.children]
  if (docsFolder.index) children.unshift(docsFolder.index)

  return { name: docsFolder.name, children }
}

// The project's README, synced to docs/index — rendered as the landing's
// product presentation.
export const getProjectReadme = (slug: string) => source.getPage([slug, "docs"])

// True only when a project ships docs beyond the README index (a real docs/
// folder), which is when the landing should offer a "Read the docs" link.
export const projectHasExtraDocs = (slug: string): boolean =>
  source
    .getPages()
    .some(
      (page) =>
        page.slugs[0] === slug &&
        page.slugs[1] === "docs" &&
        page.slugs.length > 2,
    )
