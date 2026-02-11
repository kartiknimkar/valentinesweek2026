import { loadLetter, sleep } from "./utils.js";

function spawnGlowBurst(container, count = 28) {
  for (let i = 0; i < count; i += 1) {
    const glow = document.createElement("span");
    glow.className = "day1-glow";

    glow.style.left = `${20 + Math.random() * 60}%`;
    glow.style.top = `${25 + Math.random() * 45}%`;
    glow.style.animationDelay = `${Math.random() * 0.8}s`;
    glow.style.animationDuration = `${2 + Math.random() * 1.2}s`;

    container.appendChild(glow);

    setTimeout(() => {
      glow.remove();
    }, 3400);
  }
}

export async function mountDay1Scene() {
  const button = document.querySelector("#growTreeBtn");
  const stage = document.querySelector("#treeStage");
  const letterPanel = document.querySelector("#letterPanel");
  const letterText = document.querySelector("#day1Letter");
  const glowLayer = document.querySelector("#day1GlowLayer");

  if (!button || !stage || !letterPanel || !letterText || !glowLayer) {
    return;
  }

  letterText.textContent = await loadLetter(1);

  button.addEventListener("click", async () => {
    if (stage.classList.contains("active")) {
      return;
    }

    button.disabled = true;
    button.textContent = "Drawing the sky...";

    stage.classList.add("active");
    await sleep(950);
    spawnGlowBurst(glowLayer, 34);

    await sleep(1550);
    letterPanel.classList.remove("hidden");
    letterPanel.classList.add("revealed");
    button.textContent = "Constellation Complete";
  });
}
