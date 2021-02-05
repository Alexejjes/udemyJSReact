'use strict';

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');
 
    inputRub.addEventListener('input', () => {
        const request = new XMLHttpRequest();

// Методы: 
        // request.open(method, url, async, login, pass); // Не открывает,а собтирает настройки которые в будущем позв.сделать запрос 
        request.open('GET', 'js/current.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();

// Свойства
        // status 200 404 503
        // statusText - текстовое описание ответа от сервера
        //response  - ответ
        //readyState = текущее состояние запроса

// События
        // request.addEventListener('readystatechange', () => { //readystatechange - устаревший метод
        //     if (request.readyState === 4 && request.status === 200) {
        //         console.log(request.response);
        //         const data = JSON.parse(request.response);
        //         inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2); 
        //     } else {
        //         inputUsd.value = 'Что-то пошло не так';
        //     }
        // });

        request.addEventListener('load', () => { //load -срабатывает ё раз  когда запрос уже готов
            if (request.status === 200) {
                console.log(request.status);
                const data = JSON.parse(request.response);
                inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2); 
            } else {
                inputUsd.value = 'Что-то пошло не так';
            }
        });
        

    });     