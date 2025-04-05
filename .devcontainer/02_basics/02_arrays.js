const marvel_heros=["thor","Ironman","spiderman"];
const dc=["superman","flash","batman"];
//marvel_heros.push(dc);
//console.log(marvel_heros[3]);

// const myheros=marvel_heros.concat(dc);
// console.log(myheros);

//spread
// const allheros=[...marvel_heros,...dc];
// console.log(allheros);

const anotherArr=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const realArr=anotherArr.flat(Infinity);
console.log(realArr);
console.log(Array.isArray("Priya"));
console.log(Array.from("Priya"));
console.log(Array.from({
    name:"priya"
}))
let s1=100;
let s2=200;
let s3=300;
console.log(Array.of(s1,s2,s3));
