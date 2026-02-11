# Valentines Week Surprise (Feb 11 - Feb 14)

## Project Goal
Build one romantic website that evolves daily from **Feb 11** to **Feb 14**.
Each day unlocks a better experience, ending in the full reveal on Feb 14.

## Current Status
- Day 1 is implemented with a cinematic romantic reveal (interactive bloom + letter reveal).
- Day 2-Day 4 are intentionally locked placeholders for now.
- Letter content is loaded from text files in `content/`.

## Letter Workflow
Edit these files any time:
- `content/day1.txt`
- `content/day2.txt`
- `content/day3.txt`
- `content/day4.txt`

Only unlocked days are shown in the UI.

## Day 1 Preview (active now)
`src/reveal.js` is currently set to always preview Day 1:
- `previewMode: true`
- `forceDay: 1`

This keeps the live site focused on Day 1 while Day 2-Day 4 are being built.

## Re-enable Date-based Unlock Later
When all day scenes are ready, update `src/reveal.js`:
- set `previewMode: false`
- set `forceDay: null`

Then day unlocks follow this map:
- Feb 11 => Day 1
- Feb 12 => Day 1-2
- Feb 13 => Day 1-3
- Feb 14 => Day 1-4

## Local Preview
Run any static server from the project root (example):
```bash
python3 -m http.server 8080
```
Then open `http://localhost:8080`.

## Deployment
This repo is designed to be hosted on GitHub Pages.

Expected URL:
`https://kartiknimkar.github.io/valentinesweek2026/`
