var obj = {
    firstName:"kk",
    print : function (){
        console.log(this.firstName);
    }

};
//setTimeout(obj.print,100);

// var obj2 = {
//     firstName:"kanika",
//     friends :["Tarzan","cheeta"],
//     loop: function(){
//         this.friends.foreach(function(friend){
//             console.log(this.firstName+"konws"+friend+firstName);

//         })
//     }

// }
// setTimeout(obj2.loop,100);

obj.print();
