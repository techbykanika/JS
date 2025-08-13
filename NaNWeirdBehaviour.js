var nanvar=NaN;
console.log(typeof(nanvar));
if(nanvar == NaN){
    console.log("if this print it means nan is equal to itself");
}
else {
    console.log("nan is not equal to itself");
}

console.log(2+NaN);
var x;
//udefined plus number is Nan
console.log(2+x);
//index of doesnt work on nan
var arr=[2,3,"kk",NaN,true,nanvar];
console.log(arr.indexOf(true));
// this woll give -1 because index uses equality operator
console.log(arr.indexOf(NaN));
console.log(arr.indexOf(nanvar));;;
