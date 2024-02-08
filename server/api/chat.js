const express = require('express')
const app = express()
const User = require("../database/models/UserSchema.js")
const errorHandler = require("../handler/errorHandler.js")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const Chat = require('../database/models/ChatSchema.js')


app.post("/getContacts", async(req, res)=>{
    try {
        const userId =  jwt.verify(req.headers["auth-token"], process.env.JWT_SECRET)
        const user = await User.findOne({_id:userId._id})
        if(!user){
            return res.status(400).json({success:false,error:'Invalid request.'})
        }

        return res.json({success:true, contacts:user.contacts});
    }
    catch (error) {
        errorHandler(error)
        return res.status(500).json({success:false, error:"An internal server error occured."})
    }
})

app.post("/getUserInfo", async(req, res)=>{
    try {
        const userId =  jwt.verify(req.headers["auth-token"], process.env.JWT_SECRET)
        const user = await User.findOne({_id:userId._id})
        if(!user){
            return res.status(400).json({success:false,error:'Invalid request.'})
        }
        return res.json({success:true, user:{_id:user._id, nickname:user.nickname, username:user.username, email:user.email, profile:user.profile, unreadMessages:user.unreadMessages}});
    }
    catch (error) {
        errorHandler(error)
        return res.status(500).json({success:false, error:"An internal server error occured."})
    }
})

app.post("/getContactInfo", async(req, res)=>{
    try {
        const userId =  jwt.verify(req.headers["auth-token"], process.env.JWT_SECRET)
        const user = await User.findOne({_id:userId._id})
        if(!user){
            return res.status(400).json({success:false,error:'Invalid request.'})
        }
        const contact = await User.findOne({_id:req.body._id})
        if(!contact){
            return res.status(400).json({success:false,error:'Invalid request.'})
        }

        return res.json({success:true, contact:{_id:contact._id, nickname:contact.nickname, username:contact.username, profile:contact.profile}});
    }
    catch (error) {
        errorHandler(error)
        return res.status(500).json({success:false, error:"An internal server error occured."})
    }
})

app.post("/addContact", async(req, res)=>{
    try {
        const userId =  jwt.verify(req.headers["auth-token"], process.env.JWT_SECRET)
        const user = await User.findOne({_id:userId._id})
        if(!user){
            return res.status(400).json({success:false,error:'Invalid request.'})
        }
        const contact = await User.findOne({_id:req.body._id})
        if(!contact){
            return res.status(400).json({success:false,error:'Invalid request.'})
        }   
        if(user.contacts.find((obj) => obj._id.equals(contact._id))){
            await user.contacts.splice(await user.contacts.indexOf(await user.contacts.find((obj) => obj._id.equals(contact._id))), 1);
            await user.contacts.unshift({_id: contact._id});
        }
        else{
            await user.contacts.unshift({_id: contact._id});
        }
        if(contact.contacts.find((obj) => obj._id.equals(user._id))){
            await contact.contacts.splice(await contact.contacts.indexOf(await contact.contacts.find((obj) => obj._id.equals(user._id))), 1);
            await contact.contacts.unshift({_id: user._id});
        }
        else{
            await contact.contacts.unshift({_id: user._id});
        }
        await user.save()
        await contact.save()
        return res.json({success:true, contacts:user.contacts});
    }
    catch (error) {
        errorHandler(error)
        return res.status(500).json({success:false, error:"An internal server error occured."})
    }
})

app.post("/searchContact", async(req, res)=>{
    try {
        const userId =  jwt.verify(req.headers["auth-token"], process.env.JWT_SECRET)
        const userCheck = await User.findOne({_id:userId._id})
        if(!userCheck){
            return res.status(400).json({success:false,error:'Invalid request.'})
        }
        const users = await User.find({nickname:{ "$regex": req.body.nickname, "$options": "i"}}).select(["-password", "-username", "-email", "-contacts"]).find({_id:{$ne:userCheck._id}})
        if(!users){
            return res.status(400).json({success:false,error:'Invalid request.'})
        }
        return res.json({success:true, users:users});
    }
    catch (error) {
        errorHandler(error)
        return res.status(500).json({success:false, error:"An internal server error occured."})
    }
})

app.post("/createChat", async(req, res)=>{
    try {
        const userId = jwt.verify(req.headers["auth-token"], process.env.JWT_SECRET)
        const user = await User.findOne({_id:userId._id})
        if(!user){
            return res.status(400).json({success:false,error:'Invalid request.'})
        }
        const contact = await User.findOne({_id:req.body._id});
        if(!contact){
            return res.status(400).json({success:false,error:'Invalid request.'})
        }
        if(await Chat.findOne({members: { $all : [user._id, contact._id]}})){
            return res.status(400).json({success:false,error:'Invalid request.'})
        }
        const chat = Chat({
            members:[user._id, contact._id],
            messages:[{
                _id: new mongoose.Types.ObjectId(),
                message:req.body.message,
                sender:user._id,
                timeStamp: new Date()
            }]
        })
        if(contact.unreadMessages[user._id]){
            contact.unreadMessages[user._id] += 1;
        }
        else{
            contact.unreadMessages[user._id] = 1;
        }
        contact.markModified('unreadMessages');
        await contact.save();
        await chat.save();
        return res.json({success:true, messages:chat.messages});
    }
    catch (error) {
        errorHandler(error)
        return res.status(500).json({success:false, error:"An internal server error occured."})
    }
})

app.post("/getMessages", async(req, res)=>{
    try {
        const userId = jwt.verify(req.headers["auth-token"], process.env.JWT_SECRET)
        const user = await User.findOne({_id:userId._id})
        if(!user){
            return res.status(400).json({success:false,error:'Invalid request.'})
        }
        const contact = await User.findOne({_id:req.body._id});
        if(!contact){
            return res.status(400).json({success:false,error:'Invalid request.'})
        }
        const chat = await Chat.findOne({members: { $all : [user._id, contact._id]}})
        if(!chat){
            return res.json({success:true, messages:[]});
        }

        delete user.unreadMessages[contact._id];
        user.markModified('unreadMessages');
        await user.save()

        return res.json({success:true, messages:chat.messages});
    }
    catch (error) {
        errorHandler(error)
        return res.status(500).json({success:false, error:"An internal server error occured."})
    }
})

app.post("/addMessage", async(req, res)=>{
    try {
        const userId = jwt.verify(req.headers["auth-token"], process.env.JWT_SECRET)
        const user = await User.findOne({_id:userId._id})
        if(!user){
            return res.status(400).json({success:false,error:'Invalid request.'})
        }
        const contact = await User.findOne({_id:req.body._id});
        if(!contact){
            return res.status(400).json({success:false,error:'Invalid request.'})
        }
        const chat = await Chat.findOne({members: { $all : [user._id, contact._id]}})
        if(!chat){
            return res.status(400).json({success:false,error:'Invalid request.'})
        }
        chat.messages.push({
            _id: new mongoose.Types.ObjectId(),
            message:req.body.message,
            sender:user._id,
            timeStamp: new Date()
        })
        if(contact.unreadMessages[user._id]){
            contact.unreadMessages[user._id] += 1;
        }
        else{
            contact.unreadMessages[user._id] = 1;
        }
        contact.markModified('unreadMessages');
        await contact.save();
        await chat.save();
        return res.json({success:true, messages:chat.messages});
    }
    catch (error) {
        errorHandler(error)
        return res.status(500).json({success:false, error:"An internal server error occured."})
    }
})

module.exports=app