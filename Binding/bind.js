function sum (){
    return this.a+this.b
}

var objsum ={
    a:2,
    b:2,
    sumof: function (){
        return this.a+this.b;
    }
}
console.log("calling sum");
//console.log(sum());
console.log("calling sumof with objsum");
console.log(objsum.sumof());
var bindsum = sum.bind({a:20,b:2});
//---------------------------------------------------------
console.log("calling bind sum");
console.log(bindsum());
console.log(bindsum + "this is bindsum");
console.log(typeof(bindsum));
//----------------------------------------
var bindsumof= objsum.sumof.bind({a:40,b:30})
console.log("calling bindsumof");
console.log(bindsumof());
console.log("passing bindsum to the var and then invoking it")
var sumb=bindsum;
console.log(sumb());
//------------------------------------------------------------------
//function sumd get invoked at global scope so its value will be undefined 
//it will print the value which is bind to it 
var sumd=objsum.sumof;
console.log(sumd());
// jo ek variable ke sath function ki value bind kr di phir uski bind kari hui value change nahi ho skti hai
var sumbindbind=bindsum.bind({a:100,b:100});
console.log(sumbindbind());

// 