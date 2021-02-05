"use strict";

// let a = 5,
//     b = a;
//  b = b + 5;

//  console.log(b);
//  console.log(a);

// //  const obj = {
// //      a: 5,
// //      b: 1
// //  };

// //  const copy = obj; // Передает ссылку, а не объект
// //  copy.a = 10;

// //  console.log(copy);
// //  console.log(obj);


// // ПОВЕРХНОСТНАЯ КОПИЯ ОБЪЕКТА
// function copy(mainObj) {
//     let objCopy = {};
//     for (let key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;

// //console.log(newNumbers);
// //console.log(numbers);

// const add = {
//     d: 27,
//     e: 18
// };

// console.log(Object.assign(numbers, add));
// const cloneAdd = Object.assign({}, add);
// cloneAdd.d = 96;

// console.log(cloneAdd);

// // Array

// const array = ['a', 'b', 'c'];
// const newArray = array.slice();// создает поверхностную копию массива

// newArray[1] = 'asdfasdf';

// console.log(array);
// console.log(newArray);

// // стандарты создания поверхностной копии массива ES6-ES8
// // spred оператор
// const video = ['yuotube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [... video, ...blogs, 'vk', 'facebook'];

// console.log(internet);  

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const numb = [2, 5, 7];

// log(...numb);

const array = ['a', 'b'];
const newArray = [...array];
const q = {
    one: 1,
    two: 2
};

const newObj = {...q};
console.log(newArray);
console.log(newObj);