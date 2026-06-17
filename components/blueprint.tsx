// Decorative blueprint motif behind the hero — faint technical-drawing marks
// (dimension lines, a radius callout, construction geometry, registration
// marks). Purely cosmetic; hidden from assistive tech.
const LINE = "#7db1ff"

export const Blueprint = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 760 760"
    fill="none"
    stroke={LINE}
    aria-hidden="true"
    fontFamily="ui-monospace, 'SF Mono', Menlo, monospace"
  >
    {/* Construction geometry */}
    <path
      d="M380 120 V640 M120 380 H640"
      strokeWidth="0.75"
      strokeOpacity="0.16"
    />
    <path
      d="M170 170 L590 590 M590 170 L170 590"
      strokeWidth="0.75"
      strokeOpacity="0.16"
    />
    <circle
      cx="380"
      cy="380"
      r="210"
      strokeWidth="1"
      strokeDasharray="3 7"
      strokeOpacity="0.28"
    />

    {/* Icon boundary */}
    <rect
      x="170"
      y="170"
      width="420"
      height="420"
      rx="96"
      strokeWidth="1.5"
      strokeOpacity="0.5"
    />

    {/* Top dimension line — 512 px */}
    <g strokeWidth="1" strokeOpacity="0.42">
      <path d="M170 122 H590" />
      <path d="M170 114 V130 M590 114 V130" />
    </g>
    <text
      x="380"
      y="110"
      fill={LINE}
      fillOpacity="0.55"
      stroke="none"
      fontSize="15"
      textAnchor="middle"
    >
      512 px
    </text>

    {/* Left dimension line — 512 px */}
    <g strokeWidth="1" strokeOpacity="0.42">
      <path d="M122 170 V590" />
      <path d="M114 170 H130 M114 590 H130" />
    </g>
    <text
      x="108"
      y="384"
      fill={LINE}
      fillOpacity="0.55"
      stroke="none"
      fontSize="15"
      textAnchor="middle"
      transform="rotate(-90 108 384)"
    >
      512 px
    </text>

    {/* Radius callout */}
    <path d="M548 232 L506 274" strokeWidth="1" strokeOpacity="0.4" />
    <path
      d="M506 274 l13 -2 m-13 2 l2 -13"
      strokeWidth="1"
      strokeOpacity="0.4"
    />
    <text
      x="556"
      y="226"
      fill={LINE}
      fillOpacity="0.5"
      stroke="none"
      fontSize="13"
    >
      96 px R
    </text>

    {/* Registration marks at the four corners */}
    <g strokeWidth="1" strokeOpacity="0.4">
      <path d="M150 170 H134 M150 170 V154" />
      <path d="M610 170 H626 M610 170 V154" />
      <path d="M150 590 H134 M150 590 V606" />
      <path d="M610 590 H626 M610 590 V606" />
    </g>

    {/* Drafting labels */}
    <text
      x="120"
      y="660"
      fill={LINE}
      fillOpacity="0.4"
      stroke="none"
      fontSize="12"
    >
      FIG. 01 — PROJECTS
    </text>
    <text
      x="640"
      y="660"
      fill={LINE}
      fillOpacity="0.4"
      stroke="none"
      fontSize="12"
      textAnchor="end"
    >
      SCALE 1:1
    </text>
  </svg>
)
