
// "use strict"
function person (nameOfperson){
    console.log("seeing what is value and type of 'this':");
    console.log(this);
    console.log(typeof this);
    this.nameOfperson= nameOfperson;

}
// when we use new kw this becomes the empty object and that object is type of the Peroson for above exmaple this is independent of sticrt 
//sloppy mode 
new person("kanika");
console.log(global.nameOfperson);


function personCopy(b){
    
    console.log("seeing what is value and type of 'this':");
    console.log(this);
    console.log(typeof this);
    this.a=b
};
// if we use strict gobal become undefined and this.a  will give refernce error 
// if we use sloopy mode this take global scope by default
personCopy("kala");
console.log(global.a);
