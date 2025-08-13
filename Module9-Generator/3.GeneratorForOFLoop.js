'use strict';
function *generator(){
    console.log(" i will be called  before first yield ");
    yield " 1 -i am first return from next() ";
    console.log(" i am after first yield has been encountered and 2nd next is called ");
    yield "2- i am second return from next()";
    console.log("  i am after second yield has been encountered and 3rd nedxt is called  ");
    yield "3 -i am third return from next() ";
}

let iter1 = generator();
for (let eachYield of iter1){
    console.log(eachYield);
    console.log("\n");
}


function *naturalNumbers(){
    console.log("i am outside ")
    let num =1 ;
    while (true){
        console.log("isnide natural")
        yield num;
        num=num+1;// call get suspended here and when next is called again it resumes form here 


       
    }
}

let iter2 = naturalNumbers();


console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());

// for (let eachItem of iter2){
//     console.log(eachItem);
// } // this will be infinete because after calling next() function has always something to yield 


function *take(n,iterable){
    console.log("i am outside for loop")
    for (const x of iterable){
        console.log("inside take")
        if(n<=10) return;
        n--;
        yield x;
    }
}
console.log("-----------------------------generator has genrator in parameter---------------");
let takeIter = take(5,naturalNumbers());
takeIter.next();
// doubt kn natural vala ka next of vale loop se call hora hai kuya 
// 54 line pe debugger laka ke dikhan phir ask doubt











