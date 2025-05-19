const clockElement = document.getElementById("clock");
const dateElement = document.getElementById("date");

function updateClockAndDate() {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  const day = now.toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  clockElement.textContent = `${hours}:${minutes}:${seconds}`;
  dateElement.textContent = day;

  console.log("Time updated:", clockElement.textContent);
}

// Initial load //
updateClockAndDate();

// Update every second //
setInterval(updateClockAndDate, 1000);
