function *gen(){
    console.log("started")
    //value wriiten after below yiled get returned to first time next() is called 
    console.log(`"at first yield -passed value to next() is" ${yield 52}`);
      //value wriiten after below yiled get returned to second time next() is called 
    console.log(`at second yiled - passed value to next () is ${yield 73} ` );


}
let gen1 = gen();
//  
// value passed in below next is not used as we have no n-1 yield for this 
console.log("value which came from first yield- calling next 1 time", gen1.next(["passed value"]));
console.log("--------------------------------------------------------------------------------------");
//value passed in below next goes to first yiled
console.log("--------------------------------------------------------------------------------------");
console.log("value which came from second yield-calling next 2 time", gen1.next(["passed value 2"]));
//value passed in below next goes to second yiled
console.log("--------------------------------------------------------------------------------------");
console.log(gen1.next("i am have been passed at end"));
