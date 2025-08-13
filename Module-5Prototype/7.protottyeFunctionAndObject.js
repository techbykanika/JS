function Person(Name,age){
    if(!new.target){
        throw new Error ('should use new');
    }
    this.name=Name 
    this.age=age
}
var person1 = new Person("kanika",24);
var person2=new Person("nivedita",25);
Person.prototype = {
    hobby:"reading",
    profession:"coding",
    focus:"awesome",
    func: function toupper(){
        this.hobby.toUpperCase();
        console.log(this.hobby)
    }
}
console.log(Person.prototype);
y=Object.getPrototypeOf(Person)
console.log(y);
console.log(Object.getPrototypeOf(person1));



