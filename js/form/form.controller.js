import * as view from './form.view.js';
import * as model from '../model.js';

window.addEventListener('DOMContentLoaded', function(){
    //Inserting test data to form inputs 
    view.insertTestData();
})

view.elements.formRegistration.addEventListener('submit', function(e){
    e.preventDefault();
    //adding new request to array DB
    model.addToDB();
    //saving all request to LocalStorage
    model.upDateLS();
})
