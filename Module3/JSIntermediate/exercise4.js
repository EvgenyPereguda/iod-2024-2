function camelCase(cssProp){
    const parts = cssProp.split('-');

    if(parts.length > 1)
    {
        let lresult = parts[0];

        for(let index = 1; index < parts.length; ++index)
            lresult += parts[index].charAt(0).toUpperCase() + parts[index].slice(1);

        return lresult;
    }
    else
        return cssProp;
}


console.log(camelCase('margin-left')) // marginLeft
console.log(camelCase('background-image')) // backgroundImage
console.log(camelCase('display')) // display