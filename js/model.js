//Common array for all requests
const requestDB = JSON.parse(localStorage.getItem('request')) || [];

//function for saving new request to LS
function upDateLS(){
    localStorage.setItem('request', JSON.stringify(requestDB));
}

//Pushing new request to DB
function addNewRequestToDB(data){
    requestDB.push(data);
    //Saving new request in LS
    upDateLS();
}

// Getting id elements to insert value in edit form
function getRequestID(){
    // Getting id from LS
    if(localStorage.getItem('id') !== null){
        const targetID = JSON.parse(localStorage.getItem('id'));
        let targetElem;
        requestDB.forEach((elem) => {
            if(elem.id === targetID){
                targetElem = elem;
            }
        });
        //assigning the received element from requestDB to variable and returning it for rendering
        return targetElem;
    }
}

function updateRequest(data){
    const targetElem = getRequestID(data);
    
    targetElem.nameSurename = data.name;
    targetElem.tel = data.phone;
    targetElem.email = data.email;
    targetElem.course = data.product;
    targetElem.status = data.status;

    upDateLS();
}

//declination for products
const products = {
    'course-html': 'Курс по верстке',
    'course-js': 'Курс по JavaScript',
    'course-vue': 'Курс по Vue',
    'course-php': 'Курс по PhP',
    'course-wordpress': 'Курс по Wordpress',
}

//declination for status
const statuses = {
    'new': 'Новая',
    'inwork': 'В работе',
    'complete': 'Завершенна',
}

function prepareRequest(){

    return requestDB.map((item) => {
        return {
            ...item,
            courseName: products[item.course],
            statusName: statuses[item.status],
        }
    })
}

function saveIdRequestLS(target){
    if(target.classList.contains('btn-edit')){
        const targetId = parseInt(target.dataset.set);
        //Saving id edit element to LocalStorage
        localStorage.setItem('id', JSON.stringify(targetId));
    }
}

//--- Filter by products
function filterByProducts(target){
    let products;
    if(target === 'all'){
        return prepareRequest(requestDB);
    }else{
        products = requestDB.filter(item => {
            return item.course === target;
        })
    }
    return prepareProducts(products);
}

function prepareProducts(prod){
    return prod.map(item => {
        return {
            ...item,
            courseName: products[item.course],
            statusName: statuses[item.status],
        }
    })
}
//---

//----Filter by status
function filterByStatus(target){
    let filteredStatusArr;
    if(target === 'all' || target === 'Все вместе'){
        return prepareRequest(requestDB);
    }else{
        filteredStatusArr = requestDB.filter(item => {
             return item.status === target;
        })
    }
    return prepareProducts(filteredStatusArr);
}

//Count new request 
function countRequest(){
    const newRequest =  requestDB.filter(item => {
        return item.status === 'new';
    });

    return newRequest.length;
}

export {requestDB, addNewRequestToDB, upDateLS, getRequestID, updateRequest, prepareRequest, saveIdRequestLS, filterByProducts, prepareProducts, filterByStatus, countRequest};