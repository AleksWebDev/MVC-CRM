import * as model from '../model.js';
import * as table from './table.view.js';

window.addEventListener('DOMContentLoaded', function(){
    if(model.requestDB.length > 0){
        table.fillHTML(model.prepareRequest());
    }
    console.log(model.prepareRequest());
    table.checkStatus(model.requestDB);
})

table.tableElements.tableList.addEventListener('click', function(e){
    table.saveIdRequestLS(e.target);
})