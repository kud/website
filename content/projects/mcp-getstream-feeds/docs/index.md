---
title: "mcp-getstream-feeds"
description: "🔔 Debug GetStream push delivery from Claude — inspect follows, followers & activity fan-out"
---

```
 ██████╗ ███████╗████████╗███████╗████████╗██████╗ ███████╗ █████╗ ███╗   ███╗
██╔════╝ ██╔════╝╚══██╔══╝██╔════╝╚══██╔══╝██╔══██╗██╔════╝██╔══██╗████╗ ████║
██║  ███╗█████╗     ██║   ███████╗   ██║   ██████╔╝█████╗  ███████║██╔████╔██║
██║   ██║██╔══╝     ██║   ╚════██║   ██║   ██╔══██╗██╔══╝  ██╔══██║██║╚██╔╝██║
╚██████╔╝███████╗   ██║   ███████║   ██║   ██║  ██║███████╗██║  ██║██║ ╚═╝ ██║
 ╚═════╝ ╚══════╝   ╚═╝   ╚══════╝   ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝
███████╗███████╗███████╗██████╗ ███████╗
██╔════╝██╔════╝██╔════╝██╔══██╗██╔════╝
█████╗  █████╗  █████╗  ██║  ██║███████╗
██╔══╝  ██╔══╝  ██╔══╝  ██║  ██║╚════██║
██║     ███████╗███████╗██████╔╝███████║
╚═╝     ╚══════╝╚══════╝╚═════╝ ╚══════╝
```

<div align="center">

![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?logo=typescript)
![Node.js](https://img.shields.io/badge/Node.js-20+-green?logo=node.js)
![MCP](https://img.shields.io/badge/MCP-1.0-purple?logo=anthropic)
![npm](https://img.shields.io/badge/npm-%40kud%2Fmcp--getstream--feeds-red?logo=npm)
![License](https://img.shields.io/badge/License-MIT-blue)

</div>

> Investigate GetStream feed subscriptions and debug push notification delivery from your AI assistant.

## Install

```bash
npx @kud/mcp-getstream-feeds
```

Set `MCP_GETSTREAM_API_KEY` and `MCP_GETSTREAM_SECRET` in your MCP client's `env`
block. The SDK signs requests server-side automatically.

## Development

```bash
git clone https://github.com/kud/mcp-getstream-feeds.git
cd mcp-getstream-feeds
npm install
npm run dev          # run via tsx (no build step)
npm run build        # compile to dist/
npm test             # vitest
npm run inspect:dev  # MCP Inspector
```

---

📚 **Full documentation → https://kud.io/projects/mcp-getstream-feeds/docs**
