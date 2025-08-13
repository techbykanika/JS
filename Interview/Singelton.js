class Singelton{
    constructor(age,name){
       if(!Singelton.instance)
       {
        Singelton.instance=this;
        this.age=age;
       this.name=name
       }
        
       else 
       {
        return Singelton.instance
    }
       
    }
    getSingeltion(params) {
        return Singelton.instance
        
    }
    getNameAge(){
        return this.age,this.name;
    }
}
let singelton= new Singelton(24,"kanika")
console.log(singelton)
let singelton2=new Singelton(26,"kanika");
console.log(singelton)
