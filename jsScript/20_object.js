"use strict";

// function first(){
//     // do something
//     setTimeout(function(){
//         console.log(1);
//     }, 500);
// }

// function second(){
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback){
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// learnJS('JavaScript', function(){
//     console.log('Я прошел этот урок!');
// });

const options = {
  name: 'Test',
  width: 1024,
  heidth: 1024,
  color: {
      border: 'black',
      bg: 'red'
  },
  makeTest: function(){
    console.log('Test');
  }
};
options.makeTest();

const {border, bg} = options.color;
console.log(bg);

//console.log(Object.keys(options).length);
// console.log(options.color);
// let counter = 0;

// for (let key in options) {
//     if(typeof(options[key]) === 'object'){
//     for (let i in options[key]){
//     console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//     counter++;
//     }
//     } else  {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     counter++;
//     }
// }
// console.log(counter);
