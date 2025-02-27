let addtask=document.querySelector("button");
let task=document.querySelector("input")
let ul=document.querySelector("ul")
let li=document.querySelectorAll("li")


addtask.addEventListener("click",function (){

    //created list item    
    let item= document.createElement("li");
    item.innerText=task.value;


    // created button and appended
    let delbtn=document.createElement("button");
    delbtn.innerText="Delete"
    delbtn.classList.add("Delete");

    ul.appendChild(item);
    item.appendChild(delbtn);
    task.value="";

    console.log(item.classList)
});

//delete an item
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        // console.log(listItem);
        listItem.remove();
        console.log("Item deleted")
    }
})

//linethrough item
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="LI"){
        // console.log("lis clicked")
        event.target.classList.toggle("strikethrough")
        // console.log(event.target.classList)
    }
})

