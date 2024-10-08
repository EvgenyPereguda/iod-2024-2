function delayMsg(msg) {
  console.log(`This message will be printed after a delay: ${msg}`);
}

const delayMsgArrow = function delayMsg(msg) {
    console.log(`This message will be printed after a delay: ${msg}`);
  }

setTimeout(delayMsgArrow, 100, "#1: Delayed by 100ms"); 
setTimeout(delayMsgArrow, 20, "#2: Delayed by 20ms"); 
setTimeout(delayMsgArrow, 0, "#3: Delayed by 0ms"); 
delayMsgArrow("#4: Not delayed at all"); 

let fifthtaskID = setTimeout(delayMsg, 11000, "#3: Delayed by 11000ms"); 

clearTimeout(fifthtaskID);

// First printout "#4: Not delayed at all" - printout current (user context) task of the current thread 
// Second printout "#3: Delayed by 0ms" - printout first task with minimum timeout (0ms) after ending user contect task of the current thread
// Third printout "#2: Delayed by 20ms" - printout second task with the next minimum timeout (20ms) after ending user contect task of the current thread
// Fourth printout "#1: Delayed by 100ms" - printout third task with the next minimum timeout (100ms) after ending user contect task of the current thread
