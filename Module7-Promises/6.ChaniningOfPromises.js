'use strict';
const delay = (ms) => new Promise( 
    function (resolve, reject){
    setTimeout( () => resolve(Math.random()*1000),ms);
    //setTimeout(resolve(10),3000);
    //setTimeout(resolve,3000); //esa kra tou line no 8 i am inside promise vali line chal ri h
    // doubt jese he resolve call krdiya hme niche se koi mtlb nahi h

    setTimeout(()=> console.log(" i am isnide the promise "),3000);
  
}
)

delay(2000).then((x) => {
    console.log("1");
    console.log(x);
    return delay(3000)
})
.then((xy)=> {
    console.log("2");
    console.log(xy);
    return delay(3000)
    
})
.then((xyz) => {
    console.log("3");
    console.log(xyz);
    return delay(3000)
}).then ((num) => console.log(num)).catch((error)=> console.log(error));
// if error happens at any line the nearest castcj will catch it
// for all the then there is one only one catch