const express = require('express');
const routes = require("./routes/workouts")
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

//middleware
app.use(express.json())
app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})
//connect to mongodb
mongoose.connect(process.env.URI)
.then(() =>{
        //listening to request
        app.listen(process.env.PORT, () =>{
            console.log("listening on port 8080 & connected to mongodb")
})
})
.catch(err => console.log(err))
//routes
app.use("/api/workouts", routes);
