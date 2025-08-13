const obj ={
    a:2,
    b:"kanika"
}
// obj inherits from 'Object' 
Object.prototype.newprop=2;
// in operator looks for things in parent also
console.log('toString' in obj);
console.log("newprop"in obj);
// hasownProperty looks for things only inside itself . Consider only no inherted properties
console.log(obj.hasOwnProperty('toString'));