// 1 Функции
// Function Declaration
// function greet(name){
//    console.log('Привет -', name, '!');
// }

//greet('Оля');

// Function Expression
// const greet2 = function greet2(name) {
//    console.log('Привет -', name);
// };
//greet2('Alex');
//console.log(greet2);

//console.log(typeof greet);
//console.dir(greet);

// 2 Аннонимные функции

// let counter = 1;
// const interval = setInterval(function() {
//    if (counter === 6) {
//       clearInterval(interval)
//    } else{
//       console.log(counter++);
//    }
// }, 1000);

// 3 Стрелочные функции

// function greet(name){
//    console.log('Привет -', name, '!');
// }

const arrow = (name) => {
   console.log('Привет -', name, '!');
};
// arrow('Alex'); // Привет - Alex !

const arrow2 = name => console.log('Привет -', name, '!');
// arrow2('Daniil'); // Привет - Daniil !

// const pow2 = num => {
//    return num ** 4;
// };
const pow2 = num => num ** 4;

// console.log(pow2(25)); // 390625

// 4 Параметры по умолчанию

const sum = (a = 9, b = a + 2) => a * b;

//console.log(sum(6, 7)); //42 = 6 * 7
//console.log(sum(6)); // 48 = (6*(6+2))
//sconsole.log(sum()); // 99 = 9 * (9 + 2)

 function sumAll(...all){
    console.log(all);
}
//sumAll(1, 2, 3, 4, 5, 6, 7); // (7) [1, 2, 3, 4, 5, 6, 7] - собрал все в массив

function sumAll2(...all){
   let result = 0;
   for (let num of all){
      result += num;
   }
   return result;
}
const res = sumAll2(1, 2, 3, 4, 5, 6, 7, 8);
//console.log(res); // 36 = 1+2+3+4+5+6+7+8

// 5 Замыкание  

function createMember(name) {
   return function(lastName) {
      console.log(name + lastName);
   }
}

const logWithLastName = createMember('Alex');
// console.log(logWithLastName);//ƒ (lastName) {console.log(name + lastName);}
console.log(logWithLastName('Kurkin'));
console.log(logWithLastName('Minin'));