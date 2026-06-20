---
title: "mcp-opencode"
description: "🔮 Query any model configured in opencode from Claude — zero API keys, auto-starts the server"
---

```
███╗   ███╗ ██████╗██████╗      ██████╗ ██████╗ ███████╗███╗   ██╗ ██████╗ ██████╗ ██████╗ ███████╗
████╗ ████║██╔════╝██╔══██╗    ██╔═══██╗██╔══██╗██╔════╝████╗  ██║██╔════╝██╔═══██╗██╔══██╗██╔════╝
██╔████╔██║██║     ██████╔╝    ██║   ██║██████╔╝█████╗  ██╔██╗ ██║██║     ██║   ██║██║  ██║█████╗
██║╚██╔╝██║██║     ██╔═══╝     ██║   ██║██╔═══╝ ██╔══╝  ██║╚██╗██║██║     ██║   ██║██║  ██║██╔══╝
██║ ╚═╝ ██║╚██████╗██║         ╚██████╔╝██║     ███████╗██║ ╚████║╚██████╗╚██████╔╝██████╔╝███████╗
╚═╝     ╚═╝ ╚═════╝╚═╝          ╚═════╝ ╚═╝     ╚══════╝╚═╝  ╚═══╝ ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝
```

<div align="center">

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D20-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![MCP](https://img.shields.io/badge/MCP-1.0-blueviolet)](https://modelcontextprotocol.io/)
[![npm](https://img.shields.io/npm/v/@kud/mcp-opencode?color=CB3837&logo=npm)](https://www.npmjs.com/package/@kud/mcp-opencode)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**Query any opencode model from your AI assistant — no API key required.**

</div>

---

## Install

```bash
npm install -g @kud/mcp-opencode
```

Register it with your AI client (Claude Desktop, Cursor, Windsurf, VSCode, Claude Code):

```json
{
  "mcpServers": {
    "opencode": {
      "command": "npx",
      "args": ["-y", "@kud/mcp-opencode"]
    }
  }
}
```

Requires [opencode](https://opencode.ai) installed with at least one provider configured, and Node.js ≥ 20.

---

## Development

```bash
git clone https://github.com/kud/mcp-opencode.git
cd mcp-opencode
npm install
npm run build
npm test
```

Use the local `.mcp.json` to connect Claude Code to your dev build, or `npm run inspect` to open the MCP Inspector.

---

📚 **Full documentation → https://kud.io/projects/mcp-opencode/docs**
