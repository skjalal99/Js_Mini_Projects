// Generate random hex color
const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0')}`;
};

// Event listener
document.addEventListener('DOMContentLoaded', () => {
  const colorSpan = document.getElementById('color');
  const button = document.getElementById('flipBtn');

  button.addEventListener('click', () => {
    const newColor = getRandomHexColor();
    document.body.style.backgroundColor = newColor;
    colorSpan.textContent = newColor;
    console.log(`Background changed to: ${newColor}`); //testing console
  });
});
