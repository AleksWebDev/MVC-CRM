const elements = {
    formRegistration: document.getElementById('form'),
    nameInput: document.getElementById('name'),
    phoneInput: document.getElementById('phone'),
    emailInput: document.getElementById('email'),
    coursesSelect: document.getElementById('product'),
    formGroup: document.querySelectorAll('.form-group .form-control'),
}

function insertTestData(data){
    elements.nameInput.value = data.nameSurename;
    elements.phoneInput.value = '+' + parseInt(data.tel);
    elements.emailInput.value  = data.email;
    elements.coursesSelect.value = data.course;
}

function getValueForm(DB){

    let id;
    if(DB.length > 0){
        id = DB[DB.length - 1].id + 1;
    }else{
        id = 1;
    }

    const dateDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();

    const userData = {
        id: id,
        nameSurename: elements.nameInput.value,
        tel: elements.phoneInput.value,
        email: elements.emailInput.value,
        course: elements.coursesSelect.value,
        status: 'new',
        time: [dateDate, currentTime],
    }
    return userData;

}

export {elements, insertTestData, getValueForm}