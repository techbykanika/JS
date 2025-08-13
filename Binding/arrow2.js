//'use strict'
class MyClass {
    constructor() {
      this.myProperty = 42;
    }
  
    // Regular function as a class method
    regularMethod() {
      console.log(this.myProperty);
    }
  
    // Arrow function as a class method
    arrowMethod = () => {
      console.log(this.myProperty);
    };
  }
  
  const myObj = new MyClass();
  myObj.myProperty;
  myObj.regularMethod();
  
  // const regularFunctionReference =myObj.regularMethod;
  // regularFunctionReference(); // Output: undefined
  
  const arrowFunctionReference = myObj.arrowMethod;
  arrowFunctionReference(); // Output: 42
  