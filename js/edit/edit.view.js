const editElements = {
    form: document.getElementById('form'),
    id: document.getElementById('id'),
    numberEdit: document.getElementById('number'),
    dateEdit: document.getElementById('date'),
    productEdit: document.getElementById('product'),
    nameEdit: document.getElementById('name'),
    emailEdit: document.getElementById('email'),
    phoneEdit: document.getElementById('phone'),
    statusEdit: document.getElementById('status'),
    btnEdit: document.querySelector('.btn-primary'),
}

function renderFormValue(userData){
    editElements.numberEdit.textContent = userData.id;
    editElements.id.textContent = userData.id;
    editElements.dateEdit.textContent = `${userData.time[0]} ${userData.time[1]}`;
    editElements.productEdit.value = userData.course;
    editElements.nameEdit.value = userData.nameSurename;
    editElements.emailEdit.value = userData.email;
    editElements.phoneEdit.value = userData.tel;
    editElements.statusEdit.value = userData.status;
}


function getFormDataEdit(){
    const formData = {
        id: parseInt(editElements.id.innerText),
        product: editElements.productEdit.value,
        name: editElements.nameEdit.value,
        email: editElements.emailEdit.value,
        phone: editElements.phoneEdit.value,
        status: editElements.statusEdit.value,
    }
    console.log(formData);
    return formData;
}

export {editElements, renderFormValue, getFormDataEdit};