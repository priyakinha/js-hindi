const mynums=[1,2,3];
const mytotal=mynums.reduce((acc,curr)=>{
    console.log(`acc:${acc} and curr val ${curr}`);
    return acc+curr
},0);
console.log(mytotal);

const shopping=[
    {
        itemName:"js course",
        price:299
    },
    {
        itemName:"python course",
        price:699
    },
    {
        itemName:"mobile dev course",
        price:1199,
    },
    {
        itemName:"data sciencecourse",
        price:1499,
    },
];
const total=shopping.reduce((acc,item)=>{
    return acc+item.price
},0);
console.log(total);