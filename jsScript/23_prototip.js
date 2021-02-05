"use strict";

let str = 'Some string';
let strObj = new String(str);
//  console.log(typeof(str));
//  console.log(typeof(strObj));

console.dir([1,2,3]);

const soldier = {
    hralth: 400,
    armor: 100,
    sayHelllo: function() {
        console.log('Hello');
    }
};

const jonh = Object.create(soldier);

// const jonh = {
//     hralth: 100
// };
//jonh.__proto__ = soldier;// старый вариант

Object.setPrototypeOf(jonh, soldier);

//console.log(jonh.armor);
jonh.sayHelllo();