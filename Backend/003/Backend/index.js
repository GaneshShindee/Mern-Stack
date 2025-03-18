const express=require("express");
let app=express();
let port =8080;


app.use(express.urlencoded({extended:true}))

app.get("/register",(req,res)=>{
    let username=req.query;
    res.send(`Welcome get response of ${username} `)
})

app.post("/register",(req,res)=>{
    let {pass}=req.body;
    res.send(`Welcome to post of ${pass}`)
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})