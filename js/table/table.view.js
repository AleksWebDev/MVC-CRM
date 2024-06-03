const tableElements = {
    table: document.getElementById('tbody'),
}

function fillHTML(data){
    data.forEach(element => {
        tableElements.table.innerHTML += renderTableHTML(element);
    });
}

function renderTableHTML(elem){
    return `
    <tr>
    <th scope="row">${elem.id}</th>
    <td>${elem.time}</td>
    <td>${elem.course}</td>
    <td>${elem.nameSurename}</td>
    <td>${elem.email}</td>
    <td>${elem.tel}</td>
    <td>
        <div class="badge badge-pill badge-danger">${elem.status[0]}</div>
    </td>
    <td>
        <a data-set="${elem.id}" href="edit.html">Редактировать</a>
    </td>
    </tr>
    `
}

export {tableElements, fillHTML, renderTableHTML};



