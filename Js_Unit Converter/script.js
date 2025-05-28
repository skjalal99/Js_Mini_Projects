const units = {
  length: {
    meters: 1,
    kilometers: 0.001,
    miles: 0.000621371,
    feet: 3.28084,
    inches: 39.3701
  },
  weight: {
    kilograms: 1,
    grams: 1000,
    pounds: 2.20462,
    ounces: 35.274
  },
  temperature: ['celsius', 'fahrenheit', 'kelvin'],
  speed: {
    'km/h': 1,
    'm/s': 0.277778,
    'mph': 0.621371
  },
  area: {
    'sq meters': 1,
    'sq kilometers': 0.000001,
    'sq miles': 3.861e-7,
    'acres': 0.000247105,
    'hectares': 0.0001
  },
  volume: {
    liters: 1,
    milliliters: 1000,
    gallons: 0.264172,
    'cubic meters': 0.001
  },
  time: {
    seconds: 1,
    minutes: 1 / 60,
    hours: 1 / 3600,
    days: 1 / 86400
  }
};

function updateUnits() {
  const category = document.getElementById("categorySelect").value;
  const from = document.getElementById("fromUnit");
  const to = document.getElementById("toUnit");

  from.innerHTML = '';
  to.innerHTML = '';

  if (category === "temperature") {
    units.temperature.forEach(unit => {
      from.innerHTML += `<option value="${unit}">${capitalize(unit)}</option>`;
      to.innerHTML += `<option value="${unit}">${capitalize(unit)}</option>`;
    });
  } else {
    const unitList = Object.keys(units[category]);
    unitList.forEach(unit => {
      from.innerHTML += `<option value="${unit}">${capitalize(unit)}</option>`;
      to.innerHTML += `<option value="${unit}">${capitalize(unit)}</option>`;
    });
  }
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function convert() {
  const category = document.getElementById("categorySelect").value;
  const input = parseFloat(document.getElementById("inputValue").value);
  const from = document.getElementById("fromUnit").value;
  const to = document.getElementById("toUnit").value;
  const resultBox = document.getElementById("resultBox");

  if (isNaN(input)) {
    resultBox.textContent = "Enter a valid number.";
    resultBox.className = "alert alert-danger";
    resultBox.style.display = "block";
    return;
  }

  let result;

  if (category === "temperature") {
    result = convertTemperature(input, from, to);
  } else {
    const base = input / units[category][from];
    result = base * units[category][to];
  }

  resultBox.textContent = `${input} ${from} = ${result.toFixed(4)} ${to}`;
  resultBox.className = "alert alert-success";
  resultBox.style.display = "block";
}

function convertTemperature(value, from, to) {
  if (from === to) return value;
  let tempInCelsius;

  // Convert to Celsius first
  if (from === "fahrenheit") {
    tempInCelsius = (value - 32) * 5/9;
  } else if (from === "kelvin") {
    tempInCelsius = value - 273.15;
  } else {
    tempInCelsius = value;
  }

  // Convert from Celsius
  if (to === "fahrenheit") {
    return (tempInCelsius * 9/5) + 32;
  } else if (to === "kelvin") {
    return tempInCelsius + 273.15;
  } else {
    return tempInCelsius;
  }
}

// Initialize on load
window.onload = updateUnits;
