import { existsSync, readFileSync } from "node:fs"
import { join } from "node:path"

// A project's authored landing.mdx (synced from its repo). Null when the repo
// hasn't authored one — the route then falls back to README extraction.
export const getLandingMdx = (slug: string): string | null => {
  const file = join(process.cwd(), "content", "landings", `${slug}.mdx`)
  try {
    return existsSync(file) ? readFileSync(file, "utf8") : null
  } catch {
    return null
  }
}
