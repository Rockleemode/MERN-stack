const express = require('express');
const Schema = require("../models/workoutModel");
const routes = express.Router();
const {
    getWorkouts,
    getWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout

} = require("../controllers/workoutController")


//GET request
routes.get("/", getWorkouts)

// single GET request
routes.get("/:id", getWorkout)

//POST request
routes.post("/", createWorkout)

//UPDATE request
routes.patch("/:id", updateWorkout)

//DELETE request
routes.delete("/:id", deleteWorkout)


module.exports = routes;