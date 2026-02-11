# Valentines Week Surprise (Feb 11 - Feb 14)

## Project Goal
Build one romantic website that evolves daily from **Feb 11** to **Feb 14**.
Each day unlocks a better experience (animation, message, interaction), ending with the full surprise on Feb 14.

## Core Idea
- Single website, 4 phases (Day 1 to Day 4).
- Previous day content can be hidden or collapsed.
- New day content is revealed automatically (by date) or manually (toggle for testing).
- You will add your own letter lines daily.

## Daily Experience Plan
1. **Feb 11 (Day 1):** Soft intro scene + first short letter piece.
2. **Feb 12 (Day 2):** Interactive element (example: click seed/tree, branch growth animation) + second letter piece.
3. **Feb 13 (Day 3):** Richer visuals (flowers, particles, sound optional) + third letter piece.
4. **Feb 14 (Day 4):** Final reveal (big message/card/surprise screen) + full combined emotional payoff.

## Letter Workflow (Manual by You)
- Keep letter text in separate files so you can edit quickly each day.
- Example:
  - `content/day1.txt`
  - `content/day2.txt`
  - `content/day3.txt`
  - `content/day4.txt`
- App loads only unlocked text for that date.

## Suggested Project Structure
```txt
valentinesweek/
  README.md
  index.html
  src/
    main.js
    style.css
    reveal.js            # date-based unlock + hide/show old sections
    scenes/
      day1-intro.js
      day2-tree.js
      day3-flowers.js
      day4-finale.js
  content/
    day1.txt
    day2.txt
    day3.txt
    day4.txt
  assets/
    images/
    audio/
```

## Reveal Logic
- Date map:
  - Feb 11 => unlock Day 1
  - Feb 12 => unlock Day 1-2
  - Feb 13 => unlock Day 1-3
  - Feb 14 => unlock Day 1-4
- Optional config flag in `reveal.js`:
  - `previewMode = true` lets you test future days.
  - `forceDay = 1|2|3|4` for local preview.

## What I Can Build For You
- A polished landing page with custom typography/colors.
- Tree/flower growth animation interaction.
- Daily section lock/unlock system with smooth transitions.
- Easy text-injection system so you can paste your daily letter lines without touching core code.

## Build Steps (Brief)
1. Create base page layout and visual theme.
2. Implement day unlock engine (`reveal.js`).
3. Add Day 1 scene and letter rendering.
4. Add Day 2 interaction (tree growth).
5. Add Day 3 enhanced animation layer.
6. Add Day 4 grand final reveal.
7. Add preview/testing controls.
8. Final polish (mobile responsiveness, timing, performance).

## Immediate Next Step
Start with Day 1 foundation: base UI + reveal system + first letter file.
