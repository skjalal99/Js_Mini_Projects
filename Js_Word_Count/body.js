// This function is called whenever there is an input event in the textarea or the limit input fields.
function updateCounts() {
    // Get the text from the textarea input.
    const textInput = document.getElementById("textInput").value;

    // Get the word limit and letter limit from their respective input fields or infinity by default.
    const wordLimit = parseInt(document.getElementById("wordLimit").value) || Infinity;
    const letterLimit = parseInt(document.getElementById("letterLimit").value) || Infinity;

    // Split the text into words and count them. We use a regular expression to split by spaces and remove empty entries.
    const words = textInput.split(/\s+/).filter(Boolean);
    const wordCount = words.length;

    // Count the number of letters by removing spaces and finding the length of the resulting string.
    const letterCount = textInput.replace(/\s+/g, "").length;

    // Display the word and letter counts in real-time.
    document.getElementById("wordCount").textContent = wordCount;
    document.getElementById("letterCount").textContent = letterCount;

    // Count the number of sentences using a simple period (.) as the delimiter.
    const sentences = textInput.split(".").filter(Boolean);
    const sentenceCount = sentences.length;

    // Display the sentence count.
    document.getElementById("sentenceCount").textContent = sentenceCount;

    
    // Check if the user has exceeded the specified word or letter limits and show an alert if exceeded.
    if (wordCount > wordLimit) {
        alert(`Word limit exceeded! Maximum allowed words: ${wordLimit}`);
    }

    if (letterCount > letterLimit) {
        alert(`Letter limit exceeded! Maximum allowed letters: ${letterLimit}`);
    }
}
