

const funcPromise =(x) => { return new Promise ( function(resolve , reject){
        if(x==10){
            resolve ("x is equal to 10");
        }
        else if (x>=10 && x<=30){
            reject ("this is an error thrown by reject");
        }
        else if (x==50) {
            throw new Error('a');
            
        }
    })
};

funcPromise(10).then( (x )=> console.log(x)).catch( (err) => {console.log(err);});
funcPromise(20).then( (x )=> console.log(x)).catch( (err) => {console.log(err);});
funcPromise(50).then( (x )=> console.log(x)).catch( (err) => {console.log(err);});
