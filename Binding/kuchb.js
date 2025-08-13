function increment(){
    let c=10;
    console.log(c);
    function inc(){
        c++;
        console.log(c);
    }
    let message =`count is ${c}`;
    let z=c+100;
    function log(){
        console.log(z);
        console.log(c);
        
        console.log(message);
    }
    return[inc,log];
}
// const c=5;
const [incrementt,logg]= increment();
const [i,l]=increment();
incrementt();
incrementt();
incrementt();
logg();
console.log("---------------------------------------------------")
i();
i();
i();
i();
l();
