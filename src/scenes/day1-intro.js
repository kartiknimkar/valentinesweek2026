import { loadLetter, sleep } from "./utils.js";

function spawnHeartBurst(container, count = 22) {
  for (let i = 0; i < count; i += 1) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";

    heart.style.left = `${20 + Math.random() * 60}%`;
    heart.style.bottom = "22px";
    heart.style.animationDelay = `${Math.random() * 0.9}s`;
    heart.style.setProperty("--drift", `${-65 + Math.random() * 130}px`);

    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5200);
  }
}

export async function mountDay1Scene() {
  const growButton = document.querySelector("#growTreeBtn");
  const treeStage = document.querySelector("#treeStage");
  const letterPanel = document.querySelector("#letterPanel");
  const letterText = document.querySelector("#day1Letter");
  const petalBurst = document.querySelector("#petalBurst");

  if (!growButton || !treeStage || !letterPanel || !letterText || !petalBurst) {
    return;
  }

  letterText.textContent = await loadLetter(1);

  growButton.addEventListener("click", async () => {
    if (treeStage.classList.contains("grown")) {
      return;
    }

    growButton.disabled = true;
    growButton.textContent = "Blooming...";

    treeStage.classList.add("awaken");
    await sleep(300);
    treeStage.classList.add("grown");

    await sleep(1300);
    spawnHeartBurst(petalBurst, 30);

    await sleep(1600);
    letterPanel.classList.remove("hidden");
    letterPanel.classList.add("revealed");
    growButton.textContent = "Day 1 Complete";
  });
}
