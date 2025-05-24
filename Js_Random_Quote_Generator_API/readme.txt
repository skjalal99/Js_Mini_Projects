Quote Display Web App

Overview:
This is a simple JavaScript project that fetches and displays random inspirational quotes from an API. The app includes a dark mode toggle and allows users to edit and save their own quotes as well.

Features:
- Fetch random quotes from a public API
- Display author and quote clearly on the page
- Dark/light mode toggle for user preference
- Editable quote input box to add custom quotes
- Save and persist quotes locally
- Clean modern interface using Bootstrap
- Responsive design

API Information:
The current project uses the Quotable API:
https://api.quotable.io/random

Sample Response:
{
  "content": "In the middle of difficulty lies opportunity.",
  "author": "Albert Einstein"
}

Note:
If you wish to replace the current quote API, make sure the new API returns a JSON structure with quote text and author name.

Example of expected structure:
{
  "content": "Your quote here",
  "author": "Author Name"
}

To change the API:
- Open `script.js`
- Locate the `fetchQuote()` function
- Replace the URL and adjust keys based on the new API's response

How to Run:
1. Open `index.html` in your browser
2. Click "New Quote" to fetch a random quote
3. Use the "Dark Mode" toggle to change themes
4. Add your own quote and click "Save Quote" to store it

License:
This project is for learning and personal use. Free to modify and extend.
