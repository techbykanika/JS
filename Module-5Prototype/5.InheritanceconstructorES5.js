function c(){
    this.a=37;
}
var o = new c();
console.log(c.a);

function d(p,q){
    this.a=67;
    this.b=73;
    this.m=8+9+p+q;
  
}
    var x= new d();
    console.log(x);
    console.log(d());
    x.prop="new prop";
    console.log(x);
// create parent and child object make a new object of function uisng new keyword 
var parent1 ={
    parent1prop:"parent",
    valueOFY:2,
    funcPArent1:function parent1Func(){
        this.a=2;
        console.log("this is function of parent1 object and i am printing you have called me ");
        console.log(`parent1- ${this} `);
        // i returning 2 ao my return will be this - in case of calling the function with new keyword
        // if i return a object than object will be returnes - in case of calling the functio n with new keyword
        return 2;
    }
}

var childOfParent1 = Object.create(parent1);

var newobje = new parent1.funcPArent1();
console.log(newobje);
console.log(newobje.a);

