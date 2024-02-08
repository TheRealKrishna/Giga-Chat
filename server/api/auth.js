const express = require('express')
const app = express()
const {body, validationResult} = require('express-validator')
const User = require("../database/models/UserSchema.js")
const errorHandler = require("../handler/errorHandler.js")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

app.post("/signup", body('email').isEmail(), body('password').isLength({min: 8}),body('username').isLength({min:5}), async(req, res)=>{
    try {
        // basic checks
        const errors = validationResult(req)
        if (!errors.isEmpty() && errors.errors[0].path === 'username') {
            return res.status(400).json({success:false,error:'Username must be atleast 5 characters long.'})
        }
        if (!errors.isEmpty() && errors.errors[0].path === 'email') {
            return res.status(400).json({success:false,error:'Invalid email address. Please try again.'})
        }
        if (!errors.isEmpty() && errors.errors[0].path === 'password') {
            return res.status(400).json({success:false,error:'Password must be atleast 8 characters long.'})
        }
        if(req.body.username.includes(" ")){
            return res.status(400).json({success:false,error:'Username cannot contain spaces.'})
        }


        // already exist check
        const usernameCheck = await User.findOne({username:req.body.username})
        if(usernameCheck){
            return res.status(400).json({success:false,error:'Username already taken.'})
        }
        const emailCheck = await User.findOne({email:req.body.email})
        if(emailCheck){
            return res.status(400).json({success:false,error:'An account already exists with that email.'})
        }

        //password hash
        const securePassword = bcrypt.hashSync(req.body.password, 10);

        //user creation
        const user = await User.create({...req.body, password:securePassword});
        await user.save();

        //token creation
        const token = jwt.sign({_id:user._id}, process.env.JWT_SECRET);

        //success response
        return res.json({success:true, authToken:token})
    }
    catch (error) {
        errorHandler(error)
        return res.status(500).json({success:false, error:"An internal server error occured."})
    }
    
})

app.post("/login", body('password').isLength({min: 8}), async(req, res)=>{
    try {
        // basic checks
        const errors = validationResult(req)
          if (!errors.isEmpty() && errors.errors[0].path === 'password') {
            return res.status(400).json({success:false,error:'Password must be atleast 8 characters long.'})
        }

        // user existence check
        let user = await User.findOne({username:req.body.username})
        !user ? user = await User.findOne({email:req.body.username}) : null
        if(!user){
            return res.status(400).json({success:false,error:'Invalid credentials.'})
        }

        //password check
        const passwordCheck = bcrypt.compareSync(req.body.password, user.password)
        if(!passwordCheck){
            return res.status(400).json({success:false,error:'Invalid credentials.'})
        }

        //token creation
        const token = jwt.sign({_id:user._id}, process.env.JWT_SECRET);

        //success response
        return res.json({success:true, authToken:token})
    }
    catch (error) {
        errorHandler(error)
        return res.status(500).json({success:false, error:"An internal server error occured."})
    }
    
})

module.exports=app