function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;

  this.canDrive = ()=>{
    return this.age > 18;
  }
}

let firstPerson = new Person('John',  15);

console.log(firstPerson);

let secondPerson = new Person('Stive',  28);

console.log(secondPerson);

class PersonClass{

    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
      }


      canDrive = ()=>{
        return this.age > 18;
      }
}

let thirdPerson = new PersonClass('Olivia',  38);

console.log(thirdPerson);


function CanDrive(person){
    console.log(`Can ${person.name} drive? ${person.canDrive()}` );
}

CanDrive(firstPerson);

CanDrive(secondPerson);

CanDrive(thirdPerson);
