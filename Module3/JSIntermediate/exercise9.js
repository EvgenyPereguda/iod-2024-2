let salaries = {
  "Timothy": 35000,
  "David": 25000,
  "Mary": 55000,
  "Christina": 75000,
  "James": 43000,
};

function sumSalaries(salaries){

    let lresult = 0;

    for(let name in salaries){
        lresult += salaries[name];
    }

    return lresult;
}


console.log(sumSalaries(salaries));

function topEarner(salaries){

    let lresult = "";

    let ltopEar = 0;

    for(let name in salaries){

        if(salaries[name] > ltopEar){

            ltopEar = salaries[name];

            lresult = name;
        }
    }


    return lresult;
}



console.log(topEarner(salaries));