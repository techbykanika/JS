// 1 range function similar to pythoon 
'use strict'
function range(upperbound){
    const result =[];
    for (let i=0;i<upperbound;i++){
        result.push(i);
    }
    return result;

}
console.log("result from range function \n",range(10));
// if i give very big number in range function then its going to through error we require very large array 
// so we will run out of meemory 
//console.log(range(1000000000));//Fatal JavaScript invalid size error
// we are not able to genrate very large range of number from 'range' function
// we can use generator for this sceanrio because generate runs on lazy excution 
function *rangeG(upperbound){
    for (let i=0;i<upperbound;i++){
        yield i;
       
    }
}
console.log(rangeG(1000000000));
// for (let el of rangeG(10000000000)){
//     console.log(el);
// }



// example 2 cycle 
function *cycle(iter){
    let i=0;
    while(i<=iter.length){
        yield iter[i];
        i++;
        if(i >= iter.length){
            i=0;
        }
    }
}
let cycle1 = cycle(["kk","kanu","kanika"]);
console.log(cycle1.next());
console.log(cycle1.next());
console.log(cycle1.next());
console.log(cycle1.next());
console.log(cycle1.next());
console.log(cycle1.next());
console.log(cycle1.next());

//above cycle code wont work if we have sets because in sets we can do like iter[i]
// better way for cycle generator 
function *cycleE(iter){
    try {
        if (typeof iter[Symbol.iterator]!== "undefined"){
            while(true){
                for (let el of iter){
                    yield el;

                }
            }

        }
        else {
            throw Error("value passed in not iterable");
        }
    }
    catch(e){
        console.log(e);
    }
    
}
let cycleE1= cycle([1,2,3]);
console.log(cycleE1.next());
console.log(cycleE1.next());
console.log(cycleE1.next());
console.log(cycleE1.next());
let obj ={
    a:2,
    b:3
};
let cycleE2Obj=cycleE(obj);
console.log(cycleE2Obj.next());
console.log(cycleE2Obj.next());
console.log(cycleE2Obj.next());







// ex 3 
// revers 
function *reverse(iter){
    for(let i=iter.length-1;i>=0;i--){
        yield iter[i];

    }

}
let reverse1 = reverse([1,7,89]);
console.log(reverse1.next());
console.log(reverse1.next());
console.log(reverse1.next());
console.log(reverse1.next());
let reverse2 = reverse([1,2,3,4,5,76]);
for (let el of reverse2){
    console.log(el);
}
//in this reverse space complexity is constant as we are not using array to store the reverse of iterabel
for (let el of reverse("kanika")){
    console.log(el);

}


