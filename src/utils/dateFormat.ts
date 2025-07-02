export function formatDate(data: Date): string {
  return data.toLocaleDateString("it-IT", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function formatTime(data: Date): string {
  return data.toLocaleTimeString("it-IT", {
    hour: "2-digit",
    minute: "2-digit",
  });
}
