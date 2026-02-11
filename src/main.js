import { getRevealState } from "./reveal.js";
import { mountDay1Scene } from "./scenes/day1-intro.js";
import { mountDay2Scene } from "./scenes/day2-promise.js";
import { mountDay3Scene } from "./scenes/day3-flowers.js";
import { mountDay4Scene } from "./scenes/day4-finale.js";

function updateHeader(state) {
  const dayBadge = document.querySelector("#dayBadge");
  const previewTag = document.querySelector("#previewTag");

  if (dayBadge) {
    const dayLabel = state.unlockedDay === 0 ? "Pre-launch" : `Day ${state.unlockedDay} unlocked`;
    dayBadge.textContent = `${dayLabel} | ${state.labelDate}`;
  }

  if (previewTag) {
    previewTag.classList.toggle("hidden", !state.isPreview);
  }
}

function unlockCopy(day) {
  if (day === 2) return "Locked for now.";
  if (day === 3) return "Locked for now.";
  if (day === 4) return "Locked for now.";
  return "Locked for now.";
}

function applyLocks(unlockedDay) {
  const cards = document.querySelectorAll("[data-day]");

  cards.forEach((card) => {
    const day = Number(card.getAttribute("data-day"));
    const isUnlocked = day <= unlockedDay;
    card.classList.toggle("locked", !isUnlocked);

    const button = card.querySelector("button");
    const copy = card.querySelector(".card-copy");

    if (button) {
      button.disabled = !isUnlocked;
    }

    if (copy && !isUnlocked) {
      copy.textContent = unlockCopy(day);
    }
  });
}

async function init() {
  const state = getRevealState(new Date());
  updateHeader(state);
  applyLocks(state.unlockedDay);

  if (state.unlockedDay >= 1) await mountDay1Scene();
  if (state.unlockedDay >= 2) await mountDay2Scene();
  if (state.unlockedDay >= 3) await mountDay3Scene();
  if (state.unlockedDay >= 4) await mountDay4Scene();
}

void init();
