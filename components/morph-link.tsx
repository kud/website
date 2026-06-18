"use client"

import { Link } from "next-view-transitions"
import type { ComponentProps, MouseEvent } from "react"

// A transition-aware Link that flags the navigation as a shared-element "morph",
// so global.css can hold the incoming page's content hidden until the title morph
// has landed (see html[data-vt="morph"] in app/global.css), instead of letting it
// cross-fade in over the top. The flag self-clears after the transition window.
export const MorphLink = ({
  onClick,
  ...props
}: ComponentProps<typeof Link>) => {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const el = document.documentElement
    el.dataset.vt = "morph"
    window.setTimeout(() => {
      if (el.dataset.vt === "morph") delete el.dataset.vt
    }, 700)
    onClick?.(event)
  }

  return <Link {...props} onClick={handleClick} />
}
