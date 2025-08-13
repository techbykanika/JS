//Issues with callback
// 1.debugigng gets diffivult stack trace is not correct  
'use strict';
const fs =require('fs');
readFile(__filename, (err,data)=>{
    throw new Error();
});
// 5. sync async ambiguity
[1,2,3].forEach( (el)=> console.log(el));

console.log("end 2nd example")
for (let index = 0; index < 10; index++) {
    cofs.nsole.log(index);
    
}

// 2. you cant return something from callback

var result=fs.readFile(__filename,(err,data)=>{
    return data
});
console.log(result)
// result will be undefined becaue callbcak does not return the data either to readfile so nothing comes in result 
// we dont have access to function where callback return the value 

// try catch doesnto work here 
// try{


// readFile(__filename, (err,data)=>{
//     throw new Error();
// });
// }
// catch(ex){
//  console.log(ex);
// }
// when try catch got excecutd that time readfile nahi calhal 
// isley hm error ko catch nahi kr pae
