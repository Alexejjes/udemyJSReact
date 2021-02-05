const cars = ['Mazda', 'Ford', 'BMW', 'Mersedes'];
const fib = [1, 1, 2, 3, 5, 8, 13, 21];
// const people = [
//     {name: 'Elena', budget: 4200},
//     {name: 'Maria', budget: 3500},
//     {name: 'Olga', budget: 3700}
// ];

// let findedPerson
// for (const person of people){
//     if (person.budget === 3700) {
//         findedPerson = person;
//     }
// }

// console.log(findedPerson);

// // const index = people.findIndex (function (person){
// //  return person.budget === 3700;   
// // });

// // const person = people.find(function (person){
// //     return person.budget === 3700;   
// //    });

// const person = people.find(person => person.budget === 3700);

// console.log(person.name);

// console.log(cars.includes('Opel'));


// //console.log(cars.length);
// //console.log(cars[2]);

// // Method
// // cars.push('Skoda');
// // cars.unshift('Reno');
// // console.log(cars);

// // const firstCar = cars.shift();
// // const lastCar = cars.pop();

// // console.log(firstCar);
// // console.log(lastCar);
// // console.log(cars);

// const upperCaseCars = cars.map( car => {
//     return car.toUpperCase();
// });
// console.log(upperCaseCars);

// const pow2 = num => num ** 2;
// const pow2Fib = fib.map(pow2);

// //const pow2Fib = fib.map(num => num ** 2);
// console.log(pow2Fib);

//*********
// const pow2 = num => num ** 2;
// const pow2Fib = fib.map(pow2);
// const filteredNambers = pow2Fib.filter(num => num > 25);

// console.log(pow2Fib);
// console.log(filteredNambers);


// Задача 1
// const text = 'Привет, мы изучаем JavaScript!';
// const reverseText = text.split('').reverse().join('');
//console.log(reverseText);


//*********
const people = [
    {name: 'Elena', budget: 4200},
    {name: 'Maria', budget: 1500},
    {name: 'Olga', budget: 5600}
];

const allBudget = people
.filter(person =>person.budget > 2000)
.reduce((acc, person) => {
    acc += person.budget;
    return acc;
}, 0);

console.log(allBudget);



