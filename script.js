const startDate = new Date("2026-02-18T00:00:00+03:00");
const daysEl = document.getElementById("daysTogether");
const exactEl = document.getElementById("exactCounter");
const button = document.getElementById("surpriseButton");
const surprise = document.getElementById("surpriseText");

function plural(value, label) {
  return `${value} ${label}`;
}

function updateCounter() {
  const now = new Date();
  let diff = Math.max(0, now - startDate);

  const days = Math.floor(diff / 86400000);
  diff -= days * 86400000;
  const hours = Math.floor(diff / 3600000);
  diff -= hours * 3600000;
  const minutes = Math.floor(diff / 60000);
  diff -= minutes * 60000;
  const seconds = Math.floor(diff / 1000);

  daysEl.textContent = days.toLocaleString("tr-TR");
  exactEl.textContent = `${plural(days, "gün")}, ${plural(hours, "saat")}, ${plural(minutes, "dakika")}, ${plural(seconds, "saniye")} geçti.`;
}

button.addEventListener("click", () => {
  surprise.classList.toggle("hidden");
  button.textContent = surprise.classList.contains("hidden")
    ? "Saklı cümleyi aç"
    : "Saklı cümleyi kapat";
});

updateCounter();
setInterval(updateCounter, 1000);

