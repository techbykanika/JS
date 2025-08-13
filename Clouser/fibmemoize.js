function fib(n){
    if(n<2){
        return n;
    }
    return fib(n-1)+fib(n-2);
}
function time(fn){
    console.log("inside time function and value of fn is ");
    console.log(fn);
    console.time();
    fn();
    console.timeEnd();

}
function memoize(fn){
    let cache = new Map();
    console.log(`we have created cache ${cache}`);
    return function (...args){
        console.log(" we are inside the fuction which check fibonaic function kbi same value ke liye execute hua hai ki ni")
        const key = args.toString();
        if (cache.has(key)){
            
            return (cache.get(key));
        }
        cache.set(key,fn(...args));
        return (cache.get(key));

    }



}
const fibMemo = memoize(fib);
time(() => fibMemo(35));
time(() => fibMemo(35));
time(() => fibMemo(35));
time(() => fibMemo(35));
time(() => fibMemo(35));