let btns =document.querySelectorAll('button');
console.dir(btns);
for(btn of btns){
    // btns.onclick=sayHello;
    // btns.onclick=sayName;
    // btns.onmouseenter=function(){
    //     console.log("You entered a buttton");
    // }

    // btn.addEventListener("click",sayHello);
    // btn.addEentListener("click",sayName);
    btn.addEventListener("dblclick",function(){
        console.log("Ganesh")
    });
}

// btn.onclick=function(){
//     console.log("Button was clicked")
//     // prompt("Dont click on button")
//     alert("Dont click on button")
// }

function sayHello(){
    alert("hello guys")
}
function sayName(){
    alert("Ganesh ")
}

// btn.onclick=sayHello;