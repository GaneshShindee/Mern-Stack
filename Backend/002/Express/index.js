const express=require("express") //required a function
const app=express();
// console.dir(app)
let port=8080;
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});

// app.use((req,res)=>{
//     console.log("request recieved");
//     let code="<h2> hello</h2>";
//     res.send(code);
// })

app.get("/",(req,res)=>{
    res.send("You contacted me home");
    console.log("request recieved home");
})

// app.get("/apple",(req,res)=>{
//     res.send("You contacted apple bhai")
//     console.log("request recieved apple");
// })

// app.get("/mango",(req,res)=>{
//     console.log("request recieved mango");
//     res.send("mango")
// })
// app.get("/banana",(req,res)=>{
//     console.log("request recieved banana");
//     res.send("banana")
// })

app.get("/:username/:id",(req,res)=>{
    res.send("You contacted me home");
    console.log(req.params);
})

app.get("/search",(req,res)=>{
    let{q}=req.query;
    console.log(q);
    // res.send("no result")
    res.send(`Search result for the ${q}`)
})