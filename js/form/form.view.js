import * as testData from './form.test-data.js';

// DOM Element of Form
const elements = {
    formRegistration: document.getElementById('form'),
    nameInput: document.getElementById('name'),
    phoneInput: document.getElementById('phone'),
    emailInput: document.getElementById('email'),
    coursesSelect: document.getElementById('product'),
    formGroup: document.querySelectorAll('.form-group .form-control'),
}

// Isert test data to the form's input
function insertTestData(){
    const randUser = testData.getRandomIndex();
    elements.nameInput.value = randUser.nameSurename;
    elements.phoneInput.value = '+' + parseInt(randUser.tel);
    elements.emailInput.value  = randUser.email;
    elements.coursesSelect.value = randUser.course;
}

export {insertTestData, elements};