import { Link } from "next-view-transitions"
import {
  GitHubIcon,
  LinkedInIcon,
  BlueskyIcon,
  InstagramIcon,
  MailIcon,
} from "@/components/social-icons"
import styles from "./page.module.css"

const socials = [
  { label: "GitHub", href: "https://github.kud.io/", Icon: GitHubIcon },
  { label: "LinkedIn", href: "https://linkedin.kud.io/", Icon: LinkedInIcon },
  { label: "Bluesky", href: "https://bsky.kud.io", Icon: BlueskyIcon },
  {
    label: "Instagram",
    href: "https://instagram.kud.io/",
    Icon: InstagramIcon,
  },
  { label: "Email", href: "mailto:m+site@kud.io", Icon: MailIcon },
]

type Experience = {
  period: string
  role: string
  org: string
  team?: string
  url: string
  place: string
  note: string
}

// Proper nouns use a non-breaking space ( ) so the words never wrap apart.
const experience: Experience[] = [
  {
    period: "2022 — Present",
    role: "Senior Software Engineer / Tech Lead",
    org: "Sony Music",
    team: "Mobile Team",
    url: "https://www.sonymusic.com/",
    place: "London",
    note: "Mobile architecture, AI-assisted engineering workflows, and developer experience across product, design, and engineering.",
  },
  {
    period: "2022 — 2023",
    role: "Senior Software Engineer",
    org: "The Orchard",
    url: "https://www.theorchard.com/",
    place: "London",
    note: "Front-end architecture, performance, and UX for the analytics & metrics platform used by labels, artists, and internal teams.",
  },
  {
    period: "2017 — 2022",
    role: "Lead Front-end Developer",
    org: "Contexte",
    url: "https://www.contexte.com/",
    place: "Paris",
    note: "Built a PWA from scratch and a company-wide design system for an online public-policy media.",
  },
  {
    period: "2020 — 2022",
    role: "Front-end Trainer",
    org: "EEMI",
    url: "https://www.eemi.com/",
    place: "Paris",
    note: "Taught front-end culture and Next.js to students training to become lead developers and CTOs.",
  },
  {
    period: "2013 — 2022",
    role: "Web Trainer",
    org: "ESG Executive Education",
    url: "https://www.esg.fr/",
    place: "Paris",
    note: "Taught the web, HTML and CSS to career-changers — from zero to their own static site.",
  },
]

// Recomputed on every build so the headline figure never goes stale. kud's
// professional web career began in 2008 (→ 18 years in 2026).
const CAREER_START_YEAR = 2008
const yearsOfExperience = new Date().getFullYear() - CAREER_START_YEAR

const isExternal = (href: string) => href.startsWith("http")

/* Shared content pieces — authored once, composed into both the desktop hero
   and the mobile slides so there is no duplicated copy to keep in sync. */

const Eyebrow = () => (
  <p className={styles.eyebrow}>
    Senior&nbsp;Engineer &amp; Tech&nbsp;Lead ·&nbsp;London
  </p>
)

const Name = () => <h1 className={styles.name}>Erwann&nbsp;Mest</h1>

const Tagline = () => (
  <p className={styles.tagline}>
    Less friction, more clarity — for the people who use software, and the
    people who build it.
  </p>
)

const Bio = () => (
  <p className={styles.bio}>
    I don&apos;t think in tickets and lines of code — I think in systems and the
    people they serve. Starting from empathy for the user and the product, I
    work shoulder-to-shoulder with designers and PMs to reduce cognitive load
    for everyone — the people using what we build and the engineers building it.
    That&apos;s why I love optimising and automating workflows. What I love most
    is architecting and designing the solution, then delegating its execution to
    AI in a deliberate, fine-tuned way — turning {yearsOfExperience} years of
    experience into skills and agents that keep getting sharper. Currently on
    the mobile team at{" "}
    <a href="https://www.sonymusic.com/" target="_blank" rel="noreferrer">
      Sony&nbsp;Music
    </a>
    .
  </p>
)

const Focus = () => (
  <ul className={styles.focus}>
    <li>Systems thinking</li>
    <li>User empathy</li>
    <li>Design &amp; product partnership</li>
    <li>AI-assisted engineering</li>
    <li>Developer experience</li>
  </ul>
)

const Personal = () => (
  <p className={styles.personal}>
    Off the clock: a{" "}
    <a href="https://www.instagram.com/_kud/" target="_blank" rel="noreferrer">
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
    <a href="https://trakt.tv/users/_kud" target="_blank" rel="noreferrer">
      cinema lover
    </a>
    .
  </p>
)

const Cta = () => (
  <Link href="/projects" className={styles.primary}>
    Explore my projects
    <span aria-hidden>→</span>
  </Link>
)

const SocialLinks = () => (
  <ul className={styles.socials}>
    {socials.map(({ label, href, Icon }) => (
      <li key={label}>
        <a
          href={href}
          aria-label={label}
          {...(isExternal(href) ? { target: "_blank", rel: "noreferrer" } : {})}
        >
          <Icon className={styles.socialIcon} />
        </a>
      </li>
    ))}
  </ul>
)

const ScrollHint = () => (
  <a className={styles.scrollHint} href="#experience">
    Experience{" "}
    <span className={styles.chevron} aria-hidden>
      ↓
    </span>
  </a>
)

// Desktop: the split-screen hero (photo beside a single column of content).
const HeroDesktop = () => (
  <section className={styles.hero}>
    <div className={styles.photo} role="img" aria-label="Erwann Mest" />

    <div className={styles.content}>
      <div className={styles.inner}>
        <Eyebrow />
        <Name />
        <Tagline />
        <Bio />
        <Focus />
        <Personal />
        <div className={styles.actions}>
          <Cta />
        </div>
        <SocialLinks />
        <ScrollHint />
      </div>
    </div>
  </section>
)

// Mobile: two full-height slides — a "carte de visite" (identity + links) and
// the longer description — that snap into place as you swipe down.
const HeroMobile = () => (
  <>
    <section className={styles.slideCard}>
      <div className={styles.cardAvatar} role="img" aria-label="Erwann Mest" />
      <Eyebrow />
      <Name />
      <Tagline />
      <div className={styles.cardLinks}>
        <div className={styles.actions}>
          <Cta />
        </div>
        <SocialLinks />
      </div>
    </section>

    <section className={styles.slideAbout}>
      <Bio />
      <Focus />
      <Personal />
      <ScrollHint />
    </section>
  </>
)

const ExperienceTimeline = () => (
  <section id="experience" className={styles.timeline}>
    <div className={styles.timelineInner}>
      <p className={styles.timelineEyebrow}>Career</p>
      <h2 className={styles.timelineTitle}>Experience</h2>

      <div className={styles.track}>
        {experience.map((item) => (
          <div key={`${item.org}-${item.period}`} className={styles.entry}>
            <div className={styles.entryPeriod}>{item.period}</div>
            <h3 className={styles.entryRole}>{item.role}</h3>
            <p className={styles.entryOrg}>
              <a
                className={styles.entryOrgLink}
                href={item.url}
                target="_blank"
                rel="noreferrer"
              >
                {item.org}
              </a>
              {item.team ? ` · ${item.team}` : ""}{" "}
              <span className={styles.entryPlace}>·&nbsp;{item.place}</span>
            </p>
            <p className={styles.entryNote}>{item.note}</p>
          </div>
        ))}
      </div>

      <div className={styles.timelineMore}>
        <a
          className={styles.timelineButton}
          href="https://linkedin.kud.io/"
          target="_blank"
          rel="noreferrer"
        >
          Full history on LinkedIn
          <span aria-hidden>↗</span>
        </a>
      </div>
    </div>
  </section>
)

const Home = () => (
  <div className={styles.home}>
    <HeroDesktop />
    <HeroMobile />
    <ExperienceTimeline />
  </div>
)

export default Home
