import type { ImgHTMLAttributes } from "react"
import defaultMdxComponents from "fumadocs-ui/mdx"
import type { MDXComponents } from "mdx/types"

// READMEs supply width-only <img> tags; Fumadocs' default maps img to Next's
// <Image>, which requires width AND height and 500s otherwise. A plain element
// renders any repo image safely.
const Img = (props: ImgHTMLAttributes<HTMLImageElement>) => (
  // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
  <img {...props} />
)

export const getMDXComponents = (
  components?: MDXComponents,
): MDXComponents => ({
  ...defaultMdxComponents,
  img: Img,
  // Raw <script> from a README must never render into the React tree.
  script: () => null,
  ...components,
})

export const useMDXComponents = getMDXComponents
