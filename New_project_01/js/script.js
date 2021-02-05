'use strict';

// устаревшие методы

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),// передает как массив, даже если елимент м таким тегом один
      circles = document.getElementsByClassName('circle'),
      // hearts = document.querySelectorAll('.heart'),
      // oneHeart = document.querySelector('.heart'),
      // wrapper = document.querySelector('.wrapper');
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');
      

    //   box.style.backgroundColor = 'green';
    //   box.style.width = '500px';

box.style.cssText = 'background-color: orange; width: 600px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
  item.style.backgroundColor = 'orange';
});

const div = document.createElement('div'); // создается только внутри js-файла
//const text = document.createTextNode('Тут был я');
div.classList.add('black');

//document.body.append(div);// вставляет в конце body

wrapper.append(div);
// wrapper.appendChild(div); // СТАРЫЙ МЕТОД

//wrapper.prepend(div);// вставляет в начало родит. елим.
// hearts[0].before(div);// вставляем перед heart
// hearts[0].after(div); // вставляем после heart
//wrapper.insertBefore(div, hearts[0]); // СТАРЫЙ МЕТОД

//circles[0].remove(); // удаляет
//wrapper.removeChild(hearts[1]);// СТАРЫЙ МЕТОД

hearts[1].replaceWith(circles[1]); // заменяет один елимент на другой(перемещая его)

// wrapper.replaceChild(circles[0], hearts[1]); // СТАРЫЙ МЕТОД

div.innerHTML = '<h1>Hello World</h1>'; //вставляет не просто строку, а html структуру
// можеи прописывать свойство для вставляемого елимента "<h1>Hello World</h1>"

//div.textContent = "<h1>Hello World</h1>";

div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>');