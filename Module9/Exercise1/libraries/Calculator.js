const nanoid = require('nanoid'); 
const Logger = require('./Logger.js');

let myLogger = new Logger();

class Calculator {
  constructor() {
    this.id = nanoid.nanoid();
  }

  add(num1, num2) {    
    try{
        const value = num1 + num2;        
        myLogger.info(this.id, `add(${num1}, ${num2})`, value);       
        
        return value;
    }
    catch(error){
        myLogger.error(this.id, `add(${num1}, ${num2})`, error.message);
    }
  }

  sub(num1, num2) {
    try{
        const value = num1 - num2;
        myLogger.info(this.id, `sub(${num1}, ${num2})`, value);    
        
        return value;
    }
    catch(error){
        myLogger.error(this.id, `sub(${num1}, ${num2})`, error.message);
    }
  }

  div(num1, num2) { 
    try{
        const value = num1 / num2;
        myLogger.info(this.id, `div(${num1}, ${num2})`, value); 
        
        return value;
    }
    catch(error){
        myLogger.error(this.id, `div(${num1}, ${num2})`, error.message);
    }   
  }

  mult(num1, num2) {
    try{
        const value = num1 * num2;
        myLogger.info(this.id, `mult(${num1}, ${num2})`, value);
        
        return value;
    }
    catch(error){
        myLogger.error(this.id, `mult(${num1}, ${num2})`, error.message);
    }  
  }
}

module.exports = Calculator
