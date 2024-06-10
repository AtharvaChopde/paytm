const express = require("express")
const { userModel } = require("../database/db")
const router = express.Router()


router.get("/",(req,res)=>{
    res.send("hello")
})


router.post("/signup",(req,res)=>{

    const username = req.body.username
    const password = req.body.passowrd
    const email = req.body.email

    try {
        userModel.create({
            username,
            password,
            email
        })
    }

    catch (e){
        res.status(400).json(e)
    }

    res.status(200).json("user added")
})



router.get("/users", async(req,res)=>{

   const data = await userModel.find()

   res.status(200).json(data)

})



module.exports = router