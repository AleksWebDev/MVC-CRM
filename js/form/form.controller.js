import * as view from './form.view.js';
import * as testData from './form.test-data.js';
import * as model from '../model.js';

// Filling input by test data
window.addEventListener('DOMContentLoaded', function(){
    const randomUserTest = testData.getRandomIndex();
    view.insertTestData(randomUserTest)
})

view.elements.formRegistration.addEventListener('submit', function(e){
    e.preventDefault();

    //Getting values from form inputs
    const dataObj = view.getValueForm(model.requestDB)
    model.addNewRequestToDB(dataObj);

    // Filling input by test data
    const randomUserTest = testData.getRandomIndex();
    view.insertTestData(randomUserTest)
})
