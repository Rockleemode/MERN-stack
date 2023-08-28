const express = require('express');
const routes = require("./routes/workouts")
require('dotenv').config();

const app = express();

//middleware
app.use(express.json())
app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})

//routes
app.use("/api/workouts", routes)

//listening to request
app.listen(process.env.PORT)