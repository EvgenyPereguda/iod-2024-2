let car = {
  make: "Porsche",
  model: "911",
  year: 1964,
  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};
car.description(); //works
setTimeout(car.description, 200); //fails

// 'let car' is out of global scope in 'setTimeout' execution and variable 'car' released and has become undefined property/function 'description'

function callTimeout() {
  car.description();
}

const carClone = { ...car };

carClone.year = 1990;

setTimeout(callTimeout, 200);   //works. 'let car' has become closure in function 'callTimeout' and variable 'car' is kept unreleased.
                                //Updating of 'carClone.year' does not change the  function 'callTimeout' result

function callBindTimeout() {
  car.description.bind(carClone)();
}

setTimeout(callBindTimeout, 200);   //works. 'let car' has become closure in function 'callBindTimeout' and variable 'car' is kept unreleased.
                                    //Updating of 'carClone.year' changes the  function 'callBindTimeout' result

const carSecondClone = { ...carClone };
carSecondClone.model = 'VehiCROSS';