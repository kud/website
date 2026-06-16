"use client"

import { useEffect, useRef } from "react"
import styles from "./parallax-orbs.module.css"

// Soft gradient orbs that drift on their own and shift on scroll (parallax).
export const ParallaxOrbs = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        ref.current?.style.setProperty("--scroll", String(window.scrollY))
      })
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <div ref={ref} className={styles.orbs} aria-hidden="true">
      <span className={styles.a} />
      <span className={styles.b} />
      <span className={styles.c} />
    </div>
  )
}
