const {globalsym,globalsym2 } = require("./3.SymbolExport.js");
//console.log(sym);
console.log(Symbol.for("kanika"));
console.log(Symbol.keyFor(globalsym));
console.log(Symbol.keyFor(globalsym2));



