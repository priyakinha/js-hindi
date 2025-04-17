# Projects related to DOM

## project Link
[Click Here] 

# Solution Code

## project 1
```javaScript
let body=document.querySelector("body");
let divall=document.querySelectorAll(".box");
divall.forEach(function(box){
box.addEventListener('click',function(e){
if(e.target.id==='grey'){
    body.style.backgroundColor="rgb(244, 248, 211)";
}
if(e.target.id==='white'){
    body.style.backgroundColor=e.target.id;
}
if(e.target.id==='yellow'){
    body.style.backgroundColor="rgb(142, 125, 190)";
}
if(e.target.id==='blue'){
    body.style.backgroundColor="rgb(166, 214, 214)";
}
});
});

```
