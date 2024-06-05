import * as model from '../model.js';
import * as viewEdit from './edit.view.js';

window.addEventListener('DOMContentLoaded', function(){
    const target = model.getRequestID();
    viewEdit.renderFormValue(target);
})


viewEdit.editElements.form.addEventListener('submit', function(e){
    e.preventDefault();
    const formDate =  viewEdit.getFormDataEdit();
    model.updateRequest(formDate);
    window.location = '/table.html';
})


