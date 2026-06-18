"use client"

import type { MouseEvent, ReactNode } from "react"
import { useTransitionRouter } from "next-view-transitions"

type Props = {
  href: string
  className?: string
  children: ReactNode
}

// Back navigation that animates like the forward CTA but flags the transition as
// a "back" move. The flag (data-vt on <html>) is set synchronously before the
// push so it is present when the view transition snapshots the page, letting
// global.css drop the forward-only zoom on the return — see
// html[data-vt="back"]::view-transition-new(root). Mobile stays flat both ways
// via the breakpoint, plus the shared-avatar morph.
export const BackLink = ({ href, className, children }: Props) => {
  const router = useTransitionRouter()

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0)
      return
    event.preventDefault()
    document.documentElement.dataset.vt = "back"
    router.push(href, {
      onTransitionReady: () =>
        window.setTimeout(() => {
          delete document.documentElement.dataset.vt
        }, 700),
    })
  }

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  )
}
