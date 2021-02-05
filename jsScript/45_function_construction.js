"user strict";

function User(name, id) {
   this.name = name;
   this.id = id;
   this.human = true;
   this.hello = () => {
       console.log(`Hello ${this.name}`);
   };
}

User.prototype.exit = function() {
    console.log(`Пользователь ${this.name} ушел`);
};


const alex = new User('Alex', 38);

ivan.exit();

ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex);
