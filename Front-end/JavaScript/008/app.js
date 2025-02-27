// let arr=[1,2,3,4,5];

// function print(el){
//     console.log(el);
// }
// arr.forEach(print)

// arr.forEach(function (el){
//     console.log(el);
// })

// let student=[
//     {
//         name:"ganesh",
//         marks:90
//     },
//     {
//         name:"ganesh",
//         marks:91
//     },
//     {
//         name:"ganesh",
//         marks:92
//     }
// ]

// arr2.forEach(function (el){
//     console.log(el.marks);

// })

// let num=[1,2,3];
// let newnum=num.map(function(el){
//     return el*2;
// })


// let cgpa =student.map(function(el){
//     return el.marks/10;
// })


// filter 

// let nums=[1,2,3,4,5,2,1,9,5];

// let newnums=nums.filter(function(el){
//     return el%2==0;
// })

//Every 

// Array.every(some function defination or name) 

// let arr5=[20,40,60];

// let ans=arr5.every((el) => el%10 ==0);
// console.log(ans);

// let sum=arr5.reduce((res,el)=>{
//     console.log(res);
//     return res+el
// });
// console.log(sum)
// arr5.every((el)=>el%2==0);

// let min=arr5.reduce((min,el)=>{
//     if(el>min){
//         return min;
//     }
//     else{
//         return el;
//     }
// })
// console.log(min)

// function square(a,b=2){
//     console.log(a*b);
// }


// let data={
//     name:"ganesh",
//     marks:25
// }

// let data2={
//     firstname:"mahesh",

// }

// const datacopy={...data,...data2,..."ramesh"}
// console.log(datacopy)


// function sum(...args){
//     return args.reduce((add,el)=>add+el); 
// }



// let names=["ganesh","mahesh","ram","Girish","abc","xyz","pqz"];

// let[winner,runnerup,...others]=names;
// console.log(...others)


let pune="pune"
const student={
    name:"ganesh",
    lastname:"shinde",
    age:14,
    password:"ganesh@143",
    username:"ganesh.shindee",
    // city:"pune"
    
}

let{username:winner,password:secret,city:place="mumbai"}=student;
// console.log(username)
console.log(winner)
console.log(others)

console.log(secret)
console.log(student)