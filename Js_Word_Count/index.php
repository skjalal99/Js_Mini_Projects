<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Word and Letter Counter</title>
    <!-- Include Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <h1>Word and Letter Counter</h1>
        <div class="form-group">
            <label for="textInput">Enter Text:</label>
            <textarea class="form-control" id="textInput" rows="4" oninput="updateCounts()"></textarea>
        </div>
        <div class="form-group">
            <label for="wordLimit">Word Limit:</label>
            <input type="number" class="form-control" id="wordLimit" placeholder="Leave blank for no limit" oninput="updateCounts()">
        </div>
        <div class="form-group">
            <label for="letterLimit">Letter Limit:</label>
            <input type="number" class="form-control" id="letterLimit" placeholder="Leave blank for no limit" oninput="updateCounts()">
        </div>
        <div>
            <p>Number of Words: <span id="wordCount">0</span></p>
            <p>Number of Letters: <span id="letterCount">0</span></p>
            <p>Number of Sentences: <span id="sentenceCount">0</span></p>
        </div>
    </div>

    <!-- Include Bootstrap JS (jQuery required) -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></script>

<!-- Include custom JavaScript file here! -->
<script src='body.js'></script>

</body>
</html>
