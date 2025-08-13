// threee sematic behaviour of promise 

// 1
// Passing string to the resolve 
Promise.resolve('abc').then(x => console.log(x));
// Passing array to the resolve
value =[1,2,3]
const p =Promise.resolve(value).then(x => console.log(x));

console.log(p===value);
console.log(Promise.resolve(p)===p)// false 
//2 
// if you pass promise to the resolve then that promise which was passed comes bacl
console.log(Promise.resolve(p)===p) // true

// 3
// if you make the object whcih has than and pass it to the promise then object thenable function
// should get resolve and it settlemt will be passed to the Promise to which object was passed 
const thenableObj= {
    then(resolve,reject){
        resolve("hello");
        console.log(" we inside then of object and it has been resolved ");
        console.log("type of reject inside thenable object");
        console.log(typeof reject);
        
        
    },
};
const promise = Promise.resolve(thenableObj);
console.log(promise instanceof Promise);
promise.then(x => console.log("we are inside then associated with  const promise : ",x));

//4 
Promise.reject(new Error("fail")).catch( x => console.log(x));
Promise.reject(new Error("i am error")).then((x)=> console.log("i am resolved"),(x) => console.log("i am rejsct"));