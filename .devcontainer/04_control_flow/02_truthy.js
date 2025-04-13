const userEmil=[]
if(userEmil){
    console.log("Got User Email");
}else{
    console.log("Don't have uder Email");
}

const emptyObj={};
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}

//nullish coalescing Operator(??) :null undefined
let val1;
val1=undefined ?? 17;
console.log(val1);

const icePrice=100;
icePrice >=80 ? console.log("more than 80") :console.log("less than 80");