// Eenvoudig test script (test.js)
console.log("Test script is geladen!");

// Voeg een event listener toe om te zien of de pagina volledig is geladen
document.addEventListener('DOMContentLoaded', () => {
  console.log("Pagina is volledig geladen!");
  
  // Voeg een zichtbaar element toe aan de pagina
  const testDiv = document.createElement('div');
  testDiv.style.padding = '10px';
  testDiv.style.background = 'lightyellow';
  testDiv.style.border = '1px solid black';
  testDiv.style.position = 'fixed';
  testDiv.style.top = '10px';
  testDiv.style.right = '10px';
  testDiv.style.zIndex = '9999';
  testDiv.innerHTML = 'Test script werkt!';
  
  document.body.appendChild(testDiv);
});

// Probeer ook iets eenvoudigs met een setTimeout
setTimeout(() => {
  console.log("5 seconden na het laden van het script!");
}, 5000);