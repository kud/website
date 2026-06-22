---
title: "macos-media-keys-cli"
description: "CLI to send macOS system media keys — play/pause, next, previous, fast-forward, rewind"
---

A tiny CLI to send macOS **system media keys** — play/pause, next, previous, fast-forward, rewind — to whichever app is currently responding to them (Music, Qobuz, Spotify…).

## Install

```sh
npm install -g @kud/macos-media-keys-cli
```

macOS only.

## Usage

```sh
media-keys play       # play/pause toggle
media-keys next
media-keys previous
media-keys forward    # fast-forward within the track
media-keys rewind
```

## Accessibility permission

Sending media keys requires your terminal to have Accessibility access (System Settings → Privacy & Security → Accessibility). If it isn't granted, the command exits with a message telling you to enable it.

## Built on

[`@kud/macos-media-keys`](https://www.npmjs.com/package/@kud/macos-media-keys) — the library that does the work. This package is just the command-line surface.

## Licence

MIT
