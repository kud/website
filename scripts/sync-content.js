// Pulls documentation from every repo tagged `kud-site` into
// content/projects/<slug>/docs/, where Fumadocs indexes it. The README becomes
// the docs index; an optional docs/ folder in the repo adds deeper pages.
// Runs as part of `npm run build`. Never fails the build — a network/auth
// hiccup just leaves the existing (committed) content in place.
import { mkdir, writeFile } from "node:fs/promises"
import { dirname, join } from "node:path"

const OWNER = "kud"
const TOPIC = "kud-site"
const CONTENT_DIR = "content/projects"

// A token lifts the unauthenticated 60 req/hr limit to 5000; the sync also
// works fine without one for a small number of repos.
const token = process.env.GITHUB_TOKEN
const headers = {
  Accept: "application/vnd.github+json",
  "User-Agent": "kud-website-sync",
  ...(token ? { Authorization: `Bearer ${token}` } : {}),
}

const api = async (url) => {
  const res = await fetch(url, { headers })
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${url}`)
  return res.json()
}

const rawFile = async (slug, path) => {
  const res = await fetch(
    `https://raw.githubusercontent.com/${OWNER}/${slug}/HEAD/${path}`,
    { headers: token ? { Authorization: `Bearer ${token}` } : {} },
  )
  return res.ok ? res.text() : null
}

const frontmatter = (title, description) =>
  `---\ntitle: ${JSON.stringify(title ?? "")}\ndescription: ${JSON.stringify(
    description ?? "",
  )}\n---\n\n`

// The title lives in frontmatter, so drop a leading H1 to avoid duplication.
const stripLeadingH1 = (markdown) => markdown.replace(/^\s*#\s+.+\n+/, "")

// A README rendered on kud.io must resolve its repo-relative links/images to
// absolute GitHub URLs: images/assets to raw.githubusercontent.com, other
// links to the repo's blob view. `new URL` handles ./ and ../ correctly.
const RELATIVE = /^(?!https?:|\/\/|\/|#|mailto:|tel:|data:)/i

const rewriteLinks = (markdown, slug, srcDir) => {
  const rawBase = `https://raw.githubusercontent.com/${OWNER}/${slug}/HEAD/${srcDir}`
  const blobBase = `https://github.com/${OWNER}/${slug}/blob/HEAD/${srcDir}`
  const absolute = (rel, base) => {
    try {
      return new URL(rel, base).href
    } catch {
      return rel
    }
  }
  return markdown
    .replace(/(!\[[^\]]*\]\()([^)\s]+)(\))/g, (match, pre, url, post) =>
      RELATIVE.test(url) ? `${pre}${absolute(url, rawBase)}${post}` : match,
    )
    .replace(/(?<!!)(\[[^\]]*\]\()([^)\s]+)(\))/g, (match, pre, url, post) =>
      RELATIVE.test(url) ? `${pre}${absolute(url, blobBase)}${post}` : match,
    )
    .replace(/(\ssrc=")([^"]+)(")/g, (match, pre, url, post) =>
      RELATIVE.test(url) ? `${pre}${absolute(url, rawBase)}${post}` : match,
    )
    .replace(/(\shref=")([^"]+)(")/g, (match, pre, url, post) =>
      RELATIVE.test(url) ? `${pre}${absolute(url, blobBase)}${post}` : match,
    )
}

const writeDoc = async (slug, relPath, body) => {
  const file = join(CONTENT_DIR, slug, "docs", relPath)
  await mkdir(dirname(file), { recursive: true })
  await writeFile(file, body)
}

const syncRepo = async (repo) => {
  const slug = repo.name

  const readme = await rawFile(slug, "README.md")
  if (readme) {
    const body = rewriteLinks(stripLeadingH1(readme), slug, "")
    await writeDoc(
      slug,
      "index.md",
      frontmatter(repo.name, repo.description) + body,
    )
  }

  try {
    const tree = await api(
      `https://api.github.com/repos/${OWNER}/${slug}/git/trees/HEAD?recursive=1`,
    )
    const docFiles = (tree.tree ?? []).filter(
      (node) => node.type === "blob" && /^docs\/.+\.mdx?$/.test(node.path),
    )
    for (const file of docFiles) {
      const text = await rawFile(slug, file.path)
      if (!text) continue
      const srcDir = `${dirname(file.path)}/`
      await writeDoc(
        slug,
        file.path.replace(/^docs\//, ""),
        rewriteLinks(text, slug, srcDir),
      )
    }
  } catch {
    // No docs/ folder — a README-only project, which is fine.
  }

  return slug
}

const main = async () => {
  const search = await api(
    `https://api.github.com/search/repositories?q=user:${OWNER}+topic:${TOPIC}&per_page=100`,
  )
  const repos = search.items ?? []

  if (repos.length === 0) {
    console.warn(
      `[sync] no repos tagged "${TOPIC}" yet — leaving existing content untouched.`,
    )
    return
  }

  const synced = []
  for (const repo of repos) synced.push(await syncRepo(repo))
  console.log(`[sync] synced ${synced.length} project(s): ${synced.join(", ")}`)
}

try {
  await main()
} catch (error) {
  console.warn(`[sync] skipped: ${error.message}`)
}
