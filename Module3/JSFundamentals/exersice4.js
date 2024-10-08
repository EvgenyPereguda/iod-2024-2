let a = 2, b = 3;
let result = `${a} + ${b} is `;

a + b < 10 ?
    result += 'less than 10'
    :result += 'greater than 10'


console.log(result)

// += operation can be unrolled as arg1 = arg1 + arg2 - its apply operation '+' to both argumant and assing the resul in left arg1