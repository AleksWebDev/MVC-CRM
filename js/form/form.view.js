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

    const date = new Date();
    const option = {
        year: 'numeric',
        month:  'numeric',
        day: 'numeric',
    }

    const currentDate = new Intl.DateTimeFormat('ru-RU', option).format(date);

    const userData = {
        id: id,
        nameSurename: elements.nameInput.value,
        tel: elements.phoneInput.value,
        email: elements.emailInput.value,
        course: elements.coursesSelect.value,
        status: ['новый', 'в работе', 'завершенный'],
        time: currentDate,
    }
    return userData;

}

export {elements, insertTestData, getValueForm}