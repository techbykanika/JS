function *gen(){
    console.log(`1. ${yield 1}`);
    console.log(`2. ${yield 2}`);
    console.log(`3. ${yield 2}`);
    console.log(`4. ${yield 2}`);
}
let gen1 = gen();
console.log(gen1.next());
console.log("----------------------------------------------------------------");
console.log(gen1.next("i have paased at 2nd next call"));
console.log("-------------------------------------------------------------------");
console.log(gen1.return("this is end"));
console.log("------------------------------------------------------------------");
console.log(gen1.next());
