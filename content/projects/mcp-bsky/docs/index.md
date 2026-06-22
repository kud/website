---
title: "mcp-bsky"
description: "MCP server for Bluesky — search, read, and post via the AT Protocol."
---

## 🌟 Features

- **App-password auth** — uses your Bluesky App Password via `BLUESKY_HANDLE` / `BLUESKY_APP_PASSWORD` (shared with `@kud/bsky-cli`).
- **11 tools** — 5 read, 6 write.
- **Writes are gated** — every posting/engagement tool requires an explicit `confirm: true`, so an agent can never publish by accident.
- **Thin wrapper** — each tool is one line over `@kud/bsky`; the API logic lives in the core library, not here.
- **TypeScript, ESM, zero business logic** — `@modelcontextprotocol/sdk` + `zod`.

## 🚀 Quick Start

### Prerequisites

- Node.js 20+
- A Bluesky account and an **App Password** (Settings → App Passwords)

### Installation

```sh
npx @kud/mcp-bsky
```

### Claude Desktop / Claude Code

```json
{
  "mcpServers": {
    "bsky": {
      "command": "npx",
      "args": ["@kud/mcp-bsky"],
      "env": {
        "BLUESKY_HANDLE": "you.bsky.social",
        "BLUESKY_APP_PASSWORD": "xxxx-xxxx-xxxx-xxxx"
      }
    }
  }
}
```

✅ Restart your client and the `bsky` tools appear.

## 🛠️ Available Tools

### 🔭 Read (5 tools)

| Tool            | Description                               |
| --------------- | ----------------------------------------- |
| `search_posts`  | Search Bluesky for posts matching a query |
| `timeline`      | The authenticated user's home timeline    |
| `notifications` | The authenticated user's notifications    |
| `profile`       | A profile by handle or DID                |
| `thread`        | A post and its replies                    |

### ✍️ Write — gated by `confirm: true` (6 tools)

| Tool          | Description                                               |
| ------------- | --------------------------------------------------------- |
| `post`        | Publish a post                                            |
| `thread_post` | Publish a self-thread (each post replies to the previous) |
| `reply`       | Reply to a post                                           |
| `like`        | Like a post                                               |
| `repost`      | Repost a post                                             |
| `follow`      | Follow an account                                         |

**Total: 11 tools** covering the core Bluesky workflow.

## 💬 Example Conversations

```
You: "What are people saying about the AT Protocol on Bluesky?"
AI: *calls search_posts → summarises the latest posts*

You: "Post 'shipped a new MCP server 🦋' to my Bluesky."
AI: *calls post with confirm: true → returns the post URL*

You: "Reply to that thread and like the original."
AI: *calls reply and like (confirm: true) → done*
```

## 🧪 Development

```sh
git clone https://github.com/kud/mcp-bsky.git
cd mcp-bsky
npm install
npm run build
npm test
```

| Script                | Description                             |
| --------------------- | --------------------------------------- |
| `npm run build`       | Compile TypeScript to `dist/`           |
| `npm run dev`         | Run from source via tsx                 |
| `npm test`            | Run the vitest suite                    |
| `npm run inspect:dev` | Launch the MCP Inspector against source |

Test against source with the Inspector:

```sh
export BLUESKY_HANDLE=you.bsky.social
export BLUESKY_APP_PASSWORD=xxxx-xxxx-xxxx-xxxx
npm run inspect:dev
```

## 🔐 Authentication

This server reads two environment variables — `@kud/bsky`'s contract, intentionally **not** `MCP_`-prefixed so the credentials are shared with `@kud/bsky-cli`:

1. Sign in at [bsky.app](https://bsky.app) → **Settings → App Passwords → Add App Password**.
2. Set `BLUESKY_HANDLE` (e.g. `you.bsky.social`) and `BLUESKY_APP_PASSWORD` (the generated app password — never your main password).

## 📊 Tech Stack

- **Runtime:** Node.js 20+
- **Language:** TypeScript (ESM)
- **Protocol:** Model Context Protocol (`@modelcontextprotocol/sdk`)
- **Core:** [`@kud/bsky`](https://github.com/kud/bsky)
- **Validation:** zod

## 📄 License

MIT — see [LICENSE](https://github.com/kud/mcp-bsky/blob/HEAD/LICENSE).

## 🙏 Acknowledgments

- [Model Context Protocol](https://modelcontextprotocol.io)
- [Bluesky / AT Protocol](https://docs.bsky.app)

<div align="center">

**Made with ❤️ for the terminal**

⭐ Star this repo if it helped you!

</div>
