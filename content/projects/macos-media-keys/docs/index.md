---
title: "macos-media-keys"
description: "Send macOS system media keys (play/pause, next, previous, fast-forward, rewind) from Node"
---

Send macOS **system media keys** — play/pause, next, previous, fast-forward, rewind — from Node. These are the same events your keyboard's media keys emit, so they control whichever app is currently responding to them (Music, Qobuz, Spotify…).

## Install

```sh
npm install @kud/macos-media-keys
```

macOS only.

## Usage

```ts
import { sendMediaKey } from "@kud/macos-media-keys"

await sendMediaKey("play") // play/pause toggle
await sendMediaKey("next")
await sendMediaKey("previous")
await sendMediaKey("forward") // fast-forward within the track
await sendMediaKey("rewind")
```

## How it works

The package ships a small Swift source file that posts `NX_KEYTYPE_*` system-defined events via `CGEvent`. On first call it compiles the source with `swiftc`, caches the binary, and execs it — no prebuilt binaries, zero npm dependencies.

## Accessibility permission

Posting media keys requires the **calling process** to have Accessibility access (System Settings → Privacy & Security → Accessibility). If it isn't granted, `sendMediaKey` rejects with a message telling you to enable it.

## Licence

MIT
