export const revealConfig = {
  // Manual unlock mode (no auto date-based unlock)
  // Set this to 1,2,3,4 whenever you want to unlock a new day.
  manualUnlockedDay: 3,
};

function clampDay(value) {
  return Math.min(4, Math.max(0, value));
}

export function getRevealState(now = new Date()) {
  const unlockedDay = clampDay(Number(revealConfig.manualUnlockedDay) || 0);

  return {
    unlockedDay,
    source: "manual",
    isPreview: false,
    labelDate: now.toLocaleDateString(undefined, {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    }),
  };
}
