const obj ={
    arr:[1,2,3,4],
    signal:"red",
    anything :{a:"rubbish",b:"more rubbish"},
    [Symbol()]:{},
};
const parentOfObj ={
    parent1:"parentone",
    parent2:"parent2"
};
const arr2=[1,2,3,4]
console.log("------------------------------------------------------------------------------------------------------------");
// tradiotnal for loop
for (i=0;i<arr2.length;i++){
    console.log(arr2[i]);
}
console.log("------------------------------------------------------------------------------------------------------------");
for (prop in obj) {
    console.log(prop);
    console.log(obj[prop]);


}
console.log("------------------------------------------------------------------------------------------------------------");
Object.setPrototypeOf(obj,parentOfObj);
console.log("printing after we have set the parent of obj as parentofObj");
for (prop in obj) {
    console.log(prop);
    console.log(obj[prop]);


}
console.log("------------------------------------------------------------------------------------------------------------");
// in kw when used with for also print parent properpty 
// we dont get to know with for in how many tikmes loop will run parent object might be dynamic
//----------------------
// object methods
console.log("------------------------------------------------------------------------------------------------------------");
console.log("using keys method of object to get  keys of properpty");
const keysOfObj = Object.keys(obj);
console.log(keysOfObj);
keysOfObj.forEach( key => console.log(key));
console.log("------------------------------------------------------------------------------------------------------------");
console.log("using value method of object to get values of key");
const valuesOfObj = Object.values(obj);
console.log(valuesOfObj)
valuesOfObj.forEach(value => console.log(value));
console.log("------------------------------------------------------------------------------------------------------------");
console.log("using entries method of object to get key value pair or to get propety");
const entries = Object.entries(obj);
console.log(entries);
entries.forEach((pair)=> console.log(pair));
entries.forEach((pair) =>
{
    const [key,value] = pair;
    console.log(`key is ${key}, value is ${value}`);
})
console.log("------------------------------------------------------------------------------------------------------------");
console.log(" entries , keys , values all these object method dont print symbol , these method dont take parent value in consideration");
console.log(" for in loop take parent property also in  consideration")
console.log("------------------------------------------------------------------------------------------------------------");




