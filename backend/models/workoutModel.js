const {Schema, model} = require("mongoose");

const workoutSchema = new Schema({
    title:{
        type:String,
        require:true
    },

    reps:{
        type:Number,
        require:true
    },
    load:{
        type:Number,
        require:true
    }
},{timestamps:true})

module.exports = model("routine", workoutSchema)