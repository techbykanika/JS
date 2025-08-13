try{
    let obj1={
        "1234":{
            "name":"kanika"
        },
        123:{
            name:"shardul"
    
        }
    }
    let obj2=obj1;
    obj2["1234"].name="shardul";
    console.log(obj1);
    obj3= JSON.parse(JSON.stringify(obj1));
    obj3["1234"].name="change";
    console.log(obj1);
    console.log(obj3);
    // spread operatior 
    obj4=[...obj1];
    obj4["1234"].name="yana";
    console.log(obj4);
    //sprad operator is used to copy the object
    // syntax is let obj2={...obj1}
    // it is shallow copy
    // it is not deep copy
    

}
catch(err){
    console.log(err);
}
// how to loop through object
// for in loop
// for of loop
// to iterate object we use for in loop
// for example
/// now we have to iterate through obj1
for(let key in obj1){
    
}
