// The focus/skill values shown on the home hero and the CV. Ordered as a
// deliberate narrative — how I think, who I start from, how I work, what I care
// about for engineers, and how I execute — rather than a random pill cloud.
// Descriptions are drafted in kud's voice from the bio/LinkedIn — verify.

export type Focus = {
  label: string
  description: string
}

export const focus: Focus[] = [
  {
    label: "Systems thinking",
    description:
      "I think in systems and the people they serve — workflows, interfaces, and the connections between them, not just isolated features.",
  },
  {
    label: "User empathy",
    description:
      "Everything starts from empathy for the user and the product. I want to understand the real problem before reaching for a solution.",
  },
  {
    label: "Design & product partnership",
    description:
      "I work shoulder-to-shoulder with designers and PMs, shaping solutions together before a line of code is written.",
  },
  {
    label: "Developer experience",
    description:
      "I care about the engineers building the software as much as the people using it — cutting their cognitive load with better tooling, conventions, and automation.",
  },
  {
    label: "AI-assisted engineering",
    description:
      "What I love most: architecting the solution, then delegating its execution to AI in a deliberate, fine-tuned way — turning experience into agents and skills that keep getting sharper.",
  },
]

// Core technologies, from the LinkedIn profile's stack line — verified.
export const coreTech = [
  "React Native",
  "React",
  "TypeScript",
  "Next.js",
  "GraphQL/Apollo",
  "TanStack Query",
  "Node.js",
  "AWS",
  "Snowflake",
  "Neo4j",
]
