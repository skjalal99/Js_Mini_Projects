const quotes = [
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Do something today that your future self will thank you for.",
  "Believe you can and you're halfway there.",
  "The best way to get started is to quit talking and begin doing.",
  "It always seems impossible until it’s done.",
  "Success is not in what you have, but who you are.",
  "Dream big and dare to fail."
];

const quoteElement = document.getElementById("quote");
const button = document.getElementById("generateBtn");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
});
