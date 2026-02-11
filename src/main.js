import { getRevealState } from "./reveal.js";
import { mountDay1Scene } from "./scenes/day1-intro.js";

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

function applyLocks(unlockedDay) {
  const cards = document.querySelectorAll("[data-day]");
  cards.forEach((card) => {
    const day = Number(card.getAttribute("data-day"));
    const isUnlocked = day <= unlockedDay;
    card.classList.toggle("locked", !isUnlocked);

    if (!isUnlocked && day === 1) {
      const button = card.querySelector("button");
      const copy = card.querySelector(".card-copy");
      if (button) {
        button.disabled = true;
      }
      if (copy) {
        copy.textContent = "Day 1 opens on February 11.";
      }
    }
  });
}

async function init() {
  const state = getRevealState(new Date());
  updateHeader(state);
  applyLocks(state.unlockedDay);

  if (state.unlockedDay >= 1) {
    await mountDay1Scene();
  }
}

void init();
