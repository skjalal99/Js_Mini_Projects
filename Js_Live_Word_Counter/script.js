const textInput = document.getElementById("textInput");
const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");
const sentenceCount = document.getElementById("sentenceCount");
const paragraphCount = document.getElementById("paragraphCount");
const readTime = document.getElementById("readTime");
const speakTime = document.getElementById("speakTime");
const keywordTable = document.querySelector("#keywordTable tbody");

const toggleDensity = document.getElementById("toggleDensity");
const topNSelect = document.getElementById("topN");
const countBigrams = document.getElementById("countBigrams");
const includeCommon = document.getElementById("includeCommon");

const stopWords = new Set([
  "the", "is", "in", "and", "to", "a", "of", "that", "it", "on",
  "for", "with", "as", "was", "at", "by", "an", "be", "are"
]);

function formatTime(decimalMinutes) {
  const mins = Math.floor(decimalMinutes);
  const secs = Math.round((decimalMinutes - mins) * 60);
  return `${mins > 0 ? mins + ' min ' : ''}${secs} sec`;
}

function updateAnalysis() {
  const text = textInput.value.trim();
  const words = text.match(/\b\w+\b/g) || [];
  const totalWords = words.length;

  wordCount.textContent = totalWords;
  charCount.textContent = text.length;

  const sentences = text.match(/[^.!?]+[.!?]?/g) || [];
  sentenceCount.textContent = sentences.filter(s => s.trim()).length;

  const paragraphs = text.split(/\n+/).filter(p => p.trim());
  paragraphCount.textContent = paragraphs.length;

  readTime.textContent = formatTime(totalWords / 275);
  speakTime.textContent = formatTime(totalWords / 180);

  if (!toggleDensity.checked) {
    document.querySelector('.keyword-table').style.display = "none";
    return;
  } else {
    document.querySelector('.keyword-table').style.display = "block";
  }

  let frequency = {};
  const cleanedWords = words.map(w => w.toLowerCase());
  const filteredWords = cleanedWords.filter(w => includeCommon.checked || !stopWords.has(w));

  if (countBigrams.checked) {
    for (let i = 0; i < filteredWords.length - 1; i++) {
      const bigram = `${filteredWords[i]} ${filteredWords[i + 1]}`;
      frequency[bigram] = (frequency[bigram] || 0) + 1;
    }
  } else {
    filteredWords.forEach(word => {
      frequency[word] = (frequency[word] || 0) + 1;
    });
  }

  const sorted = Object.entries(frequency)
    .sort((a, b) => b[1] - a[1])
    .slice(0, parseInt(topNSelect.value));

  keywordTable.innerHTML = "";
  sorted.forEach(([word, count]) => {
    const density = totalWords ? ((count / totalWords) * 100).toFixed(2) : "0";
    keywordTable.innerHTML += `<tr><td>${word}</td><td>${count}</td><td>${density}%</td></tr>`;
  });
}

[textInput, topNSelect, toggleDensity, countBigrams, includeCommon].forEach(el => {
  el.addEventListener("input", updateAnalysis);
  el.addEventListener("change", updateAnalysis);
});

updateAnalysis();
