const { name } = require("ejs");
const path = require("path"); // Add this line
const express= require("express")
const app=express();

const port=8080;

// app.use(express.static("public"));
app.use(express.static(path.join(__dirname,"/public/css")));
// app.use(express.static(path.join(__dirname,"/public/js")));

app.set("view engine","ejs")
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})

app.get("/",(req,res)=>{
   res.render("home.ejs")
})

app.get("/rolldice",(req,res)=>{
    let diceVal=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{num:diceVal})
 })
app.get("/",(req,res)=>{
    res.send("home page it is")
 })

app.get("/:username",(req,res)=>{
    let {username}=req.params;
    const instaData=require("./data.json");
    let data=instaData[username];
    if(data){
        res.render("instagram.ejs",{data});
    }else{
        res.render("error.ejs")
    }


})


