---
title: "qobuz-cli"
description: "Command-line interface for Qobuz — search, library, and quick-open in the app"
---

## Features

- **Fast search & metadata** — search albums, tracks, and artists; inspect album, artist, and track details.
- **Library & playlists** — list, add, and remove favourites; list, show, create, and edit playlists.
- **Media-key playback control** — `play`, `next`, and `previous` drive the Qobuz desktop app via real media keys (macOS, requires Accessibility permission).
- **Quick open & copy** — `open` deep-links straight into the Qobuz app; `url` (alias `copy-url`) copies the link to the clipboard.
- **Secure login** — stores a browser-borrowed token in the macOS Keychain; no password handling.

## Install

```sh
npm install -g @kud/qobuz-cli
```

## Usage

```console
$ qobuz login                      # connect (opens browser, paste app_id + token)
$ qobuz search "radiohead"
$ qobuz album 0634904032432
$ qobuz fav list
$ qobuz playlist create "Focus"
$ qobuz play                       # toggle play/pause in Qobuz
$ qobuz next                       # skip track
$ qobuz open album 0634904032432   # open in the Qobuz app
$ qobuz url album 0634904032432    # copy the deep link to the clipboard
```

Full command set: `login`, `logout`, `search`, `album`, `artist`, `track`, `similar`, `fav` (list/add/remove), `playlist` (list/show/create/add/remove), `url` / `copy-url`, `open`, `play`, `next`, `previous` / `prev`.

> **macOS note** — playback commands (`play`, `next`, `previous`) use real media keys and require Accessibility permission granted to your terminal. The first playback command compiles a small Swift helper via `swiftc`.

## Development

```sh
git clone https://github.com/kud/qobuz-cli.git
cd qobuz-cli
npm install
npm run dev -- search "radiohead"   # run from source via tsx
npm run build
npm run typecheck
```
