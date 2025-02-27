// let btn=document.querySelector('button')
// // btn.addEventListener("click",function(event){
// //     console.log(event)
// //     console.log("button clicked")
// // })
// btn.addEventListener("dblclick",function(event){
//     console.log(event)
//     console.log("button clicked")
// })

// let p =document.querySelector('p');
// p.addEventListener("click",function(){
//     console.log("Paragraph was clicked")
// })
// btn.addEventListener("click",function(){
//     let h3=document.querySelector('h1')
//     let randomColor=getRandomColor();
//     h3.innerText=randomColor
//     console.log("color updated")
//     btn.style.backgroundColor= randomColor
//     console.dir(btn.innerText)
//     let divbg=document.querySelector('div')
//     divbg.style.backgroundColor=randomColor
// })

// function getRandomColor(){
//     let red=Math.floor(Math.random()*255)
//     let green=Math.floor(Math.random()*255)
//     let blue=Math.floor(Math.random()*255)
//     let color =`rgb(${red},${green},${blue})`
//     return color;
// }

// let box=document.querySelector('.box')
// box.addEventListener("mouseenter",function(){
//     console.log("Mouse inside box")
// })



//keyboard eventds

// let inp =document.querySelector('input')


// inp.addEventListener("keyup",function(event){
//     console.log("Key : "+event.key)
//     console.log("code: "+event.code)
//     console.log("key was pressup back")
// })

// inp.addEventListener("keydown",function(){
//     console.log("key was pressed")
// })


let form=document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();

    // let username=document.querySelector("#usernames")
    // let password=document.querySelector("#passwords")
    // console.dir(form)
    // console.log(username.value)
    // console.log(password.value)
    // alert("form submitted");
    })


let userr =document.querySelector("#usernames");


// userr.addEventListener("change",function(){

    
//     console.log("submit changed")
//     console.log("changed value = "+ userr.value)
// })

userr.addEventListener("input",function(){
    console.log("input changed")
    console.log("changed value = "+ userr.value)
    let para= document.querySelector("p")
    para.innerText=userr.value
});