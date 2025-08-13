// every object has a poperty anamed as [[prototype]] we cant access it it help js in tracking the parents of object 
// this property does not offer create update and delete it only offers read 
// we cant print and access [[prototype]] because it is internal property 


// To know property exist or not we use either in or hasOwnProperty operator 
const obj ={

    property1:"one",
    proptwo:"two",
    xyx:"xyx",
    [Symbol()]:{},
};
console.log("toString" in obj);// this is true because its taking from parent object very object by default has tostring property attached to it 
const parentfobj ={
    parentProperty:"anthtinf",
    parentname:"ppppppppppp"
};
console.log("xyx" in obj);
console.log(obj.hasOwnProperty("toString"));
console.log(obj.hasOwnProperty("xyx"));