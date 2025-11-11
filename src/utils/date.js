export function getWeekBounds() {
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 domenica, 1 lunedì...
  const monday = new Date(today);
  monday.setDate(today.getDate() - ((dayOfWeek + 6) % 7));
  monday.setHours(0, 0, 0, 0);

  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  sunday.setHours(23, 59, 59, 999);

  return { monday, sunday };
}

export function formatDateIT(dateString) {
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  const d = new Date(dateString);
  const formatted = d.toLocaleDateString("it-IT", options);
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}
