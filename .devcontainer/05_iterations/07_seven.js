const myNum=[1,2,3,4,5,6,7,8,9,10];
// const newnum=myNum.map((num)=>{
//     return num+10;
// })
// console.log(newnum);

//using for-Each 
// const newnum=[];
// myNum.forEach((num)=>{
//     newnum.push(num+10);
// })
// console.log(newnum);

const newnum=myNum
               .map((num)=>num*10)
               .map((num)=>num+1)
               .filter((num)=>num>40);
console.log(newnum);