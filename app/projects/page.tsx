import type { Metadata } from "next"
import Link from "next/link"
import { getProjects, type Project } from "@/lib/projects"
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: "Projects — Erwann Mest",
  description:
    "Open-source command-line tools, MCP servers, and developer utilities by Erwann Mest.",
}

type Category = {
  name: string
  key: string
  match: (project: Project) => boolean
}

// Ordered, first-match-wins; the last entry is the catch-all.
const CATEGORIES: Category[] = [
  { name: "MCP Servers", key: "mcp", match: (p) => p.slug.startsWith("mcp-") },
  {
    name: "Claude Code",
    key: "claude",
    match: (p) => p.slug.startsWith("claude-"),
  },
  {
    name: "UI & Design Systems",
    key: "ui",
    match: (p) => p.slug === "shui" || p.slug === "ink-ui",
  },
  { name: "CLIs & Tools", key: "cli", match: () => true },
]

const groupByCategory = (projects: Project[]) => {
  const used = new Set<string>()
  return CATEGORIES.map((category) => {
    const items = projects.filter(
      (project) => !used.has(project.slug) && category.match(project),
    )
    items.forEach((project) => used.add(project.slug))
    return { ...category, items }
  }).filter((category) => category.items.length > 0)
}

const ProjectsIndex = async () => {
  const projects = await getProjects()
  const groups = groupByCategory(projects)

  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <Link href="/" className={styles.back}>
          ← kud.io
        </Link>
        <h1 className={styles.title}>Projects</h1>
        <p className={styles.subtitle}>
          Open-source CLIs, MCP servers, and developer tools
          {projects.length > 0 ? ` — ${projects.length} and counting` : ""}.
        </p>
      </header>

      {groups.length === 0 ? (
        <p className={styles.empty}>
          No projects tagged <code>kud-site</code> yet.
        </p>
      ) : (
        groups.map((group) => (
          <section
            key={group.key}
            className={styles.section}
            data-cat={group.key}
          >
            <h2 className={styles.sectionTitle}>
              <span className={styles.dot} />
              {group.name}
              <span className={styles.count}>{group.items.length}</span>
            </h2>
            <ul className={styles.grid}>
              {group.items.map((project) => (
                <li key={project.slug}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className={styles.card}
                  >
                    <h3 className={styles.cardTitle}>{project.name}</h3>
                    {project.description ? (
                      <p className={styles.cardDesc}>{project.description}</p>
                    ) : null}
                    <div className={styles.meta}>
                      {project.language ? (
                        <span className={styles.lang}>{project.language}</span>
                      ) : null}
                      {project.stars > 0 ? (
                        <span className={styles.stars}>★ {project.stars}</span>
                      ) : null}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))
      )}
    </main>
  )
}

export default ProjectsIndex
