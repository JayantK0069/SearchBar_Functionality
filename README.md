# Word Suggestion Search

This project is a simple word suggestion tool built with HTML, CSS, and JavaScript.  
It provides up to 5 word suggestions based on the text typed into the search bar.

## Features
- Suggests words as you type.
- Displays suggestions in a neat table format.
- Clears results when the input is empty.
- Limits results to avoid spamming the table.

## Note on Word Data
The project currently uses a hardcoded list of English words stored in an array.  
You could improve this by fetching a complete list of words from an API.  
However, I wasn’t able to find a **free API** that:
- Provides **all English words**.
- Does **not** require payment or account sign-in.

If you find such an API, you can replace the hardcoded list with a fetch request to load words dynamically.

Example placeholder:
```javascript
fetch("https://api.example.com/words")
  .then(res => res.json())
  .then(data => {
    words = data;
  });
