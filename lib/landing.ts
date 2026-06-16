import { readFileSync } from "node:fs"
import { join } from "node:path"

export type Feature = { title: string; description: string }
export type Landing = { features: Feature[]; install: string | null }

// Structured landing data extracted from the README at sync time.
export const getLanding = (slug: string): Landing => {
  try {
    const raw = readFileSync(
      join(process.cwd(), "content", "projects", slug, "landing.json"),
      "utf8",
    )
    return JSON.parse(raw) as Landing
  } catch {
    return { features: [], install: null }
  }
}
