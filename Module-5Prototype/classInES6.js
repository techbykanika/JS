class Person{
    constructor(a,b){
        this.a=a;
        this.b=b;
    };
    func (){
        console.log(this.a,this.b);
    }
}
class Employee extends Person{
    constructor(a,b,c){
        super(a,b);
        this.c=c;
    }
    funcEmpoylee(x){
        console.log(x);
        console.log(this.a,this.b,this.c);
        super.func();
    }
}
console.log("[[prototype]] Person",Object.getPrototypeOf(Person));
console.log("[[prototype of Person.prototype",Object.getPrototypeOf(Person.prototype))
console.log(".prototype of Person",Person.prototype);
console.log("[[prototype]] Employee",Object.getPrototypeOf(Employee));
console.log("[[prototype]] of Employee.prototype",Object.getPrototypeOf(Employee.prototype));
console.log(".prototype of Person",Person.prototype);
console.log(".prototype of Employee",Employee.prototype);
let emp = new Employee("kanika","kala",24);
console.log("[[prototype]] emp",Object.getPrototypeOf(emp));
emp.funcEmpoylee();
emp.func();





