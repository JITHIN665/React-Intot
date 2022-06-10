const express = require("express");
const app = express();
const cors = require("cors");
const mongoose=require("mongoose");
app.use(cors());
app.use(express.json());
const User = require("./models/models")


mongoose.connect("mongodb+srv://JITHINRAJ:Jithin77@cluster0.zwj8d.mongodb.net/intotDB");

app.post("/register",async(req,res)=>{
    console.log(req.body);
    try{
         await User.create({
            Name:req.body.Name,
            email:req.body.email,
            phone:req.body.phone,
            password:req.body.password,
        })
        res.json({status:'ok'})
    }catch(err){
        res.json({status:'error',error:'duplicate email'})
    }
    
})
app.post("/login",async(req,res)=>{
    const user= await User.findOne({email:req.body.email,password:req.body.password})
        
        if(user){
            return  res.json({status:'ok',user:true})
            
        }else{
            res.json({status:'error',user:false})
        }
    })        
       
app.get("/data",async(req,res)=>{
    User.find()
        .then(foundDetails=>res.json(foundDetails))
})

app.listen(3001,function(){
    console.log("express server is running on port 3001");
})



// const express = require("express");
// const app = express();
// const cors = require("cors");
// const mongoose=require("mongoose");
// app.use(cors());
// app.use(express.json());
// const User = require("./models/models")


// mongoose.connect("mongodb+srv://JITHINRAJ:Jithin77@cluster0.zwj8d.mongodb.net/intotDB");

// app.post("/register",async(req,res)=>{
//     console.log(req.body);
//     try{

//          await User.create({
//             Name:req.body.Name,
//             email:req.body.email,
//             phone:req.body.phone,
//             password:req.body.password,
//         })
//         res.json({status:'ok'})
//     }catch(err){
//         res.json({status:'error',error:'duplicate email'})
//     }
    
// })
// app.post("/login",async(req,res)=>{
//     const user= await User.findOne({email:req.body.email,password:req.body.password})
        
//         if(user){
//             return  res.json({status:'ok',user:true})
            
//         }else{
//             res.json({status:'error',user:'false'})
//         }
//     })      
//  app.get("/data",async(req,res)=>{
//         User.find()
//              .then(foundDetails=>res.json(foundDetails))
//     })
       
// app.listen(3001,function(){
//     console.log("express server is running on port 3001");
// })