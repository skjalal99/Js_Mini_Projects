const conversionRates = {
  meters: 1,
  kilometers: 0.001,
  feet: 3.28084,
  inches: 39.3701,
  miles: 0.000621371
};

function convert() {
  const inputValue = parseFloat(document.getElementById("inputValue").value);
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;
  const resultBox = document.getElementById("resultBox");

  if (isNaN(inputValue)) {
    resultBox.textContent = "Please enter a valid number.";
    resultBox.className = "alert alert-danger text-center";
    resultBox.style.display = "block";
    return;
  }

  const valueInMeters = inputValue / conversionRates[fromUnit];
  const convertedValue = valueInMeters * conversionRates[toUnit];

  resultBox.textContent = `${inputValue} ${fromUnit} = ${convertedValue.toFixed(4)} ${toUnit}`;
  resultBox.className = "alert alert-success text-center";
  resultBox.style.display = "block";
}
