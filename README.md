# Valentines Week Surprise

## Goal
A romantic website where you manually unlock each day whenever you want.

## Manual Unlock Control
Edit `src/reveal.js`:

```js
export const revealConfig = {
  manualUnlockedDay: 1,
};
```

Set `manualUnlockedDay` to:
- `1` => only Day 1 unlocked
- `2` => Day 1-2 unlocked
- `3` => Day 1-3 unlocked
- `4` => all days unlocked

The header badge always shows the currently unlocked day and today's date.

## Letter Files
Edit these anytime:
- `content/day1.txt`
- `content/day2.txt`
- `content/day3.txt`
- `content/day4.txt`

Long multi-line letter text is supported and auto-wraps in the letter panels.

## Local Preview
```bash
python3 -m http.server 8080
```
Then open `http://localhost:8080`.

## GitHub Pages
Live URL:
`https://kartiknimkar.github.io/valentinesweek2026/`
