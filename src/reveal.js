const DAY_START = { month: 1, day: 11 };
const DAY_END = { month: 1, day: 14 };

export const revealConfig = {
  previewMode: false,
  forceDay: null,
};

function clampDay(value) {
  return Math.min(4, Math.max(0, value));
}

function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  const preview = params.get("preview") === "1";
  const dayParam = Number(params.get("day"));
  return {
    preview,
    day: Number.isFinite(dayParam) ? dayParam : null,
  };
}

function getDateDayIndex(now) {
  const year = now.getFullYear();
  const start = new Date(year, DAY_START.month, DAY_START.day);
  const end = new Date(year, DAY_END.month, DAY_END.day, 23, 59, 59, 999);

  if (now < start) {
    return 0;
  }

  if (now > end) {
    return 4;
  }

  const diffMs = now.getTime() - start.getTime();
  const dayOffset = Math.floor(diffMs / (24 * 60 * 60 * 1000));
  return clampDay(dayOffset + 1);
}

export function getRevealState(now = new Date()) {
  const query = getQueryParams();
  const usePreview = revealConfig.previewMode || query.preview;
  const forced = revealConfig.forceDay ?? query.day;

  let unlockedDay = getDateDayIndex(now);
  let source = "date";

  if (usePreview && forced !== null && !Number.isNaN(forced)) {
    unlockedDay = clampDay(Math.floor(forced));
    source = "preview";
  }

  return {
    unlockedDay,
    source,
    isPreview: source === "preview",
    labelDate: now.toLocaleDateString(undefined, {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    }),
  };
}
