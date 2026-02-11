async function loadDay1Letter() {
  try {
    const response = await fetch("content/day1.txt", { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const text = (await response.text()).trim();
    if (!text) {
      return "Write your Day 1 line in content/day1.txt";
    }

    return text;
  } catch {
    return "Day 1 letter could not load. Run this with a local server and edit content/day1.txt.";
  }
}

export async function mountDay1Scene() {
  const growButton = document.querySelector("#growTreeBtn");
  const treeStage = document.querySelector("#treeStage");
  const letterPanel = document.querySelector("#letterPanel");
  const letterText = document.querySelector("#day1Letter");

  if (!growButton || !treeStage || !letterPanel || !letterText) {
    return;
  }

  letterText.textContent = await loadDay1Letter();

  growButton.addEventListener("click", () => {
    if (treeStage.classList.contains("grown")) {
      return;
    }

    growButton.disabled = true;
    growButton.textContent = "Growing...";
    treeStage.classList.add("grown");

    setTimeout(() => {
      letterPanel.classList.remove("hidden");
      growButton.textContent = "Day 1 Complete";
    }, 2500);
  });
}
