function multiplyTwoNumber(a,b){
    console.log("i am in function");
    console.log(a*b);
}
var multiplyTwoNumberBind = multiplyTwoNumber.bind(multiplyTwoNumber,10,100);
multiplyTwoNumberBind();
var multiplyTwoNumberBindWithoutThis = multiplyTwoNumber.bind(2,3);
multiplyTwoNumberBindWithoutThis();
var multiplyTwoNumberWithNull = multiplyTwoNumber.bind(null,10);
multiplyTwoNumberWithNull(100);

function demo(param1){
    console.log(param1);
    console.log(this.a);

}
let x=demo.bind(null,[1,2,3]);
x(10);