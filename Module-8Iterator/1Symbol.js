//symbol value are unique

const { Module, builtinModules } = require("module");

// there are primitve type
let sym= Symbol();
let sym2= Symbol();
Symbol(); // as we havent saved anywhere this is unique and will be lossed
console.log("sym",sym);
console.log("sym2",sym2);
// sym2 will not be equal to sym1 because each and every Symbol is unique
//Symbol is equal to itself
console.log("sym is equal to sym2",sym===sym2);
console.log("sym is equal to sym",sym===sym);

// we can give decription to symbol
let sym3= Symbol("red");
console.log("sym3",sym3);
let sym4= Symbol("red");
console.log("sym4",sym4)
console.log(sym3===sym4);
let globalsym = Symbol.for("kanika");
console.log("globalsymbol",globalsym);
module.exports={
    globalsym,

};