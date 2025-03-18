const express =require("express");
const app= express();
const port =8080;

const path =require("path");
const { v4: uuidv4 } = require('uuid');


app.use(express.urlencoded({extended:true}));

let posts=[
    {   
        id :uuidv4(),
        username:"ganeshShinde",
        content:"i love coding"
    },
    {   
        id :uuidv4(),
        username:"Pranita",
        content:"Love you teacher"
    },
    {   
        id :uuidv4(),
        username:"devansh",
        content:"i love my mama"
    },
    {   
        id :uuidv4(),
        username:"ganeshShinde",
        content:"i love coding"
    }
]

app.get("/",(req,res)=>{
    res.send("server working fine");
})

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts})
})

app.get("/posts/new",(req,res)=>{
    res.render("new");
})

app.post("/posts",(req,res)=>{
    let {username,content}=req.body;
    let id=uuidv4();
    posts.push({id,username,content});
    res.redirect("/posts")
})

app.get("/posts/:id",(req,res)=>{
    let {id} =req.params;
    let post=posts.find((p) => id === p.id);
    res.render("show",{post});
})

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

app.patch("/posts/:id",(req,res)=>{
    let {id}= req.params;
    let newcontent=req.body.content;
    let post=posts.find((p)=>id===p.id);
    post.content =newcontent;
    console.log(post);
    res.send("server working fine");
})

app.listen(port,()=>{
    console.log(`App is listening on port ${port}`)
});
