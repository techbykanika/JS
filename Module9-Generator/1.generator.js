function normalFunction(){
    console.log("i am awesome");
}

function * genratorFunction(){
    console.log("started");
}

normalFunction();
genratorFunction();
console.log("calling noraml function ",normalFunction());// by default normal function returns undefined
console.log("calling generator function",genratorFunction());// by default genrator function return a object in 
// this object we can call .next() method