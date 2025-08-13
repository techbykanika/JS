'use strict';
function *dataConsumer(){
    console.log("started");
    console.log(`1. ${yield 52}`);// doubt ye kis direction mai excute hora h ye 
    console.log(`2 ${yield "returned from yield"}`);
    yield "yield return";
}
let dataConsumer1= dataConsumer();
console.log("-------------------------1st next----------------------------------------------------------");
console.log(dataConsumer1.next());// this will start the generator and will suspend at first yiels
console.log("--------------------------------2nd next()---------------------------------------------------------");
console.log(dataConsumer1.next("I"));// this will resume from line 4 and will suspend at line 6
console.log("----------------------3th next-----------------------------------------------------------");
console.log(dataConsumer1.next("kk"));// this will resume at line 6 and suspend at line 4
console.log("------------------------------4th next()----------------------------------------------------------");
console.log(dataConsumer1.next());
console.log("-----------------------------5th next()---------------------------------------------------------");
console.log(dataConsumer1.next());
console.log("---------------------------- 6th next()-----------------------------------------------");
console.log(dataConsumer1.next());
// we have n and n-1 relationship with next and yield 
// if we have 1st yield so we can send data to it in the 2nd time we call next 
// so next() nth calling will send data to (n-1)th yield  

