"user strict";
const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');


//console.log(btns[0].classList.length);
//console.log(btns[0].classList.item(1));//some
//console.log(btns[0].classList.add('red'));// добавляет класс red и окрашивает кнопку в кр.
//console.log(btns[0].classList.remove('blue'));// уд. в class => blue
//console.log(btns[0].classList.toggle('green'));//если класс есть он его уд. если нет то добавляет

/* *************************************** */

// contains проверяет класс у опр. элимента и возвращает boolen значение.
// console.log(btns[1].classList.add('red'));
// if (btns[1].classList.contains('red')) {
//     console.log('Super!');
// } 

/* ******************************************* */

btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // }else {
    //     btns[1].classList.remove('red');
    // }
    btns[1].classList.toggle('red');
});

// console.log(btns[0].className); // устаревший метод;

// wrapper.addEventListener('click', (event) => {
    
//     if (event.target && event.target.tagName == "BUTTON") {
//         console.log('Hello');
//     }
// });

wrapper.addEventListener('click', (event) => {
    
    if (event.target && event.target.matches('button.red')) {
        console.log('Hello');
    }
});

const btn = document.createElement('button');
btn.classList.add('green');
wrapper.append(btn);