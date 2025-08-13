let obj ={
    _i:0,
    [Symbol.iterator](){
        return this
    },
    next(){
        return {value:this._i++,done:this._i>10}
    } 

}
for (const el of obj){
    console.log(el);
}