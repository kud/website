import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getProject, getProjects } from "@/lib/projects"
import { projectHasDocs } from "@/lib/source"
import styles from "./page.module.css"

export const generateStaticParams = async () =>
  (await getProjects()).map((project) => ({ slug: project.slug }))

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> => {
  const { slug } = await params
  const project = await getProject(slug)
  if (!project) return { title: slug }
  return {
    title: `${project.name} — Erwann Mest`,
    description: project.description ?? undefined,
  }
}

const ProjectLanding = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}) => {
  const { slug } = await params
  const project = await getProject(slug)
  if (!project) notFound()

  const hasDocs = projectHasDocs(slug)

  return (
    <main className={styles.page}>
      <Link href="/projects" className={styles.back}>
        ← Projects
      </Link>

      <h1 className={styles.title}>{project.name}</h1>
      {project.description ? (
        <p className={styles.tagline}>{project.description}</p>
      ) : null}

      <div className={styles.actions}>
        {hasDocs ? (
          <Link href={`/projects/${slug}/docs`} className={styles.primary}>
            Documentation →
          </Link>
        ) : null}
        <a
          href={project.repoUrl}
          className={styles.secondary}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        {project.homepage ? (
          <a
            href={project.homepage}
            className={styles.secondary}
            target="_blank"
            rel="noreferrer"
          >
            Website
          </a>
        ) : null}
      </div>

      {project.topics.length > 0 ? (
        <ul className={styles.topics}>
          {project.topics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      ) : null}
    </main>
  )
}

export default ProjectLanding
