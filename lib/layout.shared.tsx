import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared"

export const baseOptions = (): BaseLayoutProps => ({
  nav: {
    title: "kud",
    url: "/projects",
  },
  // The whole site is dark-only — hide the docs light/dark switch so the docs
  // read as one continuous theme with the rest of kud.io.
  themeSwitch: { enabled: false },
})
