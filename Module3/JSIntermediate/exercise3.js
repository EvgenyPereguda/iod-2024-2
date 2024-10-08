const animals = ['Tiger', 'Giraffe']

animals.push('Rabit','Fox')

animals.unshift('Dog','Cat')

console.log(animals)

animals.sort();

console.log(animals)

function replaceMiddleAnimal(newValue){
    animals[animals.length/2] = newValue;
}

replaceMiddleAnimal('Sheep');

console.log(animals)

function findMatchingAnimals(beginsWith){

    let lresult = [];

    animals.forEach((item, index, arr)=>{

        if(item.toUpperCase().startsWith(beginsWith.toUpperCase()))
            lresult.push(item);
    });

    return lresult;
}

console.log(findMatchingAnimals('Ra'));
console.log(findMatchingAnimals('Do'));