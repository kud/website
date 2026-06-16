---
title: "claude-plugins"
description: "A curated collection of Claude Code plugins for kud's MCP servers"
---

```
 ██████╗██╗      █████╗ ██╗   ██╗██████╗ ███████╗
██╔════╝██║     ██╔══██╗██║   ██║██╔══██╗██╔════╝
██║     ██║     ███████║██║   ██║██║  ██║█████╗
██║     ██║     ██╔══██║██║   ██║██║  ██║██╔══╝
╚██████╗███████╗██║  ██║╚██████╔╝██████╔╝███████╗
 ╚═════╝╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚═════╝ ╚══════╝

██████╗ ██╗     ██╗   ██╗ ██████╗ ██╗███╗   ██╗███████╗
██╔══██╗██║     ██║   ██║██╔════╝ ██║████╗  ██║██╔════╝
██████╔╝██║     ██║   ██║██║  ███╗██║██╔██╗ ██║███████╗
██╔═══╝ ██║     ██║   ██║██║   ██║██║██║╚██╗██║╚════██║
██║     ███████╗╚██████╔╝╚██████╔╝██║██║ ╚████║███████║
╚═╝     ╚══════╝ ╚═════╝  ╚═════╝ ╚═╝╚═╝  ╚═══╝╚══════╝
```

<div align="center">

[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Claude Code](https://img.shields.io/badge/Claude%20Code-Plugin%20Marketplace-D97757?style=flat-square)](https://claude.ai/code)
[![MCP](https://img.shields.io/badge/MCP-1.0-8B5CF6?style=flat-square)](https://modelcontextprotocol.io)
[![MIT](https://img.shields.io/badge/License-MIT-22C55E?style=flat-square)](./LICENSE)

**A curated collection of Claude Code plugins for kud's MCP servers.**

[Plugins](#plugins) • [Quick Start](#quick-start) • [Skills](#skills) • [Structure](#structure)

</div>

---

## What is this?

Claude Code plugins bundle an **MCP server** + **companion skills** into a single installable unit. Each plugin here wraps one of kud's published MCP servers and ships ready-to-use slash commands for the most common workflows.

Install a plugin → get the MCP tools _and_ the skills in one shot.

---

## Quick Start

### 1. Register the marketplace

```
/plugin marketplace add kud/claude-plugins  # registers as @kud
```

### 2. Install a plugin

**Personal plugins** — install globally for your user:

```
/plugin install opencode@kud --scope user
/plugin install trakt@kud --scope user
/plugin install raindrop-io@kud --scope user
/plugin install google-keep@kud --scope user
```

**Team plugins** — install at project scope to share via `.claude/settings.json`:

```
/plugin install jenkins@kud --scope project
/plugin install harness-fme@kud --scope project
```

### 3. Set up credentials

Each plugin that requires authentication includes setup instructions in its homepage. Follow those before use.

### 4. Use a skill

```
/ask-opencode explain this function
/ci-diagnose my-service
/feature-flag-status my-flag
/trakt-whats-on
/bookmark-search react hooks
/keep-capture remember to buy oat milk
```

---

## Plugins

### 🤖 [mcp-opencode](https://github.com/kud/mcp-opencode)

Query any opencode-supported model from inside Claude — get a second opinion without leaving your session.

| Skill           | Description                                                     |
| --------------- | --------------------------------------------------------------- |
| `/ask-opencode` | Send a prompt to any opencode model and see the response inline |

**npm**: [`@kud/mcp-opencode`](https://www.npmjs.com/package/@kud/mcp-opencode)

---

### 🏗️ [mcp-jenkins](https://github.com/kud/mcp-jenkins)

Full Jenkins control from Claude — inspect builds, stream console logs, trigger pipelines, manage queues, and diagnose CI failures.

| Skill          | Description                                                    |
| -------------- | -------------------------------------------------------------- |
| `/ci-diagnose` | Fetch a failing build's console log and explain the root cause |
| `/build-watch` | Trigger a build and watch it to completion with live status    |

**npm**: [`@kud/mcp-jenkins`](https://www.npmjs.com/package/@kud/mcp-jenkins)

---

### 🚩 [mcp-harness-fme](https://github.com/kud/mcp-harness-fme)

Inspect and control Harness FME feature flags — list environments, audit targeting rules, and kill or restore flags in a single conversation.

| Skill                  | Description                                           |
| ---------------------- | ----------------------------------------------------- |
| `/feature-flag-status` | Full status report for a flag across all environments |

**npm**: [`@kud/mcp-harness-fme`](https://www.npmjs.com/package/@kud/mcp-harness-fme)

---

### 🎬 [mcp-trakt](https://github.com/kud/mcp-trakt)

Track what you're watching — search movies and shows, check in, browse your history, manage your watchlist, and get recommendations.

| Skill             | Description                                              |
| ----------------- | -------------------------------------------------------- |
| `/trakt-whats-on` | See your watchlist, recently watched, and what's up next |
| `/trakt-checkin`  | Check in to a movie or episode you're about to watch     |

**npm**: [`@kud/mcp-trakt`](https://www.npmjs.com/package/@kud/mcp-trakt)

---

### 🔖 [mcp-raindrop-io](https://github.com/kud/mcp-raindrop-io)

Manage your Raindrop.io bookmarks from Claude — search your library, save new links, organise into collections, and tag.

| Skill              | Description                                          |
| ------------------ | ---------------------------------------------------- |
| `/bookmark-search` | Search your bookmarks by keyword, tag, or collection |
| `/bookmark-save`   | Save a URL to Raindrop.io with tags and collection   |

**npm**: [`@kud/mcp-raindrop-io`](https://www.npmjs.com/package/@kud/mcp-raindrop-io)

---

### 📝 [mcp-google-keep](https://github.com/kud/mcp-google-keep)

Read and write your Google Keep notes from Claude — capture thoughts, manage checklists, and search your notes by label, colour, or text.

| Skill           | Description                             |
| --------------- | --------------------------------------- |
| `/keep-capture` | Quickly save a thought or note to Keep  |
| `/keep-todo`    | View and manage a Google Keep checklist |

**GitHub (Python)**: [kud/mcp-google-keep](https://github.com/kud/mcp-google-keep) — installed via `uvx`

---

## Structure

Each plugin lives in its own repo and carries its own manifest and skills:

```
mcp-example/                  ← github.com/kud/mcp-example
├── .claude-plugin/
│   └── plugin.json           # MCP config + skill list
├── skills/
│   └── my-skill/
│       └── SKILL.md
└── src/
```

This repo (`claude-plugins`) is a thin index that points to those repos.

---

## Skills

**Total: 11 Skills across 7 plugins**

| Plugin         | Skill               | Trigger                       | What it does                               |
| -------------- | ------------------- | ----------------------------- | ------------------------------------------ |
| github-copilot | ask-copilot         | `/ask-copilot <prompt>`       | Second opinion from a GitHub Copilot model |
| opencode       | ask-opencode        | `/ask-opencode <prompt>`      | Second opinion from a Copilot model        |
| jenkins        | ci-diagnose         | `/ci-diagnose <job> [build]`  | Root cause analysis of a failing build     |
| jenkins        | build-watch         | `/build-watch <job>`          | Trigger + watch a build live               |
| harness-fme    | feature-flag-status | `/feature-flag-status <flag>` | Flag state across all environments         |
| trakt          | trakt-whats-on      | `/trakt-whats-on`             | Watchlist + recently watched recap         |
| trakt          | trakt-checkin       | `/trakt-checkin <title>`      | Check in to what you're watching           |
| raindrop-io    | bookmark-search     | `/bookmark-search <query>`    | Search your bookmarks                      |
| raindrop-io    | bookmark-save       | `/bookmark-save <url>`        | Save a URL to Raindrop.io                  |
| google-keep    | keep-capture        | `/keep-capture <text>`        | Capture a thought to Google Keep           |
| google-keep    | keep-todo           | `/keep-todo <list>`           | Manage a Google Keep checklist             |

---

## MCP Servers

| Plugin         | Package                                                                          | GitHub                                                              |
| -------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| github-copilot | [@kud/mcp-github-copilot](https://www.npmjs.com/package/@kud/mcp-github-copilot) | [kud/mcp-github-copilot](https://github.com/kud/mcp-github-copilot) |
| opencode       | [@kud/mcp-opencode](https://www.npmjs.com/package/@kud/mcp-opencode)             | [kud/mcp-opencode](https://github.com/kud/mcp-opencode)             |
| jenkins        | [@kud/mcp-jenkins](https://www.npmjs.com/package/@kud/mcp-jenkins)               | [kud/mcp-jenkins](https://github.com/kud/mcp-jenkins)               |
| harness-fme    | [@kud/mcp-harness-fme](https://www.npmjs.com/package/@kud/mcp-harness-fme)       | [kud/mcp-harness-fme](https://github.com/kud/mcp-harness-fme)       |
| trakt          | [@kud/mcp-trakt](https://www.npmjs.com/package/@kud/mcp-trakt)                   | [kud/mcp-trakt](https://github.com/kud/mcp-trakt)                   |
| raindrop-io    | [@kud/mcp-raindrop-io](https://www.npmjs.com/package/@kud/mcp-raindrop-io)       | [kud/mcp-raindrop-io](https://github.com/kud/mcp-raindrop-io)       |
| google-keep    | GitHub (Python / uvx)                                                            | [kud/mcp-google-keep](https://github.com/kud/mcp-google-keep)       |

---

## License

MIT © [kud](https://github.com/kud)

---

<div align="center">

Made with ❤️ for Claude Code power users

⭐ Star this repo if it saves you time

[↑ Back to top](#)

</div>
