import { loadLetter, loadLetters, sleep } from "./utils.js";

export async function mountDay4Scene() {
  const button = document.querySelector("#day4OpenBtn");
  const envelope = document.querySelector("#day4Envelope");
  const panel = document.querySelector("#day4LetterPanel");
  const summary = document.querySelector("#day4StorySummary");
  const day4Text = document.querySelector("#day4Letter");

  if (!button || !envelope || !panel || !summary || !day4Text) {
    return;
  }

  const [d1, d2, d3, d4] = await loadLetters([1, 2, 3, 4]);
  day4Text.textContent = d4;

  summary.innerHTML = [
    `<li><strong>Day 1:</strong> ${d1}</li>`,
    `<li><strong>Day 2:</strong> ${d2}</li>`,
    `<li><strong>Day 3:</strong> ${d3}</li>`,
  ].join("");

  button.addEventListener("click", async () => {
    if (envelope.classList.contains("open")) {
      return;
    }

    button.disabled = true;
    button.textContent = "Opening...";

    envelope.classList.add("open");
    await sleep(900);

    panel.classList.remove("hidden");
    panel.classList.add("revealed");
    button.textContent = "Forever Open";
  });
}
