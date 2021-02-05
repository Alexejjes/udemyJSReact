// function logPerson(s, name, age) {
//    console.log(s, name, age);
//    return 'Info about person';
// }
 

function logPerson(s, name, age) {
   if (age < 0) {
      age = 'Ещё не родился';
   }
   return `${s[0]}${name}${s[1]}${age}${s[2]}`;
}

const personName = 'Владилен';
const personAge = 26;
const personAge2 = -10;

const output = logPerson`Имя: ${personName}, Возраст: ${personAge} !`;
const output2 = logPerson`Имя: ${personName}, Возраст: ${personAge2} !`;
 console.log(output);
 console.log(output2);