let animal = { eats: true, sleeps: true, legs: 4, mammal: true }; // inherits from Object prototype
let animalPrototype = Object.getPrototypeOf(animal); // recommended way to get prototype
console.log(animalPrototype); // BUT printing it via console.log is incomplete
console.log(Object.getOwnPropertyNames(animalPrototype)); // prints all prototype (Object) properties

let rabbit1 = { jumps: true };
Object.setPrototypeOf(rabbit1, animal); // NEW recommended way, uses default property descriptor settings
let rabbit2 = Object.create(animal, {
  // creates a new object from prototype, with custom properties
  jumps: {
    // name of custom 'own' property for rabbit object
    value: true, // property descriptor to set the property value
    enumerable: true, // property descriptor to make this enumerable - otherwise jumps won’t be in for...in
  },
});
console.log(rabbit1, rabbit2); // { jumps: true } - only prints 'own' properties, not inherited ones
console.log(rabbit1.legs, rabbit2.legs); // 4 - inherited properties do exist
for (let prop in rabbit1) console.log(`${prop} is ${rabbit1[prop]}`); // own properties, then inherited ones
for (let prop in rabbit2) console.log(`${prop} is ${rabbit2[prop]}`); // own properties, then inherited ones

function Rabbit(name) {
  // constructor function, first letter capitalised by convention
  this.jumps = true;
  this.name = name;
}
Rabbit.prototype = animal; // sets the prototype to inherit from (same animal object as previous)
let whiteRabbit = new Rabbit("White Rabbit");
console.log(whiteRabbit); // { jumps: true, name: 'White Rabbit' } - own properties
for (let prop in whiteRabbit) console.log(`${prop} is ${whiteRabbit[prop]}`); // all properties

const obj = {}; // simple empty object
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true: its prototype is Object prototype
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(obj))); // inherited properties from Object prototype

const arr = []; // simple empty array
console.log(Object.getPrototypeOf(arr) === Array.prototype); // true: its prototype is Array prototype
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(arr))); //inherited properties from prototype

const str = ""; // simple empty object
console.log(Object.getPrototypeOf(str) === Object.prototype); // true: its prototype is Object prototype
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(str))); // inherited properties from Object prototype

class Person {
  static latin = "persona"; // static (class) property, belongs to class not any instance
  constructor(name) {
    this.name = name; // standard property, is unique to each instance of the class
  }
  getName() {
    // standard method, belongs to each instance of the class
    return this.name;
  }
  static createAnonymous() {
    // static (class) method, belongs to class not any instance
    return new Person("Unnamed Person");
  }
}
let jonas = new Person("Jonas");
console.log(jonas.getName()); // Jonas - name and getName() belong to an instance of Person
console.log(jonas.latin); // undefined - latin property doesn't belong to jonas
console.log(Person.latin); // persona - latin property belongs to Person class
let anon = Person.createAnonymous(); // use static (factory) method to create generic Person instance

class Laptop {
  _hardDiskType = "HDD"; // protected property, meant to be internal
  constructor(brand) {
    this.brand = brand; // public property, can be used externally by instances
  }
  getHDiskType() {
    return this._hardDiskType;
  } // public method to access protected property
}
const macbook = new Laptop("Macbook Pro");
console.log(macbook.brand); // public property, accessed externally from any instance
console.log(macbook._hardDiskType); // works, not recommended as it violates encapsulation principles
console.log(macbook.getHDiskType()); // recommended way to access protected property

class Laptop1 {
  _hardDiskType = "HDD"; // protected property, SHOULD only be used by inheriting classes
  #numCPUFans = 1; // private property, CAN only be used internally by class methods
  constructor(brand) {
    // constructors are always public
    this.brand = brand; // public property
  }
  isGaming() {
    return false;
  } // public method
  getHDiskType() {
    return this._hardDiskType;
  } // public method to access protected property
  _increaseCPUFans() {
    // protected method
    if (this.isGaming()) this.#numCPUFans++; // can access private properties internally
  }
}
const macbook1 = new Laptop1("Macbook Pro");
// console.log(macbook1.#numCPUFans); // error: private property is not accessible

const promise = new Promise((resolve) => {
  setTimeout(() => resolve("Simple successful promise"), 250);
});
// using .then to process asynchronously:
promise.then((msg) => console.log(msg));
// using await to process synchronously (if using await in a function it needs to be async):
// let msg = await promise;
// console.log(msg);

async function waitForPromise() {
  // async function allows synchronous promise handling internally
  // since we have synchronous code and no .catch(), we use try ... catch for errors
  try {
    let promiseResult = await promise; // waits here as long as promise needs to resolve
    console.log(`Success: ${promiseResult}`); // then continues executing other code
    return true;
  } catch (error) {
    console.error(`Failure: ${error.message}`);
  }
  //only gets here if return true above did NOT happen, ie. there was an error
  return false;
}

// waitForPromise();


async function getData() {
    try{
        const response = await fetch('https://reqres.in/api/users');

        if(!response.ok){
            throw new Error(`HTTP error! ${response.status}`);
        }

        const json = await response.json();

        console.log(json);
    }
    catch(err){

        console.log(`Failed: ${err}`);

    }
    finally{

    }
}

getData();