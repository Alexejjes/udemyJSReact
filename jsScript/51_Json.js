'user strict';

const person = {
    name: 'Alex',
    tel: '+74444444444',
    parents: {
        mam: 'Olga',
        dad: 'Alex'
    }
};

//console.log(JSON.stringify(person));// превращает объект в необходимый формат для перед. на серевер
//console.log(JSON.parse(JSON.stringify(person)));// превращает  JSON-объект с сервера в об. объект JS 
const clone = JSON.parse(JSON.stringify(person));
clone.parents.mam = 'Anna';

console.log(person);
console.log(clone);