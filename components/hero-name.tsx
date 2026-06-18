"use client"

import { useState } from "react"
import pageStyles from "@/app/page.module.css"
import styles from "./hero-name.module.css"

// The hero name, with a small easter egg: hovering it slides a duck in from the
// edge of the screen to wave hello. Desktop-only by nature (needs hover); on
// touch it's simply never triggered.
export const HeroName = () => {
  const [peek, setPeek] = useState(false)

  return (
    <>
      <h1
        className={pageStyles.name}
        onMouseEnter={() => setPeek(true)}
        onMouseLeave={() => setPeek(false)}
      >
        Erwann&nbsp;Mest
      </h1>
      <div className={`${styles.duck} ${peek ? styles.peek : ""}`} aria-hidden>
        <span className={styles.body}>🦆</span>
        <span className={styles.bubble}>Coucou&nbsp;👋</span>
      </div>
    </>
  )
}
