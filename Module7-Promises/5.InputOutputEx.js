p = new Promise((resolve,reject)=> {
    resolve(10);
    resolve(20);
}).then(x=>console.log(x));
// 2
p = new Promise((resolve,reject)=> {
    reject(10);
    reject(20);
}).catch(x=> console.log(x));
// 3
p = new Promise((resolve,reject) => {
    reject(10);
    reject(20);

}).then(x=> console.log(x))
.catch(x => console.log(`catch ${x}`));
//4

p = new Promise((resolve,reject) => {
    resolve(10);
    reject(20);

})
.catch(x => console.log(`catch ${x}`)).then(x=> console.log(x));



// 5
Promise.resolve(10).then(x => console.log(x))
.then(x => console.log(`x in .then ${x}`))
.then(x => console.log(`x in .then ${x}`));
//5
p= Promise.resolve(10)
p.then(x =>console.log(`1 .then ${x}`));
p.then(x =>console.log(`1 .then ${x}`));
p.then(x =>console.log(`3.then ${x}`));




//7

// p = new Promise((resolve,reject) => {
//     reject(10);
//     reject(20);

// }).then(x=> console.log(x))