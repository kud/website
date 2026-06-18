import "./global.css"
import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"
import { RootProvider } from "fumadocs-ui/provider/next"
import { ViewTransitions } from "next-view-transitions"
import { Hanken_Grotesk } from "next/font/google"

// Hanken Grotesk — a refined, elegant grotesque: subtle squared character with
// open (not compressed) proportions, less geometric/techy than Sora, and every
// weight available (incl. a true 800 for the hero name). Exposed as a neutral
// --font-sans token so swapping the typeface later is a one-line change here.
const sans = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
})

const TITLE = "Erwann Mest — Senior Software Engineer & Tech Lead"
const DESCRIPTION =
  "Senior Software Engineer & Tech Lead in London. I turn empathy for users and engineers into clear systems, better developer experience, and AI-assisted engineering — currently on the mobile team at Sony Music."

// The OpenGraph and Twitter share images are supplied by the file-based
// conventions (app/opengraph-image.tsx + app/twitter-image.tsx), so no images
// are listed here — those would otherwise stack on top of the branded card.
export const metadata: Metadata = {
  metadataBase: new URL("https://kud.io"),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    url: "https://kud.io",
    siteName: "kud.io",
    locale: "en_GB",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    site: "@_kud",
    creator: "@_kud",
    title: TITLE,
    description: DESCRIPTION,
  },
}

export const viewport: Viewport = {
  themeColor: "#fdfbf8",
}

const RootLayout = ({ children }: { children: ReactNode }) => (
  <ViewTransitions>
    <html lang="en" suppressHydrationWarning className={sans.variable}>
      <body className="flex min-h-screen flex-col">
        <RootProvider
          theme={{
            defaultTheme: "dark",
            enableSystem: false,
            forcedTheme: "dark",
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  </ViewTransitions>
)

export default RootLayout
