// ================by button===============

     // Get all buttons with the class "color-button"
     const colorButtons = document.querySelectorAll('.color-button');

     // Add a click event listener to each button
     colorButtons.forEach(button => {
         button.addEventListener('click', () => {
             // Get the color value from the button's data attribute
             const color = button.getAttribute('data-color');
console.log('this is '+color);
             // Change the background color of the body
            document.body.style.backgroundColor = color;
         });
     });

// ================by dropdown===============

     // Get the list of items by its ID
     const itemList = document.getElementById('itemList');

     // Add a click event listener to each anchor tag inside the list
     itemList.querySelectorAll('a.dropdown-item').forEach(anchor => {
         anchor.addEventListener('click', (event) => {
             // Prevent the default behavior of anchor tags (e.g., navigating to a new page)
             event.preventDefault();

             // Get the color value from the anchor's data attribute
             const color = anchor.getAttribute('data-color');
           
             // Change the background color of the body
             document.body.style.backgroundColor = color;
         });
     });


     // ================by select button===============

     // Get the Select dropdown by its ID
     const colorSelect = document.getElementById('colorSelect');

     // Get the Apply button by its ID
     const applyButton = document.getElementById('applyButton');

     // Add a click event listener to the Apply button
     applyButton.addEventListener('click', () => {
         // Get the selected color from the dropdown
         const selectedColor = colorSelect.value;

         // Change the background color of the body
         document.body.style.backgroundColor = selectedColor;
     });
 



