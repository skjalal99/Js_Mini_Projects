const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const generateBtn = document.getElementById("generateBtn");
const toggleMode = document.getElementById("toggleMode");
const page = document.getElementById("page");

const customQuote = document.getElementById("customQuote");
const customAuthor = document.getElementById("customAuthor");
const addQuoteBtn = document.getElementById("addQuoteBtn");

let customQuotes = [];

// Fetch quote from thequoteshub API
async function fetchQuote() {
  try {
    const res = await fetch("https://thequoteshub.com/api/random-quote");
    const data = await res.json();

    quoteText.textContent = `"${data.quote}"`;
    authorText.textContent = `— ${data.author || "Unknown"}`;

  } catch (error) {
    quoteText.textContent = "Could not fetch quote. Please try again.";
    authorText.textContent = "";
  }
}

// Add user-defined custom quote
function addCustomQuote() {
  const quote = customQuote.value.trim();
  const author = customAuthor.value.trim() || "Anonymous";

  if (quote) {
    customQuotes.push({ content: quote, author });
    customQuote.value = "";
    customAuthor.value = "";
    alert("Quote added!");
  }
}

// Show either custom quote or API quote
function showRandomCustomQuote() {
  if (customQuotes.length > 0 && Math.random() < 0.3) {
    const random = customQuotes[Math.floor(Math.random() * customQuotes.length)];
    quoteText.textContent = `"${random.content}"`;
    authorText.textContent = `— ${random.author}`;
  } else {
    fetchQuote();
  }
}

// Toggle Dark/Light Mode
toggleMode.addEventListener("click", () => {
  page.classList.toggle("bg-dark");
  page.classList.toggle("text-light");
  page.classList.toggle("text-dark");
});

// Event Listeners
generateBtn.addEventListener("click", showRandomCustomQuote);
addQuoteBtn.addEventListener("click", addCustomQuote);

// Load first quote on page load
fetchQuote();
