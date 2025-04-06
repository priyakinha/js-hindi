const mySym=Symbol("key1");
const myUser={
    name:"Priya",
    "fullname":"priya kinha",
    age:20,
    [mySym]:"mykey",
    location:"Noida",
    email:"priya@google.com",
    isLogged:false,
    lastLogin:["Monday","Saturday"]
}
// console.log(myUser.email);
// console.log(myUser["fullname"]);
// console.log(myUser[mySym]);
myUser.greetings=function(){
    console.log("hello JS users");
}
console.log(myUser.greetings);
console.log(myUser.greetings());
myUser.greeting2=function(){
    console.log(`Hello the name is ${this.fullname}`);
}
console.log(myUser.greeting2());