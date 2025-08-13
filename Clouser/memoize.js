
const memoize = require('lodash/memoize');
function fib(n){
    if(n<2){
        return n;
    }
    return fib(n-1)+fib(n-2);
}

console.time();
console.log(fib(40));
console.timeEnd()
console.time();
console.log(fib(20));
console.timeEnd()
console.time();
console.log(fib(40));
console.timeEnd()
// console.time();
// console.log(fib(50));
// console.timeEnd()
const fibM = memoize(fib);
console.time();
console.log(fibM(40));
console.timeEnd();
console.time();
console.log(fibM(40));
console.timeEnd();
