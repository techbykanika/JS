function CountLengthOfObject(obj)
{

    
    if(typeof(obj)=='object'){ 
        
        console.log(" length of object");
        console.log(Object.keys(obj).length);
        console.log("try sending null this and this code will break at above line");
    }
    
}
CountLengthOfObject({a:5});
CountLengthOfObject({});
//CountLengthOfObject(null);
function CountLengthOfObject2(obj)
{

    
    if(typeof(obj)=='object' && obj !== null ){ 
        
        console.log(" length of object");
        console.log(Object.keys(obj).length);
        console.log("try sending null this and this code will  not break because i know object type of null is object");
    }
    else{
        console.log("if i am getting printed you have send a null instead of object i know object type of null is object ");
    }
    
}

CountLengthOfObject2({a:5});
CountLengthOfObject2({});
CountLengthOfObject2(null);
