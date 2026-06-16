import type { Metadata } from "next"
import Link from "next/link"
import { getProjects } from "@/lib/projects"
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: "Projects — Erwann Mest",
  description:
    "Open-source command-line tools, MCP servers, and developer utilities by Erwann Mest.",
}

const ProjectsIndex = async () => {
  const projects = await getProjects()

  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <Link href="/" className={styles.back}>
          ← kud.io
        </Link>
        <h1 className={styles.title}>Projects</h1>
        <p className={styles.subtitle}>
          Open-source CLIs, MCP servers, and developer tools.
        </p>
      </header>

      {projects.length === 0 ? (
        <p className={styles.empty}>
          No projects tagged <code>kud-site</code> yet.
        </p>
      ) : (
        <ul className={styles.grid}>
          {projects.map((project) => (
            <li key={project.slug}>
              <Link href={`/projects/${project.slug}`} className={styles.card}>
                <h2 className={styles.cardTitle}>{project.name}</h2>
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
      )}
    </main>
  )
}

export default ProjectsIndex
