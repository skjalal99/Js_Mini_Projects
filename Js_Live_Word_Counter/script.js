// Show today's date
const todayDate = new Date();
const dateEl = document.getElementById("todayDate");
dateEl.textContent = todayDate.toDateString();

// Get DOM elements
const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");
const wordCount = document.getElementById("wordCount");

// Live update as user types
textInput.addEventListener("input", () => {
  const text = textInput.value;
  charCount.textContent = text.length;
  wordCount.textContent = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
});
