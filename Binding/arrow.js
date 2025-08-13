var obj = {
    firstName: "jane",
    friends: ['Tarzan', 'cheeta'],
    loop: function () {
        console.log(this.firstName);
        this.friends.forEach(function (friend) {
            console.log(this.firstName + "knows" + friend);

        });


    },
};


obj.loop()
// this = that for 0bj problem of this becoming global inside the foreach function
var copyOfObj = {
    firstName: "janecopy",
    friends: ["Tarzan", "cheeta"],
    loopcopy: function () {
        console.log(this == global);
        var that = this;
        this.friends.forEach(function (friend) {
            console.log(this == global);
            console.log(that.firstName + "know" + friend);
        });
    },
};

copyOfObj.loopcopy();
// 2 way using bind
var copyOfObjBind = {
    firstName: "janeBind",
    friends: ["tarzan", "cheeta"],
    loopBind: function () {
        console.log(this == global)
        this.friends.forEach(
            function (friend) {
                console.log(this.firstName + "know" + friend)
            }.bind(this)
        );
    },
};
copyOfObjBind.loopBind();
// pass this in for each
var copyOfObjPassThisInForEach = {
    firstName: "janeThisInForEach",
    friends: ["tarzan", "cheeta"],
    loopPassThisInForEach: function () {
        console.log(this == global)
        this.friends.forEach(
            
            function (friend) {
                console.log(this == global);
                console.log(this.firstName + "know" + friend);
            }
            , this);
    },
};
copyOfObjPassThisInForEach.loopPassThisInForEach();
// arrow function is the best way

var objArrowFunction = {
    firstName:"JaneArrow",
    friends:["tarzan","cheeta"],
    loopForArrow: function(){
        console.log("inside the loppforArrow")
        console.log(this==global);
        this.friends.forEach( (friend) =>{
            console.log(this == global);
            console.log(this.firstName + "know" + friend);

        });
    },
};

objArrowFunction.loopForArrow();