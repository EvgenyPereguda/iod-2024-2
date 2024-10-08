function makeCounter(startFrom = 0, incrementBy = 1) {
  let currentCount = startFrom;
  return function () {
    currentCount += incrementBy;
    console.log(currentCount);
    return currentCount;
  };
}
let counter1 = makeCounter();
counter1(); // 1
counter1(); // 2


let counter2 = makeCounter();
counter2(); // 1

counter1 = makeCounter(3);
counter1(); // 4
counter1(); // 5


counter2 = makeCounter(5);
counter2(); // 6

counter1 = makeCounter(3, 2);
counter1(); // 5
counter1(); // 7


counter2 = makeCounter(5, 5);
counter2(); // 10