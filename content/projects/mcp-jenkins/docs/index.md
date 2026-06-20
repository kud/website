---
title: "mcp-jenkins"
description: "🛠️ Drive Jenkins from Claude — trigger builds, watch pipelines, and manage CI/CD jobs & nodes"
---

```
     ██╗███████╗███╗   ██╗██╗  ██╗██╗███╗   ██╗███████╗    ███╗   ███╗ ██████╗██████╗
     ██║██╔════╝████╗  ██║██║ ██╔╝██║████╗  ██║██╔════╝    ████╗ ████║██╔════╝██╔══██╗
     ██║█████╗  ██╔██╗ ██║█████╔╝ ██║██╔██╗ ██║███████╗    ██╔████╔██║██║     ██████╔╝
██   ██║██╔══╝  ██║╚██╗██║██╔═██╗ ██║██║╚██╗██║╚════██║    ██║╚██╔╝██║██║     ██╔═══╝
╚█████╔╝███████╗██║ ╚████║██║  ██╗██║██║ ╚████║███████║    ██║ ╚═╝ ██║╚██████╗██║
 ╚════╝ ╚══════╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝╚══════╝    ╚═╝     ╚═╝ ╚═════╝╚═╝
```

<div align="center">

[![TypeScript](https://img.shields.io/badge/TypeScript-5.3+-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20+-green?logo=node.js&logoColor=white)](https://nodejs.org/)
[![MCP](https://img.shields.io/badge/MCP-1.0-purple?logo=anthropic)](https://modelcontextprotocol.io/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

<a href="https://kud.io/projects/mcp-jenkins">Website</a> · <a href="https://kud.io/projects/mcp-jenkins/docs">Documentation</a>

</div>

---

A Jenkins MCP server with 38 tools for managing jobs, builds, nodes, views, and CI/CD workflows.

## Install

```bash
claude mcp add --transport stdio --scope user jenkins \
  --env MCP_JENKINS_URL=https://your-jenkins.com \
  --env MCP_JENKINS_USER=your_username \
  --env MCP_JENKINS_API_TOKEN=your_token \
  -- npx --yes @kud/mcp-jenkins@latest
```

## Development

```bash
npm install
npm run build:watch   # Terminal 1: rebuild on changes
npm run inspect:dev   # Terminal 2: test with the MCP inspector
```

Other scripts: `npm run build`, `npm run dev`, `npm start`, `npm run typecheck`, `npm run clean`.

---

📚 **Full documentation → https://kud.io/projects/mcp-jenkins/docs**
