import * as model from '../model.js';
import * as table from './table.view.js';

window.addEventListener('DOMContentLoaded', function(){
    if(model.requestDB.length > 0){
        table.fillHTML(model.prepareRequest());
    }

    const newRequestCount = model.countRequest();
    table.renderBadgeNew(newRequestCount);
});

table.tableElements.filterProduct.addEventListener('change', function(e){
    const filteredProducts = model.filterByProducts(e.target.value);
    table.fillHTML(filteredProducts);
});

table.tableElements.topStatusBar.addEventListener('click', function(e){
    const filteredRequestStatus = model.filterByStatus(e.target.dataset.value);
    table.fillHTML(filteredRequestStatus);
    table.updateTopStatusBar(e.target.dataset.value);
});

table.tableElements.tableList.addEventListener('click', function(e){
    model.saveIdRequestLS(e.target);
});

table.tableElements.leftStatusLinks.forEach(link => {
    link.addEventListener('click', function(e){
        const filteredRequestStatus = model.filterByStatus(e.target.dataset.value);
        table.fillHTML(filteredRequestStatus);
        table.updateTopStatusBar(e.target.dataset.value);
    })
})