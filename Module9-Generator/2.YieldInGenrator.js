function *generatorFunction(a){
    console.log("i have started it");
    yield 5;// first time next yahan tk sn kuch excute karega and will gove value as 5
    console.log("i am after yeild1 5");// when we will call next second time this will get called 
    console.log("we are going to print a after this we have yield2")// as we have yet not encounter yield this will also get printerd at second next call
    yield a;// second next call will end here and will return "a" as we have ecounterd next
    yield 7;// third next will yield 7 and will pasue at this point 
    console.log("i am here at end ");// 4 next willl print this
    console.log(" i want to see i am getting printed or not")// 4 next() will print this 
    // as after this we have no code in generatorFunction() 4 th next will return undefined 
    // 5th next() call will return underfined and so on 6 and 7th
}

const iter1= generatorFunction("passed value");
console.log("iter1",iter1);
const iter2 = generatorFunction("2 nd passed value");
console.log("iter2",iter2);

console.log("calling next",iter1.next());
console.log("----------------------------------------------------------")
console.log("calling next",iter1.next());
console.log("----------------------------------------------------------")
console.log("calling next",iter1.next());
console.log("----------------------------------------------------------")
console.log("calling next",iter1.next());
console.log("----------------------------------------------------------")
console.log("calling next",iter1.next());
console.log("----------------------------------------------------------")
console.log("calling next",iter1.next());



