 //'use strict'
function fun(){
    console.log(typeof(this));
   console.log(this);
   console.log(this+4);
   console.log("------------------------------")
}
fun();
fun.call(2);
fun.apply(null);
fun.bind(true)();

// in this remove 'use strict' and see the output and vice versa
// In sloopy mode 'this' is always an object 
functiom 