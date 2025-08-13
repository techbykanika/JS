// object doesnt not have a property k/a symbol.itrerator we cant for of loop in this 
// in order to use for of we need to implent symbol.iterator property 
// symbol.iterator is function when we excute it it returns a object k/a iterator which need to have 
// function named as next
const obj ={
    // name of the method 
    // entire object is called iterator 
    // inner object is know as iteratable
    [Symbol.iterator](){
        return {

            next(){
                return {value:10,done:false};



            },
        };

    },

}
for (let el of obj){
   console.log(el) ;
}