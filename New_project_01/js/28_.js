'use strict';

// устаревшие методы

const box = document.getElementById('box');

console.log(box);

const btn = document.getElementsByTagName('button')[1]; // передает как массив, даже если елимент м таким тегом один

console.log('btn');

const circles = document.getElementsByClassName('circle');

console.log(circles);

// Более новые

const hearts = document.querySelectorAll('.heart');
hearts.forEach(item =>{
    console.log(item);
});
const oneHeart = document.querySelector('.heart');
console.log(oneHeart);


