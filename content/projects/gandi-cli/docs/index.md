---
title: "gandi-cli"
description: "Modern CLI for the Gandi v5 REST API"
---

```
 ██████╗  █████╗ ███╗  ██╗██████╗ ██╗      ██████╗██╗     ██╗
██╔════╝ ██╔══██╗████╗ ██║██╔══██╗██║     ██╔════╝██║     ██║
██║  ███╗███████║██╔██╗██║██║  ██║██║     ██║     ██║     ██║
██║   ██║██╔══██║██║╚████║██║  ██║██║     ██║     ██║     ██║
╚██████╔╝██║  ██║██║ ╚███║██████╔╝███████╗╚██████╗███████╗██║
 ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚══╝╚═════╝ ╚══════╝ ╚═════╝╚══════╝╚═╝
```

<div align="center">

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![npm](https://img.shields.io/badge/npm-%40kud%2Fgandi--cli-CB3837?style=flat-square&logo=npm&logoColor=white)
![MIT](https://img.shields.io/badge/licence-MIT-22C55E?style=flat-square)

**A modern CLI for the Gandi v5 REST API.**

[Features](#-features) • [Quick Start](#-quick-start) • [CLI Reference](#-cli-reference) • [Development](#-development) • [Authentication](#-authentication)

</div>

---

## 🌟 Features

- 🌐 **Domain Management** — List all registered domains with expiry dates and statuses, and renew them for one or more years
- 🔧 **Full DNS Control** — List, create, update, and delete LiveDNS records with support for custom TTLs and all standard record types
- 🩺 **Permission Doctor** — Built-in `gandi doctor` checks your PAT scopes and shows exactly which commands are unlocked
- 🔐 **PAT Authentication** — Uses Gandi Personal Access Tokens with fine-grained scope control — only grant what you need
- ⚡ **Rich Terminal UI** — Built with Ink and React for spinners, aligned tables, and clean formatted output
- 📦 **Zero Config** — Set one env var or add one line to a TOML file and you're ready to go

---

## 🚀 Quick Start

### 1. Install

```sh
npm install -g @kud/gandi-cli
```

### 2. Authenticate

Generate a **Personal Access Token** at **gandi.net → Account → Partage → Créer un jeton d'accès personnel** then export it:

```sh
export GANDI_API_KEY="your-token-here"
```

### 3. Check permissions

```sh
gandi doctor
```

```
Gandi CLI
Expires in 29 days · 1 entity

✓  domain:view   gandi domain list
✗  domain:renew  gandi domain renew
✓  domain:tech   gandi dns list / set / delete
```

### 4. Manage domains and DNS

```sh
gandi domain list

gandi dns list example.com
gandi dns set example.com A www 1.2.3.4 --ttl 300
gandi dns delete example.com A www
```

---

## 📖 CLI Reference

| Command                                                        | Description                                   |
| -------------------------------------------------------------- | --------------------------------------------- |
| `gandi doctor`                                                 | Check token info and permissions              |
| `gandi domain list`                                            | List all domains with expiry dates and status |
| `gandi domain renew <domain>`                                  | Renew a domain for 1 year                     |
| `gandi domain renew <domain> --duration <years>`               | Renew for a specified number of years         |
| `gandi dns list <domain>`                                      | List all DNS records for a domain             |
| `gandi dns set <domain> <type> <name> <value>`                 | Create or replace a DNS record                |
| `gandi dns set <domain> <type> <name> <value> --ttl <seconds>` | Set with a custom TTL in seconds              |
| `gandi dns delete <domain> <type> <name>`                      | Delete a DNS record                           |

---

## 🔧 Development

**Project Structure**

```
gandi-cli/
├── src/
│   ├── commands/
│   │   ├── doctor.tsx
│   │   ├── domain-list.tsx
│   │   ├── domain-renew.tsx
│   │   ├── dns-list.tsx
│   │   ├── dns-set.tsx
│   │   └── dns-delete.tsx
│   ├── components/
│   │   ├── error.tsx
│   │   ├── spinner-action.tsx
│   │   └── table.tsx
│   ├── lib/
│   │   ├── api.ts
│   │   └── config.ts
│   ├── types/
│   │   └── gandi.ts
│   └── index.tsx
├── dist/
├── package.json
└── README.md
```

**Scripts**

| Script          | Description                                  |
| --------------- | -------------------------------------------- |
| `npm run build` | Compile TypeScript to `dist/`                |
| `npm run dev`   | Run directly with tsx — no build step needed |
| `npm run start` | Run compiled output from `dist/`             |

**Workflow**

```sh
git clone https://github.com/kud/gandi-cli.git
cd gandi-cli
npm install
npm run dev -- doctor
```

---

## 🔒 Authentication

gandi-cli uses **Personal Access Tokens (PATs)** — not legacy API keys.

Generate a token at **gandi.net → Account → Partage → Créer un jeton d'accès personnel** with only the permissions you need:

| Permission                                      | Required for                        |
| ----------------------------------------------- | ----------------------------------- |
| Voir la liste de vos domaines                   | `gandi domain list`                 |
| Gérer le renouvellement de vos domaines         | `gandi domain renew`                |
| Accéder aux enregistrements DNS de vos domaines | `gandi dns list`                    |
| Gérer les enregistrements DNS de vos domaines   | `gandi dns set`, `gandi dns delete` |

**Via environment variable** (takes precedence):

```sh
export GANDI_API_KEY="your-token-here"
```

**Via config file** (`~/.config/gandi/config.toml`):

```toml
api_key = "your-token-here"
```

- ✅ Only grant permissions each command actually needs
- ✅ Set an expiry date on the token
- ✅ Use `gandi doctor` to verify scopes before running commands

---

## 🏗 Tech Stack

| Component     | Details                |
| ------------- | ---------------------- |
| Runtime       | Node.js ≥ 20           |
| Language      | TypeScript 5.x (ESM)   |
| Terminal UI   | Ink 7 + React 19       |
| CLI Framework | Commander.js 12        |
| Config        | smol-toml              |
| Package       | npm · `@kud/gandi-cli` |

---

<div align="center">

MIT © [kud](https://github.com/kud) — Made with ❤️ for the terminal

⭐ Star this repo if it saves you time · [↑ Back to top](#)

</div>
