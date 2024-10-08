
function ucFirstLetters(content){

    const parts = content.split(' ');

    let lresult = "";

    parts.forEach((item, index, arr)=>{

        lresult += item.charAt(0).toUpperCase() + item.slice(1) + " ";
    });

    return lresult;
}



console.log(ucFirstLetters('los angeles')) //Los Angeles