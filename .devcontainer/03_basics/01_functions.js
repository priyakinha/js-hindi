function sayMyName(){
console.log("P");
console.log("R");
console.log("I");
console.log("Y");
console.log("A");
}
// sayMyName();
function addNum(num1,num2){
    //console.log(num1+num2);
    // let result=num1+num2;
    // return result;
    return num1+num2;
}
const res=addNum(8,9);
//console.log(res);

function loginUser(username="ram"){
    // if(username===undefined){  (!username)
    //     console.log("Please enter a username");
    //     return;
    // }
    return `${username} just logged in`
}
//console.log(loginUser());
function calculatePrice(val1,val2,...num1){
    return num1;
}
//console.log(calculatePrice(3,5,7,9));
const User={
    name:"hitesh",
    price:199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`);
}
//handleObject(User);
handleObject({
    name:"priya",
    price:399
})
const mynewArray=[200,400,600,700];
function returnSecondValue(getArray){
    return getArray[1];
}
//console.log(returnSecondValue(mynewArray));
console.log(returnSecondValue([4,6,5,2,8]));