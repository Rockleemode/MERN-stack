const express = require('express');

const routes = express.Router();


//GET request
routes.get("/", async(req, res) =>{
    try{
        res.json({mssg:"get request"})
    }
    catch(error){
        console.error("there is an error")
    }
})

// single GET request
routes.get("/:id", async(req, res) =>{
    try{
        res.json({mssg:"single get request"})
    }
    catch(error){
        console.error("there is an error")
    }
})

//POST request
routes.post("/", async(req, res) =>{
    try{
        res.json({mssg:"post request"})
    }
    catch(error){
        console.error("there is an error")
    }
})

//DELETE request
routes.delete("/:id", async(req, res) =>{
    try{
        res.json({mssg:"delete request"})
    }
    catch(error){
        console.error("there is an error")
    }
})

//UPDATE request
routes.patch("/:id", async(req, res) =>{
    try{
        res.json({mssg:"update request"})
    }
    catch(error){
        console.error("there is an error")
    }
})

module.exports = routes;