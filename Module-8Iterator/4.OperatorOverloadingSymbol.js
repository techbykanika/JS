class operatorOverloadingInstance {
    static [Symbol.hasInstance] (){
        console.log("symbol has instance is called ")
        return false;

    }
        
    }

    const a = new operatorOverloadingInstance()
    console.log(a instanceof operatorOverloadingInstance);

    class B{
        constructor(A,B){
            this.a=A;
            this.b=B;
        }
         name(param) {
            console.log(param);
            console.log(this.a,this.b);
            
        }
    }
var objB= new B("a","b");
console.log(objB instanceof B);
objB.name("kanika");