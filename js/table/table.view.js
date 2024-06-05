const tableElements = {
    tableList: document.getElementById('tbody'),
    badgeStatus: document.querySelector('.badge'),
}

function checkStatus(data){
    data.forEach(item => {
        if(item.status === 'complete'){
            tableElements.badgeStatus.classList.remove();
        }
    })
}

function fillHTML(data){
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

function saveIdRequestLS(target){
    if(target.classList.contains('btn-edit')){
        const targetId = parseInt(target.dataset.set);
        //Saving id edit element to LocalStorage
        localStorage.setItem('id', JSON.stringify(targetId));
    }
}

export {tableElements, fillHTML, renderTableHTML, saveIdRequestLS, checkStatus};



