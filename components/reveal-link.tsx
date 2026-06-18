"use client"

import type { MouseEvent, ReactNode } from "react"
import { useTransitionRouter } from "next-view-transitions"

type Props = {
  href: string
  className?: string
  children: ReactNode
}

// Forward navigation that triggers the "ink reveal" into /projects. Before the
// view transition snapshots the page, it records the pressed button's centre
// into --vt-x/--vt-y on <html> and flags data-vt="reveal" — global.css then
// grows the dark page out of that exact point (see vt-ink-reveal). The flag and
// coordinates are cleared once the transition has run.
export const RevealLink = ({ href, className, children }: Props) => {
  const router = useTransitionRouter()

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0)
      return
    event.preventDefault()

    const root = document.documentElement
    const rect = event.currentTarget.getBoundingClientRect()
    root.style.setProperty("--vt-x", `${rect.left + rect.width / 2}px`)
    root.style.setProperty("--vt-y", `${rect.top + rect.height / 2}px`)
    root.dataset.vt = "reveal"

    router.push(href, {
      onTransitionReady: () =>
        window.setTimeout(() => {
          delete root.dataset.vt
          root.style.removeProperty("--vt-x")
          root.style.removeProperty("--vt-y")
        }, 800),
    })
  }

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  )
}
