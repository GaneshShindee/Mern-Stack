// const student ={
//     name:"ganesh",
//     age:25,
//     marks:{
//         english:25,
//         maths:25,
//         science:25
//     },
//     getAvg(){
//         let avg=(this.marks.english+this.marks.maths+this.marks.science)/3;
//         console.log(`${this.name} has average of ${avg}`);
//     }
// }


// function getAvg(){
//     console.log(this)
// }
// console.log(student.getAvg());

// try{
//     console.log(a);
// }
// catch(e){
//     console.log("there is no variable a");
//     console.log("and the error is "+ e)
//     console.log(e);
// }
// // console.log(a);


// const sum=(s,b)=>{
//     console.log(s+b);
// }

// const cube=(n)=>(
//      n*n*n          //implict return statement
// )

// const power=(a,b)=>{
//    return a**b;
// }

// const sum2=(a,b)=> a+b;

// console.log("hi there");


// setTimeout(()=>{
//     console.log(" Apna College")
// },1000)
// console.log("Welcome to ")

// setInterval(()=>{
//     console.log(" Apna College")
// },4000)
// console.log("Welcome to ")


// let id1=setInterval(()=>{
//     console.log(" Apna College")
// },4000)
// console.log("Welcome to ")


// clearInterval(id);



// const student={
//     name:"ganesh",
//     marks:35,
//     prop:this,
//     getvalue:function(){
//         console.log(this);
//         return this.marks          //function scope
//     },
//     getvalue2:()=>{
//         console.log(this);
//         return this.marks;  //global scope //lexical scope
//     },
//     getInfo: function(){
//         setTimeout(()=>{
//             console.log(this)
//         },2000)
//     },
//     getInfo2: function(){
//         setTimeout(function(){
//             console.log(this)   //this is for settimeout for window
//         },2000)
//     }
// }


// const square =(n)=>{
//     return n**2
// }
// console.log(square(5));

// let id=setInterval(()=>{
//     console.log("Hello World")
// },2000)

// console.log(id);

// setTimeout(()=>{
//     clearInterval(id);
//     console.log("cleared interval")
// },11000)


// let arr=[2,3,4,5,7];
// const arrayAverage =(arr)=>{
//     sum=0;
//     for(let i =0;i<arr.length;i++){
//         sum+=arr[i]
//     }
//     console.log(sum/arr.length);
// }
// arrayAverage(arr);


// const isEven=(n)=>{
//     if(n%2==0){
//         console.log(n +" is even");
//     }
//     else{
//         console.log(n+ " not even");
//     }
// }
// isEven(50);


const object={
    message :'hello world!',

    logMessage(){
        console.log(this.message);
    }
}

setTimeout(object.logMessage,1000);