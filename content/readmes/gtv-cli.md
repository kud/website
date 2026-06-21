---
title: "gtv-cli"
description: "Control your Google TV from the CLI via the Android TV Remote protocol"
---

## Features

- **Fullscreen TUI remote** — pair on first run; subsequent launches open an interactive Ink remote directly, no extra steps
- **App launcher** — press `a` in the TUI to open an app picker (Netflix, YouTube, Plex, Prime Video, Put.io, Arte, and more); also available as `gtv apps` and `gtv app <name|url>` from the shell
- **Keyboard typing** — press `Tab` to enter keyboard mode and type directly into TV text fields via IME injection; sends text the Android TV Remote protocol would otherwise leave inaccessible
- **Multiple TVs** — pair as many devices as you like and switch between them with `gtv switch` or browse them with `gtv devices`; mDNS discovery finds devices on the local network automatically
- **Tabbed Preferences** — press `o` to open the Preferences modal; General tab sets icon style (text, Nerd Font, or emoji), Apps tab enables or disables which apps appear in the launcher
- **Protocol debugging** — `gtv debug` or the global `--debug` flag streams live protocol logs; useful when diagnosing IME, pairing, or connectivity issues
- **One-shot commands** — send individual key presses, media controls, or deep-link app launches straight from the shell without opening the TUI; check device health with `gtv status` or `gtv doctor`

## Install

```sh
npm install -g @kud/gtv-cli
```

Requires Node.js ≥ 22.

## Usage

```console
$ gtv                        # open the fullscreen remote (pairs on first run)
$ gtv pair                   # pair or re-pair with a Google TV
$ gtv unpair                 # remove a saved pairing (prompts for selection)
$ gtv discover --select      # scan the network via mDNS and save a device
$ gtv switch [name]          # switch the active Google TV
$ gtv devices                # list all paired Google TVs
$ gtv status                 # check pairing and connectivity
$ gtv doctor                 # run detailed diagnostics
$ gtv debug                  # stream live protocol logs
$ gtv apps                   # open the app picker (Ink menu)
$ gtv app netflix            # launch an app by catalog name
$ gtv app https://…          # launch an app by deep link or URL
$ gtv home / back / select   # D-pad and navigation keys
$ gtv up / down / left / right
$ gtv vol up|down|mute       # volume control
$ gtv play / stop / next / prev / fwd / rwd
$ gtv power / mute / menu / search / input / sleep / wakeup
$ gtv key <name>             # send any key by name
$ gtv --debug <command>      # enable protocol logging for any command
```

Inside the TUI: arrow keys and Enter navigate the remote buttons; `a` opens the app launcher; `Tab` switches to keyboard mode for text input; `o` opens the Preferences modal (icon style, active device, enabled apps); `q` quits.

## Development

```sh
git clone https://github.com/kud/gtv-cli.git
cd gtv-cli
npm install
npm run dev          # run from source with tsx
npm run typecheck    # type-check without emitting
npm run build        # compile to dist/ via tsup
```
