
function *cycle(iter)
{
    while(true)
    yield* iter
}
let cycle1 = cycle([1,2,3]);
console.log(cycle1.next());
console.log("---------------------------------");
console.log(cycle1.next());
console.log("---------------------------------");
console.log(cycle1.next());
console.log("---------------------------------");
console.log(cycle1.next());
console.log("callee and caller function");

function *callee(){
    console.log("callee");
    console.log(`${yield 32}`);// 2. yahan pe suspend ho jaega 3. yahni se start hoga

}
function *caller(){
    while(true){
        yield* callee();// 1.yahan se calle pe jaegae 5. phir yaha se call karega and repeat 1 , 2 3 ,4
        console.log("ese he");// 4 ye print hoga
        //yield 32;
    }
}
let caller1= caller();
console.log("-----------1----------------------");
console.log(caller1.next("i have been paseed from 1st next"));
console.log("-------------2--------------------");
console.log(caller1.next("i have been paseed from 2nd next"));
console.log("--------------3-------------------");
console.log(caller1.next("i have been paseed from 3rd next"));
console.log("---------------------------------");