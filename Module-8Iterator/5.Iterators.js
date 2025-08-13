'use strict'
const emoji="😊🤣😂😒😁👌abc";
const str="kanika"
const map = new Map([
   ["map1","value1"],
   ["map2","va;ue2"]

])
// c style for loop
// emojis cant be read throught this loop

 for( let i=0;i<emoji.length;i++) {
    console.log(emoji[i]);

 }

 for (let eachchar in emoji){
    console.log(emoji[eachchar])



 }

 var obj ={
    aa:"65",
    bb:"66",
    cc:"88",
    func : function printmyname(param){
        console.log(param);
       // console.log(aa); this gives an error because by default it sees the global scope

    }
 }
 for (let eachitem in obj){
    console.log(eachitem);
 }
obj.func("kanika");

//symbol.iterator is function whihc return object and that object has one property as next()
console.log(emoji[Symbol.iterator]);
console.log(obj[Symbol.iterator]);// obj is not iterable
console.log(str[Symbol.iterator]);
console.log(str[Symbol.iterator]);

for (var x of map){
   console.log(x);
}
for (var x of emoji){
   console.log(x);
}
for (var x of str){
   console.log(x);
}
// for (var x of obj){
//    console.log(x);
// } // this wont work because obj is not itrable 
for (let i in obj){
   console.log(i);
}
console.log(Object.getOwnPropertyDescriptors(obj));






