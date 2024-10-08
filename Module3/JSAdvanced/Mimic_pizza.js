function Start_preparing_pizza() {
  console.log("Started preparing pizza ...");
}

const Made_base = function () {
  console.log("Made the base");
};

const Add_sause_and_cheese = () => {
  console.log("Added the sauce and cheese");
};

function Add_the_pizza_toppings() {
  console.log("Added the pizza toppings");
}

const Cook_the_pizza = function () {
  console.log("Cooked the pizza");
};

const Pizza_is_ready = () => {
  console.log("Pizza is ready");
};

Start_preparing_pizza();
Made_base();
Add_sause_and_cheese();
Add_the_pizza_toppings();
Cook_the_pizza();
Pizza_is_ready();

const startPizza = function () {
  setTimeout(() => {
    console.log("Started preparing pizza ...");
  }, 1000);
};
const makeBase = function () {
  setTimeout(() => {
    console.log("Made the base");
  }, 2000);
};
function addSauceCheese() {
  setTimeout(() => {
    console.log("Added the sauce and cheese");
  }, 3000);
}
function addToppings() {
  setTimeout(() => {
    console.log("Adding the pizza toppings");
  }, 4000);
}
const cookPizza = () => {
  setTimeout(() => {
    console.log("Cooked the pizza");
  }, 5000);
};
const pizzaReady = () => {
  setTimeout(() => {
    console.log("Pizza is ready");
  }, 6000);
};

startPizza();
makeBase();
addSauceCheese();
addToppings();
cookPizza();
pizzaReady();

// Promise version

function PromiseDone() {
  const promise = new Promise((resolve) => {
    resolve();
  });

  return promise;
}

PromiseDone().then(Start_preparing_pizza());
PromiseDone().then(Made_base());
PromiseDone().then(Add_sause_and_cheese());
PromiseDone().then(Add_the_pizza_toppings());
PromiseDone().then(Cook_the_pizza());
PromiseDone().then(Pizza_is_ready());

// Async/awit version

async function PromiseDoneAsync() {
  let promise = new Promise((resolve) => {
    resolve();
  });

  promise.then(Start_preparing_pizza());

  await promise;

  promise = new Promise((resolve) => {
    resolve();
  });

  promise.then(Made_base());

  await promise;

  promise = new Promise((resolve) => {
    resolve();
  });

  promise.then(Add_sause_and_cheese());

  await promise;

  promise = new Promise((resolve) => {
    resolve();
  });

  promise.then(Add_the_pizza_toppings());

  await promise;

  promise = new Promise((resolve) => {
    resolve();
  });

  promise.then(Cook_the_pizza());

  await promise;

  promise = new Promise((resolve) => {
    resolve();
  });

  promise.then(Pizza_is_ready());

  await promise;
}

PromiseDoneAsync();
