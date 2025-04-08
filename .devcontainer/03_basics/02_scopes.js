 let a=100;
const b=200;
var c=300;
if(true){
    let a=10;
    const b=20;
    var c=30;
    //console.log("Inner: ",a);
 }
// console.log(a);
// console.log(c);
// console.log(b);
function one(){
    const username="priya";
    function two(){
        const website="youtube";
        console.log(username);
    }
    two();// if dont call it two() function will not execute
}
one();
console.log(addOne(6));
function addOne(num){
    return num+1;
}
console.log(addTwo(7));//hoisting
const addTwo=function(num){
    return num+2;
}