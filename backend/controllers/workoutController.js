const mongoose = require("mongoose");
const Schema = require("../models/workoutModel");



//GET all documents
const getWorkouts = async (req, res) => {
  try {
    const user_id = req.user._id
    const workout = await Schema.find( {user_id} ).sort({createdAt:-1});
    res.status(200).json(workout);
  } catch (error) {
    console.error("there is an error", error.message);
    res.status(500).json("internal error occured", error.message);
  }
};

// GET a single document
const getWorkout = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json("there is no such document");
    }

    const workout = await Schema.findById(id)
    
    if (workout) {
      res.status(200).json(workout);
    } else res.status(404).json("error of some type");
  } catch (error) {
    console.error("there is an error", error.message);
    res.status(500).json("internal error occured", error.message);
  }
};

//POST a document
const createWorkout = async (req, res) => {
  try {
    const { title, reps, load } = req.body;
    const user_id  = req.user._id;

    if (!title || !reps || !load) {
      return res.status(400).json({error: "Incomplete data provided" });
    }
    const workout = await Schema.create({
      title,
      reps,
      load,
      user_id
    });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({error:error.message});
  }
};

//UPDATE a document
const updateWorkout = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json("there is no such document");
    }

    const workout = await Schema.findByIdAndUpdate(id, {...req.body });

    if (workout) {
      res.status(200).json(workout);
    } else res.status(400).json("error of some type");
  } catch (error) {
    console.error("there is an error", error.message);
    res.status(500).json("internal error occured", error.message);
  }
};

//DELETE a document
const deleteWorkout = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json("there is no such document");
    }
    const workout = await Schema.findByIdAndDelete(id);
    if (workout) {
      res.status(200).json(workout);
    } else res.status(400).json("error of some type");
  } catch (error) {
    console.error("there is an error", error.message);
    res.status(500).json("internal error occured", error.message);
  }
};
module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
};
