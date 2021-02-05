const person = {
    name: 'Alex',
    age: 38,
    weight: 105,
    isFamaly: true,
    languages: ['ru', 'uk', 'en'],
    //['key_' + (2 + 6)]: 'Complex Value',
    greet() {
        console.log('greet from person');
    },
    info() {
        console.log(this);
    console.log('Информация про человека по имени:', this.name);
    }
};


//person.info();

//  console.log(person.greet);
//person.languages.push('pl');
//  person['key_8'] = undefined;

// delete person['key_8'];
// console.log(person);

// const name = person.name;
// const age = person.age;
// const languages = person.languages;

// console.log(name, age, languages);

// ВАЖНО 4.01
// for (let key in person) {
//     if(person.hasOwnProperty(key)){
//         console.log(key);
//         console.log(person[key]);
//     }
// }

// Object.keys(person).forEach((key) => {
//     //console.log(key);
//     console.log(person[key]);
// });


//Context
//person.info();
 
const logger = {
    keys() {
        console.log(Object.keys(this));
    },
    keysAndValues(){
        Object.keys(this).forEach( key => {
            console.log(`"${key}":${this[key]}`);
        });
    },
    withParams(top = false, between = false, bottom = false) {
        if(top) {
            console.log('---------Start-------------');
        }
        Object.keys(this).forEach( (key, i, arr) => {
            console.log(`"${key}":${this[key]}`);
            if (between && i !== arr.length - 1) {
                console.log('----------------');
            }
        });
        if (bottom) {
            console.log('---------End------------');
        }
    }
};

// const bound = logger.keys.bind(person) // Возвращает новую функцию
// bound();
// logger.keys.call(person);
//logger.keysAndValues.call(logger);
logger.withParams.call(person, true, true, true);
logger.withParams.apply(person, true, true, true);//Делает тоже что и call кроме того что он принимает два параметра
// из которых второй это массив