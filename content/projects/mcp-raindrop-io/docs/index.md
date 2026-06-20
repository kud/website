---
title: "mcp-raindrop-io"
description: "🔖 Connect Claude to Raindrop.io — search, save, organise and audit your bookmarks"
---

```
██████╗  █████╗ ██╗███╗   ██╗██████╗ ██████╗  ██████╗ ██████╗    ██╗ ██████╗
██╔══██╗██╔══██╗██║████╗  ██║██╔══██╗██╔══██╗██╔═══██╗██╔══██╗  ██╔╝██╔═══██╗
██████╔╝███████║██║██╔██╗ ██║██║  ██║██████╔╝██║   ██║██████╔╝ ██╔╝ ██║   ██║
██╔══██╗██╔══██║██║██║╚██╗██║██║  ██║██╔══██╗██║   ██║██╔═══╝ ██╔╝  ██║   ██║
██║  ██║██║  ██║██║██║ ╚████║██████╔╝██║  ██║╚██████╔╝██║    ██╔╝   ╚██████╔╝
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚═╝   ╚═╝    ╚═════╝
```

<div align="center">

[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20+-green?logo=node.js&logoColor=white)](https://nodejs.org/)
[![MCP](https://img.shields.io/badge/MCP-1.0-purple?logo=anthropic)](https://modelcontextprotocol.io/)
[![npm](https://img.shields.io/npm/v/@kud/mcp-raindrop-io?color=red&logo=npm)](https://www.npmjs.com/package/@kud/mcp-raindrop-io)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

</div>

> A Raindrop.io MCP server with 23 tools for managing bookmarks, collections, tags, and highlights from any MCP client.

## Install

```bash
npx --yes @kud/mcp-raindrop-io@latest
```

Add it to your MCP client with a Raindrop.io token in `MCP_RAINDROPIO_TOKEN`:

```json
{
  "mcpServers": {
    "Raindrop": {
      "command": "npx",
      "args": ["--yes", "@kud/mcp-raindrop-io@latest"],
      "env": {
        "MCP_RAINDROPIO_TOKEN": "your-token-here"
      }
    }
  }
}
```

Per-client setup (Claude Code CLI, Cursor, Windsurf, VSCode) and how to get a token are in the [documentation](https://kud.io/projects/mcp-raindrop-io/docs).

## Development

```bash
git clone https://github.com/kud/mcp-raindrop-io.git
cd mcp-raindrop-io
npm install
npm run build      # compile TypeScript
npm run dev        # run directly with tsx
npm test           # run the test suite
npm run inspect:dev # interactive MCP inspector
```

---

📚 **Full documentation → https://kud.io/projects/mcp-raindrop-io/docs**
