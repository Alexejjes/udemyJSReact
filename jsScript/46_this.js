"user strict";

// function showThis (a, b) {
//    console.log(this);
//    function sum() {
//       console.log(this);
//       return a + b;
//     }
//    console.log(sum());
// }
// showThis(10, 5);

// 1.Обычная функция: this = window, но если "user strict" this = undefined

// const obj = {
//    a: 20,
//    b: 15,
//    sum: function() {
//       console.log(this);
//    }
// };

// obj.sum();

// 2. Если мы используем метод внутри объекта то контекст вызова 
// будет ссылаться на этот объет

// function User(name, id) {
//    this.name = name;
//    this.id = id;
//    this.human = true;
//    this.hello = () => {
//        console.log(`Hello ${this.name}`);
//    };
// }
// const ivan = new User('Ivan', 35);

// 3. this в конструкторах и классах это новый экземпляр объкта

// function sayName(surname) {
//    console.log(this);
//    console.log(this.name + surname);
// }

// const user = {
//    name:'Jone'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);// Эти два способа связывают контекст и переменную

// // Метод bind создаёт новую ф-ю и подвязвает(жёстко) контекст
//  function count(num) {
//     return this * num;
//  }

//  const double = count.bind(2);
//  console.log(double(50));
//  console.log(double(93));
//  console.log(double(175));

 // 4.Ручная привязка контекста(this): call, apply, bind

//  const btn = document.querySelector('button');

 btn.addEventListener('click', function() {
    this.style.backgroundColor = 'red';
 });

   const obj = {
      num: 5,
      sayNumber: function() {
         const say = () => {
            console.log(this);
         };
         say();
      }
   };

   obj.sayNumber();

   const double = a => a * 2;

   
