
- Temperature Conversion:  
Requires special logic due to non-linear relationships.  
Conversions use intermediate Celsius value:  
- To convert Fahrenheit to Celsius: (value - 32) * 5/9  
- To convert Kelvin to Celsius: value - 273.15  
- Then convert Celsius to target format.

Features:  

- Category-based dynamic unit selectors  
- Real-time unit conversion output  
- Supports both metric and imperial systems  
- Error handling for invalid input  
- Simple, clean UI with Bootstrap 5  

Technologies Used:  

- HTML5  
- CSS3  
- Bootstrap 5  
- JavaScript ES6  

Usage Instructions:  
--
1. Open index.html in any modern web browser.  
2. Select the unit category (e.g., Length).  
3. Enter a numeric value.  
4. Choose From and To units.  
5. Click Convert to see the result displayed.  

Customization:  
-----
You can easily extend the code by adding more units to the units object in script.js. For more categories or advanced logic (like currency rates via API), logic can be enhanced accordingly.

