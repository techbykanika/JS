function *gen(){
    try{
    console.log(`1.${yield 32}`);
    
    }
    catch (el){
        console.log("shit thr is error ",el);
    }
    console.log(`2.${yield 33}`);
    console.log(`3.${yield 34}`);
    console.log(`4.${yield 35}`);
}
let gen1 = gen();
//console.log(gen1.throw(new Error("this is error "))); - this will throw at the start itself
console.log(gen1.next());
console.log("------------------------------------------------------");
console.log(gen1.throw(new Error("this is error ")));
console.log("------------------------------------------------------");
console.log(gen1.next("i am passed from 2nd next"));
console.log(gen1.return("generator is returing now"))

console.log(gen1.next());