"use client"

import { useEffect, useRef, useState } from "react"
import styles from "./avatar-image.module.css"

type AvatarImageProps = {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  placeholderIcon?: boolean
}

const cx = (...classes: Array<string | false | undefined>) =>
  classes.filter(Boolean).join(" ")

export const AvatarImage = ({
  src,
  alt,
  width,
  height,
  className,
  placeholderIcon = true,
}: AvatarImageProps) => {
  const [loaded, setLoaded] = useState(false)
  const imageRef = useRef<HTMLImageElement>(null)
  const markLoaded = () => setLoaded(true)

  useEffect(() => {
    const image = imageRef.current
    if (image?.complete && image.naturalWidth > 0) markLoaded()
  }, [])

  return (
    <span
      className={cx(styles.avatar, loaded && styles.loaded, className)}
      role="img"
      aria-label={alt}
    >
      <span className={styles.placeholder} aria-hidden="true">
        {placeholderIcon ? <span className={styles.placeholderIcon} /> : null}
      </span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        aria-hidden="true"
        width={width}
        height={height}
        className={styles.image}
        ref={imageRef}
        onLoad={markLoaded}
      />
    </span>
  )
}
