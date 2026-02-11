import { loadLetter, sleep } from "./utils.js";

function spawnPetals(container, count = 36) {
  for (let i = 0; i < count; i += 1) {
    const petal = document.createElement("span");
    petal.className = "falling-petal";

    petal.style.left = `${Math.random() * 100}%`;
    petal.style.animationDelay = `${Math.random() * 1.1}s`;
    petal.style.animationDuration = `${3 + Math.random() * 2.3}s`;
    petal.style.transform = `rotate(${Math.random() * 360}deg)`;

    container.appendChild(petal);

    setTimeout(() => {
      petal.remove();
    }, 6000);
  }
}

export async function mountDay3Scene() {
  const button = document.querySelector("#day3BloomBtn");
  const stage = document.querySelector("#day3Stage");
  const petalLayer = document.querySelector("#day3PetalLayer");
  const panel = document.querySelector("#day3LetterPanel");
  const text = document.querySelector("#day3Letter");

  if (!button || !stage || !petalLayer || !panel || !text) {
    return;
  }

  text.textContent = await loadLetter(3);

  button.addEventListener("click", async () => {
    if (stage.classList.contains("active")) {
      return;
    }

    button.disabled = true;
    button.textContent = "Blooming memories...";

    stage.classList.add("active");
    spawnPetals(petalLayer);

    await sleep(1900);
    panel.classList.remove("hidden");
    panel.classList.add("revealed");
    button.textContent = "Garden Open";
  });
}
