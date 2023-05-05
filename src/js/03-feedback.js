var throttle = require('lodash.throttle');
const refs = {
  inputEmail: document.querySelector('input'),
  textArea: document.querySelector('textarea'),
  sendForm: document.querySelector('.feedback-form'),
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
  if (event.target.value) {
    dataForm.email = event.target.value;
    const jsonEmail = JSON.stringify(dataForm);
    localStorage.setItem(STRORAGE_CONST, jsonEmail);
  }
}

function callbackText(event) {
  if (event.target.value) {
    dataForm.message = event.target.value;
    const jsonMessage = JSON.stringify(dataForm);
    localStorage.setItem(STRORAGE_CONST, jsonMessage);
  }
}

function checkInput() {
  const checkData = JSON.parse(localStorage.getItem(STRORAGE_CONST));
  if (checkData) {
    dataForm.email = checkData.email;
    dataForm.message = checkData.message;
    refs.inputEmail.value = checkData.email;
    refs.textArea.value = checkData.message;
  }
}

function sendFormFun(event) {
  event.preventDefault();
  //  console.log(dataForm.email);
  //  console.log(a.includes('@'));
  if (dataForm.email === '' || dataForm.message === '') {
    alert('Необхідно заповнити всі поля');
  } else {
    localStorage.removeItem(STRORAGE_CONST);
    console.log(dataForm);
    refs.sendForm.reset();
  }
}
