---
title: "mcp-bugzilla"
description: "🐞 Search, triage and comment on Firefox/Mozilla bugs from Claude via the Bugzilla REST API"
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

<a href="https://kud.io/projects/mcp-bugzilla">Website</a> · <a href="https://kud.io/projects/mcp-bugzilla/docs">Documentation</a>

</div>

---

## Install

```bash
npx @kud/mcp-bugzilla
```

Or register it with Claude Desktop:

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

Read-only without a key; add `MCP_BUGZILLA_API_KEY` to create, update, and
comment. Per-editor guides live in the docs.

## Development

```bash
npm install
npm run build      # compile TypeScript to dist/
npm test           # run the test suite
npm run typecheck  # type-check without emitting
npm run inspect:dev # open MCP Inspector against source
```

Follow the existing tool handler pattern: an exported arrow function registered
with `server.registerTool`. Run `npm run typecheck` and `npm test` before
committing.

## License

MIT — see [LICENSE](https://github.com/kud/mcp-bugzilla/blob/HEAD/LICENSE).

---

📚 **Full documentation → https://kud.io/projects/mcp-bugzilla/docs**
