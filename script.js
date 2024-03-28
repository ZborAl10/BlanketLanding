console.log('Init!');

const form = document.getElementById('tg');
const phoneSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(phoneSelector);