const p = new Promise(function(resolve,reject,x=2){
    // if i change the value of x to any other tahn 2 the promise will reject and we can see that 
    // it fails with the error ->  This error originated either by throwing inside of an async function 
    //without a catch block, or by rejecting a promise which was not handled with .catch(). 4
    // it happens we have handled rejection with appropiate handler . It is unhandleded promise exception
    if(x==2){
        resolve("promise is resolved");
    }
    else{
        reject("x is not defined");
    }
}

)
console.log(p);
console.log("end");

const p2 = new Promise (function(resolvea , rejectb){
    setTimeout(()=> console.log("i will execute after 2 sec inside promise p2"),2000);
})
console.log(p2);
// p2 promise hai ek async call hai 
// settimeout callback hai tou ye excute hone mai time lagega tb tk p2 pending mai he rahega