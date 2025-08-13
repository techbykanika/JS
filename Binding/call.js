function sum (a,b){
    //this a will be which we passed as positional argument 
    console.log(a);
    console.log(b);
    console.log("we are in function");
    console.log(a+b);
    //this.a is which come as an object.a 
    console.log(this.a);
}
obj={a:10,c:300}
sum.call(obj,2,4);
sum.apply(obj,[]);