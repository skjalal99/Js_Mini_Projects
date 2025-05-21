const clockElement = document.getElementById("clock");
const dateElement = document.getElementById("date");
const timeFormatToggle = document.getElementById("timeFormatToggle");
const dateFormatSelect = document.getElementById("dateFormatSelect");

const showDay = document.getElementById("showDay");
const showMonth = document.getElementById("showMonth");
const showYear = document.getElementById("showYear");
const customDateOptions = document.getElementById("customDateOptions");

let is24HourFormat = false; // default to 12-hour
let dateFormat = "long";    // default date format

function updateClockAndDate() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  let timeString;

  if (is24HourFormat) {
    timeString = `${String(hours).padStart(2, "0")}:${minutes}:${seconds}`;
  } else {
    const amPm = hours >= 12 ? " PM" : " AM";
    hours = hours % 12 || 12;
    timeString = `${String(hours).padStart(2, "0")}:${minutes}:${seconds}${amPm}`;
  }

  clockElement.textContent = timeString;

  let dateString;
  switch (dateFormat) {
    case "short":
      dateString = now.toLocaleDateString("en-GB");
      break;
    case "minimal":
      dateString = `${now.getDate()} ${now.toLocaleString("default", {
        month: "short",
      })} ${now.getFullYear()}`;
      break;
    case "custom":
      const parts = [];
      if (showDay.checked) {
        parts.push(now.getDate());
      }
      if (showMonth.checked) {
        parts.push(now.toLocaleString("default", { month: "long" }));
      }
      if (showYear.checked) {
        parts.push(now.getFullYear());
      }
      dateString = parts.join(" ");
      break;
    default:
      dateString = now.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
  }

  dateElement.textContent = dateString;
}

// Event Listeners
timeFormatToggle.addEventListener("change", () => {
  is24HourFormat = timeFormatToggle.checked;
  updateClockAndDate();
});

dateFormatSelect.addEventListener("change", (e) => {
  dateFormat = e.target.value;
  customDateOptions.classList.toggle("d-none", dateFormat !== "custom");
  updateClockAndDate();
});

[showDay, showMonth, showYear].forEach((checkbox) =>
  checkbox.addEventListener("change", updateClockAndDate)
);

// Initialize
updateClockAndDate();
setInterval(updateClockAndDate, 1000);
