class FormToJson {
  constructor(selector) {
    document.querySelector(selector).querySelectorAll('input, select, textarea').forEach(field => {
      this[field.name] = field.value;
    });
  }}


const serialize = () => {
  const formData = new FormToJson('#form'); // here goes the parse

  document.getElementById('message').classList.remove('is-hidden');
  console.clear();
  console.log('// TODO: review support to radio/checkbox and array[fields]');
  console.log(formData);
};