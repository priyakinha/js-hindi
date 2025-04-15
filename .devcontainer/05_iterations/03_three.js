//for-of

// ["","",""]
// [{},{},{}]
let arr=[1,2,3,4,5];
// for(let ele of arr){
//     console.log(ele);
// }
const greetings="Hello World";
for(let greet of greetings){
    //console.log(`Each character is ${greet}`);
}
const map=new Map();
map.set('IN',"India");
map.set('USA',"United States of America");
map.set('Fr',"France");
console.log(map);

for(const [key,value] of map){
    console.log(key,':-',value);
}

const myObj={
    'game1':'NFS',
    'game2':'Spiderman'
}
// for(const [key,value] of myObj){
//     console.log(key,":-",value);
// }
 
const myCoding=[
    {
        language:"JavaScript",
        langFile:"js"
    },
    {
        language:"Python",
        langFile:"py"
    },
    {
        language:"java",
        langFile:"java"
    }
]
myCoding.forEach( (val)=>{
console.log(val.language);
})