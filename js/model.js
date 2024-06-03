import * as viewForm from './form/form.view.js';
import * as testData from './form/form.test-data.js';

const requestDB = JSON.parse(localStorage.getItem('request')) || [];

function addToDB(){
    //Creating ID for new user data
    let id;
    if(requestDB.length > 0){
        id = requestDB[requestDB.length - 1].id + 1;
    }else{
        id = 0;
    }

    const userData = {
        id: id,
        nameSurename: viewForm.elements.nameInput.value,
        tel: viewForm.elements.phoneInput.value,
        email: viewForm.elements.emailInput.value,
        course: viewForm.elements.coursesSelect.value,
    }

    //Adding new request to array DB
    requestDB.push(userData);
}

function upDateLS(){
    localStorage.setItem('request', JSON.stringify(requestDB));
}

export {requestDB, addToDB, upDateLS};