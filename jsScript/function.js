"use strict";

let num = 2;

function showFirstMessage (text){
    console.log(text);
    num = 3;
}

showFirstMessage('Hello world');
console.log(num);

function cal(a, b){
    return (a + b);
}

console.log(cal(5, 6));
console.log(cal(24, 6));
console.log(cal(5,556));

function ret(){
    let num = 50;
    return num;
}

let anotherNum = ret();
console.log(anotherNum);

const logger = function(){
    
}