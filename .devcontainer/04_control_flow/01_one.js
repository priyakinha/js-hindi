//if
//< > <= >= != === !==
// const isLogged=true;

// const temp=41;
// if(temp<50){
//     console.log(`${temp} less than 50`);   
// }else{
//     console.log(`${temp} greater than 50`)
// }
// console.log("Always executes");

const balance=1000;
//if(balance>500) console.log("test");

//  if(balance<500){
//     console.log("less than");  
//  }else if(balance<750){
//     console.log("less than 750");
//  }else if(balance<900){
//     console.log("less than 900")
//  }else{
//     console.log("less than 1200");
//  }


// const userLoggedIn=true;
// const debitCard=true;
// const loggedInFromGoogle=false;
// const loggedInFromEmail=true;
// if(userLoggedIn && debitCard){
//     console.log("Allow to buy course");
// }
// if(loggedInFromEmail || loggedInFromGoogle){
//     console.log("User logged in")
// }

//++++++++++++++++++++++ SWITCH CASE ++++++++++++++++++++++++

const month=2;
switch(month){
    case 1: 
    console.log("January");
    break;
    case 2: 
    console.log("February");
    break;
    case 3: 
    console.log("March");
    break;
    case 4: 
    console.log("April");
    break;
    case 5: 
    console.log("May");
    break;
    case 6: 
    console.log("June");
    break;
    default:
        console.log("Default matched");
        break;
}