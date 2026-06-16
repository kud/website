import type { ReactNode } from "react"
import { CopyButton } from "./copy-button"
import { Reveal } from "./reveal"
import styles from "./landing-kit.module.css"

const isExternal = (href: string) => href.startsWith("http")

export const Hero = ({
  title,
  tagline,
  badge,
  children,
}: {
  title: ReactNode
  tagline?: ReactNode
  badge?: ReactNode
  children?: ReactNode
}) => (
  <section className={styles.hero}>
    <div className={styles.heroGrid} />
    <div className={styles.heroContent}>
      {badge ? (
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          {badge}
        </div>
      ) : null}
      <h1 className={styles.title}>{title}</h1>
      {tagline ? <p className={styles.tagline}>{tagline}</p> : null}
      {children ? <div className={styles.actions}>{children}</div> : null}
    </div>
  </section>
)

export const Action = ({
  href,
  primary,
  children,
}: {
  href: string
  primary?: boolean
  children: ReactNode
}) => (
  <a
    href={href}
    className={primary ? styles.primary : styles.secondary}
    {...(isExternal(href) ? { target: "_blank", rel: "noreferrer" } : {})}
  >
    {children}
  </a>
)

export const Stats = ({ children }: { children: ReactNode }) => (
  <div className={styles.stats}>{children}</div>
)

export const Stat = ({
  value,
  label,
}: {
  value: ReactNode
  label: ReactNode
}) => (
  <div className={styles.stat}>
    <div className={styles.statValue}>{value}</div>
    <div className={styles.statLabel}>{label}</div>
  </div>
)

export const Install = ({
  command,
  label = "terminal",
}: {
  command: string
  label?: string
}) => (
  <Reveal className={styles.installWrap}>
    <div className={styles.terminal}>
      <div className={styles.terminalBar}>
        <span className={styles.tdot} />
        <span className={styles.tdot} />
        <span className={styles.tdot} />
        <span className={styles.terminalLabel}>{label}</span>
        <CopyButton text={command} className={styles.copy} />
      </div>
      <pre className={styles.terminalBody}>
        <code>{command}</code>
      </pre>
    </div>
  </Reveal>
)

export const Section = ({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: ReactNode
  title?: ReactNode
  children: ReactNode
}) => (
  <section className={styles.section}>
    {eyebrow || title ? (
      <Reveal className={styles.sectionHeader}>
        {eyebrow ? <span className={styles.eyebrow}>{eyebrow}</span> : null}
        {title ? <h2 className={styles.sectionTitle}>{title}</h2> : null}
      </Reveal>
    ) : null}
    {children}
  </section>
)

export const Features = ({ children }: { children: ReactNode }) => (
  <div className={styles.features}>{children}</div>
)

export const Feature = ({
  title,
  children,
}: {
  title: ReactNode
  children?: ReactNode
}) => (
  <Reveal className={styles.feature}>
    <span className={styles.featureMark} />
    <h3>{title}</h3>
    {children ? <div className={styles.featureBody}>{children}</div> : null}
  </Reveal>
)

export const Showcase = ({ children }: { children: ReactNode }) => (
  <div className={styles.showcase}>{children}</div>
)

export const Example = ({
  command,
  children,
}: {
  command: string
  children: ReactNode
}) => (
  <Reveal className={styles.example}>
    <pre className={styles.exampleCommand}>
      <code>{command}</code>
    </pre>
    <pre className={styles.exampleOutput}>
      <code>{children}</code>
    </pre>
  </Reveal>
)

export const CTA = ({
  href,
  title,
  sub,
  label = "Open documentation →",
}: {
  href: string
  title?: ReactNode
  sub?: ReactNode
  label?: string
}) => (
  <section className={styles.ctaSection}>
    <Reveal>
      {title ? <h2 className={styles.ctaTitle}>{title}</h2> : null}
      {sub ? <p className={styles.ctaSub}>{sub}</p> : null}
      <a
        href={href}
        className={styles.cta}
        {...(isExternal(href) ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {label}
      </a>
    </Reveal>
  </section>
)

// The component vocabulary available inside a project's landing.mdx.
export const landingComponents = {
  Hero,
  Action,
  Stats,
  Stat,
  Install,
  Section,
  Features,
  Feature,
  Showcase,
  Example,
  CTA,
}
