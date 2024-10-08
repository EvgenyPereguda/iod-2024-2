// This function return sum of two numbers
function sum(a, b){
    return a + b;
}

// This function return diff of two numbers
function minus(a, b){
    return a - b;
}

// This function return dividing of two numbers
function div(a, b){
    return a / b;
}

// This function return multiplication of two numbers
function mult(a, b){
    return a * b;
}

function helloName(name){
    console.log("Hello ".concat(' ', name));
}

console.log("Unit Test");

if (sum(2, 4) != 6) { error }

if (sum(4, 4) != 8) { error }

if (sum(5, 4) != 9) { error }




if (minus(2, 4) != -2) { error }

if (minus(4, 4) != 0) { error }

if (minus(5, 4) != 1) { error }




if (div(2, 4) != 0.5) { error }

if (div(4, 4) != 1) { error }

if (div(8, 4) != 2) { error }




if (mult(2, 4) != 8) { error }

if (mult(4, 4) != 16) { error }

if (mult(5, 4) != 20) { error }