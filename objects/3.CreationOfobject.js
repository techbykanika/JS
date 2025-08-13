
// First mentod is literal notation
'use strict'
var objCreation ={
    a:"name of object",
    "2":"number",
    "arr":[2,2,4,5,"kk",{a:2}],
    null:"null",
    "floatno":10.23, 
    "nestedobj":{
        "x":1,
        "y":"kk"
    }

};
console.log(objCreation);
console.log(typeof(objCreation.nestedobj.x));
console.log(typeof(objCreation.arr));
console.log(objCreation.arr);
// first i have to intialize a object than only after adding the element i can make it cyclic or else itr will throw an error 
const cyclicobj={
    
}
cyclicobj["a"]=cyclicobj;
console.log(cyclicobj);


// 2 is constructor or new method
var objThrowNew = new Object();
objThrowNew.name="kanu";
console.log(objThrowNew);
// 3 is throw object.create 


