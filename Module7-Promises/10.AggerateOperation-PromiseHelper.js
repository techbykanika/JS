// 4 aggerator fucntiomn - work on collection of promises 
'use strict';
const { resolve } = require("path")

// Promise.all 
// Promise.race
//Promise.allsetteld
//Promise.any


function sleep (ms,value){
    return new Promise  ( (r) => 
        setTimeout(r(value),ms)
    )
}
sleep(2,"a").then(x => console.log(x));
console.time();
// all these promises are happening parallelly in aggregate function Promise.all()
Promise.all([sleep(4000,'a'),sleep(3500,'b'),sleep(4000,'c')]).then(console.timeEnd());
Promise.all([sleep(4000,'d'),Promise.reject('reject')]).catch((a)=>console.log(a));
Promise.all([]).then(console.log("i am done"));

// Promise.all race 
// Promise.race([httpGet('http://example.com/file.txt'),delay(5000).then(function (){
//     throw new Error("timed out");
// })
// ]).then(function(text){console.log(text)}).catch(x=>console.log(x));

//Promise.all settled 
Promise.allSettled([Promise.resolve('a'),Promise.reject('b')]).then((arr)=>console.log(arr));
// Prmoise.any
const perr = new Promise((resolve,reject)=> {
    reject("always fails");
});
Promise.any([perr]).catch((err)=> {
    console.log(err);
});
Promise.any([perr,perr]).catch((err)=>{
    console.log(err.errors);
});

