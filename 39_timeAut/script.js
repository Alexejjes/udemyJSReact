"user strict";

const btn = document.querySelector('.btn');
let timeId,
    i = 0;

btn.addEventListener('click', () => {
    //const timeId = setTimeout(logger, 2000);
    timeId = setInterval(logger, 500);
});



function logger() {
    if (i === 3) {
       clearInterval(timeId);
    }
    console.log('Hi');
    i++;
}

