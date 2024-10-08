function actionList(){
    let lList = ["First", "Second", "Third", "Fourth", "Fifth"];

    console.log(lList);

    lList[1] = "Change Second";

    lList[4] = "Change Fifth";
    
    console.log(lList);

    lList.unshift("Zero");
    
    console.log(lList);

    lList.pop();
    
    console.log(lList);
}


actionList();