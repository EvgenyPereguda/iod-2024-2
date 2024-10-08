const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]


function unique(duplicatesArray){

    let lresult = new Array;

    for(let item of duplicatesArray){

        if(lresult.find((element) => element == item) === undefined) {
            lresult.push(item);
        }
    }


    return lresult;
}


console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]