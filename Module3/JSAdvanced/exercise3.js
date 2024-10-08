function printMe(msg) {
  console.log(`printing debounced message: ${msg}`);
}

function debounce(func, ms = 1000){

    let ltimeID = -1;

    return function(msg){
    
        if(ltimeID > -1)
            clearTimeout(ltimeID);  

        ltimeID = setTimeout(func, ms, `${msg} + delay in ${ms}ms `);  
    }
}

printMeArrow = debounce(printMe); //create this debounce function for a)
//fire off 3 calls to printMe within 300ms - only the LAST one should print, after
//1000ms of no calls
setTimeout(printMeArrow, 100, "#1: Delayed by 100ms");
setTimeout(printMeArrow, 200, "#2: Delayed by 200ms");
setTimeout(printMeArrow, 300, "#3: Delayed by 300ms");
