
function truncate(str, max){

    if(str.length > max)
        return str.substring(0,max) + "...";

    return str;
}

console.log(truncate('This text will be truncated if it is too long', 25))