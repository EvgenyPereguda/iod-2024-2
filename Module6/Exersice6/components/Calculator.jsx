"use client";

import { useState, useEffect } from "react";


function CalculatorButton({style, gliph, onClick}){

    return (
        <button className="calcButton" onClick={()=>{onClick(gliph)}} style={style}>
            {gliph}
        </button>
    )
}


function Calculator(){
    
    const [count, setCount] = useState(0);
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [operation, setOperation] = useState("");
    
    const [selection, setSelection] = useState(1);


    useEffect(() => {
      const intervalId = setInterval(() => {
        setCount((prevCount) => (prevCount + 1)%2);
      }, 500);
      return () => clearInterval(intervalId);
    }, []);

    const appendDigit = (digit) =>{
        if(selection == 1){
            setFirst(first + digit);
        }
        else if(selection == 2){
            setSecond(second + digit);
        }
    }

    const appendDecimalDot = () =>{
        if(selection == 1){

            if(!first.includes('.'))
                setFirst(first + '.');
        }
        else if(selection == 2){
            if(!second.includes('.'))
                setSecond(second + '.');
        }
    }

    const changeSign = () =>{
        if(selection == 1){

            if(first.includes('-'))
                setFirst(first.replace('-',''));
            else
                setFirst('-' + first);
        }
        else if(selection == 2){
            if(second.includes('-'))
                setSecond(second.replace('-',''));
            else
                setSecond('-' + second);
        }
    }

    const addOperation = (op)=>{
        if(!first)
            return;

        setOperation(op);
        setSelection(2);
    }

    const doOperation = ()=>{

        if(!operation)
            return;
        
        let arg1 = parseFloat(first);
        let arg2 = parseFloat(second);

        switch(operation){
            case '+':{
                setFirst(arg1 + arg2);
            }
            break;
            case '-':{
                setFirst(arg1 - arg2);
            }
            break;
            case '*':{
                setFirst(arg1 * arg2);
            }
            break;
            case '/':{
                setFirst(arg1 / arg2);
            }
            break;
        }

        setOperation("");
        setSecond("");
        setSelection(3);
    }

    const doReset = ()=>{
        setFirst("");
        setOperation("");
        setSecond("");
        setSelection(1);
    }

    const doBack = ()=>{
        if(selection == 1){
            if(first.length > 2)
                setFirst(first.slice(0, -1));
            else if(first.includes('-'))
                setFirst("");
            else
                setFirst(first.slice(0, -1));  
        }
        else if(selection == 2){
            if(second.length > 2)
                setSecond(second.slice(0, -1));
            else if(second.includes('-'))
                setSecond("");
            else
            setSecond(second.slice(0, -1)); 
        }
    }

    return (
        <div className="calculatorPanel">
            <div className="displayPanel">
                <div className="displayArg">
                    {first}{selection == 1 && count != 0 &&
                        <label>
                        _
                        </label>
                    }
                </div>
                <div className="displayArg" style={{borderTop: '0.1em solid black', borderBottom: '0.1em solid black'}}>
                    <label>
                        {operation}
                    </label>
                </div>
                <div className="displayArg">
                    {second}{selection == 2 && count != 0 &&
                        <label>
                        _
                        </label>
                    }
                </div>
            </div>

            <div className="buttonsPanel">
                <CalculatorButton onClick={()=>doBack()} gliph="<" style={{gridColumnStart: 1, gridColumnEnd: 4, gridRowStart: 1, gridRowEnd: 2}}/>
                <CalculatorButton onClick={()=>doReset()} gliph="Reset" style={{gridColumnStart: 4, gridColumnEnd: 5, gridRowStart: 1, gridRowEnd: 2}}/>

                <CalculatorButton onClick={(e)=>appendDigit(e)} gliph="1" style={{gridColumnStart: 1, gridColumnEnd: 2, gridRowStart: 2, gridRowEnd: 3}}/>
                <CalculatorButton onClick={(e)=>appendDigit(e)} gliph="2" style={{gridColumnStart: 2, gridColumnEnd: 3, gridRowStart: 2, gridRowEnd: 3}}/>
                <CalculatorButton onClick={(e)=>appendDigit(e)} gliph="3" style={{gridColumnStart: 3, gridColumnEnd: 4, gridRowStart: 2, gridRowEnd: 3}}/>
                <CalculatorButton onClick={(e)=>addOperation(e)} gliph="+" style={{gridColumnStart: 4, gridColumnEnd: 5, gridRowStart: 2, gridRowEnd: 3}}/>

                
                <CalculatorButton onClick={(e)=>appendDigit(e)} gliph="4" style={{gridColumnStart: 1, gridColumnEnd: 2, gridRowStart: 3, gridRowEnd: 4}}/>
                <CalculatorButton onClick={(e)=>appendDigit(e)} gliph="5" style={{gridColumnStart: 2, gridColumnEnd: 3, gridRowStart: 3, gridRowEnd: 4}}/>
                <CalculatorButton onClick={(e)=>appendDigit(e)} gliph="6" style={{gridColumnStart: 3, gridColumnEnd: 4, gridRowStart: 3, gridRowEnd: 4}}/>
                <CalculatorButton onClick={(e)=>addOperation(e)} gliph="-" style={{gridColumnStart: 4, gridColumnEnd: 5, gridRowStart: 3, gridRowEnd: 4}}/>

                
                <CalculatorButton onClick={(e)=>appendDigit(e)} gliph="7" style={{gridColumnStart: 1, gridColumnEnd: 2, gridRowStart: 4, gridRowEnd: 5}}/>
                <CalculatorButton onClick={(e)=>appendDigit(e)} gliph="8" style={{gridColumnStart: 2, gridColumnEnd: 3, gridRowStart: 4, gridRowEnd: 5}}/>
                <CalculatorButton onClick={(e)=>appendDigit(e)} gliph="9" style={{gridColumnStart: 3, gridColumnEnd: 4, gridRowStart: 4, gridRowEnd: 5}}/>
                <CalculatorButton onClick={(e)=>addOperation(e)} gliph="*" style={{gridColumnStart: 4, gridColumnEnd: 5, gridRowStart: 4, gridRowEnd: 5}}/>
                
                
                <CalculatorButton onClick={(e)=>appendDigit(e)} gliph="0" style={{gridColumnStart: 1, gridColumnEnd: 2, gridRowStart: 5, gridRowEnd: 6}}/>
                <CalculatorButton onClick={()=>changeSign()} gliph="+/-" style={{gridColumnStart: 2, gridColumnEnd: 3, gridRowStart: 5, gridRowEnd: 6}}/>
                <CalculatorButton onClick={()=>appendDecimalDot()} gliph="." style={{gridColumnStart: 3, gridColumnEnd: 4, gridRowStart: 5, gridRowEnd: 6}}/>
                <CalculatorButton onClick={(e)=>addOperation(e)} gliph="/" style={{gridColumnStart: 4, gridColumnEnd: 5, gridRowStart: 5, gridRowEnd: 6}}/>


                <CalculatorButton onClick={()=>doOperation()} gliph="=" style={{gridColumnStart: 1, gridColumnEnd: 5, gridRowStart: 6, gridRowEnd: 7}}/>
            </div>
        </div>
    )
}

export default Calculator;