const { log } = require("console");
const express = require("express")
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override')


app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))

app.set("view engine", "ejs")
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")))

let posts = [
    {
        id: uuidv4(),
        username:"prathap",
        content: "doing well!"

    },
    {
        id: uuidv4(),
        username:"chandana",
        content: "reading books!"

    },
    {
        id: uuidv4(),
        username:"bhaskar",
        content: "shopping in shop"

    },

];

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts})
})

app.get("/posts/new",(req,res)=>{
    res.render("forms.ejs")
})

app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=>id === p.id);
    res.render("show.ejs" , {post})
})

app.get("/posts/:id/edit",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=>id === p.id);
    res.render("edit.ejs" , {post})
})

app.patch("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let newcont = req.body.content;
    let post = posts.find((p)=>id === p.id);
    post.content = newcont;
    console.log(post)   
    res.redirect("/posts")
    
})

app.post("/posts",(req,res)=>{
    let {username , content} = req.body;
    let id = uuidv4();
    posts.push({id,username,content})
    res.redirect("/posts")

})

app.delete("/posts/:id",(req,res)=>{
    let {id} = req.params;
    posts = posts.filter((p)=>id !== p.id);
    res.redirect("/posts")    
})

app.listen(port,()=>{
    console.log("listening to port: 8080")
})