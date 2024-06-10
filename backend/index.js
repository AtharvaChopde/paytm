const express = require("express");
const { default: mongoose } = require("mongoose");
const { userModel } = require("./database/db");
const app = express()

const port = 3000

main().catch(err => console.log(err));
async function main (){
    await mongoose.connect("mongodb+srv://raghavkaul44:29XZfR6nNVu7xoqR@cluster01win.lpqgoez.mongodb.net/payments_app")
    console.log("mongo connected")
}

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("hello")
})


app.get("/users", async (req,res)=>{
    
   const data =  await userModel.find()


   console.log(data)
    res.status(400).json(data)
    

})


app.post("/signup", async(req,res)=>{

    
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email

    try { await userModel.create({
        username,
        password,
        email
    })
    }
    catch{
        res.status(404).json("error")
    }
    res.status(200).json("userAdded")






})





app.listen(port,()=>{
    console.log("running on " + port)
})



