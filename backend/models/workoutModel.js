const {Schema, model} = require("mongoose");

const workoutSchema = new Schema({
    title:{
        type:String,
        required:true
    },

    reps:{
        type:Number,
        required:true
    },
    load:{
        type:Number,
        required:true
    }
},{timestamps:true})

module.exports = model("routine", workoutSchema)