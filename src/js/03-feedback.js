var throttle = require('lodash.throttle');
const refs = {
  inputEmail: document.querySelector('input'),
  textArea: document.querySelector('textarea'),
  sendForm: document.querySelector('form'),
};

const STRORAGE_CONST = 'feedback-form-state';

refs.inputEmail.addEventListener('input', throttle(callbackEmail, 500));
refs.textArea.addEventListener('input', throttle(callbackText, 500));
refs.sendForm.addEventListener('submit', sendFormFun);

const dataForm = {
  email: '',
  message: '',
};

checkInput();

function callbackEmail(event) {
  dataForm.email = event.target.value;
  const jsonEmail = JSON.stringify(dataForm);
  localStorage.setItem(STRORAGE_CONST, jsonEmail);
}

function callbackText(event) {
  dataForm.message = event.target.value;
  const jsonMessage = JSON.stringify(dataForm);
  localStorage.setItem(STRORAGE_CONST, jsonMessage);
}

function checkInput() {
  const checkForm = JSON.parse(localStorage.getItem(STRORAGE_CONST));

  if (checkForm.email || checkForm.message) {
    refs.inputEmail.value = checkForm.email;
    refs.textArea.value = checkForm.message;
  }
}

function sendFormFun(event) {
  event.preventDefault();
  event.target.reset();
  localStorage.removeItem(STRORAGE_CONST);
}
