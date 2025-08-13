var counterobj ={
    count:1,
    incrementFunc: function(){
            console.log("this === global is ");
            console.log(this===global);
            console.log("count before increment");
            console.log(this.count);
            this.count++;
            console.log("count after increment");
            console.log(this.count);
        
    }
};

console.log("calling incrementFunc from counterobj");
counterobj.incrementFunc();
var x=counterobj.incrementFunc
x()
console.log(counterobj.count)
const obj ={
    firstName:"arfat",
    print : function (){
        console.log(this.firstName);
    }
};
setTimeout(obj.print,100);// idahr pe print ko settimeout bula ra h isley undefined print hoga

