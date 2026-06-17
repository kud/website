"use client"

import { useState } from "react"
import Link from "next/link"
import type { Project } from "@/lib/projects"
import styles from "./project-list.module.css"

type Group = { key: string; name: string; items: Project[] }

type SortKey = "updated" | "stars" | "name"

const SORTS: Record<
  SortKey,
  { label: string; fn: (a: Project, b: Project) => number }
> = {
  updated: {
    label: "Recently updated",
    fn: (a, b) => b.pushedAt.localeCompare(a.pushedAt),
  },
  stars: {
    label: "Most stars",
    fn: (a, b) => b.stars - a.stars || a.slug.localeCompare(b.slug),
  },
  name: {
    label: "Name (A–Z)",
    fn: (a, b) => a.slug.localeCompare(b.slug),
  },
}

export const ProjectList = ({ groups }: { groups: Group[] }) => {
  const [sort, setSort] = useState<SortKey>("updated")
  const compare = SORTS[sort].fn

  return (
    <>
      <div className={styles.toolbar}>
        <label className={styles.sortLabel}>
          Sort by
          <select
            className={styles.select}
            value={sort}
            onChange={(event) => setSort(event.target.value as SortKey)}
          >
            {Object.entries(SORTS).map(([key, { label }]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </label>
      </div>

      {groups.map((group) => {
        const items = [...group.items].sort(compare)
        return (
          <section
            key={group.key}
            className={styles.section}
            data-cat={group.key}
          >
            <h2 className={styles.sectionTitle}>
              <span className={styles.dot} />
              {group.name}
              <span className={styles.count}>{items.length}</span>
            </h2>
            <div className={styles.list}>
              {items.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className={styles.row}
                >
                  <div className={styles.rowHead}>
                    <span className={styles.rowName}>{project.name}</span>
                    <span className={styles.rowMeta}>
                      {project.language ? (
                        <span className={styles.lang}>{project.language}</span>
                      ) : null}
                      {project.stars > 0 ? (
                        <span className={styles.stars}>★ {project.stars}</span>
                      ) : null}
                    </span>
                  </div>
                  {project.description ? (
                    <p className={styles.rowDesc}>{project.description}</p>
                  ) : null}
                </Link>
              ))}
              {items.length % 2 === 1 ? (
                <div className={styles.filler} aria-hidden />
              ) : null}
            </div>
          </section>
        )
      })}
    </>
  )
}
