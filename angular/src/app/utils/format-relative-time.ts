const UNITS = {
  year: 24 * 60 * 60 * 1000 * 365,
  month: (24 * 60 * 60 * 1000 * 365) / 12,
  day: 24 * 60 * 60 * 1000,
  hour: 60 * 60 * 1000,
  minute: 60 * 1000,
  second: 1000,
};

const LOCALE = "en";

const rtf = new Intl.RelativeTimeFormat(LOCALE, { numeric: "auto" });

function enumKeys<O extends object, K extends keyof O = keyof O>(obj: O): K[] {
  return Object.keys(obj).filter(k => Number.isNaN(+k)) as K[];
}

export function formatRelativeTime(fromDate: Date, toDate?: Date): string {
  const elapsed = fromDate.getTime() - (toDate || new Date()).getTime();

  // "Math.abs" accounts for both "past" & "future" scenarios
  for (const u of enumKeys(UNITS)) {
    if (Math.abs(elapsed) > UNITS[u] || u === "second")
      return rtf.format(Math.round(elapsed / UNITS[u]), u);
  }

  return fromDate.toLocaleDateString(LOCALE);
}
