


function printFibonacci(max){

    let next = printFibonacci.prev + printFibonacci.current;
    
    [printFibonacci.current, printFibonacci.prev] = [printFibonacci.prev, next];

    console.log(next);

    if(next >= max)
        clearInterval(printFibonacci.lIntervalID);
}

printFibonacci.prev = 0;
printFibonacci.current = 1;
printFibonacci.lIntervalID = setInterval(printFibonacci, 1000, 13);

function printFibonacciTimeouts(arg1, arg2, max){

    let next = arg1 + arg2;

    if(arg2 == 0)
        next = 1;
    
    console.log(next);

    if(max > next)
        setTimeout(printFibonacciTimeouts, 1000, arg2, next, max);
}

setTimeout(printFibonacciTimeouts, 1000, 0, 0, 13);