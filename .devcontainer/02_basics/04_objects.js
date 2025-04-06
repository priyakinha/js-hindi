// const my=new Object();
// console.log(my);
const tinder={};
tinder.id="123abc";
tinder.name="Priya";
tinder.loggedIn=false;
//console.log(tinder);
const regularUser={
    email:"priya@gmail.com",
    fullName:{
        usersfullname:{
            firstname:"priya",
            lastname:"kinha"
        }
    }
}
//console.log(regularUser.fullName.usersfullname.firstname);
const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};
//const obj3={obj1,obj2};
//const obj3=Object.assign({},obj1,obj2);
const obj3={...obj1,...obj2};
//console.log(obj3);
// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));
// console.log(Object.entries(tinder));
//console.log(tinder.hasOwnProperty('loggedIn'));

//destructuring
const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}
console.log(course.courseInstructor);
const{courseInstructor: is}=course;
console.log(is);
//json format 
// {
//     "name":"hitesh",
//     "coursename":"js",
//     "price":"free"
// }