const fs= require('fs');
console.log('start');
// settimeout is non blocking in nature
setTimeout(()=>{console.log("middle")},3000);
console.log("end");
// second example

console.log("start 2nd example");
// read file has call back function readfile is non blocking in nature 
fs.readFile(__filename, (err,data)=>{
    console.log(`(middle 2nd example) -> data  ${data}`);
});
console.log("end 2nd example")

// 5. sync async ambiguity
const a= [1,2];
a.forEach(element => {
    console.log(element);
    
});
console.log("after for each");