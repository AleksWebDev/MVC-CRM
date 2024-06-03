import * as model from '../model.js';
import * as table from './table.view.js';

window.addEventListener('DOMContentLoaded', function(){
    if(model.requestDB.length > 0){
        table.fillHTML(model.requestDB);
    }
})