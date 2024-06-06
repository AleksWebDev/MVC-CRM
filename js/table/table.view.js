const tableElements = {
    tableList: document.getElementById('tbody'),
    filterProduct: document.getElementById('productSelect'),
    topStatusBar: document.getElementById('topStatusBar'),
    leftStatusLinks: document.querySelectorAll('[data-role="left-status"]'),
    leftPanelNav: document.querySelector('.left-panel__navigation'),
    badgeNew: document.querySelector('#badge-new'),
}

function fillHTML(data){
    tableElements.tableList.innerHTML = '';
    data.forEach(element => {
        tableElements.tableList.innerHTML += renderTableHTML(element);
    });
}

function renderTableHTML(elem){

    const badges = {
        new: 'badge-danger',
        inwork: 'badge-warning',
        complete: 'badge-success',
    }

    return `
    <tr class='request-item'>
    <th scope="row">${elem.id}</th>
    <td>${elem.time[0]}</td>
    <td>${elem.courseName}</td>
    <td>${elem.nameSurename}</td>
    <td>${elem.email}</td>
    <td>${elem.tel}</td>
    <td>
        <div class="badge badge-pill ${badges[elem.status]}">${elem.statusName}</div>
    </td>
    <td>
        <a class='btn-edit' data-set="${elem.id}" href="edit.html">Редактировать</a>
    </td>
    </tr>
    `
}

function updateTopStatusBar(value){
    tableElements.topStatusBar.querySelectorAll('a').forEach(item => {item.classList.remove('active')});
    tableElements.topStatusBar.querySelector(`a[data-value="${value}"]`).classList.add('active');

    tableElements.leftStatusLinks.forEach(item => {item.classList.remove('active')});
    tableElements.leftPanelNav.querySelector(`a[data-value="${value}"]`).classList.add('active');
}

function renderBadgeNew(number){
    tableElements.badgeNew.innerText = number;

    if(number == 0){
        tableElements.badgeNew.classList.add('none');
    }
}

export {tableElements, fillHTML, renderTableHTML, updateTopStatusBar, renderBadgeNew};



