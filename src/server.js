// install and import express
const express = require('express');
const path = require('path');
let app = express();
const users = require('./assets/user.json');


// Code here

app.get("/", (req,res)=>{
    return res.sendFile(path.join(__dirname+'/assets/users.html'))
})

app.get('/users',(req,res)=>{
    res.status(200).send(users)
})

app.get('/users/:id',(req,res)=>{
    try {
        let userId = req.params.id;
        // console.log(userId)
        let user = users.filter((e)=>e.id == userId)

        return res.status(200).send(user[0])
    } catch (error) {
        res.send(error)
    }
})

const port = 8000;
app.listen(port, ()=>{
    // console.log("Server running on 8000")
})

// Note: Do not remove this export statement

module.exports = app;
