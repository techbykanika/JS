const obj ={
    a:2,
    b:"kanika",
    get c (){
        return this.c
    },
    set c (value){
        this.c=value
    },
    func :function (){
        console.log(this.a,this.b);

    }
};
// for the property a,b,c, func in 'object' , 'obj' w e c are true by default
function print(obj,reasonToUSe){
    console.log(reasonToUSe);
    console.log("printing the object and its property ",obj);
    console.log("Printing attribute of all the properties of object");
    console.log(Object.getOwnPropertyDescriptors(obj));
    console.log("printing the name of all the properties")
    console.log(Object.getOwnPropertyNames(obj));
};
//obj.func(); uncomment this and see how clouser works 
print(obj,"Created a object named as obj and has two data property and one accessor with get and set");
 

// here define a new property of 'obj' using literal object notation
obj["newProp"]="this is what i have added after declaring a 'obj'";
print(obj)
print(obj,"Added a new property using liternal notation, Look at 'newProp'configurable writbale and enumerable default value ");
/// we can see that when we decalre a property using literal notatio w , e , c are true by default

// we can define attribute of the property by the method -
//Object.definePropert(nameOfobjet, nameofProperty,{attributes of property})
// we can define attribute of the property by the method -
// by default we we define property by () the e , w ,c become false

Object.defineProperty(obj,"addPropByDefineProperty",{value:"ye add kra hai thorugh Object.DefineProperty"});
print(obj,"Created a property name as- 'addPropByDefineProperty' WHO 'Object.defineProperty()'. Please see the default value of w ,e,c  ");
// we can see that when we define the attribute of property or make a property using Object.defineProperty() w ,e and c becomes false by default



// I i do console.log(delete obj.addPropByDefineProperty) in strict mode this will throw error 
//it wont delter in case of sloppy mode this line wont have any effect because by default c is fasle 
//console.log(delete obj.addPropByDefineProperty);

Object.defineProperty(obj , "addingGettertterProperty" ,{
     get prop4(){return this.adding},
      set prop4(value){
        this.adding=value;
        

      },
    configurable:true,
    enumerable:false,
    //if enumrable is false cosnole.log(obj ) wont print it because its not enumerable
 // above line gave erroe so commented it 
//writable:true/
//It doesn't make sense to say if a property is writable when you explicitly state what happens when you try to write it.

});  
print(obj, "Created a property name as- 'addingGettertterProperty' WHO 'Object.defineProperty()'. e and c are set to ture  "); 

// updating addPropByDefineProperty 
Object.defineProperty(obj,"addingGettertterProperty",{enumerable:true});
// we cant do this because configurable is false and this wi;; give error
print(obj, "Updated the obj 'addingGettertterProperty' define property attribute e to true ");
// updating addPropByDefineProperty 
Object.defineProperty(obj,"addPropByDefineProperty",{configurable:true});
// we cant do this because configurable is false and this wi;; give error
print(obj, "Updated the obj 'addPropByDefineProperty' define property attribute c to true ");
//u cant delete a property, change type from data to accessor , or chnage its atrribute values to true or flase except [[value]]