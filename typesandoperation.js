// we have totsl 7 data type . 6 are primitve and 1 is non primitve
//Primitve -> null , undefined , string , number , symbol ,boolean
//Non-primitive -> object 
console.log("type of null:") ;
console.log(typeof(null));
console.log("type of number:") ;
var x=2
console.log(typeof(x));
 var str="kanika";
 console.log(typeof(str));
 var undefinedvar;
 console.log("type of only declasred var ") ;
console.log(typeof(undefined));
var obj={}
console.log("type of object:")
console.log(typeof(obj))
var boolvar=true;
console.log("type of Bollean :")
console.log( typeof(boolvar));
//----------------------------------------------------------------
console.log("type of infinity plus and minus");
console.log(typeof(Infinity));
console.log(typeof(-Infinity));
// operation on number
console.log("sum of two number ")
console.log(2+2);//4
console.log("sum of null and number ")
console.log(null+2);
console.log("sum of bool and number")
console.log(2+true);
console.log("sum of bool and number")
console.log(2+false);
console.log(82/true);
console.log("sum of string and number gives string")
console.log(2+'3');
console.log("div of string with number gives number")
console.log(2/'3');
//null becomes 0 on typecast , bollean to 0 or 1 for false and true , undefined becomes nan 
var z;
console.log(z+2);// nan
console.log("type of nan is number")
console.log(typeof(z+2));

console.log("sum of empty string and number")
console.log(2+"");

