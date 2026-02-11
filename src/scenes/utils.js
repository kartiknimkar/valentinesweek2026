export async function loadLetter(day) {
  try {
    const response = await fetch(`content/day${day}.txt`, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const text = (await response.text()).trim();
    if (!text) {
      return `Write your Day ${day} letter in content/day${day}.txt`;
    }

    return text;
  } catch {
    return `Could not load Day ${day} letter. Edit content/day${day}.txt.`;
  }
}

export async function loadLetters(days) {
  const items = await Promise.all(days.map((day) => loadLetter(day)));
  return items;
}

export function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
