---
title: "mcp-bugzilla"
description: "MCP server for Bugzilla — search, discuss, and manage Firefox/Mozilla bugs via the Bugzilla REST API."
---

```
██████╗ ██╗   ██╗ ██████╗ ███████╗██╗██╗     ██╗      █████╗
██╔══██╗██║   ██║██╔════╝ ╚══███╔╝██║██║     ██║     ██╔══██╗
██████╔╝██║   ██║██║  ███╗  ███╔╝ ██║██║     ██║     ███████║
██╔══██╗██║   ██║██║   ██║ ███╔╝  ██║██║     ██║     ██╔══██║
██████╔╝╚██████╔╝╚██████╔╝███████╗██║███████╗███████╗██║  ██║
╚═════╝  ╚═════╝  ╚═════╝ ╚══════╝╚═╝╚══════╝╚══════╝╚═╝  ╚═╝
```

<div align="center">

![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?logo=typescript)
![Node.js](https://img.shields.io/badge/Node.js-20+-green?logo=node.js)
![MCP](https://img.shields.io/badge/MCP-1.0-purple?logo=anthropic)
![npm](https://img.shields.io/badge/npm-%40kud%2Fmcp--bugzilla-red?logo=npm)
![License](https://img.shields.io/badge/License-MIT-blue)

**Search, discuss, and manage Mozilla/Firefox bugs via the Bugzilla REST API.**

[Features](#-features) • [Quick Start](#-quick-start) • [Installation](#-installation-guides) • [Tools](#️-available-tools) • [Development](#-development)

</div>

## 🌟 Features

- 🔑 **Optional auth** — read-only without a key; create/update/comment with an API key
- 🛠️ **12 tools** covering bugs, comments, history, attachments, products, users, and fields
- 🦊 **Mozilla-first** — defaults to `https://bugzilla.mozilla.org/rest`, configurable via env var
- 🔍 **Powerful search** — filter by product, component, status, severity, assignee, or quicksearch syntax
- 💬 **Full discussion flow** — read comments, post replies, attach work-time logs
- 📎 **Attachment listing** — inspect patches and test files linked to any bug

## 🚀 Quick Start

### Prerequisites

- Node.js 20+
- A [Mozilla Bugzilla account](https://bugzilla.mozilla.org/) (optional — for write operations)
- A Bugzilla API key from [User Preferences → API Keys](https://bugzilla.mozilla.org/userprefs.cgi?tab=apikey)

### Installation

```bash
# Run directly without installing
npx @kud/mcp-bugzilla

# Or clone and build locally
git clone https://github.com/kud/mcp-bugzilla.git
cd mcp-bugzilla
npm install && npm run build
```

### Quick Setup (Claude Desktop)

```json
{
  "mcpServers": {
    "mcp-bugzilla": {
      "command": "npx",
      "args": ["-y", "@kud/mcp-bugzilla"],
      "env": {
        "MCP_BUGZILLA_API_KEY": "your-api-key-here"
      }
    }
  }
}
```

✅ Restart Claude Desktop — you can now search and discuss Firefox bugs.

## 📚 Installation Guides

- [Claude Code CLI](#-claude-code-cli)
- [Claude Desktop](#-claude-desktop-macos--windows)
- [Cursor](#-cursor)
- [Windsurf](#-windsurf)
- [VSCode](#-vscode)

---

<details>
<summary>🖥️ Claude Code CLI</summary>

```bash
claude mcp add mcp-bugzilla -- npx -y @kud/mcp-bugzilla
claude mcp get mcp-bugzilla
```

To pass an API key:

```bash
claude mcp add mcp-bugzilla -e MCP_BUGZILLA_API_KEY=your-key -- npx -y @kud/mcp-bugzilla
```

</details>

<details>
<summary>🖥️ Claude Desktop (macOS + Windows)</summary>

Edit `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS) or `%APPDATA%\Claude\claude_desktop_config.json` (Windows):

```json
{
  "mcpServers": {
    "mcp-bugzilla": {
      "command": "npx",
      "args": ["-y", "@kud/mcp-bugzilla"],
      "env": {
        "MCP_BUGZILLA_API_KEY": "your-api-key-here"
      }
    }
  }
}
```

</details>

<details>
<summary>🖱️ Cursor</summary>

In Cursor settings → MCP → Add server:

```json
{
  "mcp-bugzilla": {
    "command": "npx",
    "args": ["-y", "@kud/mcp-bugzilla"],
    "env": { "MCP_BUGZILLA_API_KEY": "your-api-key-here" }
  }
}
```

</details>

<details>
<summary>🌊 Windsurf</summary>

In `~/.codeium/windsurf/mcp_config.json`:

```json
{
  "mcpServers": {
    "mcp-bugzilla": {
      "command": "npx",
      "args": ["-y", "@kud/mcp-bugzilla"],
      "env": { "MCP_BUGZILLA_API_KEY": "your-api-key-here" }
    }
  }
}
```

</details>

<details>
<summary>🟦 VSCode</summary>

In `.vscode/mcp.json`:

```json
{
  "servers": {
    "mcp-bugzilla": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@kud/mcp-bugzilla"],
      "env": { "MCP_BUGZILLA_API_KEY": "your-api-key-here" }
    }
  }
}
```

</details>

## 🛠️ Available Tools

### 🐛 Bugs (5 tools)

| Tool              | Description                                                                    |
| ----------------- | ------------------------------------------------------------------------------ |
| `get_bug`         | Fetch a single bug by ID or alias                                              |
| `search_bugs`     | Search bugs by product, component, status, assignee, quicksearch, etc.         |
| `create_bug`      | File a new bug (requires API key)                                              |
| `update_bug`      | Update status, resolution, assignee, keywords, CC, and more (requires API key) |
| `get_bug_history` | View the full field-change history for a bug                                   |

### 💬 Comments (2 tools)

| Tool             | Description                                                                           |
| ---------------- | ------------------------------------------------------------------------------------- |
| `get_comments`   | Get all comments on a bug, with optional `new_since` filter                           |
| `create_comment` | Post a comment, optionally marking it private or logging work time (requires API key) |

### 📎 Attachments (1 tool)

| Tool              | Description                                                 |
| ----------------- | ----------------------------------------------------------- |
| `get_attachments` | List all attachments (patches, screenshots, logs) for a bug |

### 📦 Products (2 tools)

| Tool           | Description                                           |
| -------------- | ----------------------------------------------------- |
| `get_products` | List accessible/selectable/enterable products         |
| `get_product`  | Get product details including components and versions |

### 👤 Users (1 tool)

| Tool       | Description                                    |
| ---------- | ---------------------------------------------- |
| `get_user` | Look up a Bugzilla user by email or login name |

### 🔖 Fields (1 tool)

| Tool             | Description                                |
| ---------------- | ------------------------------------------ |
| `get_bug_fields` | List all bug fields and their legal values |

**Total: 12 Tools** covering the full Bugzilla REST API!

## 💬 Example Conversations

```
You: "Show me bug 1234567"
AI: *Fetches and displays the bug summary, status, assignee, and metadata*

You: "Search for open Firefox crashes with priority P1"
AI: *Queries product=Firefox, status=NEW|ASSIGNED, priority=P1, severity=critical*

You: "What comments are on bug 1800000?"
AI: *Lists all comments with author names and timestamps*

You: "Who is assigned to the most recent WebGL regression?"
AI: *Searches for WebGL regressions and shows assignee details*

You: "File a bug for a Firefox crash on macOS when opening PDFs"
AI: *Creates the bug in the DOM: PDF Viewer component with the right fields*

You: "Mark bug 9999 as RESOLVED FIXED with a comment explaining the fix"
AI: *Updates status/resolution and posts the comment in one operation*

You: "What components does the Firefox product have?"
AI: *Fetches product details and lists all components*

You: "Show me the change history for bug 500000"
AI: *Displays the full audit trail of field changes with timestamps*

You: "Who is lsalzman@mozilla.com on Bugzilla?"
AI: *Returns user profile including display name and real name*

You: "What are the valid values for bug severity?"
AI: *Queries get_bug_fields for severity and lists all legal values*
```

## 🧪 Development

### Project Structure

```
mcp-bugzilla/
├── src/
│   ├── index.ts              # Server, tools, and handlers
│   └── __tests__/
│       └── tools.test.ts     # Unit tests for every handler
├── dist/                     # Compiled output
├── .mcp.json                 # Local dev MCP config
├── CLAUDE.md                 # API reference pointers
├── package.json
└── tsconfig.json
```

### Available Scripts

| Script                | Description                       |
| --------------------- | --------------------------------- |
| `npm run build`       | Compile TypeScript to `dist/`     |
| `npm run build:watch` | Watch mode compilation            |
| `npm run dev`         | Run directly via tsx              |
| `npm test`            | Run test suite                    |
| `npm run test:watch`  | Watch mode tests                  |
| `npm run coverage`    | Coverage report                   |
| `npm run typecheck`   | Type-check without emitting       |
| `npm run inspect:dev` | Open MCP Inspector against source |

### Development Workflow

Terminal 1 — watch compiler:

```bash
npm run build:watch
```

Terminal 2 — MCP Inspector:

```bash
npm run inspect:dev
```

### Testing with MCP Inspector

```bash
export MCP_BUGZILLA_API_KEY=your-key
npm run inspect:dev
```

Open http://localhost:5173 to interact with the server live.

## 🔐 Authentication

API key authentication is **optional for reads** and **required for writes**.

1. Log in to [bugzilla.mozilla.org](https://bugzilla.mozilla.org)
2. Go to [Preferences → API Keys](https://bugzilla.mozilla.org/userprefs.cgi?tab=apikey)
3. Click **Generate a new API key**, give it a description
4. Copy the key and set it as `MCP_BUGZILLA_API_KEY`

Verify your key:

```bash
curl -H "X-BUGZILLA-API-KEY: your-key" \
  https://bugzilla.mozilla.org/rest/whoami
```

You can also override the Bugzilla instance with `MCP_BUGZILLA_BASE_URL` (useful for self-hosted installations).

## 🐛 Troubleshooting

### Server Not Showing

- Ensure Node.js 20+ is installed: `node --version`
- Check the server key includes the `mcp-` prefix in config
- Restart Claude Desktop / reload your editor after config changes
- Run `claude mcp get mcp-bugzilla` to verify the registration

### Authentication Errors

Test your key directly:

```bash
curl -H "X-BUGZILLA-API-KEY: your-key" \
  https://bugzilla.mozilla.org/rest/whoami
```

### Check Logs

- **macOS:** `~/Library/Logs/Claude/mcp-server-mcp-bugzilla.log`
- **Windows:** `%APPDATA%\Claude\logs\mcp-server-mcp-bugzilla.log`
- **Claude Code:** `claude mcp get mcp-bugzilla`

## 🔒 Security Best Practices

- ✅ Set `MCP_BUGZILLA_API_KEY` as an environment variable — never hardcode it
- ✅ Never commit your API key to version control
- ✅ Protect your shell profile or secrets manager where the key is stored
- ✅ Rotate your key at [Bugzilla preferences](https://bugzilla.mozilla.org/userprefs.cgi?tab=apikey) if it is ever exposed

## 📊 Tech Stack

**Runtime:** Node.js 20+
**Language:** TypeScript 5
**Target:** Mozilla Bugzilla REST API v1
**Protocol:** Model Context Protocol (MCP) 1.0
**HTTP Client:** Native `fetch`
**Module System:** ESM (`"type": "module"`)

## 🤝 Contributing

1. Run `npm run typecheck` and `npm test` — both must pass
2. Run `npm run build` — verify `dist/` compiles cleanly
3. Follow the existing tool handler pattern: exported arrow function → registered with `server.registerTool`

## 📄 License

MIT — see [LICENSE](https://github.com/kud/mcp-bugzilla/blob/HEAD/LICENSE).

## 🙏 Acknowledgments

- [Model Context Protocol](https://modelcontextprotocol.io)
- [Bugzilla REST API](https://bugzilla.readthedocs.io/en/latest/api/)

## 📮 Support

[Open an issue](https://github.com/kud/mcp-bugzilla/issues) on GitHub.

---

<div align="center">

**Made with ❤️ for Firefox contributors and Mozilla community members**

⭐ Star this repo if it helped you!

[Back to Top](#bugzilla-mcp-server)

</div>
