"use client"

import { useState } from "react"

export const CopyButton = ({
  text,
  className,
}: {
  text: string
  className?: string
}) => {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      // Clipboard unavailable — nothing to do.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={className}
      aria-label="Copy to clipboard"
    >
      {copied ? "Copied ✓" : "Copy"}
    </button>
  )
}
