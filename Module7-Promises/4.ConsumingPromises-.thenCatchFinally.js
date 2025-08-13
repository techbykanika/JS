const { resolve } = require("path");

class myinfo {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
};
myinfoObj= new myinfo("kanika",25)
console.log(" promise with reject resolve \n")
const p = new Promise (function(resolve,reject){
    
    if(myinfoObj.age==24){
        console.log("we are inside promise resolve \n")
        resolve(myinfoObj)

    }
    else{
        console.log("we are inside promise reject \n")
        reject(" the age is not 24")
    }
});

console.log("calling consumer function for first time");
p.then((objreturned)=>{
    console.log(objreturned);
    console.log(p);
    console.log("it is getting executed becaue function is resolved - First Time \n");
},(objreturned)=>{
    console.log(p);
    console.log(objreturned);
    console.log("it is getting executed becaue function is reject - First Time \n");
});
// whtever we can do with dot catch we can do with second argument of then we do catch just for redabiltiy of code
console.log("random written after first time promise was called ");
console.log("calling consumer function for second time with then and catch");
// we have changes the age so promise id going to fail
myinfoObj.age=25;
p.then((objreturned)=>{
    console.log(" we are in then when consumer was called  - second time");
}).catch( (objreturned)=>{
    console.log(objreturned)
    console.log(" we are in catch when promise was rejected -second time");
})
console.log(" calling promised third time with both reject and resolve with catch - third time");
p.then((objreturned)=> {
    console.log(objreturned);
    console.log(" we are in then when consumer was called - third time");
}, (objreturned)=>{
    console.log(objreturned);
    console.log(" we are in then when promise got rejectd-third time");
}).catch ((objreturned)=>{
    console.log(objreturned);
    console.log(" we are in catch when promise was rejected -third time");
});

console.log("How fianlly works- calling promise forth time");
p.then((objreturned)=> {
    console.log(objreturned);
    console.log(" we are in then when consumer was called  forsth time");
}, (objreturned)=>{
    console.log(objreturned);
    console.log(" we are in then when promise got rejectd forth time");
}).catch ((objreturned)=>{
    console.log(objreturned);
    console.log(" we are in catch when promise was rejected forth time");
}).finally((objreturned)=>{ console.log("we are in finaly i run in all the case forth time");
console.log(objreturned);
// this is coming undefined why?

});
// we can see that promise get rehected or called only once 
// once promise is done than only than and catch and finally works 
// changed the value of age in bteween after promise was called it had no effect