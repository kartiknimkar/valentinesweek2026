# Valentines Week Surprise (Feb 11 - Feb 14)

## Goal
A romantic website that unlocks one chapter per day from Feb 11 to Feb 14, with each day revealing a new part of your letter.

## Current Build
All four days are now implemented with separate interactions:
- Day 1: Midnight Bloom (tree + hearts + first letter reveal)
- Day 2: Constellation Promise (lantern + star wish effect)
- Day 3: Garden of Memories (petal rain + memory orbs)
- Day 4: Final Envelope (opening animation + final letter + story recap)

## Letter Files
Edit these directly any time:
- `content/day1.txt`
- `content/day2.txt`
- `content/day3.txt`
- `content/day4.txt`

## Preview Mode (enabled now)
`src/reveal.js` is set to show all days live for preview:
- `previewMode: true`
- `forceDay: 4`

When you are ready for date-based unlock, change to:
- `previewMode: false`
- `forceDay: null`

## Date Unlock Map
- Feb 11 => Day 1
- Feb 12 => Day 1-2
- Feb 13 => Day 1-3
- Feb 14 => Day 1-4

## Local Preview
Run a static server from project root:
```bash
python3 -m http.server 8080
```
Open: `http://localhost:8080`

## GitHub Pages
Expected live URL:
`https://kartiknimkar.github.io/valentinesweek2026/`
