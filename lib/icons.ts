import { readFile } from "node:fs/promises"
import { join } from "node:path"

// slug → raw URL of the repo's assets/icon.{svg,png}, emitted by the sync.
let cache: Record<string, string> | null = null

export const getIcons = async (): Promise<Record<string, string>> => {
  if (cache) return cache
  try {
    const raw = await readFile(
      join(process.cwd(), "content/projects/icons.json"),
      "utf8",
    )
    cache = JSON.parse(raw) as Record<string, string>
  } catch {
    cache = {}
  }
  return cache
}
