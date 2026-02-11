import { loadLetter, sleep } from "./utils.js";

function spawnStars(container, count = 28) {
  for (let i = 0; i < count; i += 1) {
    const star = document.createElement("span");
    star.className = "wish-star";
    star.style.left = `${8 + Math.random() * 84}%`;
    star.style.top = `${12 + Math.random() * 62}%`;
    star.style.animationDelay = `${Math.random() * 1.2}s`;
    star.style.animationDuration = `${1.6 + Math.random() * 1.4}s`;
    container.appendChild(star);

    setTimeout(() => {
      star.remove();
    }, 3600);
  }
}

function spawnFireflies(container, count = 20) {
  for (let i = 0; i < count; i += 1) {
    const fly = document.createElement("span");
    fly.className = "firefly";

    fly.style.left = `${10 + Math.random() * 80}%`;
    fly.style.top = `${35 + Math.random() * 45}%`;
    fly.style.animationDelay = `${Math.random() * 1.3}s`;
    fly.style.animationDuration = `${2.6 + Math.random() * 2}s`;
    fly.style.setProperty("--fx", `${-28 + Math.random() * 56}px`);
    fly.style.setProperty("--fy", `${-70 + Math.random() * 35}px`);

    container.appendChild(fly);

    setTimeout(() => {
      fly.remove();
    }, 5200);
  }
}

export async function mountDay2Scene() {
  const button = document.querySelector("#day2WishBtn");
  const stage = document.querySelector("#day2Stage");
  const starLayer = document.querySelector("#day2StarLayer");
  const fireflyLayer = document.querySelector("#day2FireflyLayer");
  const panel = document.querySelector("#day2LetterPanel");
  const text = document.querySelector("#day2Letter");

  if (!button || !stage || !starLayer || !fireflyLayer || !panel || !text) {
    return;
  }

  text.textContent = await loadLetter(2);

  button.addEventListener("click", async () => {
    if (stage.classList.contains("active")) {
      return;
    }

    button.disabled = true;
    button.textContent = "Lighting the sky...";

    stage.classList.add("active");
    spawnStars(starLayer, 34);

    await sleep(900);
    spawnFireflies(fireflyLayer, 28);

    await sleep(1500);
    panel.classList.remove("hidden");
    panel.classList.add("revealed");
    button.textContent = "Lantern Lit";
  });
}
