Project Title: Word Count with Keyword Density

Description:
                          
This project allows users to input any block of text and receive instant feedback and analytics such as:
   Word count
   Character count
   Sentence count
   Paragraph count
   Estimated reading time
   Estimated speaking time
   Keyword Density

Features & Calculations:
                                                    
1. Word Count:
      Count of words using RegEx: \b\w+\b

2. Character Count:
      Total number of characters in the input including spaces.

3. Sentence Count:
      Split text using punctuation marks like (., !, ?).

4. Paragraph Count:
      Count non  empty sections separated by new lines.

5. Reading Time:
      Estimated using 275 words per minute.
      Formula: (Word Count / 275)

6. Speaking Time:
      Estimated using 180 words per minute.
      Formula: (Word Count / 180)

7. Keyword Density:
      Formula: Number of times a keyword appears / Total words.* 100
      User can choose:
     a.Number of top keywords to display
     b.Whether to include common stop words
     c.Whether to count bigrams (two  word phrases)

How to Use:
                          
1. Open index.html in a browser.
2. Paste or type your text in the textarea.
3. Toggle the "Show Keyword Density" to analyze frequent keywords.
4. Adjust settings using dropdowns and checkboxes.

Technologies Used:
                                        
   HTML5
   Bootstrap 5
   JavaScript


