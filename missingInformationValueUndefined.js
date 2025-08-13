




// Js have two value for missing information one is undefined 
// and second is null
// 1 if value is defined but not intializaed its undefined

var onlydefined;
console.log("variable  only defined not intialized has value undefined. Print onlydefined value ")
console.log(onlydefined);
//------------------------------------
// if value is not passed to parameter it is undefined 
//ex1
function sum(n01, no2){
    return n01+n02;
}
//sumofno=sum(2); -> this gave reference error
//console.log(sumofno);
//ex2
function displayno(no1,n02){
    console.log(no1);
    console.log(n02);
}
console.log(displayno(3));

//---------------------------------
//if we read any property from object which does not exist than it is undefned 
obj={}
console.log(obj.name)

