"use client"

import { useEffect, useRef, useState } from "react"
import styles from "./duck.module.css"

// Cartoon duck illustration (cleaned-up Vecteezy asset, white knocked out to a
// transparent PNG). It faces left, so leaning pivots from its feet to greet.
const DuckArt = () => (
  // eslint-disable-next-line @next/next/no-img-element
  <img className={styles.art} src="/duck.png" alt="" aria-hidden />
)

// A pool of lines per trigger type, so the duck doesn't repeat itself.
const MESSAGES: Record<string, string[]> = {
  greeting: [
    "Coucou! It's me 👋",
    "It's me!",
    "Hey, that's me!",
    "Oh, hi there!",
  ],
  contact: [
    "Got an idea? Let's build it!",
    "Let's talk! ✉️",
    "Drop me a line — I reply!",
    "Say hi, don't be shy!",
  ],
  history: [
    "Psst — the whole story's here!",
    "Curious? It's all on LinkedIn.",
    "Want the full journey?",
    "18 years, all in one place!",
  ],
  tickets: [
    "Not a Jira fan either — but the MCP saves it 😅",
    "Jira? Meh. At least there's an MCP for it.",
    "Tickets are fine… once they're MCP-driven.",
  ],
}

const pickLine = (type: string): string => {
  const pool = MESSAGES[type]
  if (!pool || pool.length === 0) return "Coucou!"
  return pool[Math.floor(Math.random() * pool.length)]
}

// One shared duck. Any element with a [data-duck="<type>"] attribute summons it on
// hover with a random line for that type; otherwise it stays tucked below the edge.
export const Duck = () => {
  const [message, setMessage] = useState<string | null>(null)
  const lastMessage = useRef("Coucou!")

  useEffect(() => {
    const triggers = Array.from(
      document.querySelectorAll<HTMLElement>("[data-duck]"),
    )
    const show = (event: Event) => {
      const type = (event.currentTarget as HTMLElement).dataset.duck
      if (!type) return
      const line = pickLine(type)
      lastMessage.current = line
      setMessage(line)
    }
    const hide = () => setMessage(null)
    for (const trigger of triggers) {
      trigger.addEventListener("mouseenter", show)
      trigger.addEventListener("mouseleave", hide)
    }
    return () => {
      for (const trigger of triggers) {
        trigger.removeEventListener("mouseenter", show)
        trigger.removeEventListener("mouseleave", hide)
      }
    }
  }, [])

  return (
    <div className={`${styles.duck} ${message ? styles.peek : ""}`} aria-hidden>
      <DuckArt />
      <span className={styles.bubble}>{message ?? lastMessage.current}</span>
    </div>
  )
}
