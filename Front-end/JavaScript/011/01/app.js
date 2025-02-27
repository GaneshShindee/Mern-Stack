// function one(){
//     return 1;
// }

// function two(){
//     return one()+one();
// }

// function three(){
//     console.log(two()+one());
// }
// three();

// let a=25;
// console.log(a)

// let b=56;
// console.log(b)

// console.log(a+b);

// setTimeout(()=>{
//     console.log("Apna college");
// },2000)

// setTimeout(()=>{
//     console.log("Ganesh Shinde");
// },2000)

// console.log("Hello...")


// let h=document.querySelector("h1")

// function changeColor(color,delay,nextColorChange){
//     setTimeout(()=>{
//         h.style.color=color;
//         if(nextColorChange) nextColorChange();
//     },delay) ;
// }


// changeColor("red",1000,()=>{
//     changeColor("yellow",1000,()=>{
//         changeColor("green",1000),()=>{
//             changeColor("pink",1000,()=>{
//                 changeColor("purple",1000)
//             })
//         };
//     });
// });


// function saveDatadb(data,success,failure){
//     let internetSpeed=Math.floor(Math.random()*10)+1;
//     if(internetSpeed>1){
//         success();
//     }else{
//         failure();
//     }
//     // if(internetSpeed>4){
//     //     console.log("Data saved succesfully");
//     // }else{
//     //     console.log("Data not saved succesfully");
//     // }

// }

// saveDatadb("apna college",
//     ()=>{
//     console.log("your data is stored");
//     saveDatadb("hello word",
//         ()=>{
//             console.log("second data saved");
//             saveDatadb("ganesh",
//                 ()=>{
//                     console.log("data saved now correctly")
//                 },
//                 ()=>{
//                     console.log("data not saved guys");
//                 }
//             );
//         },
//         ()=>{
//             console.log("not saved due to weak connection")
//         }
//     )
//     },
//     ()=>{
//     console.log("weak data connection");
// });


// function saveDatadb(data){
//     return new Promise((resolve,reject) => {
//         let internetSpeed =   Math.floor(Math.random() * 10)+1;
//         if(internetSpeed>4){
//             resolve("data saved");
//         }else{
//             reject("data not saves");
//         }
//     });
// }

// saveDatadb("ganesh")
//     .then((result)=>{
//         console.log("data1 saved"+ result)
//         return saveDatadb("hello world")
//     })
//     .then((result)=>{
//         console.log("saved data 20"+result)
//         return saveDatadb("data 2")
//     })
//     .then((result)=>{
//         console.log("saved data 3"+result)
//     })
//     .catch((result)=>{
//         console.log("data not saved"+result)
//     })


let h=document.querySelector("h1")

function changeColor(color,delay){
    new Promise((resolve)=>{
        setTimeout(()=>{
            h.style.color=color;
            resolve("color changed")
        },delay) ;
    })
}


changeColor("red",1000,()=>{
    changeColor("yellow",1000,()=>{
        changeColor("green",1000),()=>{
            changeColor("pink",1000,()=>{
                changeColor("purple",1000)
            })
        };
    });
});
