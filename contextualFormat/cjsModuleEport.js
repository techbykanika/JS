
// 'use strict';


console.log(this===global);
// file or module is not bound to global but to export
console.log(this ===exports);
console.log(exports);
console.log(this);

function func(){
    console.log(this);
}
func()