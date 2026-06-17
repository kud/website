import Link from "next/link"
import {
  GitHubIcon,
  LinkedInIcon,
  BlueskyIcon,
  InstagramIcon,
  MailIcon,
} from "@/components/social-icons"
import styles from "./page.module.css"

const socials = [
  { label: "GitHub", href: "http://github.kud.io/", Icon: GitHubIcon },
  { label: "LinkedIn", href: "http://linkedin.kud.io/", Icon: LinkedInIcon },
  { label: "Bluesky", href: "https://bsky.kud.io", Icon: BlueskyIcon },
  { label: "Instagram", href: "http://instagram.kud.io/", Icon: InstagramIcon },
  { label: "Email", href: "mailto:m+site@kud.io", Icon: MailIcon },
]

const experience = [
  {
    period: "2022 — Present",
    role: "Senior Software Engineer / Tech Lead",
    org: "Sony Music · Mobile Team",
    place: "London",
    note: "Mobile architecture, AI-assisted engineering workflows, and developer experience across product, design, and engineering.",
  },
  {
    period: "2022 — 2023",
    role: "Senior Software Engineer",
    org: "The Orchard",
    place: "London",
    note: "Front-end architecture, performance, and UX for the analytics & metrics platform used by labels and artists.",
  },
  {
    period: "2017 — 2022",
    role: "Lead Front-end Developer",
    org: "Contexte",
    place: "Paris",
    note: "Built a PWA from scratch and a company-wide design system for an online public-policy media.",
  },
  {
    period: "2020 — 2022",
    role: "Front-end Trainer",
    org: "EEMI",
    place: "Paris",
    note: "Taught front-end culture and Next.js to students training to become lead developers and CTOs.",
  },
  {
    period: "2013 — 2022",
    role: "Web Trainer",
    org: "ESG Executive Education",
    place: "Paris",
    note: "Taught the web, HTML and CSS to career-changers — from zero to their own static site.",
  },
]

const isExternal = (href: string) => href.startsWith("http")

const Home = () => (
  <>
    <section className={styles.hero}>
      <div className={styles.photo} role="img" aria-label="Erwann Mest" />

      <div className={styles.content}>
        <div className={styles.inner}>
          <p className={styles.eyebrow}>Software Engineer · Technical Lead</p>

          <h1 className={styles.name}>Erwann Mest</h1>

          <p className={styles.tagline}>
            I build and shape systems — not just features.
          </p>

          <p className={styles.bio}>
            Mobile &amp; front-end engineer with 18 years of experience, working
            at the intersection of engineering, product thinking, and developer
            experience. Currently Senior Engineer / Tech Lead on the mobile team
            at{" "}
            <a
              href="https://www.sonymusic.com/"
              target="_blank"
              rel="noreferrer"
            >
              Sony Music
            </a>{" "}
            in London — and deep in AI-assisted engineering, exploring how
            agent-based workflows reshape how we build, review, and ship
            software.
          </p>

          <p className={styles.personal}>
            Off the clock: a{" "}
            <a
              href="https://www.instagram.com/_kud/"
              target="_blank"
              rel="noreferrer"
            >
              photographer
            </a>
            , a drummer, a{" "}
            <a
              href="https://steamcommunity.com/id/kud"
              target="_blank"
              rel="noreferrer"
            >
              gamer
            </a>
            , and a{" "}
            <a
              href="https://trakt.tv/users/_kud"
              target="_blank"
              rel="noreferrer"
            >
              cinema lover
            </a>
            .
          </p>

          <div className={styles.actions}>
            <Link href="/projects" className={styles.primary}>
              Explore my projects
              <span aria-hidden>→</span>
            </Link>
            <a
              href="http://linkedin.kud.io/"
              target="_blank"
              rel="noreferrer"
              className={styles.secondary}
            >
              LinkedIn
              <span aria-hidden>↗</span>
            </a>
          </div>

          <ul className={styles.socials}>
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  {...(isExternal(href)
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                >
                  <Icon className={styles.socialIcon} />
                </a>
              </li>
            ))}
          </ul>

          <a className={styles.scrollHint} href="#experience">
            Experience ↓
          </a>
        </div>
      </div>
    </section>

    <section id="experience" className={styles.timeline}>
      <div className={styles.timelineInner}>
        <p className={styles.timelineEyebrow}>Career</p>
        <h2 className={styles.timelineTitle}>Experience</h2>

        <ol className={styles.track}>
          {experience.map((item) => (
            <li key={`${item.org}-${item.period}`} className={styles.entry}>
              <div className={styles.entryPeriod}>{item.period}</div>
              <div className={styles.entryBody}>
                <h3 className={styles.entryRole}>{item.role}</h3>
                <p className={styles.entryOrg}>
                  {item.org}{" "}
                  <span className={styles.entryPlace}>· {item.place}</span>
                </p>
                <p className={styles.entryNote}>{item.note}</p>
              </div>
            </li>
          ))}
        </ol>

        <a
          className={styles.timelineLink}
          href="http://linkedin.kud.io/"
          target="_blank"
          rel="noreferrer"
        >
          Full history on LinkedIn ↗
        </a>
      </div>
    </section>
  </>
)

export default Home
