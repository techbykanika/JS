Promise.reject(10)
.catch( x => {
    console.log(x);
    return 20;
}).then ( x => {
    console.log(x);
    return 30
}).catch ( x => {
    console.log(x);
    return 40;
}).then(x => console.log(x)).
then 
( x => 
    {throw new Error('this is error');}
).then( x => console.log(100)).
catch( x => console.log(x));