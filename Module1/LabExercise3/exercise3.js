function btnColumn1Color(){
    document.getElementById("column1").style.backgroundColor = "gray";
    document.getElementById("column1").style.color = "white";

    var lnewText = document.getElementById("inputColumn1").value;

    if(lnewText)
    document.getElementById("heading1").innerText = lnewText;
    
}
function btnColumn2Color(){
    document.getElementById("column2").style.backgroundColor = "magenta";
    document.getElementById("column2").style.color = "white";

    var lnewText = document.getElementById("inputColumn2").value;

    if(lnewText)
    document.getElementById("heading2").innerText = lnewText;
}