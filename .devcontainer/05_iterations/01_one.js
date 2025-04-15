//for
for(let idx=0;idx<10;idx++){
const ele=idx;
if(ele==5){
    //console.log("5 is best number");
}
//console.log(ele);
}
//++++++++++++++nested loop+++++++++++++++++++
// for(let i=1;i<=10;i++){
//     //console.log(`Outer loop: ${i}`);
//     for(let j=1;j<=10;j++){
//         //console.log(`Inner loop value: ${j} and inner loop ${i}`);
//         //console.log(i+'*'+j+"="+i*j);
//     }
//     }

//++++++++++++Array+++++++++++++++

    // let myarr=["flash","batman","superman"];
    // for(let i=0;i<myarr.length;i++){
    //     console.log(myarr[i]);
    // }

    //+++++++++break and continue+++++++++++
    for(let i=0;i<=20;i++){
        if(i==5){
            console.log(`Detected 5`);
            continue;
        }
        console.log(`Value of i is ${i}`);
    }
