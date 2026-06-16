const OWNER = "kud"
const TOPIC = "kud-site"

export type Project = {
  slug: string
  name: string
  description: string | null
  topics: string[]
  repoUrl: string
  homepage: string | null
  stars: number
  language: string | null
  pushedAt: string
}

type Repo = {
  name: string
  description: string | null
  topics?: string[]
  html_url: string
  homepage: string | null
  stargazers_count: number
  language: string | null
  pushed_at: string
}

// A token lifts the unauthenticated 60 req/hr limit to 5000 and allows private
// repos; everything still works without one, just rate-limited.
const ghHeaders = (): HeadersInit => {
  const token = process.env.GITHUB_TOKEN
  return {
    Accept: "application/vnd.github+json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  }
}

const toProject = (repo: Repo): Project => ({
  slug: repo.name,
  name: repo.name,
  description: repo.description,
  topics: (repo.topics ?? []).filter((topic) => topic !== TOPIC),
  repoUrl: repo.html_url,
  homepage: repo.homepage,
  stars: repo.stargazers_count,
  language: repo.language,
  pushedAt: repo.pushed_at,
})

// The showcase guest list: every repo tagged with the `kud-site` topic.
export const getProjects = async (): Promise<Project[]> => {
  const res = await fetch(
    `https://api.github.com/search/repositories?q=user:${OWNER}+topic:${TOPIC}&sort=updated&per_page=100`,
    { headers: ghHeaders(), next: { revalidate: 3600 } },
  )
  if (!res.ok) return []
  const data = (await res.json()) as { items?: Repo[] }
  return (data.items ?? []).map(toProject)
}

export const getProject = async (slug: string): Promise<Project | null> => {
  const res = await fetch(`https://api.github.com/repos/${OWNER}/${slug}`, {
    headers: ghHeaders(),
    next: { revalidate: 3600 },
  })
  if (!res.ok) return null
  return toProject((await res.json()) as Repo)
}
