let data = [
    {
        nameSurename: 'Aleksandr Lavrov',
        tel: '+7999654486',
        email: 'lavrovfp1995@gmail.com',
        course: 'course-html',
    },

    {
        nameSurename: 'Dmitriy Ivanov',
        tel: '+380677754465',
        email: 'IvaNOV@mail.ru',
        course: 'course-js',
    },

    {
        nameSurename: 'Vladislav Egorov',
        tel: '+6547239123',
        email: 'egorov555@gmail.com',
        course: 'course-php',
    },

    {
        nameSurename: 'Aleksey Kirilov',
        tel: '+79094352872',
        email: 'kirilov98@mail.ru',
        course: 'course-vue',
    },

    {
        nameSurename: 'Vasiliy Klochkov',
        tel: '+73528729094',
        email: 'klochkov105@mail.ru',
        course: 'course-wordpress',
    }
]

function getRandomIndex(){
    const randomIndex = Math.floor(Math.random() * data.length);
    let elem = data[randomIndex];
    return elem;
}

export {getRandomIndex};



