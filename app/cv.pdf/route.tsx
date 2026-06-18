import {
  Document,
  Page,
  Text,
  View,
  Link,
  StyleSheet,
  renderToBuffer,
} from "@react-pdf/renderer"
import { experience, yearsOfExperience } from "@/lib/experience"

// Rendered once at build time (force-static) and served as a cached static
// asset from /cv.pdf. Reads the same experience data as the home timeline, so
// the CV can never drift from the site.
export const runtime = "nodejs"
export const dynamic = "force-static"

const ACCENT = "#c2703d"
const INK = "#1a1512"
const BODY = "#4a443d"
const MUTED = "#6f6a62"
const FAINT = "#9a958c"
const RULE = "#e6e0d6"

const styles = StyleSheet.create({
  page: {
    paddingTop: 46,
    paddingBottom: 42,
    paddingHorizontal: 46,
    fontFamily: "Helvetica",
    fontSize: 9.5,
    lineHeight: 1.4,
    color: BODY,
  },

  // Header ------------------------------------------------------------------
  name: {
    fontFamily: "Helvetica-Bold",
    fontSize: 21,
    lineHeight: 1,
    letterSpacing: -0.4,
    color: INK,
  },
  title: {
    marginTop: 5,
    fontFamily: "Helvetica-Bold",
    fontSize: 8.5,
    letterSpacing: 1.4,
    textTransform: "uppercase",
    color: ACCENT,
  },
  contact: {
    marginTop: 7,
    fontSize: 8.5,
    color: MUTED,
  },
  contactLink: {
    color: MUTED,
    textDecoration: "none",
  },
  rule: {
    marginTop: 13,
    borderBottomWidth: 1,
    borderBottomColor: RULE,
  },
  profile: {
    marginTop: 12,
    fontSize: 9.5,
    lineHeight: 1.45,
    color: BODY,
  },

  // Section -----------------------------------------------------------------
  sectionLabel: {
    marginTop: 19,
    marginBottom: 11,
    fontFamily: "Helvetica-Bold",
    fontSize: 9,
    letterSpacing: 1.4,
    textTransform: "uppercase",
    color: INK,
  },

  // Entry -------------------------------------------------------------------
  entry: {
    marginBottom: 13,
  },
  entryHead: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  entryRole: {
    fontFamily: "Helvetica-Bold",
    fontSize: 11,
    color: INK,
  },
  entryPeriod: {
    fontSize: 8,
    letterSpacing: 0.4,
    color: FAINT,
  },
  entryOrg: {
    marginTop: 1,
    marginBottom: 4,
    fontSize: 9,
    color: MUTED,
  },
  entrySummary: {
    marginBottom: 4,
    fontSize: 9,
    lineHeight: 1.4,
    color: BODY,
  },
  bullet: {
    flexDirection: "row",
    marginBottom: 2,
  },
  bulletDot: {
    width: 9,
    color: ACCENT,
  },
  bulletText: {
    flex: 1,
    fontSize: 9,
    lineHeight: 1.35,
    color: BODY,
  },
  stack: {
    marginTop: 5,
    fontSize: 8.5,
    color: FAINT,
  },
  stackLabel: {
    fontFamily: "Helvetica-Bold",
    color: MUTED,
  },
})

const Dot = " · "

const Contact = () => (
  <Text style={styles.contact}>
    London{Dot}
    <Link style={styles.contactLink} src="https://kud.io">
      kud.io
    </Link>
    {Dot}
    <Link style={styles.contactLink} src="mailto:m+site@kud.io">
      m+site@kud.io
    </Link>
    {Dot}
    <Link style={styles.contactLink} src="https://linkedin.kud.io/">
      linkedin.kud.io
    </Link>
    {Dot}
    <Link style={styles.contactLink} src="https://github.kud.io/">
      github.kud.io
    </Link>
  </Text>
)

const Cv = () => (
  <Document
    author="Erwann Mest"
    title="Erwann Mest — CV"
    subject="Senior Software Engineer & Tech Lead"
  >
    <Page size="A4" style={styles.page}>
      <Text style={styles.name}>Erwann Mest</Text>
      <Text style={styles.title}>Senior Software Engineer & Tech Lead</Text>
      <Contact />
      <View style={styles.rule} />

      <Text style={styles.profile}>
        Senior engineer and tech lead with {yearsOfExperience()} years across
        product, design, and engineering. I think in systems and the people they
        serve — reducing cognitive load for users and engineers alike, and
        architecting solutions I then execute with deliberate, AI-assisted
        workflows.
      </Text>

      <Text style={styles.sectionLabel}>Experience</Text>

      {experience.map((item) => (
        <View
          key={`${item.org}-${item.period}`}
          style={styles.entry}
          wrap={false}
        >
          <View style={styles.entryHead}>
            <Text style={styles.entryRole}>{item.role}</Text>
            <Text style={styles.entryPeriod}>{item.period}</Text>
          </View>
          <Text style={styles.entryOrg}>
            {item.org}
            {item.team ? `${Dot}${item.team}` : ""}
            {Dot}
            {item.place}
          </Text>

          {item.detail ? (
            <>
              <Text style={styles.entrySummary}>{item.detail.summary}</Text>
              {item.detail.highlights.map((highlight) => (
                <View key={highlight} style={styles.bullet}>
                  <Text style={styles.bulletDot}>•</Text>
                  <Text style={styles.bulletText}>{highlight}</Text>
                </View>
              ))}
              {item.detail.stack.length > 0 ? (
                <Text style={styles.stack}>
                  <Text style={styles.stackLabel}>Stack </Text>
                  {item.detail.stack.join("  ·  ")}
                </Text>
              ) : null}
            </>
          ) : (
            <Text style={styles.entrySummary}>{item.note}</Text>
          )}
        </View>
      ))}
    </Page>
  </Document>
)

export const GET = async () => {
  const buffer = await renderToBuffer(<Cv />)
  return new Response(new Uint8Array(buffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="erwann-mest-cv.pdf"',
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  })
}
