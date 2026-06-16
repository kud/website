---
title: "pcloud-cli"
description: "CLI tool for pCloud file operations — list, restore from trash and rewind"
---

<div align="center">

# pcloud-cli

[![npm version](https://img.shields.io/npm/v/@kud/pcloud-cli?style=flat-square)](https://www.npmjs.com/package/@kud/pcloud-cli)
[![Node.js >=20](https://img.shields.io/badge/node-%3E%3D20-brightgreen?style=flat-square)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue?style=flat-square)](https://www.typescriptlang.org)
[![MIT Licence](https://img.shields.io/badge/licence-MIT-green?style=flat-square)](LICENSE)

CLI tool for pCloud file operations — list, restore from trash and rewind.

</div>

## Features

- List all files currently in pCloud trash
- Restore individual files from trash by file ID
- Browse version history for any file path
- Restore a specific version to a new destination
- OAuth 2.0 authentication — browser-based, token stored locally
- Bypass stored credentials with an environment variable for CI use

## Installation

```bash
npm install -g @kud/pcloud-cli
```

## First-time Setup

Before running any command you need to authenticate against your pCloud account. This is a one-time step.

You will need a pCloud OAuth application. Create one at [pcloud.com/oauth2-apps](https://docs.pcloud.com/methods/oauth_2.0/), then expose the credentials:

```bash
export PCLOUD_CLIENT_ID=your_client_id
export PCLOUD_CLIENT_SECRET=your_client_secret
```

Then run:

```bash
pcloud login
```

This opens your browser to the pCloud authorisation page. After you approve access, pCloud redirects back to a local callback server on `localhost:3000` and the token is saved to `~/.config/pcloud/tokens.json` (mode `0600`). The CLI never sees your pCloud password.

## Usage

### Authentication

```bash
pcloud login
pcloud logout
```

### Trash

List all files in your pCloud trash:

```bash
pcloud list-trash
```

Outputs each file's ID, name, path, size, and deletion time.

Restore a file from trash by its numeric file ID:

```bash
pcloud restore-trash <fileid>
```

Example:

```bash
pcloud restore-trash 12345678
```

### Rewind

List version history events for a file path:

```bash
pcloud list-rewind <path>
```

Example:

```bash
pcloud list-rewind /Documents/report.pdf
```

Restore a specific version to a destination path:

```bash
pcloud restore-rewind <fileid> <destination>
```

Example:

```bash
pcloud restore-rewind 12345678 /Documents/report-restored.pdf
```

## Configuration

| Variable               | Required         | Description                                      |
| ---------------------- | ---------------- | ------------------------------------------------ |
| `PCLOUD_CLIENT_ID`     | For `login` only | OAuth application client ID                      |
| `PCLOUD_CLIENT_SECRET` | For `login` only | OAuth application client secret                  |
| `PCLOUD_ACCESS_TOKEN`  | Optional         | Bypasses `~/.config/pcloud/tokens.json` entirely |

When `PCLOUD_ACCESS_TOKEN` is set, no stored credentials are read or written. This is useful in CI or scripted contexts.

## Development

Run directly from source without a build step:

```bash
npm run dev -- list-trash
npm run dev -- list-rewind /some/path
```

Build compiled output to `dist/`:

```bash
npm run build
```

## API

The following pCloud API endpoints are used internally:

| Endpoint           | Purpose                                      |
| ------------------ | -------------------------------------------- |
| `oauth2_token`     | Exchange authorisation code for access token |
| `listtrash`        | List files in trash                          |
| `trash_restore`    | Restore a file from trash                    |
| `listrewindevents` | List version history for a path              |
| `file_restore`     | Restore a version to a new path              |

Full pCloud API reference: [docs.pcloud.com](https://docs.pcloud.com)

## Licence

[MIT](https://github.com/kud/pcloud-cli/blob/HEAD/LICENSE)
