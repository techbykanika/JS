
// class parent {
//     constructor(parent1,parent2){
//         this.parent1=parent1
//         this.parent2=parent2
//     }

// }
const obj ={
    
    enum:"e -true"
}
// Object.setPrototypeOf(obj.prototype,parent.prototype);


Object.defineProperty(obj,"nonEnumerableProp",{value:"nonenum",enumerable:false});
Object.defineProperty(obj,"nonEnumerableProp2",{value:"noenum2"});
// we can see we have 2 own property in object 'obj' .One is enum and another is nonEnumerableProp
// but 'nonEnumerableProp' enumerable is false so all the functions like keys , values , enteries whcich look for enumerable 
// property wont look it 
console.log("printing keys");
console.log(Object.keys(obj));
console.log("printing entries");
console.log(Object.entries(obj));
console.log("printing values");
console.log(Object.values(obj));
Object.prototype.newEnumPropInObject=999;
// this is from equal to operator so definetly its enumerable
// Doubt  these below 2 line  will get inherited

Object.defineProperty(Object,"nonenumPropInObject",{vaule:"nonenumPropinObject"});
Object.defineProperty(Object,"enumPropInObject",{value:"enumPropInObject",enumerable:true});
 
// Detection of properties using for in loop 
// For in loop can detect all enurable properties of object and its parent
console.log("For in loop primt 'ENUMERABLE properties' of object and its parent ")
for (let eachkey in obj ){
    console.log(eachkey);

}
// getownPropertyname getownPropertysymbol gves all the own properties of object doesnt matter they are enumerable or 
//non enumerable
console.log("print all the properties of object 'obj' using getOwnPropertyNames as this print enumerbale and non enumerbale of object only ");
console.log(Object.getOwnPropertyNames(obj));
console.log("print all the properties of object 'Object' using getOwnPropertyNames as this print enumerbale and non enumerbale of object only ")
console.log(Object.getOwnPropertyNames(Object));


console.log("In order to get all the properties of parent wether they are enumerbale or not we have to wwrite a custome function");
function getAllProperties (obj){
    let result =[];
    while(obj){
        console.log(" we are inside getAllPropetry loop and below we are printing object for which we will fetch enumerbale as well as non enumerbale property")
        console.log(obj);
        result=result.concat(Object.getOwnPropertyNames(obj));
        obj=Object.getPrototypeOf(obj);
       
    }
    return result

}

console.log(getAllProperties(obj));