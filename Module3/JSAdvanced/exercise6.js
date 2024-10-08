function multiply(a, b, c=1, d=1) {    
    console.log(a * b * c * d);
}

multiply.delay = function(ms){

    return function(a, b){

        setTimeout(()=>{
            multiply.apply(this, arguments);           
        }, ms);

    };
}

multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds

multiply.delay(500)(5, 5, 5, 5); // prints 625 after 500 milliseconds
