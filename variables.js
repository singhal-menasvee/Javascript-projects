//The Temporal Dead Zone (TDZ)
//"let and const are not hoisted' → actually hoisted but not initialized; accessing before declaration causes a ReferenceError due to TDZ.
console.log(x);    //gives undefined
console.log(y);    //gives Reference error: Cannot access 'y' before initialization

var x=10;
let y= 20;