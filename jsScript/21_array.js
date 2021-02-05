"use strict";

const arr = [1, 2, 4, 6, 8, 10];

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function(it, i, arr) {
//    console.log(`${i}: ${it} внутри массива ${arr}`);
// });

// for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);  
// }

// for (let num of arr) {
//   console.log(num);
// }

const str = prompt("", "");
const product = str.split(", ");
product.sort();
console.log(product.join('; '));

