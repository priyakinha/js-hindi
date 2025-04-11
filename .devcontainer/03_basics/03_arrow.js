const user={
    name:"priya",
    price:199,
    welcomeMessage:function(){
        console.log(`${this.name}, welcome to website`);
        console.log(this);
        
    }

}
//user.welcomeMessage();
// user.name="Arun";
// user.welcomeMessage();
//console.log(this);


// function Chai(){
//     let usewrname="priya";
//     console.log(this.username);
// }
// Chai();

// const chai=()=>{
// console.log(this);
// }
// chai();

// const addTwo=(a,b)=>(a+b);
// console.log(addTwo(6,7));
const returnObj=()=>({name:"priya"});
console.log(returnObj( ));