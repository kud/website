---
title: "shui"
description: "🌊 Fluid terminal UI for Zsh — a design system for the shell"
---

<div align="center">
  <img src="https://raw.githubusercontent.com/kud/shui/HEAD/icon.png" width="128" alt="shui" />
  <h1>shui · 水</h1>
  <p><strong>Shell UI for Zsh. 水 — fluid by design.</strong></p>
  <p>
    <img src="https://img.shields.io/badge/zsh-5.0%2B-blue?style=flat-square" alt="Zsh 5.0+" />
    <img src="https://img.shields.io/badge/dependencies-none-22C55E?style=flat-square" alt="No dependencies" />
    <img src="https://img.shields.io/badge/license-MIT-22C55E?style=flat-square" alt="MIT" />
  </p>
  <p>
    <a href="#-features">Features</a> •
    <a href="#-quick-start">Quick Start</a> •
    <a href="#-component-reference">Component Reference</a> •
    <a href="#-development">Development</a>
  </p>
</div>

---

**shui** = Shell UI. 水 = water in Chinese — fluid, effortless, takes the shape of its container.

Most Zsh scripts scatter raw `echo -e "\033[32m..."` calls everywhere. shui gives you a proper design system instead — semantic components, a token-based theme engine, and a single consistent API.

One file to source. No dependencies. Pure Zsh.

> Examples below use `SHUI_ICONS=emoji` — works everywhere without a Nerd Font.
> Swap to `SHUI_ICONS=nerd` for richer glyphs if you have one installed.

---

## ✨ Features

- **Unified message API** — `shui message <type> <text>` covers success, error, warning, info, and muted in a single consistent command
- **Token-based theme engine** — swap colours, icons, and styles via environment variables without touching component code
- **Inline components** — `badge` and `pill` write to stdout without a newline, composing naturally inside `$(...)` expressions
- **Interactive prompts** — `confirm`, `select`, `radio`, `multiselect`, and `input` with keyboard navigation and sensible defaults
- **Progress & spinners** — `progress`, `spinner`, and `loader` with optional native iTerm2 dock badge integration
- **Zero dependencies** — a single `source shui.zsh` is all you need; no npm, no brew, no external tools
- **NO_COLOR aware** — respects the [NO_COLOR](https://no-color.org/) convention; degrades gracefully to plain ASCII in constrained environments

---

## 🚀 Quick Start

```zsh
git clone https://github.com/kud/shui ~/.shui
source ~/.shui/shui.zsh

shui message success "Deployment complete"
shui message error   "Build failed"
shui message warning "Deprecated flag used"
shui message info    "Running in dry-run mode"
shui message muted   "Skipped (already up-to-date)"
```

```console
✅ Deployment complete
❌ Build failed
⚠️ Deprecated flag used
ℹ️ Running in dry-run mode
   Skipped (already up-to-date)
```

### Importing in a script

Source shui at the top of any Zsh script:

```zsh
#!/usr/bin/env zsh
source "${0:A:h}/lib/shui/shui.zsh"
```

`${0:A:h}` is the Zsh idiom for the absolute directory of the current script — the path resolves correctly regardless of where you call the script from.

To select a theme before loading:

```zsh
SHUI_THEME=minimal SHUI_ICONS=emoji source shui.zsh
```

---

## 📖 Component Reference

### Messages

`shui message` is the preferred unified API for inline messages. It replaces the old `*-simple` shorthand commands.

```zsh
shui message <type> <text>
```

| Type      | Output                       |
| --------- | ---------------------------- |
| `success` | Icon + success-coloured text |
| `error`   | Icon + error-coloured text   |
| `warning` | Icon + warning-coloured text |
| `info`    | Icon + info-coloured text    |
| `muted`   | Italic dimmed text, no icon  |

```zsh
shui message success "Deployed to production"
shui message error   "Connection refused"
shui message warning "API key expires in 3 days"
shui message info    "Running in dry-run mode"
shui message muted   "Skipped — already installed"
```

```console
✅ Deployed to production
❌ Connection refused
⚠️ API key expires in 3 days
ℹ️ Running in dry-run mode
   Skipped — already installed
```

> **Deprecated commands** — `shui info-simple`, `shui warning-simple`, `shui success-simple`, and `shui error-simple` still work but print a deprecation warning to stderr and will be removed in a future release. Migrate to `shui message <type> <text>`.

The top-level shorthand commands `shui success`, `shui error`, `shui warning`, and `shui info` remain available for quick one-liners.

---

### Text

Inline text formatting and semantic colour helpers.

```zsh
shui bold      "Bold text"
shui dim       "Dimmed text"
shui italic    "Italic text"
shui underline "Underlined text"

shui text --color=success "Success colour"
shui text --color=muted   "Muted colour"
```

Available colour types: `success` `error` `warning` `info` `primary` `muted` `accent`

---

### Layout

Structure your script output with sections, headings, and spacing.

```zsh
shui section    "Setup"
shui subtitle   "Installing packages"
shui subsection "npm dependencies"
shui subsection "brew formulae"
shui divider
shui spacer
shui spacer 3
```

```console

Setup

◆ Installing packages
• npm dependencies
• brew formulae
────────────────────────────────────────────────────────────────────────────────
```

---

### Screen

Renders a section header, runs a command, then prints elapsed time. Returns the command's exit code.

```zsh
shui screen "Building" -- npm run build
shui screen "Running tests" -- zsh tests/test-components.zsh
```

```console

Building

✅ Build complete
⏱ Building · 3s
```

```zsh
shui screen <title> -- <command> [args…]
```

---

### Timer

Lightweight per-step timing. Call `timer-start` before a block and `timer-end <label>` after — prints elapsed time in muted colour without affecting output or exit codes.

```zsh
shui timer-start
mise plugins update
shui timer-end "Plugin index update"
```

```console
⏱ Plugin index update · 2s
```

```zsh
shui timer-start
shui timer-end <label>
```

---

### Badge

Solid background inline label. Writes to stdout **without a newline** — use inside `$(...)`.

```zsh
echo "Version: $(shui badge success v2.0)"
echo "Build:   $(shui badge error FAIL)  $(shui badge success PASS)  $(shui badge muted SKIP)"
```

```zsh
shui badge <type> <text>
```

Available types: `success` `error` `warning` `info` `primary` `muted`

---

### Pill

Rounded-edge inline tag. Writes to stdout **without a newline** — use inside `$(...)`.

```zsh
echo "Status: $(shui pill warning beta)"
echo "$(shui pill success stable)  $(shui pill muted deprecated)"
```

```zsh
shui pill <type> <text>
shui pill 135 "custom"   # any 256-colour code (0–255)
```

Available types: `success` `error` `warning` `info` `primary` `muted` `accent` or any `0–255` colour code

---

### Box

Bordered content block with an optional title. Inline components work inside content.

```zsh
shui box "Simple content inside a box"
shui box --title="Summary" "3 installed\n1 skipped\n0 errors"
shui box --title="Status" "$(shui badge success OK) All systems nominal"
```

```console
┌────────────────────────────────────────────┐
│  Simple content inside a box               │
└────────────────────────────────────────────┘

┌──────────────── Summary ───────────────────┐
│  3 installed                               │
│  1 skipped                                 │
│  0 errors                                  │
└────────────────────────────────────────────┘
```

---

### Table

Pipe-separated (`|`) rows by default. First argument is the header. Column widths adjust automatically. Use `--sep` to change the delimiter.

```zsh
shui table \
  "Package|Version|Status" \
  "node|20.11.0|$(shui badge success OK)" \
  "bun|1.1.3|$(shui badge success OK)" \
  "python|3.12.0|$(shui badge warning outdated)"
```

```console
┌─────────┬──────────┬──────────┐
│ Package │ Version  │ Status   │
├─────────┼──────────┼──────────┤
│ node    │ 20.11.0  │  OK      │
│ bun     │ 1.1.3    │  OK      │
│ python  │ 3.12.0   │  outdated│
└─────────┴──────────┴──────────┘
```

---

### Progress

Adds a newline by default. Use `--inline` for loop-based updates.

```zsh
shui progress 50 100
shui progress 50 100 --width=30 --label="Downloading "

# loop use
for i in {1..100}; do
  shui progress $i 100 --inline
  sleep 0.05
done
echo
```

```console
████████████████████░░░░░░░░░░░░░░░░░░░░ 50%
Downloading ██████████░░░░░░░░░░░░░░░░░░░░ 50%
```

**iTerm2 Dock/tab badge** — pass `--iterm` (or `--iterm=<state>`) to also update the native macOS progress indicator. No-op in other terminals.

| Flag                         | iTerm2 state             |
| ---------------------------- | ------------------------ |
| `--iterm` / `--iterm=normal` | Normal (blue)            |
| `--iterm=success`            | Success (green)          |
| `--iterm=warning`            | Warning (yellow)         |
| `--iterm=error`              | Error (red)              |
| `--iterm=indeterminate`      | Spinning (no percentage) |
| `--iterm=clear`              | Dismiss the indicator    |

---

### Spinner

Runs a command in the background with a spinner. Exits with the command's exit code.

In iTerm2, automatically emits an indeterminate badge while running, switches to success or error on completion, then clears.

```zsh
shui spinner "Installing…" -- brew install ripgrep

shui spinner \
  --success="Installed!" \
  --fail="Installation failed" \
  "Installing…" -- npm install
```

---

### Loader

Indeterminate loading indicator — loops for a fixed duration then clears the line. Use when you can't wrap a command in `spinner`.

```zsh
shui loader "Installing packages"
shui loader --duration=10 "Building"
shui loader --style=dots    "Connecting"   # default
shui loader --style=pulse   "Connecting"
shui loader --style=spinner "Connecting"
```

```zsh
shui loader [--style=dots|pulse|spinner] [--duration=N] <msg>
```

| Style     | Description                        |
| --------- | ---------------------------------- |
| `dots`    | Cycling dot trail — `.` `..` `...` |
| `pulse`   | Bold/dim alternating text          |
| `spinner` | Braille spinner character          |

---

### Animation

One-shot text effects — play once and exit.

```zsh
shui typewriter "Deploying to production…"
shui typewriter --delay=0.05 --color=success "Done!"

shui fade-in "Welcome"
shui fade-in --steps=10 "Welcome"
```

```zsh
shui typewriter [--delay=N] [--color=<type>] <text>
shui fade-in    [--steps=N] <text>
```

---

### Interactive

Prompt the user for confirmation, a selection, or free-form input.

```zsh
# Confirm — exits 0 for yes, 1 for no
shui confirm "Deploy to production?"
shui confirm --default=y "Continue?"

# Select — numbered list, prints the chosen option to stdout
choice=$(shui select "Pick a profile:" work personal staging)

# Radio — ↑↓ to move, Enter to confirm. Prints chosen option to stdout.
env=$(shui radio "Target environment:" development staging production)

# Multiselect — ↑↓ to move, Space to toggle, Enter to confirm.
# Returns selected options newline-separated to stdout.
choices=$(shui multiselect "Which packages?" brew npm cargo)
selected=("${(@f)choices}")

# Input — prints the entered value to stdout
name=$(shui input "Your name:")
name=$(shui input --default="world" "Your name:")
```

---

## Themes

### Built-in themes

| Theme     | Description                                  |
| --------- | -------------------------------------------- |
| `default` | 256-colour with automatic 16-colour fallback |
| `minimal` | Clean 16-colour ANSI palette                 |
| `plain`   | No colour — text and ASCII icons only        |

### Selecting a theme

```zsh
SHUI_THEME=minimal source shui.zsh
```

Or export from your shell profile so all scripts pick it up automatically:

```zsh
export SHUI_THEME=minimal
```

### NO_COLOR

shui respects the [NO_COLOR](https://no-color.org/) convention. When `$NO_COLOR` is set, inline components (`badge`, `pill`) fall back to ASCII representations and no colour codes are emitted.

### Custom themes

Generate a new theme pre-filled with all tokens:

```zsh
shui theme create mytheme
# → src/themes/mytheme.zsh
```

A custom theme sources `default.zsh` first — only override the tokens you want to change:

```zsh
# src/themes/mytheme.zsh
source "${SHUI_DIR}/src/themes/default.zsh"

SHUI_COLOR_PRIMARY=$(_shui_color "38;5;135" "0;35")  # purple
SHUI_COLOR_ACCENT=$(_shui_color  "38;5;135" "0;35")
```

Load it:

```zsh
SHUI_THEME=mytheme source shui.zsh
```

Manage themes:

```zsh
shui theme list       # list available themes
shui theme validate   # check all required tokens are defined
```

### Token reference

| Token                                                                                                                 | Purpose                  |
| --------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| `SHUI_RESET`                                                                                                          | Reset all styles         |
| `SHUI_BOLD` `SHUI_DIM` `SHUI_ITALIC` `SHUI_UNDERLINE`                                                                 | Text styles              |
| `SHUI_COLOR_PRIMARY`                                                                                                  | Primary accent colour    |
| `SHUI_COLOR_SUCCESS`                                                                                                  | Success colour           |
| `SHUI_COLOR_WARNING`                                                                                                  | Warning colour           |
| `SHUI_COLOR_ERROR`                                                                                                    | Error colour             |
| `SHUI_COLOR_INFO`                                                                                                     | Info colour              |
| `SHUI_COLOR_MUTED`                                                                                                    | Secondary / dim text     |
| `SHUI_COLOR_ACCENT`                                                                                                   | Highlight accent         |
| `SHUI_BG_SUCCESS` `SHUI_BG_WARNING` `SHUI_BG_ERROR` `SHUI_BG_INFO` `SHUI_BG_PRIMARY` `SHUI_BG_MUTED`                  | Badge background colours |
| `SHUI_ICON_SUCCESS` `SHUI_ICON_ERROR` `SHUI_ICON_WARNING` `SHUI_ICON_INFO`                                            | Status icons             |
| `SHUI_ICON_BULLET` `SHUI_ICON_ARROW` `SHUI_ICON_CHECK` `SHUI_ICON_CROSS`                                              | UI icons                 |
| `SHUI_ICON_ROBOT` `SHUI_ICON_APPLE` `SHUI_ICON_GIT` `SHUI_ICON_FOLDER` `SHUI_ICON_LINK` `SHUI_ICON_CLOUD`             | Infrastructure icons     |
| `SHUI_ICON_NODE` `SHUI_ICON_PYTHON` `SHUI_ICON_RUBY` `SHUI_ICON_RUST` `SHUI_ICON_GO` `SHUI_ICON_GEM` `SHUI_ICON_BREW` | Language & tool icons    |

---

## Icons

### Icon sets

| Set       | Requires                                | Description                              |
| --------- | --------------------------------------- | ---------------------------------------- |
| `nerd`    | [Nerd Font](https://www.nerdfonts.com/) | Rich glyphicons _(default)_              |
| `emoji`   | Nothing                                 | Unicode emoji, works everywhere          |
| `none`    | Nothing                                 | No icons — text only                     |
| `unicode` | Nothing                                 | Base layer — always loaded automatically |

> `unicode.zsh` is sourced before the selected icon set on every load. It defines geometric symbols (`›`, `●`, `▲`, etc.) that work in any terminal. The selected icon set can override them — `none` blanks them all, `emoji` inherits them unchanged.

### Selecting an icon set

```zsh
SHUI_ICONS=emoji source shui.zsh   # emoji
SHUI_ICONS=nerd  source shui.zsh   # nerd font (default)
SHUI_ICONS=none  source shui.zsh   # no icons
```

Combine freely with any theme:

```zsh
SHUI_THEME=minimal SHUI_ICONS=emoji source shui.zsh
SHUI_THEME=plain   SHUI_ICONS=none   source shui.zsh   # fully plain
```

---

## Installation

### Manually

```zsh
git clone https://github.com/kud/shui ~/.shui
```

### As a project submodule (recommended for scripts)

```zsh
git submodule add https://github.com/kud/shui lib/shui
```

### Antidote

Add to your `.zsh_plugins.txt`:

```
kud/shui
```

Then reload:

```zsh
antidote load
```

### Zinit

```zsh
zinit light kud/shui
```

### Oh My Zsh

Clone into your custom plugins directory:

```zsh
git clone https://github.com/kud/shui ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/shui
```

Then add `shui` to the `plugins` array in `~/.zshrc`:

```zsh
plugins=(... shui)
```

### Zplug

```zsh
zplug "kud/shui"
```

---

## 🔧 Development

### Project structure

```
shui/
├── shui.zsh              # entry point — source this
├── src/
│   ├── components/       # message, badge, pill, box, table, progress, spinner…
│   ├── icons/            # nerd.zsh, emoji.zsh, unicode.zsh, none.zsh
│   ├── themes/           # default.zsh, minimal.zsh, plain.zsh
│   └── tokens/           # colors.zsh, contract.zsh
└── tests/                # Zsh test harness + suites
```

### Task runner

Tasks are managed with [mise](https://mise.jdx.dev/):

| Task            | Description                       |
| --------------- | --------------------------------- |
| `mise run test` | Run all test suites               |
| `mise run lint` | Syntax-check all Zsh source files |
| `mise run demo` | Run the visual component demo     |

### Tests

The test suite lives in `tests/` and uses a lightweight Zsh harness with inline ✓/✗ output per assertion.

```zsh
mise run test

# or run a single suite directly
zsh tests/test-components.zsh
```

The shared harness (`tests/_harness.zsh`) provides `assert_eq`, `assert_contains`, `assert_not_contains`, `assert_exit_ok`, and `strip_ansi`.

### Syntax check

```zsh
mise run lint
# equivalent to:
zsh -n shui.zsh && zsh -n src/**/*.zsh
```

### Demo

```zsh
zsh demo.zsh
zsh demo.zsh --interactive   # includes confirm, select, and input
```

---

## Requirements

- Zsh 5.0+
- A [Nerd Font](https://www.nerdfonts.com/) for the `default` and `minimal` themes — or use `SHUI_ICONS=emoji` or `SHUI_ICONS=none`

---

## License

MIT © [kud](https://github.com/kud) — Made with ❤️
