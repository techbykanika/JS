
'use strict';
for ( var i=0;i<3;i++){
    setTimeout( function log(){
        console.log(i)
    },1000);
}
let x=3
function scope1(addasymbol){
    let vlscope1=2;
    console.log(" we are inisde scope 1 ")
     return function scope2(scope2var){
        // this function has access to all the variables present in global and its parent scope 
        // it somehow remember what value its parent has 
        // and when this function is called it access the value of its parent 
        console.log(addasymbol,vlscope1,x,scope2var);

    };

}
const scope1return = scope1("#");
scope1return("scope 2 varibale value ");
// console.log(vlscope1);

const obj ={
  
    no1:2,
    no2:3,
    addfunc : function (){
        let valueaddfunc=3;
        console.log(this);
        console.log(this.no1+this.no2);
        //console.log(no1+no2) //this gives an error that no1 is not defined because in this scape the scope is taken by default as global

        return function innerfunction(){
            console.log(valueaddfunc);
            console.log(this);
            console.log(no1+no2);
          

        }
    }
}
const obj2 ={no1:100,no2:200}
const innerfunc =obj.addfunc();
// console.log(obj2.innerfunc());



function inc(count){
    console.log("in inc")
    count = count+1;
    console.log(count);

}
var count =100;
inc(count);
console.log("outside inc")
console.log(count);