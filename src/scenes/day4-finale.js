import { loadLetters, sleep } from "./utils.js";

async function typeText(element, message, speed = 95) {
  element.textContent = "";
  element.classList.add("typing");

  for (let i = 0; i < message.length; i += 1) {
    element.textContent += message[i];
    await sleep(speed);
  }

  element.classList.remove("typing");
}

export async function mountDay4Scene() {
  const button = document.querySelector("#day4OpenBtn");
  const envelope = document.querySelector("#day4Envelope");
  const envelopeNote = document.querySelector("#day4EnvelopeNote");
  const envelopeText = document.querySelector("#day4EnvelopeText");
  const panel = document.querySelector("#day4LetterPanel");
  const summary = document.querySelector("#day4StorySummary");
  const day4Text = document.querySelector("#day4Letter");

  if (!button || !envelope || !envelopeNote || !envelopeText || !panel || !summary || !day4Text) {
    return;
  }

  const [d1, d2, d3, d4] = await loadLetters([1, 2, 3, 4]);
  day4Text.textContent = d4;
  summary.innerHTML = "";

  [
    { label: "Day 1", text: d1 },
    { label: "Day 2", text: d2 },
    { label: "Day 3", text: d3 },
  ].forEach((item) => {
    const li = document.createElement("li");
    const strong = document.createElement("strong");
    strong.textContent = `${item.label}: `;
    li.appendChild(strong);
    li.append(item.text);
    summary.appendChild(li);
  });

  button.addEventListener("click", async () => {
    if (envelope.classList.contains("open")) {
      return;
    }

    button.disabled = true;
    button.textContent = "Opening...";

    envelope.classList.add("open");
    await sleep(560);

    envelopeNote.classList.add("show");
    await typeText(envelopeText, "I love you so much.", 86);

    await sleep(450);
    panel.classList.remove("hidden");
    panel.classList.add("revealed");
    button.textContent = "Forever Open";
  });
}
