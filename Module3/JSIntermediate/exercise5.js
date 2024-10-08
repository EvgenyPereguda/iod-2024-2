let twentyCents = 0.20
let tenCents = 0.10
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// 0.2 + 0.1 = 0.30000000000000004

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen) //why is this not working?

function currencyAddition(float1, float2){

    return (float1 + float2).toFixed(2);
}

console.log(currencyAddition(twentyCents, tenCents));

function currencyOperation(float1, float2, operation, numDecimals = 2){

    let lresut = 0.0;

    switch (operation) {
        case '+':
            lresut = float1 + float2;
            break;
        case '-':
            lresut = float1 - float2;
            break;
        case '/':
            lresut = float1 / float2;
            break;
        case '*':
            lresut = float1 * float2;
            break;
    
        default:
            break;
    }

    return lresut.toFixed(numDecimals);
}

console.log(0.3 == currencyAddition(0.1, 0.2)) // true
console.log(0.3 == currencyOperation(0.1, 0.2, '+')) // true