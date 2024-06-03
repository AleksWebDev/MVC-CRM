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

export {requestDB, addNewRequestToDB, upDateLS};