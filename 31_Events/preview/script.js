"user strict";

const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('Click');
// }; 
// btn.onclick = function() {
//     alert('Second Click');
// }; // Перезапишет onclick

// btn.addEventListener('click', () => {
//     alert('Click');
// });
// btn.addEventListener('click', () => {
//     alert('Second Click');
// });

let i = 0;
const deleteElement = event => {
    //console.log(event.target);
    console.log(event.currentTarget);
    console.log(event.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
    //event.target.remove();// удаляет элимент при наведении на него
    //console.log(event);
    //console.log('Hover');
};

//btn.addEventListener('click', deleteElement);
//overlay.addEventListener('click', deleteElement);

btns.forEach(item => {
    item.addEventListener('click', deleteElement);
});

const link = document.querySelector('a');

link.addEventListener('click', event => {
    event.preventDefault();

    console.log(event.target);
});