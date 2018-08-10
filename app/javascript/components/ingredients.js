import Typed from 'typed.js';

function loadDynamicIngredientsText() {
  const typedField = document.getElementById('ingredients-typed-text');
  new Typed('#ingredients-typed-text', {
    strings: typedField.dataset.ingredients.split("|"),
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicIngredientsText };
