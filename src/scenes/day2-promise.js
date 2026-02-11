import { loadLetter, sleep } from "./utils.js";

function spawnStars(container, count = 28) {
  for (let i = 0; i < count; i += 1) {
    const star = document.createElement("span");
    star.className = "wish-star";
    star.style.left = `${8 + Math.random() * 84}%`;
    star.style.top = `${12 + Math.random() * 62}%`;
    star.style.animationDelay = `${Math.random() * 1.4}s`;
    star.style.animationDuration = `${1.8 + Math.random() * 1.6}s`;
    container.appendChild(star);

    setTimeout(() => {
      star.remove();
    }, 4000);
  }
}

export async function mountDay2Scene() {
  const button = document.querySelector("#day2WishBtn");
  const stage = document.querySelector("#day2Stage");
  const starLayer = document.querySelector("#day2StarLayer");
  const panel = document.querySelector("#day2LetterPanel");
  const text = document.querySelector("#day2Letter");

  if (!button || !stage || !starLayer || !panel || !text) {
    return;
  }

  text.textContent = await loadLetter(2);

  button.addEventListener("click", async () => {
    if (stage.classList.contains("active")) {
      return;
    }

    button.disabled = true;
    button.textContent = "Making a wish...";

    stage.classList.add("active");
    spawnStars(starLayer, 40);

    await sleep(1850);
    panel.classList.remove("hidden");
    panel.classList.add("revealed");
    button.textContent = "Wish Sent";
  });
}
